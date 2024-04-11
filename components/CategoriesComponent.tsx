import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';

interface CategoryCardProps {
  imageSource: ImageSourcePropType;
  name: string;
  onPress: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ imageSource, name, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 67, 
    height:73,
    aspectRatio: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor:"#FFFFFF",
    borderRadius:10
  },
  image: {
    width: 24,
    height: 24,
    // marginBottom: 10,
  },
  name: {
    color: '#333',
    textAlign: 'center',
    fontSize:14,
    fontFamily:"Avenir"

  },
});

export default CategoryCard;
