'use client'

import { Col, Row } from "antd"
import FormInput from "../forms/FormInput"
import FormDatePicker from "../forms/FormDatePicker"
import FormSelectField from "../forms/FormSelectField"
import { bloodGroupOptions } from "@/constants/globals"
import FormTextArea from "../forms/FormTextArea"

const BasicInfo = () => {
  return (
    <>
    <div style={{padding: '10px', border:'1px solid #d9d9d9', borderRadius:'5px',  marginBottom:'10px'}}>
            {/* basic information */}
            <p style={{marginBottom:'10px', fontSize:'20px'}}>Basic Information</p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormInput
                  name="student.email"
                  type="email"
                  label="Email"
                  size="large"
                />
              </Col>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormInput
                  name="student.contactNo"
                  type="number"
                  label="Contact No"
                  size="large"
                />
              </Col>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormInput name="student.emergencyContactNo" type="number" label="emergency Contact No" size="large" />
              </Col>
              <Col className="gutter-row" span={12} style={{marginBottom:'10px'}}>
              <FormDatePicker
                  name="student.dateOfBirth"
                  label="Date of birth"
                  size="large"
                />
              </Col>
              <Col className="gutter-row" span={12} style={{marginBottom:'10px'}}>
                <FormSelectField size="large" name="student.bloodGroup" options={bloodGroupOptions} label="Blood Group"/>
              </Col>
              

              <Col className="gutter-row" span={12} style={{marginBottom:'10px'}}>
                <FormTextArea name="student.presentAddress"  label="Present Address" size="large" rows={4}/>
              </Col>
              <Col className="gutter-row" span={12} style={{marginBottom:'10px'}}>
                <FormTextArea name="student.permanentAddress" label="Permanent Address" size="large" rows={4}/>
              </Col>
              
              
              
              
            </Row>
            
          </div>
    
    </>
  )
}

export default BasicInfo