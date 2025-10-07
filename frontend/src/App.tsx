
import './App.css'
import { Button } from './components/Buttons'
import { Plusicon } from './icons/Plusicon'

function App() {
  

  return (
    <>
      <h1 className="text-3xl font-bold underline">
       Hello world!
      </h1>
    

      <Button size="lg" title='share'></Button>
      <Button size="md" title='share'></Button>
      <Button title="submit" size="sm"></Button>
      <Plusicon size='sm' />
      <Plusicon size='md' />
      <Plusicon size='lg' />
    </>
  )
}

export default App
