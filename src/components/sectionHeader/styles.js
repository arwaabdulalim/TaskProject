import {StyleSheet, Platform} from 'react-native';
import colors from '../../themes/colors';
import {
  calcFont,
  calcHeight,
  calcWidth,
} from '../../helpers/styles/responsive-helper.service';

const styles = StyleSheet.create({
    textWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:calcWidth(20),
        marginVertical:calcHeight(15),
  
    },
    title:{
      fontSize:calcFont(18),
      fontWeight:'500'
    },
    text:{ 
      fontSize:calcFont(13),
      fontWeight:'bold',
      color:colors.primary,
    }
});

export default styles;