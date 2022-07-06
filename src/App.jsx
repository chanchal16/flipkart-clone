import { useState,useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { useFilter } from './contexts/filtersContext';
import { Products } from './pages/Products';
import products from './products.json'

function App() {
  const{filterDispatch} = useFilter()
  // useEffect(() => {
  //   filterDispatch({type:'GET_ALL_PRODUCTS',payload:products})
  
  // }, [])
  

  return (
    <div className="App">
      <Navbar/>
      <main>
      <Sidebar/>
      <Products />
      </main>
      
    </div>
  )
}

export default App
