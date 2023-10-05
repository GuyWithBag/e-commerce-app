import { Box, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { StringParam, useQueryParams } from 'use-query-params'
import { useSearchResultsStore } from '../../../data/stores/searchResultsStore'
import { redirect, useNavigate, useNavigation } from 'react-router-dom'
import { MdClose } from 'react-icons/md'

type Props = {}

export default function SearchBar({}: Props) {
  const searchValue = useSearchResultsStore((store: any) => store.searchValue)
  const setSearchValue = useSearchResultsStore((store: any) => store.setSearchValue)
  const clearSearchValue = useSearchResultsStore((store: any) => store.clearSearchValue)
  const navigation = useNavigate()

  const [ query, setQuery ] = useQueryParams({
    searchValue: StringParam
  })

  const { searchValue: querySearchValue } = query

  const searchResultsURL = '/search-results'
  let enterClicked: boolean = false

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) { 
    const value = e.target.value
    setSearchValue(value) 
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement> | undefined): void {
    if (e === undefined) {
      return
    }
    if (e.key === 'Enter') {
      if (searchValue.length == 0) {
        setQuery({}) 
        return
      }
      if (window.location.pathname == searchResultsURL) {
        setQuery({
          searchValue: searchValue
        })
        return
      }
      redirectToSearchResults()
    }
  }

  function redirectToSearchResults() {
    navigation(searchResultsURL)

  }

  useEffect(() => {
    if (searchValue.length == 0) {
      setQuery({}) 
      return
    }
    setQuery({
      searchValue: searchValue
    })
    setSearchValue(querySearchValue || '')
  }, [window.location.pathname]) 

  return (
    <Box className='flex flex-row w-[60%]'>
      <InputGroup>
        <Input 
          borderRadius={'0px'} 
          value={searchValue}
          onChange={(e) => {onInputChange(e)}}
          onKeyDown={onKeyDown}
        />
        <InputRightElement className={`${searchValue.length == 0 ? 'invisible' : 'visible'}`}>
          <IconButton 
          variant={'unstyled'} 
          aria-label='Clear Text' 
          icon={<MdClose />} 
          onClick={clearSearchValue}
          />
        </InputRightElement>
      </InputGroup>
      <IconButton 
        borderRadius={'0px'}  
        aria-label='Search' 
        icon={<AiOutlineSearch />} 
        onClick={() => redirectToSearchResults()}
      /> 
    </Box>
  )
}

