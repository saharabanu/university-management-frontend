import ActionBars from "@/components/ui/ActionBars"
import UmBreadcrumb from "@/components/ui/UmBreadcrumb"
import { Button } from "antd"
import Link from "next/link"


const ManageStudentPage = () => {
    return (
      <div>

<UmBreadcrumb items={[
        {
          label:'super_admin',
          link:'/super_admin'
       },
        
       ]}/>
<ActionBars title="Student List">
<Link href="/super_admin/manage-student/create">
  <Button type="primary" >Create Student</Button>
</Link>
</ActionBars>



      </div>
    )
  }
  
  export default  ManageStudentPage