// /src/app/blog/page.tsx
import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";

type PostMeta = {
  slug: string;
  title: string;
  date: string;        // ISO date string
  excerpt?: string;
};

// Helper: make a nice title from a slug if none is provided
const prettify = (s: string) =>
  s.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());

async function getLatestPosts(limit = 9): Promise<PostMeta[]> {
  const blogDir = path.join(process.cwd(), "src", "app", "blog");
  const entries = await fs.readdir(blogDir, { withFileTypes: true });

  const slugs = entries.filter(e => e.isDirectory()).map(e => e.name);

  const metas = await Promise.all(
    slugs.map(async (slug) => {
      let title = prettify(slug);
      let excerpt = "";
      let date: string | null = null;

      // Try to read metadata from either ./<slug>/meta or ./<slug>/page
      try {
        // Prefer a dedicated meta.ts if present
        // @ts-ignore - dynamic import at runtime
        const maybeMeta = await import(/* webpackMode: "lazy" */ `./${slug}/meta`).catch(() => null);
        // @ts-ignore - fallback to reading from the page module
        const mod = maybeMeta ?? (await import(/* webpackMode: "lazy" */ `./${slug}/page`));

        // We accept several shapes to keep it flexible
        // 1) export const postMeta = { title, date, excerpt }
        // 2) export const metadata = { title, description, openGraph: { publishedTime } }
        // 3) export const published = "YYYY-MM-DD"
        // @ts-ignore
        const pm = mod?.postMeta ?? {};
        // @ts-ignore
        const md = mod?.metadata ?? {};
        title = pm.title ?? md.title ?? title;
        excerpt = pm.excerpt ?? pm.description ?? md.description ?? "";
        date =
          pm.date ??
          pm.published ??
          // common place to put article date in Next metadata
          md?.openGraph?.publishedTime ??
          null;
      } catch {
        // ignore – we'll fall back to folder mtime
      }

      // Fallback date = folder modified time (so sorting still works)
      if (!date) {
        try {
          const st = await fs.stat(path.join(blogDir, slug));
          date = st.mtime.toISOString();
        } catch {
          date = new Date(0).toISOString();
        }
      }

      return { slug, title, excerpt, date };
    })
  );

  metas.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return metas.slice(0, limit);
}

export const revalidate = 3600; // ISR: re-build the list hourly

export default async function BlogIndexPage() {
  const posts = await getLatestPosts(9);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Blog</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="block rounded-2xl border p-5 hover:shadow-lg transition"
          >
            <time className="text-sm opacity-70">
              {new Date(p.date).toLocaleDateString()}
            </time>
            <h2 className="text-xl font-medium mt-1">{p.title}</h2>
            {p.excerpt ? (
              <p className="mt-2 text-sm opacity-80">
                {p.excerpt.length > 160 ? p.excerpt.slice(0, 157) + "…" : p.excerpt}
              </p>
            ) : null}
          </Link>
        ))}
      </div>
    </div>
  );
}
