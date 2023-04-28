import React, {useEffect, useState} from 'react';
import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom'
// import { IProduct } from '../../types/product';

// interface Iprops{
//     products: IProduct[]
// }

const ProductManagemantPage = (props) => {
    interface DataType {
        key: string;
        name: string;
        price: number;
        cateId: number;
    }
    const [data, setData] = useState([])
    useEffect(() => {
        setData(props.products)
    }, [props])
    
    const removeProduct = (id: number) => {
        const status = confirm("Bạn có chắc muốn xóa không")
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
          dataIndex: 'cateId',
          key: 'cateId',
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
              <Space size="middle">
                <Button type='primary' style={{backgroundColor: 'red'}} onClick={() => removeProduct(record.id)}>Remove</Button>
                <Button type='primary'><Link to={`/admin/products/update/${record.id}`}>Update</Link></Button>
              </Space>
            ),
          },
        ];
        
        const datas: DataType[] = props.products.map(item => {
            return{
                key: item.id,
                ...item
            }
        })

    return (
        <div>
                <Button><Link to={'/admin/products/add'}>Add New Product</Link></Button>
                <Table columns={columns} dataSource={datas} />
        </div>
    )
}

export default ProductManagemantPage