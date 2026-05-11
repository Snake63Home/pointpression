"use client";

import { useMemo, useState } from "react";
import { PointCard } from "@/components/PointCard";
import { SafetyNotice } from "@/components/SafetyNotice";
import { ZoneCard } from "@/components/ZoneCard";
import { acupressurePoints, getPointById, painZones } from "@/data/acupressureData";

export default function Home() {
  const [selectedZoneId, setSelectedZoneId] = useState<string | null>(null);

  const selectedZone = useMemo(
    () => painZones.find((zone) => zone.id === selectedZoneId) ?? null,
    [selectedZoneId]
  );

  const selectedPoints = useMemo(() => {
    if (!selectedZone) {
      return [];
    }

    return selectedZone.pointIds
      .map((pointId) => getPointById(pointId))
      .filter((point): point is (typeof acupressurePoints)[number] => Boolean(point));
  }, [selectedZone]);

  function handleStart() {
    document.getElementById("zones")?.scrollIntoView({ behavior: "smooth" });
  }

  function handleSelectZone(zoneId: string) {
    setSelectedZoneId(zoneId);
    window.setTimeout(() => {
      document.getElementById("resultats")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
      <header className="flex items-center justify-between py-3">
        <a className="text-lg font-black text-ink" href="#">
          PointPression
        </a>
        <span className="rounded-full bg-white/75 px-3 py-1 text-xs font-semibold text-sage-700">
          Bien-être
        </span>
      </header>

      <section className="grid items-center gap-8 py-10 md:grid-cols-[1.05fr_0.95fr] md:py-16">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-sage-100 px-4 py-2 text-sm font-semibold text-sage-700">
            Acupression simple, sans compte et sans API
          </p>
          <h1 className="text-4xl font-black leading-tight text-ink sm:text-5xl lg:text-6xl">
            Où avez-vous mal ?
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/74">
            Sélectionnez une zone du corps ou un besoin du moment. PointPression vous propose
            quelques points d'acupression à stimuler, avec des indications simples et des
            précautions claires.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              className="rounded-full bg-sage-700 px-6 py-3 text-base font-bold text-white shadow-soft transition hover:bg-sage-900 focus:outline-none focus:ring-4 focus:ring-sage-200"
              onClick={handleStart}
              type="button"
            >
              Commencer
            </button>
            <a
              className="rounded-full border border-sage-200 bg-white/75 px-6 py-3 text-center text-base font-bold text-sage-700 transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-sage-200"
              href="#securite"
            >
              Lire l'avertissement
            </a>
          </div>
        </div>

        <div id="securite" className="md:justify-self-end">
          <SafetyNotice />
        </div>
      </section>

      <section id="zones" className="py-8">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-black text-ink sm:text-3xl">Choisissez une zone</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-ink/70">
              Les cartes ci-dessous utilisent uniquement des données locales incluses dans le projet.
            </p>
          </div>
          {selectedZone && (
            <button
              className="self-start rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-sage-700 transition hover:bg-white"
              onClick={() => setSelectedZoneId(null)}
              type="button"
            >
              Réinitialiser
            </button>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {painZones.map((zone) => (
            <ZoneCard
              isSelected={selectedZoneId === zone.id}
              key={zone.id}
              onSelect={handleSelectZone}
              zone={zone}
            />
          ))}
        </div>
      </section>

      <section id="resultats" className="py-10">
        {selectedZone ? (
          <div className="rounded-3xl bg-white/48 p-4 ring-1 ring-white/70 sm:p-6 lg:p-8">
            <div className="mb-6 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-wide text-sage-700">Résultat</p>
              <h2 className="mt-2 text-3xl font-black text-ink">{selectedZone.name}</h2>
              <p className="mt-3 text-base leading-7 text-ink/74">
                {selectedZone.shortDescription}
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {selectedPoints.map((point) => (
                <PointCard key={point.id} point={point} />
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-sage-200 bg-white/45 p-8 text-center">
            <h2 className="text-2xl font-black text-ink">Vos points apparaîtront ici</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-ink/70">
              Cliquez sur une zone douloureuse pour afficher une sélection de points
              d'acupression, leurs emplacements et leurs précautions.
            </p>
          </div>
        )}
      </section>

      <footer className="mt-auto border-t border-sage-100 py-6 text-sm text-ink/62">
        <p>
          PointPression est un MVP éducatif statique. Les informations sont stockées localement
          dans le projet et ne remplacent jamais un avis médical.
        </p>
      </footer>
    </main>
  );
}
