import {StyleSheet, Platform} from 'react-native';
import colors from '../../themes/colors';
import {
  calcFont,
  calcHeight,
  calcWidth,
} from '../../helpers/styles/responsive-helper.service';

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignSelf:'center',
    justifyContent:'space-evenly',
    width:calcWidth(340),
    height:calcHeight(90),
    borderRadius:8,
    borderWidth:1,
    borderColor:colors.light,
    paddingVertical:calcWidth(15),
    backgroundColor:colors.white
  },
  image:{
    resizeMode:'contain',
    height:calcHeight(60),
    width:calcWidth(60),
  },
  detailsWrapper:{
    marginLeft:calcWidth(10)
  },
  statusContainer:{
    width:calcWidth(80),
    height:calcHeight(30),
    borderRadius: 30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colors.mint,
  },
  statusTxt:{
    color:colors.forest
  },
  currencytxt:{
   alignSelf:'flex-end',
   left:100,
   bottom:10,
   color:colors.primary,
   fontWeight:'600'
  },
  vacancytxt:{
    fontSize:calcFont(14),
    fontWeight:'bold',
  },
  platformtxt:{
    fontSize:calcFont(10),
    marginVertical:calcWidth(3),
  },
  countrytxt:{
    fontSize:calcFont(10),
    color:colors.medium
  }
});

export default styles;