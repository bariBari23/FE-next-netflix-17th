"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import { GetServerSideProps } from "next";
import styled from 'styled-components'
import styles from '../../styles/home.module.css'
import SearchHydrate from "@/app/Search/SearchHydrate";
import { useRecoilValue } from 'recoil';
import { activeMovie } from "../../recoil";
import { FaPlay } from "react-icons/fa";
import Navigation from "@/app/components/Navigation/Navigation";

export default function Page() {
  const movieInform = useRecoilValue(activeMovie);
  console.log(movieInform.image);

  //Play font style
  const boldText = {
    fontWeight: 'bold', 
    color: '#000000',
    lineHeight: '30px',
    letterSpacing:'-0.06px',
    fontSize: '20.46px'
  }

  return (
    <div className={styles.container}>
      <PosterBox src = {movieInform.image}/>
      <PlayButton>
        <FaPlay size={25} color="black"/>
        <div style={boldText}>Play</div>
      </PlayButton>
      <InfoBox>
        <TitleBox>{movieInform.title}</TitleBox>
        <DesBox>{movieInform.description}</DesBox>
      </InfoBox>

      <Navigation/>
    </div>
  );
}
const PosterBox = styled.img`
  width: 100%;
  height: 415px;
  object-fit: cover;
  z-index: 1;
`
const TitleBox = styled.div`
  font-size: 27px;
  font-weight: 700;
  color: white;
`
const DesBox = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: white;
`
const PlayButton = styled.button`
  width: 303px;
  height: 45px;
  margin-left: 10%;
  margin-top: 13px;
  border: 0px;
  outline: 0px;
  background-color: #C4C4C4;
  border-radius: 5.625px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 15px;
  margin-top: 13px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  color: white;
  gap: 10px;
`;