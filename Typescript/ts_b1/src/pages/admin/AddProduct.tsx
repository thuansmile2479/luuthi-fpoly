import React from 'react';
import { Button, Form, Input, Select } from 'antd';
import { IProduct } from '../../types/product';
import { useNavigate } from 'react-router-dom';
import type { FormInstance } from 'antd/es/form';

interface IProps {
  onAdd: (products: IProduct) => void;
}

const { Option } = Select;

const AddProductPage = (props: IProps) => {
  const navigate = useNavigate();

  const onFinish = (values: IProduct) => {
    props.onAdd(values);
    navigate('/admin/products');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
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
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ whitespace: true, message: "can't be just whitespace" }]}
          // rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: 'Please input your price!' }]}
        >
          <Input type="number" />
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
            Add new Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProductPage;
