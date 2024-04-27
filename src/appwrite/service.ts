import {ID, Account, Client, Databases, Storage, Permission, Role } from "appwrite";
import { AlertNotificationRoot, Dialog, ALERT_TYPE } from "react-native-alert-notification";
type createAccountType={
    phoneNumber: string;
    email: string;
    password: string;
}
type loginAccountType={
    email: string;
    password: string;
}
type usersSchema={
    email: string;
    password: string;
    phoneNumber: string;
    userId: string;
}
const appwriteClient = new Client();
class AppwriteService{
    account;
    storage;
    constructor(){
        appwriteClient.setEndpoint("https://cloud.appwrite.io/v1").setProject("662616a78ae57dcf1889");
        this.account = new Account(appwriteClient);
        this.storage= new Storage(appwriteClient);
    }
    async createAccount({email, password,phoneNumber}:createAccountType){
        try {
            const response = await this.account.create(ID.unique(), email, password, phoneNumber);

            console.log("----------->",response)
            return response;
        } catch (error) {
            console.log(error);
            return(
                Dialog.show({
                    type: ALERT_TYPE.DANGER,
                    title: 'Error',
                    textBody: error as string,
                    button: 'OK',
                })
            )
        }
    }
    async signIn({email, password}:loginAccountType){
        try {
            const response = await this.account.createEmailSession(email, password);
            return response;
        } catch (error) {
            console.log(error);
            return (
                Dialog.show({
                    type: ALERT_TYPE.DANGER,
                    title: 'Error',
                    textBody: 'Incorrect Password ',
                    button: 'close',
                })
            )
        }
    }
    async getCurrentUser(){
        try {
            const response = await this.account.get();
            return response;
        } catch (error) {
            console.log(error);
                Dialog.show({
                    type: ALERT_TYPE.DANGER,
                    title: 'Success',
                    textBody: error as string,
                    button: 'close',
                })
        }
    }
    async logout(){
        try {
            const response = await this.account.deleteSession("current");
            return response;
        } catch (error) {
            console.log(error);
            return 
        }
    }
    async forgetPassword(email:string){
        try {
            const response = await this.account.createRecovery(email,"https://appwrite.io");
            return response;
        } catch (error) {
            console.log(error);
            return (
                Dialog.show({
                    type: ALERT_TYPE.DANGER,
                    title: 'Error',
                    textBody: "check your email",
                    button: 'close',
                })
            )
        }
    }
    async bucketCreate(file:File){
        try {
            const bucket = new Storage(appwriteClient);
            const response = await bucket.createFile("662ac396dd372408d3a8",ID.unique(),
            file,[
                Permission.create(Role.any()),
                Permission.write(Role.users()),
                Permission.write(Role.any()),
                Permission.read(Role.any()),
                Permission.update(Role.any()),
            ]);
            return response;
        } catch (error) {
            console.log(error);
            // return (
            //     Dialog.show({
            //         type: ALERT_TYPE.DANGER,
            //         title: 'Error',
            //         textBody: error as string,
            //         button: 'close',
            //     })
            // )
        }
    }
}
export class AppwriteDb {
    database;
    constructor(){
        appwriteClient.setEndpoint("https://cloud.appwrite.io/v1").setProject("662616a78ae57dcf1889");
        this.database = new Databases(appwriteClient);
    }
    async createDocument({userId,email, password,phoneNumber}:usersSchema){
        try {
            const response = await this.database.createDocument("6628f7900748006a1b70","6628f79e8c2557b899fd", ID.unique(), {userId, email, password, phoneNumber});
            return response;
        } catch (error) {
            console.log(error);
                Dialog.show({
                    type: ALERT_TYPE.DANGER,
                    title: 'Error',
                    textBody: 'Error check your inputs',
                    button: 'close',
                })
        }
    }

}
export default new AppwriteService();