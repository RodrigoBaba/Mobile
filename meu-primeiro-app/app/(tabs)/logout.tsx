import { useEffect } from 'react';
import { router } from 'expo-router';

export default function Logout() {
  useEffect(() => {
    // Função que faz o logout
    const logout = async () => {
      // Aqui limpa o token, etc
      // await AsyncStorage.removeItem('token'); (por exemplo)
      
      router.replace('/login');
    };
    
    logout();
  }, []);

  return null; // Não renderiza nada, só executa o logout
}
