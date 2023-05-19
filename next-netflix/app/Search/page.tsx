"use client";
import {useState} from 'react';
import { topRatedMoviesRecoil, popularMoviesRecoil, nowPlayingMoviesRecoil, previewMoviesRecoil } from '../recoil';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { AiOutlineSearch, AiOutlinePlayCircle } from "react-icons/ai";
import styles from "../styles/home.module.css"
import { GrFormClose } from "react-icons/gr";
import Navigation from "../components/Navigation/Navigation";

export default function Hydration() {
  const topRatedMovies = useRecoilValue(topRatedMoviesRecoil);
  const [searchInput, setSearchInput] = useState('');
  console.log(topRatedMovies);
    return (
      <div className={styles.container}>
        <SearchBar>
        <AiOutlineSearch style={{color : "#C4C4C4", width : '30px'}} />
        <SearchInput 
        placeholder="Search for a show, movie, genre, e.t.c" 
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}/>
        <GrFormClose style={{color : "red", width : '30px'}} />
      </SearchBar>
      <ListWrapper>
        <List>
            {topRatedMovies.map((result) => (
                <div key={result.id}>
                  {result.id ? (
                    <InnerList>
                      <Img src={`https://image.tmdb.org/t/p/original${result.poster_path}`} alt={result.title} />
                      <MovieTitle>{result.title}</MovieTitle>
                      <AiOutlinePlayCircle size="24"/>
                    </InnerList>
                  ) : (
                    <h3>No poster and title available</h3>
                  )}<div/>
                </div>
              
            ))}<div/>
        </List>
      </ListWrapper>
      <Navigation/>
    </div>
    );
  }
  
/*export async function getServerSideProps(): Promise<{ props: HydrationProps }> {
    const queryClient = getQueryClient();
    await queryClient.prefetchQuery(["hydrate-datas"], getSearchData);
    const dehydratedState = dehydrate(queryClient);

    return {
        props: {
        searchData: dehydratedState,
        },
    };
    }*/

    const SearchBar = styled.div`
    display: flex;
    width: 375px;
    height: 52px;
    align-items: center;
    justify-content: space-around;
    left: 0px;
    top: 44px;
    background: #424242;
    margin: 44px 0px 15px;
  `;
  
  const SearchInput = styled.input`
    background: none;
    font-size: 15.213px;
    width: 270px;
    outline: none;
  `;
  

  const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;


const List = styled.div`
  width: 375px;
  background: #424242;
  display: flex;
  flex-direction: column;
`;

const InnerList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3px;
`;

const Img = styled.img`
  background-color: rgb(25, 25, 25);
  box-sizing: content-box;
  width: 146px;
  height: 76px;
  aspect-ratio: 146 / 76;
  border: 0px;
  border-radius: 2px;
  object-fit: cover;
}
`;

const TitleText = styled.div`
  font-size: 27px;
  color: white;
  font-weight: 700;
  margin-left: 16px;
  margin-bottom: 14px;
`

const MovieTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14.7222px;
  line-height: 30px;
  letter-spacing: 0.751111px;
  padding-left: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: white;
`




