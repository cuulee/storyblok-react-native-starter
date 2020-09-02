import React from 'react'
import { Text, ScrollView, StyleSheet, Image, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { TouchableOpacity } from 'react-native-gesture-handler'

import storyblok from '../utilities/storyblok'


export default class About extends React.Component {
    state = {
        data: ''
    }
    async componentDidMount() {
        const resp = await storyblok.get('cdn/stories', {
            "starts_with": "blog/"
        })
        this.setState({ data: resp.data.stories })
    }
    goToPost = (post) => {
        Actions.post({ slug: post });
    }
    goToHome = () => {
        Actions.home()
    }
    render() {
        if (this.state.data) {
            const posts = this.state.data

            return (
                <ScrollView style={styles.container}>
                    {posts.map(post => {
                        const d = new Date(post.published_at)
                        return (<TouchableOpacity style={styles.post} key={post.content.title} onPress={() => this.goToPost(post.full_slug)}>
                            <Image style={styles.image} source={{ uri: post.content.image }} />
                            <Text style={styles.heading}>{post.content.title}</Text>
                            <Text style={styles.date}>{d.getFullYear()} - {d.getMonth()}</Text>
                        </TouchableOpacity>)
                    })}
                    <TouchableOpacity style={styles.button}>
                        <Button title="Back to Home" color="#09b3af" onPress={this.goToHome}></Button>
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
    post: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#888',
        borderRadius: 4,
        padding: 20,
        margin: 20
    },
    vertical: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center"
    },
    heading: {
        fontSize: 20,
        paddingTop: 10
    },
    image: {
        width: '100%',
        height: 80,
        resizeMode: 'contain',
     },
    content: {
        height: 100,
        width: '100%'
    }
})