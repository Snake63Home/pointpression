import { getPointsByIds, type Syndrome } from "@/data/acupressureData";

type SyndromeCardProps = {
  syndrome: Syndrome;
};

export function SyndromeCard({ syndrome }: SyndromeCardProps) {
  const mainPoints = getPointsByIds(syndrome.mainPointIds);
  const secondaryPoints = getPointsByIds(syndrome.secondaryPointIds);

  return (
    <article className="rounded-2xl border border-sage-100 bg-white/90 p-5 shadow-soft">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase text-sage-700">Syndrome MTC</p>
          <h3 className="mt-1 text-xl font-black text-ink">{syndrome.title}</h3>
        </div>
        <span className="shrink-0 rounded-full bg-sage-100 px-3 py-1 text-xs font-bold text-sage-700">
          {syndrome.technique}
        </span>
      </div>

      <div className="mt-4 grid gap-4 text-sm leading-6 text-ink/80 md:grid-cols-2">
        <div>
          <p className="font-semibold text-ink">Signes principaux</p>
          <p>{syndrome.signs.join(" · ")}</p>
        </div>
        <div>
          <p className="font-semibold text-ink">Objectif</p>
          <p>{syndrome.objective}</p>
        </div>
        <div>
          <p className="font-semibold text-ink">Stratégie</p>
          <p>{syndrome.strategy}</p>
        </div>
        <div>
          <p className="font-semibold text-ink">Associations utiles</p>
          <p>{syndrome.associations.join(" · ")}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {mainPoints.map((point) => (
          <span className="rounded-full bg-sage-700 px-3 py-1 text-xs font-bold text-white" key={point.id}>
            principal · {point.code}
          </span>
        ))}
        {secondaryPoints.map((point) => (
          <span className="rounded-full bg-sage-100 px-3 py-1 text-xs font-bold text-sage-700" key={point.id}>
            secondaire · {point.code}
          </span>
        ))}
      </div>

      <div className="mt-4 rounded-xl bg-clay-50 p-3 text-sm leading-6 text-ink/78">
        <span className="font-semibold text-clay-700">Précautions : </span>
        {syndrome.precautions}
      </div>
    </article>
  );
}
