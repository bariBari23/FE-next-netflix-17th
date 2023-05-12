import { MovieApi } from '../../api'
import React, { useEffect, useState } from 'react';


export default function NowPlaying() {
    const [popular, setPopular] = useState([]);

        useEffect(() => {
            const fetchPopularMovies = async() => {
                try {
                    const {data} = await MovieApi.nowPlaying();
                    setPopular(data.results);
                }catch(error){
                    console.error(error);
                }
            };
    
            fetchPopularMovies();
        }, []);
    
        console.log(popular);
    return (
        <></>
    )
  }
