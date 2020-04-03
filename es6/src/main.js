import axios from 'axios';

class Api {
    static async getUserInfo(username){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`)
            console.log(response);
        }catch(error){
            console.warn(error);
            
            
        }
    }
}

Api.getUserInfo('enzo-z');

Api.getUserInfo("lkdlkajdopqhdpoiqh89q");