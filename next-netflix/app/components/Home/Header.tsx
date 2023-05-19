"use client";

import { AiOutlinePlus, AiOutlineInfoCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

import styled from "styled-components"
import Image from "next/image"
import { popularMoviesRecoil } from "../../recoil";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { MovieApi } from "../../api";


export default function Header() {
    // header random picture  
    const randomMovie = Math.floor(Math.random() * 10);
    const [popularMovies, setPopularMovies] = useRecoilState(popularMoviesRecoil);
    const backdropPath = popularMovies?.[randomMovie]?.backdrop_path;
    const imageSrc = backdropPath ? `https://image.tmdb.org/t/p/original${backdropPath}` : '';

    //Play font style
    const boldText = {
      fontWeight: 'bold', 
      color: '#000000',
      lineHeight: '30px',
      letterSpacing:'-0.06px',
      fontSize: '20.46px'
    }

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
       
      <div>
        <div>
            <HeaderNavigator>
                <Image src="/image/netflix.png" alt="" width={"57"} height={"57"}/>
                <HeaderText>TV Shows</HeaderText> 
                <HeaderText>Movies</HeaderText> 
                <HeaderText>My List</HeaderText> 
            </HeaderNavigator>
            {backdropPath && <HeaderImg src={imageSrc} />}
        </div>
        <Bottom>
            <BottomSub>
                <AiOutlinePlus size={25}/>
                <div>My List</div>
            </BottomSub>
            <PlayButton>
                <FaPlay size={25} color="black"/>
                <div style={boldText}>Play</div>
            </PlayButton>
            <BottomSub>
                <AiOutlineInfoCircle size={25}/>
                <div>Info</div>
            </BottomSub>
        </Bottom>
      </div>
    )
  }

const HeaderNavigator = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 375px;   
  padding: 1rem 1rem 0 0;
  cursor: pointer;
  z-index: 99;
  position: relative;
`;

const HeaderText = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
  color: white;
`;

const HeaderImg = styled.img`
    width: 375px;
    height: 415px;
    object-fit: cover;
    margin-top: -5rem;
    z-index: 1;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 375px;   
  padding: 1rem 1rem 0 0;
  margin-bottom: 2rem;
`;

const BottomSub = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PlayButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #C4C4C4;
  width: 100px;
  height: 45px;
  border-radius: 5.625px;
`;