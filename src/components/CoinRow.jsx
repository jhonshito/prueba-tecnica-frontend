
import React from 'react'
import '../scss/coinRow.scss'

const CoinRow = ({coins, index}) => {
    console.log(coins, index)
  return (
    <>
        <tr key={coins.id}>
            <td>{index}</td>
            <td>{coins.name}</td>
            <td className='simbolo'>{coins.symbol}</td>
            <td>{coins.price_btc}</td>
            <td>${coins.price_usd}</td>
            <td className={coins.percent_change_24h > 0 ? 'precioSubiendo' : 'precioBajando'}>
              {coins.percent_change_24h}
            </td>
            <td>{coins.volume24}</td>
        </tr>
    </>
  )
}

export default CoinRow
