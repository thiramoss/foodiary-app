import {
  HostGrotesk_400Regular,
  HostGrotesk_500Medium,
  HostGrotesk_600SemiBold,
  HostGrotesk_700Bold,
  useFonts,
} from '@expo-google-fonts/host-grotesk';
import { Slot, useRouter, useSegments } from 'expo-router'; // <--- Slot no lugar de Stack
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '../contexts/AuthContext';
import { useAuth } from '../hooks/useAuth';
import '../styles/global.css';

SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

export default function Layout() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RootLayout />
        </AuthProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

function RootLayout() {
  const { isLoggedIn, isLoading } = useAuth();
  const segments = useSegments(); // <--- Rastreia onde o usuário está
  const router = useRouter();

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

  useEffect(() => {
    if (isLoading) return; 

    const inAuthGroup = segments[0] === '(private)';

    if (!isLoggedIn && inAuthGroup) {
      router.replace('/(public)'); 
    } else if (isLoggedIn && !inAuthGroup) {
      router.replace('/(private)/');
    }
  }, [isLoggedIn, segments, isLoading]);

  if (!loaded && !error) {
    return null;
  }

  return <Slot />;
}