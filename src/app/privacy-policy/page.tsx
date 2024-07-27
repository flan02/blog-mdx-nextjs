import { Metadata } from "next";
import { getPrivacyPolicy } from "../blog/utils";
import CustomMDX from "@/components/custom/CustomMdx";
import MaxWidthWrapper from "@/components/reutilizable/MaxWidthWrapper";
import { NavigationMenuDemo } from "@/components/custom/NavigationMenuDemo";

export const metadata: Metadata = {
  title: "Privary Policy",
  description: "This page explains the Privacy Policy of the site."
};

export default function Page() {
  let post = getPrivacyPolicy().find((post) => post.slug === "privacy-policy");

  return (
    <MaxWidthWrapper>

      <article className="prose">
        <CustomMDX source={post?.content} />
      </article>
    </MaxWidthWrapper>
  );
}