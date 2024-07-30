"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
//import { Icons } from "./icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { POSTS } from "@/lib/constants"
import ModeToggle from "../reutilizable/ModeToggle"
import { Icons } from "../icons/Icons"
import { TreePine } from "lucide-react"


const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


export function NavigationMenuDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-start justify-between pt-10 z-50",
        className
      )}
    >
      <Link href={"/"}>
        <div className="flex items-center justify-start">
          <TreePine className="mb-1" size={32} />
          <p className="text-3xl font-bold -mt-1">TREEBALL</p>
        </div>
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Posts</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[280px] sm:w-[350px] md:w-[410px] lg:w-[500px] gap-3 p-2 md:grid-cols-2">
                {POSTS.map((post) => (
                  <ListItem
                    key={post.title}
                    title={post.title}
                    href={post.href}
                  >
                    {post.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center justify-between w-20">
        <ModeToggle />
        <Link href="/rss">
          <Icons.rss className="h-6 w-6" />
        </Link>
      </div>
    </div>
  )
}


