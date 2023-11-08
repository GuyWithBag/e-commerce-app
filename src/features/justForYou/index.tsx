import { Box } from '@chakra-ui/react'
import React from 'react'
import HomePageCard from '../../components/HomePageCard'
import ProductsGridList from '../../components/ProductCardList'
import ProductCard from '../../components/ProductCard'
import { gamingKeyboardProduct } from '../../placeholder'
import { ProductModel } from '../../data/productModel'

type Props = {
    products: ProductModel[]
}

export default function JustForYou({ products }: Props) {
    return (
        <HomePageCard title='Just For You'>
            <ProductsGridList columns={6}>
            {
                products.map((item) => (
                    <ProductCard product={item} />
                ))
            }
            </ProductsGridList>
        </HomePageCard>
    )
}