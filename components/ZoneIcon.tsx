import type { LearningEntry } from "@/data/acupressureData";

type ZoneIconProps = {
  icon: LearningEntry["icon"];
};

const iconLabels: Record<string, string> = {
  head: "Tête",
  neck: "Nuque",
  shoulders: "Épaules",
  back: "Dos",
  "lower-back": "Lombaires",
  digestion: "Digestion",
  stress: "Stress",
  sleep: "Sommeil",
  hands: "Mains",
  feet: "Pieds"
};

export function ZoneIcon({ icon }: ZoneIconProps) {
  return (
    <span
      aria-label={iconLabels[icon]}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-100 text-sage-700"
      role="img"
    >
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
        {icon === "head" && (
          <>
            <path d="M12 4a5 5 0 0 0-5 5v3.2c0 1 .4 2 1.1 2.7l1.1 1.1v2.5h5.6V16l1.1-1.1A3.8 3.8 0 0 0 17 12.2V9a5 5 0 0 0-5-5Z" />
            <path d="M9.5 10.2h.1M14.4 10.2h.1M10 13.5c1.2.7 2.8.7 4 0" />
          </>
        )}
        {icon === "neck" && (
          <>
            <path d="M8.5 4.5c1.7 1.1 5.3 1.1 7 0" />
            <path d="M9 5.5v5.2c0 1.4-.7 2.8-1.8 3.7L6 15.5" />
            <path d="M15 5.5v5.2c0 1.4.7 2.8 1.8 3.7l1.2 1.1" />
            <path d="M7 19c3.2-1.3 6.8-1.3 10 0" />
          </>
        )}
        {icon === "back" && (
          <>
            <path d="M12 4v16" />
            <path d="M8 6c2.3 1.6 5.7 1.6 8 0" />
            <path d="M7 12c2.8 1.6 7.2 1.6 10 0" />
            <path d="M8 18c2.3-1.3 5.7-1.3 8 0" />
          </>
        )}
        {icon === "lower-back" && (
          <>
            <path d="M8 5c1.9 2.5 6.1 2.5 8 0" />
            <path d="M7.5 10c3 2 6 2 9 0" />
            <path d="M6.5 18c3.4-2.7 7.6-2.7 11 0" />
            <path d="M12 7v7" />
          </>
        )}
        {icon === "digestion" && (
          <>
            <path d="M8 5v8a4 4 0 0 0 8 0V9a2 2 0 0 0-4 0v4" />
            <path d="M8 18c2.7 1.3 5.3 1.3 8 0" />
          </>
        )}
        {icon === "stress" && (
          <>
            <path d="M12 5v3M12 16v3M5 12h3M16 12h3" />
            <path d="M8.5 8.5 6.4 6.4M15.5 8.5l2.1-2.1M8.5 15.5l-2.1 2.1M15.5 15.5l2.1 2.1" />
            <circle cx="12" cy="12" r="2.8" />
          </>
        )}
        {icon === "sleep" && (
          <>
            <path d="M17.5 15.2A7 7 0 0 1 8.8 6.5a7 7 0 1 0 8.7 8.7Z" />
            <path d="M15 5h4l-4 4h4" />
          </>
        )}
        {icon === "hands" && (
          <>
            <path d="M8 13V7.5a1.2 1.2 0 0 1 2.4 0V12" />
            <path d="M10.4 12V6.5a1.2 1.2 0 0 1 2.4 0V12" />
            <path d="M12.8 12V8a1.2 1.2 0 0 1 2.4 0v6" />
            <path d="M8 13.5 6.7 12a1.2 1.2 0 0 0-1.8 1.5l3 4.2A4.5 4.5 0 0 0 11.6 20h1.2a4.4 4.4 0 0 0 4.4-4.4V11a1.2 1.2 0 0 0-2.4 0" />
          </>
        )}
        {icon === "feet" && (
          <>
            <path d="M9.5 4.5c2.5 0 3.5 3.2 3.5 6.2 0 3.6-1.5 6.8-4.1 6.8-2.1 0-3.4-1.6-3.4-3.8 0-3.9 1.5-9.2 4-9.2Z" />
            <path d="M15.5 7c1.9 0 3 2.8 3 5.6 0 2.7-1 5-3 5-1.4 0-2.4-1-2.6-2.4" />
          </>
        )}
      </svg>
    </span>
  );
}
