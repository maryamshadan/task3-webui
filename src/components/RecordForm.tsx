import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { createRecord } from '../api/api';

const RecordForm: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
  const [form] = Form.useForm();

  const handleFinish = async (values: any) => {
    try {
      await createRecord(values);
      message.success('Record created successfully!');
      form.resetFields();
      onSuccess();
    } catch (error) {
      message.error('Failed to create record');
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinish}
      style={{ maxWidth: 500, marginBottom: 20 }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please enter the name' }]}
      >
        <Input placeholder="Record name" />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please enter the description' }]}
      >
        <Input.TextArea placeholder="Record description" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create Record
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RecordForm;
