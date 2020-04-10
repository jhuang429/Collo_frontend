import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import Colors from '../Constants/colors'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import * as ImagePicker from 'expo-image-picker';
import { connect } from 'react-redux'
import { uploadImage, updateItem } from '../src/actionCreators'
import { useNavigation } from '@react-navigation/native';

function EditItemForm(props) {
    
    
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

    const [image, setImage] = useState(null)
    const navigation = useNavigation()
    navigation.setOptions({ title: state.title })

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



    const { item, fields } = props.route.params

    const handleUpdate = () => {
        props.updateItem(item.id, {...state})
        // fetch(`http://localhost:3000/items/${item.id}`, {
        //     method: "PATCH",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     },
        //     body: JSON.stringify({ ...state })
        // })
        navigation.goBack()
    }

    const handleDelete = () => {
        fetch(`http://localhost:3000/items/${item.id}`, {
            method: "DELETE",
        })
    }

    const handleAddPhotos = () => {
        ImagePicker.getCameraRollPermissionsAsync()
        ImagePicker.launchImageLibraryAsync().then(img => setImage(img.uri ))
    }

    const handleUploadPhoto = () => {
        props.uploadImage(item.id, image)
    }

    useEffect(
        () =>
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
            }), []
    )

    useEffect(
        ()=> setImage(item.image), []
    )


    const tableHead = ['Property', 'Value']
    const tableTitle = [
        "Name",
        fields.data_title_1,
        fields.data_title_2,
        fields.data_title_3,
        fields.data_title_4,
        fields.data_title_5,
        fields.data_title_6,
        fields.data_title_7,
        fields.data_title_8,
        fields.data_title_9,
        fields.data_title_10
    ]
    const tableData = [
        [<TextInput value={state.title} onChangeText={handleTitle} />],
        [<TextInput value={state.data_field_1} onChangeText={handleField1} />],
        [<TextInput value={state.data_field_2} onChangeText={handleField2} />],
        [<TextInput value={state.data_field_3} onChangeText={handleField3} />],
        [<TextInput value={state.data_field_4} onChangeText={handleField4} />],
        [<TextInput value={state.data_field_5} onChangeText={handleField5} />],
        [<TextInput value={state.data_field_6} onChangeText={handleField6} />],
        [<TextInput value={state.data_field_7} onChangeText={handleField7} />],
        [<TextInput value={state.data_field_8} onChangeText={handleField8} />],
        [<TextInput value={state.data_field_9} onChangeText={handleField9} />],
        [<TextInput value={state.data_field_10} onChangeText={handleField10} />],
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

            <TouchableOpacity
                style={styles.submitButton}
                onPress={handleUploadPhoto}>
                <Text style={styles.submitButtonText}> upload photo </Text>
            </TouchableOpacity>

            <View style={styles.container}>
                <Table borderStyle={{ borderWidth: 1 }}>
                    <Row data={tableHead} flexArr={[1, 1]} style={styles.head} textStyle={styles.text} />
                    <TableWrapper style={styles.wrapper}>
                        <Col data={tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
                        <Rows data={tableData} flexArr={[1, 1]} style={styles.row} textStyle={styles.text} />
                    </TableWrapper>
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
    },
    submitButtonText: {
        color: 'white'
    },
    container: { padding: 16, paddingTop: 30 },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: { height: 28 },
    text: { textAlign: 'center' }
})

const mdp = (dispatch) => {
    return {
        uploadImage: (itemId, imageUri) => dispatch(uploadImage(itemId, imageUri)),
        updateItem: (itemId, item_obj) => dispatch(updateItem(itemId, item_obj)),
    }
}


export default connect(null, mdp)(EditItemForm)