import React from 'react';
import { useParams } from 'react-router-dom';

export default function Pagination() {
  const { page } = useParams();
  const pages = ['1', '2', '3', '4', '5'];
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination pagination-lg justify-content-center">
        {pages.map((el) => (
          <li key={el} className="page-item">
            <a className={el === page ? 'page-link active' : 'page-link'} href={`/${el}`}>
              {el}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
