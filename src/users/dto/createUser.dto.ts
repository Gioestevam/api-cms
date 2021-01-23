import { UserType } from "../enuns/user_type.enum";

export class CreateUserDto {
    readonly _id: number;
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