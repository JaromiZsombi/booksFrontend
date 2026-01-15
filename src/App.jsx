import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@mantine/core/styles.css';
import { Flex, Button, Paper, Text, Affix, Title } from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import { Categories } from './components/Categories';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Books } from './components/Books';
import { BooksByCateg } from './components/BooksByCateg';
import { SearchResult } from './components/SearchResult'
import { MyMenu } from './components/MyMenu';

function App() {
  const { height, width } = useViewportSize();
  const isMobile=useMediaQuery('(max-width:673px)')
  return (
    <BrowserRouter>
      <Flex
        mih={height}
        bg="var(--mantine-color-blue-light)"
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="nowrap"
      >
        <Affix position={{top:20}} style={{width:width}}><Title style={{textAlign:"center", color:"red"}}>Válogass a címek között</Title></Affix>
        <Affix position={{top: isMobile? 100:0, right:0}}>
          <MyMenu></MyMenu>
        </Affix>


        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/categ/:categId" element={<BooksByCateg />} />
          <Route path="/books/search/:txt" element={<SearchResult />} />
        </Routes>
      </Flex>
    </BrowserRouter>


  )
}

export default App
