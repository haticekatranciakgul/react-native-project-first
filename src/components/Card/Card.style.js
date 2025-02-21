import { StyleSheet} from 'react-native';


export default StyleSheet.create({
    card_container: {
        backgroundColor: '#fff',
    },
    card_body: {
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
    card_title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    card_text: {
        fontSize: 16,
        margin: 10
    },
    card_button_container: {
        backgroundColor: '#00C2FF',
        alignItems: 'center',
        padding: 10,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },


});