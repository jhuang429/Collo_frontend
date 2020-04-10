import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import Colors from '../Constants/colors'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import * as ImagePicker from 'expo-image-picker';
import { connect } from 'react-redux'
import { uploadImage} from '../src/actionCreators'

class EditItemForm extends Component {


    state = {
        title: '',
        image: null,
        // collection_id: "",
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

    handleUpdate = () => {
        fetch(`http://localhost:3000/items/${this.props.route.params.item.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ item: this.state })
        })
        this.props.route.params.nagivation.goBack()
    }

    handleDelete = () => {
        fetch(`http://localhost:3000/items/${this.props.route.params.item.id}`, {
            method: "DELETE",
        })
    }

    handleAddPhotos = () => {
        ImagePicker.getCameraRollPermissionsAsync()
        ImagePicker.launchImageLibraryAsync().then(img => this.setState({ image: img.uri }))

    }

    handleUploadPhoto = () => {
        this.props.uploadImage(this.props.route.params.item.id, this.state.image)
        // let photo = { uri: this.state.image }
        // let formdata = new FormData();
        // formdata.append("image", { uri: photo.uri, name: `${this.props.route.params.item.id}.jpg`, type: 'image/jpeg' })

        // fetch(`http://localhost:3000/items/${this.props.route.params.item.id}/image`, {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //     },
        //     body: formdata
        // })
    }

    componentDidMount() {
        this.setState({
            // collection_id: this.props.route.params.fields.collection_id,
            image: this.props.route.params.item.image,
            title: this.props.route.params.item.title,
            data_field_1: this.props.route.params.item.data_field_1,
            data_field_2: this.props.route.params.item.data_field_2,
            data_field_3: this.props.route.params.item.data_field_3,
            data_field_4: this.props.route.params.item.data_field_4,
            data_field_5: this.props.route.params.item.data_field_5,
            data_field_6: this.props.route.params.item.data_field_6,
            data_field_7: this.props.route.params.item.data_field_7,
            data_field_8: this.props.route.params.item.data_field_8,
            data_field_9: this.props.route.params.item.data_field_9,
            data_field_10: this.props.route.params.item.data_field_10,

        })
    }

    render() {


        const tableHead = ['Property', 'Value']
        const tableTitle = [
            this.props.route.params.fields.data_title_1,
            this.props.route.params.fields.data_title_2,
            this.props.route.params.fields.data_title_3,
            this.props.route.params.fields.data_title_4,
            this.props.route.params.fields.data_title_5,
            this.props.route.params.fields.data_title_6,
            this.props.route.params.fields.data_title_7,
            this.props.route.params.fields.data_title_8,
            this.props.route.params.fields.data_title_9,
            this.props.route.params.fields.data_title_10
        ]
        const tableData = [
            [<TextInput value={this.state.data_field_1} onChangeText={this.handleField1} />],
            [<TextInput value={this.state.data_field_2} onChangeText={this.handleField2} />],
            [<TextInput value={this.state.data_field_3} onChangeText={this.handleField3} />],
            [<TextInput value={this.state.data_field_4} onChangeText={this.handleField4} />],
            [<TextInput value={this.state.data_field_5} onChangeText={this.handleField5} />],
            [<TextInput value={this.state.data_field_6} onChangeText={this.handleField6} />],
            [<TextInput value={this.state.data_field_7} onChangeText={this.handleField7} />],
            [<TextInput value={this.state.data_field_8} onChangeText={this.handleField8} />],
            [<TextInput value={this.state.data_field_9} onChangeText={this.handleField9} />],
            [<TextInput value={this.state.data_field_10} onChangeText={this.handleField10} />],
        ]

        return (
            <ScrollView>


                {this.state.image ?
                    <Image
                        // onPress={() => navigation.push('ItemContainer')}
                        style={{ width: "100%", height: 300 }}
                        source={{ uri: this.state.image }}
                        resizeMode={'cover'} // cover or contain its upto you view look
                    /> :
                    <Image
                        // onPress={() => navigation.push('ItemContainer')}
                        style={{ width: "100%", height: 150 }}
                        source={{ uri: 'https://dummyimage.com/640x360/fff/aaa' }}
                        resizeMode={'cover'} // cover or contain its upto you view look
                    />}



                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.handleAddPhotos}>
                    <Text style={styles.submitButtonText}> Add Image </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.handleUploadPhoto}>
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
                    onPress={this.handleUpdate}>
                    <Text style={styles.submitButtonText}> Update  Data</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.handleDelete}>
                    <Text style={styles.submitButtonText}> Delete </Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
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
    }
}


export default connect(null, mdp)(EditItemForm)