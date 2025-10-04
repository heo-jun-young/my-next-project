"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      ripple.style.left = `${e.clientX - 25}px`;
      ripple.style.top = `${e.clientY - 25}px`;
      ripple.style.width = "50px";
      ripple.style.height = "50px";
      ripple.style.position = "absolute";
      ripple.style.borderRadius = "50%";
      ripple.style.background = "rgba(0, 123, 255, 0.5)";
      ripple.style.pointerEvents = "none";
      ripple.style.transform = "scale(0)";
      ripple.style.animation = "ripple-animation 0.6s linear";

      document.body.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <main>
      {/* 히어로 섹션 */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            이야기의 주인공은<br />
            언제나 당신입니다.
          </h1>
          <p className="hero-description">
            그로우마케팅은 브랜드가 아닌<br />
            고객을 먼저 바라봅니다.<br />
            당신의 도전과 성장을 완성하는<br />
            든든한 파트너가 되겠습니다.
          </p>
        </div>
      </section>
    </main>
  );
}