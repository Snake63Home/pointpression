import type { PracticeMode } from "@/data/acupressureData";

type ModeSwitchProps = {
  mode: PracticeMode;
  onModeChange: (mode: PracticeMode) => void;
};

const modes: Array<{ id: PracticeMode; label: string; description: string }> = [
  {
    id: "learning",
    label: "Mode Apprentissage",
    description: "Zones, symptômes courants et points essentiels."
  },
  {
    id: "clinical",
    label: "Mode Cabinet",
    description: "Protocoles, syndromes MTC et méridiens."
  }
];

export function ModeSwitch({ mode, onModeChange }: ModeSwitchProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2" role="radiogroup" aria-label="Choix du mode">
      {modes.map((item) => {
        const selected = mode === item.id;

        return (
          <button
            aria-checked={selected}
            className={`rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-soft focus:outline-none focus:ring-4 focus:ring-sage-200 ${
              selected ? "border-sage-500 bg-sage-50 shadow-soft" : "border-white/80 bg-white/78"
            }`}
            key={item.id}
            onClick={() => onModeChange(item.id)}
            role="radio"
            type="button"
          >
            <span className="flex items-center gap-3">
              <span className={`h-4 w-4 rounded-full border ${selected ? "border-sage-700 bg-sage-700" : "border-sage-300 bg-white"}`} />
              <span className="text-base font-black text-ink">{item.label}</span>
            </span>
            <span className="mt-2 block text-sm leading-6 text-ink/68">{item.description}</span>
          </button>
        );
      })}
    </div>
  );
}
