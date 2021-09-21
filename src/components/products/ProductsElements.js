import styled from 'styled-components';

export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
  transition: 0.2s ease-in-out;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const PriceWrapper=styled.div`
display: flex;
flex-direction:row;
align-items: center;
justify-content: space-between;
width: 100%;
`

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const ShowMoreDiv = styled.div`
  width: 100%;
  background: #fdc500;
  text-align: center;
  padding: 1rem;
  color: #000;
  transition: 0.2s ease-out;
  cursor: pointer;

  &:hover {
    background: #e31837;
    transition: 0.2s ease-out;
    color: white;
  }
`;