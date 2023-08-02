import {Stack} from 'expo-router'
import {useCallback} from 'react'
import {useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync();



const Layout = () => {
  const [isFontLoaded]=useFonts({
    DMBold:require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium:require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular:require('../assets/fonts/DMSans-Regular.ttf')
  })
  const onLayoutRoot=useCallback(async()=>{
    if(isFontLoaded) {
      await SplashScreen.hideAsync();
    }
  },[isFontLoaded])
  if(!isFontLoaded) return null;
  return <Stack onLayoutRoot={onLayoutRoot} /> 
}

export default Layout;