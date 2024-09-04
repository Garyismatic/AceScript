import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import { Avatar } from "@mui/material";
import Link from "next/link";
export default function ProfileDropDown() {

  const { user } = useContext(UserContext);

  return (
    <>
    <Link href="/profile">
      <Avatar
        alt={user?.username.slice(0, 1)}
        src={user?.avatar || "https://freesvg.org/img/abstract-user-flat-4.png"}
        className="cursor-pointer"
      /></Link>

    </>
  );
}
