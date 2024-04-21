import {StyleSheet} from 'react-native';
import metrics from '../../utils/metrics';
import colors from '../../utils/colors';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
  backgroundImage: {
    width: '100%',
    height: 0.5 * metrics.screenHeight,
    marginTop: '0%',
    marginLeft: '0%',
    marginBottom: '0%',
    elevation: 10,
    shadowColor: '#C70039',
    shadowOpacity: 10,
  },
  likeButtonContainer: {
    width: 26,
    height: 26,
    backgroundColor: '#C70039',
    borderRadius: 13,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: colors.primaryColor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    bottom: 30,
    width: '100%',
    flexWrap: 'wrap',
  },
  header: {
    color: colors.backgroundColor,
    fontSize: 26,
    fontWeight: 'bold',
    paddingHorizontal: '5%',
    marginTop: '4%',
  },
  center: {
    justifyContent: 'center',
  },
  image: {
    width: (5 / 100) * metrics.screenHeight,
    height: (5 / 100) * metrics.screenHeight,
    marginLeft: '1%',
  },
  innerWrapper: {
    marginLeft: '0%',
    marginBottom: '0%',
    marginTop: '0%',
    paddingHorizontal: '5%',
    backgroundColor: '#1C1A1A',
  },
  description: {
    color: colors.backgroundColor,
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: '2%',
    lineHeight: 20,
  },
  details: {
    color: colors.backgroundColor,
    fontSize: 12,
    marginTop: '1%',
    lineHeight: 18,
  },
});
