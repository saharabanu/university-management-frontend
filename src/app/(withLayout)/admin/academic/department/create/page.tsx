"use client";

import { adminSchema } from "@/Schemas/admin";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import FormSelectField from "@/components/forms/FormSelectField";
import UmBreadcrumb from "@/components/ui/UmBreadcrumb";
import { bloodGroupOptions } from "@/constants/globals";
import {  useAddAcademicDepartmentMutation } from "@/redux/api/academic/departmentApi";
import { useAcademicFacultiesQuery } from "@/redux/api/academic/facultyApi";
import { IAcademicFaculty } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const CreateACDepartmentPage= () => {
  const {data, isLoading} = useAcademicFacultiesQuery({limit:100, page:1});
  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();
//@ts-ignore
   const academicFaculties: IAcademicFaculty[] = data?.academicFaculties;
 

  const academicFacultiesOptions = academicFaculties &&  academicFaculties?.map((academicFaculty)=>{
    return{
      label: academicFaculty?.title,
      value: academicFaculty?.id
    }
  })
  console.log(academicFacultiesOptions)
  const router = useRouter()
  const onSubmit = async (data: any) => {

    
    message.loading('Academic Department creating.....')
    try {
      // console.log(data);
      const res = await addAcademicDepartment(data);
      if(!!res){
        message.success('Academic Department Created Successfully')
      }
      router.push('/admin/academic/department')
    } catch (err: any) {
      // console.error(err.message);
      message.error(err.message)
    }
  };
  const base = 'admin';

  return (
    <>
      <UmBreadcrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: 'academic-faculty',
            link: `/${base}/academic/department`,
          },
        ]}
      />

      <h1>Create ACademic Department</h1>

      <div>
        <Form submitHandler={onSubmit}  >
         
         
          <div style={{padding: '10px', border:'1px solid #d9d9d9', borderRadius:'5px',  marginBottom:'10px'}}>
            
            
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
              <Col className="gutter-row" span={12} style={{marginBottom:'10px'}}>
                <FormInput
                  name="title"
                  type="text"
                  label="Academic Department Title"
                  size="large"
                />
              </Col>
             
             <br />
             
              <Col className="gutter-row" span={12} style={{marginBottom:'10px'}}>
                <FormSelectField size="large" name="academicFacultyId" options={academicFacultiesOptions} label="Academic Faculty" placeholder="Select"  />
              </Col>
             

             
              
              
              
              
            </Row>
            
          </div>
          <Button style={{margin:'10px',}}htmlType="submit" type="primary">
            Create
          </Button>
        </Form>
      </div>
    </>
  );
};

export default CreateACDepartmentPage;
