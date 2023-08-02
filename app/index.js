import { Stack } from "expo-router";
import ScreenBtn from "../components/common/ScreenBtn/ScreenBtn";
import Welcome from "../components/common/Welcome/Welcome";
import NearbyJobs from "../components/jobs/nearby/NearbyJobs";
import PopularJob from "../components/jobs/popular/PopularJob";

const { View, SafeAreaView, ScrollView } = require("react-native")

import Menu from '../assets/icons/menu.png'
import Profile from '../assets/images/kemal.jpg'

const Home=()=>{
    return (
       <SafeAreaView style={{flex:1}}>
            <Stack.Screen
            options={{
                headerStyle:{
                    backgroundColor:'wheat',
                },
                headerShadowVisible:false,
                headerLeft:()=><ScreenBtn iconUrl={Menu} dimension='60%'/>,
                headerRight:()=><ScreenBtn iconUrl={Profile} dimension='100%'/>,
                headerTitle:''
            }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex:1,padding:20}}>
                    <Welcome/>
                    <PopularJob/>
                    <NearbyJobs/>
                </View>
            </ScrollView>
       </SafeAreaView>
    )
}

export default Home;