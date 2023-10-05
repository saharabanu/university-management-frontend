"use client"

import { Col, Row } from "antd"
import FormInput from "../forms/FormInput"
import FormSelectField from "../forms/FormSelectField"
import { acDepartmentOptions, acFacultyOptions, acSemesterOptions, genderOptions } from "@/constants/globals"
import UploadImage from "../ui/UploadImage"

const StudentInfo = () => {
  return (
    <>

    <h1>Student Info</h1>
    <div style={{padding: '10px', border:'1px solid #d9d9d9', borderRadius:'5px',  marginBottom:'10px'}}>
            
            
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
              <Col className="gutter-row" span={6} style={{marginBottom:'10px'}}>
                <FormInput
                  name="student.name.firstName"
                  type="text"
                  label="First Name"
                  size="large"
                />
              </Col>
              <Col className="gutter-row" span={6} style={{marginBottom:'10px'}}>
                <FormInput
                  name="student.name.middleName"
                  type="text"
                  label="Middle Name"
                  size="large"
                />
              </Col>
              <Col className="gutter-row" span={6} style={{marginBottom:'10px'}}>
                <FormInput name="student.name.lastName" type="text" label="Last Name" size="large" />
              </Col>

              <Col className="gutter-row" span={6} style={{marginBottom:'10px'}}>
                <FormInput name="password" type="password" label="Password" size="large" />
              </Col>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormSelectField size="large" name="student.academicFaculty" options={acFacultyOptions} label="Academic Faculty"/>
              </Col>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormSelectField size="large" name="student.academicDepartment" options={acDepartmentOptions} label="Academic Department"/>
              </Col>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormSelectField size="large" name="student.academicSemester" options={acSemesterOptions} label="Academic Semester"/>
              </Col>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormSelectField size="large" name="student.gender" options={genderOptions} label="Gender"/>
              </Col>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <UploadImage/>
              </Col>
              
            </Row>
            
          </div>
    
    
    </>
  )
}

export default StudentInfo