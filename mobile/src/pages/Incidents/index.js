import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents(){
    const [ incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    async function loadIncidents(){

        if (loading){
            return;
        }

        if (total > 0 && incidents.length === total){
            return;
        }

        setLoading(true);

        const res = await api.get('incidents', {
            params: { page },
        });

        setIncidents([...incidents, ...res.data, ]);
        setTotal(res.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    function navigateToDetails(incident){
        navigation.navigate('Details', { incident });
    }

    useEffect(() => {
        loadIncidents();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} Casos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList
                style={styles.incidentList}
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({ item: incident }) => (
                    <View style={styles.incidentItem}>
                        <Text style={styles.label}>ONG:</Text>
                        <Text style={styles.textBox}>{incident.name}</Text>
                        
                        <Text style={styles.label}>CASO:</Text>
                        <Text style={styles.textBox}>{incident.title}</Text>
                        
                        <Text style={styles.label}>VALOR:</Text>
                        <Text style={styles.textBox}>
                            {
                            Intl.NumberFormat('pt-BR', {    
                                style: 'currency',
                                currency: 'BRL' })
                                .format(incident.value)
                            }
                        </Text>

                        <TouchableOpacity 
                            style={styles.detailsButton}
                            onPress={() => navigateToDetails(incident)}    
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name='arrow-right' size={16} color='#e02041' />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}