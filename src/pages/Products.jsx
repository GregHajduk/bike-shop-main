import React, { useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import TopProducts from "../components/TopProducts";
import banner from "../images/winter season banner.jpg";

const BannerContainer = styled.div`
  height: 40vh;
  position: relative;
`;
const Banner = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;
const Title = styled.h2`
  color: white;
  background-color: #00000047;
  position: absolute;
  width: 100%;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  text-transform: uppercase;
  font-style: italic;
  font-size: 3rem;
  font-weight: 800;
`;
const FiltersContainer = styled.div`
  margin: 2rem;
  display: flex;
  align-items: flex-end;
  gap: 2rem;
`;
const FilterType = styled.div``;
const FilterTitle = styled.span`
  margin-right: 0.5rem;
`;
const Select = styled.select``;
const Option = styled.option``;

const Products = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("best sellers");
  const { category } = useParams();

  const handleFilters = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };
  const handleSort = (e) => setSort(e.target.value);

  return (
    <>
      <Navbar />
      <BannerContainer>
        <Banner src={banner} />
        <Title>shop our top brands of the season</Title>
      </BannerContainer>
      <FiltersContainer>
        <FilterType>
          <FilterTitle>colors:</FilterTitle>
          <Select name="color" onChange={handleFilters}>
            <Option>all</Option>
            <Option>red</Option>
            <Option>grey</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>yellow</Option>
          </Select>
        </FilterType>
        {/* <FilterType>
          <FilterTitle>type:</FilterTitle>
          <Select name="type" onChange={handleFilters}>
            <Option>all</Option>
            <Option>road</Option>
            <Option>MTB</Option>
            <Option>city</Option>
          </Select>
        </FilterType> */}
        <FilterType>
          <FilterTitle>sort products:</FilterTitle>
          <Select onChange={handleSort}>
            <Option value="best">best sellers</Option>
            <Option value="lowest">price: lowest first</Option>
            <Option value="highest">price: highest first</Option>
          </Select>
        </FilterType>
      </FiltersContainer>
      <TopProducts category={category} filters={filters} sort={sort} />
    </>
  );
};

export default Products;
