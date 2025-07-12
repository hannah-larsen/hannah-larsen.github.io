import NavBar from "@/components/Navbar"; // Same navbar component
import "@/app/globals.css"; // Global styles

export const metadata = {
  title: "Hannah Larsen | Audio",
  description: "Check out my audio projects!",
};

export default function PortfolioLayout({ children }) {
  return (
    <div className="min-h-screen">
      <div className="bg-[url('/portfolio-doodle.png')] bg-contain bg-repeat bg-top">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
