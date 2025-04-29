import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { CardContainer } from '@/components/CardContainer';
import { Card } from '@/components/Card';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function HomeScreen() {
  return (
    <ThemedView>
      <ThemedView>
        <ThemedText type="title">HOME</ThemedText>
      </ThemedView>
      <CardContainer>
        <Card onPress={() => console.log('Card Pressed!')} imageSource={require('@/assets/images/Leds.png')}>
          <ThemedText type="title">Leds</ThemedText>
        </Card>
        <Card onPress={() => console.log('Card Pressed!')} imageSource={require('@/assets/images/Jumpers.png')}>
          <ThemedText type="title">Jumpers</ThemedText>
        </Card>
        <Card onPress={() => console.log('Card Pressed!')} imageSource={require('@/assets/images/Arduino.png')}>
          <ThemedText type="title">Placa</ThemedText>
        </Card>
      </CardContainer>
    </ThemedView>
  );
}
