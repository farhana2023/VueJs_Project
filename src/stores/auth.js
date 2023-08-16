
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state(){
        return{  isLogin :false,
        }
      
    },

getters:{
    isAuthenticated(){
        return this.isLogin==true;
    }
},
actions:{
   
    loginUser(){
        this.isLogin=true;
    },
    logoutUser(){
        this.isLogin=false;
    },
},
  
});
