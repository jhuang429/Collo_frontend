import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Colors from '../Constants/colors'
import { connect } from 'react-redux'
import { createNewCollection } from '../src/actionCreators'


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
        data_title_10: null
    }

    clearState = () => {
        this.setState({
            title: ''
        })
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
        this.props.createNewCollection(this.state)
        this.clearState()
        this.props.navigation.navigate('My Collection')

    }

    data = [

        { value: 'Price' },
        { value: 'Date' },
        { value: 'Quantity' },
        { value: 'Rating' },
        { value: 'Text' },
        { value: 'Notes' },
    ];

    render() {
        return (
            <View style={styles.screen}>
                <ScrollView >


                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Collection Title"
                        placeholderTextColor={Colors.primary}
                        autoCapitalize="none"
                        onChangeText={this.handleTitle}
                        value={this.state.title} />

                    <Dropdown
                        label='Data Field 1'
                        data={this.data}
                        onChangeText={this.handleField1}
                        baseColor={Colors.primary}
                    />


                    <Dropdown
                        label='Data Field 2'
                        data={this.data}
                        onChangeText={this.handleField2}
                        baseColor={Colors.primary}
                    />


                    <Dropdown
                        label='Data Field 3'
                        data={this.data}
                        onChangeText={this.handleField3}
                        baseColor={Colors.primary}
                    />

                    <Dropdown
                        label='Data Field 4'
                        data={this.data}
                        onChangeText={this.handleField4}
                        baseColor={Colors.primary}
                    />

                    <Dropdown
                        label='Data Field 5'
                        data={this.data}
                        onChangeText={this.handleField5}
                        baseColor={Colors.primary}
                    />

                    <Dropdown
                        label='Data Field 6'
                        data={this.data}
                        onChangeText={this.handleField6}
                        baseColor={Colors.primary}
                    />

                    <Dropdown
                        label='Data Field 7'
                        data={this.data}
                        onChangeText={this.handleField7}
                        baseColor={Colors.primary}
                    />

                    <Dropdown
                        label='Data Field 8'
                        data={this.data}
                        onChangeText={this.handleField8}
                        baseColor={Colors.primary}
                    />

                    <Dropdown
                        label='Data Field 9'
                        data={this.data}
                        onChangeText={this.handleField9}
                        baseColor={Colors.primary}
                    />

                    <Dropdown
                        label='Data Field 10'
                        data={this.data}
                        onChangeText={this.handleField10}
                        baseColor={Colors.primary}
                    />


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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 50
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

const mdp = dispatch => {

    return {
        createNewCollection: (collection_obj) => dispatch(createNewCollection(collection_obj)),
    }
}



export default connect(null, mdp)(NewCollectionForm)
