import React from 'react';
import { Layout, Typography } from 'antd';
import RecordForm from '../components/RecordForm';
import RecordTable from '../components/RecordTable';
import CommandRunner from '../components/CommandRunner';

const { Header, Content } = Layout;
const { Title } = Typography;

const Dashboard: React.FC = () => {
  const [refreshFlag, setRefreshFlag] = React.useState(false);

  return (
    <Layout style={{ minHeight: '100vh', padding: 20 }}>
      <Header style={{ background: '#fff' }}>
        <Title level={2}>Task 3 - Web UI</Title>
      </Header>
      <Content style={{ marginTop: 20 }}>
        <RecordForm onSuccess={() => setRefreshFlag(!refreshFlag)} />
        <RecordTable key={refreshFlag ? 'refresh' : 'initial'} />
        <CommandRunner />
      </Content>
    </Layout>
  );
};

export default Dashboard;
