import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import Menu from './Menu';
import AddCategory from './AddCategory';

class Category extends React.Component{
   constructor(props){
      super(props);
      this.state = 
      {
         isLoading: true,
         givenData: null,
         backToMenu: false,
         addCategoryPressed: false
      }
   }

   backPress(){
       this.setState({backToMenu: true});
   }

   addPress(){
      this.setState({addCategoryPressed: true});
   }

   componentDidMount()
   {
      this.callNorth();
   };
   
   callNorth(){
      return fetch('https://northwind.vercel.app/api/categories')
      .then((response) => response.json())
      .then((responseJson) => {
         this.setState({isLoading: false, givenData: responseJson})
      })
      .catch((error) =>{console.log(error)});
   }

   render() 
   {
      if(this.state.addCategoryPressed)
      {
         return(
            <AddCategory givenDescp = "helloworld" />
         )
      }

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
                   <TouchableOpacity style={styles.itemContainer}>
                      <Text>{val.description}</Text>
                      <Text>{val.name}</Text>
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
               <TouchableOpacity style={styles.addButton} onPress = {() => this.addPress()}>
                   <Text style={{color: 'white'}}>Add Category</Text>
               </TouchableOpacity>
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
   },
   addButton:{
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 15,
      borderWidth: 2,
      borderColor: '#008000',
      backgroundColor: '#008000',
      marginBottom: 10,
      marginLeft: 30,
      marginRight: 30,
      marginTop: 5
  }
});

export default Category