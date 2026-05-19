import type { AcupressurePoint } from "@/data/acupressureData";

type PointCardProps = {
  point: AcupressurePoint;
  role?: "principal" | "secondaire" | "reference";
  compact?: boolean;
};

const roleStyles = {
  principal: "bg-sage-700 text-white",
  secondaire: "bg-clay-100 text-clay-700",
  reference: "bg-sage-100 text-sage-700"
};

export function PointCard({ point, role = "reference", compact = false }: PointCardProps) {
  return (
    <article className="rounded-2xl border border-sage-100 bg-white/90 p-5 shadow-soft">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase text-sage-700">{point.code} / {point.name}</p>
          <h3 className="mt-1 text-xl font-bold text-ink">{point.commonName}</h3>
          <p className="mt-1 text-sm text-ink/58">{point.meridian}</p>
        </div>
        <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${roleStyles[role]}`}>
          {role}
        </span>
      </div>

      <dl className="space-y-4 text-sm leading-6 text-ink/82">
        <div>
          <dt className="font-semibold text-ink">Localisation</dt>
          <dd>{point.location}</dd>
        </div>
        <div>
          <dt className="font-semibold text-ink">Stimuler</dt>
          <dd>{point.stimulation}</dd>
        </div>
        {!compact && (
          <>
            <div>
              <dt className="font-semibold text-ink">Durée conseillée</dt>
              <dd>{point.duration}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Indications rapides</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {point.indications.map((indication) => (
                  <span className="rounded-full bg-sage-50 px-3 py-1 text-xs font-semibold text-sage-700" key={indication}>
                    {indication}
                  </span>
                ))}
              </dd>
            </div>
          </>
        )}
        <div className="rounded-xl bg-clay-50 p-3">
          <dt className="font-semibold text-clay-700">Précautions</dt>
          <dd>{point.precautions}</dd>
        </div>
      </dl>
    </article>
  );
}
