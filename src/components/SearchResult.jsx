import { Title } from '@mantine/core'
import React from 'react'
import { useParams } from 'react-router-dom'

export const SearchResult = () => {
  const {txt} = useParams()
  const { status, data, error, isLoading, isError} = useQuery({
        queryKey: ['booksbytitle', txt], queryFn: getBooksByCateg})
  return (
    <Flex marginTop='30px' direction='column' justify="flex-start" gap="md" align="center">
          {data&&(data.data[0].name)}
                {isLoading && <Loader color='blue' />}
                {data&&<Title>A keresett könyvcím/könyvcím részlet: </Title>}
                {data&&data.data.map(obj=>
                    <Box key={obj.id}>
                        <MyCard {...obj}/>
                    </Box>)}
                </Flex>
  )
}