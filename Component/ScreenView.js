import React, { useEffect } from 'react';
import { View, StyleSheet, Image, ImageBackground, Text } from 'react-native';

const ScreenView = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('ScreenTwo');
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigation]);
    return (
        <View >

            <View style={{ position: "relative" }}>
                <View style={{ height: "85%" }}>
                    <ImageBackground source={require("../assets/award_bg.png")} style={{ height: "100%", width: "100%" }} resizeMode="stretch" >
                        <Image source={require('../assets/castingLogo-1.png')} style={{ height: 100, width: 100, alignSelf: "center", marginTop: 100 }} />
                        <Text style={{ alignSelf: "center", fontSize: 30, color: "#800080", marginTop: 20 }}>Casting Call</Text>
                    </ImageBackground>

                </View>

                <View style={{ backgroundColor: "", height: "15%" }}>
                    <ImageBackground source={require("../assets/awardPlatform.png")} style={{ height: " 100 %" }} resizeMode="stretch" />
                </View>
            </View>


            <View>

                <Image source={require("../assets/girlClap.png")} style={{ position: 'absolute', bottom: 85, alignSelf: "center", height: 300, width: "50%" }} resizeMode="stretch" />
            </View>



        </View>

    );
}



export default ScreenView;
