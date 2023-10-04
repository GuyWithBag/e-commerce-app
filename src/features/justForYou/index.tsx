import { Box } from '@chakra-ui/react'
import React from 'react'
import HomePageCard from '../../components/HomePageCard'
import ProductsGridList from '../../components/ProductCardList'
import ProductCard from '../../components/ProductCard'
import { gamingKeyboardProduct } from '../../placeholder'

type Props = {}

export default function JustForYou({}: Props) {
    return (
        <HomePageCard title='Just For You'>
            <ProductsGridList columns={6}>
                <ProductCard product={gamingKeyboardProduct} />
                <ProductCard product={gamingKeyboardProduct} />
                <ProductCard product={gamingKeyboardProduct} />
                <ProductCard product={gamingKeyboardProduct} />
                <ProductCard product={gamingKeyboardProduct} />
                <ProductCard product={gamingKeyboardProduct} />
                <ProductCard product={gamingKeyboardProduct} />
                <ProductCard product={gamingKeyboardProduct} />
                <ProductCard product={gamingKeyboardProduct} />
                <ProductCard product={gamingKeyboardProduct} />
            </ProductsGridList>
        </HomePageCard>
    )
}