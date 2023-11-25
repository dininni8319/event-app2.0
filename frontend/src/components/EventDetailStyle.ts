import styled from 'styled-components'
import { rem } from 'polished'

export const EventWrapper = styled.div`
  margin-top: ${rem('20px')};
  width: 80%;
  display: grid;
  grid-template-columns: 5fr 1fr;
  border-bottom: 1px solid #ccc;
  padding-bottom: ${rem('20px')};

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 1200px) {
    width: 55%;
    grid-template-columns: 4fr 1fr;
    grid-gap: 5px;
  }
   
  @media screen and (min-width: 1500px) {
    width: 40%;
  }

`

export const EventImageStyle = styled.img`
  width: ${rem('260px')};
  height: 100%;
  object-fit: cover;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const EventDetailStyle = styled.div`
  width: 80%;
  height: 100%;
  font-size: ${rem('18px')};
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    color: #888888;
  }

  p {
    font-size: ${rem('16px')};
    padding-bottom: ${rem('20px')};
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    p {
      font-size: ${rem('15px')};
      padding-bottom: ${rem('10px')};
      line-height: ${rem('20px')};
    }
  }

  @media screen and (min-width: 1000px) {
    width: 70%;
    p {
      line-height: 26px;
      padding-bottom: 0;
    }
  }
`

export const EventTitleWrapper = styled.div`
  width: 100%;
  margin-top: 5px;
  display: flex;
  align-items: end;

  span {
    background-color: #6800ed;
    text-transform: lowercase;
    color: white;
    padding: ${rem('3px')} ${rem('6px')};
    margin-left: ${rem('5px')};
    text-align: center;
    font-size: 14px;
    border-radius: ${rem('10px')};
    min-height: ${rem('20px')};
    font-weight: 200;
  }
`

export const EventTitle = styled.h1`
  text-transform: capitalize;
  font-weight: 400;
  font-size: ${rem('25px')};
  padding: 0;
  margin: 0;

  @media screen and (max-width: 700px) {
    font-size: ${rem('18px')};
    padding-right: 5px;
  }
`

export const EventDateComponent = styled.div`
  background-color: black;
  width: 100%;
  height: ${rem('100px')};
  border-radius: 5px;
  color: white;
  display: flex;
  align-items: center;
`

export const EventDateWrapper = styled.div`
  position: relative;
  left: 8%;

  div {
    display: flex;
    padding-bottom: ${rem('3px')};

    span {
      margin-left: ${rem('5px')};
    }
  }

  h3 {
    margin-top: 0;
  }

  @media screen and (max-width: 700px) {
    h3 {
      font-size: ${rem('18px')};
    }
  }
`
