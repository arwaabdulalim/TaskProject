import {StyleSheet, Platform} from 'react-native';
import {
  calcHeight,
  calcWidth,
  calcFont,
} from '../../helpers/styles/responsive-helper.service';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.babyblue,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: calcWidth(40),
    height: calcHeight(40),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  label:{
    fontSize:calcFont(14),
    fontWeight:'bold',
    color:colors.primary
  }
});

export default styles;