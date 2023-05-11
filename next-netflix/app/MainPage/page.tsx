"use client";
import styled from 'styled-components'
import styles from '../styles/home.module.css'
import Header from '../components/Home/Header';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { topRatedMoviesRecoil, popularMoviesRecoil, nowPlayingMoviesRecoil, previewMoviesRecoil } from '../recoil';
import HandleRecoil from '../components/HandleRecoil';


export default function Home() {
  const topRatedMovies = useRecoilValue(topRatedMoviesRecoil);
  const popularMovies = useRecoilValue(popularMoviesRecoil);
  const previewdMovies = useRecoilValue(previewMoviesRecoil);
  const nowPlayingMovies = useRecoilValue(nowPlayingMoviesRecoil);

  HandleRecoil();

  return (
    // 지금 div는 home.module.css 파일의 .container style을 따르고 있음! 
    // 거기 보면 height:100%인데 아직 아무 컴포넌트의 height도 추가되지 않아서 그냥 배경이 까맣게 보일거야! 여긴 그냥 컴포넌트 쭉 쓰고 component 폴더에 만들어도 될 것 같아!
    <div className={styles.container}>
      <Container>
          <Header></Header>
          <TopRatedText>Top Rated</TopRatedText>
          <MovieSlider>
            {
                topRatedMovies.map((movie) =>{
                    return (
                    <RectanglePoster key={movie.id} posterImg = {`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
                    );
                    },
            )}
        </MovieSlider>
      </Container>  

    </div>
  )
}

const Container = styled.div`
  width : 375px;
  height: 100%;
  display: flex;
  flex-direction: column;
`
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
const TopRatedText = styled.div`
    font-size: 21px;
    color: white;
    font-weight: 700;
    margin-left: 16px;
    margin-bottom: 14px;
`
