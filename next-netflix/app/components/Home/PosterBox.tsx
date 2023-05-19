"use client"

import styled from "styled-components"
import Image from "next/image"
import Link from "next/link"

const PosterBox = ({id, circle, title, image, description} : {id: number; circle: boolean; title: string; image: string; description: string; }) =>{
    return(
        <Container circle = {circle}>
            <Link href={{
                pathname: `/MainPage/${id}/${title}/${image}/${description}`,
                }} as={`/MainPage/${id}`}>
            <ImageBox circle = {circle} image = {image}/>        
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