import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { StyleSheet } from 'react-native'
import Home from './routes/home.js'
import Blog from './routes/blog.js'
import Post from './routes/post.js'

export default class Routes extends React.Component {
   render() {
      return (
         <Router>
            <Scene key="root" style={styles.mainview}>
               <Scene key="home" component={Home} title="Home" initial={true} />
               <Scene key="blog" component={Blog} title="Blog"  />
               <Scene key="post" component={Post} title="Post" />
            </Scene>
         </Router>
      )
   }
}
const styles = StyleSheet.create({
   mainview: {
      height: '80vh'
   }
})