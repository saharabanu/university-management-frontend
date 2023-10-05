'use client'
import {  Table } from "antd";
export type UmTableProps = {
     loading?:boolean; 
      dataSource?:any;
      columns?:any;
      pageSize?:number;
      totalPAge?:number;
      showSizeChanger?:boolean
      onPaginationChange?:(page:number, pageSize:number)=> void
      onTableChange?:(pagination:any,filter:any, sorter:any)=> void;
      showPagination?: boolean
}




const UmTable = ({loading,dataSource,columns,pageSize,totalPAge,showSizeChanger,onPaginationChange, onTableChange, showPagination=true}:UmTableProps) => {

    const paginationConfig = showPagination ? {pageSize:pageSize,
        total:totalPAge,
        pageSizeOptions:[5,10,20],
        showSizeChanger:showSizeChanger,
        onChange:onPaginationChange} : false



  return <Table loading={false} 
  dataSource={dataSource} 
  columns={columns} 
  pagination={paginationConfig}
  onChange={onTableChange}/>;
}

export default UmTable