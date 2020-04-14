import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import * as ImagePicker from 'expo-image-picker';
import { connect } from 'react-redux'
import { uploadImage, updateItem } from '../src/actionCreators'
import { useNavigation } from '@react-navigation/native';
import colors from '../Constants/colors'

function EditItemForm(props) {
    const { item, collection } = props.route.params
    const navigation = useNavigation()
    navigation.setOptions({ title: item.title })

    //states
    const [image, setImage] = useState(null)
    const [unSavedImage, setUnSavedImage] = useState(false)
    const [state, setState] = useState({
        title: '',
        data_field_1: "",
        data_field_2: "",
        data_field_3: "",
        data_field_4: "",
        data_field_5: "",
        data_field_6: "",
        data_field_7: "",
        data_field_8: "",
        data_field_9: "",
        data_field_10: "",
    })

    useEffect(
        () => {
            setState({
                title: item.title,
                data_field_1: item.data_field_1,
                data_field_2: item.data_field_2,
                data_field_3: item.data_field_3,
                data_field_4: item.data_field_4,
                data_field_5: item.data_field_5,
                data_field_6: item.data_field_6,
                data_field_7: item.data_field_7,
                data_field_8: item.data_field_8,
                data_field_9: item.data_field_9,
                data_field_10: item.data_field_10,
            })
            setImage(item.image)
        }, []
    )

    //form handlers
    const handleTitle = (text) => { setState({ ...state, title: text }) }
    const handleField1 = (text) => { setState({ ...state, data_field_1: text }) }
    const handleField2 = (text) => { setState({ ...state, data_field_2: text }) }
    const handleField3 = (text) => { setState({ ...state, data_field_3: text }) }
    const handleField4 = (text) => { setState({ ...state, data_field_4: text }) }
    const handleField5 = (text) => { setState({ ...state, data_field_5: text }) }
    const handleField6 = (text) => { setState({ ...state, data_field_6: text }) }
    const handleField7 = (text) => { setState({ ...state, data_field_7: text }) }
    const handleField8 = (text) => { setState({ ...state, data_field_8: text }) }
    const handleField9 = (text) => { setState({ ...state, data_field_9: text }) }
    const handleField10 = (text) => { setState({ ...state, data_field_10: text }) }
    const handleUpdate = () => {
        props.updateItem(item.id, { ...state })
        navigation.goBack()
    }
    const handleDelete = () => {
        fetch(`http://localhost:3000/items/${item.id}`, {
            method: "DELETE",
        })
    }
    const handleAddPhotos = () => {
        ImagePicker.getCameraRollPermissionsAsync()
        ImagePicker.launchImageLibraryAsync().then(img => setImage(img.uri))
        setUnSavedImage(true)
    }
    const handleUploadPhoto = () => {
        props.uploadImage(item.id, image)
        setUnSavedImage(false)
    }

    const tableHead = ['Property', 'Value']
    const tableData = [
        ["Name", <TextInput value={state.title} onChangeText={handleTitle} />],
        [collection.data_title_1, <TextInput value={state.data_field_1} onChangeText={handleField1} />],
        [collection.data_title_2, <TextInput value={state.data_field_2} onChangeText={handleField2} />],
        [collection.data_title_3, <TextInput value={state.data_field_3} onChangeText={handleField3} />],
        [collection.data_title_4, <TextInput value={state.data_field_4} onChangeText={handleField4} />],
        [collection.data_title_5, <TextInput value={state.data_field_5} onChangeText={handleField5} />],
        [collection.data_title_6, <TextInput value={state.data_field_6} onChangeText={handleField6} />],
        [collection.data_title_7, <TextInput value={state.data_field_7} onChangeText={handleField7} />],
        [collection.data_title_8, <TextInput value={state.data_field_8} onChangeText={handleField8} />],
        [collection.data_title_9, <TextInput value={state.data_field_9} onChangeText={handleField9} />],
        [collection.data_title_10, <TextInput value={state.data_field_10} onChangeText={handleField10} />],
    ]

    return (
        <ScrollView>
            {image ?
                <Image
                    style={{ width: "100%", height: 300 }}
                    source={{ uri: image }}
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


            {unSavedImage &&
                <TouchableOpacity
                    style={{ ...styles.submitButton, backgroundColor: "red" }}
                    onPress={handleUploadPhoto}>
                    <Text style={styles.submitButtonText}> Save Image </Text>
                </TouchableOpacity>

            }

            <View style={styles.container}>
                <Table borderStyle={{ borderWidth: 1, borderColor: "black" }}>
                    <Row data={tableHead} flexArr={[1, 2]} style={styles.head} textStyle={{ margin: 6, color: "white" }} />
                    <Rows data={tableData} flexArr={[1, 2]} borderStyle={{ borderColor: "black" }} textStyle={styles.text} />
                </Table>
            </View>

            <TouchableOpacity
                style={styles.submitButton}
                onPress={handleUpdate}>
                <Text style={styles.submitButtonText}> Update Data</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.submitButton}
                onPress={handleDelete}>
                <Text style={styles.submitButtonText}> Delete </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
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
        color: "white"
    },
    submitButtonText: {
        color: "white"
    },
    container: { flex: 1, padding: 16, paddingTop: 10, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: "#7a42f4" },
    text: { margin: 6 },
})

const mdp = (dispatch) => {
    return {
        uploadImage: (itemId, imageUri) => dispatch(uploadImage(itemId, imageUri)),
        updateItem: (itemId, item_obj) => dispatch(updateItem(itemId, item_obj)),
    }
}

export default connect(null, mdp)(EditItemForm)