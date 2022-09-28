
import CoinRow from './CoinRow'
import '../scss/tabla.scss'

const Tabla = ({coin, search}) => {

    const filterCoin = coin.filter((coins) => coins.name.toLowerCase().includes(search.toLowerCase()))
    
    const titles = ['#', 'Name', 'Symbol', 'Coin', 'Price usd', 'Price change', '24 Volume']
  return (
    <div>
        <table className='contenedor'>
            <thead>
                <tr className='cabezera'>
                    {
                        titles.map((title, index) => (
                            <td key={index} className='titulos'>{title}</td>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    filterCoin.map((coins, index) => (
                        <CoinRow coins={coins} key={index} index={index + 1} />
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Tabla