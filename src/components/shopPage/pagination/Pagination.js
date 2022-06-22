import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { color } from "../../../GlobalStyles";
import {
  NextBtn,
  PaginationNav,
  PagitationBtn,
  PrevBtn,
} from "./Pagination.style";
export const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  /* fill array with page numbers */
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationNav>
      {+searchParams.get("page") === 1 ? (
        <PrevBtn>
          <FaAngleDoubleLeft />
        </PrevBtn>
      ) : (
        <PrevBtn onClick={() => paginate(1)}>
          <FaAngleDoubleLeft style={{ color: `${color.greyDark}` }} />
        </PrevBtn>
      )}

      <PagitationBtn>
        {pageNumbers.map((number) => {
          return (
            <li key={number} onClick={() => paginate(number)}>
              <button
                style={{
                  color:
                    number === +searchParams.get("page") && `${color.greyDark}`,
                }}
              >
                {number}
              </button>
            </li>
          );
        })}
      </PagitationBtn>
      {+searchParams.get("page") === pageNumbers.length ? (
        <PrevBtn>
          <FaAngleDoubleRight />
        </PrevBtn>
      ) : (
        <NextBtn onClick={() => paginate(pageNumbers.length)}>
          <FaAngleDoubleRight style={{ color: `${color.greyDark}` }} />
        </NextBtn>
      )}
    </PaginationNav>
  );
};
