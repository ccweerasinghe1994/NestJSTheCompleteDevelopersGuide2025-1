import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageRequestDto } from './dtos/create-message-request.dto';
import { CreateMessageResponseDto } from './dtos/create-message-response.dto';
import { MessagesService } from './messages.service';

/**
 * REST API controller for managing messages.
 * Handles HTTP requests for message operations including listing, retrieving, and creating messages.
 *
 * @since 1.0.0
 * @author NestJS Learning Project
 */
@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  /**
   * Creates an instance of MessagesController.
   * Initializes the MessagesService for handling business logic.
   */
  constructor() {
    this.messagesService = new MessagesService();
  }

  /**
   * Retrieves all messages from the system.
   *
   * This endpoint returns a collection of all stored messages in the format
   * where each message is indexed by its unique ID.
   *
   * @returns {Promise<GetAllMessagesDto>} A promise that resolves to an object containing all messages,
   *                                       where keys are message IDs and values are Message objects
   *
   * @example
   * GET /messages
   * Response: { "123": { "id": 123, "content": "Hello World" }, "456": { "id": 456, "content": "Another message" } }
   *
   * @throws {Error} When there's an issue reading from the data store
   * @since 1.0.0
   */
  @Get()
  async listMessages() {
    return this.messagesService.findAll();
  }

  /**
   * Retrieves a specific message by its unique identifier.
   *
   * @param {number} id - The unique identifier of the message to retrieve
   * @returns {Promise<Message | undefined>} A promise that resolves to the Message object if found,
   *                                         or undefined if no message exists with the given ID
   *
   * @example
   * GET /messages/123
   * Response: { "id": 123, "content": "Hello World" }
   *
   * GET /messages/999 (non-existent)
   * Response: undefined
   *
   * @throws {Error} When there's an issue reading from the data store
   * @since 1.0.0
   */
  @Get(':id')
  async getMessageById(@Param('id') id: number) {
    const message = await this.messagesService.findById(id);
    if (!message) {
      throw new NotFoundException(`Message with ID ${id} not found`);
    }
  }

  /**
   * Creates a new message in the system.
   *
   * This endpoint accepts a message content string and creates a new message
   * with a randomly generated ID. The message is persisted to the data store.
   *
   * @param {CreateMessageRequestDto} body - The request body containing the message data
   * @param {string} body.content - The content/text of the message to create
   * @returns {Promise<void>} A promise that resolves when the message is successfully created
   *
   * @example
   * POST /messages
   * Body: { "content": "Hello, world!" }
   * Response: 201 Created (no response body)
   *
   * @throws {ValidationError} When the request body fails validation (e.g., content is not a string)
   * @throws {Error} When there's an issue writing to the data store
   * @since 1.0.0
   */
  @Post()
  async createMessage(@Body() body: CreateMessageRequestDto): Promise<void> {
    await this.messagesService.create(body.content);
  }
}
