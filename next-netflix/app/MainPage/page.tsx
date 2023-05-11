"use client";
import styled from 'styled-components'
import styles from '../styles/home.module.css'
import Header from '../components/Home/Header';
import TopRated from '../components/Home/TopRated';

export default function Home() {
  return (
    // 지금 div는 home.module.css 파일의 .container style을 따르고 있음! 
    // 거기 보면 height:100%인데 아직 아무 컴포넌트의 height도 추가되지 않아서 그냥 배경이 까맣게 보일거야! 여긴 그냥 컴포넌트 쭉 쓰고 component 폴더에 만들어도 될 것 같아!
    <div className={styles.container}>
      <Container>
          <Header></Header>
          <TopRated/>
      </Container>
       
      

    </div>
  )
}

const Container = styled.div`
  width : 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
