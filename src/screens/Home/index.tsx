import React from 'react';
import {SafeAreaView, TextInput, FlatList} from 'react-native';
import styles from './home.style';
import {useGetRandomMoviesQuery} from './home.api';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../../hooks/redux';
import {setMovieDetails} from './home.slice';
import {Loader, MovieCard} from '../../components';
import {movieType} from './types';
import colors from '../../utils/colors';

const Home = () => {
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const {data: movies, isLoading} = useGetRandomMoviesQuery(1);
  const navigation: any = useNavigation();

  const handleSearch = (query: string) => {
    const filteredMovies = movies?.data?.filter((movie: movieType) =>
      movie.title.toLowerCase().includes(query.toLowerCase()),
    );
    setSearchResults(filteredMovies);
  };

  const renderMovieItem = ({item}) => {
    return (
      <MovieCard
        title={item.title}
        year={item.year}
        rating={item.rating}
        score={item.score}
        image={item.images.webp.large_image_url}
        onPress={() => {
          const details = {
            title: item.title,
            rating: item.rating,
            score: item.score,
            year: item.year,
            image: item.images.webp.large_image_url,
            mal_id: item.mal_id,
            synopsis: item.synopsis,
            background: item.background,
          };
          dispatch(setMovieDetails(details));
          navigation.navigate('MovieDetails');
        }}
      />
    );
  };

  const getMoviesList = searchQuery ? searchResults : movies?.data;
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for movies..."
        value={searchQuery}
        onChangeText={(text: string) => {
          setSearchQuery(text);
          handleSearch(text);
        }}
        placeholderTextColor={colors.white}
      />
      {isLoading && <Loader isLoading={isLoading} />}
      <FlatList
        data={getMoviesList}
        renderItem={renderMovieItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Home;
