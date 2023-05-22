"use client"
import styled from 'styled-components';
import NavItem from './NavItem';
import { useRecoilValue } from 'recoil';
import { activeUser } from "../../recoil";


const Navigation = () =>{
    const user = useRecoilValue(activeUser);
    console.log(user);
    return(
        <Container>
            <NavBar>
                <NavItem icon = "Home"/>
                <NavItem icon = "Search"/>
                <NavItem icon = "Coming Soon"/>
                <NavItem icon = "Downloads"/>
                <ProfileBox>
                  <Profile src = {`/image/${user.userName}.jpeg`}/>
                </ProfileBox> 
            </NavBar>
        </Container>
    );
}

export default Navigation;

const Container = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 375px;
  height: 48px;
  z-index: 100;
  background-color: #121212;
  
`

const NavBar = styled.div`
  display: flex;
  width: 90%;
  margin-left: 5%;
  margin-top: 11px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

`
const ProfileBox = styled.div`
    display: flex;
    height: 48px;
    width: 80px;
    align-items: center;
`
const Profile = styled.img`
  width: 48px;
  border-radius: 100%;
  margin-left: 20px;
  border: solid white 2px ;

`

