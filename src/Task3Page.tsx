import React, { useState } from "react";
import { Input, Button, Table, message } from "antd";

const Task3Page: React.FC = () => {
  const [tasks, setTasks] = useState([
    { key: 1, name: "Sample Task", description: "Demo", createdAt: "20-10-2025" },
  ]);
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("");

  // Simulate Create button
  const handleCreate = () => {
    message.success("Task created (simulated)");
    setTasks([...tasks, { key: tasks.length + 1, name: "New Task", description: "Demo", createdAt: "20-10-2025" }]);
  };

  // Simulate Delete button
  const handleDelete = (key: number) => {
    message.success("Task deleted (simulated)");
    setTasks(tasks.filter(t => t.key !== key));
  };

  // Simulate Run Command
  const handleRunCommand = () => {
    if (!command.trim()) {
      message.warning("Please enter a command");
      return;
    }
    setOutput(`Executed: ${command} (simulated output)`);
    message.success("Command executed successfully");
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Created At", dataIndex: "createdAt", key: "createdAt" },
    { title: "Action", key: "action", render: (_: any, record: any) => (
      <Button danger onClick={() => handleDelete(record.key)}>Delete</Button>
    ) }
  ];

  return (
    <div style={{ maxWidth: 800, margin: "2rem auto" }}>
      <h2>Task 3 - Web UI</h2>
      <Button type="primary" onClick={handleCreate} style={{ marginBottom: 16 }}>Create Task</Button>

      <Table dataSource={tasks} columns={columns} />

      <h3>Run Command</h3>
      <Input
        placeholder="Enter command"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        style={{ marginBottom: 8 }}
      />
      <Button type="primary" onClick={handleRunCommand}>Run</Button>
      <Input.TextArea
        value={output}
        readOnly
        rows={5}
        placeholder="Command output will appear here"
        style={{ marginTop: 8 }}
      />
    </div>
  );
};

export default Task3Page;
