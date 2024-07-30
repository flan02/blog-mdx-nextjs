
//import Header from "@/components/Header";
import { NavigationMenuDemo } from "@/components/custom/NavigationMenuDemo";
//import { MainNav } from "@/components/main-nav";
import Header from "@/components/reutilizable/Header";
import MaxWidthWrapper from "@/components/reutilizable/MaxWidthWrapper";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <MaxWidthWrapper className="" >
      <Header className="mt-4">
        <h1 className="title font-semibold text-2xl tracking-wider uppercase">About Me</h1>
      </Header>
      <div className="container max-w-6xl py-6 lg:py-10 h-max border border-rgba(255,255,255, 0.001)">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="min-w-48 max-w-48 flex flex-col gap-2">
            <Image className="rounded-full" src="/yo-unbackground.png" alt="yo" width={200} height={200}></Image>
          </div>

          <article className="flex flex-col">
            <p className="text-muted-foreground text-xl py-1 font-Roboto underline">Dear Basketball Enthusiasts,</p>
            <br />
            <p className="text-muted-foreground py-1 font-Roboto text-lg">Greetings!</p>
            <br />
            <p className="text-muted-foreground text-md py-1 font-Roboto">As the creator of this magnificent blog that has captivated minds across the globe, I am thrilled to extend a personal invitation to you to join our community.
              Basketball, as you know, is more than just a game it’s a celebration of athleticism, strategy. From the thrill of a buzzer-beater to the artistry of a perfectly executed play, basketball embodies a
              dynamic blend of skill, teamwork and excitement.
            </p>
            <p className="text-muted-foreground text-md py-1 font-Roboto">Our blog aims to capture the essence of this extraordinary sport, offering you insights, updates and stories that bring the game to life.
            </p>
            <p className="text-muted-foreground text-md py-1 font-Roboto">Here’s why our blog is your must-read destination every week:</p>
            <ul className="ml-4 list-decimal text-muted-foreground text-md py-1 font-Roboto">
              <li className="">
                In-Depth Analysis and Expert Insights: Each week, our blog delivers comprehensive analysis of the latest games, player performances, and strategic developments in the world of basketball.
                Our expert contributors dive deep into the nuances of the game, providing you with valuable insights that enhance your understanding and appreciation of basketball.
              </li>
              <li className="">
                Exclusive Content and Behind-the-Scenes Stories: We go beyond the headlines to bring you exclusive content that you won’t find elsewhere. From behind-the-scenes stories of your favorite players and
                teams to in-depth interviews and profiles, our blog offers a unique perspective on the world of basketball.
              </li>
              <li className="">
                Historical Perspectives and Celebratory Moments: Our blog takes you on a journey through basketball’s rich history, celebrating iconic moments, legendary players, and memorable games. Whether you’re a
                seasoned fan or new to the sport, our historical features provide context and depth that enrich your experience.
              </li>
              <li className="">
                Interactive Features and Community Engagement: We value your input and strive to create an interactive experience for our readers. Our blog features polls, quizzes, and opportunities for you to share
                your thoughts and opinions. Join the conversation and connect with fellow basketball enthusiasts who share your passion.
              </li>
            </ul>
            <p className="text-muted-foreground text-md py-1 font-Roboto">By subscribing to our blog and reading our weekly updates, you become part of a vibrant community that celebrates the beauty and excitement of basketball.
              Your engagement and feedback are crucial to us, and we are committed to delivering content that enriches your experience and deepens your connection to the game.
            </p>
            <p className="text-muted-foreground text-md py-1 font-Roboto">Sincerely,</p>
            <p className="text-muted-foreground text-md py-1 font-Roboto">Dan Chanivet [software developer and basketball lover]</p>
            <p className="text-muted-foreground text-md py-1 font-Roboto">Creator of Treeball</p>



          </article>
        </div>
      </div>
    </MaxWidthWrapper>

  );
}