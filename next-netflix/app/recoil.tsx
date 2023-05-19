"use client";

import { IActiveMovie, IMovie } from './interface/interface';
import { atom } from 'recoil';


export const topRatedMoviesRecoil = atom<IMovie[]>({
    key: 'topRatedMovies',
    default: []
});

export const popularMoviesRecoil = atom<IMovie[]>({
    key: 'popularMovies',
    default: []
});

export const previewMoviesRecoil = atom<IMovie[]>({
    key: 'previewdMovies',
    default: []
});

export const nowPlayingMoviesRecoil = atom<IMovie[]>({
    key: 'nowPlayingMovies',
    default: []
});

export const activeIcon = atom<string>({
    key: 'activeIcon',
    default: 'Home'
})

export const activeMovie = atom<IActiveMovie[]>({
    key: 'activeMovie',
    default: []
})

