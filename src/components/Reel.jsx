"use client";

export default function Reel (){
    return (
        <div className="bg-darkg/95 rounded-3xl p-8 shadow-lg flex flex-col gap-6 w-full">
            <h1 className="text-4xl text-amber-50" style={{ fontFamily: "var(--font-mansalva)" }}>Sound Design Reel</h1>
            <h3 className="text-md text-amber-50" style={{ fontFamily: "var(--font-inter)" }}>With a background in audio production and a passion for interaction design, I explore how sound can elevate digital experiences. This reel features projects where I designed and implemented audio for games, creative tools, and interactive environments.</h3>
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg my-6">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    title="Audio Design Reel by Hannah Larsen"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="flex justify-center">
                <a href="/" target="_blank" rel="noopener noreferrer" className="link-button text-center text-darkg px-4 py-2 rounded-full w-64">
                    Let's connect!
                </a>
            </div>
        </div>
    )
}