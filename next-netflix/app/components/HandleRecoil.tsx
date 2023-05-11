"use client";

import styled from 'styled-components';
import styles from '../styles/home.module.css';
import { MovieApi } from '../api';
import React, { useEffect, useState } from 'react';
import { topRatedMoviesRecoil, previewMoviesRecoil } from '../recoil';
import { useRecoilState } from 'recoil';


function HandleRecoil(){
    const [ topRatedMovies, setTopRatedMovies ] = useRecoilState(topRatedMoviesRecoil);

    useEffect(() => {
        const fetchPopularMovies = async() => {
            try {
                const {data} = await MovieApi.topRated();
                setTopRatedMovies(data.results);
            }catch(error){
                console.error(error);
            }
        };
        fetchPopularMovies();
    }, [setTopRatedMovies]);

    const [ previewMovies, setPreviewMovies ] = useRecoilState(previewMoviesRecoil);

    useEffect(() => {
        const fetchPreviewMovies = async() => {
            try {
                const {data} = await MovieApi.upcoming();
                setPreviewMovies(data.results);
            }catch(error){
                console.error(error);
            }
        };
        fetchPreviewMovies();
    }, [setPreviewMovies]);
    return null;
}


export default HandleRecoil;