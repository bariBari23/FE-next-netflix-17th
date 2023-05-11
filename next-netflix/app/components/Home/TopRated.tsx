"use client";

import styled from 'styled-components';
import styles from '../styles/home.module.css';
import { MovieApi } from '../../api';
import React, { useEffect, useState } from 'react';
import { topRatedMoviesRecoil } from '../../recoil';
import { useRecoilState } from 'recoil';
import MovieSlider from './MovieSlider';
import { IMovie } from '../../interface/interface';

const RectanglePoster = styled.div<{posterImg : string}>`
    background-image: url(${props => props.posterImg});
    background-size: cover;
    width: 103px;
    height: 161px;
    flex: 0 0 auto;
    margin-left: 6px;
    
`


const TopRated: React.FC = () => {
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
    return (
        <MovieSlider>
            {
                topRatedMovies.map((movie) =>{
                    return (
                    <RectanglePoster key={movie.id} posterImg = {`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
                    );
                    },
            )}
        </MovieSlider>
    );
}


export default TopRated;