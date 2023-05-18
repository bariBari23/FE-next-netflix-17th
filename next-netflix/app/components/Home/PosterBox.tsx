"use client";

import styled from "styled-components"
import Image from "next/image"
import Link from "next/link"

const PosterBox = ({key, circle, title, image, description} : {key: number; circle: boolean; title: string; image: string; description: string; }) =>{
    return(
        <Container circle = {circle} image = {image}>
            <Link href={{
                pathname: `/${key}`
                query: {id: key, title: title, image: image, description: description,},}} as={`/${key}`}/>
        </Container>

    );
}

export default PosterBox;

const Container = styled.div<{circle: boolean; image: string;}>`
    background-image: url(${props => props.image});
    background-size: cover;
    width: 103px;
    height: ${(props) => (props.circle ? '103px' : '161px')};
    flex: 0 0 auto;
    margin-left: 7px;
    border-radius: ${(props) => (props.circle ? '100%' : '2%')};

`