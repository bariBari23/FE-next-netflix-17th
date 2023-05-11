"use client";

import { useRouter } from 'next/navigation';
import { useEffect} from 'react';
import Link from 'next/link';
import Lottie from 'lottie-react';
import NetflixLogo from './netflixLottie.json';
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

    const goToMain = setTimeout(()=>{
        router.push('/MainPage');
    }, 4600)
    
    return (
        <Container>
            <Lottie animationData={NetflixLogo} style={{ margin: 'auto' }}/>
        </Container>
       
    );
}

export default Logo;
