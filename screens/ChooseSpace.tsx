import { SafeAreaView, View, Pressable, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity, TextInput, Button } from "react-native";
import { faAngleLeft, faClock, faFilter, faLocationCrosshairs, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import { GestureDetector, Gesture, GestureHandlerRootView } from "react-native-gesture-handler";
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';
import React, { ReactNode, useState } from "react";
import { useFonts } from "expo-font";
import ButtonWithProps from "../components/buttonWithProps";
interface DraggableItemProps {
    children: ReactNode;
}
const DraggableItem: React.FC<DraggableItemProps> = ({ children }) => {
    const isGestureActive = useSharedValue(false);
    const onTranslate = useSharedValue(0);
    const offset = useSharedValue({ x: 0, y: 0 });
    const start = useSharedValue({ x: 0, y: 0 });
    const bg = useSharedValue({ color: 'none', padding: 0, paddingHorizontal: 0, borderRadius: 0 })
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: offset.value.x,
                },
                {
                    translateY: offset.value.y,
                },
            ],
            backgroundColor: bg.value.color,
            padding: bg.value.padding,
            paddingHorizontal: bg.value.paddingHorizontal,
            borderRadius: bg.value.borderRadius,
        };
    });

    const dragGesture = Gesture.Pan().onStart((_e,) => {
        isGestureActive.value = true;
        onTranslate.value = withTiming(0);
        bg.value = {
            color: '#F43939',
            padding: -4,
            paddingHorizontal: 5,
            borderRadius: 20,
        }
    }).onUpdate((e) => {
        offset.value = {
            x: e.translationX + start.value.x,
            y: e.translationY + start.value.y,
        };

    }).onEnd(() => {
        isGestureActive.value = false;
        start.value = {
            x: offset.value.x,
            y: offset.value.y,
        };
        bg.value = {
            color: 'none',
            padding: 0,
            paddingHorizontal: 0,
            borderRadius: 0,
        }
    });
    return (
        <GestureHandlerRootView>
            <GestureDetector gesture={dragGesture}>
                <Animated.View style={[animatedStyle]}>
                    {children}
                </Animated.View>
            </GestureDetector>
        </GestureHandlerRootView>
    );
};

const ChooseSpace: React.FC = () => {

    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        'Avenir': require('../assets/avenir_ff/AvenirLTStd-Book.otf'),
        'Avenirbold': require('../assets/avenir_ff/AvenirLTStd-Black.otf'),
        'Avenirroman': require('../assets/avenir_ff/AvenirLTStd-Roman.otf'),
    });
    if (!fontsLoaded) return null;

    const renderItem = ({ item, index }: any) => {
        return (
            <View style={{ backgroundColor: item.active ? "#F43939" : "#EAEAF3", padding: 5, paddingHorizontal: 10, borderRadius: 15 }}>
                <Text style={{ fontFamily: "Avenir", color: item.active ? "white" : "black" }}>{item.title}</Text>
            </View>
        );
    }
    return (

        <SafeAreaView style={{ flex: 1, marginTop: 20, alignItems: 'center', backgroundColor: '#F4F4FA' }}>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-start', gap: 50, marginLeft: 50, alignItems: "flex-start", marginTop: 50, marginBottom: 30, }}>
                <Pressable style={styles.back} onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </Pressable>
                <Text style={{ fontFamily: 'Avenirroman', fontSize: 22 }}>Choose Space</Text>
            </View>
            <ScrollView style={{}} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: "row", gap: 20, marginLeft: 40, overflow: 'scroll', height: 30 }}>
                    <View style={{ backgroundColor: "#F43939", padding: 5, paddingHorizontal: 10, borderRadius: 15, justifyContent: "center" }}>
                        <Text style={{ fontFamily: "Avenir", color: "white" }}>1st Floor</Text>
                    </View>
                    <View style={{ backgroundColor: "#EAEAF3", padding: 5, paddingHorizontal: 10, borderRadius: 15 }}>
                        <Text style={{ fontFamily: "Avenir", color: "black" }}>2st Floor</Text>
                    </View>
                    <View style={{ backgroundColor: "#EAEAF3", padding: 5, paddingHorizontal: 10, borderRadius: 15 }}>
                        <Text style={{ fontFamily: "Avenir", color: "black" }}>3st Floor</Text>
                    </View>
                    <View style={{ backgroundColor: "#EAEAF3", padding: 5, paddingHorizontal: 10, borderRadius: 15 }}>
                        <Text style={{ fontFamily: "Avenir", color: "black" }}>4st Floor</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.carContainer}>
                <View style={{
                    width: 200, borderWidth: 1, borderStyle: "dashed", borderColor: "#bbb"
                }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <DraggableItem>
                            <Image source={require("../assets/car.png")} style={{ width: 80 }} resizeMode="contain" />
                        </DraggableItem>
                        <View style={{ width: 100, borderLeftWidth: 1, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}><Text style={{ padding: 5 }}>A-1</Text></View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderStyle: "dashed", borderColor: "#bbb" }}>
                        <View style={{ width: 97, borderRightWidth: 1, flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}><Text style={{ padding: 5 }}>A-1</Text></View>
                        <DraggableItem>
                            <Image source={require("../assets/car.png")} style={{ width: 80, transform: [{ rotate: '180deg' }], }} resizeMode="contain" />
                        </DraggableItem>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <DraggableItem>
                            <Image source={require("../assets/car.png")} style={{ width: 80 }} resizeMode="contain" />
                        </DraggableItem>
                        <View style={{ width: 100, borderLeftWidth: 1, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}><Text style={{ padding: 5 }}>A-1</Text></View>
                    </View>
                </View>
                <View style={{ width: 200, borderWidth: 1, borderStyle: "dashed", borderColor: "#bbb" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <DraggableItem>
                            <Image source={require("../assets/car.png")} style={{ width: 80 }} resizeMode="contain" />
                        </DraggableItem>
                        <View style={{ width: 100, borderLeftWidth: 1, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}><Text style={{ padding: 5 }}>A-1</Text></View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderStyle: "dashed", borderColor: "#bbb" }}>
                        <View style={{ width: 97, borderRightWidth: 1, borderColor: "#bbb", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}><Text style={{ padding: 5 }}>A-1</Text></View>
                        <DraggableItem>
                            <Image source={require("../assets/car.png")} style={{ width: 80, transform: [{ rotate: '180deg' }], }} resizeMode="contain" />
                        </DraggableItem>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <DraggableItem>
                            <Image source={require("../assets/car.png")} style={{ width: 80 }} resizeMode="contain" />
                        </DraggableItem>
                        <View style={{ width: 100, borderLeftWidth: 1, borderColor: "#bbb", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}><Text style={{ padding: 5 }}>A-1</Text></View>
                    </View>
                </View>
            </View>
            <View style={styles.carContainer}>

                <View style={{ width: 200, borderWidth: 1, borderStyle: "dashed", borderColor: "#bbb" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <DraggableItem>
                            <Image source={require("../assets/car.png")} style={{ width: 80 }} resizeMode="contain" />
                        </DraggableItem>
                        <View style={{ width: 100, borderLeftWidth: 1, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}><Text style={{ padding: 5 }}>A-1</Text></View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderStyle: "dashed", borderColor: "#bbb" }}>
                        <View style={{ width: 97, borderRightWidth: 1, flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}><Text style={{ padding: 5 }}>A-1</Text></View>
                        <DraggableItem>
                            <Image source={require("../assets/car.png")} style={{ width: 80, transform: [{ rotate: '180deg' }], }} resizeMode="contain" />
                        </DraggableItem>
                    </View>
                </View>
                <View style={{ width: 200, borderWidth: 1, borderStyle: "dashed", borderColor: "#bbb" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <DraggableItem>
                            <Image source={require("../assets/car.png")} style={{ width: 80 }} resizeMode="contain" />
                        </DraggableItem>
                        <View style={{ width: 100, borderLeftWidth: 1, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}><Text style={{ padding: 5 }}>A-1</Text></View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderStyle: "dashed", borderColor: "#bbb" }}>
                        <View style={{ width: 97, borderRightWidth: 1, flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}><Text style={{ padding: 5 }}>A-1</Text></View>
                        <DraggableItem>
                            <Image source={require("../assets/car.png")} style={{ width: 80, transform: [{ rotate: '180deg' }], }} resizeMode="contain" />
                        </DraggableItem>
                    </View>
                </View>
            </View>


            <TouchableOpacity style={{ width: '80%', }} onPress={() => navigation.navigate('book' as never)}>
                <ButtonWithProps textColor="white" color="black" title="Book Space" />
            </TouchableOpacity>
                {/* <AlertNotificationRoot>
                    <View>
                        <Button
                            title={'dialog box'}
                            onPress={() =>
                                Dialog.show({
                                    type: ALERT_TYPE.DANGER,
                                    title: 'Success',
                                    textBody: 'Congrats! this is dialog box success',
                                    button: 'close',
                                })
                            }
                        />
                        <Button
                            title={'toast notification'}
                            onPress={() =>
                                Toast.show({
                                    type: ALERT_TYPE.SUCCESS,
                                    title: 'Success',
                                    textBody: 'Congrats! this is toast notification success',
                                })
                            }
                        />
                    </View>
                </AlertNotificationRoot> */}
        </SafeAreaView>

    )
};
export default ChooseSpace;


const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    back: {
        width: 35,
        height: 35,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EAEAF3',
    },

    carContainer:{
        width: '100%', 
        flexDirection: "row", 
        gap: 20, 
        justifyContent: "flex-start", 
        alignItems: "flex-start", 
        margin: 20, 
        marginLeft: 120 
    }
})