import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import '../styles/global.css'
import * as SplashScreen from 'expo-splash-screen';
import {
  HostGrotesk_400Regular,
  HostGrotesk_500Medium,
  HostGrotesk_600SemiBold,
  HostGrotesk_700Bold,
  useFonts,
} from '@expo-google-fonts/host-grotesk';
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
      const [loaded, error] = useFonts({
    HostGrotesk_400Regular,
    HostGrotesk_500Medium,
    HostGrotesk_600SemiBold,
    HostGrotesk_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    } 
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
    return(
        <SafeAreaProvider>
            <Stack screenOptions={{ headerShown: false }} />
        </SafeAreaProvider>
    )
}