import ActionBars from "@/components/ui/ActionBars"
import UmBreadcrumb from "@/components/ui/UmBreadcrumb"
import { Button } from "antd"
import Link from "next/link"


const ManageAdminPage = () => {
    return (
      <>

     <UmBreadcrumb items={[
        {
          label:'super_admin',
          link:'/super_admin'
       },
        
       ]}/>
       
       
       <ActionBars title="Admin List">
       <Link href="/super_admin/admin/create">
  <Button type="primary" >Create Admin</Button>
</Link>
       </ActionBars>

      </>
    )
  }
  
  export default  ManageAdminPage