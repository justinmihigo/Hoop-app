import {ALERT_TYPE, Dialog, Toast} from "react-native-alert-notification";
export function error(message: string){
    Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: message,
        button: 'OK',
    })
}
export function success(message: string){
    Dialog.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Success',
        textBody: message,
        button: 'OK',
    })
}
export function successToast(message: string){
    Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Success',
        textBody: message,
    })
}
