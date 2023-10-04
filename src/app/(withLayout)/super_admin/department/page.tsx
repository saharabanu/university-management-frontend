import ActionBars from "@/components/ui/ActionBars"
import UmBreadcrumb from "@/components/ui/UmBreadcrumb"
import { Button } from "antd"
import Link from "next/link"


const ManageDepartmentPage = () => {
    return (
      <div>
<UmBreadcrumb items={[
        {
          label:'super_admin',
          link:'/super_admin'
       },
        
       ]}/>


        

       


<ActionBars title="Department List">
<Link href="/super_admin/department/create">
  <Button type="primary" >Create Department</Button>
</Link>
       </ActionBars>
      </div>
    )
  }
  
  export default  ManageDepartmentPage