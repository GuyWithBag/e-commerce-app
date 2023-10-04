import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { BsTrash3 } from 'react-icons/bs'
import { useCartStore } from '../../../data/stores/cartStore'
import { ShoppingCartItemModel } from '../../../data/shoppingCartItemModel'

type Props = {
    cartItem: ShoppingCartItemModel
}

export default function DeleteFromCartButton({ cartItem }: Props) {
    let deleteFromCart = useCartStore((store: any) => store.deleteFromCart)

    function onClick() {
        deleteFromCart(cartItem) 
    }

    return (
        <IconButton 
            aria-label='delete'
            icon={<BsTrash3 />} 
            onClick={onClick}
            variant={'ghost'}
        />
    )
}