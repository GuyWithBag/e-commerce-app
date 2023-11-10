import { Box, IconButton, Image, Radio, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import PriceView from '../../../components/PriceView'
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai'
import { BsTrash3 } from 'react-icons/bs'
import { ProductModel } from '../../../data/productModel'
import { useCartStore } from '../../../data/stores/cartStore'
import DeleteFromCartButton from './DeleteFromCartButton'
import AddToWishListButton from '../../../components/AddToWish ListButton'
import { ShoppingCartItemModel } from '../../../data/shoppingCartItemModel'
import { gamingKeyboardProduct } from '../../../placeholder'
import QuantitySpinBox from '../../product/components/QuantitySpinBox'
import { useParams } from 'react-router-dom'
import { NumberParam, useQueryParams } from 'use-query-params'

type Props = {
    cartItem: ShoppingCartItemModel | undefined
}

export default function ShoppingCartItem({ cartItem }: Props) {

    const deleteFromCart = useCartStore((task: any) => task.deleteFromCart)

    const [ product, setProduct ] = useState(gamingKeyboardProduct)
    const [ quantity, setQuantity ] = useState(1)
    const { name, thumbnail } = product

    function incrementQuantity() {
        const newQuantity: number = quantity + 1
        setQuantity(newQuantity)
        if (cartItem != undefined) {
            cartItem.quantity = newQuantity
        }
    //   setQuery({
    //     quantity: newQuantity
    //   })
    }
  
    function decrementQuantity() {
      const newQuantity: number = quantity <= 1 ? 0 : quantity - 1
      setQuantity(newQuantity)
      if (cartItem != undefined) {
          cartItem.quantity = newQuantity
      }
    //   setQuery({
    //     quantity: newQuantity
    //   })
    }
  
    // const { productID } = useParams()
    // const product: ProductModel = products.find((product) => product.id === productID)!
  
    // const [ query, setQuery ] = useQueryParams({
    //   quantity: NumberParam 
    // })
  
    // const { quantity: quantityQuery } = query
    // const { brand, description, name, images } = product
  
    useEffect(() => {
    //   setQuantity(quantityQuery || 1)
      // alert('quantity: ' + quantity)
      // alert('query: ' + quantityQuery)
        if (cartItem != undefined) {
            setProduct(cartItem.product)
            setQuantity(cartItem.quantity)
        }
    }, []) 
    
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
                        <Box className='flex flex-row gap-1 items-center'>
                            {/* 
                                Inspired from Shein ShoppingCart
                                Spin Box here for adding more
                                Search Icon for finding more similar items
                                Add to wishlist button
                                delete
                            */}
                            <IconButton 
                                aria-label='Search similar'
                                icon={<AiOutlineSearch className='color-darkmode' />} 
                                variant={'ghost'}
                            />
                            <QuantitySpinBox 
                                variant='small'
                                onIncrement={incrementQuantity}
                                onDecrement={decrementQuantity}
                                value={quantity}
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