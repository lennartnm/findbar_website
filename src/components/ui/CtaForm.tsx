'use client';

import { useState, FormEvent } from 'react';

export default function CtaForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // hier könntest du fetch('/api/contact', { method: 'POST', body: ... }) aufrufen
    setSubmitted(true);
  }

  return (
    <form className="mx-auto grid max-w-xl gap-3 text-left" onSubmit={onSubmit}>
      <label className="text-sm">
        Name
        <input required name="name" className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2" placeholder="Max Mustermann" />
      </label>
      <label className="text-sm">
        Telefon
        <input required name="phone" className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2" placeholder="+49 …" />
      </label>
      <label className="text-sm">
        E-Mail
        <input required type="email" name="email" className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2" placeholder="max@firma.de" />
      </label>

      <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-700 to-emerald-500 px-4 py-2 font-semibold text-white shadow-sm" aria-label="Demo anfordern">
        Demo anfordern
      </button>

      {submitted && (
        <p className="text-sm text-emerald-700 mt-2">Danke! Wir melden uns zeitnah.</p>
      )}
    </form>
  );
}
