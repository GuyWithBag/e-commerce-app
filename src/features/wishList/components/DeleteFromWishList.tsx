import { Button } from '@chakra-ui/react'
import React from 'react'
import { useWishListStore } from '../../../data/stores/wishListStore'
import { ProductModel } from '../../../data/productModel'

type Props = {
    product: ProductModel
}

export default function DeleteFromWishList({ product }: Props) {

    const deleteFromWishList = useWishListStore((task: any) => task.deleteFromWishList) 

    function onClick() {
        deleteFromWishList(product)
    }

    return (
    <Button borderRadius={0} onClick={onClick}> 
        Delete From <br />
        WishList
    </Button>
    )
}

