import { View, StyleSheet, ViewProps } from 'react-native';

export function CardContainer(props: ViewProps) {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    padding: 10,
    justifyContent: 'flex-start', // ou 'center'
  },
});
