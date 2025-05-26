import "@/app/globals.css";
import { Mansalva } from "next/font/google";
import NavBar from "@/components/navbar";
import LoadingWrapper from "@/components/LoadingWrapper";

const mansalva = Mansalva({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Hannah Larsen",
  description: "Welcome to Hannah Larsen's portfolio site!",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-lightg ${mansalva.className}`}>
        <div className="mt-14 bg-[url('/doodle2.png')] bg-contain bg-repeat bg-top min-h-screen h-full">
          <LoadingWrapper>
            <NavBar />
            <main className="pt-4 px-4">{children}</main>
          </LoadingWrapper>
        </div>
      </body>
    </html>
  );
}
