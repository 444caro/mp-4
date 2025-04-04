'use client';
import styled from 'styled-components';

const StyledP = styled.p`
  font-family: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif;
  font-size: calc(0.2em + 2vw);
  color: rgb(239,235,231);
`;
const StyledText = styled.div`
  align-items: center;
  max-width: 90%;
  padding: 10px;
  margin: 10px;
  background-color: rgb(138,153,168);
  border-radius: 10px;
`;
export default function AboutCatGallery(){
  return (
        <StyledText>
            <StyledP>This is a simple app to display cat breeds and their images.</StyledP>
            <StyledP>It uses the Cat API to fetch data about different cat breeds.</StyledP>
            <StyledP>The app is built using React, TypeScript, and styled-components.</StyledP>
        </StyledText>
  );
}