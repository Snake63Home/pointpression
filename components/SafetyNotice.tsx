import { medicalSafetyNotice } from "@/data/acupressureData";

export function SafetyNotice() {
  return (
    <aside className="rounded-2xl border border-clay-100 bg-white/82 p-4 text-sm leading-6 text-ink shadow-soft sm:p-5">
      <div className="mb-2 flex items-center gap-2 font-semibold text-clay-700">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-clay-100">!</span>
        Sécurité médicale
      </div>
      <p>{medicalSafetyNotice}</p>
    </aside>
  );
}
