import styled from "styled-components"
import Image from "next/image"

export default function Header() {
    return (
      <Wrapper>
        <Top>
            <HeaderNavigator>
                <Image src="/image/netflix.png" alt="" width={"57"} height={"57"}/>
                <HeaderText>TV Shows</HeaderText> 
                <HeaderText>TV Shows</HeaderText> 
                <HeaderText>TV Shows</HeaderText> 
            </HeaderNavigator>
            {/* 랜덤 함수 */}
        </Top>

      </Wrapper>
    )
  }

const Wrapper = styled.div`

`;

const Top = styled.div`

`;

const HeaderNavigator = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 375px;   
  padding: 1rem 1rem 0 0;
  cursor: pointer;
`;

const HeaderText = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
  color: white;
`;

const Logo = styled.div`

`;