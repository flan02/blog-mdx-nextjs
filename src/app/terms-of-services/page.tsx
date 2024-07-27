
import { getTermsOfServices } from "../blog/utils";

import { Metadata } from "next";
import MaxWidthWrapper from "@/components/reutilizable/MaxWidthWrapper";
import { NavigationMenuDemo } from "@/components/custom/NavigationMenuDemo";
import CustomMDX from "@/components/custom/CustomMdx";

export const metadata: Metadata = {
  title: "Terms Of Services",
  description: "This page explains the terms of use of the site.",
};

export default function Page() {
  let post = getTermsOfServices().find(
    (post) => post.slug === "terms-of-services"
  );

  return (
    <MaxWidthWrapper>

      <article className="prose">
        <CustomMDX source={post?.content} />
      </article>
    </MaxWidthWrapper>
  );
}