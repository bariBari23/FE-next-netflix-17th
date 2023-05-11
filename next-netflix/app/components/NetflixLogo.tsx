"use client";

import { useRouter } from 'next/navigation';
import { useEffect} from 'react';
import Link from 'next/link';

function Logo(){
    const router = useRouter();

    const goToMain = setTimeout(()=>{
        router.push('/MainPage');
    }, 4000)
    
    return (
        <div>complete</div>

    );
}

export default Logo;
