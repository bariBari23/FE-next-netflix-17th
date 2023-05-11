"use client"
import styled from 'styled-components';
import React, { ReactNode } from 'react';
//import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { IMovie, IMoviePoster } from '@/app/interface/interface';

const Container = styled.div`
    display: flex;
    width: 375px;
    height: 100%;
`

const ScrollPoster = styled.div`
    display: flex;
    width: 370px;
    flex-wrap: no-wrap;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        width: 0;
    }  
`
interface MovieSliderProps {
    children: IMovie | IMovie[];
}

const MovieSlider = ({children}: MovieSliderProps) =>{
    console.log("durldurl");
    console.log({children});
    return(
        <Container>
            <ScrollPoster>{children}</ScrollPoster>
        </Container>
    );
}

export default MovieSlider;