import React, {useEffect, useState} from 'react';
import { Button, Checkbox, Form, Input, Select } from 'antd';
import { useParams } from 'react-router-dom'
import { IProduct } from '../../types/product';

interface Iprops{
    products: IProduct[]
    onUpdate: (product: IProduct) => void
}

const UpdateProductPage = (props: Iprops) => {
    const { id } = useParams()
    const optionss = props.categories
    const [product, setProduct] = useState();

    useEffect(() => {
        const currentproduct = props.products.find((product) => product.id == Number(id))
        setProduct(currentproduct)
    }, [props])

    useEffect(() => {
        setFields()
    }, [product])
    const setFields = () => {
        form.setFieldsValue({
            id: product?.id,
            name: product?.name,
            price: product?.price,
            cateId: product?.cateId,
        })
    }
    const [form] = Form.useForm()

    const onFinish = (values: any) => {
        console.log('Success:', values);
        props.onUpdate(values)
      };
    
  return (
    <div>
        <h1>UpdateProductPage</h1>

        <Form
        name="basic" 
        onFinish={onFinish} 
        autoComplete="off"
        form={form}
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
          label="Name"
          name="name"
          rules={[{ whitespace: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: 'Please input your price!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Category"
          name="cateId"
          rules={[{ required: true, message: 'Please input your Product categoryId!' }]}
        >
          <Select style={{ maxWidth: 600 }}>
            {optionss.map((values, index) => {
              return (
                <Select.Option key={index} value={values.id}>
                  {values.name}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default UpdateProductPage