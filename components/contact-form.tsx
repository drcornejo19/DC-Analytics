"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const solutionOptions = [
  "Automatización de procesos",
  "CRM de ventas a medida",
  "Sitio web o sistema empresarial",
  "Dashboard e indicadores",
  "Asistente con IA o chatbot",
  "Integración entre herramientas",
  "Todavía no estoy seguro",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      const data = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(data.message ?? "No pudimos enviar el mensaje.");

      setStatus("success");
      setMessage("Mensaje enviado. Te responderemos a la brevedad.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Ocurrió un error inesperado.");
    }
  }

  const fieldClass =
    "min-h-12 w-full rounded-xl border border-white/10 bg-[#0b1624] px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10";

  return (
    <form onSubmit={handleSubmit} className="card grid gap-5 p-6 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Nombre y apellido *
          <input className={fieldClass} name="name" type="text" autoComplete="name" minLength={2} required placeholder="Tu nombre" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Empresa
          <input className={fieldClass} name="company" type="text" autoComplete="organization" placeholder="Nombre de la empresa" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Email *
          <input className={fieldClass} name="email" type="email" autoComplete="email" required placeholder="nombre@empresa.com" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Teléfono
          <input className={fieldClass} name="phone" type="tel" autoComplete="tel" placeholder="+54 9 ..." />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-slate-200">
        Tipo de solución *
        <select className={fieldClass} name="solution" required defaultValue="">
          <option value="" disabled>Seleccioná una opción</option>
          {solutionOptions.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
      </label>

      <label className="grid gap-2 text-sm font-semibold text-slate-200">
        Contanos qué necesitás *
        <textarea className={`${fieldClass} min-h-36 resize-y py-3`} name="message" minLength={10} maxLength={3000} required placeholder="Describí brevemente el proceso, problema u objetivo de tu empresa." />
      </label>

      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />

      <button className="button button-primary w-full sm:w-fit" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Enviando..." : "Enviar consulta"}
        <span aria-hidden="true">→</span>
      </button>

      <div aria-live="polite" className={`min-h-6 text-sm ${status === "success" ? "text-emerald-400" : status === "error" ? "text-red-400" : "text-slate-400"}`}>
        {message}
      </div>
    </form>
  );
}
