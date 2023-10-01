import { Box } from '@chakra-ui/react'
import React from 'react'
import HomePageCard from '../../components/HomePageCard'
import ProductsGridList from '../../components/ProductCardList'
import ProductCard from '../../components/ProductCard'
import { testProd } from '../../placeholder'

type Props = {}

export default function JustForYou({}: Props) {
    return (
        <HomePageCard title='Just for you'>
            <ProductsGridList>
                <ProductCard {...testProd}/>
                <ProductCard {...testProd}/>
                <ProductCard {...testProd}/>
                <ProductCard {...testProd}/>
                <ProductCard {...testProd}/>
                <ProductCard {...testProd}/>
                <ProductCard {...testProd}/>
                <ProductCard {...testProd}/>
                <ProductCard {...testProd}/>
                <ProductCard {...testProd}/>
            </ProductsGridList>
        </HomePageCard>
    )
}