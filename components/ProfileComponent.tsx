import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';

interface CategoryCardProps {
  imageSource: ImageSourcePropType;
  name: string;
  Icon: ImageSourcePropType;
  onPress: () => void;
}

const ProfileComponent: React.FC<CategoryCardProps> = ({ imageSource, name,Icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      < Image source={Icon} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height:25,
    aspectRatio: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    margin:13,
    display:"flex",
    flexDirection:"row",
    

  },
  image: {
    width: 24,
    height: 24,
    position:"relative",
    marginLeft:75
  },
  name: {
    color: '#2D2D2D',
    fontSize:18,
    fontFamily:"Avenir",
    width:300,
    position:"relative",
    marginLeft:10
    

  },

  icon:{
    height:18,
    width:18
  }
});

export default ProfileComponent;
