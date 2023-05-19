"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import { GetServerSideProps } from "next";
import styled from 'styled-components'
import styles from '../../styles/home.module.css'
import SearchHydrate from "@/app/SearchPage/SearchHydrate";
import { useRecoilValue } from 'recoil';
import { activeMovie } from "../../recoil";

export default function Page() {
  const movieInform = useRecoilValue(activeMovie);
  console.log(movieInform.image);
  return (
    <div className={styles.container}>
      <PosterBox src = {movieInform.image}/>
      <TitleBox>{movieInform.title}</TitleBox>
      <DesBox>{movieInform.description}</DesBox>
    </div>
  );
}
const PosterBox = styled.img`
  width: 100%;
  height: 100%;
  margin: 1rem 0 1rem 0;
`
const TitleBox = styled.div`
  font-size: 27px;
  font-weight: 700%;
  color: white;
`
const DesBox = styled.div`
  font-size: 12px;
  font-weight: 400%;
  color: white;
`
