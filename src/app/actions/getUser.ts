'use server'

import { UserRepository } from "../repositories/userRepository";


export const getUser = async (username: string, password: string, vCheckbox: boolean) => {
    const userRepo = new UserRepository();
    
    let user;

    if (vCheckbox) {
        console.log('in vulnerable');
        user = await userRepo.GetUserVulnerable(username, password);
        console.log('user', user);

    }
    else {
        console.log('in secure');
        user = await userRepo.GetUserSecure(username, password);
        console.log('user', user);

    }

    return user;
}
