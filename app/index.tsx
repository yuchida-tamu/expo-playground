import { useCallback } from 'react';
import { FlatList, ListRenderItem, Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';
import Animated from 'react-native-reanimated';

type Item = {
  title: string;
  content: string;
  imageUrl: string;
  tag: string;
}

const items: Item[] = [
  {
    title: "Sunset Overdrive",
    content: "A breathtaking view of the sun setting over the ocean, painting the sky with hues of orange and purple.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1672116452571-896980a801c8?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "sunset"
  },
  {
    title: "Mountain Expedition",
    content: "An adventurous journey through rugged mountain trails, capturing the essence of nature's grandeur.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1680964717433-bc078a238170?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNlYXxlbnwwfHwwfHx8MA%3D%3D",
    tag: "mountain"
  },
  {
    title: "City Lights",
    content: "A mesmerizing cityscape at night, with glowing skyscrapers reflecting off the river below.",
    imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "city"
  },
];



export default function TransitionHomeScreen() {
  const router = useRouter();
  const  navigate = useCallback((item: Item) => {
    router.push(`/${item.tag}?image=${item.imageUrl}`);
  }
  , [router]);
  const renderItem = useCallback<ListRenderItem<Item>>(({ item }) => {
    return (
      <Pressable onPress={()=>{navigate(item)}} style={{width:300}} >
        <Animated.Image sharedTransitionTag={item.tag}  source={{ uri: item.imageUrl, cache: "force-cache" }} style={{ height: 200, borderRadius: 8, width:350}} />
        <View style={styles.stepContainer} >
          <ThemedText type="defaultSemiBold">{item.title}</ThemedText>
        </View>
      </Pressable>
    );
  }, []);

  const keyExtractor = useCallback((item: Item) => item.title, []);

  return (
    <View style={{padding:16, flex:1}}>
      <FlatList
        data={items}
        renderItem={renderItem} 
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={() => <View style={{height:8}} />}
      />
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