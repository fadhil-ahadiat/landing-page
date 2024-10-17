import Testimony from "../components/homepage/testimonial";
import Navbar from "../components/navbar/navbar";
import Teams from "@/app/components/teams/teams";

export default function TeamsView() {
  return (
    <div className="font-poppins">
      <Navbar />

      <Teams />

      <Testimony />
    </div>
  )
}
