import React from 'react';
import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { IProduct } from '../../types/product';
import { Link } from 'react-router-dom';

interface DataType {
    key: string | number;
    id: number;
    name: string;
    price: number;
}

interface IProps {
    products: IProduct[],
    onRemove: (id: number) => void,
}

const ProductManagementPage = (props: IProps) => {
    const removeProduct = (id: number) => {
        const status = confirm("Bạn có chắc muốn xóa hay không")
        if(status){
            props.onRemove(id)
        }
    }
    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Category',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type='primary' style={{backgroundColor: 'red'}} onClick={() => removeProduct(record.id)}>Remove</Button>
                    <Button><Link to={`/admin/products/update/${record.id}`}>Update</Link></Button>
                </Space>
            ),
        },
    ];
    const data: DataType[] = props.products.map((item: IProduct) => {
        return {
            key: item.id,
            ...item
        }
    })

    return (
        <div>
            <Button type='primary'><Link to={'/admin/products/add'}>Add New Product</Link></Button>
            <Table columns={columns} dataSource={data} pagination={{pageSize: 5}}/>;
        </div>
    )
}

export default ProductManagementPage