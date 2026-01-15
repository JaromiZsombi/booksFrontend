import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Flex, Loader, Paper, Text, Title } from '@mantine/core'
import { getBooksByCateg } from '../../utils'
import { useQuery } from '@tanstack/react-query'
import { MyCard } from './MyCard'

export const BooksByCateg = () => {
  const {categId} = useParams()
   const { status, data, error, isLoading, isError} = useQuery({
        queryKey: ['booksbycateg', categId], queryFn: getBooksByCateg})
  return (
    <Flex mt="20px"  direction='column' justify="flex-start" gap="md" align="center">
      {data&&<p style={{color:"blue", fontSize:"30px", marginBottom:"0px"}}>{data.data[0].name}</p>}
            {isLoading && <Loader color='blue' />}
            {data&&data.data.map(obj=>
                <Box key={obj.id}>
                    <MyCard {...obj}/>
                </Box>)}
            </Flex>
  )
}