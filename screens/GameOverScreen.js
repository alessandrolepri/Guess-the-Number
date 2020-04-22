import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const GameOverScreem = props => {
    return (
        <View style={styles.screen}>
            <Text>The Game is Over!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default GameScreen;