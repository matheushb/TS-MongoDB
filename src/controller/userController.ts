import { UserService } from "../service/userService";
import { DataObject, IdObject } from "../interfaces";

export class UserController {
    constructor(
        private readonly userService: UserService
    ){}

    getUsers() {
        return this.userService.getUsers();
    }

    getUserById(tempId : IdObject) {
        const { id } = tempId; 
        return this.userService.getUserById(id);
    }

    addUser(data: object) {
        
        return this.userService.addUser(data);
    }

    editUserById(tempId: IdObject, data: DataObject) {
        const { id } = tempId;
        const { email, age, password, name } = data;
        return this.userService.editUserById(id, email, age, password, name)
    }

    deleteUserById(tempId: IdObject) {
        console.log(tempId);
    }
}