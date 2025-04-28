import { useRouter, Tabs } from 'expo-router';
import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Controle de login
  const router = useRouter();
  
  const handleLogout = () => {
    setIsLoggedIn(false); // Deslogar
    router.replace('/login'); // Navegar para a tela de login
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
            height: 52,
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="list.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Carrinho',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="cart.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="teste"
        options={{
          title: 'Teste',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="developers"
        options={{
          title: 'Desenvolvedores',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="team.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="logout" // A aba "Sair" ou "Logout"
        options={{
          title: 'Sair',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="logout" color={color} />,
        }}
      />
    </Tabs>
  );
}
