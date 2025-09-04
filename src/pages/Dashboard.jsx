import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import TripList from "../components/TripList";
import SearchFilter from "../components/SearchFilter";
import Pagination from "../components/Pagination";

const Dashboard = () => {
  const [trips, setTrips] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 4;

  useEffect(() => {
    axios.get("http://localhost:5000/trips").then((res) => setTrips(res.data));
  }, []);

  const deleteTrip = async (id) => {
    if (window.confirm("Delete this trip?")) {
      await axios.delete(`http://localhost:5000/trips/${id}`);
      setTrips(trips.filter((t) => t.id !== id));
    }
  };

  const filtered = useMemo(() => {
    return trips.filter(
      (t) =>
        t.destination.toLowerCase().includes(search.toLowerCase()) &&
        (status ? t.status === status : true)
    );
  }, [trips, search, status]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const currentData = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <>
      <SearchFilter {...{ search, setSearch, status, setStatus }} />
      <TripList trips={currentData} onDelete={deleteTrip} />
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </>
  );
}

export default Dashboard;
