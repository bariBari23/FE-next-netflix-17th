"use client";

import { AiOutlineSearch, AiOutlinePlayCircle } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { IMovie } from "../interface/interface";
import { Scrolling } from "../Search/Scrolling"
import Navigation from "../components/Navigation/Navigation";
import styles from "../styles/home.module.css"


export default function SearchHydrate() {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState<IMovie[]>([]);
  const [isDataLoading, setIsDataLoading] = useState(false); // isLoading 상태 추가
  const bottom = useRef(null); 

  const fetchSearchData = async ({ queryKey, pageParam = 1 }: { queryKey: [string]; pageParam?: number | undefined }) => {
    const searchInput = queryKey[0];
    const apiKey = "4a427cc6585f047c91a2fa3483fb8d31";
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchInput}&page=${pageParam}`);
    const searchData = await res.json() as IMovie[];
    return searchData;
  };

  const fetchPopularData = async ({pageParam = 1 }: { pageParam?: number | undefined } ) => {
    const apiKey = "4a427cc6585f047c91a2fa3483fb8d31";
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${pageParam}`);
    const popularData = await res.json() as IMovie[];
    return popularData;
  };

  const {
    data,
    fetchNextPage,
    isFetching,
    isLoading : isQueryLoading,
  } = useInfiniteQuery(
    ['searchData', searchInput],
    ({ pageParam }) => {
      return searchInput
      ? fetchSearchData({ queryKey: [searchInput], pageParam })
      : fetchPopularData({ pageParam });
    },
    {
      getNextPageParam: (lastPage) => {
        const currentPage = lastPage?.[lastPage.length - 1]?.page || 1;
        return currentPage + 1;
      }
    }
  );

  const onIntersect = ([entry]: IntersectionObserverEntry[]) => entry.isIntersecting && fetchNextPage()

  // Scroll로 bottom ref와 onIntersect를 넘겨줌
  Scrolling({
    target: bottom,
    onIntersect,
  })
 

  useEffect(() => {
    if (data) {
      const updatedResults = data.pages.flatMap((page) => page);
      setSearchResults(updatedResults);
      setIsDataLoading(false); // 데이터 로드 완료 후 isLoading 값을 false로 설정
    }
  }, [data]);

  useEffect(() => {
    setIsDataLoading(isQueryLoading);
  }, [isQueryLoading]);

  return (
    <div className={styles.container}>
      <SearchBar>
        <AiOutlineSearch color="#C4C4C4" size={30}/>
        <SearchInput 
        placeholder="Search for a show, movie, genre, e.t.c" 
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}/>
        <GrFormClose color="#C4C4C4" size={30}/>
      </SearchBar>
      
      <ListWrapper>
        <TitleText>Top Searches</TitleText>
        {!isQueryLoading && !isDataLoading && !isFetching && data && data.pages && (
          <List>
          {searchResults.map((movie) => {
            return movie.results.map((result) => {
              return (
                <div key={result.id}>
                  {result.id ? (
                    <InnerList>
                      {result.poster_path === null ? ( (
                        <Img src="/Netflix_Logo.png" alt={result.title} />
                        )) : (
                        <Img src={`https://image.tmdb.org/t/p/original${result.poster_path}`} alt={result.title} />
                        )}
                      <MovieTitle>{result.title}</MovieTitle>
                      <AiOutlinePlayCircle size="24"/>
                    </InnerList>
                  ) : (
                    <h3>No poster and title available</h3>
                  )}
                </div>
              );
            });
          })}
        </List>
        )}
      </ListWrapper>
      
      <Navigation/>
      <div ref={bottom} />
    </div>
  );
}
  

const SearchBar = styled.div`
  display: flex;
  width: 375px;
  height: 52px;
  align-items: center;
  justify-content: space-around;
  left: 0px;
  top: 44px;
  background: #424242;
  margin: 44px 0px 15px;
`;

const SearchInput = styled.input`
  background: none;
  font-size: 15.213px;
  width: 270px;
  outline: none;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;


const List = styled.div`
  width: 375px;
  background: #424242;
  display: flex;
  flex-direction: column;
`;

const InnerList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3px;
`;

const Img = styled.img`
  background-color: rgb(25, 25, 25);
  box-sizing: content-box;
  width: 146px;
  height: 76px;
  aspect-ratio: 146 / 76;
  border: 0px;
  border-radius: 2px;
  object-fit: cover;
}
`;

const TitleText = styled.div`
  font-size: 27px;
  color: white;
  font-weight: 700;
  margin-left: 16px;
  margin-bottom: 14px;
`

const MovieTitle = styled.div`
  width : 180px;
  font-style: normal;
  font-weight: 400;
  font-size: 14.7222px;
  line-height: 30px;
  letter-spacing: 0.751111px;
  padding-left: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: white;
`