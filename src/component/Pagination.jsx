import { useState } from "react";
function Pagination({ nombreMovies }) {
  let [pagination, setPagination] = useState([1, 2, 3, 4, 5]);
  let [page, setPage] = useState(1);
  const movieLength = parseInt(nombreMovies);
  const nombrePage = Math.ceil(movieLength / 6);
  return (
    <div className="pagination">
      <span
        onClick={() => {
          setPage(1);
          setPagination([1, 2, 3, 4, 5]);  
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="currentColor"
            d="m272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"
          />
        </svg>
      </span>
      <span
        onClick={() => {
          let newPagination = [];
          if (
            (page > 1 && page <= 3) ||
            (page > nombrePage - 2 && page <= nombrePage)
          ) {
            setPage(--page);
          } else if (pagination[0] > 1) {
            pagination.map((p) => {
              newPagination.push(--p);
            });
            setPagination(newPagination);
            setPage(--page);
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11h12Z"
          />
        </svg>
      </span>
      {pagination.map((p) => {
        if (p === page) {
          return (
            <span key={p} style={{ backgroundColor: "#08AB4B" }}>
              {p}
            </span>
          );
        } else {
          return <span key={p}>{p}</span>;
        }
      })}
      <span
        onClick={() => {
          let newPagination = [];
          if (page < 3 || (page > nombrePage - 3 && page < nombrePage)) {
            setPage(++page);
          } else if (pagination[4] < nombrePage) {
            pagination.map((p) => {
              newPagination.push(++p);
            });
            setPagination(newPagination);
            setPage(++page);
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 21 21"
        >
          <path
            fill="none"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m13.5 6.497l4 4.002l-4 4.001m-9-4h13"
          />
        </svg>
      </span>
      <span
        onClick={() => {
          setPage(nombrePage);
          setPagination([
            nombrePage - 4,
            nombrePage - 3,
            nombrePage - 2,
            nombrePage - 1,
            nombrePage,
          ]);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="currentColor"
            d="M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512L181.7 851.1A7.98 7.98 0 0 0 188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512L485.7 851.1A7.98 7.98 0 0 0 492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"
          />
        </svg>
      </span>
    </div>
  );
}
export default Pagination;
