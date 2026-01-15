import { Box, Flex, Loader, Title } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { getBooksByCateg, getBooksBySearch } from '../../utils'
import { MyCard } from './MyCard'

export const SearchResult = () => {
  const {txt} = useParams()
  const { status, data, error, isLoading, isError} = useQuery({
        queryKey: ['booksbytitle', txt], queryFn: getBooksBySearch})
  return (
    <Flex marginTop='30px' direction='column' justify="flex-start" gap="md" align="center">
                {isLoading && <Loader color='blue' />}
                {data&&data.data.length<1?<Title>Nincsen ilyen című könyv!</Title>:<Title>A keresett könyvcím/könyvcím részlet: </Title>}
                {data&&data.data.map(obj=>
                    <Box key={obj.id}>
                        <MyCard {...obj}/>
                    </Box>)}
                </Flex>
  )
}