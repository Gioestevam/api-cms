import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PassportLocalModel } from 'mongoose';
import { IUser } from './interfaces/user.interface';
import { IUsersService } from './interfaces/user-service.interface';

@Injectable()
export class UserService implements IUsersService {
    constructor(@InjectModel('User') private readonly userModel: PassportLocalModel<IUser>) {}
    async findAll(): Promise<IUser[]> {
        return await this.userModel.find().exec();
    }

    async findOne(options: object): Promise<IUser> {
        return await this.userModel.findOne(options).exec();
    }

    async findById(ID: number): Promise<IUser> {
        return await this.userModel.findById(ID).exec();
    }
    async create(user: IUser): Promise<IUser> {
        const createdUser = new this.userModel(user);
        return await createdUser.save();
    }

    async update(ID: number, newValue: IUser): Promise<IUser> {
        const user = await this.userModel.findById(ID).exec();

        if (!user._id) {
            console.log('user not found');
        }

        await this.userModel.findByIdAndUpdate(ID, newValue).exec();
        return await this.userModel.findById(ID).exec();
    }
    async delete(ID: number): Promise<string> {
        try {
            await this.userModel.findByIdAndRemove(ID).exec();
            return 'The user has been deleted';
        }
        catch (err) {
            return 'The user could not be deleted';
        }
    }
}