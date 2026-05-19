"use client";

import { useMemo, useState } from "react";
import { meridians, protocols, syndromes } from "@/data/acupressureData";
import { MeridianCard } from "./MeridianCard";
import { ProtocolCard } from "./ProtocolCard";
import { SyndromeCard } from "./SyndromeCard";

type ClinicalTab = "symptomes" | "syndromes" | "meridiens";

const tabs: Array<{ id: ClinicalTab; label: string; count: number }> = [
  { id: "symptomes", label: "Symptômes", count: protocols.length },
  { id: "syndromes", label: "Syndromes MTC", count: syndromes.length },
  { id: "meridiens", label: "Méridiens", count: meridians.length }
];

export function ClinicalView() {
  const [activeTab, setActiveTab] = useState<ClinicalTab>("symptomes");
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const filteredProtocols = useMemo(
    () =>
      protocols.filter((protocol) =>
        [protocol.title, protocol.context, protocol.objective, protocol.technique]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  const filteredSyndromes = useMemo(
    () =>
      syndromes.filter((syndrome) =>
        [syndrome.title, syndrome.signs.join(" "), syndrome.objective, syndrome.strategy]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  const filteredMeridians = useMemo(
    () =>
      meridians.filter((meridian) =>
        [meridian.name, meridian.element, meridian.keySigns.join(" "), meridian.pathway]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <section className="py-8">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-bold uppercase text-sage-700">Mode Cabinet</p>
          <h2 className="mt-1 text-2xl font-black text-ink sm:text-3xl">
            Antisèche clinique MTC
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-ink/70">
            Protocoles combinés, syndromes fréquents et repères méridiens pour soutenir
            le raisonnement en cabinet.
          </p>
        </div>

        <label className="block w-full lg:max-w-sm">
          <span className="sr-only">Rechercher</span>
          <input
            className="w-full rounded-2xl border border-sage-100 bg-white/86 px-4 py-3 text-sm text-ink shadow-soft outline-none transition placeholder:text-ink/42 focus:border-sage-500 focus:ring-4 focus:ring-sage-200"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Rechercher : foie, sommeil, lombalgie..."
            type="search"
            value={query}
          />
        </label>
      </div>

      <div className="mb-6 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Entrées cabinet">
        {tabs.map((tab) => {
          const selected = activeTab === tab.id;

          return (
            <button
              aria-selected={selected}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition focus:outline-none focus:ring-4 focus:ring-sage-200 ${
                selected ? "bg-sage-700 text-white" : "bg-white/78 text-sage-700 hover:bg-white"
              }`}
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              type="button"
            >
              {tab.label}
              <span className="ml-2 opacity-75">{tab.count}</span>
            </button>
          );
        })}
      </div>

      <div className="space-y-4">
        {activeTab === "symptomes" &&
          filteredProtocols.map((protocol) => (
            <ProtocolCard key={protocol.id} protocol={protocol} />
          ))}

        {activeTab === "syndromes" &&
          filteredSyndromes.map((syndrome) => (
            <SyndromeCard key={syndrome.id} syndrome={syndrome} />
          ))}

        {activeTab === "meridiens" &&
          filteredMeridians.map((meridian) => (
            <MeridianCard key={meridian.id} meridian={meridian} />
          ))}
      </div>

      {((activeTab === "symptomes" && filteredProtocols.length === 0) ||
        (activeTab === "syndromes" && filteredSyndromes.length === 0) ||
        (activeTab === "meridiens" && filteredMeridians.length === 0)) && (
        <div className="rounded-2xl border border-dashed border-sage-200 bg-white/55 p-8 text-center text-sm text-ink/68">
          Aucun résultat pour cette recherche.
        </div>
      )}
    </section>
  );
}
