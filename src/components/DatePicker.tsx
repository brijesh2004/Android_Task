import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const dates = [
    { day: 'Sun', date: '15' },
    { day: 'Mon', date: '16' },
    { day: 'Tue', date: '17' },
    { day: 'Wed', date: '18' },
    { day: 'Thu', date: '19' },
    { day: 'Fri', date: '20' },
    { day: 'Sat', date: '21' },
    { day: 'Sun', date: '22' },
    { day: 'Mon', date: '23' },
    { day: 'Tue', date: '24' },
    { day: 'Wed', date: '25' },
    { day: 'Thu', date: '26' },
    { day: 'Fri', date: '27' },
    { day: 'Sat', date: '28' },
];

export default function DatePicker({ selectedDate, onSelect }: any) {
    return (
        <FlatList
            horizontal
            data={dates}
            keyExtractor={(item) => item.date}
            renderItem={({ item }) => {
                const selected = item.date === selectedDate;
                return (
                    <TouchableOpacity
                        onPress={() => onSelect(item.date)}
                        style={[styles.button, selected && styles.selected]}
                    >
                        <Text style={[styles.day, selected && styles.selectedText]}>{item.day}</Text>
                        <Text style={[styles.date, selected && styles.selectedText]}>{item.date}</Text>
                    </TouchableOpacity>
                );
            }}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: { 
        paddingHorizontal: 16 
    },
    button: {
        marginRight: 12,
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    selected: {
        backgroundColor: '#4A90E2',
        height: 60,
    },
    day: { fontSize: 12, color: '#333' },
    date: { fontSize: 16, fontWeight: 'bold', color: '#333' },
    selectedText: { color: '#fff' },
});
