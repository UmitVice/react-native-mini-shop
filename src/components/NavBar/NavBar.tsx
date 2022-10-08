import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text} from "react-native";

const NavBar = props => {
    // React Native Navbar component
    return (
        <View style={styles.navBarContainer}>
            <Text>Navbar</Text>
        </View>
    );
};

const styles = StyleSheet.create({
        navBarContainer: {
            width: '100%',
            position: 'fixed',
            bottom: 0,
            left: 0,
            height: 50,
            backgroundColor: '#dcdcdc',
            alignItems: 'center',
            justifyContent: 'center',
        },
        navBar: {
            backgroundColor: '#fff',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            elevation: 2,
            position: 'relative'
        },
    }
)

NavBar.propTypes = {

};

export default NavBar;
