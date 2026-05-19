import { globalPrecautions, safetyNotice } from "@/data/acupressureData";

export function SafetyNotice() {
  return (
    <aside className="rounded-2xl border border-clay-100 bg-white/84 p-4 text-sm leading-6 text-ink shadow-soft sm:p-5">
      <div className="mb-2 flex items-center gap-2 font-semibold text-clay-700">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-clay-100">!</span>
        Cadre professionnel
      </div>
      <p>{safetyNotice}</p>
      <ul className="mt-4 space-y-2">
        {globalPrecautions.map((precaution) => (
          <li className="flex gap-2" key={precaution}>
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay-500" />
            <span>{precaution}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
