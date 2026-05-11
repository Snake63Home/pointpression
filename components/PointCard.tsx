import type { AcupressurePoint } from "@/data/acupressureData";

type PointCardProps = {
  point: AcupressurePoint;
};

export function PointCard({ point }: PointCardProps) {
  return (
    <article className="rounded-2xl border border-sage-100 bg-white/90 p-5 shadow-soft">
      <div className="mb-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-sage-700">
          {point.traditionalName}
        </p>
        <h3 className="mt-1 text-xl font-bold text-ink">{point.commonName}</h3>
      </div>

      <dl className="space-y-4 text-sm leading-6 text-ink/82">
        <div>
          <dt className="font-semibold text-ink">Où le trouver</dt>
          <dd>{point.location}</dd>
        </div>
        <div>
          <dt className="font-semibold text-ink">Comment appuyer</dt>
          <dd>{point.pressureMethod}</dd>
        </div>
        <div>
          <dt className="font-semibold text-ink">Durée conseillée</dt>
          <dd>{point.duration}</dd>
        </div>
        <div className="rounded-xl bg-clay-50 p-3">
          <dt className="font-semibold text-clay-700">Précautions</dt>
          <dd>{point.precautions}</dd>
        </div>
      </dl>
    </article>
  );
}
