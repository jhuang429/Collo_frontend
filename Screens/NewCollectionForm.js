import React, { Componen, useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Colors from '../Constants/colors'
import { connect } from 'react-redux'
import { createNewCollection } from '../src/actionCreators'


function NewCollectionForm (props) {

    const [state, setState] = useState({
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
    })

    const clearState = () => {
        setState({
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
        })
    }

    useEffect(() => {
        props.currentUser && setState(prevState=>({...prevState.state, user_id: props.currentUser.id}))
    }, [props.currentUser])

    const handleTitle = (text) => { setState(prevState=>({ ...prevState, title: text })) }
    const handleField1 = (text) => { setState(prevState=>({ ...prevState,data_title_1: text })) }
    const handleField2 = (text) => { setState(prevState=>({ ...prevState,data_title_2: text })) }
    const handleField3 = (text) => { setState(prevState=>({ ...prevState,data_title_3: text })) }
    const handleField4 = (text) => { setState(prevState=>({ ...prevState,data_title_4: text })) }
    const handleField5 = (text) => { setState(prevState=>({ ...prevState,data_title_5: text })) }
    const handleField6 = (text) => { setState(prevState=>({ ...prevState,data_title_6: text })) }
    const handleField7 = (text) => { setState(prevState=>({ ...prevState,data_title_7: text })) }
    const handleField8 = (text) => { setState(prevState=>({ ...prevState,data_title_8: text })) }
    const handleField9 = (text) => { setState(prevState=>({ ...prevState,data_title_9: text })) }
    const handleField10 = (text) => { setState(prevState=>({ ...prevState,data_title_10: text })) }

    const handleSubmit = () => {
        props.createNewCollection(state)
        clearState()
        props.navigation.navigate('My Collection')

    }

    const data = [

        { value: 'Price' },
        { value: 'Date' },
        { value: 'Quantity' },
        { value: 'Rating' },
        { value: 'Text' },
        { value: 'Notes' },
    ];

        return (
            <View style={styles.screen}>
                <ScrollView >


                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Collection Title"
                        placeholderTextColor={Colors.primary}
                        autoCapitalize="none"
                        onChangeText={handleTitle}
                        value={state.title} />

                    <Dropdown
                        label='Data Field 1'
                        data={data}
                        onChangeText={handleField1}
                        baseColor={Colors.primary}
                    />


                    <Dropdown
                        label='Data Field 2'
                        data={data}
                        onChangeText={handleField2}
                        baseColor={Colors.primary}
                    />


                    <Dropdown
                        label='Data Field 3'
                        data={data}
                        onChangeText={handleField3}
                        baseColor={Colors.primary}
                    />

                    <Dropdown
                        label='Data Field 4'
                        data={data}
                        onChangeText={handleField4}
                        baseColor={Colors.primary}
                    />

                    <Dropdown
                        label='Data Field 5'
                        data={data}
                        onChangeText={handleField5}
                        baseColor={Colors.primary}
                    />

                    <Dropdown
                        label='Data Field 6'
                        data={data}
                        onChangeText={handleField6}
                        baseColor={Colors.primary}
                    />

                    <Dropdown
                        label='Data Field 7'
                        data={data}
                        onChangeText={handleField7}
                        baseColor={Colors.primary}
                    />

                    <Dropdown
                        label='Data Field 8'
                        data={data}
                        onChangeText={handleField8}
                        baseColor={Colors.primary}
                    />

                    <Dropdown
                        label='Data Field 9'
                        data={data}
                        onChangeText={handleField9}
                        baseColor={Colors.primary}
                    />

                    <Dropdown
                        label='Data Field 10'
                        data={data}
                        onChangeText={handleField10}
                        baseColor={Colors.primary}
                    />


                </ScrollView>

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
            </View>
        )
    
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

const msp = state => {

    return {
        currentUser: state.currentUser
    }
}



export default connect(msp, mdp)(NewCollectionForm)
