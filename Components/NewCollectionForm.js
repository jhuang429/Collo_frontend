import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

class NewCollectionForm extends Component {

    state = {
        title: '',
        user_id: 1,
        data_title_1: null,
        data_title_2: null,
        data_title_3: null,
        data_title_4: null,
        data_title_5: null,
        data_title_6: null,
        data_title_7: null,
        data_title_8: null,
        data_title_9: null,
        data_title_1: null
    }

    handleTitle = (text) => { this.setState({ title: text }) }
    handleField1 = (text) => { this.setState({ data_title_1: text }) }
    handleField2 = (text) => { this.setState({ data_title_2: text }) }
    handleField3 = (text) => { this.setState({ data_title_3: text }) }
    handleField4 = (text) => { this.setState({ data_title_4: text }) }
    handleField5 = (text) => { this.setState({ data_title_5: text }) }
    handleField6 = (text) => { this.setState({ data_title_6: text }) }
    handleField7 = (text) => { this.setState({ data_title_7: text }) }
    handleField8 = (text) => { this.setState({ data_title_8: text }) }
    handleField9 = (text) => { this.setState({ data_title_9: text }) }
    handleField10 = (text) => { this.setState({ data_title_10: text }) }

    handleSubmit = () => {
        fetch("http://localhost:3000/collections", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ collection: this.state })
        })
    }

    data = [
        { value: 'Price'}, 
        { value: 'Date' }, 
        { value: 'Quantity'}, 
        { value: 'Rating' },
        { value: 'Text'}, 
        { value: 'Notes'}, 
    ];

    render() {
        return (
            <ScrollView style={styles.container}>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Collection Title"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleTitle} />

                <Dropdown
                    label='Favorite Fruit'
                    data={this.data}
                />


                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Data Field 1"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleField1} />

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Data Field 2"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleField2} />

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Data Field 3"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleField3} />

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Data Field 4"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleField4} />

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Data Field 5"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleField5} />

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Data Field 6"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleField6} />


                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Data Field 7"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleField7} />

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Data Field 8"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleField8} />

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Data Field 9"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleField9} />

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Data Field 10"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleField10} />

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.handleSubmit}>
                    <Text style={styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>

            </ScrollView>
        )
    }
}
export default NewCollectionForm

const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
    },
    input: {
        margin: 5,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    }
})
