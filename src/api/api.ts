import axios from 'axios';
import { Record, CommandResult } from '../types/types';

const API_BASE = 'http://localhost:5000'; // replace with your backend URL

export const fetchRecords = async (): Promise<Record[]> => {
  const res = await axios.get(`${API_BASE}/records`);
  return res.data;
};

export const createRecord = async (record: Partial<Record>) => {
  const res = await axios.post(`${API_BASE}/records`, record);
  return res.data;
};

export const deleteRecord = async (id: string) => {
  await axios.delete(`${API_BASE}/records/${id}`);
};

export const runCommand = async (command: string): Promise<CommandResult> => {
  const res = await axios.post(`${API_BASE}/command`, { command });
  return res.data;
};
