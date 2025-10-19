import React, { useState } from 'react';
import { Input, Button, message, Card } from 'antd';
import { runCommand } from '../api/api';

const CommandRunner: React.FC = () => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState('');

  const handleRun = async () => {
    if (!command) return message.warning('Enter a command');
    try {
      const result = await runCommand(command);
      setOutput(result.output);
    } catch (err) {
      message.error('Failed to run command');
    }
  };

  return (
    <Card title="Run Command" style={{ marginTop: 20 }}>
      <Input
        placeholder="Enter command"
        value={command}
        onChange={e => setCommand(e.target.value)}
        onPressEnter={handleRun}
      />
      <Button type="primary" onClick={handleRun} style={{ marginTop: 8 }}>
        Run
      </Button>
      <Card title="Output" style={{ marginTop: 16 }}>
        <pre>{output}</pre>
      </Card>
    </Card>
  );
};

export default CommandRunner;
