[![npm version](https://badge.fury.io/js/react-native-star-rating.svg)](https://badge.fury.io/js/react-native-star-rating)

[![NPM](https://nodei.co/npm/react-native-star-rating.png?downloads=true)](https://nodei.co/npm/react-native-star-rating/)

# React-Native-Customized-Star-Rating Component:

> A React Native component for generating and displaying interactive star ratings. Compatible with both iOS and Android.

### Advantages:
- User can change star look and feel by changing star image
- User can customise star image animation by changing easing animation value
- User can give star count to display how many stars required to render
- Customized star component can accept 2 types of image importing from both local and URL based.

## Before Getting Started:
refer my blog: https://medium.com/

## Table of Contents:
1. [Prerequisites](#Prerequisites)
1. [Installation](#installation)
2. [Required Props](#required props)
3. [Usage](#Usage)
4. [Roadmap](#roadmap)
5. [Authors](#Authors)


<p align="center">
  <img src="https://github.com/djchie/react-native-star-rating/blob/master/assets/general-star-demo.gif" alt="Customized rating star" width="336" height="600"/>
</p>

### Prerequisites:
shell, brew, watchman, npm, react-native-cli - these are the packages which were need to be installed.

### Installation:
- installing react-native-customized-star-rating plugin and adding dependeices as below 
    ```sh
    npm install react-native-customized-star-rating --save
    ```
    or
    ```sh
    yarn add react-native-customized-star-rating
    ```
- Adding Dependencies: react-native link react-native-customized-star-rating

### Required Props:


### Usage:

import CustomizedStarRating from 'react-native-customized-star-rating';

class StarRating extends Component {

  constructor(props) {
        super(props);
        this.state = {
            scaleAnimation: new Animated.Value(1),
            filledStar: 0,
        }
    }

    clickStar(j) {
        this.setState({ filledStar: j })
    }

  render() {
    return (
        <CustomizedStarRating
            noOfStars={'4'}
            starRowStyle={styles.starRowStyle}
            starSizeStyle={styles.starSizeStyle}
            selectedStar={this.state.filledStar}
            starAnimationScale={1.15}
            animationDuration={300}
            easingType={Easing.easeInCirc}
            emptyStarImagePath={require('../images/emptyStar.png')}
            filledStarImagePath={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Nautical_star.svg/1200px-Nautical_star.svg.png' }}
            onClickFunc={(i) => this.clickStar(i)}
        />
    );
  }
}

export default StarRating

### Built With:
* [React-Native](https://facebook.github.io/react-native/) - Dependency Management


## Roadmap:
View the project roadmap [here](https://github.com/MaheshNandam/react-native-customized-star-rating/issues)


### Authors:
*** Mahesh Nandam** - *Initial work* - [GitHub](https://github.com/MaheshNandam)


### Acknowledgments:
*** React Native, Animated, Flex, npm - Inspiration
