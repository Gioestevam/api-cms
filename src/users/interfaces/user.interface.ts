import { UserType } from '../enuns/user_type.enum';
import { Document, PassportLocalDocument } from 'mongoose';

export interface IUser extends PassportLocalDocument {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly password: string;
    readonly userType: {
        type: String,
        enum: UserType,
        default: UserType.USER
    }
}