import styled from 'styled-components';
import { rem } from 'polished'

export const EventWrapper = styled.div`
  width: 55%;
  /* height: 40vh; */
  min-height: 30vh;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  position: relative;
  top: ${rem('20px')};
  padding-bottom: ${rem('40px')};

  @media screen and (max-width: 700px) {
    width: 100%;
    min-height: 50vh;
    display: flex;
    justify-content: start;
  }

  @media screen and (max-width: 1000px) {
    width: 80%;
    min-height: 30vh;
    padding-bottom: ${rem('20px')};
  }

  @media screen and (min-width: 1600px) {
    width: 45%;
    height: 35vh;
    /* padding-bottom: ${rem('30px')}; */
  }
`

export const EventImageStyle = styled.img`
  width: 30%;
  height: 100%;
  border-radius: 10px;

  @media screen and (max-width: 750px) {
    display: none;
  }

  @media screen and (min-width: 1000px) {
    width: 35%;
  }

  @media screen and (min-width: 1600px) {
   width: 30%;
  }
`

export const EventDetailStyle = styled.div`
  width: 50vw;
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
    font-size: ${rem('14px')};
    padding-bottom: ${rem('20px')};
  }

  @media screen and (max-width: 750px) {
    width: 90vw;
    min-height: 60%;
  }

  @media screen and (min-width: 1000px) {
    width: 50%;
    
    p {
      line-height: 26px;
      padding-bottom: 0;
    }
  }
`

export const EventTitleWrapper = styled.div`
  display: flex;

  span {
    background-color: #6800ed;
    text-transform: lowercase;
    color: white;
    font-size: 14px;
    border-radius: ${rem('10px')};
  }
`

export const EventTitle = styled.h1`
  text-transform: capitalize;
  font-weight: 400;
  font-size: ${rem('32px')};
  margin-top: 0;
`

export const EventDateComponent = styled.div`
  background-color: black;
  width: 100%;
  height: ${rem("129px")};
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
      font-weight: 400;
      font-size: ${rem('14px')};
      padding-left: ${rem('5px')};
    }
  }

  h3 {
    margin-top: 0;
  }
`
