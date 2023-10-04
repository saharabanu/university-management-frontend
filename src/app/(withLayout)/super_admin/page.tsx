'use client'
import UmBreadcrumb from "@/components/ui/UmBreadcrumb"



const SuperAdminPage = () => {

  
  return (
    <>
    <UmBreadcrumb items={[
        {
          label:'super_admin',
          link:'/super_admin'
       },
        
       ]}/>
    <h1>This page is for SuperAdmin</h1>
    
    </>
  )
}

export default SuperAdminPage