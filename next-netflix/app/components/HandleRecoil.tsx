"use client";

import styled from 'styled-components';
import styles from '../styles/home.module.css';
import { MovieApi } from '../api';
import React, { useEffect, useState } from 'react';
import { topRatedMoviesRecoil, previewMoviesRecoil, nowPlayingMoviesRecoil, popularMoviesRecoil } from '../recoil';
import { useRecoilState } from 'recoil';


function HandleRecoil(){
    const [ topRatedMovies, setTopRatedMovies ] = useRecoilState(topRatedMoviesRecoil);

    useEffect(() => {
        const fetchTopRatedMovies = async() => {
            try {
                const {data} = await MovieApi.topRated();
                setTopRatedMovies(data.results);
            }catch(error){
                console.error(error);
            }
        };
        fetchTopRatedMovies();
    }, [setTopRatedMovies]);

    const [ nowPlayingMovies, setNowPlayingMovies ] = useRecoilState(nowPlayingMoviesRecoil);

    useEffect(() => {
        const fetchNowPlayingMovies = async() => {
            try {
                const {data} = await MovieApi.nowPlaying();
                setNowPlayingMovies(data.results);
            }catch(error){
                console.error(error);
            }
        };
        fetchNowPlayingMovies();
    }, [setNowPlayingMovies]);

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

    const [ popularMovies, setPopularMovies ] = useRecoilState(popularMoviesRecoil);

    useEffect(() => {
        const fetchPopularMovies = async() => {
            try {
                const {data} = await MovieApi.popular();
                setPopularMovies(data.results);
            }catch(error){
                console.error(error);
            }
        };
        fetchPopularMovies();
    }, [setPopularMovies]);
    return null;
}


export default HandleRecoil;