import {StyleSheet, Platform} from 'react-native';
import colors from '../../themes/colors';
import {
  calcFont,
  calcHeight,
  calcWidth,
} from '../../helpers/styles/responsive-helper.service';

const styles = StyleSheet.create({
   searchWrapper:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:calcWidth(20),
    marginVertical:calcHeight(20),
},
});

export default styles;