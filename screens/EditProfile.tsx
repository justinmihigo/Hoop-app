import { View, Text, StyleSheet, SafeAreaView, ImageBackground, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation, Link } from '@react-navigation/native';
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import { useFonts } from 'expo-font';
import AppWriteService from "../src/appwrite/service";
import { AppwriteDb } from '../src/appwrite/service';
import { ID, Permission, Query, Role } from 'appwrite';
import { success } from '../src/appwrite/alert';

export default function EditProfile() {
    const [fullName, setFullName] = useState("");
    const [vehicleType, setVehicleType] = useState("");
    const [plateNumber, setPlateNumber] = useState("");
    const [Address, setAddress] = useState("");
    const [image, setImage] = useState("");
    // const [userId, setUserId] = useState("");
    const [documentId, setDocumentId] = useState("");
    const handleUpdate = () => {
        try {

            AppWriteService.getCurrentUser().then((res) => {
                if (res) {
                    const userId = res.$id as string;
                    let documentId;
                    new AppwriteDb().database
                        .listDocuments("6628f7900748006a1b70", "6628f79e8c2557b899fd", [Query.equal('userId', userId), Query.select(['$id'])])
                        .then((res) => {
                            if (res) {
                                console.log(res.documents[0].$id);
                                setDocumentId(() => res.documents[0].$id);
                                new AppwriteDb().database.
                                    updateDocument("6628f7900748006a1b70",
                                        "6628f79e8c2557b899fd", res.documents[0].$id,
                                        {
                                            fullName,
                                            vehicleType,
                                            plateNumber,
                                            Address
                                        }).then((res) => {
                                            if (res) {
                                                console.log(res);
                                                success("Profile updated successfully");
                                            }
                                        }
                                        )
                                    .catch((err) => console.log(err))
                            }


                        })
                        .catch((err) => { console.log(err); })
                }
                // new AppwriteDb().database
                // .updateDocument("6628f7900748006a1b70","6628f79e8c2557b899fd","",{fullName,carType,plateNumber,address});
            })
        } catch (error) {
            console.log(error);
        }
    }
    const handleImagePicker = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);
        if (!result.canceled) {
            setImage(() => result.assets[0].uri);
            const uri = result.assets[0].uri;
            const filenames = result.assets[0].fileName;
            const fileTypes = result.assets[0].type;
            const fileId = result.assets[0].assetId!;
            const formData = new FormData();
            formData.append("fileId", fileId);
            const response = await fetch(uri); // Convert image URI to Blob
            const blob = await response.blob();
            if (blob) {
                formData.append("file", blob);
                formData.append("permissions[]", Permission.create(Role.guests()));
                try {
                    const resp= await fetch("https://cloud.appwrite.io/v1/storage/buckets/662ac396dd372408d3a8/files",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                        body: formData,
                    }
                )
                if(resp){
                    console.log(resp);
                }
                } catch (error) {
                    console.log(error);
                }

            }
            // const file = new File([blob], "img", { "type": "image/png" });
            // console.log(file);

            // if (file) {
            //     AppWriteService.storage.createFile("662ac396dd372408d3a8", ID.unique(), file, [Permission.write(Role.users())])
            //         .then((res) => {
            //             if (res) {
            //                 console.log(res, "success");
            //             }
            //         })
            //         .catch((err) => console.log(err))
            // }
        }
    }
    const handleGetItems = () => {
        AppWriteService.getCurrentUser().then((res) => {
            if (res) {
                const userId = res.$id as string;
                new AppwriteDb().database
                    .listDocuments("6628f7900748006a1b70", "6628f79e8c2557b899fd", [Query.equal('userId', userId), Query.select(['$id'])])
                    .then((res) => {
                        if (res) {
                            setDocumentId(() => res.documents[0].$id);
                            new AppwriteDb().database.
                                listDocuments("6628f7900748006a1b70",
                                    "6628f79e8c2557b899fd", [Query.equal('$id', res.documents[0].$id)])
                                .then((res) => {
                                    if (res) {
                                        setAddress(() => res.documents[0].Address);
                                        setFullName(() => res.documents[0].fullName);
                                        setPlateNumber(() => res.documents[0].plateNumber);
                                        setVehicleType(() => res.documents[0].vehicleType);
                                    }
                                }
                                )
                                .catch((err) => console.log(err))
                        }
                    })
            }
        })

    }
    useEffect(() => {
        handleGetItems();
    }, [AppWriteService]);
    const fallbackImg = require("../assets/editprofile.png");
    const [fontLoaded] = useFonts({
        'Avenir': require('../assets/avenir_ff/AvenirLTStd-Book.otf'),
        'Avenirbold': require('../assets/avenir_ff/AvenirLTStd-Black.otf'),
        'Avenirroman': require('../assets/avenir_ff/AvenirLTStd-Roman.otf'),
    })
    if (!fontLoaded) return null;

    return (
        <SafeAreaView style={styles.parent}>




            <View style={styles.content}>

                <View style={styles.profileContainer}>

                    <View style={styles.returnNavi}>
                        <TouchableOpacity><Image style={{ height: 24, width: 24, backgroundColor: "#EAEAF3", padding: 20, borderRadius: 10 }} source={require("../assets/Arrow - Left 2.png")} /></TouchableOpacity>
                        <Text style={styles.innerr}>Edit Profile</Text>
                    </View>
                    <TouchableOpacity onPress={handleImagePicker}>
                        <View style={{ marginLeft: 150 }}>
                            <Image style={{ height: 86, width: 86 }} source={image ? { uri: image } : fallbackImg}></Image>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.textt}>

                        <Text style={{ fontSize: 16, }}>Name</Text>

                        <View style={{ justifyContent: "center", }}>
                            <TextInput placeholder='Echa' style={styles.input} onChangeText={setFullName} >
                                <Text>{fullName}</Text>
                            </TextInput>

                            <View style={styles.typeIdcontainer}>

                                <View>
                                    <Text style={{ fontSize: 16, fontFamily: "Avenir", padding: 10 }}>Type</Text>
                                    <TextInput
                                        style={{ height: 54, width: 146, backgroundColor: "#FFFFFF", borderRadius: 10, fontSize: 18, padding: 15 }}
                                        placeholder='Car Sport'
                                        onChangeText={setVehicleType}
                                    >
                                        <Text>{vehicleType}</Text>
                                    </TextInput>
                                </View>

                                <View>
                                    <Text style={{ fontSize: 16, fontFamily: "Avenir", padding: 10 }}>ID</Text>
                                    <TextInput
                                        style={{ height: 54, width: 146, backgroundColor: "#FFFFFF", borderRadius: 10, fontSize: 18, padding: 15 }}
                                        placeholder='C68721'
                                        onChangeText={setPlateNumber}
                                    >
                                        <Text>{plateNumber}</Text>
                                    </TextInput>
                                </View>



                            </View>


                        </View>
                        <Text style={{ fontSize: 16, padding: 10, fontFamily: "Avenir" }}>Address</Text>
                        <TextInput placeholder='Address' style={styles.input} onChangeText={setAddress} >
                            <Text>{Address}</Text>
                        </TextInput>
                    </View>


                    <View style={styles.endContainer}>
                        <TouchableOpacity><Text style={styles.saveAndCancel}>Cancel</Text></TouchableOpacity>
                        <TouchableOpacity onPress={handleUpdate}><Text style={styles.saveAndCancel2}> Save</Text></TouchableOpacity>
                    </View>





                </View>



            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    parent: {

        flex: 1,

        backgroundColor: '#F5F5F5',
        // alignItems: 'center',
        flexDirection: "column",
        marginTop: "30%"
    },

    endContainer: {
        gap: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 100,
        position: "relative"
    },


    content: {
        flex: 2,
        backgroundColor: '#F5F5F5',
        justifyContent: 'space-around',
        flexDirection: "column",
        width: "100%",
        padding: 20,

    },

    container: {
        width: "100%",
        gap: 10,

    },

    textt: {
        display: "flex",
        flexDirection: "column",
        gap: 10,

    },

    typeIdcontainer: {
        display: "flex",
        flexDirection: "row",
        // gap:10,
        paddingTop: 15,
        justifyContent: "space-around",
        marginLeft: -20
    },

    input: {
        width: 350,
        height: 54,
        borderRadius: 10,
        padding: 15,
        backgroundColor: "white",
        fontFamily: 'Avenir',
        fontSize: 18

    },

    saveAndCancel: {
        width: 146,
        height: 60,
        borderRadius: 15,
        padding: 15,
        backgroundColor: "#EAEAF3",
        fontFamily: 'Avenir',
        fontSize: 18,
        textAlign: "center"

    },


    saveAndCancel2: {
        width: 146,
        height: 60,
        borderRadius: 15,
        padding: 15,
        backgroundColor: "#130F26",
        fontFamily: 'Avenir',
        fontSize: 18,
        color: "white",
        textAlign: "center"
    },

    returnNavi: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        gap: -30,
        marginLeft: -60,
        marginTop: -110



    },

    btn: {
        backgroundColor: "#130F26",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 13,
        borderRadius: 15,
        height: 60,
        marginBottom: -60,

    },

    inner: {
        color: "white",
        fontFamily: 'Avenir',
    },
    innerr: {
        color: "#2D2D2D",
        fontFamily: 'Avenirroman',
        fontSize: 20,
        position: "relative",
        left: -50,

    },

    profileContainer: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: 40
    }



})

