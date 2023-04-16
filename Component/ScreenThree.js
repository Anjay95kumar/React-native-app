import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';

const ScreenThree = () => {
    const [State, Setstate] = useState(15000);
    useEffect(() => {

        const timer = setInterval(() => {
            State !== 40000 && Setstate(State + 1000)
        }, 80);

        return () => clearInterval(timer)

    }, [State]);



    return (
        <View >

            <View style={{ position: "relative" }}>
                <View style={{ height: "85%" }}>
                    <ImageBackground source={require("../assets/award_bg.png")} style={{ height: "100%", width: "100%" }} resizeMode="stretch" >

                        <Text style={{ alignSelf: "center", paddingTop: 0, fontSize: 20, color: "yellow", marginBottom: 100, marginTop: 110, fontSize: 25 }}>4 Friends Gave U Some Love</Text>


                        <Image source={require("../assets/main-heart.png")} style={{ alignSelf: "center", height: 120, width: "40%", }} resizeMode="stretch" >

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
                    <Text style={{ fontSize: 30, color: "white" }}>{State}</Text>
                </View>



            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ScreenThree;
