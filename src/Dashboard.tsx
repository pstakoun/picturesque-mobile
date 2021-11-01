import React, {useEffect} from "react"
import {SafeAreaView, ScrollView, Text} from "react-native"
import style from "./style";

const Dashboard = () => {
  const [recentFoods, setRecentFoods] = React.useState<string[]>([])

  useEffect(() => {
    setRecentFoods(['apple', 'cheese'])
  }, [])

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <Text>Add recent foods</Text>
        {recentFoods.map((food, index) => (
          <Text key={index}>{food}</Text>
        ))}
        <Text>Discover</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Dashboard
