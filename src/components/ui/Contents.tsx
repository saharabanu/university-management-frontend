'use client'
import {  Layout } from 'antd';
import Header from './Header';

const { Content } = Layout;

const Contents = ({children}: {children: React.ReactNode}) => {

  const base = "admin"
  return (
    <Content style= {{minHeight:'100vh'}}  >
      <Header/>
       
        {children}
       
    </Content>
  )
}

export default Contents