"use client"

import { IMovie } from "../app/interface/interface"

import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "4a427cc6585f047c91a2fa3483fb8d31",
        language: "en-US"
    }
});

export default api;

export const MovieApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    topRated: () => api.get("movie/top_rated"),
    movieDetail: (id: number) => api.get(`movie/${id}`,{
        params: {
            append_to_response: "videos"
        }
    })
}


export async function getSearchData() {
  //api key .env 파일에 저장한 상태
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`);
  const datas = (await res.json()) as IMovie[];
  console.log(datas);
  console.log(res);
  return datas;
}


