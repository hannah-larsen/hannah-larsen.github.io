import AudioCard from "@/components/AudioCard";

const projects = [
  {
    title: "RaceTrap Main Menu",
    heading: "RaceTrap Video Game Demo",
    videoEmbed: "https://drive.google.com/file/d/1L4OTUPHFlsamSvq24ya0qbw_RH46-eIV/preview",
    description: "I created the backing track for the main menu of this video game demo. Sound effects were also created by me & implemented into the game by the GnomeFire Labs team.",
    websiteLink: "https://racetrap.com",
  },
  {
    title: "RaceTrap Forest Level",
    heading: "RaceTrap Video Game Demo",
    videoEmbed: "https://drive.google.com/file/d/1bUXP0_AiHrQvjEKk9pqYiFlnI8VOX6Y2/preview",
    description: "This was the demo level that was playable at the 2023 Queen's Creative Computing Showcase. The audio and sound effects in this clip were produced by me.",
    websiteLink: "https://racetrap.com",
  },
  {
    title: "ChucK Composition",
    heading: "Electroacoustic Music Capstone Project",
    videoEmbed: "https://drive.google.com/file/d/1zC33WMOsF3Nkl2udvhSvZXHq2TIJ6-J2/preview",
    description: "During the final year of my undergrad, I wanted to play with different mediums for sound production. I learned and coded my own program in ChucK and recorded this video demonstrating how to create different sounds.",
  },
   {
    title: "Out For Post",
    heading: "Co-produced with Ben Bongard",
    audioEmbed: "/OutForPost.mp3",
    description: "",
  },
  {
    title: "Spacey Synthwave",
    heading: "Co-produced with Ben Bongard",
    audioEmbed: "/SpaceySynthwave.mp3",
    description: "",
  },
  {
    title: "October 2024",
    heading: "Co-produced with Van the Man",
    audioEmbed: "/VanMusic.mp3",
    description: "",
  },
  {
    title: "Forest Dweller",
    audioEmbed: "/ForestDweller.mp3",
    description: "",
  },
  {
    title: "Eminence",
    audioEmbed: "/Eminence.mp3",
    description: "",
  },
  {
    title: "Enigma",
    audioEmbed: "/Enigma.mp3",
    description: "",
  },
  {
    title: "Eclipse Descent",
    audioEmbed: "/EclipseDescent.mp3",
    description: "",
  },
  {
    title: "E Minor Lo-Fi",
    audioEmbed: "/Lofi-Eminor.mp3",
    description: "",
  },
 
];

export default function PortfolioPage() {
  return (
    <div className="px-4 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <AudioCard
            key={idx}
            title={project.title}
            heading={project.heading}
            images={project.images}
            description={project.description}
            websiteLink={project.websiteLink}
            audioEmbed={project.audioEmbed}
            videoEmbed={project.videoEmbed}
          />
        ))}
      </div>
    </div>
  );
}
