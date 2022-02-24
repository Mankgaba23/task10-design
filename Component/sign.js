import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native-web';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const sign = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={{ justifyContent: "center", alignContent: 'center', alignItems: 'flex-end' }}>
        <MaterialIcons name="person" size={24} justifyContent='end' color="blue" margin={30} paddingHorizontal={30} paddingBottom={50} />
      </View>

      <ImageBackground source={{ uri: 'https://www.wallpapers13.com/wp-content/uploads/2018/04/Pink-Lily-Flower-with-Beautiful-Pink-Color-Photo-Wallpaper-HD-3840x2160-1600x1200.jpg' }}
        resizeMode="cover" style={styles.image}
      >
        <View style={styles.back}>
          <Text style={styles.TxtWeight}>Points</Text>
        </View>
      </ImageBackground >

      <Text style={styles.texx}>History</Text>

      <View style={{ justifyContent: 'center', alignItems: 'center', justifyContent: 'space-between' }}>

        <TouchableOpacity style={styles.desig}>
          <AntDesign name="upload" size={24} color="blue" />

          <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
            <Text style={{ flexWrap: 'wrap', color: 'blue' }}> 17Feb 2022</Text>
            <Text style={{ flexWrap: 'wrap', color: 'blue' }}> EWC Tembisa</Text></View>

          <View style={{ paddingHorizontal: 100, paddingVertical: 5, justifyContent: 'flex-end' }} >
            <Text style={{ flexWrap: 'wrap', color: 'blue' }}>-5 Points</Text>
            <Text style={{ flexWrap: 'wrap', color: 'blue' }}> 250pts</Text>
          </View>

        </TouchableOpacity>

        <TouchableOpacity style={styles.desig} >
          <AntDesign name="download" size={24} color="blue" paddingHorizontal={20} paddingVertical={10} />
          <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
            <Text style={{ flexWrap: 'wrap', color: 'blue' }}> 17Feb 2022</Text>
            <Text style={{ flexWrap: 'wrap', color: 'blue' }}> EWC Tembisa</Text></View>

          <View style={{ paddingHorizontal: 100, paddingVertical: 5, justifyContent: 'flex-end' }} >
            <Text style={{ flexWrap: 'wrap', color: 'blue' }}> 10 Points</Text>
            <Text style={{ flexWrap: 'wrap', color: 'blue' }}> 260pts</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.desig}>
          <AntDesign name="upload" size={24} color="blue" paddingVertical={10} paddingHorizontal={5} />
          <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
            <Text style={{ flexWrap: 'wrap', color: 'blue' }}> 17Feb 2022</Text>
            <Text style={{ flexWrap: 'wrap', color: 'blue' }}> EWC Tembisa</Text></View>

          <View style={{ paddingHorizontal: 100, paddingVertical: 5, justifyContent: 'flex-end' }} >
            <Text style={{ flexWrap: 'wrap', color: 'blue' }}>-5 Points</Text>
            <Text style={{ flexWrap: 'wrap', color: 'blue' }}> 250pts</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.desig}>
          <AntDesign name="download" size={24} color="blue" paddingHorizontal={20} paddingVertical={10} />
          <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
            <Text style={{ flexWrap: 'wrap', color: 'blue' }}> 17Feb 2022</Text>
            <Text style={{ flexWrap: 'wrap', color: 'blue' }}> EWC Tembisa</Text></View>

          <View style={{ paddingHorizontal: 100, paddingVertical: 5, justifyContent: 'flex-end' }} >
            <Text style={{ flexWrap: 'wrap', color: 'blue' }}> 10 Points</Text>
            <Text style={{ flexWrap: 'wrap', color: 'blue' }}> 260pts</Text>
          </View>
        </TouchableOpacity>

        <View style={{ paddingTop: 7 }}>
          <MaterialCommunityIcons name="qrcode-scan" size={24} paddingTop="7"  color="blue" alignContent="center" justifyContent="center" /></View>


      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8c8dc',
    //alignItems: 'center',
    //justifyContent: 'center',


  },
  lgBtn: {
    height: 50,
    width: 400,
    color: 'pink',
    fontWeight: 'bold',
    backgroundColor: 'white',
    borderRadius: 10,
    //borderColor: 'white',
    textAlign: 'center',
    textAlignVertical: "center",
    //borderWidth: 2,
    marginTop: 20,
    paddingHorizontal: 100,
    paddingVertical: 10,
    justifyContent: 'center',
    alignContent: 'center'

  },
  input: {
    margin: 5,
    height: 50,
    width: 400,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,

  },
  TxtWeight: {

    fontSize: 30,
    paddingBottom: 50,
    color: 'blue',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Helvetica',


  },
  image: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: 'rgba(0,0,0,.6)',
    //height :200



  },
  Design: {
    color: 'white',
    fontSize: 12,
    marginRight: 5,
    marginTop: 51,
    fontFamily: 'Helvetica',
    textAlign: 'center',
    justifyContent: 'center',
    letterSpacing: 1,

  },
  Design1: {
    color: '#db00b6',
    fontSize: 15,
    fontFamily: 'arial',
    marginRight: 5,
    marginTop: 50,
    textAlign: 'center',
    justifyContent: 'center',
  },
  texx: {
    margin: 10,
    paddingHorizontal: 20,
    fontSize: 18,
    fontWeight: 'bold',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'blue'
  },
  back: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.6)',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100'
  },
  desig: {
    margin: 10,
    backgroundColor: 'white',
    width: 400,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
    //justifyContent:'flex-start'
  },

});
export default sign