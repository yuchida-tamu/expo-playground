import Ionicons from "@expo/vector-icons/Ionicons";
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


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
] as const satisfies CarouselItem[];

const Card = ({item}: {item: CarouselItem}) => {
  return (
    <View style={[styles.cardContainer, styles.shadow]}>
      <Image source={{uri: item.image}} style={styles.cardThumbnail} />
      <View style={styles.cardBodyContainer}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.cardLabeledTextContainer}>
          <Ionicons name="heart" size={14} color="pink" />
          <Text style={styles.cardDescription}>{item.rating}</Text>
        </View>
      </View>
    </View>
  );
}

export default function CarouselScreen() {
  return (
    <View style={styles.container}>
     
      <Card item={data[0]} />
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardContainer: {
        borderRadius: 8,
        backgroundColor: 'white',
        width: 200,
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
    shadow: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 8,
    }
})