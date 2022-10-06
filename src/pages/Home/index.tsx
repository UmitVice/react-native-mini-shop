import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {View} from "react-native";
import Products from "../../components/Product/Product";
import {useAppDispatch, useAppSelector} from "../../hooks";
import { setProducts } from "../../features/product/productSlice";
import {customFetch} from "../../utils/helper";

const Home = props => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(state => state?.products?.products);

    useEffect(() => {
        customFetch({
            url: 'https://my-json-server.typicode.com/benirvingplt/products/products',
            method: 'GET',
            onSuccess: (data) => {
                dispatch(setProducts(data));
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
        <View>
            <Products products={products}/>
        </View>
    );
};

Home.propTypes = {

};

export default Home;
