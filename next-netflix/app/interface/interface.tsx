export interface IMovie{
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_data: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    page: number,
}

export interface IMoviePoster{
    id: number,
    posterImg: string,
}

export interface IActiveMovie{
    title: string,
    image: string,
    description: string,
}

export interface IUser{
    userId: number,
    userName: string,
}

