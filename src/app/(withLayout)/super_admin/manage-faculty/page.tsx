import ActionBars from "@/components/ui/ActionBars"
import UmBreadcrumb from "@/components/ui/UmBreadcrumb"
import { Button } from "antd"
import Link from "next/link"


const ManageFacultyPage = () => {
    return (
      <div>
        <UmBreadcrumb items={[
        {
          label:'super_admin',
          link:'/super_admin'
       },
        
       ]}/>

       
       <ActionBars title="Faculty List">
       <Link href="/super_admin/manage-faculty/create">
  <Button type="primary" >Create Faculty</Button>
</Link>
       </ActionBars>

        
        
        </div>
    )
  }
  
  export default  ManageFacultyPage