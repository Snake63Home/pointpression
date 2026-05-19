import { getPointsByIds, type Protocol } from "@/data/acupressureData";

type ProtocolCardProps = {
  protocol: Protocol;
};

function PointBadges({ ids, tone }: { ids: string[]; tone: "main" | "secondary" }) {
  const points = getPointsByIds(ids);
  const className =
    tone === "main" ? "bg-sage-700 text-white" : "bg-sage-100 text-sage-700";

  return (
    <div className="flex flex-wrap gap-2">
      {points.map((point) => (
        <span className={`rounded-full px-3 py-1 text-xs font-bold ${className}`} key={point.id}>
          {point.code}
        </span>
      ))}
    </div>
  );
}

export function ProtocolCard({ protocol }: ProtocolCardProps) {
  return (
    <article className="rounded-2xl border border-sage-100 bg-white/90 p-5 shadow-soft">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase text-sage-700">Protocole</p>
          <h3 className="mt-1 text-xl font-black text-ink">{protocol.title}</h3>
          <p className="mt-2 text-sm leading-6 text-ink/70">{protocol.context}</p>
        </div>
        <span className="shrink-0 rounded-full bg-clay-100 px-3 py-1 text-xs font-bold text-clay-700">
          {protocol.technique}
        </span>
      </div>

      <div className="grid gap-4 text-sm leading-6 text-ink/80 md:grid-cols-2">
        <div>
          <p className="font-semibold text-ink">Objectif thérapeutique</p>
          <p>{protocol.objective}</p>
        </div>
        <div>
          <p className="font-semibold text-ink">Associations utiles</p>
          <p>{protocol.associations.join(" · ")}</p>
        </div>
        <div>
          <p className="mb-2 font-semibold text-ink">Points principaux</p>
          <PointBadges ids={protocol.mainPointIds} tone="main" />
        </div>
        <div>
          <p className="mb-2 font-semibold text-ink">Points secondaires</p>
          <PointBadges ids={protocol.secondaryPointIds} tone="secondary" />
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-clay-50 p-3 text-sm leading-6 text-ink/78">
        <span className="font-semibold text-clay-700">Précautions : </span>
        {protocol.precautions}
      </div>
    </article>
  );
}
