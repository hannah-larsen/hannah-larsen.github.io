import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Graphic Design Showcase",
    heading: "Misc. Personal Projects",
    subhead: "A mix of some projects that don’t fit into the other categories that represent my personal art style.",
    images: ["/personal2.png", "/personal3.png", "/personal1.png"],
    description: "These personal projects were a playground for me to experiment with different styles and techniques. More of my personal work can be found on my Instagram, linked below.",
    skills: "Procreate",
    websiteLink: "https://www.instagram.com/larsn.wav",
  },
  {
    title: "Hexcodle - Web Application",
    heading: "Personal Project",
    subhead: "Hexcodle is a color-guessing game inspired by Wordle, where players attempt to guess a hex code in just a few tries. The goal was to create an engaging, interactive web app that blends design knowledge with puzzle-solving.",
    images: ["/hexcodle2.png", "/hexcodle1.png"],
    description: "This project brought together several of my creative strengths: UI design, web development, illustration, blog copywriting and audio engineering. I’m especially proud of how we elevated a simple concept with personalized touches like pixel art and sound design. Hexcodle averages around 1000 daily active users, with a lifetime of approximately 250,000 users.",
    skills: "Figma • JavaScript (React.js)",
    websiteLink: "https://www.hexcodle.com",
  },
  {
    title: "Chromara Card Illustrations",
    heading: "Chromara Virtual TCG",
    subhead: "Working closely alongside the project manager & co-artist, I illustrated various virtual cards. I worked off prompts and visual references to create funky fictional characters in Procreate.",
    images: ["/chromara2.png", "/chromara1.png", "/chromara3.png", "/chromara4.png", "/chromara5.png"],
    description: "My first big illustration project. I learned how to adapt my artistic style to match the game's unique watercolour aesthetic. I collaborated with team members on daily feedback loops to ensure each final illustration matches the creative vision.",
    skills: "Procreate",
    websiteLink: "https://instagram.com/chromara_tcg",
  },
  {
    title: "Motorsport Bundle Launch",
    heading: "Element Fire Extinguishers",
    subhead: "To promote Element’s new E100 roll bar mount, I helped launch the Motorsport Bundle tailored for racing enthusiasts. The bundle combined the new E100 mount with an E100 fire extinguisher and a custom Motorsport Decal Sheet.",
    images: ["/stelvio-motor.png", "/stelvio7.png", "/stelvio4.png"],
    description: "This was my first time creating print-ready decals with custom cut lines, which was a fun technical challenge. In addition to the decals, I did product photography, created social media graphics, wrote a blog post & prepped an email campaign.",
    skills: "Illustrator • Photoshop • Shopify • Brevo",
    websiteLink: "https://elementfire.com/blogs/articles/introducing-the-motorsport-bundle",
  },
  {
    title: "Element Social Media Graphics",
    heading: "Element Fire Extinguishers",
    subhead: "I designed social media graphics for Element with a focus on a minimalist, Euro-inspired aesthetic. The content ranged from weekly blog promotions to brand collaborations and shopping events like holiday sales. Each post needed to feel clean and on-brand while still standing out in a crowded feed.",
    images: ["/stelvio-social1.png", "/stelvio-social2.png", "/stelvio-social4.png", "/stelvio-social3.png"],
    description: "This taught me how to design for a wide range of content types while maintaining a cohesive brand look. I also sharpened my technical skills in Photoshop, especially when it came to styling type, working with mockups, and creating templates for faster turnaround.",
    skills: "Photoshop • Shopify",
    websiteLink: "",
  },
  {
    title: "COMPSA Circuit Branding",
    heading: "Queen's University Computing Students' Association",
    subhead: "In one of my earlier design roles as COMPSA’s Graphic Designer and Social Media Coordinator, I helped launch the brand identity for their new initiative, COMPSA Circuit. This was a series of tech challenges and events held throughout the school year.",
    images: ["/compsa3.png"],
    description: "This project was a key milestone in my design journey, allowing me to hone my logo design skills and deepen my understanding of visual storytelling. I focused on incorporating meaningful visual symbolism (like circuit lines) to create a logo that was both clean and instantly recognizable, capturing the tech-forward spirit of the initiative.",
    skills: "Figma",
    websiteLink: "",
  },
  {
    title: "QWAVE Social Media Graphics",
    heading: "Queen’s University Music Production Club",
    subhead: "During my time as Social Media Coordinator for QWAVE, I was responsible for creating event graphics that reflected the club’s identity. The goal was to establish a visual style that matched QWAVE’s creative energy while maintaining clarity and consistency across platforms.",
    images: ["/qwave1.png", "/qwave2.png", "/qwave3.png"],
    description: "This was one of my first design roles, and it helped me build a strong foundation in brand consistency, visual hierarchy, and working with limited toolsets. I learned how to manage an asset library, create templates, and work within a music-inspired visual style that felt true to the club’s vibe.",
    skills: "Canva • Figma",
    websiteLink: "",
  },
  {
    title: "Audio Project Showcase",
    heading: "Personal & Client Projects",
    subhead: "Though my main work lives in the visual world, sound is where I experiment, play, and push boundaries. Step into my sonic playground and explore how I build mood and meaning through audio.",
    images: ["audio-image.png"],
    description: "From crafting custom scores for games to generative music built with code, these projects blend tech, texture, and tone. It’s a space where field recordings meet synths, and storytelling happens through sound.",
    skills: "Ableton Live • Reaper • Audacity",
    websiteLink: "/audio",
  },
   
];

export default function PortfolioPage() {
  return (
    <div className="px-4 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            heading={project.heading}
            subhead={project.subhead}
            images={project.images}
            description={project.description}
            skills={project.skills}
            websiteLink={project.websiteLink}
          />
        ))}
      </div>
    </div>
  );
}
