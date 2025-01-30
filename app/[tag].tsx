import { StyleSheet, View } from 'react-native';

import { useLocalSearchParams } from 'expo-router';
import Animated from 'react-native-reanimated';

import { ThemedText } from '@/components/ThemedText';


export default function TransitionDetailScreen() {
const {tag, image} = useLocalSearchParams<{ tag: string, image: string }>();
  return (
    <View style={{padding:16, flex:1}}>
     <Animated.Image sharedTransitionTag={tag} source={{ uri: image }} style={{ height: 400, borderRadius: 8 }} />
     <ThemedText type="subtitle">{tag}</ThemedText>
    </View>
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
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});