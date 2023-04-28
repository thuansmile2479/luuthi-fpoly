import React from 'react';
import { Button, Checkbox, Form, Input, Select } from 'antd';

const AddProductPage = (props) => {
    const optionn = props.categories
    const onFinish = (values: any) => {
        console.log('Success:', values);
        props.onAdd(values)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
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
                    rules={[{ whitespace: true, message: 'Please input your name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your price!' }]}
                >
                    <Input type='number' />
                </Form.Item>

                <Form.Item
                    label="Category"
                    name="cateId"
                    rules={[{ required: true, message: 'Please input your cateId!' }]}
                >
                    <Select style={{ maxWidth: 600 }}>
                        {optionn.map((values, index) => {
                            return (
                                <Select.Option key={index} value={values.id}>
                                    {values.name}
                                </Select.Option>
                            )
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

export default AddProductPage