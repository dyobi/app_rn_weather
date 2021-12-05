import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    errorText: {
        color: 'red',
        backgroundColor: 'transparent',
        marginBottom: 40
    },
    loading: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingLeft: 25,
        backgroundColor: '#FDF6AA'
    },
    loadingText: {
        fontSize: 38,
        marginBottom: 24
    }
});

export default styles;