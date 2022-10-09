import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import CartItem from "../../components/CartItem/CartItem";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {clearCart, getTotalPrice} from "../../features/product/cartSlice";

const Cart = props => {
    const totalPrice = useAppSelector(state => state?.cart?.totalPrice);
    const cartItems = useAppSelector(state => state?.cart?.cart);
    const dispatch = useAppDispatch();
    return (
        <View>
            <TouchableOpacity style={styles.clearButton} onPress={() => {
                dispatch(clearCart())
                dispatch(getTotalPrice())
            }}>
                <Text style={{ color: 'white' }}>Clear Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(getTotalPrice())} style={styles.checkoutButton}>
                <Text style={{ color: 'white' }}>{totalPrice ? `$${totalPrice.toFixed(2)}` : 'Checkout'}</Text>
            </TouchableOpacity>
            {cartItems.length ? (<FlatList style={styles.list}
                                           contentContainerStyle={styles.listContainer}
                                           data={cartItems}
                                           horizontal={false}
                                           numColumns={1}
                                           ItemSeparatorComponent={() => {
                                               return (
                                                   <View style={styles.separator}/>
                                               )
                                           }} renderItem={({ item }) => <CartItem item={item} />}
                                           keyExtractor={item => item.id} />) : (<Text style={styles.emptyCart}>Your cart is empty</Text>)}

        </View>
    );
};

Cart.propTypes = {

};

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 5,
        backgroundColor: "#E6E6E6",
    },
    listContainer: {
        alignItems: 'center',
        paddingBottom: 120,
    },
    separator: {
        marginTop: 10,
    },
    emptyCart: {
        marginTop: 20,
        fontSize: 20,
        textAlign: 'center'
    },
    clearButton: {
        backgroundColor: 'red',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
    checkoutButton: {
        backgroundColor: 'green',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    }
})
export default Cart;
