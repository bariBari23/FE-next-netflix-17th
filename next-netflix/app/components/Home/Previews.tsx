import styled from 'styled-components'
import styles from '../styles/home.module.css'
import { MovieApi } from '../../api'
import React, { useEffect, useState } from 'react';

 
function Previews() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        const fetchPopularMovies = async() => {
            try {
                const {data} = await MovieApi.popular();
                setPopular(data.results);
            }catch(error){
                console.error(error);
            }
        };

        fetchPopularMovies();
    }, []);

    console.log(popular);
    return (
        <div>previews</div>
    );
}


export default Previews;