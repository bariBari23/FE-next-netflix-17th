"use client";

import { IMovie } from './interface/IMovie';
import { atom } from 'recoil';


export const topRatedMoviesRecoil = atom<IMovie[]>({
    key: 'topRatedMovies',
    default: []
});

