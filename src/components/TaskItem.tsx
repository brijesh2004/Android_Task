import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Task } from '../data/tasks';

interface Props {
  task: Task;
}

export default function TaskItem({ task }: Props) {
  return (
    <View style={styles.container}>
      <Icon name={task.icon} size={24} color="#0270ecff" style={styles.icon} />
      <View style={styles.details}>
        <Text style={styles.title}>{task.title}</Text>
        <View style={styles.meta}>
          <Text style={styles.time}>{task.time}</Text>
          {task.tags.map((tag, idx) => (
            <Text key={idx} style={styles.tag}>{tag}</Text>
          ))}
        </View>
      </View>
      <Icon
        name={task.status === 'completed' ? 'check-circle' : 'checkbox-blank-circle-outline'}
        size={24}
        color={task.status === 'completed' ? 'green' : '#ccc'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', padding: 12, backgroundColor: '#fff', marginBottom: 8, borderRadius: 8 },
  icon: { 
    marginRight: 19,
    zIndex:0.2,
   },
  details: { flex: 1 },
  title: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
  meta: { flexDirection: 'row', flexWrap: 'wrap' },
  time: { marginRight: 8, fontSize: 12, color: '#555' },
  tag: { marginRight: 8, fontSize: 12, color: '#4A90E2', backgroundColor: '#E0F0FF', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 6 },
});
