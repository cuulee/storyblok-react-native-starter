# Storyblok Starter Kit for React Native with Expo

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Connecting Storyblok](#storybloksdk)
- [Usage](#documentation)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

Storyblok is a simple Headless CMS that can handle content across multiple platforms.

## Getting Started <a name = "getting_started"></a>

First you need to install the expo-cli

```bash
# Install Expo CLI if you have not already
npm install -g expo-cli
```

Then you can start the general or a specific simulator

```bash
# Connect to Expo DevTools & all simuluators
expo start

# Connect to iOS simulator
expo start --ios

# Connect to Android devices or simulators
expo start --android

# Connect to web version
expo start --web
```

## Connecting Storyblok <a name = "storybloksdk"></a>

In order to get your content you need to go to the [Storyblok App](http://app.storyblok.com/) and find your API Key.

Paste your API Key into `utilities/storyblok.js`:

```js
let Storyblok = new StoryblokClient({
  accessToken: 'my_very_secret_access_token',
  cache: {
    clear: 'auto',
    type: 'memory'
  }
})
```

## Documentation <a name = "documentation"></a>

This starter uses the following technologies:

- [Storyblok Documentation](https://www.storyblok.com/docs/guide/introduction)
  - [Storyblok Content Delivery API Documentation](https://www.storyblok.com/docs/api/content-delivery)
- [Expo Documentation](https://docs.expo.io/)
  - which is based on [React Native Documentation](https://reactnative.dev/docs/environment-setup)

## Deployment <a name = "deployment"></a>

### Apps
For detailed app deployment information look at the [Expo Deployment Documentation](https://docs.expo.io/distribution/app-stores/).

### PWA
Expo provides the following command to [build a PWA](https://docs.expo.io/guides/progressive-web-apps/).

```bash
## build a PWA
expo build:web

## disable asset & manifest generation
expo build:web --no-pwa
```