
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
            <p className="text-muted-foreground text-md py-1 font-Roboto underline">Dear Basketball Enthusiasts,</p>
            <p className="text-muted-foreground text-md py-1 font-Roboto">Greetings!</p>
            <p className="text-muted-foreground text-md py-1 font-Roboto">




              I hope this letter finds you well and in good spirits. As the creator of this magnificent sport that has captivated hearts and minds across the globe, I am thrilled to extend a personal invitation to you to join our community of passionate basketball fans by following our blog each week.

              Basketball, as you know, is more than just a game; it’s a celebration of athleticism, strategy, and the unifying power of sport. From the thrill of a buzzer-beater to the artistry of a perfectly executed play, basketball embodies a dynamic blend of skill, teamwork, and excitement. Our blog aims to capture the essence of this extraordinary sport, offering you a weekly dose of insights, updates, and stories that bring the game to life.

              Here’s why our blog is your must-read destination every week:

              In-Depth Analysis and Expert Insights: Each week, our blog delivers comprehensive analysis of the latest games, player performances, and strategic developments in the world of basketball. Our expert contributors dive deep into the nuances of the game, providing you with valuable insights that enhance your understanding and appreciation of basketball.

              Exclusive Content and Behind-the-Scenes Stories: We go beyond the headlines to bring you exclusive content that you won’t find elsewhere. From behind-the-scenes stories of your favorite players and teams to in-depth interviews and profiles, our blog offers a unique perspective on the world of basketball.

              Historical Perspectives and Celebratory Moments: Our blog takes you on a journey through basketball’s rich history, celebrating iconic moments, legendary players, and memorable games. Whether you’re a seasoned fan or new to the sport, our historical features provide context and depth that enrich your experience.

              Interactive Features and Community Engagement: We value your input and strive to create an interactive experience for our readers. Our blog features polls, quizzes, and opportunities for you to share your thoughts and opinions. Join the conversation and connect with fellow basketball enthusiasts who share your passion.

              Stay Updated with the Latest News: Basketball is a fast-paced sport, and staying informed is essential. Our blog keeps you up-to-date with the latest news, trade rumors, injury updates, and other developments that impact the game. Never miss a beat with our timely and accurate coverage.

              Inspiration and Motivation: Basketball is a sport that inspires greatness and perseverance. Through our blog, we aim to share stories of triumph, dedication, and resilience that resonate with you, both on and off the court. Let these stories motivate and uplift you in your own endeavors.

              A Hub for Fans of All Levels: Whether you’re a casual fan, a dedicated follower, or an aspiring player, our blog caters to basketball enthusiasts of all levels. We provide content that appeals to a diverse audience, ensuring that there’s something for everyone to enjoy.

              By subscribing to our blog and reading our weekly updates, you become part of a vibrant community that celebrates the beauty and excitement of basketball. Your engagement and feedback are crucial to us, and we are committed to delivering content that enriches your experience and deepens your connection to the game.

              Thank you for your continued support and enthusiasm. We look forward to sharing our passion for basketball with you each week and celebrating the moments that make this sport truly special.

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