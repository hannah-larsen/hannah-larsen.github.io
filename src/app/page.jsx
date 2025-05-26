// app/page.jsx
import { Mail, Linkedin, Instagram } from "lucide-react";

export default function HomePage() {
  return (
    <div className="mt-10 mb-10 max-w-[90%] mx-auto bg-darkg/90 rounded-3xl shadow-lg p-8 flex flex-col md:flex-row">
      <div className="md:w-2/5 w-full flex-shrink-0 flex flex-col items-center mb-6 md:mb-0">
        <img
          src="/hannah-circle.png"
          alt="Hannah Larsen"
          className="w-60 h-auto rounded-full p-4"
        />
        <div className="flex justify-center mt-2 space-x-4">
          <a
            className="w-14 h-14 rounded-full bg-amber-50 hover:bg-lightg transition flex items-center justify-center"
            href="mailto:hannah.larsen62@gmail.com"
          >
            <Mail className="text-darkg w-6 h-6" />
          </a>
          <a
            className="w-14 h-14 rounded-full bg-amber-50 hover:bg-lightg transition flex items-center justify-center"
            href="https://www.linkedin.com/in/hannahlars"
            target="_blank"
          >
            <Linkedin className="text-darkg w-6 h-6" />
          </a>
          <a
            className="w-14 h-14 rounded-full bg-amber-50 hover:bg-lightg transition flex items-center justify-center"
            href="https://www.instagram.com/larsn.wav"
            target="_blank"
          >
            <Instagram className="text-darkg w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="md:w-3/5 w-full p-6 flex flex-col justify-center text-center md:text-left">
        <h1 className="text-5xl md:text-7xl mb-2 font-mansalva text-amber-50">
          hannah larsen
        </h1>
        <h2 className="text-xl md:text-2xl mb-2 font-mansalva text-amber-50">
          graphic designer and multimedia developer
        </h2>
        <hr className="border-t border-amber-50 my-4" />
        <h2 className="text-xl md:text-2xl font-mansalva text-amber-50">
          <a
            className="portfolio-link hover:text-lightg transition"
            href="/portfolio"
          >
            check out my work →
          </a>
        </h2>
      </div>
    </div>
  );
}
