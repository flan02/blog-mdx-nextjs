import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/custom/Navbar";
import { ThemeProvider } from "next-themes";
import MaxWidthWrapper from "@/components/reutilizable/MaxWidthWrapper";
import Footer from "@/components/custom/Footer";
import { siteConfig } from "@/config/site";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["100", "300", "700"],
  style: ["italic"],
  subsets: ["latin"],
  variable: "--font-roboto"
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: "Generated by create next app",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
    "Shadcnui",
    "Javascript",
    "Blog",
  ],
  authors: [
    {
      name: "Dan Chanivet",
      url: "https://github.com/flan02",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og`],
    creator: "@codingJitsu",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("", roboto.variable)}>
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MaxWidthWrapper>
            <Navbar />
            {children}
          </MaxWidthWrapper>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
