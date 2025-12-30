import Image from "next/image";

type OrbitAsset = {
  src: string;
  alt: string;
  /** px offset from center (no rotation transform; keeps logos upright) */
  x: number;
  /** px offset from center (no rotation transform; keeps logos upright) */
  y: number;
  /** px */
  size: number;
  /** ms */
  delayMs: number;
};

const orbitItems: OrbitAsset[] = [
  // Free-form layout (NOT circular). x/y are relative to center; icons stay upright.
  { src: "/orbit/elk.png", alt: "ELK", x: -250, y: -50, size: 78, delayMs: 0 },
  { src: "/orbit/linux.png", alt: "Linux", x: 0, y: -200, size: 150, delayMs: 220 },
  { src: "/orbit/sentry.png", alt: "Sentry", x: -100, y: -150, size: 74, delayMs: 420 },
  { src: "/orbit/jenkins.png", alt: "Jenkins", x:120, y: 30, size: 82, delayMs: 620 },
  { src: "/orbit/dify.png", alt: "Dify", x: 10, y: 100, size: 86, delayMs: 860 },
  { src: "/orbit/github.png", alt: "GitHub", x: 150, y: -100, size: 56, delayMs: 1120 },
  { src: "/orbit/kubernetes.png", alt: "Kubernetes", x: -150, y: 30, size: 158, delayMs: 1380 },
  { src: "/orbit/kafka.png", alt: "Kafka", x: -260, y: 50, size: 84, delayMs: 1620 },
  { src: "/orbit/postgres.png", alt: "PostgreSQL", x: -230, y: -150, size: 84, delayMs: 1620 },
  { src: "/orbit/allama.png", alt: "Allama", x: -180, y: 100, size: 54, delayMs: 1620 },
];

export function NPayOrbit() {
  const items = orbitItems;

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="relative aspect-square w-full">
        {/* glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute left-8 top-10 h-44 w-44 rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute bottom-6 right-8 h-52 w-52 rounded-full bg-primary/6 blur-3xl" />
        </div>

        {/* orbiting logos (intentionally irregular sizes/positions) */}
        <div className="absolute inset-0">
          {items.map((it, idx) => (
            <div
              key={it.src}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(${it.x}px, ${it.y}px)`,
              }}
            >
              <div
                className="orbit-pop orbit-float -translate-x-1/2 -translate-y-1/2"
                style={{ animationDelay: `${it.delayMs}ms` }}
              >
                <div
                  className="relative bg-transparent"
                  style={{ width: it.size, height: it.size }}
                >
                  <Image
                    src={it.src}
                    alt={it.alt}
                    fill
                    sizes="96px"
                    className="object-contain drop-shadow-md"
                    priority={idx < 2}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* center logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="orbit-center grid place-items-center">
            {/* Crop the PNG to the pill itself so the white margins don't show */}
            <div className="relative h-[84px] w-[260px] overflow-hidden rounded-full sm:h-[92px] sm:w-[300px]">
              <Image
                src="/orbit/npay.png"
                alt="NPay"
                fill
                className="object-cover object-center scale-[1.12]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


