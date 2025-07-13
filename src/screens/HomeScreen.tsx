import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import DatePicker from '../components/DatePicker';
import TaskItem from '../components/TaskItem';
import BottomDrawer from '../components/BottomDrawer';
import { tasks } from '../data/tasks';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default function HomeScreen() {
    const [selectedDate, setSelectedDate] = useState('18');
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [showIcon, setShowIcon] = useState(true);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <AntDesign name='android' size={40} />
                    <Text style={styles.headerText}>Wishely</Text>
                </View>
                <View style={styles.headerRight}>
                    <EvilIcons name='search' size={25} style={styles.icon}/>
                    <AntDesign name='calendar' size={25} style={styles.icon} />
                    <AntDesign name='question' size={25} style={styles.icon} />
                </View>
            </View>
            <DatePicker selectedDate={selectedDate} onSelect={setSelectedDate} />
            <View style={styles.quoteContainer}>
                <Text style={styles.welcome}>Today's Quote</Text>
                <Text style={styles.quote}>“You must do the things, you think you cannot do.”</Text>
                <View style={styles.progressBarBackground}>
                    <View style={[styles.progressBarFill, { width: '65%' }]} />
                </View>
            </View>

            <FlatList
                data={tasks}
                renderItem={({ item }) => <TaskItem task={item} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />

            {showIcon && <TouchableOpacity style={styles.fab} onPress={() => { setDrawerVisible(true); setShowIcon(false) }}>
                <Icon name="add" size={28} color="#fff" />
            </TouchableOpacity>}
            <BottomDrawer visible={drawerVisible} onClose={() => { setDrawerVisible(false); setShowIcon(true) }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f6f6f6' },
    quoteContainer: { margin: 16, padding: 12, backgroundColor: '#fff', borderRadius: 12 },
    quote: { fontSize: 14, marginBottom: 8 },
    progressBarBackground: { height: 6, backgroundColor: '#eee', borderRadius: 3 },
    progressBarFill: { height: 6, backgroundColor: '#4A90E2', borderRadius: 3 },
    list: { paddingHorizontal: 16, paddingBottom: 80 },
    fab: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        backgroundColor: '#4A90E2',
        width: 56, height: 56,
        borderRadius: 28,
        justifyContent: 'center', alignItems: 'center',
        elevation: 6
    },
    header:{
       flexDirection:'row',
       justifyContent:'space-between',
       margin:10,
    },
    headerLeft:{
        flexDirection:'row',
        alignItems:'center',
    },
    headerRight:{
        flexDirection:'row',
        alignItems:'center',
        padding:10,
    },
    icon:{
        margin:10,
    },
    headerText:{
        fontSize:30,
        fontWeight:'600',
    },
    welcome:{
        fontWeight:'900',
        fontSize:18,
        textAlign:'center'
    }
});
