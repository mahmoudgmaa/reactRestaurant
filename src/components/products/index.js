import React, { useState } from "react";
import {
  ProductButton,
  ProductCard,
  ProductDesc,
  ProductImg,
  ProductInfo,
  ProductPrice,
  ProductsContainer,
  ProductsHeading,
  ProductTitle,
  ProductWrapper,
  ShowMoreDiv,
} from "./ProductsElements";
const Products = ({ data, heading }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {showMore
          ? data.map((product, index) => {
              return (
                <ProductCard key={index}>
                  <ProductImg src={product.img} alt={product.alt} />
                  <ProductInfo>
                    <ProductTitle>{product.name}</ProductTitle>
                    <ProductDesc>{product.desc}</ProductDesc>
                    <ProductPrice>{product.price}</ProductPrice>
                    <ProductButton>{product.button}</ProductButton>
                  </ProductInfo>
                </ProductCard>
              );
            })
          : data
              .filter((i, index) => index < 3)
              .map((product, index) => {
                return (
                  <ProductCard key={index}>
                    <ProductImg src={product.img} alt={product.alt} />
                    <ProductInfo>
                      <ProductTitle>{product.name}</ProductTitle>
                      <ProductDesc>{product.desc}</ProductDesc>
                      <ProductPrice>{product.price}</ProductPrice>
                      <ProductButton>{product.button}</ProductButton>
                    </ProductInfo>
                  </ProductCard>
                );
              })}
      </ProductWrapper>
      <ShowMoreDiv onClick={() => setShowMore((prev) => !prev)}>
        <p>{showMore ? "Hide" : "Show more"}</p>
      </ShowMoreDiv>
    </ProductsContainer>
  );
};

export default Products;
