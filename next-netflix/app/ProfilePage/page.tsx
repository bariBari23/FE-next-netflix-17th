"use client";

import styled from 'styled-components';
import styles from '../styles/home.module.css';
import { useRecoilState } from 'recoil';
import { activeMovie, activeUser } from "../recoil";
import userInfo from "../../public/userInfo.json";
import { IUser } from '../interface/interface';
import Link from "next/link"


export default function Page() {
  const [user, setUser] = useRecoilState(activeUser);
  const handleUser=(id: number, name: string) =>{
    const updatedUser : IUser = {
        userId: id,
        userName: name,
    };
    setUser(updatedUser); 
  }
  
  return (
    <div className={styles.container} align-items="center">
        <Title>넷플릭스를 시청할 프로필을 선택하세요.</Title>
        <BigProfileBox>
            {userInfo.map((user,index) => (
                <Link href={`/MainPage`} as={`/MainPage`}>  
                    <ProfileBox onClick = {() => handleUser(user.userId, user.userName)}>
                        <ProfileImage src= {`/image/${user.userName}.jpeg`}/>
                        <ProfileName>{user.userName}</ProfileName>
                    </ProfileBox>
                </Link>
            ))}
            
        </BigProfileBox>
    </div>
    
  );
}

const Title = styled.div`
    width: 100%;
    font-size: 18px;
    text-align: center;
    margin: 2rem 0 7rem 0;
`

const BigProfileBox = styled.button`
    width: 250px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin: auto;
    justify-content: space-between
`
const ProfileBox = styled.div`
    width: 125px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
`
const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    display: flex;
    border-radius: 7%;

`
const ProfileName = styled.div`
    display: flex;
`

