"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

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

type OrbitItemWithTarget = OrbitAsset & {
  targetX: number; // 토스 로고 나타날 때 목표 x 위치
  targetY: number; // 토스 로고 나타날 때 목표 y 위치
  direction: 'in' | 'out'; // 안쪽으로 들어갈지 바깥으로 나갈지
};

const orbitItems: OrbitItemWithTarget[] = [
  // Free-form layout (NOT circular). x/y are relative to center; icons stay upright.
  // 안쪽으로: elk, postgres, kafka, github, jenkins (반지름 약 150px로 둥글게 - 더 퍼트림)
  { src: "/orbit/elk.png", alt: "ELK", x: -250, y: -50, targetX: -200, targetY: -50, size: 78, delayMs: 0, direction: 'in' },
  { src: "/orbit/postgres.png", alt: "PostgreSQL", x: -230, y: -150, targetX: -200, targetY: -140, size: 84, delayMs: 1620, direction: 'in' },
  { src: "/orbit/kafka.png", alt: "Kafka", x: -260, y: 50, targetX: -210, targetY: 15, size: 84, delayMs: 1620, direction: 'in' },
  { src: "/orbit/github.png", alt: "GitHub", x: 150, y: -100, targetX: 120, targetY: -85, size: 56, delayMs: 1120, direction: 'in' },
  { src: "/orbit/jenkins.png", alt: "Jenkins", x:120, y: 30, targetX: 100, targetY: 35, size: 82, delayMs: 620, direction: 'in' },
  // 바깥으로: linux, sentry, dify, kubernetes, allama (반지름 약 240px로 둥글게 - 더 퍼트림)
  { src: "/orbit/linux.png", alt: "Linux", x: 0, y: -200, targetX: 0, targetY: -240, size: 150, delayMs: 220, direction: 'out' },
  { src: "/orbit/sentry.png", alt: "Sentry", x: -100, y: -150, targetX: -80, targetY: -190, size: 74, delayMs: 420, direction: 'out' },
  { src: "/orbit/dify.png", alt: "Dify", x: 10, y: 100, targetX: 25, targetY: 120, size: 86, delayMs: 860, direction: 'out' },
  { src: "/orbit/kubernetes.png", alt: "Kubernetes", x: -150, y: 30, targetX: -140, targetY: 70, size: 158, delayMs: 1380, direction: 'out' },
  { src: "/orbit/allama.png", alt: "Allama", x: -180, y: 100, targetX: -170, targetY: 100, size: 54, delayMs: 1620, direction: 'out' },
];

export function NPayOrbit() {
  const items = orbitItems;
  const [currentLogo, setCurrentLogo] = useState<"npay" | "toss">("npay");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // 먼저 사라지게
      setIsVisible(false);
      // 사라진 후 로고 변경
      setTimeout(() => {
        setCurrentLogo((prev) => (prev === "npay" ? "toss" : "npay"));
        // 다시 나타나게
        setTimeout(() => {
          setIsVisible(true);
        }, 50);
      }, 500); // 사라지는 시간
    }, 3000); // Change logo every 3 seconds

    return () => clearInterval(interval);
  }, []);

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
          {items.map((it, idx) => {
            const isTossVisible = currentLogo === "toss" && isVisible;
            const targetX = isTossVisible ? it.targetX : it.x;
            const targetY = isTossVisible ? it.targetY : it.y;
            return (
              <div
                key={it.src}
                className="absolute left-1/2 top-1/2 transition-transform ease-out"
                style={{
                  transform: `translate(${targetX}px, ${targetY}px)`,
                  transitionDuration: '600ms',
                  transitionDelay: isTossVisible ? `${idx * 30}ms` : '200ms',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
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
            );
          })}
        </div>

        {/* center logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="orbit-center grid place-items-center">
            {/* NPay logo - 원형 컨테이너 안에 */}
            <div className={`relative h-[84px] w-[260px] overflow-visible rounded-full sm:h-[92px] sm:w-[300px] ${
              currentLogo === "npay" && isVisible
                ? ""
                : "logo-dissolve"
            }`}>
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/orbit/npay.png"
                  alt="NPay"
                  fill
                  className="object-cover object-center transition-all duration-500 ease-in-out"
                  priority
                />
              </div>
              {/* 파티클 효과를 위한 조각들 */}
              {!isVisible && currentLogo === "toss" && (
                <>
                  {[...Array(16)].map((_, i) => {
                    const angle = (i * 360) / 16;
                    const rad = (angle * Math.PI) / 180;
                    const distance = 80 + Math.random() * 40;
                    const tx = Math.cos(rad) * distance;
                    const ty = Math.sin(rad) * distance;
                    return (
                      <div
                        key={i}
                        className="absolute left-1/2 top-1/2 h-[84px] w-[260px] sm:h-[92px] sm:w-[300px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full"
                        style={{
                          '--rotate': `${angle}deg`,
                          '--tx': `${tx}px`,
                          '--ty': `${ty}px`,
                          animation: `particleDissolve 700ms ease-out forwards`,
                          animationDelay: `${i * 15}ms`,
                          transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                          transformOrigin: 'center',
                        } as React.CSSProperties}
                      >
                        <div
                          className="h-full w-full"
                          style={{
                            clipPath: `polygon(${50 + Math.cos(rad) * 25}% ${50 + Math.sin(rad) * 25}%, ${50 + Math.cos((angle + 22.5) * Math.PI / 180) * 25}% ${50 + Math.sin((angle + 22.5) * Math.PI / 180) * 25}%, 50% 50%)`,
                          }}
                        >
                          <Image
                            src="/orbit/npay.png"
                            alt=""
                            fill
                            className="object-cover object-center"
                          />
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
            {/* Toss logo - 원형 없이 큰 사이즈로 */}
            <div className={`absolute inset-0 flex items-center justify-center ${
              currentLogo === "toss" && isVisible
                ? "toss-zoom-in"
                : "opacity-0 scale-[2.5]"
            }`}>
              <div className="relative h-[160px] w-[480px] sm:h-[180px] sm:w-[540px]">
                <Image
                  src="/orbit/toss.png"
                  alt="Toss"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


