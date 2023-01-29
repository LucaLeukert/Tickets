import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class User {
    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    password_hash: string;

    @Prop({ required: true })
    email: string;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
