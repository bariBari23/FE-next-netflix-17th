"use client"

import styled from "styled-components"
import Image from "next/image"
import Link from "next/link"
import { useRecoilState } from 'recoil';
import { activeMovie } from '../../recoil';
import { useEffect } from "react";
import { IActiveMovie } from "@/app/interface/interface";

const PosterBox = ({id, circle, title, image, description} : {id: number; circle: boolean; title: string; image: string; description: string; }) =>{

    const [movieInform, setMovieInform] = useRecoilState(activeMovie);
    const handleActiveMovie = () => {
        const updatedMovieInform : IActiveMovie = {
            title: title,
            image: image,
            description: description,
        };
        setMovieInform(updatedMovieInform);
    }

    return(
        <Container circle = {circle}>
            <Link href={`/MainPage/${id}`} as={`/MainPage/${id}`} >
            <ImageBox circle = {circle} image = {image} onClick={handleActiveMovie}/>        
            </Link>
        </Container>

    );
}

export default PosterBox;

const Container = styled.div<{circle: boolean;}>`
    width: 110px;
    height: ${(props) => (props.circle ? '105px' : '163px')};

`

const ImageBox = styled.button<{circle: boolean; image: string;}>`
    background-image: url(${props => props.image});
    background-size: cover;
    width: 103px;
    height: ${(props) => (props.circle ? '103px' : '161px')};
    flex: 0 0 auto;
    margin-left: 7px;
    border-radius: ${(props) => (props.circle ? '100%' : '2%')};

`