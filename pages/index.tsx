import Head from 'next/head'
import { Inter } from 'next/font/google'
import Card from '@/components/Card'
import HexagonFlower from '@/components/HexagonFlower'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className=' container '>
      <HexagonFlower/>
    </div>
    </>
  )
}
