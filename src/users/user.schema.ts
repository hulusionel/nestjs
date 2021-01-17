import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Statuses } from '../constants';

@Schema({
  timestamps: true,
  toJSON: {
    transform: ({ _doc }) => {
      const { __v, ...rest } = _doc;
      return rest;
    },
  },
})
export class User {
  @Prop()
  name: string;
  @Prop()
  surname: string;
  @Prop({
    default: Statuses,
  })
  status: Statuses;
  @Prop()
  password: number;
  @Prop()
  mail: string;
  @Prop()
  roles: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
