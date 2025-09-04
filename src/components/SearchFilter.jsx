export default function SearchFilter({ search, setSearch, status, setStatus }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 my-4 -mt-3">
      <input
        type="text"
        placeholder="🔍 Search destination..."
        className="input input-bordered w-full max-w-xs"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        className="select select-bordered"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">All Status</option>
        <option value="PLANNED">Planned</option>
        <option value="ONGOING">Ongoing</option>
        <option value="COMPLETED">Completed</option>
      </select>
    </div>
  );
}
