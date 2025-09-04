import { useNavigate } from "react-router-dom";
import axios from "axios";
import TripForm from "../components/TripForm";

export default function AddTrip() {
  const nav = useNavigate();

  const handleAdd = async (trip) => {
    await axios.post("http://localhost:5000/trips", trip);
    nav("/");
  };

  return <TripForm onSubmit={handleAdd} onCancel={() => nav("/")} />;
}
