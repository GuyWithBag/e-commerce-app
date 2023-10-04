import { Box, IconButton, Image, Radio, Text } from '@chakra-ui/react'
import React from 'react'
import PriceView from '../../../components/PriceView'
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai'
import { BsTrash3 } from 'react-icons/bs'
import { ProductModel } from '../../../data/productModel'
import { useCartStore } from '../../../data/stores/cartStore'
import DeleteFromCartButton from './DeleteFromCartButton'
import AddToWishListButton from '../../../components/AddToWishListButton'
import { ShoppingCartItemModel } from '../../../data/shoppingCartItemModel'

type Props = {
    cartItem: ShoppingCartItemModel
}

export default function ShoppingCartItem({ cartItem }: Props) {

    const deleteFromCart = useCartStore((task: any) => task.deleteFromCart)

    const { product } = cartItem
    const { name, thumbnail } = product

    return (
        <Box className='flex flex-row w-[100%]'>
            <Box className='flex flex-row gap-4 w-[100%]'>
                <Radio /> 
                <Image src={thumbnail} className=' w-32 h-32'/> 
                <Box className='flex flex-col justify-between w-[100%]'>
                    <Text>{name}</Text>
                    {/* Why u no work properly huhu */}
                    <Box className='flex flex-row justify-between items-end'>
                        <PriceView {...product} /> 
                        <Box className='flex flex-row gap-3'>
                            {/* 
                                Inspired from Shein ShoppingCart
                                Spin Box here for adding more
                                Search Icon for finding more similar items
                                Add to wishlist button
                                delete
                            */}
                            <IconButton 
                                aria-label='Search similar'
                                icon={<AiOutlineSearch />} 
                                variant={'ghost'}
                            />
                            <AddToWishListButton product={product} />
                            <DeleteFromCartButton cartItem={cartItem} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}