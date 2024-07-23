import { cn } from "@/lib/utils";

export default function Header({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={cn("bg-gray-100 mt-1 py-8 px-4 dark:bg-[rgba(50,50,50,.2)]", className)}>{children}</div>;
}