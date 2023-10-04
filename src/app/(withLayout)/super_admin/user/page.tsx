import UmBreadcrumb from "@/components/ui/UmBreadcrumb"


const ManageUserPage = () => {
    return (
      <div> 

<UmBreadcrumb items={[
        {
          label:'super_admin',
          link:'/super_admin'
       },
        
       ]}/>
         <h1>User List</h1>
         </div>
    )
  }
  
  export default  ManageUserPage