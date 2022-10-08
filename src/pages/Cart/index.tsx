import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from "react-native";
import CartItem from "../../components/CartItem/CartItem";
import {useAppSelector} from "../../hooks";

const Cart = props => {
    const cartItems = useAppSelector(state => state?.cart?.cart);
    return (
        <View>
            {cartItems.length ? cartItems.map((item, index) => {
                return <CartItem key={index} item={item} />
            })
                : <Text style={styles.emptyText}>Cart is empty</Text>}
        </View>
    );
};

Cart.propTypes = {

};

const styles = StyleSheet.create({
    emptyText: {
        marginTop: 20,
        fontSize: 20,
        textAlign: 'center'
    },
})
export default Cart;
