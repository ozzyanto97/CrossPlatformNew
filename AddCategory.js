import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import Category from './Category.js'

class AddCategory extends React.Component{
    constructor(props){
        super(props);
        this.state = 
        {
           isLoading: true,
           givenData: null,
           backToMenu: false,
           addCategoryPressed: false,
           givenDescp: '',
           givenName: ''
        }
    }
    backPress(){
        this.setState({backToMenu: true});
    }

    handleDescription(text){
        this.setState({givenDescp: text});
    }

    handleName(text){
        this.setState({givenName: text});
    }

    sendForms(){
        
    }

    render()
    {
        if(this.state.backToMenu)
        {
            return(
                <Category />
            )
        }
        return(
            <ScrollView style={{marginTop: 35}}>
                <TouchableOpacity style={styles.backToMenu} onPress = {() => this.backPress()}>
                   <Text>Back</Text>
                </TouchableOpacity>
                <View>
                    <TextInput 
                    style = {styles.inputField} 
                    placeholder =  "Description" 
                    placeholderTextColor = "#a9a9a9"
                    autoCapitalize = "none"
                    onChangeText = {this.handleDescription}
                    />
                    <TextInput 
                    style = {styles.inputField} 
                    placeholder =  "Name" 
                    placeholderTextColor = "#a9a9a9"
                    autoCapitalize = "none"
                    onChangeText = {this.handleName} 
                    />
                    <TouchableOpacity style={styles.addButton} onPress = {() => this.backPress()}>
                        <Text style={{color: 'white'}}>Add Category</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
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
    inputField: {
        padding: 10,
        margin: 12,
        height: 40,
        borderColor: '#a9a9a9',
        borderRadius: 5,
        borderWidth: 2,
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

export default AddCategory