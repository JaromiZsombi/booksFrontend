import { Box, Flex, Loader, Title } from '@mantine/core'
import React from 'react'
import { MyCard } from './MyCard'
import { useQuery } from '@tanstack/react-query'
import { getBooks } from '../../utils'

export const Books = () => {
 
  const { status, data, error, isLoading, isError} = useQuery({
        queryKey: ['books'], queryFn: getBooks})
  return (
    <Flex mt='50px' direction='column' justify="flex-start" gap="md" align="center">
                {isLoading && <Loader color='blue' />}
                {data&&<Title>Könyvek</Title>}
                {data&&data.data.map(obj=>
                    <Box key={obj.id}>
                        <MyCard {...obj}/>
                    </Box>)}
                </Flex>
  )
}