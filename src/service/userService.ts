import users from "../models/User";

export class UserService {

    async getUsers() {
        try{
            return await users.find();
        }catch(err){
            console.log(err)
        }
    }

    async getUserById(id: string) {
        try{
            return await users.findById(id);
        }catch(err){
            return err;
        }
    }

    addUser(data: object) {

    }
    //mudar isso no editUser
    editUserById(id: string, email: string | undefined, age: number | undefined, password: string | undefined, name: string | undefined) {

    }

    deleteUserById(id: string) {

    }


}