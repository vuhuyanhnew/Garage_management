import { Button, Select, Space, Table } from 'antd';
import Search from 'antd/es/input/Search';
import './ListGarage.css';

const ListGarage = () => {
  const { Option } = Select;
  const columns = [
    {
      title: '#',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone number',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Garage owner',
      dataIndex: 'owner',
      key: 'owner',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
          <a>Update</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      email: 'avc@gmail.com',
      phone: '1234556',
      owner: 'Quang Minh Tran',
    },
    {
      key: '2',
      name: 'John Brown',
      email: 'avc@gmail.com',
      phone: '1234556',
      owner: 'Quang Minh Tran',
    },
  ];
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <div>
      <div className="title-container">
        <h3>All Garage </h3>
        <Button>Add Garage</Button>
      </div>
      <div className="list-content">
        <Select
          className="select"
          defaultValue="Name"
          style={{
            width: 220,
          }}
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">Yiminghe</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
        </Select>

        <Search
          className="search-content"
          placeholder="input search text"
          onSearch={onSearch}
          style={{
            width: 200,
          }}
        />

        <Select
          className="select-content"
          defaultValue="Status"
          style={{
            width: 220,
          }}
          onChange={handleChange}
        >
          <Option value="Active">Active</Option>
          <Option value="Inactive">Inactive</Option>
        </Select>
      </div>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default ListGarage;
