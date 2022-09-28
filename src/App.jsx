
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Tabla from './components/Tabla';
import './scss/app.scss'

const App = () => {

    const [coin, setCoin] = useState([])
    const [search, setSearch] = useState('')
    const getData = async() => {
        try {
            const res = await axios.get('https://api.coinlore.net/api/tickers/?start=200');
            const datos = res.data
            // console.log(datos.data)
            setCoin(datos.data)
        } catch (error) {
            console.log(error)
        }
       
    }

    useEffect(() => {
        getData()
    },[])
  return (
    <div>
      <input
        type="text"
        placeholder='Search a coin'
        onChange={e => setSearch(e.target.value)}
      />
      <Tabla coin={coin} search={search} />
    </div>
  )
}

export default App
