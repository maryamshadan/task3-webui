export interface Record {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface CommandResult {
  command: string;
  output: string;
}
