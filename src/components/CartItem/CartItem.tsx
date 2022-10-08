import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from "react-native";
import {useAppSelector} from "../../hooks";

const CartItem = ({ item })  => {
    return (
        <View>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
        </View>
    );
};

CartItem.propTypes = {
    item: PropTypes.object.isRequired
};

export default CartItem;
