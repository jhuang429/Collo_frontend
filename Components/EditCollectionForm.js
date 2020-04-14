import React, { Componen, useEffect, useState } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Colors from '../Constants/colors'
import { connect } from 'react-redux'
import { createNewCollection } from '../src/actionCreators'
import { Item, Label, Input, Form, Text } from "native-base";


function EditCollectionForm(props) {

    const [state, setState] = useState({
        title: 'hello',
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

    // const clearState = () => {
    //     setState({
    //         title: hello,
    //         user_id: 1,
    //         data_title_1: null,
    //         data_title_2: null,
    //         data_title_3: null,
    //         data_title_4: null,
    //         data_title_5: null,
    //         data_title_6: null,
    //         data_title_7: null,
    //         data_title_8: null,
    //         data_title_9: null,
    //         data_title_10: null
    //     })
    // }

    useEffect(() => {
        // props.currentUser && setState(prevState => ({ ...prevState, user_id: props.currentUser.id }))
        setState(prevState => ({ ...prevState, ...props.route.params.collection }))
    }, [props.currentUser])

    const handleTitle = (text) => { setState(prevState => ({ ...prevState, title: text })) }
    const handleField1 = (text) => { setState(prevState => ({ ...prevState, data_title_1: text })) }
    const handleField2 = (text) => { setState(prevState => ({ ...prevState, data_title_2: text })) }
    const handleField3 = (text) => { setState(prevState => ({ ...prevState, data_title_3: text })) }
    const handleField4 = (text) => { setState(prevState => ({ ...prevState, data_title_4: text })) }
    const handleField5 = (text) => { setState(prevState => ({ ...prevState, data_title_5: text })) }
    const handleField6 = (text) => { setState(prevState => ({ ...prevState, data_title_6: text })) }
    const handleField7 = (text) => { setState(prevState => ({ ...prevState, data_title_7: text })) }
    const handleField8 = (text) => { setState(prevState => ({ ...prevState, data_title_8: text })) }
    const handleField9 = (text) => { setState(prevState => ({ ...prevState, data_title_9: text })) }
    const handleField10 = (text) => { setState(prevState => ({ ...prevState, data_title_10: text })) }

    const handleSubmit = () => {
        props.createNewCollection(state)
        // clearState()
        props.navigation.navigate('My Collection')

    }

    // const data = [

    //     { value: 'Price' },
    //     { value: 'Date' },
    //     { value: 'Quantity' },
    //     { value: 'Rating' },
    //     { value: 'Text' },
    //     { value: 'Notes' },
    // ];

    return (
        <View style={styles.screen}>
            <ScrollView >

                {/* <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Collection Title"
                    placeholderTextColor={Colors.primary}
                    autoCapitalize="none"
                    onChangeText={handleTitle}
                    value={state.title} /> */}

                <Form>
                    <Item stackedLabel>
                        <Label>Collection Title</Label>
                        <Input value={state.title} onChangeText={handleTitle}/>
                    </Item>
                    <Item stackedLabel last>
                        <Label>Data Field 1</Label>
                        <Input value={state.data_title_1} onChangeText={handleField1}/>
                    </Item>
                    <Item stackedLabel last>
                        <Label>Data Field 2</Label>
                        <Input value={state.data_title_2} onChangeText={handleField2}/>
                    </Item>
                    <Item stackedLabel last>
                        <Label>Data Field 3</Label>
                        <Input value={state.data_title_3} onChangeText={handleField3}/>
                    </Item>
                    <Item stackedLabel last>
                        <Label>Data Field 4</Label>
                        <Input value={state.data_title_4} onChangeText={handleField4}/>
                    </Item>
                    <Item stackedLabel last>
                        <Label>Data Field 5</Label>
                        <Input value={state.data_title_5} onChangeText={handleField5}/>
                    </Item>
                    <Item stackedLabel last>
                        <Label>Data Field 6</Label>
                        <Input value={state.data_title_6} onChangeText={handleField6}/>
                    </Item>
                    <Item stackedLabel last>
                        <Label>Data Field 7</Label>
                        <Input value={state.data_title_7} onChangeText={handleField7}/>
                    </Item>
                    <Item stackedLabel last>
                        <Label>Data Field 8</Label>
                        <Input value={state.data_title_8} onChangeText={handleField8}/>
                    </Item>
                    <Item stackedLabel last>
                        <Label>Data Field 9</Label>
                        <Input value={state.data_title_9} onChangeText={handleField9}/>
                    </Item>
                    <Item stackedLabel last>
                        <Label>Data Field 10</Label>
                        <Input value={state.data_title_10} onChangeText={handleField10}/>
                    </Item>
                </Form>

            </ScrollView>

            <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit}>
                <Text style={styles.submitButtonText}> Update Collection </Text>
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



export default connect(msp, mdp)(EditCollectionForm)
