import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';



export default class MyAppText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
            fontTag: "Schoolbell",
        };
    }

    async componentDidMount(){
        try{
            await Font.loadAsync({
                'Schoolbell': require('../font/Schoolbell.ttf'),
                'ComingSoon': require('../font/ComingSoon.ttf'),
            });
            this.setState({
                fontLoaded: true,
            });
        }
        catch(error){
            console.log(error)
        }
    }

    ChangeFont = () => {
        this.setState({
            fontTag: "ComingSoon"
        })
    }
    

    render() {
        const styles = StyleSheet.create({
            defaultStyle: {
                fontFamily: this.state.fontTag,
            }
        })
        if (this.state.fontLoaded) {
            return (
                <View>
                    <Text style={[styles.defaultStyle, this.props.style]}>
                        {this.props.children}
                    </Text>
                </View>
            )
        }
        else {
            return null;
        }

    }

}

