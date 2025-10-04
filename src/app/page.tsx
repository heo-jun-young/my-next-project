export default function Home() {
  return (
    <main>
      {/* 히어로 섹션 */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: "url('https://cdn.imweb.me/thumbnail/20250925/e6b9c1091f721.png')"
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">
            이야기의 주인공은 언제나 당신입니다.
          </h1>
          
          <p className="hero-description">
            그로우마케팅은 브랜드가 아닌<br />
            고객을 먼저 바라봅니다.<br />
            당신의 도전과 성장을 완성하는<br />
            든든한 파트너가 되겠습니다.
          </p>
        </div>
      </section>

      {/* 추가 섹션이 필요하면 여기에 작성 */}
    </main>
  );
}