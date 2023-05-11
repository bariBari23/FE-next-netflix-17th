"use client"
import styled from 'styled-components';
import React, { ReactNode } from 'react';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`
interface MovieSliderProps {
    children: ReactNode;
}

const MovieSlider = ({children}: MovieSliderProps) =>{
    return(
        <Container>{children}</Container>
    );
}

export default MovieSlider;