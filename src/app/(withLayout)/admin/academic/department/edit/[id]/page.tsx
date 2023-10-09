"use client"
import Form from "@/components/forms/Form"
import FormInput from "@/components/forms/FormInput"
import ActionBars from "@/components/ui/ActionBars"
import UmBreadcrumb from "@/components/ui/UmBreadcrumb"
import { useAcademicDepartmentQuery, useUpdateAcademicDepartmentMutation } from "@/redux/api/academic/departmentApi"

import { Button, Col,  Row, message } from "antd"
import { useRouter } from "next/navigation"

export type IDProps = {
    params: string
}

const EditPage = ({params}:IDProps) => {
     //@ts-ignore
    const {id}  = params;
    const {data} =  useAcademicDepartmentQuery(id);
    const [updateAcademicDepartment] = useUpdateAcademicDepartmentMutation();
    const router = useRouter()
   
   const defaultValues: any = {
    title: data?.title
   }
   
    const base = "admin";
    
    const onSubmit = async (values: any) => {
      message.loading("academic Department is updating ............")
      try {
        // console.log(data);
        await updateAcademicDepartment({id, body:values})
       
        message.success("Academic Department successfully");
        router.push("/admin/academic/department")
      } catch (err: any) {
        message.error(err.message)
      }
    };



  return (
    <>
    <UmBreadcrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "academic-faculties", link: `/${base}/academic/department` },
        ]}
      />

      <ActionBars title="Update Academic Department"></ActionBars>
     <p>Here is not updated academy faculty only updated department title. this work will do later.</p>
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

export default EditPage;  