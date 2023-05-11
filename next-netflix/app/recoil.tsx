"use client";

import { IMovie } from './interface/interface';
import { atom } from 'recoil';


export const topRatedMoviesRecoil = atom<IMovie[]>({
    key: 'topRatedMovies',
    default: []
});

