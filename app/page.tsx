import { redirect } from "next/navigation";

export default function Home() {
  redirect("/en"); // Alapértelmezett nyelv: angol (vagy HU, ha akarod)
}
