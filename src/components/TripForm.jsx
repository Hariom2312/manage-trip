import { useState, useEffect } from "react";

export default function TripForm({ initialData, onSubmit, onCancel }) {
  const [form, setForm] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    price: "",
    status: "PLANNED",
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.destination) return alert("Destination required");
    onSubmit({ ...form, price: Number(form.price) });
  };

  return (
    <div className="card bg-base-100 shadow-xl p-6 max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label for="place">Place:</label>
        <input
          name="destination"
          id="place"
          value={form.destination}
          onChange={handleChange}
          className="input input-bordered"
          placeholder="Destination"
        />

        <label for="sDate">Start Date:</label>
        <input
          type="date"
          id="sDate"
          name="startDate"
          value={form.startDate}
          onChange={handleChange}
          className="input input-bordered"
        />

        <label for="eDate">End Date:</label>
        <input
          type="date"
          id="eDate"
          name="endDate"
          value={form.endDate}
          onChange={handleChange}
          className="input input-bordered"
        />

        <label for="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="₹ Price"
          />
        <label for="status">Status:</label>
        <select
          name="status"
          id="status"
          value={form.status}
          onChange={handleChange}
          className="select select-bordered"
        >
          <option value="PLANNED">PLANNED</option>
          <option value="ONGOING">ONGOING</option>
          <option value="COMPLETED">COMPLETED</option>
        </select>
        <div className="flex justify-start gap-2 pl-22 mt-2">
          <button className="btn btn-primary" type="submit">
            Save
          </button>
          <button type="button" className="btn" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
