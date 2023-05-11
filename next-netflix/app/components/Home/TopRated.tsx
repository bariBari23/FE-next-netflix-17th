"use client";

import styled from 'styled-components';
import styles from '../styles/home.module.css';
import { MovieApi } from '../../api';
import React, { useEffect, useState } from 'react';
import { topRatedMoviesRecoil } from '../../recoil';
import { useRecoilState } from 'recoil';
import MovieSlider from './MovieSlider';

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const RectanglePoster = styled.div<{posterImg : string}>`
    background-image: url(${props => props.posterImg});
    background-size: cover;
    width: 103px;
    height: 161px;
`


 
function Toprated() {
    const [topRated, setTopRated] = useState([]);
    const [ topRatedMovies, setTopRatedMovies ] = useRecoilState(topRatedMoviesRecoil);

    useEffect(() => {
        const fetchPopularMovies = async() => {
            try {
                const {data} = await MovieApi.topRated();
                setTopRated(data.results);
            }catch(error){
                console.error(error);
            }
        };
        fetchPopularMovies();
    }, []);

    setTopRatedMovies(topRated);

    console.log(topRated);
    return (
        <MovieSlider>
            {
                topRatedMovies.map((movie) =>(
                    <RectanglePoster key={movie.id} posterImg = {`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
                ))
            }
        </MovieSlider>
    );
}


export default Toprated;