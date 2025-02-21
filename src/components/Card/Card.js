import react from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Card.style';


const Card = (props) => {
    return (
        <View style={styles.card_container}>
            <View style={styles.card_body}>
                <Text style={styles.card_title}>Eddard Stark</Text>
                <Text style={styles.card_text}>Winter is coming...</Text>
            </View>
            <TouchableOpacity style={styles.card_button_container}>
                <Text>I LIKED</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Card;