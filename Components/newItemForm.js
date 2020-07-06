import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import Colors from '../Constants/colors'
import * as ImagePicker from 'expo-image-picker';
import { connect } from 'react-redux'
import { uploadImage, createItem } from '../src/actionCreators'
import { useNavigation } from '@react-navigation/native';


function NewItemForm(props) {
    const navigation = useNavigation()

    const [state, setState] = useState({
        image: null,
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
    })
    useEffect(
        () => {
            let { title, id, data_title_1, data_title_2, data_title_3, data_title_4, data_title_5, data_title_6, data_title_7, data_title_8, data_title_9, data_title_10 } = props.collections.find(coll => coll.id == props.route.params.collection.id)

            setState({ title: title, collection_id: id, "data_title_1": data_title_1, "data_title_2": data_title_2, "data_title_3": data_title_3, "data_title_4": data_title_4, "data_title_5": data_title_5, "data_title_6": data_title_6, "data_title_7": data_title_7, "data_title_8": data_title_8, "data_title_9": data_title_9, "data_title_10": data_title_10, image: null })
        }, []
    )

    const handleTitle = (text) => { setState(prevState => ({ ...prevState, title: text })) }
    const handleField1 = (text) => { setState(prevState => ({ ...prevState, data_field_1: text })) }
    const handleField2 = (text) => { setState(prevState => ({ ...prevState, data_field_2: text })) }
    const handleField3 = (text) => { setState(prevState => ({ ...prevState, data_field_3: text })) }
    const handleField4 = (text) => { setState(prevState => ({ ...prevState, data_field_4: text })) }
    const handleField5 = (text) => { setState(prevState => ({ ...prevState, data_field_5: text })) }
    const handleField6 = (text) => { setState(prevState => ({ ...prevState, data_field_6: text })) }
    const handleField7 = (text) => { setState(prevState => ({ ...prevState, data_field_7: text })) }
    const handleField8 = (text) => { setState(prevState => ({ ...prevState, data_field_8: text })) }
    const handleField9 = (text) => { setState(prevState => ({ ...prevState, data_field_9: text })) }
    const handleField10 = (text) => { setState(prevState => ({ ...prevState, data_field_10: text })) }
    
    const handleSubmit = () => {
        props.createItem(state)
        navigation.goBack()
    }
    const handleAddPhotos = () => {
        ImagePicker.getCameraRollPermissionsAsync()
        ImagePicker.launchImageLibraryAsync().then(img => setState(prevState => ({ ...prevState, image: img.uri })))
    }
    const handleCamera = () => {
        ImagePicker.getCameraRollPermissionsAsync()
        ImagePicker.launchCameraAsync().then(img => setImage(img.uri))
        setUnSavedImage(true)
    }

    return (
        <View>
            {state.image ?
                <Image
                    style={{ width: "100%", height: 300 }}
                    source={{ uri: state.image }}
                    resizeMode={'cover'} // cover or contain its upto you view look
                /> :
                <Image
                    style={{ width: "100%", height: 150 }}
                    source={require('../assets/no-img.png')}
                    resizeMode={'cover'} // cover or contain its upto you view look
                />}


            <TouchableOpacity
                style={styles.submitButton}
                onPress={handleAddPhotos}>
                <Text style={styles.submitButtonText}> Add Image </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{...styles.submitButton, marginTop:5}}
                onPress={handleCamera}>
                <Text style={styles.submitButtonText}> Use Camera </Text>
            </TouchableOpacity>

            <ScrollView style={styles.container}>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Item Name"
                    placeholderTextColor={Colors.primary}
                    autoCapitalize="none"
                    onChangeText={handleTitle} />

                {state.data_title_1 && <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder={state.data_title_1}
                    placeholderTextColor={Colors.primary}
                    autoCapitalize="none"
                    onChangeText={handleField1} />}

                {state.data_title_2 && <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder={state.data_title_2}
                    placeholderTextColor={Colors.primary}
                    autoCapitalize="none"
                    onChangeText={handleField2} />}

                {state.data_title_3 && <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder={state.data_title_3}
                    placeholderTextColor={Colors.primary}
                    autoCapitalize="none"
                    onChangeText={handleField3} />}

                {state.data_title_4 && <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder={state.data_title_4}
                    placeholderTextColor={Colors.primary}
                    autoCapitalize="none"
                    onChangeText={handleField4} />}

                {state.data_title_5 && <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder={state.data_title_5}
                    placeholderTextColor={Colors.primary}
                    autoCapitalize="none"
                    onChangeText={handleField5} />}

                {state.data_title_6 && <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder={state.data_title_6}
                    placeholderTextColor={Colors.primary}
                    autoCapitalize="none"
                    onChangeText={handleField6} />}

                {state.data_title_7 && <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder={state.data_title_7}
                    placeholderTextColor={Colors.primary}
                    autoCapitalize="none"
                    onChangeText={handleField7} />}

                {state.data_title_8 && <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder={state.data_title_8}
                    placeholderTextColor={Colors.primary}
                    autoCapitalize="none"
                    onChangeText={handleField8} />}

                {state.data_title_9 && <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder={state.data_title_9}
                    placeholderTextColor={Colors.primary}
                    autoCapitalize="none"
                    onChangeText={handleField9} />}

                {state.data_title_10 && <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder={state.data_title_10}
                    placeholderTextColor={Colors.primary}
                    autoCapitalize="none"
                    onChangeText={handleField10} />}

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
            </ScrollView>

        </View>
    )
}

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

const msp = (state) => {
    return {
        collections: state.collections
    }
}
const mdp = (dispatch) => {
    return {
        // uploadImage: (itemId, imageUri) => dispatch(uploadImage(itemId, imageUri)),
        createItem: (item_obj) => dispatch(createItem(item_obj)),
    }
}

export default connect(msp, mdp)(NewItemForm)