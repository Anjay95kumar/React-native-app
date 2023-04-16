import React, { useEffect } from 'react';
import { View, StyleSheet, Image, ImageBackground, Text, TouchableOpacity } from 'react-native';

export const ScreenTwo = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('ScreenThree');
        }, 20000);
        return () => clearTimeout(timer);
    }, [navigation]);


    return (

        <View >

            <View style={{ position: "relative" }}>
                <View style={{ height: "85%" }}>
                    <ImageBackground source={require("../assets/award_bg.png")} style={{ height: "100%", width: "100%" }} resizeMode="stretch" >



                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 100, gap: 20 }}>
                            <View>
                                <Image source={require("../assets/avtar2.png")} style={{ height: 100, width: 100, borderRadius: 50, borderWidth: 2, borderColor: "yellow", }} />
                            </View>
                            <View>
                                <Text style={{ color: "yellow", fontSize: 30 }}>D-Lister</Text>
                                <Text style={{ color: "skyblue", fontSize: 20, alignSelf: "center" }}>Sally</Text>
                            </View>

                        </View>



                        <Text style={{ alignSelf: "center", marginTop: 10, fontSize: 20, color: "yellow", }}>U Give Me Some Love</Text>


                        <Image source={require("../assets/main-heart.png")} style={{ alignSelf: "center", height: 120, width: "40%", margin: 0 }} resizeMode="stretch" >

                        </Image>

                    </ImageBackground>

                </View>

                <View style={{ backgroundColor: "", height: "15%" }}>
                    <ImageBackground source={require("../assets/awardPlatform.png")} style={{ height: " 100 %" }} resizeMode="stretch" />
                </View>
            </View>


            <View>

                <Image source={require("../assets/girlClap.png")} style={{ position: 'absolute', bottom: 85, alignSelf: "center", height: 300, width: "50%" }} resizeMode="stretch" />
            </View>

            <View>
                <View style={{ position: "absolute", bottom: 430, alignSelf: "center" }} >
                    <Text style={{ fontSize: 30, color: "white" }}>15000</Text>
                </View>

                <View style={{ position: "absolute", bottom: 200, left: 300, alignSelf: "center" }} >
                    <TouchableOpacity ><Image source={require("../assets/arrow.png")} style={{ height: 70, width: 80, opacity: 0.5 }} />

                    </TouchableOpacity>
                </View>

            </View>
        </View>


    );
};

