import React, { useEffect, useState } from "react";
import {
  PriceWrapper,
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
import { db } from "../../firebase";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";

const Products = ({ heading }) => {
  const [showMore, setShowMore] = useState(false);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const fetchData = () => {
    let dataArray = [];
    db.collection("categories")
      .doc(heading)
      .collection("contents")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          dataArray.push(doc.data());
          setData(dataArray);
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, [setData]);
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {showMore
          ? data.map((product, index) => {
              return (
                <ProductCard key={index}>
                  <ProductImg src={product.image} alt={product.name} />
                  <ProductInfo>
                    <ProductTitle>{product.name}</ProductTitle>
                    <ProductDesc>{product.desc}</ProductDesc>
                    <PriceWrapper>
                      <ProductPrice>{"S " + product.priceS}</ProductPrice>
                      <ProductPrice>{"M " + product.priceM}</ProductPrice>
                      <ProductPrice>{"L " + product.priceL}</ProductPrice>
                    </PriceWrapper>
                    <ProductButton
                      onClick={() => {
                        dispatch(addToCart(product));
                      }}
                    >
                      Add to cart
                    </ProductButton>
                  </ProductInfo>
                </ProductCard>
              );
            })
          : data
              .filter((i, index) => index < 3)
              .map((product, index) => {
                return (
                  <ProductCard key={index}>
                    <ProductImg src={product.image} alt={product.name} />
                    <ProductInfo>
                      <ProductTitle>{product.name}</ProductTitle>
                      <ProductDesc>{product.desc}</ProductDesc>
                      <PriceWrapper>
                        <ProductPrice>{"S " + product.priceS}</ProductPrice>
                        <ProductPrice>{"M " + product.priceM}</ProductPrice>
                        <ProductPrice>{"L " + product.priceL}</ProductPrice>
                      </PriceWrapper>
                      <ProductButton>Add to cart</ProductButton>
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
