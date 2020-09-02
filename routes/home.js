import React from 'react'
import { Text, View, StyleSheet, Image, Button, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { TouchableOpacity } from 'react-native-gesture-handler'

import storyblok from '../utilities/storyblok'

export default class Home extends React.Component {
   state = {
      data: ''
   }
   async componentDidMount() {
      const resp = await storyblok.get('cdn/stories/home');
      this.setState({ data: resp.data.story })
   }
   goToBlog = () => {
      Actions.blog()
   }
   openLink = (url) => {
      Linking.openURL(url);
   }
   render() {
      if(this.state.data) {
         const { description, headline, logo } = this.state.data.content.body[0]
         return (
            <View style={styles.container}>
               <Image style={styles.logo} source={{ uri: logo.filename }}></Image>
               <Text style={styles.titleText}>{headline}</Text>
               <Text style={styles.subText}>{description}</Text>
               <View style={styles.horizontal}>
                  <TouchableOpacity style={styles.button}>
                     <Button title="Blog" color="#09b3af" onPress={this.goToBlog}></Button>
                  </TouchableOpacity>
               </View>
               <View style={styles.horizontal}>
                  <TouchableOpacity style={styles.button}>
                     <Button title="Storyblok Docs" color="#09b3af" onPress={() => this.openLink('https://www.storyblok.com/docs/guide/introduction')}></Button>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                     <Button title="Expo Docs" color="#222" onPress={() => this.openLink('https://docs.expo.io/')}></Button>
                  </TouchableOpacity>
               </View>
            </View>

         )
      } else {
         return (
            <View>
               <Text>Loading..</Text>
            </View>
         )
      }
   }
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
      justifyContent: 'center',
  },
   horizontal: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: "center",
      marginVertical: 10
   },
   button: {
      margin: 20
   },
   logo: {
      width: 320,
      height: 80,
      marginTop: 120,
      marginHorizontal: "auto"
   },
   titleText: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center"
   },
   subText: {
      fontSize: 20,
      textAlign: "center"
   },
})