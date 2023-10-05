"use client"
import Form from "@/components/forms/Form"
import FormInput from "@/components/forms/FormInput"
import ActionBars from "@/components/ui/ActionBars"
import UmBreadcrumb from "@/components/ui/UmBreadcrumb"
import { useDepartmentQuery, useUpdateDepartmentMutation } from "@/redux/api/departmentApi"
import { Button, Col, Row, message } from "antd"
import { useRouter } from "next/navigation"

export type IDProps = {
    params: string
}

const EditPage = ({params}:IDProps) => {
     //@ts-ignore
    const {id}  = params;
    const {data} =  useDepartmentQuery(id);
    const [updateDepartment] = useUpdateDepartmentMutation();
    const router = useRouter()
   
   const defaultValues: any = {
    title: data?.title
   }
   
    const base = "super_admin";
    
    const onSubmit = async (values: any) => {
      message.loading("department is updating ............")
      try {
        // console.log(data);
        await updateDepartment({id, body:values})
       
        message.success("Department updated successfully");
        router.push("/super_admin/department")
      } catch (err: any) {
        message.error(err.message)
      }
    };



  return (
    <>
    <UmBreadcrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "department", link: `/${base}/department` },
        ]}
      />

      <ActionBars title="Update Department"></ActionBars>
     
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{  }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          update
        </Button>
      </Form>
    
    </>
  )
}

export default EditPage  