import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { File } from '@ionic-native/file/ngx';

let valid_users = {}
let user_information = {}

export class User{
  name: string;
  email: string;
  birthday: string;
  tel: string;
  contact: string;
  contel: string;


  constructor(name:string, email:string, birthday: string, tel: string, contact: string, contel: string){
    this.name = name;
    this.email = email;
    this.birthday= birthday;
    this.tel= tel;
    this.contact= contact;
    this.contel = contel;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  currentUser: User;

  public login(credentials){

    if (credentials.email == null || credentials.password == null){
      return Observable.throw("Please fuck off");
    } else {
      return Observable.create(observer => {
        let access = false
        // At this point make a request t the backend to check for validation / login
        Object.keys(valid_users).forEach(function(key){
          if (key == credentials.email){
            access = true
          }
        });
        this.currentUser = user_information[credentials.email];
        //let temp = File.writeFile(cordova.file.dataDirectory, "passwords.txt", {replace:false});
        //this.currentUser = new User("Simon", "tracksler@gagi.ru", null, null, null, null);
        //let access = this.checkLogin(credentials);
        observer.next(access);
        observer.complete()
      });
    }
  }

  public register(credentials){
    if(credentials.email === null || credentials.password === null){
      return Observable.throw("Please fuck off");
    } else {
      this.currentUser = new User(credentials.name, credentials.email, credentials.birthday, credentials.tel,credentials.contact,credentials.contel);
      // At this point store the credentials to your backend!
      valid_users[credentials.email] = credentials.password;
      user_information[credentials.email] = this.currentUser;
      return Observable.create(observer =>{
        observer.next(true);
        observer.complete();
      });
    }
  }
  public getUserInfo(): User{
    return this.currentUser;
  }

  public logout(){
    return Observable.create(observer =>{
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }

  constructor() { }
}
