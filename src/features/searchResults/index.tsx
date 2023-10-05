import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ProductCardList from '../../components/ProductCardList'
import { ProductModel } from '../../data/productModel'
import { useSearchResultsStore } from '../../data/stores/searchResultsStore'
import ProductCard from '../../components/ProductCard'
import SearchResultsHeader from './components/searchResultsHeader'

type Props = {

}

export default function SearchResults({}: Props) {

    const searchResults: ProductModel[] = useSearchResultsStore((store: any) => store.searchResults) 
    const searchValue: string = useSearchResultsStore((store: any) => store.searchValue) 

    function searchResultsText() {
        if (searchValue.length === 0) {
            <Text></Text>
        }
        else if (searchValue.length !== 0) {
            return <Text>Showing search results for: {searchValue}</Text> 
        } else if (searchValue.length == 0) {
            return <Text>No results found for: {searchValue}</Text>
        }
    }

    return (
        <Box pt={'pagePaddingTop'} px={'navbarPaddingX'} className='grid min-h-screen'
            style={{
                gridTemplateColumns: '0.2fr 1fr'
            }}
        >
            <Box className='flex flex-col'>

            </Box>
            <Box className='flex flex-col gap-2'>
                {
                    searchResultsText()
                }
                <SearchResultsHeader />
                <ProductCardList columns={5}>
                    {
                        searchResults.map((product) => {
                            return <ProductCard product={product} /> 
                        })
                    }
                </ProductCardList>
            </Box>
        </Box>
    )
}