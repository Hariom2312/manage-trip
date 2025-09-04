import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import TripForm from "../components/TripForm";

export default function EditTrip() {
  const { id } = useParams();
  const nav = useNavigate();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/trips/${id}`).then((res) => setTrip(res.data));
  }, [id]);

  const handleUpdate = async (updatedTrip) => {
    await axios.put(`http://localhost:5000/trips/${id}`, updatedTrip);
    nav("/");
  };

  if (!trip) return <p>Loading...</p>;

  return <TripForm initialData={trip} onSubmit={handleUpdate} onCancel={() => nav("/")} />;
}
