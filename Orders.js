import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import Menu from './Menu';
import Product from './Product.js';

class Orders extends React.Component{
    constructor(props){
        super(props);
        this.state = 
        {
           isLoading: true,
           givenData: null,
           backToMenu: false,
        }
     }
  
     backPress(){
         this.setState({backToMenu: true});
     }

     componentDidMount()
     {
        this.callNorth();
     };
     
     callNorth(){
        return fetch('https://northwind.vercel.app/api/orders')
        .then((response) => response.json())
        .then((responseJson) => {
           this.setState({isLoading: false, givenData: responseJson})
        })
        .catch((error) =>{console.log(error)});
     }

     render() 
     {

        if(this.state.backToMenu)
        {
            return(
                <Menu />
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
        else
        {
           let categoryItems = this.state.givenData.map((val, key) => {
              return(
                 <View key={key} style={styles.container}>
                     <TouchableOpacity style={styles.itemContainer} >
                        <Text>Product Id: {val.id}</Text>
                        <Text>Order Date: {val.orderDate}</Text>
                        <Text>Required Date: {val.requiredDate}</Text>
                        <Text>Shipped Date: {val.shippedDate}</Text>
                        <Text>Ship Via: {val.shipVia}</Text>
                     </TouchableOpacity>
                 </View>   
              )
  
           });
           return(
              <ScrollView style={{marginTop: 35}}>

                 <TouchableOpacity style={styles.backToMenu} onPress = {() => this.backPress()}>
                     <Text>Back</Text>
                 </TouchableOpacity>
                 {categoryItems}
              </ScrollView>
              
           )
        }
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
        marginTop: 2,
        backgroundColor: '#F0FFFF',
        justifyContent: 'center',
        height: 125,
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

export default Orders