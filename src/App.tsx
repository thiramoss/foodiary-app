import {
  HostGrotesk_400Regular,
  HostGrotesk_500Medium,
  HostGrotesk_600SemiBold,
  HostGrotesk_700Bold,
  useFonts,
} from '@expo-google-fonts/host-grotesk';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { useEffect } from 'react';
import './styles/global.css';
import { HomeHeader } from './components/HomeHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from 'react-native/Libraries/NewAppScreen';

SplashScreen.preventAutoHideAsync();

export default function App() {
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

  return (
    <View>
      <SafeAreaProvider>
        <Header />
      </SafeAreaProvider>
      <HomeHeader />
    </View>
  );
}