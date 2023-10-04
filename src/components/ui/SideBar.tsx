"use client"
import { useState } from 'react';

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {  Layout, Menu } from 'antd';
import { USER_ROLE } from '@/constants/role';
import { SidebarItems } from '@/constants/SidebarItems';
import { getUserInfo } from '@/services/auth.service';

const { Sider } = Layout;



const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const {role }= getUserInfo() as any;
    
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed (value)} width={280}  style={{overflow:"auto", height:"100vh",
    position:"sticky", top: 0, left: 0, bottom: 0, }}>
        <div style={{color: 'white', fontSize:"2rem",textAlign:"center", 
      fontWeight:"bold", marginBottom: "1rem"}} > UMS</div>
        <Menu 
        theme="dark" 
        defaultSelectedKeys={['1']} mode="inline" 
        items={SidebarItems(role)} />
      </Sider>
  )
}

export default SideBar;






