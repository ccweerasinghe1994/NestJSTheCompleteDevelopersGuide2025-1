import { Message } from '../messages.repository';

export class GetAllMessagesDto {
  [key: number]: Message;
}
