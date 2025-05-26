import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Motorsport Bundle Launch",
    heading: "Element Fire Extinguishers",
    subhead: "To promote Element’s new E100 roll bar mount, I helped launch the Motorsport Bundle tailored for racing enthusiasts. The bundle combined the new E100 mount with an E100 fire extinguisher and a custom Motorsport Decal Sheet.",
    images: ["/stelvio6.png", "/stelvio5.png", "/stelvio4.png"],
    description: "This was my first time creating print-ready decals with custom cut lines, which was a fun technical challenge. In addition to the decals, I created social media graphics, wrote a blog post & prepped an email campaign.",
    skills: "Illustrator • Photoshop • Shopify • Brevo",
    websiteLink: "https://elementfire.com/blogs/articles/introducing-the-motorsport-bundle",
  },
  {
    title: "Hexcodle",
    heading: "Personal Project — Web Application",
    subhead: "Hexcodle is a color-guessing game inspired by Wordle, where players attempt to guess a hex code in just a few tries. The goal was to create an engaging, interactive web app that blends design knowledge with puzzle-solving.",
    images: ["/hexcodle2.png", "/hexcodle1.png", "/hexcodle3.png"],
    description: "This project brought together several of my creative strengths: design, web development, illustration, and audio. I’m especially proud of how we elevated a simple concept with personalized touches like pixel art and sound design. It was a valuable exercise in UI development and cross-disciplinary creativity.",
    skills: "Figma • JavaScript (React.js)",
    websiteLink: "https://www.hexcodle.com",
  },
  {
    title: "Apartment Coffee Shop Vlog",
    heading: "Personal Project - Youtube Video",
    subhead: "This was a personal video project where I documented the process of transforming my apartment into a pop-up coffee shop for a day. I had hosted a few of these events before, but this was the first time I filmed the full setup and experience, both as a way to share it with friends and to explore a new creative medium.",
    images: ["/youtube1.png"],
    description: "This project was a great opportunity to explore content creation and video editing from start to finish. I learned about camera setup, gathering effective b-roll, and structuring clips into a cohesive story. It also gave me insight into the YouTube upload process, including thumbnails, audio levels, and pacing for an online audience.",
    skills: "CapCut • Photoshop • Ableton Live",
    websiteLink: "https://www.youtube.com/watch?v=TDPZfCnWCEw",
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
