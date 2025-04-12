export default function Jumbotron() {
  return (
    <>
      <section id="home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-tulisan md:text-xl">
                Hello, I am{" "}
                <span className="block font-bold text-primary text-4xl my-1 lg:text-5xl">
                  <span className="typing-container">Kim Geovedi</span>
                </span>
              </h1>
              <h2 className="font-medium text-lg mb-5 text-tulisan lg:text-2xl">
                Software Engineer |{" "}
                <span className="text-primary">Data Analyst</span>
              </h2>
              <p className="font-medium mb-10 text-paragraf leading-relaxed">
                {/* Tambahkan teks di sini jika diperlukan */}
              </p>
              <a
                href="#contact"
                className="text-base font-semibold bg-primary text-white py-3 px-8 rounded-full hover:shadow-lg hover:opacity-50 transition duration-300 ease-in-out">
                Contact Me
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 lg:right-0">
                <div className="relative w-full max-w-md mx-auto">
                  <img
                    src="img/new.png"
                    alt="Profile of Kim Geovedi"
                    className="max-w-full mx-auto"
                  />
                  {/* Gradasi bagian bawah */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-24 
                  bg-gradient-to-t from-white to-transparent 
                  dark:from-[#0f172a] pointer-events-none"
                  />
                </div>

                <span className="absolute -top-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                  <svg
                    width="400"
                    height="400"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#8b5cf6"
                      d="M46.2,-49.7C58.6,-33.8,66.5,-16.9,64.3,-2.3C62,12.3,49.5,24.6,37.1,36.1C24.6,47.7,12.3,58.3,-2.8,61.2C-18,64,-36,59,-45.1,47.5C-54.1,36,-54.2,18,-50.8,3.4C-47.4,-11.2,-40.5,-22.4,-31.5,-38.4C-22.4,-54.3,-11.2,-74.9,2.8,-77.7C16.9,-80.6,33.8,-65.6,46.2,-49.7Z"
                      transform="translate(100 100) scale(1.2)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
