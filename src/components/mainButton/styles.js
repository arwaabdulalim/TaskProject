import {StyleSheet, Platform} from 'react-native';
import {
  calcHeight,
  calcWidth,
  calcFont,
} from '../../helpers/styles/responsive-helper.service';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: calcWidth(145),
    height:calcHeight(33),
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth:1.5,
    borderColor:colors.primary,
  },
  text: {
    color: colors.white,
    fontSize: calcFont(15),
    fontWeight: '700',
  },
});

export default styles;