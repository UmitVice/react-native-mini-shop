import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, FlatList, Text, Image, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import {setSelectedProduct} from "../../features/product/productSlice";
import {useAppDispatch} from "../../hooks";

const Products = ({ products, navigation }) => {

    const dispatch = useAppDispatch();
    return (
        <View style={styles.container}>
            <FlatList style={styles.list}
                      contentContainerStyle={styles.listContainer}
                      data={products}
                      horizontal={false}
                      numColumns={2}
                      keyExtractor= {(item) => {
                          return item.id;
                      }}
                      ItemSeparatorComponent={() => {
                          return (
                              <View style={styles.separator}/>
                          )
                      }}
                      renderItem={(product: any) => {
                          const item = product.item;
                          let imageUrl = item.img;
                          // remove query from imageUrl
                          imageUrl = imageUrl?.split('?')[0];
                          return (
                              <View style={styles.card}>
                                  <TouchableWithoutFeedback onPress={() => {
                                      dispatch(setSelectedProduct(item));
                                      navigation.navigate('Details');
                                  }}>
                                      <View>
                                          <View style={styles.cardHeader}>
                                              <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.title}>{item.name}</Text>
                                              <Text style={styles.price}>{item.price}</Text>
                                          </View>
                                          <Image style={styles.cardImage} source={{uri: imageUrl}}/>
                                      </View>
                                  </TouchableWithoutFeedback>
                                  <View style={styles.cardFooter}>
                                      <View style={styles.socialBarContainer}>
                                          <View style={styles.socialBarSection}>
                                              <TouchableOpacity style={styles.socialBarButton} onPress={() => {}}>
                                                  <Image style={styles.icon} source={{uri: 'https://img.icons8.com/nolan/96/3498db/add-shopping-cart.png'}}/>
                                                  <Text style={[styles.socialBarLabel, styles.buyNow]}>Add To Cart</Text>
                                              </TouchableOpacity>
                                          </View>
                                      </View>
                                  </View>
                              </View>
                          )
                      }}/>
        </View>
    );
};

Products.propTypes = {
    products: PropTypes.array,
    navigation: PropTypes.object
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    list: {
        paddingHorizontal: 5,
        backgroundColor:"#E6E6E6",
        paddingBottom: 50
    },
    listContainer:{
        alignItems:'center'
    },
    separator: {
        marginTop: 10,
    },
    /******** card **************/
    card:{
        shadowColor: '#00000021',
        shadowOffset: {
            height: 3,
            width: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        marginVertical: 8,
        backgroundColor:"white",
        flexBasis: '47%',
        marginHorizontal: 5,
    },
    cardHeader: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardFooter:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardImage:{
        height: 200,
        width: '100%',
        resizeMode: 'contain',
    },
    /******** card components **************/
    title:{
        fontSize:18,
        flex:1,
        flexWrap: 'wrap',
    },
    price:{
        fontSize:16,
        color: "green",
        marginTop: 5
    },
    buyNow:{
        color: "purple",
    },
    icon: {
        width:25,
        height:25,
    },
    /******** social bar ******************/
    socialBarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },
    socialBarSection: {
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    socialBarLabel: {
        marginLeft: 8,
        alignSelf: 'flex-end',
        justifyContent: 'center',
    },
    socialBarButton:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Products;
