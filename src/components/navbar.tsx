import {Flex} from "@radix-ui/themes";
import {IoHomeOutline} from "react-icons/io5";
import {SlSettings} from "react-icons/sl";
import {Link} from "@tanstack/react-router"

export default function Navbar() {
  return (
    <Flex className="absolute top-0 left-0 w-full p-6" align={"center"} justify={"end"} gap={"4"}>
      <Link to="/">
        <IoHomeOutline size={"28"}/>
      </Link>
      <Link to="/settings">
        <SlSettings size={"28"}/>
      </Link>
    </Flex>
  )
}