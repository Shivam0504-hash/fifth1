import React, { ScrollView } from 'react-native';
import { SafeAreaView,View ,StyleSheet,FlatList,Text} from 'react-native';
import Header from './Header.js';
import Middle  from './middle.js';
import Welcome from './Welcomepage.js';
import Account from './account.js';
import plans from './Plansdata.js';
import PlanItem from './PlanItem.js';
import Imageview from './imageview.js';
import sellerdata from './sellerdata.js';
import Footer from './footer.js';
const App = () => {
  return (
    <View style={styles.safeconatiner}>
      <Header />
      <ScrollView>
      <Middle />
      <Text style={styles.heading}>GET BETTER OPPORTUNITIES</Text>
      <FlatList 
      data={plans}
      renderItem={({item})=><PlanItem plan={item}/>}
      />
      <Imageview/>
      <Text style={styles.heading}>Top Sellers</Text>
      <FlatList 
      data={sellerdata}
      renderItem={({item})=><PlanItem plan={item}/>}
      />
      <Text style={styles.heading}>Handpicked Items for you</Text>
      <FlatList 
      data={sellerdata}
      renderItem={({item})=><PlanItem plan={item}/>}
      />
      <Footer/>
      </ScrollView>
      
      {/* <Welcome/> */}
      {/* <Account/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  safeconatiner: {
    flex: 1,
  },
  heading:
  {
    width:207,
    height:17,
    fontFamily:'Montserrat',
    fontWeight:'600',
    fontSize:14,
    lineHeight:17.07,
    marginTop:32,
    marginLeft:24,
  },
});

export default App;
