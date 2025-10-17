


import { Button } from '../components/Buttons'
import { Card } from '../components/Card'
import { Plusicon } from '../icons/Plusicon'
import { Shareicon } from '../icons/Shareicon'
import { CreateContentModal } from '../components/CreateContentModal'
import { useState } from 'react'
import { Sidebar } from '../components/Sidebar'
import { useContent } from '../hooks/useContent'

export function Dashboard(){
      const [modalOpen, setModalOpen] = useState(false);
      const contents = useContent();



    return <div>
                <Sidebar />
                <CreateContentModal open={modalOpen} onClose={()=>{
                  setModalOpen(false);
                }} />

          <div className='ml-62 min-h-screen bg-slate-50'>
        
              <div className='p-4'>
    
                <div className='flex justify-end gap-4'>
                  <Button onClick={()=>{
                    setModalOpen(true);
                  }} title='Add Content' variant='Primary' startIcon={<Plusicon />} />
                  <Button title='Share Brain' variant='Secondary' startIcon={<Shareicon />} />
                </div>
                
                <div className='flex gap-6 mt-6'>
                  {contents.map(({ type, title, link })=> <Card 
                          title={title} 
                          link={link}
                          type={type}
                          /> )}
                </div>
              </div>
          </div>
        </div>
}