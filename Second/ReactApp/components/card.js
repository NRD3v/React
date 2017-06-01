import React from 'react';
import View from 'react-native';

const Card = (props) => {
    const styles = {
        container: {
            borderWidth: 1,
            borderRadius: 2,
            borderColor: 'red'
        }
    };
    return (
        <View style={styles.container}>
            { props.children }
        </View>
    );

};
export default Card;
