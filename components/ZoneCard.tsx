import type { LearningEntry } from "@/data/acupressureData";
import { ZoneIcon } from "./ZoneIcon";

type ZoneCardProps = {
  zone: LearningEntry;
  isSelected: boolean;
  onSelect: (zoneId: string) => void;
};

export function ZoneCard({ zone, isSelected, onSelect }: ZoneCardProps) {
  return (
    <button
      aria-pressed={isSelected}
      className={`group flex min-h-32 w-full flex-col items-start justify-between rounded-2xl border p-4 text-left transition duration-200 hover:-translate-y-0.5 hover:shadow-soft focus:outline-none focus:ring-4 focus:ring-sage-200 ${
        isSelected
          ? "border-sage-500 bg-sage-50 shadow-soft"
          : "border-white/80 bg-white/78"
      }`}
      onClick={() => onSelect(zone.id)}
      type="button"
    >
      <ZoneIcon icon={zone.icon} />
      <span className="mt-4 rounded-full bg-white/78 px-2.5 py-1 text-xs font-bold uppercase text-sage-700">
        {zone.type === "zone" ? "zone" : "symptôme"}
      </span>
      <span className="mt-3 text-lg font-bold text-ink">{zone.name}</span>
      <span className="mt-2 text-sm leading-5 text-ink/70">{zone.shortDescription}</span>
    </button>
  );
}
