import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import Colors from '../Constants/colors'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


class EditItemForm extends Component {


    state = {
        title: '',
        collection_id: "",
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
            body: JSON.stringify({ item: { ...this.state, collection_id: this.props.route.params.fields.collection_id } })
        })
    }


    render() {
        const { fields } = this.props.route.params

        // componentDidMount(){
        //     this.setState({collection_id: this.props.route.params.fields.collection_id})
        // }
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
            [<TextInput value={this.state.data_field_2} onChangeText={this.handleTitle} />],
            [this.state.data_field_2],
            [this.state.data_field_3],
            [this.state.data_field_4],
            [this.state.data_field_5],
            [this.state.data_field_6],
            [this.state.data_field_7],
            [this.state.data_field_8],
            [this.state.data_field_9],
            [this.state.data_field_10],
        ]

        return (
            <View>
                <Image
                    // onPress={() => navigation.push('ItemContainer')}
                    style={{ width: 150, height: 150 }}
                    source={{ uri: 'https://dummyimage.com/640x360/fff/aaa' }}
                    resizeMode={'cover'} // cover or contain its upto you view look
                />
                <View style={styles.container}>
                    <Table borderStyle={{ borderWidth: 1 }}>
                        <Row data={tableHead} flexArr={[1, 1]} style={styles.head} textStyle={styles.text} />
                        <TableWrapper style={styles.wrapper}>
                            <Col data={tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
                            <Rows data={tableData} flexArr={[1, 1]} style={styles.row} textStyle={styles.text} />
                        </TableWrapper>
                    </Table>
                </View>

                {/* 
                <TouchableOpacity
                style={styles.submitButton}
                onPress={this.handleSubmit}>
                <Text style={styles.submitButtonText}> Submit </Text>
            </TouchableOpacity> */}
            </View>
        )
    }
}


export default EditItemForm

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

