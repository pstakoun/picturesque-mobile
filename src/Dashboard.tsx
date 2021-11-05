import React, {useEffect} from "react"
import {SafeAreaView, ScrollView, Image, Text, Alert, View, ImageBackground, FlatList} from "react-native"
import style from "./style";

const Dashboard = () => {
  const [recentFoods, setRecentFoods] = React.useState<string[]>([])

  useEffect(() => {
    setRecentFoods(['apple', 'cheese'])
  }, [])

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <Text style={style.titleText}> ADD RECENT FOODS</Text>
        <View style={{alignItems: 'center', paddingVertical: 5}}>
          <View style={{width:'80%'}}>
            <ImageBackground resizeMode="cover" style={{justifyContent: 'center', alignItems: 'center', overflow: 'hidden', borderWidth: 3, borderColor: 'black', width: '100%', height: 100, borderRadius: 10}} source={require('./images/apple.jpg')}>
              <Image source={require('./images/addAppleButton.png')}/>
            </ImageBackground>
          </View>
        </View>
        <View style={{alignItems: 'center', paddingVertical: 5}}>
          <View style={{width:'80%'}}>
            <ImageBackground resizeMode="cover" style={{justifyContent: 'center', alignItems: 'center', overflow: 'hidden', borderWidth: 3, borderColor: 'black', width: '100%', height: 100, borderRadius: 10}} source={require('./images/cheese.jpg')}>
              <Image source={require('./images/addCheeseButton.png')}/>
            </ImageBackground>
          </View>
        </View>

        <Text style={style.titleText}> DISCOVER</Text>
        <Text style={style.baseText}>    What's new today</Text>
        <View style={{alignItems: 'center', paddingVertical: 5}}>
          <Image style={{borderWidth: 3, borderColor: 'black', width: '80%', height: 100, borderRadius: 10}} source={require('./images/recipes.jpg')} /> 
        </View>
        <View style={{alignItems: 'center', paddingVertical: 5}}>
          <Image style={{borderWidth: 3, borderColor: 'black', width: '80%', height: 100, borderRadius: 10}} source={require('./images/noodle.jpg')} /> 
        </View>
        <View style={{alignItems: 'center', paddingVertical: 5}}>
          <Image style={{borderWidth: 3, borderColor: 'black', width: '80%', height: 100, borderRadius: 10}} source={require('./images/pasta.jpg')} /> 
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Dashboard
