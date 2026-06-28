'use client'
import { useState } from 'react';


import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar'

const DashboardLayout = ({children}:{children: React.ReactNode}) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  

  return (
    <div className='flex h-screen'>
      
        <Sidebar isOpen={sidebarOpen}/>
        <div className="flex-1 flex flex-col">
              <Navbar 
                  toggleSidebar = {() => setSidebarOpen(!sidebarOpen)}
                  />
          {children}
          </div>
        
    </div>
  )
}

export default DashboardLayout