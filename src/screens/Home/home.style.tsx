import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import metrics from '../../utils/metrics';
import fonts from '../../utils/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: colors.backgroundColor,
  },
  searchBar: {
    width: '80%',
    height: 40,
    marginBottom: metrics.containerPadding,
    padding: metrics.containerPadding / 2,
    borderColor: colors.primaryColor,
    borderWidth: 2,
    borderRadius: 16,
    fontSize: fonts.size.regular,
    color: colors.primaryColor,
  },
  listContainer: {
    width: metrics.screenWidth * 0.4,
  },
});
