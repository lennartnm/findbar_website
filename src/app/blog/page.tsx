// /src/app/blog/page.tsx
import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";

type PostMeta = {
  slug: string;
  title: string;
  date: string;        // ISO date string
  excerpt?: string;
  image?: string;      // optionales Cover
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
      let image: string | undefined;

      // Try to read metadata from either ./<slug>/meta or ./<slug>/page
      try {
        // Prefer a dedicated meta.ts if present
        // @ts-ignore - dynamic import at runtime
        const maybeMeta = await import(/* webpackMode: "lazy" */ `./${slug}/meta`).catch(() => null);
        // @ts-ignore - fallback to reading from the page module
        const mod = maybeMeta ?? (await import(/* webpackMode: "lazy" */ `./${slug}/page`).catch(() => null));

        // We accept several shapes to keep it flexible
        // 1) export const postMeta = { title, date, excerpt, image }
        // 2) export const metadata = { title, description, openGraph: { publishedTime, images } }
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

        // Bild aus pm.image oder aus openGraph.images ziehen
        // images kann string | string[] | {url:string}[] sein
        let ogImages = md?.openGraph?.images as any;
        if (!image) {
          if (pm.image) image = pm.image;
          else if (typeof ogImages === "string") image = ogImages;
          else if (Array.isArray(ogImages) && ogImages.length > 0) {
            const first = ogImages[0];
            image = typeof first === "string" ? first : first?.url;
          }
        }
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

      return { slug, title, excerpt, date, image };
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
    <div className="w-full max-w-4xl mx-auto px-6 py-12">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight font-serif">
          Der findbar Blog
        </h1>
        <p className="mt-2 text-slate-600">
          Relevante Insights und Themen rund um B2B Marketing und B2B Sales für dich aufbereitet.
        </p>
      </header>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition"
          >
            {/* Cover */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-50">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-r from-emerald-100 to-emerald-50">
                  <span className="rounded-md border border-emerald-200 bg-white/80 px-2 py-1 text-xs text-slate-600">
                    Kein Cover
                  </span>
                </div>
              )}
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
            </div>

            {/* Text */}
            <div className="p-5">
              <time className="text-xs uppercase tracking-wide text-slate-500">
                {new Date(p.date).toLocaleDateString("de-DE", {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                })}
              </time>
              <h2 className="text-lg font-semibold mt-1 leading-snug">
                {p.title}
              </h2>
              {p.excerpt ? (
                <p className="mt-2 text-sm text-slate-600 line-clamp-3">
                  {p.excerpt}
                </p>
              ) : null}
              <span className="sr-only">Weiterlesen: {p.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
