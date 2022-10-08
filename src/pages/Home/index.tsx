import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from "react-native";
import Products from "../../components/Product/Product";
import {useAppDispatch, useAppSelector} from "../../hooks";
import { setProducts, setSelectedProduct } from "../../features/product/productSlice";
import {customFetch} from "../../utils/helper";
import {setMenu} from "../../features/product/menuSlice";
import NavBar from "../../components/NavBar/NavBar";

const Home = props => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(state => state?.products?.products);
    const menu = useAppSelector(state => state?.menu?.menu);

    useEffect(() => {
        customFetch({
            url: 'https://my-json-server.typicode.com/benirvingplt/products/products',
            method: 'GET',
            onSuccess: (data) => {
                dispatch(setProducts([...data, ...data]));
            },
            onError: (error) => {
                console.log(error);
            }
        })

        customFetch({
            url: 'https://my-json-server.typicode.com/benirvingplt/products/menu',
            method: 'GET',
            onSuccess: (data) => {
                dispatch(setMenu(data));
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }, [])

    useEffect(() => {
        console.log(products);
    }, [products]);


    return (
        <View style={styles.container}>
            <Products navigation={props.navigation} products={products}/>
        </View>
    );
};

Home.propTypes = {

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home;
