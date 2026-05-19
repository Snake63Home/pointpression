"use client";

import { useMemo, useState } from "react";
import { getPointsByIds, learningMode } from "@/data/acupressureData";
import { PointCard } from "./PointCard";
import { ZoneCard } from "./ZoneCard";

export function LearningView() {
  const [selectedEntryId, setSelectedEntryId] = useState(learningMode[0]?.id ?? "");

  const selectedEntry = useMemo(
    () => learningMode.find((entry) => entry.id === selectedEntryId) ?? learningMode[0],
    [selectedEntryId]
  );

  const selectedPoints = useMemo(
    () => getPointsByIds(selectedEntry?.pointIds ?? []),
    [selectedEntry]
  );

  function handleSelect(entryId: string) {
    setSelectedEntryId(entryId);
    window.setTimeout(() => {
      document.getElementById("learning-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  }

  return (
    <section className="py-8">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase text-sage-700">Mode Apprentissage</p>
          <h2 className="mt-1 text-2xl font-black text-ink sm:text-3xl">
            Zones et symptômes courants
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-ink/70">
            Une vue volontairement courte avec les points essentiels, leurs localisations,
            la stimulation et les précautions.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {learningMode.map((entry) => (
          <ZoneCard
            isSelected={selectedEntry?.id === entry.id}
            key={entry.id}
            onSelect={handleSelect}
            zone={entry}
          />
        ))}
      </div>

      <div id="learning-results" className="mt-8 rounded-3xl bg-white/48 p-4 ring-1 ring-white/70 sm:p-6 lg:p-8">
        <div className="mb-6 max-w-3xl">
          <p className="text-sm font-bold uppercase text-sage-700">Sélection</p>
          <h3 className="mt-2 text-3xl font-black text-ink">{selectedEntry?.name}</h3>
          <p className="mt-3 text-base leading-7 text-ink/74">{selectedEntry?.shortDescription}</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {selectedPoints.map((point) => (
            <PointCard key={point.id} point={point} role="reference" />
          ))}
        </div>
      </div>
    </section>
  );
}
