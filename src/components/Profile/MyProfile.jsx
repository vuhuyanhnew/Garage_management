import { Button, Form, Input, Select } from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};
const MyProfile = () => {
  return (
    <div>
      <h3>Now you can crate a new password for account</h3>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={['user', 'name']}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label="Email"
          rules={[
            {
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'dob']}
          label="DOB"
          rules={[
            {
              type: 'date',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={['user', 'gender']}
          label="Gender"
          rules={[
            {
              type: 'gender',
            },
          ]}
        >
          <Select />
        </Form.Item>

        <Form.Item
          name={['user', 'phone']}
          label="Phone Number"
          rules={[
            {
              type: 'phone',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button>Cancel</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default MyProfile;
