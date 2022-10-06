import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity} from "react-native";

const NavBarButton = ({ width, height, onPress }) => {
    const combinedStyles = StyleSheet.flatten([styles.navBarButton, { width, height }]);
    return (
        <TouchableOpacity style={styles.navBarButton}>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    navBarButton: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
})

NavBarButton.propTypes = {
    width: PropTypes.number || undefined,
    height: PropTypes.number || undefined,
    onPress: PropTypes.func,
};

export default NavBarButton;
