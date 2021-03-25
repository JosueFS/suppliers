import {StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    incidentDetails: { 
        marginTop: 32,
        marginBottom: 16,
        padding: 24,
        backgroundColor: '#fff',
        borderRadius: 8,
    },

    label: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },
    
    textBox: {
        marginTop: 4,
        fontSize: 15,
        color: '#737380',
        marginBottom: 14
    },

    contact: {
        marginTop: 0,
        marginBottom: 16,
        padding: 24,
        backgroundColor: '#fff',
        borderRadius: 8,

        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    contactTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
    },

    contactSubtitle: {
        color: '#737380',
        width: '100%',
        marginTop: 10,
        fontSize: 15
    },

    contactButton: {
        marginTop: 15,
        height: 16,
        width: '48%',
        backgroundColor: '#e02041',
        padding: 25,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    contactButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 15,
        
    }
});