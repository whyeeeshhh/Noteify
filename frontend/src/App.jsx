import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from"./pages/HomePage.jsx"
import CreatePage from"./pages/CreatePage.jsx"
import NoteDetailPage from"./pages/NoteDetailPage.jsx"
import toast from "react-hot-toast";

const App = () => {
  return (
    <div data-theme="cupcake">
     <Routes>
        <Route path="/" element = {<HomePage/>}></Route>
        <Route path="/create" element = {<CreatePage/>}></Route>
        <Route path="/note/:id" element = {<NoteDetailPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App
