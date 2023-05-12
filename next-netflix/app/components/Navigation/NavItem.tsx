import styled from 'styled-components';
import Image from 'next/image';
import {useRecoilState} from 'recoil';
import { activeIcon } from '../../recoil';

const NavItem = ({icon}: {icon: string}) =>{
    const [active, setActivePage] = useRecoilState(activeIcon);
    const activeIcons = (e: React.MouseEvent<HTMLButtonElement>) =>{
        setActivePage(icon);
    }
    return(
        <NavIconBox onClick = {activeIcons}>
            <IconImg src={`/icons/${icon}.png`} activeIcon={active} nowIcon = {icon}/>
            <IconName>{icon}</IconName>
        </NavIconBox>
    );
}

export default NavItem;

const NavIconBox = styled.button`
    display: flex;
    height: 48px;
    width: 80px;
    text-align: center
    margin-top: 4px;
    align-items: center;
    flex-direction: column;
    color: white;
    
`

const IconImg = styled.img<{ activeIcon: string, nowIcon: string; }>`
    display: flex;
    background-size: cover;
    opacity: ${(props) => props.activeIcon == props.nowIcon ? 1 : 0.6};
`
const IconName = styled.div`
    display: flex;
    font-size: 8.2px;
    line-height: 30.4px;
    font-weight: 500px;
    whiteSpace: nowrap;
`