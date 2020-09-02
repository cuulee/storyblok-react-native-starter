import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

import StoryBlokApi from './utilities/storyblok';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      headline: '',
      description: '',
      logo: ''
    }
  }

  componentDidMount() {
    StoryBlokApi
      .get('cdn/stories/home', {
        version: 'published'
      })
      .then((response) => {
        const body = response.data.story.content.body[0];

        this.setState({
          headline: body.headline,
          description: body.description,
          logo: body.logo.filename
        })

        console.log(body);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{
            uri: this.state.logo
          }}
        />
        <Text style={styles.titleText}>{this.state.headline}</Text>
        <Text>{this.state.description}</Text>
        <View style={styles.fixToText}>
          <Button
            style={styles.button}
            color="#000"
            title="Expo Docs"
          />
          <Button
            style={styles.button}
            color="#3BB3AF"
            title="Storyblok Docs"
          />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 320,
    height: 80,
    marginVertical: 20
  },
  button: {
    marginHorizontal: 15,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
