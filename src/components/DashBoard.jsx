import { Button, Flex, Modal, Rating, ScrollArea, Table, TextInput } from '@mantine/core';
import { useEffect } from 'react';
import { useState } from 'react';
import { createBook, getBooks, readBooks } from '../../utils';
import { MdDeleteForever } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";


export const DashBoard = () => {
    const [books, setBooks] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [newBook, setNewBook]=useState({title:"", author:"", description:""})

    useEffect(() => {
        readBooks(setBooks)
    }, [])
    console.log(books)
    const rows = books.map((obj) => (
        <Table.Tr key={obj.id}>
            <Table.Td>{obj.title}</Table.Td>
            <Table.Td>{obj.author}</Table.Td>
            <Table.Td>{obj.description}</Table.Td>
            <Table.Td><MdDeleteForever size={20} style={{ color: "red" }} /><FaPencilAlt size={20} style={{ color: "blue" }} /></Table.Td>
        </Table.Tr>
    ));
    const handleChange=(e)=>{
        setNewBook({...newBook, [e.target.name]:e.target.value})
    }
    const handleSave=async()=>{
        try {
            const bookToSave={...newBook, category_id:1, cover:"borító", rating:1}
            const savedBook = await createBook(bookToSave)
            setBooks((prev)=>[...prev,savedBook])
            setShowForm(false)
            setNewBook({title:"", author:"", description:""})
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <Flex direction='column' gap='md' justify="flex-start" >
            <ScrollArea h={400} bg="lavender">
                <Table stickyHeader withTableBorder withRowBorders withColumnBorders>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Cím</Table.Th>
                            <Table.Th>Szerző</Table.Th>
                            <Table.Th>Leírás</Table.Th>
                            <Table.Th>Szerkesztés</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                    <Table.Caption>Összesen {books.length} könyv van a nyílvántartásban</Table.Caption>
                </Table>
            </ScrollArea>

        <Button onClick={()=>setShowForm(true)}>Új könyv hozzáadása</Button>

        </Flex>
        <Modal opened={showForm} onClose={()=>setShowForm(false)} >
            <TextInput label="Cím" name="title" value={newBook.title} onChange={handleChange} required/>
            <TextInput label="Szerző" name ="author"  value={newBook.author} onChange={handleChange} required/>
            <TextInput label="Leírás" name ="description"  value={newBook.description} onChange={handleChange} required/>
            <Button onClick={handleSave}>Mentés</Button>
        </Modal>
</>
    );
}