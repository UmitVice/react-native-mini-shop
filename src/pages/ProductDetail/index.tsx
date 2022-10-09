import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Image, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {addToCart} from "../../features/product/cartSlice";

const ProductDetail = () => {
    const product = useAppSelector(state => state?.products?.selectedProduct);

    const dispatch = useAppDispatch();

    return (
        <View style={styles.card}>
            <Text style={styles.productTitle}>{product?.name}</Text>
            <Image style={styles.productImage} source={{ uri: product?.img}} />
            <Text style={styles.productDescription} >{product?.description}</Text>
            <Text style={styles.productPrice}>${product?.price}</Text>
            <View>
                <TouchableOpacity onPress={() => dispatch(addToCart(product)) } style={styles.addToCartButton}>
                    <Text style={styles.addToCartButtonText}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

ProductDetail.propTypes = {
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    productTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    productImage: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        margin: 10
    },
    productDescription: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
        margin: 10
    },
    productPrice: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
        margin: 10
    },
    card:{
        shadowColor: '#00000021',
        shadowOffset: {
            height: 3,
            width: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        marginVertical: 8,
        paddingVertical: 24,
        backgroundColor:"white",
        marginHorizontal: 5,
        borderRadius: 12
    },
    addToCartButton: {
        backgroundColor: '#000',
        padding: 12,
        margin: 16,
        alignItems: 'center',
        borderRadius: 4
    },
    addToCartButtonText: {
        color: '#fff',
        fontSize: 16
    },

});

export default ProductDetail;
