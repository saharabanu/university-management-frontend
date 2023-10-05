/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { Button, Col, Row, message } from 'antd';
import Image from 'next/image';
import LoginImg from '../../assets/images/login.png'
import Form from '@/components/forms/Form';
import FormInput from '@/components/forms/FormInput';
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from '@/redux/api/authApi';
import {   storeUserInfo } from '@/services/auth.service';
import { useRouter } from 'next/navigation';


export type FormValues = {
  id:string;
  password: string
}

const LoginPage = () => {
  
  
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  const onSubmit:SubmitHandler<FormValues> = async(data:any) => {
    try {
      const res = await userLogin({...data}).unwrap();
      
      if(res?.accessToken){
           router.push("/profile")
      }
      message.success("User LoggedIn Successfully")
      storeUserInfo({accessToken: res?.accessToken})
      
     
    } catch (err: any) {
      console.error(err.message)
    }

  }
  return (
    <>
<Row justify="center" align="middle"

style={{minHeight:"100vh"}}>
  <Col  sm={12} md={16} lg={10}>
       <Image src={LoginImg} width={500} alt='login image'/>

    </Col> 
  <Col  sm={12} md={8} lg={8} >

    <h1 style={{margin:"15px 0"}}>First Login </h1>
    <div>
      <Form submitHandler={onSubmit}>
         <div>
         <div>
         <FormInput name = 'id' type='text' size="large" label="User Id"/>
         </div>
          <div style={{margin:"15px 0"}}>
          <FormInput name = 'password' type='password' size="large" label="User Password"/>
          </div>

          <Button type="primary" htmlType='submit'>
              Login
          </Button>
         </div>
      </Form>
    </div>
    </Col> 
  
</Row>

    </>
  )
}

export default LoginPage