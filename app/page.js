import { checkForThala } from './utils/checkForThala'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <input className='h-10' type='text' placeholder='Enter something'></input>
      <button onClick={checkForThala(input)}
    </main>
  )
}
