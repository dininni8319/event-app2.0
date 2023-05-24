import styled from 'styled-components';
import { rem } from "polished";

interface Props {
  
}

export const ButtonCounterWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f2f6;
  padding: 0 5px;
`

export const ButtonCounterStyle = styled.span`
  width: 25px;
  height: 25px;
  text-align: center;
  /* padding: ${rem('2px')}; */
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
`

const ButtonCouter = (props: Props) => {
  return (
    <ButtonCounterWrapper>
        <ButtonCounterStyle>-</ButtonCounterStyle>
          <p className="mb-0">in { "diffDays" } Days</p>
        <ButtonCounterStyle>+</ButtonCounterStyle>
    </ButtonCounterWrapper>
  )
}

export default ButtonCouter
