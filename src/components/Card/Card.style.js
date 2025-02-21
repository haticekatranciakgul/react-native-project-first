import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        width: 300,
        height: 200,
    },
    body: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        margin: 10
    },
    button_container: {
        backgroundColor: '#00C2FF',
        alignItems: 'center',
        padding: 10,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },


});