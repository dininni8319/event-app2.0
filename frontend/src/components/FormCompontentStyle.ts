import styled from 'styled-components';
import { rem } from 'polished'

export const FormWrapperStyle = styled.form`
  height: 50vh;
  width: 55%;
  margin-top: 3rem;

  @media screen and (max-width: 700px) {
    width: 100%;
    min-height: 40vh;
  }

  @media screen and (max-width: 1000px) {
    width: 80%;
    min-height: 30vh;
    padding-bottom: ${rem('20px')};
  }

  @media screen and (min-width: 1600px) {
    width: 45%;
    height: 35vh;
  }
`
export const InputWrapper = styled.div`
  display: flex;
  justify-content: ${(props: any) =>
    props.justiContent ? props.justiContent : 'start'};
  margin-bottom: ${rem('15px')};

  h3 {
    font-size: 25px;
    font-weight: 400;
  }
`
export const Input = styled.input`
  width: ${(props: any) => (props.width ? props.width : rem('150px'))};
  height: ${rem('40px')};
  background-color: #f1f2f6;
  padding: ${rem('10px')} ${rem('15px')} ${rem('10px')} ${rem('15px')};
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: ${(props: any) => props.id === "time_id" ? "center" : 'start'};
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