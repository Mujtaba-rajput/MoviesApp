import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import metrics from '../../utils/metrics';

export default StyleSheet.create({
  movieContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: metrics.containerPadding,
    borderRadius: 10,
    backgroundColor: colors.secondaryColor,
    padding: metrics.containerPadding * 0.5,
  },
  posterImage: {
    width: 80,
    height: 120,
    borderRadius: 5,
    marginRight: 10,
    resizeMode: 'cover',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  actors: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 2,
  },
  rank: {
    color: '#ccc',
    fontSize: 12,
  },
});
