import React, { useState, useEffect } from 'react';
import { Table, Button, Input, Space, message } from 'antd';
import { fetchRecords, deleteRecord } from '../api/api';
import { Record } from '../types/types';

const { Search } = Input;

const RecordTable: React.FC = () => {
  const [records, setRecords] = useState<Record[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

  const loadRecords = async () => {
    setLoading(true);
    try {
      const data = await fetchRecords();
      setRecords(data);
    } catch (err) {
      message.error('Failed to fetch records');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteRecord(id);
      message.success('Record deleted');
      loadRecords();
    } catch (err) {
      message.error('Delete failed');
    }
  };

  useEffect(() => {
    loadRecords();
  }, []);

  const filteredRecords = records.filter(r =>
    r.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Search
          placeholder="Search records"
          onSearch={setSearchText}
          onChange={e => setSearchText(e.target.value)}
          style={{ width: 300 }}
          allowClear
        />
        <Button onClick={loadRecords}>Refresh</Button>
      </Space>
      <Table
        dataSource={filteredRecords}
        loading={loading}
        rowKey="id"
        columns={[
          { title: 'Name', dataIndex: 'name', key: 'name' },
          { title: 'Description', dataIndex: 'description', key: 'description' },
          { title: 'Created At', dataIndex: 'createdAt', key: 'createdAt' },
          {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
              <Button danger onClick={() => handleDelete(record.id)}>
                Delete
              </Button>
            ),
          },
        ]}
      />
    </div>
  );
};

export default RecordTable;
