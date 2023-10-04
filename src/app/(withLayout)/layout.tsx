/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Contents from '@/components/ui/Contents';
import SideBar from '@/components/ui/SideBar';
import { isLoggedIn } from '@/services/auth.service';
import {Layout, Row, Spin} from 'antd';
import { useRouter } from 'next/navigation';
import {useState, useEffect} from 'react'

const DashboardLayout = ({children}: {children: React.ReactNode}) => {

  const loggedIn = isLoggedIn();

  const [loading, setLoading] = useState(false);
  const router = useRouter();

 useEffect(()=>{
 if(!loggedIn){
 router.push("/login")
 }
 setLoading(true)
 },[router])

 if(!loading){
  return <Row justify='center' align='middle' style={{margin:'100px 0'}}>
  <Spin tip="Loading" size="large">
   <div className="content" />
 </Spin>
</Row>
 }
  return (
    <Layout hasSider>
      <SideBar />
      
      <Contents>
      {children}
      </Contents>
      
      </Layout>
  )
}

export default DashboardLayout