import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    Animated,
    Easing,
    TouchableWithoutFeedback
} from 'react-native';


export default class Star extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scaleAnimation: new Animated.Value(1),
        }
    }

    doAnimation = () => {
        Animated.timing(this.state.scaleAnimation, {
            toValue: this.props.starAnimationScale,
            duration: this.props.animationDuration,
            easing: this.props.easingType,
            useNativeDriver: true
        }).start(() => {
            this.state.scaleAnimation.setValue(1)
        });
    }

    renderStars = () => {
        const animatedValue = {
            transform: [{ scale: this.state.scaleAnimation }]
        }

        let starsArray = [];
        let animatedViewStyle = {};
        let imagePath = '';

        for (let i = 1; i <= this.props.noOfStars; i++) {
            if (i <= this.props.selectedStar) {
                imagePath = this.props.filledStarImagePath;
                animatedViewStyle = [animatedValue, this.props.starSizeStyle];
            }
            else {
                imagePath = this.props.emptyStarImagePath;
                animatedViewStyle = [this.props.starSizeStyle];
            }

            starsArray.push(
                <TouchableWithoutFeedback
                    key={i}
                    onPress={() => {
                        this.props.onClickFunc(i),
                            this.doAnimation()
                    }}>
                    <Animated.View style={animatedViewStyle}>
                        <Image
                            style={this.props.starSizeStyle}
                            source={imagePath} />
                    </Animated.View>
                </TouchableWithoutFeedback>
            )
        }
        return starsArray;
    }

    render() {
        return (
            <View style={this.props.starRowStyle}>
                {this.renderStars()}
            </View>
        )
    }
}
