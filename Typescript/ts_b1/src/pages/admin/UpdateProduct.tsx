import React, { useEffect, useState } from 'react'
// import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { IProduct } from '../../types/product'
import { Button, Form, Input, Select } from 'antd';
import type { FormInstance } from 'antd/es/form';

interface IProps {
    products: IProduct[],
    onUpdate: (product: IProduct) => void
}
const { Option } = Select;
const UpdateProductPage = (props: IProps) => {
    const { id } = useParams()
    const navigate = useNavigate()

    

    const [product, setProduct] = useState<IProduct>()
    useEffect(() => {
        const currentProduct = props.products.find((product: IProduct) => product.id == Number(id))
        setProduct(currentProduct)
    }, [props])

    const setFields = () => {
        form.setFieldsValue({
            id: product?.id,
            name: product?.name,
            price: product?.price,
            gender: product?.gender,
        })
    }

    useEffect(() => {
        setFields()
    }, [product])
    const [form] = Form.useForm();


    const onFinish = (values: IProduct) => {
        props.onUpdate(values);
        navigate('/admin/products')
    };
    const onGenderChange = (value: string) => {
        switch (value) {
          case 'Việt Nam':
            formRef.current?.setFieldsValue({ note: 'Hi, man!' });
            break;
          case 'Japan':
            formRef.current?.setFieldsValue({ note: 'Hi, lady!' });
            break;
          case 'USA':
            formRef.current?.setFieldsValue({ note: 'Hi there!' });
            break;
          default:
            break;
        }
      };
      const formRef = React.useRef<FormInstance>(null);

    return (
        <div>
            <Form
                form={form}
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
            >
                <Form.Item
                    label=""
                    name="id"
                    style={{ display: 'none' }}
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input type="number"/>
                </Form.Item>
                <Form.Item name="gender" label="Category" rules={[{ required: true }]}>
                    <Select placeholder="Select a option and change input text above" onChange={onGenderChange} allowClear>
                        <Option value="Việt Nam">Việt Nam</Option>
                        <Option value="Japan">Japan</Option>
                        <Option value="USA">USA</Option>
                    </Select>
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Update Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UpdateProductPage