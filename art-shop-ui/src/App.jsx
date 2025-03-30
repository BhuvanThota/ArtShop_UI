import { useState } from 'react'
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  const [like, setLike] = useState(0);

  return (
    <>
      <Header/>
      
      <div className='flex-col justify-items-center'>
        <h1 className='text-3xl '>ART SHOP</h1>
        <button onClick={() => setLike(like+1)} className='bg-blue-500 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-emerald-500 rounded-3xl text-xl p-4 mt-4'>Click to Like: {like}</button>
      </div>

      <Footer/>
    </>
  )
}

export default App
