// app/page.jsx
import { Mail, Linkedin, Instagram, Youtube } from "lucide-react";

export default function HomePage() {
  return (
    <div className="mt-10 mb-10 max-w-[90%] mx-auto bg-darkg/90 rounded-3xl shadow-lg p-6 md:p-12 lg:p-16 flex flex-col md:flex-row md:min-h-[60vh] lg:min-h-[75vh] justify-center">
      <div className="md:w-2/5 w-full flex-shrink-0 flex flex-col items-center mb-6 md:mb-0">
        <img
          src="/hannah-circle.png"
          alt="Hannah Larsen"
          className="w-48 md:w-60 lg:w-72 xl:w-96 h-auto rounded-full p-4 md:p-6"
        />
        <div className="flex justify-center mt-2 space-x-4">
          <a
            className="social-button w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-full flex items-center justify-center"
            href="mailto:hannah.larsen62@gmail.com"
          >
            <Mail className="text-darkg w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
          </a>
          <a
            className="social-button w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-full flex items-center justify-center"
            href="https://www.linkedin.com/in/hannahlars"
            target="_blank"
          >
            <Linkedin className="text-darkg w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
          </a>
          <a
            className="social-button w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-full flex items-center justify-center"
            href="https://www.instagram.com/larsn.wav"
            target="_blank"
          >
            <Instagram className="text-darkg w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
          </a>
        </div>
      </div>
      <div className="md:w-3/5 w-full p-4 md:p-6 flex flex-col justify-center text-center md:text-left text-base md:text-lg lg:text-xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl mb-2 font-mansalva text-amber-50">
          hannah larsen
        </h1>
        <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl mb-2 font-mansalva text-amber-50">
          graphic designer and multimedia developer
        </h2>
        <hr className="border-t border-amber-50 my-4" />
        <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-mansalva text-amber-50">
          <a
            className="portfolio-link"
            href="/portfolio"
          >
            check out my work →
          </a>
        </h2>
      </div>
    </div>
  );
}
