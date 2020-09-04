import StoryblokClient from 'storyblok-js-client';

let Storyblok = new StoryblokClient({
  accessToken: 'secret-access-key',
  cache: {
    clear: 'auto',
    type: 'memory'
  }
})


export default Storyblok;