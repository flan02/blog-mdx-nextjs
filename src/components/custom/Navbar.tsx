import Link from "next/link"
import { NavigationMenuDemo } from "./NavigationMenuDemo"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header>
      <NavigationMenuDemo />
    </header>
  )
}

export default Navbar