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
    height:calcHeight(150),
    borderRadius:8,
    borderWidth:1,
    borderColor:colors.light,
    paddingVertical:calcWidth(15),
    backgroundColor:colors.white,
    shadowColor:colors.deep,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
  },
  image:{
    resizeMode:'contain',
    height:calcHeight(60),
    width:calcWidth(60),
  },
  detailsWrapper:{
    marginRight:calcWidth(50),
    marginTop:calcHeight(10),
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
    fontSize:calcFont(10),
    color:colors.medium,
    marginVertical:calcHeight(10),
  },
  applicantname:{
    fontSize:calcFont(14),
    fontWeight:'bold',
  },
  button:{
    width: calcWidth(30),
    height: calcHeight(30),
    bottom:calcHeight(30)
  },
  separator:{
    width:calcWidth(330),
    borderWidth:1,
    alignSelf:'center',
    borderColor:colors.light,
    bottom:calcHeight(63),
  },
  buttonsWrapper:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    bottom:calcHeight(50)
  },
  buttonContainer:{
    backgroundColor:colors.white
  },
  label:{color: colors.primary}
});

export default styles;