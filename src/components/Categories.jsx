import { Box, Flex, Loader, Paper, Text, Title } from '@mantine/core'
import React from 'react'
import { getCategories } from '../../utils'
import { useQuery } from '@tanstack/react-query'
import './Categories.css'
import { useNavigate } from 'react-router-dom'

export const Categories = () => {
    const { status, data, error, isLoading, isError } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories


    })

    data && console.log(data)
    
    isError && console.log(error)
    const navigate = useNavigate()

    return (
        <Flex direction='column' justify="flex-start" gap="md" align="center">
        {isLoading && <Loader color='blue' />}
        {data&&data.data.map(obj=><Box key={obj.id}>
                <Paper onClick={()=>navigate('books/categ/'+obj.id)} shadow="md" radius="xl" withBorder p="xl" className="category">
                    <Title order={3} >{obj.name}</Title>
                </Paper>
            </Box>)}
        </Flex>
    )
}