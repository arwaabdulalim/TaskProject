import {StyleSheet, Platform} from 'react-native';
import colors from '../../themes/colors';
import {
  calcFont,
  calcHeight,
  calcWidth,
} from '../../helpers/styles/responsive-helper.service';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    paddingHorizontal:calcWidth(15),
    justifyContent:'space-between',
    width: calcWidth(270),
    height: calcHeight(43),
    alignItems:'center',
  },
  icon: {
    color: colors.deep,
  },
});

export default styles;