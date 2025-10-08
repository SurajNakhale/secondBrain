

import { Button } from './components/Buttons'
import { Card } from './components/Card'
import { Plusicon } from './icons/Plusicon'
import { Shareicon } from './icons/Shareicon'
import { CreateContentModal } from './components/CreateContentModal'
import { useState } from 'react'
function App() {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <>
    
        <CreateContentModal open={modalOpen} onClose={()=>{
          setModalOpen(false);
        }} />
    <div className='p-4'>
      <div className='flex justify-end gap-4'>
        <Button onClick={()=>{
          setModalOpen(true);
        }} title='Add Content' variant='Primary' startIcon={<Plusicon />} />
        <Button title='Share Brain' variant='Secondary' startIcon={<Shareicon />} />
      </div>
      
      <div className='flex gap-6'>
      <Card title='Rick rubin on creativity' link='https://www.youtube.com/watch?v=36L9cYkHyZM' type='youtube'/>
      <Card title='Twitter tweet' link='https://twitter.com/username/status/807811447862468608' type='twitter'/>
      </div>
    </div>

    </>
  )
}

export default App
