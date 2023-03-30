import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className='d-flex justify-content-center mt-5'>
        <div className='Button'>
          <div className='ButtonTxt'>
            OK
          </div>
        </div>
      </main>
    </>
  )
}
