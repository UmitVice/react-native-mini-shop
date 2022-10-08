import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";

const NavBar = props => {
    // React Native Navbar component
    return (
        <View style={styles.navBarContainer}>
            <TouchableOpacity style={styles.navBarItem}>
                <Text style={styles.navBarText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navBarItem} onPress={() => {
                props.navigation.navigate('Cart')
            }}>
                <Text style={styles.navBarText}>Cart</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
        navBarContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: 50,
            backgroundColor: '#fff',
            borderTopWidth: 1,
            borderTopColor: '#000',
            position: 'absolute',
            bottom: 0
        },
        navBar: {
            backgroundColor: '#fff',
            width: '100%',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: 50,
        },
        navBarItem: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        navBarText: {
            fontSize: 16,
            color: '#000',
        }
    }
)

NavBar.propTypes = {
    navigation: PropTypes.object,
};

export default NavBar;
