import { TouchableOpacity, Text, TouchableOpacityProps, StyleSheet, View  } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';

export type ThemedButtonProps = TouchableOpacityProps & {
  lightColor?: string;
  darkColor?: string;
  label: string;  // Texto do botão
  onPress: () => void;
};

export function ThemedButton({ lightColor, darkColor, label, style, onPress }: ThemedButtonProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  const textColor = useThemeColor({ light: '#000', dark: '#FFF' }, 'text');  // Cor do texto

  return (
    <View style={styles.container}>
        <TouchableOpacity
            style={[styles.button, { backgroundColor: backgroundColor }]} // Aplicando o estilo
            onPress={onPress}
        >
            <Text style={styles.buttonText}>
                {label}
            </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',  // Centraliza o botão na vertical
      alignItems: 'center',      // Centraliza o botão na horizontal
      marginTop: 20,
    },
    button: {
      padding: 10,
      borderRadius: 8,
      width: 200,  // Largura do botão
      height: 50,  // Altura do botão
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff', // Cor do texto do botão
      fontSize: 16,
    },
  });
