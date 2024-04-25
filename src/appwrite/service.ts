import {ID, Account, Client, Databases } from "appwrite";
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
}
const appwriteClient = new Client();
class AppwriteService{
    account;
    constructor(){
        appwriteClient.setEndpoint("https://cloud.appwrite.io/v1").setProject("662645ec7cd5895be4f6");
        this.account = new Account(appwriteClient);
    }
    async createAccount({email, password,phoneNumber}:createAccountType){
        try {
            const response = await this.account.create(ID.unique(), email, password, phoneNumber);

            console.log("----------->",response)
            return response;
        } catch (error) {
            console.log(error);
                Dialog.show({
                    type: ALERT_TYPE.DANGER,
                    title: 'Error',
                    textBody: "email already exists",
                    button: 'OK',
                })
        }
    }
    async signIn({email, password}:loginAccountType){
        try {
            const response = await this.account.createEmailPasswordSession(email, password);
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
}
export class AppwriteDb {
    database;
    constructor(){
        appwriteClient.setEndpoint("https://cloud.appwrite.io/v1").setProject("662645ec7cd5895be4f6");
        this.database = new Databases(appwriteClient);
    }
    async createDocument({email, password,phoneNumber}:createAccountType){
        try {
            const response = await this.database.createDocument("6629208c3c3036e6aabb","6629fabb0945cdf2477b",ID.unique(), {email, password, phoneNumber});
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