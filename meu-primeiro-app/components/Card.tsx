import { View, StyleSheet, ViewProps, TouchableOpacity, Image } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';

type CardProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  onPress: () => void; // Adicionando a propriedade onPress para tornar o Card um botão
  imageSource?: any;
};

export function Card({ children, onPress, imageSource,lightColor = '#fff', darkColor = '#333'}: CardProps) {
  // Obtém o tema atual (claro ou escuro)
  const colorScheme = useColorScheme(); // Supondo que você tenha esse hook

  // Inverte as cores: se for claro, usa o darkColor e vice-versa
  const backgroundColor = colorScheme === 'dark' ? darkColor : lightColor;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, { backgroundColor }]}>
      <View style={styles.cardContent}>
        {imageSource && <Image source={imageSource} style={styles.image} />}
        {children}
      </View>
    </TouchableOpacity >
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center', // Para centralizar o conteúdo (se necessário)
    justifyContent: 'center', // Para centralizar o conteúdo (se necessário)
  },
  cardContent: {
    flexDirection: 'column', // Coloca a imagem e o texto na mesma linha
    alignItems: 'center', // Alinha a imagem e o texto verticalmente
    gap: 0, // Espaçamento entre a imagem e o texto
  },
  image: {
    width: 400,
    height: 100,
    resizeMode: "contain",
  },
});
