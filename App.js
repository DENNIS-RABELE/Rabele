import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (

 <ScrollView>   

   
<View style={styles.Maincontainer}>
    
    
       <View style={styles.top}>
     
           <Text style={styles.LiMKO}> LIMKOKWING</Text>
           <Text style={styles.UNI}> UNIVERSITY</Text>
           <Text style={styles.CREATE}> OF CREATIVE TECHNOLOGY</Text>
           
      <View style={styles.MIDDLE}>
           <Text  style={styles.topper} > <Text style={styles.NAME}>NAMES: </Text>RABELE SEPIRITE </Text>
           <Text  style={styles.topper}> <Text style={styles.NAME}>CURRENT SEMESTER: </Text> Y2S2 </Text>
           <Text  style={styles.topper}> 
               <Text style={styles.NAME}> FACULTY:</Text>
               <Text style={styles.NAMEFACULTY}> INFORMATION TECHNOLOGY </Text>
           </Text>
           <Text style={styles.topper} > <Text style={styles.NAME}>STUDENT#:</Text> 90101**** </Text>
     </View> 
           <Image source={require('./gf.jpg')} style={styles.picture} />
     
     <View style={styles.bottom}>

     <Text  style={styles.GRADE} > <Text style={styles.NAME}>SEMESTER GRADES </Text> </Text>
           <Text  style={styles.SEMESTER}> <Text style={styles.YEAR}>YEAR1 SEMESTER 1: </Text> DISTINCTION </Text>
           <Text  style={styles.SEMESTER}> <Text style={styles.YEAR}>YEAR1 SEMESTER 2:</Text> DISTINTION </Text>
           <Text style={styles.SEMESTER} > <Text style={styles.YEAR}>YEAR2 SEMESTER 1:</Text> DISTINCTION </Text>
           <Text style={styles.MOTO}>#Javascript</Text>
           <Text style={styles.MOTO}>#Programming</Text>
           <Text style={styles.MOTO}>#Limkokwing</Text>
           <Text style={styles.MOTO}>#BetheBest</Text>
           <Text style={styles.MOTO}>#BetheMostSuccessful</Text>
     </View>

     </View>

</View>
</ScrollView>

  );
}



const styles = StyleSheet.create({
 
  Maincontainer: 
  {
    flexGrow: 1,
    paddingVertical: 15,
    paddingHorizontal:20,
    backgroundColor:'blue',
  },

 top: 
{ flex:1,
  width:'40em',
 height:'60em',
 backgroundColor:'white',
 marginLeft:'17em',
 marginTop:'0.2em',
 flexDirection:'column',
 borderWidth:50
},

LiMKO:
{
  fontSize:'30px',
  fontWeight:'bold',
  textAlign:'center',
  color:'white',
  backgroundColor:'black',
  fontStyle:'italic',

},

UNI:
{
  fontSize:'35px',
  fontWeight:'bold',
  textAlign:'center',
  color:'white',
  backgroundColor:'black',
  textDecorationLine:'underline',
  fontStyle:'italic',
},
CREATE:
{
fontSize:'15px',
fontWeight:'100',
textAlign:'center',
fontStyle:'italic',
color:'white',
backgroundColor:'black',
height:'3em',
},

MIDDLE:
{
 width:'20em',
 height:'15em',
 marginTop:'10em',
 position:'absolute',
 alignItems:'flex-start',
 justifyContent:'space-evenly'
},

NAME:
{
  fontWeight:'900'

},

NAMEFACULTY:
{
  fontWeight:'450',
  fontSize:'16px'
},

topper:
  {
    fontSize:'20px',
    flexDirection:'row',
  
  },

  picture:
  {
    width: '12em',
    height: '12em',
    marginTop:'1.5em',
    borderRadius:'20em',
    marginLeft:'21em',
  },
  bottom:
  {
    width: '100%',
    height:'20em',
    backgroundColor:'silver',
    marginTop:'2em',
  },
  GRADE:
  {
    textAlign:'center',
    fontWeight:'bold',
    fontSize: '30px',
    marginTop:'0.5em',
    textDecorationLine:'underline'
  },
  SEMESTER:
  {    
    marginTop:'1em', 
    fontSize:'20px',
    flexDirection:'row',
    
  },
  YEAR:
  {
    fontWeight:'900',
    includeFontPadding:'2em'
    
  },
  MOTO:
  {
    textAlign:'right',
    fontStyle:'italic',
    fontWeight:'bold',
    fontSize:'15px',
    marginRight:'1em',
    color:'blue'
  }

});

