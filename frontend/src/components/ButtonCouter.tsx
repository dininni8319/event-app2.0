import styled from 'styled-components';
import { rem } from "polished";

export const ButtonCounterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f1f2f6;
  padding: 0 5px;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`

export const ButtonCounterStyle = styled.span`
  width: ${rem("25px")};
  height: ${rem("25px")};
  text-align: center;
  background-color: white;
  border-radius: 50%;
  font-size: ${rem("20px")};
  cursor: pointer;
`

const ButtonCouter = () => {
  return (
    <ButtonCounterWrapper>
        <ButtonCounterStyle>-</ButtonCounterStyle>
          <p className="mb-0">in { "5"} Days</p>
        <ButtonCounterStyle>+</ButtonCounterStyle>
    </ButtonCounterWrapper>
  )
}

export default ButtonCouter
