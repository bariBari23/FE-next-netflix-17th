"use client";
import styled from 'styled-components'
import styles from '../styles/home.module.css'
import Header from '../components/Home/Header';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { topRatedMoviesRecoil, popularMoviesRecoil, nowPlayingMoviesRecoil, previewMoviesRecoil } from '../recoil';
import HandleRecoil from '../components/HandleRecoil';
import Navigation from '../components/Navigation/Navigation';
import PosterBox from '../components/Home/PosterBox';


export default function Home() {
  const topRatedMovies = useRecoilValue(topRatedMoviesRecoil);
  const popularMovies = useRecoilValue(popularMoviesRecoil);
  const previewMovies = useRecoilValue(previewMoviesRecoil);
  const nowPlayingMovies = useRecoilValue(nowPlayingMoviesRecoil);

  HandleRecoil();

  return (
    
    <div className={styles.container}>
        <Navigation/>
        <Header></Header>
        
        <TitleText style={{ fontSize: '26.75px' }}>Previews</TitleText>
        <MovieSlider>
            {
                previewMovies.map((movie) =>{
                    return (
                    <PosterBox key={movie.id} circle = {true} title = {movie.title} image = {`https://image.tmdb.org/t/p/original${movie.poster_path}`} description= {movie.overview}/>
                    );
                    },
            )}
        </MovieSlider>

        <TitleText>Now Playing</TitleText>
        <MovieSlider>
            {
                nowPlayingMovies.map((movie) =>{
                    return (
                    <PosterBox key={movie.id} circle = {false} title = {movie.title} image = {`https://image.tmdb.org/t/p/original${movie.poster_path}`} description= {movie.overview}/>
                    );
                    },
            )}
        </MovieSlider>

        <TitleText>Top Rated</TitleText>
        <MovieSlider>
            {
                topRatedMovies.map((movie) =>{
                    return (
                    <PosterBox key={movie.id} circle = {false} title = {movie.title} image = {`https://image.tmdb.org/t/p/original${movie.poster_path}`} description= {movie.overview}/>
                    );
                    },
            )}
        </MovieSlider>

        <TitleText>Popular</TitleText>
        <MovieSlider>
            {
                popularMovies.map((movie) =>{
                    return (
                    <PosterBox key={movie.id} circle = {false} title = {movie.title} image = {`https://image.tmdb.org/t/p/original${movie.poster_path}`} description= {movie.overview}/>
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

const TitleText = styled.div`
    font-size: 21px;
    color: white;
    font-weight: 700;
    margin-left: 16px;
    margin-bottom: 14px;
`
