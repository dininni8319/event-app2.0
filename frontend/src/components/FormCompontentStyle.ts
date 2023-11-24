import styled from 'styled-components';
import { rem } from 'polished'

export const FormWrapperStyle = styled.form`
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 55%;
  margin-top: 0.650;
  
  @media (max-width: 768px) {
    width: 95%;
  }

  @media (max-width: 1200px) {
    width: 80%;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  justify-content: ${(props: any) =>
    props.justiContent ? props.justiContent : 'start'};
  margin-bottom: ${rem('5px')};
  width: 100%;

  h3 {
    font-size: 25px;
    font-weight: 400;
  }
  
  .grid-class {
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    grid-gap: 5px;
  }

  @media (max-width: 768px) {
    .grid-class {
      display: grid;
      grid-template-columns: 1fr;
    }
 }
`
export const Input = styled.input`
  box-sizing: border-box;
  width: ${(props: any) => (props.width ? props.width : '100%')};
  height: ${rem('40px')};
  background-color: #f1f2f6;
  padding: ${rem('25px')} ${rem('15px')};
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: ${(props: any) => props.id === "time_id" ? "center" : 'start'};

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Button = styled.button`
  width: 100%;
  height: ${rem('80px')};
  color: white;
  background-color: #6800ed;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
`