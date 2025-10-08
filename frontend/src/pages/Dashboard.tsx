


import { Button } from '../components/Buttons'
import { Card } from '../components/Card'
import { Plusicon } from '../icons/Plusicon'
import { Shareicon } from '../icons/Shareicon'
import { CreateContentModal } from '../components/CreateContentModal'
import { useState } from 'react'
import { Sidebar } from '../components/Sidebar'

export function Dashboard(){
      const [modalOpen, setModalOpen] = useState(false);

    return <div>
            <Sidebar />
          <div className='ml-68 min-h-screen bg-slate-50'>
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
                
                <div className='flex gap-6 mt-6'>
                  <Card title='Rick rubin on creativity' link='https://www.youtube.com/watch?v=36L9cYkHyZM' type='youtube'/>
                  <Card title='Twitter tweet' link='https://twitter.com/username/status/807811447862468608' type='twitter'/>
                </div>
              </div>
          </div>
        </div>
}