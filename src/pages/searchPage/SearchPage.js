import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { Container } from "../../reusable-styles/reusableStyle";
import {
  InputSearcher,
  ResultItem,
  SearchBtn,
  SearchField,
  SearchPageWrapper,
  SearchResult,
} from "./SearchPage.style";

export default function SearchPage() {
  const reduxStore = useSelector((state) => state);
  const { products } = reduxStore;
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const productsQuery = searchParams.get("title") || "";

  const searchHendler = () => {
    const params = {};
    if (searchValue.length) params.title = searchValue;
    setSearchParams(params);
  };
  useEffect(() => {
    if (searchValue === "") {
      setSearchParams({});
    }
  }, [searchValue]);
  return (
    <SearchPageWrapper>
      <Container>
        <SearchField>
          <InputSearcher>
            <input
              type="search"
              name=""
              id=""
              placeholder="Search by title..."
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </InputSearcher>
          <SearchBtn>
            <button onClick={() => searchHendler()}>Search</button>
          </SearchBtn>
        </SearchField>
        <SearchResult>
          {products.length
            ? products
                .filter(
                  (product) =>
                    product.title
                      .toLowerCase()
                      .includes(productsQuery.toLowerCase()) &&
                    productsQuery !== ""
                )
                .map((product, index) => {
                  return (
                    <ResultItem key={index}>
                      <Link to={`/products/${product.id}`}>
                        {product.title}
                      </Link>
                    </ResultItem>
                  );
                })
            : "No products"}
        </SearchResult>
      </Container>
    </SearchPageWrapper>
  );
}
