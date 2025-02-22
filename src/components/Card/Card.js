import react from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import styles from './Card.style';


const Card = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.text}>{props.text}</Text>
            </View>
            <TouchableOpacity style={styles.button_container} onPress={() => Alert.alert('Liked')}>
                <Text>I LIKED</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Card;