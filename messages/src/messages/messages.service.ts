import { Injectable } from '@nestjs/common';
import { Message, MessagesRepository } from './messages.repository';
import { GetAllMessagesDto } from './dtos/get-all-message.dto';

@Injectable()
export class MessagesService {
  messagesRepository: MessagesRepository;
  constructor() {
    this.messagesRepository = new MessagesRepository();
  }

  async findAll(): Promise<GetAllMessagesDto> {
    return this.messagesRepository.findAll();
  }

  async findById(id: number): Promise<Message | undefined> {
    return this.messagesRepository.findById(id);
  }
  async create(content: string): Promise<void> {
    return this.messagesRepository.create(content);
  }
}
