import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateChatDto } from './dto/create-chat.dto';
import { Chat } from './schemas/chat.schema';

@Injectable()
export class ChatService {
    constructor(@InjectModel(Chat.name) private readonly catModel: Model<Chat>) {}

  async create(createCatDto: CreateChatDto): Promise<Chat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Chat[]> {
    return this.catModel.find().exec();
  }
}
