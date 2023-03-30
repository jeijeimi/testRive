import Head from 'next/head'
import { Inter } from 'next/font/google'
import Card from '@/components/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Sandbox() {
  return (
    <>
      <Head>
        <title>Hello there</title>
      </Head>
      <main>
        <Card />
      </main>
    </>
  )
}
