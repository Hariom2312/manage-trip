import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export default function TripList({ trips, onDelete }) {
  const nav = useNavigate();
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {trips.map((t) => (
        <div key={t.id} className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{t.destination}</h2>
            <p>{t.startDate} → {t.endDate}</p>
            <p className="font-bold">${t.price}</p>
            <div className="badge badge-info">{t.status}</div>
            <div className="card-actions justify-end mt-2">
              <button className="btn btn-outline btn-sm" onClick={() => nav(`/edit/${t.id}`)}>
                <EditIcon />
              </button>
              <button className="btn btn-error btn-sm" onClick={() => onDelete(t.id)}>
                <DeleteIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
