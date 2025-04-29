// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { StatusBar } from 'expo-status-bar';
// import { useEffect, useState } from 'react';
// import 'react-native-reanimated';

// import { useColorScheme } from '@/hooks/useColorScheme';

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   const [isLoggedIn, setIsLoggedIn] = useState(false); // <-- Novo: estado de login

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }
//   console.log('Está logado?', isLoggedIn);
//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack>
//         {isLoggedIn ? (
//           <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         ) : (
//           <Stack.Screen name="login" options={{ headerShown: false }} />
//         )}
//         <Stack.Screen name="+not-found" />
//       </Stack>
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }

// app/_layout.tsx
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack, useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Começa como não logado
  const router = useRouter();
  const colorScheme = useColorScheme();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     router.replace('/login'); // redireciona para a tela de login
  //   }
  // }, [isLoggedIn]);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}

