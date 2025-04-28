import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedTextInput } from '@/components/ThemedTextInput';
import { ThemedButton } from '@/components/ThemedButton';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

  // dentro do seu componente LoginScreen
  const router = useRouter();

  function handleSubmit() {
    // Aqui você faz a validação de login
    const loginValido = true; // (substitua pela sua lógica real)

    if (loginValido) {
      router.replace('/(tabs)'); // <-- Manda o usuário para as abas!
    } else {
      alert('Usuário ou senha inválidos!');
    }
  }
  // const handleSubmit = () => {
  //   if (!username || !password) {
  //     setError('Preencha todos os campos.');
  //     return;
  //   }
  //   // Autenticação aqui
  //   console.log('Login:', { username, password });
  // };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/login-tcc.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem vindo</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText  style={styles.titleContainer}>Login</ThemedText>

        <ThemedText style={styles.titleContainer}>Usuário</ThemedText>
        <ThemedTextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Digite seu usuário"
        />

        <ThemedText style={styles.titleContainer}>Senha</ThemedText>
        <ThemedTextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Digite sua senha"
          secureTextEntry
        />
        <ThemedView style={styles.links}>
          <TouchableOpacity>
            <ThemedText style={styles.titleContainer}>Criar conta</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity>
          <ThemedText style={styles.titleContainer}>Esqueci a senha</ThemedText>
        </TouchableOpacity>
        </ThemedView>

      <TouchableOpacity  style={styles.titleContainer} onPress={handleSubmit}>
        <ThemedButton 
          label="Entrar"
          lightColor="#A1CEDC" // Cor para tema claro
          darkColor="#1D3D47"  // Cor para tema escuro
          onPress={handleSubmit}
        />
      </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 195,
    width: 290,
    position: 'absolute',
    top: 50, // Alinha a imagem ao meio da tela
    left: 50, // Alinha a imagem ao meio da tela    
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
