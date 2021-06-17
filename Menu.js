import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native'
import Orders from './Orders.js'
import Product from './Product.js'
import Category from './Category.js'

class Menu extends React.Component{
    state = {
        names: [
           {
              id: 0,
              name: 'Categories',
           },
           {
              id: 1,
              name: 'Products',
           },
           {
              id: 2,
              name: 'Orders',
           },
        ],
        itemPressed: false,
        currentDisplay: null
     }

     contentDisplayer(data){
         console.log(this.state.currentDisplay);
         this.setState({currentDisplay: data.name, itemPressed: true});
     }

     render() {
        if(!this.state.itemPressed)
        {
            return (
               <View style = {{flex: 1 ,justifyContent: 'center'}}>
                  {
                     this.state.names.map((item, index) => (
                        <TouchableOpacity
                           key = {item.id}
                           style = {styles.container}
                           onPress = {() => this.contentDisplayer(item)}>
                           <Text style = {styles.descps}>
                              {item.name}
                           </Text>
                        </TouchableOpacity>
                     ))
                  }
               </View>
            )
        }
        else
        {
            if(this.state.currentDisplay == 'Categories')
            {
               return(
                  <Category />
               )
            }
            if(this.state.currentDisplay == 'Products')
            {
               
               return(
                  <Product />
               )
            }
            if(this.state.currentDisplay == 'Orders')
            {
               return(
                  <Orders />
               )
            }
        }
     }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        height: 75,
        borderRadius: 25,
        borderWidth: 5,
        borderColor: '#fff',
     },
    
     descps: {
         color: '#ffffff'
     },
 });

export default Menu