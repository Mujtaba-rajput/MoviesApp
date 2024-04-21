import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import styles from './movieCard.style';

type MovieCardType = {
  onPress?: () => void;
  title: string;
  rating: string;
  score: number;
  year: number;
  image: string;
};

const MovieCard = ({
  onPress,
  title = '',
  rating = '',
  score = 0,
  year = 0,
  image = '',
}: MovieCardType) => {
  return (
    <TouchableOpacity
      style={styles.movieContainer}
      onPress={onPress}
      activeOpacity={0.7}>
      <Image source={{uri: image}} style={styles.posterImage} />
      <Text style={styles.title}>
        {title} ({year})
      </Text>
      <Text style={styles.actors}>{rating}</Text>
      <Text style={styles.rank}>Rating: {score}</Text>
    </TouchableOpacity>
  );
};

export default MovieCard;
