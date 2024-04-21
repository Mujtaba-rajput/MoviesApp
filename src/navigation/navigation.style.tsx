import {StyleSheet} from 'react-native';
import colors from '../utils/colors';
import metrics from '../utils/metrics';

export default StyleSheet.create({
  tabBar: {
    backgroundColor: colors.backgroundColor,
    height: metrics.screenHeight * 0.2,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    position: 'absolute',
    overflow: 'hidden',
  },
  tabBarLabel: {
    color: colors.white,
    fontWeight: '700',
  },
  plusIcon: {
    backgroundColor: colors.activeColor,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 4,
  },
});
