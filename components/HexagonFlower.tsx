import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Button() {
  return (
    <>
      <div className='hexagonsBox'>
            <div className='hexagonsContainer'>
                <div className='hexagons hexagon1' />
                <div className='hexagons hexagon2' />
                <div className='hexagons hexagon3' />
                <div className='hexagons hexagon4' />
                <div className='hexagons hexagon5' />
                {/* los dos de la primer columna */}
                <div className='hexagons hexagon6' />
                <div className='hexagons hexagon7' />
            </div>
        </div>
    </>
  )
}
