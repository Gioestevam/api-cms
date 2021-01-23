import * as mongoose from 'mongoose';
import { UserType } from '../enuns/user_type.enum';
import * as passportLocalMongoose from 'passport-local-mongoose';

export const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    userType: {
        type: String,
        enum: UserType,
        default: UserType.USER
    },
});

UserSchema.plugin(passportLocalMongoose);