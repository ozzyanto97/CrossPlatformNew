import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import Product from './Product.js';

class ProductDetail extends React.Component{
    
    state = {
        givenProducts: null,
        backToProducts: false,
        isLoading: true
    }

    componentDidMount()
     {
         
        return fetch('https://northwind.vercel.app/api/products/' + this.props.proNumber)
        .then((response) => response.json())
        .then((responseJson) => {
           this.setState({isLoading: false, givenProducts: responseJson})
        })
        .catch((error) =>{console.log(error)});
     };
     
     backPress(){
        this.setState({backToProducts: true});
    }

     render()
     {
        if(this.state.backToProducts)
        {
            return(
                <Product />
            )
        }

        if(this.state.isLoading)
        {
           return(
              <View style={styles.container}>
                 <ActivityIndicator />
              </View>
           )
        }
        console.log(this.state.givenProducts);
        return(
            <ScrollView style={{marginTop: 35}}>
                <TouchableOpacity style={styles.backToMenu} onPress = {() => this.backPress()}>
                   <Text>Back</Text>
               </TouchableOpacity>
               <View style={styles.itemContainer}>
                   <Text>Id: {this.state.givenProducts.id}</Text>
                   <Text>Supplier-Id: {this.state.givenProducts.supplierId}</Text>
                   <Text>Category-Id: {this.state.givenProducts.categoryId}</Text>
                   <Text>Quantity-Per-Unit: {this.state.givenProducts.quantityPerUnit}</Text>
                   <Text>Unit-Price: {this.state.givenProducts.unitPrice} $</Text>
                   <Text>Units-In-Stock: {this.state.givenProducts.unitsInStock}</Text>
                   <Text>Units-On-Order: {this.state.givenProducts.unitsOnOrder}</Text>
                   <Text>Rorder-Level: {this.state.givenProducts.reorderLevel}</Text>
                   <Text>Discontinued: {this.state.givenProducts.discontinued}</Text>
                   <Text>Name: {this.state.givenProducts.name}</Text>
               </View>
            </ScrollView>
        )
     }
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#fff',
       justifyContent: 'center',
       padding: 5,
       borderColor: '#000000'
    },
    itemContainer:{
        padding: 10,
        marginTop: 15,
        backgroundColor: '#F0FFFF',
        justifyContent: 'center',
        height: 300,
        borderRadius: 25,
        borderWidth: 5,
        borderColor: '#fff',
    },
    backToMenu:{
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#000000',
        width: 100,
        marginLeft: 10
    },
    deleteButton:{
        height: 25,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'red',
        backgroundColor: 'red',
        width: 100,
        marginLeft: 1,
        marginTop: 5
    }
 });

 export default ProductDetail