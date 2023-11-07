import React from 'react'
import { Box, Radio, Text } from '@chakra-ui/react'
import ShoppingCartItemGroup from './ShoppingCartItemGroup'
import ShoppingCartItem from './ShoppingCartItem'
import { ShoppingCartItemModel } from '../../../data/shoppingCartItemModel'

type Props = {
    cart: ShoppingCartItemModel[]
}

export default function AllShoppingCartItems({ cart }: Props) {

    let itemsByShops: Map<string, ShoppingCartItemModel> = new Map<string, ShoppingCartItemModel>()

    function organizeItemsByShop(): Map<string, ShoppingCartItemModel> {
        for (let i = 0; i < cart.length; i++) {
            const shop = cart[i].product.shop
            itemsByShops.set(shop, cart[i])
        }
        return itemsByShops
    }

    organizeItemsByShop()

    return (
        <Box className='flex flex-col gap-2'>
            <Box className='body-secondary p-4'>
                <Box className='flex flex-row justify-between'>
                    <span  className='flex flex-row gap-2' >
                        <Radio />
                        <Text>All items ({cart.length})</Text> 

                    </span>
                </Box>
            </Box>
            <Box className='flex flex-col gap-1'>
                {/* Shopping cart items here */}
                {
                    Array.from(itemsByShops.keys()).map((key: string, index: number) => (
                        <ShoppingCartItemGroup group={key}>
                            <ShoppingCartItem cartItem={itemsByShops.get(key)} />
                        </ShoppingCartItemGroup>
                    ))
                }
            </Box>
        </Box>
    )
}