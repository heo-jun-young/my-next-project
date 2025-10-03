export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-6">
          🚀 나만의 홈페이지
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Next.js + Tailwind CSS로 만든 첫 번째 웹사이트입니다.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#about"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            더 알아보기
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            문의하기
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-3xl text-center py-16">
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <p className="text-gray-700">
          이 홈페이지는 Next.js와 Tailwind CSS를 사용해 제작되었습니다.
          <br /> 누구나 쉽게 커스터마이징하고 배포할 수 있습니다.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl text-center py-16">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-700 mb-6">
          아래 버튼을 눌러 이메일로 연락해보세요.
        </p>
        <a
          href="mailto:example@email.com"
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          이메일 보내기
        </a>
      </section>
    </main>
  );
}

