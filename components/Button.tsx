import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Button() {
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
