export default function Pagination({ page, totalPages, setPage }) {
  return (
    <div className="join flex justify-center my-4">
      <button
        className="join-item btn"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>
      <button className="join-item btn">Page {page}/{totalPages}</button>
      <button
        className="join-item btn"
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
