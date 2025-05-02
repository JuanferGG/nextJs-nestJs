import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TaskDocument = HydratedDocument<Task>;

@Schema({
  timestamps: true,
})
export class Task {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ default: false })
  status: boolean;

  @Prop({
    enum: ['low', 'medium', 'high'],
    default: 'low',
  })
  priority: 'low' | 'medium' | 'high';

  @Prop()
  image: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
