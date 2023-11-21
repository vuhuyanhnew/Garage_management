import { Button, Col, Form, Input, Row, Select } from 'antd';

const EditGarage = () => {
  return (
    <div>
      <h1>All garage ? Update garage </h1>
      <div>
        <Row>
          <Col span={8}>
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
          </Col>

          <Col span={8}>
            <Form.Item label="Email">
              <Input />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name={['user', 'phone']}
              label="Phone Number"
              rules={[
                {
                  type: 'number',
                  min: 0,
                  max: 99,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name={['user', 'address']}
              label="Address"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name={['user', 'open']}
              label="Open time"
              rules={[
                {
                  type: 'time',
                },
              ]}
            >
              <Select />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name={['user', 'close']}
              label="Close time"
              rules={[
                {
                  type: 'time',
                },
              ]}
            >
              <Select />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name={['user', 'status']}
              label="Status"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <Form.Item
              name={['user', 'description']}
              label="Description"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={['user', 'policry']}
              label="Policry"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button>Save</Button>
          </Col>
          <Col>
            <Button>Cancel</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default EditGarage;
