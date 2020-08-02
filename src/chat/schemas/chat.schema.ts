import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Chat extends Document {
  @Prop()
  UserName: string;

  @Prop()
  Mensaje: string;

  @Prop( {default: new Date()} )
  creado_en: Date;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);