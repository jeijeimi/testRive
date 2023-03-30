import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Card() {
  return (
    <>
      <main>
        <div className='Card'>
          <div className='CardImg'>
            <img src="./img/dog-smile.gif" alt="" />
          </div>
          <div className='CardTxt'>
            OK
          </div>
        </div>
      </main>
    </>
  )
}
