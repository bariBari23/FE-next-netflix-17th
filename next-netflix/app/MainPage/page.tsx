"use client";
import styled from 'styled-components'
import styles from '../styles/home.module.css'
import Header from '../components/Home/Header';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { topRatedMoviesRecoil, popularMoviesRecoil, nowPlayingMoviesRecoil, previewMoviesRecoil } from '../recoil';
import HandleRecoil from '../components/HandleRecoil';
import Navigation from '../components/Navigation/Navigation';


export default function Home() {
  const topRatedMovies = useRecoilValue(topRatedMoviesRecoil);
  const popularMovies = useRecoilValue(popularMoviesRecoil);
  const previewMovies = useRecoilValue(previewMoviesRecoil);
  const nowPlayingMovies = useRecoilValue(nowPlayingMoviesRecoil);

  useEffect(() => {
    HandleRecoil();
  },[]);

  return (
    
    <div className={styles.container}>
        <Navigation/>
        <Header></Header>
        
        <TitleText style={{ fontSize: '26.75px' }}>Previews</TitleText>
        <MovieSlider>
            {
                previewMovies.map((movie) =>{
                    return (
                    <CirclePoster key={movie.id} posterImg = {`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
                    );
                    },
            )}
        </MovieSlider>

        <TitleText>Now Playing</TitleText>
        <MovieSlider>
            {
                nowPlayingMovies.map((movie) =>{
                    return (
                    <RectanglePoster key={movie.id} posterImg = {`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
                    );
                    },
            )}
        </MovieSlider>

        <TitleText>Top Rated</TitleText>
        <MovieSlider>
            {
                topRatedMovies.map((movie) =>{
                    return (
                    <RectanglePoster key={movie.id} posterImg = {`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
                    );
                    },
            )}
        </MovieSlider>

        <TitleText>Popular</TitleText>
        <MovieSlider>
            {
                popularMovies.map((movie) =>{
                    return (
                    <RectanglePoster key={movie.id} posterImg = {`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
                    );
                    },
            )}
        </MovieSlider>
        
        
    </div>
  )
}


const MovieSlider = styled.div`
    display: flex;
    width: 370px;
    flex-wrap: no-wrap;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        width: 0;
    }  
`
const RectanglePoster = styled.div<{posterImg : string}>`
    background-image: url(${props => props.posterImg});
    background-size: cover;
    width: 103px;
    height: 161px;
    flex: 0 0 auto;
    margin-left: 6px;
    border-radius: 2px;
`
const CirclePoster = styled.div<{posterImg : string}>`
    background-image: url(${props => props.posterImg});
    background-size: cover;
    width: 102px;
    height: 102px;
    flex: 0 0 auto;
    margin-left: 7px;
    border-radius: 100%;
`
const TitleText = styled.div`
    font-size: 21px;
    color: white;
    font-weight: 700;
    margin-left: 16px;
    margin-bottom: 14px;
`
