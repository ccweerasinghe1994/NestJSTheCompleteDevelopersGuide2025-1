import { readFile, writeFile } from 'node:fs/promises';
import { GetAllMessagesDto } from './dtos/get-all-message.dto';

export class MessagesRepository {
  async create(content: string): Promise<void> {
    const messages = await readFile('messages.json', 'utf-8');
    const messagesArray = JSON.parse(messages) as Record<number, Message>;
    const id: number = Math.floor(Math.random() * 9999);
    messagesArray[id] = { id, content };
    await writeFile('messages.json', JSON.stringify(messagesArray));
  }

  async findAll(): Promise<GetAllMessagesDto> {
    const messages = await readFile('messages.json', 'utf-8');
    const messagesArray = JSON.parse(messages) as GetAllMessagesDto;
    return messagesArray;
  }

  async findById(id: number): Promise<Message | undefined> {
    const messages = await readFile('messages.json', 'utf-8');
    const messagesArray = JSON.parse(messages) as Record<number, Message>;
    return messagesArray[id];
  }
}
export interface Message {
  id: number;
  content: string;
}
