import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";


type CarouselItem = {
  id: string;
  title: string;
  image: string;
  rating: number; // 1-5
}

const data = [
  {
    id: '1',
    title: 'Item 1',
    image: 'https://picsum.photos/200/300',
    rating: 4.1,
  },
  {
    id: '2',
    title: 'Item 2',
    image: 'https://picsum.photos/200/300',
    rating: 5.0,
  },
  {
    id: '3',
    title: 'Item 3',
    image: 'https://picsum.photos/200/300',
    rating: 3.8,
  },
  {
    id: '4',
    title: 'Item 4',
    image: 'https://picsum.photos/200/300',
    rating: 4.5,
  },
  {
    id: '5',
    title: 'Item 5',
    image: 'https://picsum.photos/200/300',
    rating: 4.2,
  },
] as const satisfies CarouselItem[];

type CardProps = {
  item: CarouselItem;
  active?: boolean;
};
const Card = ({item, active}: CardProps) => {
  const scale = useSharedValue(1);

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: withSpring(scale.value)}],
      zIndex: active ? 1 : 0,
    };
  }
  );

  useEffect(() => {
   scale.value = active ? 1.1 : 1;
  }
  , [active]);
  return (
    <Animated.View style={[styles.cardContainer, styles.shadow, animatedContainerStyle]}>
      <Image source={{uri: item.image}} style={styles.cardThumbnail} />
      <View style={styles.cardBodyContainer}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.cardLabeledTextContainer}>
          <Ionicons name="heart" size={14} color="pink" />
          <Text style={styles.cardDescription}>{item.rating}</Text>
        </View>
      </View>
    </Animated.View>
  );
}

export default function CarouselScreen() {
  return (
    <View style={styles.flex1}>
      <ScrollView horizontal  contentContainerStyle={styles.center}>
        <Card item={data[0]} active/>
        <Card item={data[1]} />
        <Card item={data[2]} />
        <Card item={data[3]} />
        <Card item={data[4]} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    shadow: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 8,
    },
    cardContainer: {
        borderRadius: 8,
        backgroundColor: 'white',
        width: 200,
        height: 400,
    },
    cardThumbnail: {
        width: 200,
        height: 300,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardBodyContainer: {
        padding: 8,
        gap: 4,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardDescription: {
        fontSize: 14,
    },
    cardLabeledTextContainer: {
        flexDirection: 'row',
        gap: 4,
    },
})