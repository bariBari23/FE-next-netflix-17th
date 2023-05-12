"use client"
import styled from 'styled-components';
import NavItem from './NavItem';


const Navigation = () =>{
    return(
        <Container>
            <NavBar>
                <NavItem icon = "Home"/>
                <NavItem icon = "Search"/>
                <NavItem icon = "Coming Soon"/>
                <NavItem icon = "Downloads"/>
                <NavItem icon = "More"/>
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

