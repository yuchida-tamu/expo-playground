import { Button, StyleSheet, View } from 'react-native';

import { useRouter } from 'expo-router';



export default function HomeScreen() {
  const router = useRouter();
  

  return (
    <View style={{padding:16, flex:1}}>
      <Button title="Go to Debug" onPress={() => router.push('/dev')} />
      <Button title="Go to Transition" onPress={() => router.push('/transition')} />
      <Button title="Go to Carousel" onPress={() => router.push('/carousel')} />
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