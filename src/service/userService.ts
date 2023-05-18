import { StrOrUnd } from "../interfaces";
import users from "../models/User";

export class UserService {

    async getUsers() {
        try{
            return await users.find();
        }catch(err: any){
            return err.message;
        }
    }

    async getUserById(id: string) {
        try{
            return await users.find({_id: id});
        }catch(err: any){
            return err.message;
        }
    }

    async addUser(data: object) {
        try{
            return await users.create(data);
        }catch(err: any){
            return err.message;
        }
    }
    //mudar isso no editUser
    async editUserById(id: string, email: StrOrUnd, age: number | undefined, password: StrOrUnd, name: StrOrUnd) {
        try{    
            return await users.updateOne({_id: id}, {email, age, password, name})
        }catch(err: any) {
            return err.message;
        }
    }

    async deleteUserById(id: string) {
        try {
            return await users.deleteOne({_id : id})
        }catch(err: any){
            return err.message;
        }
    }
}