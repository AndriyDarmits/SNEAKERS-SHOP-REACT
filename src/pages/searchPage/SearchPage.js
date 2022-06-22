import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
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
  const location = useLocation();

  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchData, setSearchData] = useState(location);
  const productsQuery = searchParams.get("title") || "";
  const params = {};
  const searchHendler = () => {
    if (searchValue.length) params.title = searchValue;
    setSearchParams(params);
  };
  const getSearchResults = () => {
    const searchSearch = products
      .filter(
        (product) =>
          product.title.toLowerCase().includes(productsQuery.toLowerCase()) &&
          productsQuery !== ""
      )
      .map((product, index) => {
        return (
          <ResultItem key={index}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </ResultItem>
        );
      });
    return searchSearch.length > 0 ? searchSearch : "nothing found...";
  };
  useEffect(() => {
    setSearchParams({});
    setSearchValue("");
  }, [location.pathname]);
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
        {productsQuery.length ? (
          <SearchResult>{getSearchResults()}</SearchResult>
        ) : (
          "Type product title to search specific products..."
        )}
      </Container>
    </SearchPageWrapper>
  );
}
