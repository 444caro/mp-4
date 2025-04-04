'use client';
import { Cat } from '@/types';
import styled from 'styled-components';

const CatCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 25%;
  padding: 10px;
  margin: 10px;
  background-color: rgb(138,153,168);
  text-align: center;
  border-radius: 10px;
`;
const CatImage = styled.img`
  width: 95%;
  max-width: 95%;
  height: auto;
  aspect-ratio: 1/1;
  object-fit: cover;
  display: block;
  border-radius: 10px;
`;
const CatName = styled.h2`
  font-family: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif;
  font-size: calc(0.2em + 2vw);
  color: rgb(239,235,231);
`;
const CatTemperament = styled.p`
  font-family: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif;
  font-size: calc(0.2em + 2vw);
  color: rgb(239,235,231);
`;
const AllCatsDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`;

export default function CatGallery({ cats }: { cats: Cat[] }) {
  return (
    <AllCatsDiv>
      {cats.map((cat) => (
        <CatCard key={cat.id}>
          <CatImage src={cat.image} alt={cat.breed} />
          <CatName>{cat.breed}</CatName>
          <CatTemperament>{cat.temperament}</CatTemperament>
        </CatCard>
      ))}
    </AllCatsDiv>
  );
}
