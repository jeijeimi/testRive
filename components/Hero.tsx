import { Inter } from 'next/font/google'
import Rive from '@rive-app/react-canvas';
import React from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Hero() {

  const [count, setCount] = React.useState<number>(0);

  const inc = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <main>
        <div className='hero'>
          <header>
            <h1>Chicken Rive Test</h1>
            <p>Click the chicken</p>
          </header>
          <RiveContainer name ="chickenTest" onClick={inc} />
            <p>You did {count} Pakaa</p>
        </div>
      </main>
    </>
  )
}

export const RiveContainer = ( { name, onClick } : { name : string, onClick?: () => void }) => {
  return (
    <div className='RiveContainer' onClick={onClick} role="button" tabIndex={0}>
      <Rive
        src={`/rive/${name}.riv`}
        stateMachines="State Machine 1"
      />
    </div>
  )
}

