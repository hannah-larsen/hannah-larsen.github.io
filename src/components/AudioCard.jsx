export default function AudioCard({
  title,
  heading,
  description,
  websiteLink,
  audioEmbed,
  videoEmbed,
}) {
  return (
    <div className="project-card bg-darkg/95 rounded-3xl p-8 shadow-lg flex flex-col gap-6 w-full">
      <h2 className="text-4xl text-amber-50" style={{ fontFamily: "var(--font-mansalva)" }}>{title}</h2>
      <h2 className="text-xl text-amber-50" style={{ fontFamily: "var(--font-mansalva)" }}>{heading}</h2>

      {audioEmbed && (
        <audio controls className="w-full mb-4">
          <source src={audioEmbed} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}

    {videoEmbed && (
        <div className="aspect-video mb-4">
            <iframe
            src={videoEmbed}
            width="100%"
            height="100%"
            allow="autoplay"
            allowFullScreen
            className="w-full h-full rounded"
            ></iframe>
        </div>
      )}

    <h3 className="text-md text-amber-50" style={{ fontFamily: "var(--font-inter)" }}>{description}</h3>

      {websiteLink && (
        <a
          href={websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="link-button text-center text-darkg px-4 py-2 rounded-full"
        >
          visit link
        </a>
      )}

    </div>
  );
}
