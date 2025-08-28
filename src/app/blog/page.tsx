import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { Suspense } from "react";

/** ---------- Brand-Design ---------- */
const RG600 = "#1b4d2b"; // Racing Green
const RG300 = "#7ca98e";
const serifClass = "font-serif";
const containerClass = "w-full max-w-6xl mx-auto px-6";

/** ---------- Typen ---------- */
type PostMeta = {
  slug: string;
  title: string;
  date: string;          // ISO-String
  excerpt?: string;
  image?: string;        // optionaler Cover-Pfad (z.B. /images/foo.jpg)
};

/** ---------- Utils ---------- */
const prettify = (s: string) =>
  s.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());

function formatDateDE(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "2-digit" });
}

/** ---------- Datenbeschaffung (Server) ---------- */
async function getLatestPosts(limit = 9): Promise<PostMeta[]> {
  const blogDir = path.join(process.cwd(), "src", "app", "blog");
  const entries = await fs.readdir(blogDir, { withFileTypes: true });
  const slugs = entries.filter(e => e.isDirectory()).map(e => e.name);

  const metas = await Promise.all(
    slugs.map(async (slug) => {
      let title = prettify(slug);
      let excerpt = "";
      let image: string | undefined;
      let date: string | null = null;

      try {
        // bevorzugt meta.ts, sonst page.tsx
        // @ts-ignore dynamic import at runtime in app router
        const maybeMeta = await import(`./${slug}/meta`).catch(() => null);
        // @ts-ignore
        const mod = maybeMeta ?? (await import(`./${slug}/page`).catch(() => null));

        // Varianten:
        // 1) export const postMeta = { title, date, excerpt, image }
        // 2) export const metadata = { title, description, openGraph: { publishedTime, images } }
        // 3) export const published = "YYYY-MM-DD"
        // @ts-ignore
        const pm = mod?.postMeta ?? {};
        // @ts-ignore
        const md = mod?.metadata ?? {};
        title   = pm.title ?? md.title ?? title;
        excerpt = pm.excerpt ?? pm.description ?? md.description ?? "";
        image   =
          pm.image ??
          (Array.isArray(md?.openGraph?.images) ? md.openGraph.images[0] : md?.openGraph?.images) ??
          image;
        date =
          pm.date ??
          pm.published ??
          md?.openGraph?.publishedTime ??
          // einige setzen 'md.alternates.types.article.publishedTime' o.ä. – hier bewusst simpel
          null;
      } catch {
        // ignorieren, wir fallen auf Ordnermtime zurück
      }

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

  metas.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return metas.slice(0, limit);
}

export const revalidate = 3600;

/** ---------- Seite (Server) ---------- */
export default async function BlogIndexPage() {
  const posts = await getLatestPosts(9);

  return (
    <div className="bg-white text-slate-900">
      {/* Hero (on-brand) */}
      <section className="relative overflow-hidden px-6 py-20 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: `linear-gradient(120deg, ${RG600} 0%, ${RG300} 60%)`,
            opacity: .12,
          }}
        />
        <h1 className={`text-4xl md:text-6xl tracking-tight ${serifClass}`}>
          <span className="italic font-bold">findbar:</span> Neueste Artikel
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Sichtbarkeit, die wirkt. Hier findest du die letzten Beiträge – sauber strukturiert, leserfreundlich und im Markenstil.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm">
          <span className="font-medium" style={{ color: RG600 }}>Aktuell</span>
          <span className="opacity-60">Die 9 neuesten Veröffentlichungen</span>
        </div>
      </section>

      {/* Grid */}
      <section className="py-6">
        <div className={containerClass}>
          <Suspense fallback={<div className="py-10 text-center text-slate-500">Lade Artikel…</div>}>
            <BlogGrid posts={posts} />
          </Suspense>
        </div>
      </section>
    </div>
  );
}

/** ---------- Präsentation (Client) ---------- */
"use client";
import { motion } from "framer-motion";
import { ArrowRight, Image as ImageIcon } from "lucide-react";

function BlogGrid({ posts }: { posts: PostMeta[] }) {
  if (!posts?.length) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
        <p className="text-slate-600">Noch keine Blogartikel gefunden.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((p, i) => (
        <motion.article
          key={p.slug}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.04 }}
          className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          {/* Cover */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-50">
            {p.image ? (
              // bewusst <img>, falls du Next/Image nicht nutzt
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            ) : (
              <div
                className="flex h-full w-full items-center justify-center"
                style={{ background: `linear-gradient(90deg, ${RG300}22, ${RG600}22)` }}
              >
                <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white/70 px-3 py-1.5 text-xs text-slate-600 backdrop-blur">
                  <ImageIcon className="h-4 w-4" />
                  Kein Cover
                </div>
              </div>
            )}
            {/* zarter Innenrand */}
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
          </div>

          {/* Content */}
          <div className="p-5">
            <time className="text-xs uppercase tracking-wide text-slate-500">
              {formatDateDE(p.date)}
            </time>
            <h2 className={`mt-1 text-lg font-semibold leading-snug ${serifClass}`}>
              {p.title}
            </h2>
            {p.excerpt ? (
              <p className="mt-2 line-clamp-3 text-sm text-slate-600">{p.excerpt}</p>
            ) : null}

            <Link
              href={`/blog/${p.slug}`}
              className="mt-4 inline-flex items-center text-sm font-medium"
              style={{ color: RG600 }}
              aria-label={`Weiterlesen: ${p.title}`}
            >
              Weiterlesen
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
