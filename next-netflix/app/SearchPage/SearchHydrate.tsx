  "use client";

  // import { User } from "../types";
  // import { useDebounce } from "react-use";
  import { AiOutlineSearch, AiOutlinePlayCircle } from "react-icons/ai";
  import { GrFormClose } from "react-icons/gr";
  import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
  import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
  import { getSearchData } from "../api";
  import { styled } from "styled-components";
  import { IMovie } from "../interface/interface";
  import {scroll} from "../SearchPage/scroll"


    export default function SearchHydrate() {
      const [searchInput, setSearchInput] = useState('');
      const [searchResults, setSearchResults] = useState<IMovie[]>([]);
      const [isDataLoading, setIsDataLoading] = useState(false); // isLoading 상태 추가


      const fetchSearchData = async ({ queryKey, pageParam = 1 }: { queryKey: [string]; pageParam?: number | undefined }) => {
        const searchInput = queryKey[0];
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchInput}&page=${pageParam}`);
        const searchData = await res.json() as IMovie[];
        // console.log("searchdata : " , searchData);
        // setSearchResults(searchData);
        return searchData;
      };

      const fetchPopularData = async ({pageParam = 1 }: { pageParam?: number | undefined } ) => {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${pageParam}`);
        const popularData = await res.json() as IMovie[];
        // console.log("popData : " , popularData);
        // setSearchResults(popul arData);
        return popularData;
      };
      

      const bottom = useRef(null);

      const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
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

      const onIntersect: IntersectionObserverCallback = ([entry], observer) => {
        if (entry.isIntersecting) {
          fetchNextPage();
        }
      };

      // useObserver로 bottom ref와 onIntersect를 넘겨 주자.
      scroll({
        target: bottom,
        onIntersect,
    })
    
    useEffect(() => {
      if (data) {
        const updatedResults = data.pages.flatMap((page) => page);
        setSearchResults(updatedResults);
        // console.log(updatedResults);
        // console.log("searchResults는", searchResults);
        // console.log(JSON.stringify(searchResults));

        setIsDataLoading(false); // 데이터 로드 완료 후 isLoad 값을 false로 설정
      }
    }, [data]);

    useEffect(() => {
      setIsDataLoading(isQueryLoading);
    }, [isQueryLoading]);

      return (
        <Wrapper>
          <SearchBar>
            <AiOutlineSearch style={{color : "#C4C4C4", width : '30px'}} />
            <SearchInput 
            placeholder="Search for a show, movie, genre, e.t.c" 
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}/>
            <GrFormClose style={{color : "red", width : '30px'}} />
          </SearchBar>
          
          <ListWrapper>
            <h3>Top Searches</h3>
            {!isQueryLoading && !isDataLoading && (
            <List>
              {searchResults.map((movie) => (
                <LittleList key={movie.id}>
                  {movie.poster_path && (
                    <Img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                  )}
                  <h3>{movie.title}</h3>
                  <AiOutlinePlayCircle/>
                </LittleList>
              ))}
              <div ref={bottom} />
            </List>
            )}
          </ListWrapper>  
        </Wrapper>
      );
    }

  const Wrapper = styled.div`
    height: 100%;
    width: 375px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
  `;

  const SearchBar = styled.div`
    display: flex;
    width: 375px;
    height: 52px;
    align-items: center;
    justify-content: space-around;
    left: 0px;
    top: 44px;
    background: #424242;
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
    gap: 3px;

  `;

  const LittleList = styled.div`
    display: flex;
    align-items: center;
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