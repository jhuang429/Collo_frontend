import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import Colors from '../Constants/colors'


class NewItemForm extends Component {


    state = {
        title: '',
        collection_id: "",
        data_field_1: null,
        data_field_2: null,
        data_field_3: null,
        data_field_4: null,
        data_field_5: null,
        data_field_6: null,
        data_field_7: null,
        data_field_8: null,
        data_field_9: null,
        data_field_10: null
    }



    handleTitle = (text) => { this.setState({ title: text }) }
    handleField1 = (text) => { this.setState({ data_field_1: text }) }
    handleField2 = (text) => { this.setState({ data_field_2: text }) }
    handleField3 = (text) => { this.setState({ data_field_3: text }) }
    handleField4 = (text) => { this.setState({ data_field_4: text }) }
    handleField5 = (text) => { this.setState({ data_field_5: text }) }
    handleField6 = (text) => { this.setState({ data_field_6: text }) }
    handleField7 = (text) => { this.setState({ data_field_7: text }) }
    handleField8 = (text) => { this.setState({ data_field_8: text }) }
    handleField9 = (text) => { this.setState({ data_field_9: text }) }
    handleField10 = (text) => { this.setState({ data_field_10: text }) }

    handleSubmit = () => {

        fetch("http://localhost:3000/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ item: {...this.state, collection_id: this.props.route.params.fields.collection_id} })
        })
    }


    render() {
        const { fields } = this.props.route.params

        // componentDidMount(){
        //     this.setState({collection_id: this.props.route.params.fields.collection_id})
        // }

        return (
            <View>
                                <Image
                    // onPress={() => navigation.push('ItemContainer')}
                    style={{ width: 150, height: 150 }}
                    source={{ uri: 'https://dummyimage.com/640x360/fff/aaa' }}
                    resizeMode={'cover'} // cover or contain its upto you view look
                />
                <ScrollView style={styles.container}>
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Item Name"
                        placeholderTextColor={Colors.primary}
                        autoCapitalize="none"
                        onChangeText={this.handleTitle} />

                    {fields.data_title_1 && <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder={fields.data_title_1}
                        placeholderTextColor={Colors.primary}
                        autoCapitalize="none"
                        onChangeText={this.handleField1} />}

                    {fields.data_title_2 && <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder={fields.data_title_2}
                        placeholderTextColor={Colors.primary}
                        autoCapitalize="none"
                        onChangeText={this.handleField2} />}

                    {fields.data_title_3 && <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder={fields.data_title_3}
                        placeholderTextColor={Colors.primary}
                        autoCapitalize="none"
                        onChangeText={this.handleField3} />}

                    {fields.data_title_4 && <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder={fields.data_title_4}
                        placeholderTextColor={Colors.primary}
                        autoCapitalize="none"
                        onChangeText={this.handleField4} />}

                    {fields.data_title_5 && <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder={fields.data_title_5}
                        placeholderTextColor={Colors.primary}
                        autoCapitalize="none"
                        onChangeText={this.handleField5} />}

                    {fields.data_title_6 && <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder={fields.data_title_6}
                        placeholderTextColor={Colors.primary}
                        autoCapitalize="none"
                        onChangeText={this.handleField6} />}

                    {fields.data_title_7 && <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder={fields.data_title_7}
                        placeholderTextColor={Colors.primary}
                        autoCapitalize="none"
                        onChangeText={this.handleField7} />}

                    {fields.data_title_8 && <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder={fields.data_title_8}
                        placeholderTextColor={Colors.primary}
                        autoCapitalize="none"
                        onChangeText={this.handleField8} />}

                    {fields.data_title_9 && <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder={fields.data_title_9}
                        placeholderTextColor={Colors.primary}
                        autoCapitalize="none"
                        onChangeText={this.handleField9} />}

                    {fields.data_title_10 && <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder={fields.data_title_10}
                        placeholderTextColor={Colors.primary}
                        autoCapitalize="none"
                        onChangeText={this.handleField10} />}



                </ScrollView>

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.handleSubmit}>
                    <Text style={styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default NewItemForm

const styles = StyleSheet.create({
    container: {
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

