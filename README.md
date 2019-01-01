[![npm version](https://badge.fury.io/js/react-native-customized-star-rating.svg)](https://badge.fury.io/js/react-native-customized-star-rating)

[![NPM](https://nodei.co/npm/react-native-customized-star-rating.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-native-customized-star-rating/)

# React-Native-Customized-Star-Rating Component:

- Customized animated star rating in react-native which is compatible for both IOS and Android.

### Advantages:
- User can change star view look and feel by changing star image
- User can customize star image animation by modifying the easing animation value
- User can give star count to display how many stars required to render
- Customized star component can accept 2 types of image importing from both local and URL based.

## Table of Contents:
1. [Prerequisites](#Prerequisites)
2. [Installation](#installation)
3. [Props](#props)
4. [Demo](#Demo)
5. [Usage](#Usage)
6. [Roadmap](#roadmap)
7. [Author](#Author)

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

### Demo:

<p align="center">
  <img src="https://user-images.githubusercontent.com/13198616/50558040-99a6e400-0d10-11e9-9ee3-50879e7ffeb8.gif" alt="Customized rating star" width="336" height="700"/>
</p>

### Props:

| Prop | Type | Description | Required | Default |
|---|---|---|---|---|
|**`noOfStars`**|int| The total number of stars|Yes|NA|
|**`starRowStyle`**|object| Style required for star row view|Yes|NA|
|**`starSizeStyle`**|object| Style required for star image view|Yes|NA|
|**`selectedStar`**|int| Local react state to get selected star id|Yes|NA|
|**`starAnimationScale`**|int or float | To scale up star image size |Yes|NA|
|**`animationDuration`**|int| Animation duration time which defines how long animation should play |Yes|NA|
|**`easingType`**| Easing name | Easing animation type |Yes|NA|
|**`emptyStarImagePath`**| object | It can accept either local image path or remote image path |Yes|NA|
|**`filledStarImagePath`**| object | It can accept either local image path or remote image path |Yes|NA|
|**`onClickFunc`**| callBackfunction() | Define call back function here |Yes|NA|

### Usage:
    import CustomizedStarRating from 'react-native-customized-star-rating';

    class ParentComponent extends Component {
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

    export default ParentComponent

## Roadmap:
- View the project roadmap [here](https://github.com/MaheshNandam/react-native-customized-star-rating/issues)

### Author:
- Mahesh Nandam: [Linkedin](https://www.linkedin.com/in/maheshnandam/)
- For my blogs: [Medium](https://medium.com/@maheshnandam)
