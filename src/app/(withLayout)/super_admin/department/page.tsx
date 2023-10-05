"use client";
import { EyeOutlined, EditOutlined, DeleteOutlined, RedoOutlined } from "@ant-design/icons";
import ActionBars from "@/components/ui/ActionBars";
import UmBreadcrumb from "@/components/ui/UmBreadcrumb";
import UmTable from "@/components/ui/UmTable";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import { Button, Input } from "antd";
import Link from "next/link";
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";

const ManageDepartmentPage = () => {
  const query: Record<string, any> = {};

  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  


  // debpounce

  const debounceTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600
  });

  if(!!debounceTerm){
    query["searchTerm"] = debounceTerm;
  }
  const { data, isLoading } = useDepartmentsQuery({ ...query });

  const departments = data?.departments;
  const meta = data?.meta;

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",

      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Button onClick={() => console.log(data)} type="primary">
              <EyeOutlined />
            </Button>
            <Button onClick={() => console.log(data)} type="primary" style={{ margin: "0px 10px" }}>
              <EditOutlined />
            </Button>
            <Button onClick={() => console.log(data)} type="primary" danger>
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    // console.log(page, pageSize)
    setPage(page);
    setSize(size);
  };

  // table
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
    // console.log(order, field)
  };
// reset 
  const resetFilters = () => {
    setSearchTerm("");
    setSortBy("");
    setSortOrder("");
  };

  

  return (
    <div>
      <UmBreadcrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
        ]}
      />

      <ActionBars title="Department List">
        <Input
          type="text"
          size="large"
          placeholder="Search....."
          style={{ width: "25%" }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          <Link href="/super_admin/department/create">
            <Button type="primary" style={{}}>
              Create Department
            </Button>
          </Link>
          {(!!sortBy || !!searchTerm || !!sortOrder) && (
            <Button style={{ marginLeft: "5px" }} type="primary" onClick={resetFilters}>
              <RedoOutlined />
            </Button>
          )}
        </div>
      </ActionBars>

      <UmTable
        loading={isLoading}
        columns={columns}
        dataSource={departments}
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

export default ManageDepartmentPage;
