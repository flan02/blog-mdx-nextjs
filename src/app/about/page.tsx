
//import Header from "@/components/Header";
import { NavigationMenuDemo } from "@/components/custom/NavigationMenuDemo";
//import { MainNav } from "@/components/main-nav";
import Header from "@/components/reutilizable/Header";
import MaxWidthWrapper from "@/components/reutilizable/MaxWidthWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <MaxWidthWrapper >
      <Header className="mt-4">
        <h1 className="title font-semibold text-2xl tracking-wider uppercase">About Me</h1>
      </Header>
      <div className="container max-w-6xl py-6 lg:py-10 h-screen border border-rgba(255,255,255, 0.001)">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="min-w-48 max-w-48 flex flex-col gap-2">
            <p className="text-muted-foreground font-bold text-center break-words">Software Developer</p>
          </div>
          <p className="text-muted-foreground text-lg py-4 font-Roboto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    </MaxWidthWrapper>

  );
}