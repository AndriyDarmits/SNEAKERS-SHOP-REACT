import styled from "@emotion/styled";
import React from "react";
import { useSearchParams } from "react-router-dom";
const PagitationBtn = styled.ul`
  display: flex;
  justify-content: center;
  & > li {
    margin-right: 10px;
  }
  & > li:last-of-type {
    margin-right: 0;
  }
`;

export const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <nav>
      <PagitationBtn>
        {pageNumbers.map((number) => {
          return (
            <li key={number} onClick={() => paginate(number)}>
              <button
                style={{
                  backgroundColor:
                    number === +searchParams.get("page")
                      ? "red"
                      : "transparent",
                }}
              >
                {number}
              </button>
            </li>
          );
        })}
      </PagitationBtn>
    </nav>
  );
};
