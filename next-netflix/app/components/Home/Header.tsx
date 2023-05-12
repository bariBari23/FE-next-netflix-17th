"use client";

import styled from "styled-components"
import Image from "next/image"
import { popularMoviesRecoil } from "../../recoil";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { MovieApi } from "@/app/api";


export default function Header() {
    const randomMovie = Math.floor(Math.random() * 10);
    const [popularMovies, setPopularMovies] = useRecoilState(popularMoviesRecoil);

    useEffect(() => {
        const fetchRandomMovies = async() => {
            try {
                const {data} = await MovieApi.popular();
                setPopularMovies(data.results);
            }catch(error){
                console.error(error);
            }
        };
        fetchRandomMovies();
    }, [setPopularMovies]);

    return (
       
      <Wrapper>
        <Top>
            <HeaderNavigator>
                <Image src="/image/netflix.png" alt="" width={"57"} height={"57"}/>
                <HeaderText>TV Shows</HeaderText> 
                <HeaderText>Movies</HeaderText> 
                <HeaderText>My List</HeaderText> 
            </HeaderNavigator>
            <HeaderImg src={`https://image.tmdb.org/t/p/original/${popularMovies[randomMovie]?.backdrop_path}`} />
                 
        </Top>

      </Wrapper>
    )
  }

const Wrapper = styled.div`

`;

const Top = styled.div`

`;

const HeaderNavigator = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 375px;   
  padding: 1rem 1rem 0 0;
  cursor: pointer;
`;

const HeaderText = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
  color: white;
`;

const HeaderImg = styled.img`

`;