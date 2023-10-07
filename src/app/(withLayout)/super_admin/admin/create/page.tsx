"use client";
import { adminSchema } from "@/Schemas/admin";
import Form from "@/components/forms/Form";
import FormDatePicker from "@/components/forms/FormDatePicker";

import FormInput from "@/components/forms/FormInput";
import FormSelectField from "@/components/forms/FormSelectField";
import FormTextArea from "@/components/forms/FormTextArea";
import UmBreadcrumb from "@/components/ui/UmBreadcrumb";
import UploadImage from "@/components/ui/UploadImage";
import { bloodGroupOptions, genderOptions } from "@/constants/globals";
import { useAddAdminWithFormDataMutation } from "@/redux/api/adminApi";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import { IDepartments } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const CreateAdminPage = () => {
  const {data, isLoading} = useDepartmentsQuery({limit:100, page:1});
  const [addAdminWithFormData] = useAddAdminWithFormDataMutation();
//@ts-ignore
  const departments: IDepartments[] = data?.departments;
 

  const departmentOptions = departments&&  departments?.map((department)=>{
    return{
      label: department?.title,
      value: department?.id
    }
  })
  // console.log(departmentOptions)
  const router = useRouter()
  const onSubmit = async (values: any) => {

    const obj = {...values};
    const file = obj['file'];
    delete obj['file'];

    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append('file', file as Blob);
    formData.append('data', data)
    message.loading('Admin creating.....')
    try {
      // console.log(data);
      await addAdminWithFormData(formData);
      message.success('Admin Created Successfully')
      router.push('/super_admin/admin')
    } catch (err: any) {
      // console.error(err.message);
      message.error(err.message)
    }
  };

  return (
    <>
      <UmBreadcrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "admin",
            link: "/super_admin/admin",
          },
        ]}
      />

      <h1>Create Admin</h1>

      <div>
        <Form submitHandler={onSubmit} resolver ={yupResolver(adminSchema)} >
          {/* admin information */}
          <div style={{padding: '10px', border:'1px solid #d9d9d9', borderRadius:'5px',  marginBottom:'10px'}}>
            {/* admin information */}
            <p style={{marginBottom:'10px', fontSize:'20px'}}>Admin Information</p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormInput
                  name="admin.name.firstName"
                  type="text"
                  label="First Name"
                  size="large"
                />
              </Col>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormInput
                  name="admin.name.middleName"
                  type="text"
                  label="Middle Name"
                  size="large"
                />
              </Col>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormInput name="admin.name.lastName" type="text" label="Last Name" size="large" />
              </Col>

              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormInput name="password" type="password" label="Password" size="large" />
              </Col>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormSelectField size="large" name="admin.gender" options={genderOptions} label="Gender"/>
              </Col>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormSelectField size="large" name="admin.managementDepartment" options={departmentOptions} label="Management Department"/>
              </Col>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <UploadImage name="file"/>
              </Col>
            </Row>
            
          </div>
          {/* basic information */}
          <div style={{padding: '10px', border:'1px solid #d9d9d9', borderRadius:'5px',  marginBottom:'10px'}}>
            {/* basic information */}
            <p style={{marginBottom:'10px', fontSize:'20px'}}>Basic Information</p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormInput
                  name="admin.email"
                  type="email"
                  label="Email"
                  size="large"
                />
              </Col>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormInput
                  name="admin.contactNo"
                  type="number"
                  label="Contact No"
                  size="large"
                />
              </Col>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormInput name="admin.emergencyContactNo" type="number" label="emergency Contact No" size="large" />
              </Col>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
              <FormDatePicker
                  name="admin.dateOfBirth"
                  label="Date of birth"
                  size="large"
                />
              </Col>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormSelectField size="large" name="admin.bloodGroup" options={bloodGroupOptions} label="Blood Group"/>
              </Col>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormInput name="admin.designation" type="text" label="Designation" size="large" />
              </Col>

              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormTextArea name="admin.presentAddress"  label="Present Address" size="large" rows={4}/>
              </Col>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormTextArea name="admin.permanentAddress" label="Permanent Address" size="large" rows={4}/>
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

export default CreateAdminPage;
