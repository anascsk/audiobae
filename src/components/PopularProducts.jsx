import React from 'react'
import styled from 'styled-components'
import {popularProducts} from "../data"
import { tablet,mobile } from '../responsive'
import Product from './PopularProduct'
const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;


`
const H1 = styled.h1`
margin-top: 70px;
    color: black;
    font-size: 50px;
   margin-left: 20px;
   ${mobile({ fontSize: "20px" })}
`
const PopularProducts = () => {
    return (
    <>
        <H1>Hot Selling Products</H1>
        <Container>
            
            {popularProducts.map((item) => (
                <Product item={item} key={item.id} /> 
            ))}
        </Container>
        </>
    )
}

export default PopularProducts
