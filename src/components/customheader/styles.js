import {StyleSheet, Platform} from 'react-native';
import {
  calcHeight,
  calcWidth,
  calcFont,
} from '../../helpers/styles/responsive-helper.service';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:calcWidth(20),
  },
  image:{
    width:calcWidth(40),
    height:calcHeight(40),
    resizeMode:'contain',
  },
  title:{
    fontSize:calcFont(20),
    fontWeight:'bold',
    right:calcWidth(20)
  },
});

export default styles;