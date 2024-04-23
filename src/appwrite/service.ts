import {ID, Account, Client } from "appwrite";
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
const appwriteClient = new Client();
class AppwriteService{
    account;
    constructor(){
        appwriteClient.setEndpoint("https://cloud.appwrite.io/v1").setProject("662616a78ae57dcf1889");
        this.account = new Account(appwriteClient);
    }
    async createAccount({email, password,phoneNumber}:createAccountType){
        try {
            const response = await this.account.create(ID.unique(), email, password, phoneNumber);
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
            const response = await this.account.createEmailPasswordSession(email, password);
            return response;
        } catch (error) {
            console.log(error);
            return (
                Dialog.show({
                    type: ALERT_TYPE.DANGER,
                    title: 'Success',
                    textBody: 'Congrats! this is dialog box success',
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
            return (
                Dialog.show({
                    type: ALERT_TYPE.DANGER,
                    title: 'Success',
                    textBody: 'Congrats! this is dialog box success',
                    button: 'close',
                })
            )
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
export default new AppwriteService();