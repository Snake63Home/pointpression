"use client";

import { useState } from "react";
import { ClinicalView } from "@/components/ClinicalView";
import { LearningView } from "@/components/LearningView";
import { ModeSwitch } from "@/components/ModeSwitch";
import { SafetyNotice } from "@/components/SafetyNotice";
import type { PracticeMode } from "@/data/acupressureData";

export default function Home() {
  const [mode, setMode] = useState<PracticeMode>("learning");

  function handleModeChange(nextMode: PracticeMode) {
    setMode(nextMode);
    window.setTimeout(() => {
      document.getElementById("mode-content")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
      <header className="flex items-center justify-between py-3">
        <a className="text-lg font-black text-ink" href="#">
          PointPression
        </a>
        <button
          className="rounded-full bg-white/75 px-3 py-1 text-xs font-semibold text-sage-700 transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-sage-200"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          type="button"
        >
          Choix du mode
        </button>
      </header>

      <section className="grid items-center gap-8 py-10 md:grid-cols-[1.05fr_0.95fr] md:py-14">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-sage-100 px-4 py-2 text-sm font-semibold text-sage-700">
            Antisèche MTC locale, sans API ni compte
          </p>
          <h1 className="text-4xl font-black leading-tight text-ink sm:text-5xl lg:text-6xl">
            PointPression V2
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/74">
            Passez d'un apprentissage simple des points essentiels à une vue cabinet
            pensée pour une praticienne : protocoles, syndromes MTC, méridiens et précautions.
          </p>

          <div className="mt-7">
            <ModeSwitch mode={mode} onModeChange={handleModeChange} />
          </div>
        </div>

        <div id="securite" className="md:justify-self-end">
          <SafetyNotice />
        </div>
      </section>

      <section id="mode-content">
        {mode === "learning" ? <LearningView /> : <ClinicalView />}
      </section>

      <footer className="mt-auto border-t border-sage-100 py-6 text-sm text-ink/62">
        <p>
          PointPression V2 reste une application statique : toutes les données sont locales
          et l'outil accompagne la pratique sans remplacer le raisonnement clinique.
        </p>
      </footer>
    </main>
  );
}
