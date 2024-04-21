import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import styles from './movieDetails.style';
import {useAppSelector} from '../../hooks/redux';
import {useNavigation} from '@react-navigation/native';

const MovieDetails = () => {
  const {movieDetails} = useAppSelector(state => state.home);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.screen}>
      <ImageBackground
        style={styles.backgroundImage}
        source={{
          uri: movieDetails.image,
        }}>
        <TouchableOpacity
          style={styles.likeButtonContainer}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/images/backIcon.jpeg')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.headerContainer}>
        <Text style={styles.header}>{movieDetails.title}</Text>
      </View>
      <ScrollView>
        <View style={styles.innerWrapper}>
          <Text style={styles.description}>Rating:</Text>
          <Text style={styles.details}>{movieDetails.rating}</Text>
          <Text style={styles.description}>Score:</Text>
          <Text style={styles.details}>{movieDetails.score}</Text>
          <Text style={styles.description}>Year:</Text>
          <Text style={styles.details}>{movieDetails.year}</Text>
          <Text style={styles.description}>Synopsis:</Text>
          <Text style={styles.details}>{movieDetails.synopsis}</Text>
          <Text style={styles.description}>Background:</Text>
          <Text style={styles.details}>{movieDetails.background}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetails;
