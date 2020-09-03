import React from 'react'
import { Text, ScrollView, StyleSheet, Image, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { TouchableOpacity } from 'react-native-gesture-handler'

import storyblok from '../utilities/storyblok'

export default class Post extends React.Component {
    state = {
        data: ''
    }
    async componentDidMount() {
        const { slug } = this.props;
        const resp = await storyblok.get('cdn/stories', {
            by_slugs: slug
        });
        this.setState({ data: resp.data.stories })
    }
    goToBlog = () => {
        Actions.blog()
    }
    render() {
        if (this.state.data) {
            const post = this.state.data[0]
            const { image } = post.content
            const items = image.match(/(\d)+x(\d)+/g)[0].split('x')
            const [width, height] = items
            const ratio = height / width

            return (
                <ScrollView style={styles.container}>
                    {post.content.image && (<Image style={{ width: 300, height: ratio * 300, marginVertical: 40 }} source={{ uri: post.content.image }} />)}
                    <Text style={styles.heading}>{post.content.title}</Text>
                    <Text style={styles.subheading}>{post.content.intro}</Text>

                    <Text style={styles.long_text} >{post.content.long_text}</Text>
                    
                    <TouchableOpacity style={styles.button}>
                        <Button title="Back to Blog" color="#09b3af" onPress={this.goToBlog}></Button>
                    </TouchableOpacity>
                </ScrollView>
            )
        } else {
            return (
                <ScrollView>
                    <Text>Loading..</Text>
                </ScrollView>
            )
        }
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        margin: "auto"
    },
    vertical: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center"
    },
    heading: {
        fontSize: 30,
        marginBottom: 10,
    },
    subheading: {
        fontSize: 20,
        marginBottom: 20,
    },
    long_text: {
        marginBottom: 40,
    },
    content: {
        width: '100%'
    }
})