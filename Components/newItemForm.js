import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import Colors from '../Constants/colors'
import * as ImagePicker from 'expo-image-picker';
import { connect } from 'react-redux'
import { uploadImage, createItem } from '../src/actionCreators'


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



    handleTitle = (text) => { setState({ title: text }) }
    handleField1 = (text) => { setState({ data_field_1: text }) }
    handleField2 = (text) => { setState({ data_field_2: text }) }
    handleField3 = (text) => { setState({ data_field_3: text }) }
    handleField4 = (text) => { setState({ data_field_4: text }) }
    handleField5 = (text) => { setState({ data_field_5: text }) }
    handleField6 = (text) => { setState({ data_field_6: text }) }
    handleField7 = (text) => { setState({ data_field_7: text }) }
    handleField8 = (text) => { setState({ data_field_8: text }) }
    handleField9 = (text) => { setState({ data_field_9: text }) }
    handleField10 = (text) => { setState({ data_field_10: text }) }

    useEffect(
        () => setState({ collection_id: props.route.params.fields.collection_id
            }), []
    )

handleSubmit = () => {
    props.createItem(state)
    navigation.goBack()
}

handleAddPhotos = () => {
    ImagePicker.getCameraRollPermissionsAsync()
    ImagePicker.launchImageLibraryAsync().then(img => setState({ image: img.uri }))

}

// handleUploadPhoto = (item) => {
//     let photo = { uri: state.image }
//     let formdata = new FormData();
//     formdata.append("image", { uri: photo.uri, name: `${item.id}.jpg`, type: 'image/jpeg' })

//     fetch(`http://localhost:3000/items/${item.id}/image`, {
//         method: "POST",
//         headers: {
//             'Content-Type': 'multipart/form-data',
//         },
//         body: formdata
//     })
// }



    const { fields } = props.route.params

    return (
        <View>
            {state.image ?
                <Image

                    style={{ width: "100%", height: 150 }}
                    source={{ uri: state.image }}
                    resizeMode={'cover'} // cover or contain its upto you view look
                /> :
                <Image
                    style={{ width: "100%", height: 150 }}
                    source={{ uri: 'https://dummyimage.com/640x360/fff/aaa' }}
                    resizeMode={'cover'} // cover or contain its upto you view look
                />}


            <TouchableOpacity
                style={styles.submitButton}
                onPress={handleAddPhotos}>
                <Text style={styles.submitButtonText}> Add Image </Text>
            </TouchableOpacity>

            <ScrollView style={styles.container}>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Item Name"
                    placeholderTextColor={Colors.primary}
                    autoCapitalize="none"
                    onChangeText={handleTitle} />

                {fields.data_title_1 && <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder={fields.data_title_1}
                    placeholderTextColor={Colors.primary}
                    autoCapitalize="none"
                    onChangeText={handleField1} />}

                {fields.data_title_2 && <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder={fields.data_title_2}
                    placeholderTextColor={Colors.primary}
                    autoCapitalize="none"
                    onChangeText={handleField2} />}

                {fields.data_title_3 && <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder={fields.data_title_3}
                    placeholderTextColor={Colors.primary}
                    autoCapitalize="none"
                    onChangeText={handleField3} />}

                {fields.data_title_4 && <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder={fields.data_title_4}
                    placeholderTextColor={Colors.primary}
                    autoCapitalize="none"
                    onChangeText={handleField4} />}

                {fields.data_title_5 && <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder={fields.data_title_5}
                    placeholderTextColor={Colors.primary}
                    autoCapitalize="none"
                    onChangeText={handleField5} />}

                {fields.data_title_6 && <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder={fields.data_title_6}
                    placeholderTextColor={Colors.primary}
                    autoCapitalize="none"
                    onChangeText={handleField6} />}

                {fields.data_title_7 && <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder={fields.data_title_7}
                    placeholderTextColor={Colors.primary}
                    autoCapitalize="none"
                    onChangeText={handleField7} />}

                {fields.data_title_8 && <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder={fields.data_title_8}
                    placeholderTextColor={Colors.primary}
                    autoCapitalize="none"
                    onChangeText={handleField8} />}

                {fields.data_title_9 && <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder={fields.data_title_9}
                    placeholderTextColor={Colors.primary}
                    autoCapitalize="none"
                    onChangeText={handleField9} />}

                {fields.data_title_10 && <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder={fields.data_title_10}
                    placeholderTextColor={Colors.primary}
                    autoCapitalize="none"
                    onChangeText={handleField10} />}



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

const mdp = (dispatch) => {
    return {
        uploadImage: (itemId, imageUri) => dispatch(uploadImage(itemId, imageUri)),
        createItem: (item_obj) => dispatch(createItem(item_obj)),
    }
}


export default connect(null, mdp)(NewItemForm)