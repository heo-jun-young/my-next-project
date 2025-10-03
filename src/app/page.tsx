export default function Home() {
  return (
    <div className="w-full h-screen bg-[url('https://cdn.imweb.me/thumbnail/20250925/e6b9c1091f721.png')] bg-center bg-cover animate-moveLeftRight relative flex items-center justify-center">
      <div className="text-center text-white z-10 max-w-[900px] px-5">
        <h1 className="text-[5.25rem] font-bold leading-tight mb-8 drop-shadow-lg break-keep">
          이야기의 주인공은 언제나 당신입니다.
        </h1>
        <p className="text-[1.95rem] font-normal leading-relaxed opacity-95 drop-shadow-md break-keep">
          그로우마케팅은 브랜드가 아닌<br />고객을 먼저 바라봅니다.<br />
          당신의 도전과 성장을 완성하는<br />든든한 파트너가 되겠습니다.
        </p>
      </div>
    </div>
  )
}