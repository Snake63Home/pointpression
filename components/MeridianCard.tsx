import { getPointsByIds, type Meridian } from "@/data/acupressureData";

type MeridianCardProps = {
  meridian: Meridian;
};

export function MeridianCard({ meridian }: MeridianCardProps) {
  const mainPoints = getPointsByIds(meridian.mainPointIds);

  return (
    <article className="rounded-2xl border border-sage-100 bg-white/90 p-5 shadow-soft">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase text-sage-700">{meridian.element}</p>
          <h3 className="mt-1 text-xl font-black text-ink">{meridian.name}</h3>
        </div>
        <span className="shrink-0 rounded-full bg-clay-100 px-3 py-1 text-xs font-bold text-clay-700">
          {meridian.technique}
        </span>
      </div>

      <div className="mt-4 space-y-4 text-sm leading-6 text-ink/80">
        <div>
          <p className="font-semibold text-ink">Trajet / logique</p>
          <p>{meridian.pathway}</p>
        </div>
        <div>
          <p className="font-semibold text-ink">Signes repères</p>
          <p>{meridian.keySigns.join(" · ")}</p>
        </div>
        <div>
          <p className="mb-2 font-semibold text-ink">Points repères</p>
          <div className="flex flex-wrap gap-2">
            {mainPoints.map((point) => (
              <span className="rounded-full bg-sage-700 px-3 py-1 text-xs font-bold text-white" key={point.id}>
                {point.code}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-ink">Associations utiles</p>
          <p>{meridian.usefulCombinations.join(" · ")}</p>
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-clay-50 p-3 text-sm leading-6 text-ink/78">
        <span className="font-semibold text-clay-700">Précautions : </span>
        {meridian.precautions}
      </div>
    </article>
  );
}
