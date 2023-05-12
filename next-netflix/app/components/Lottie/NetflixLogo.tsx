"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import lottie from 'lottie-web';
import animationData from './netflixLottie.json';
import styled from 'styled-components';

const Container = styled.div`
    width: 375px;
    height: 812px;
    margin: auto;
    display: flex;
    vertical-align: middle;
    
`

function Logo(){
    const router = useRouter();
    const containerRef = useRef<HTMLDivElement | null>(null);

    const goToMain = setTimeout(()=>{
        router.push('/MainPage');
    }, 4400)

    useEffect(() => {
        lottie.loadAnimation({
            loop: false,
            autoplay: true,
            animationData: animationData,
            container: containerRef.current as HTMLElement,
        });
    }, []);
    return (
        <Container>
            <div ref={containerRef}></div>
        </Container>
       
    );
}

export default Logo;
