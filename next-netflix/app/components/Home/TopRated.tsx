"use client";

import styled from 'styled-components'
import styles from '../styles/home.module.css'
import { MovieApi } from '../../api'
import React, { useEffect, useState } from 'react';
import { topRatedMoviesRecoil } from '../../recoil';
import { useRecoilState } from 'recoil';

 
function Popular() {
    const [popular, setPopular] = useState([]);
    const [ topRatedMovies, setTopRatedMovies ] = useRecoilState(topRatedMoviesRecoil);

    useEffect(() => {
        const fetchPopularMovies = async() => {
            try {
                const {data} = await MovieApi.popular();
                setPopular(data.results);
            }catch(error){
                console.error(error);
            }
        };
        fetchPopularMovies();
    }, []);

    setTopRatedMovies(popular);

    console.log(popular);
    return (
        <div>previews</div>
    );
}


export default Popular;