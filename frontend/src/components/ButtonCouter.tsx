import styled from 'styled-components'
import { rem } from 'polished'
import { MouseEvent } from 'react'

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

export const ButtonCounterStyle = styled.button`
  width: ${rem('25px')};
  height: ${rem('25px')};
  text-align: center;
  background-color: white;
  border-radius: 50%;
  border: none;
  font-size: ${rem('20px')};
  outline: none;
  cursor: pointer;
`
interface Props {
  increment: (event: MouseEvent<HTMLButtonElement>) => void
  decrement: (event: MouseEvent<HTMLButtonElement>) => void
  count: number
}

const ButtonCouter = ({ increment, decrement, count }: Props) => {
  return (
    <ButtonCounterWrapper>
      <ButtonCounterStyle onClick={decrement}>-</ButtonCounterStyle>
      <p className="mb-0">{`in ${count} Days`}</p>
      <ButtonCounterStyle onClick={increment}>+</ButtonCounterStyle>
    </ButtonCounterWrapper>
  )
}

export default ButtonCouter
