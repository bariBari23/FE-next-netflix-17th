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
    movieDetail: (id: number) => api.get(`movie/${id}`,{
        params: {
            append_to_response: "videos"
        }
    })
}