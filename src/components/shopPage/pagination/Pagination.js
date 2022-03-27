import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
const PaginationNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f8f8;
  // загальні стилі для всіх кнопок
  button {
    background-color: transparent;
    border: 0;
    color: #cccccc;
  }
`;
const PagitationBtn = styled.ul`
  display: flex;
  justify-content: center;
  & > li {
    margin-right: 15px;
  }
  & > li:last-of-type {
    margin-right: 0;
  }
`;
const PrevBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NextBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  /* page quantity */
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <PaginationNav>
      {+searchParams.get("page") === 1 ? (
        <PrevBtn>
          <FaAngleDoubleLeft />
        </PrevBtn>
      ) : (
        <PrevBtn onClick={() => paginate(1)}>
          <FaAngleDoubleLeft style={{ color: "#333333" }} />
        </PrevBtn>
      )}

      <PagitationBtn>
        {pageNumbers.map((number) => {
          return (
            <li key={number} onClick={() => paginate(number)}>
              <button
                style={{
                  color: number === +searchParams.get("page") && "#333333",
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
          <FaAngleDoubleRight style={{ color: "#333333" }} />
        </NextBtn>
      )}
    </PaginationNav>
  );
};
