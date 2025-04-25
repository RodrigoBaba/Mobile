import { TextInput, type TextInputProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
  lightTextColor?: string;
  darkTextColor?: string;
};

export function ThemedTextInput({
  style,
  lightColor,
  darkColor,
  lightTextColor,
  darkTextColor,
  ...otherProps
}: ThemedTextInputProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  const color = useThemeColor({ light: lightTextColor, dark: darkTextColor }, 'text');

  return (
    <TextInput
      style={[{ backgroundColor, color, padding: 10, borderRadius: 8, borderWidth: 1, borderColor:'#ccc'}, style]}
      placeholderTextColor={useThemeColor({}, 'text')}
      {...otherProps}
    />
  );
}
