"use client";

import { useDebounced } from "@/redux/hooks";
import { Button, Input, Modal, message } from "antd";
import { useState } from "react";
import dayjs from 'dayjs'
import Link from "next/link";
import UmBreadcrumb from "@/components/ui/UmBreadcrumb";
import ActionBars from "@/components/ui/ActionBars";
import UmTable from "@/components/ui/UmTable";
import {ReloadOutlined,DeleteOutlined,EditOutlined} from '@ant-design/icons'
import { useAcademicFacultiesQuery, useDeleteAcademicFacultyMutation } from "@/redux/api/academic/facultyApi";



const AdminFacultyPage = () => {
  const query: Record<string, any> = {};

  const [deleteAcademicFaculty] = useDeleteAcademicFacultyMutation()
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;



// delete function
  
const deleteFunc = async (id:string) => {
  try {
    Modal.confirm({
      title: 'Confirm Deletion',
      content: 'Are you sure you want to delete this Academic Faculty?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: async () => {
        // Delete department logic here
        try {
          await deleteAcademicFaculty(id);
        //   // console.log(deleteAdmin(id))
           message.success('Academic Faculty deleted successfully');
        } catch (err) {
          message.error('An error occurred while deleting the department');
        }
      },
    });
  } catch (err:any) {
    // console.log(err.message)
    message.error(err.message);
  }

}



  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }

  
  const { data, isLoading } = useAcademicFacultiesQuery({ ...query });

  const academicFaculties = data?.academicFaculties;
  const meta = data?.meta;
  
  



  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
    render: function(data:any){
      return data && dayjs(data).format("MMM D YYYY hh:mm A")
    },
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            
            <Link href={`/admin/academic/faculty/edit/${data?.id}`}   ><Button onClick={() => console.log(data)} type="primary" style={{ margin: "0px 10px" }}>
              <EditOutlined />
            </Button></Link>
            <Button onClick={() => deleteFunc(data?.id) } type="primary" danger>
              <DeleteOutlined />
            </Button>



          





          </>
        );
      },
    },
  ];
  const onPaginationChange = (page: number, pageSize: number) => {
    // console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };
  const base = 'admin'
  return (
    <div>
      <UmBreadcrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
        ]}
      />
      <ActionBars title="Academic Faculty List">
        <Input
          size="large"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "20%",
          }}
        />
        <div>
          <Link href="/admin/academic/faculty/create">
            <Button type="primary">Create Faculty</Button>
          </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              style={{ margin: "0px 5px" }}
              type="primary"
              onClick={resetFilters}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBars>
 
      <UmTable
        loading={isLoading}
        columns={columns}
        dataSource={academicFaculties}
        pageSize={size}
        totalPAge={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default AdminFacultyPage;