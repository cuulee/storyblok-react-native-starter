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
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ];
          
          
        if (this.state.data) {
            const posts = this.state.data
            return (
                <ScrollView style={styles.container}>
                    {posts.map(post => {
                        const d = new Date(post.published_at)
                        const { image } = post.content
                        const items = image.match(/(\d)+x(\d)+/g)[0].split('x')
                        const [width, height] = items
                        const ratio = height / width
                        return (<TouchableOpacity style={styles.post} key={post.content.title} onPress={() => this.goToPost(post.full_slug)}>
                            {post.content.image && (<Image style={{ width: 250, height: ratio * 250 }} source={{ uri: post.content.image }} />)}
                            <Text style={styles.heading}>{post.content.title}</Text>
                            <Text style={styles.date}>{d.getDay()} {months[d.getMonth()]} {d.getFullYear()}</Text>
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
        padding: 6,
        margin: "auto"
    },
    post: {
        backgroundColor: '#F6F8F9',
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
     },
    content: {
        height: 100,
        width: '100%'
    }
})