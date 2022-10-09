import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View, StyleSheet, Image} from "react-native";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {addToCart, removeAllFromCart, removeFromCart} from "../../features/product/cartSlice";

const CartItem = ({ item })  => {
    const dispatch = useAppDispatch();
    // cartItem component which image, title and remove button in one row
    return (
        <View style={styles.cartItem}>
            <View style={styles.itemData}>
                <Image style={styles.image} source={{uri: item.img}}/>
                <Text numberOfLines={1} ellipsizeMode={'tail'}>{item.name}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <View style={styles.buttons}>
                    <TouchableOpacity onPress={() => dispatch(addToCart(item))}><Text style={styles.upButton}>+1</Text></TouchableOpacity>
                    <Text>{item.quantity}</Text>
                    <TouchableOpacity onPress={() => dispatch(removeFromCart(item))}><Text style={styles.downButton}>-1</Text></TouchableOpacity>
                </View>

            </View>
            <View style={styles.removeButtonContainer}>
                <TouchableOpacity onPress={() => { dispatch(removeAllFromCart(item))}} style={styles.deleteButton}>
                    <Text style={styles.deleteText}>Remove</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

CartItem.propTypes = {
    item: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
    cartItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center'
    },
    itemData: {
        width: '100%',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 10
    },
    price: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
        margin: 10
    },
    mainText: {
        fontSize: 16,
        width: "100%",
        fontWeight: 'bold',
        flexWrap: 'wrap'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%'
    },
    upButton: {
        backgroundColor: 'green',
        borderRadius: 10,
        color: 'white',
        padding: 5,
        marginHorizontal: 5
    },
    downButton: {
        backgroundColor: 'red',
        borderRadius: 10,
        color: 'white',
        padding: 5,
        marginHorizontal: 5
    },
    removeButtonContainer: {
        width: 140,
        height: 100,
        position: 'absolute',
        textAlign: 'center',
        right: 10,
        top: 0,
        padding: 10,
    },
    deleteButton: {
        marginLeft: 20,
        textAlign: 'center',
        backgroundColor: 'red',
        borderRadius: 10,
        color: 'white',
        padding: 5,
        marginHorizontal: 5
    },
    deleteText: {
        textAlign: 'center',
        color: 'white'

    },
});

export default CartItem;
