export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#inicio" aria-label="DC Analytics, volver al inicio" className="inline-flex items-center gap-3">
      <span className="grid h-11 w-11 place-items-center rounded-xl border border-blue-400/30 bg-[#0d1927] shadow-[0_10px_30px_rgba(37,99,255,.18)]" aria-hidden="true">
        <span className="text-sm font-black tracking-[-0.08em] text-white">D<span className="text-blue-500">C</span></span>
      </span>
      {!compact && (
        <span className="leading-none">
          <strong className="block text-base tracking-tight text-white">DC <span className="text-[#3b82ff]">ANALYTICS</span></strong>
          <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">Automatización e IA</span>
        </span>
      )}
    </a>
  );
}
