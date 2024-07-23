import MaxWidthWrapper from "@/components/reutilizable/MaxWidthWrapper";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MaxWidthWrapper>
      {children}
    </MaxWidthWrapper>
  )
}