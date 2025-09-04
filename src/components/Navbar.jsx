import { Link } from "react-router-dom";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="btn btn-ghost normal-case text-xl flex gap-2">
          <FlightTakeoffIcon /> Trip Manager
        </Link>
        <Link to="/add" className="btn btn-primary">+ Add Trip</Link>
      </div>
    </div>
  );
}
