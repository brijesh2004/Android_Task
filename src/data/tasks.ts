export interface Task {
  id: string;
  icon: string;
  title: string;
  time: string;
  tags: string[];
  status: 'completed' | 'pending';
}

export const tasks: Task[] = [
  {
    id: '1',
    icon: 'calendar',
    title: 'Schedule a meeting with Harshit Sir',
    time: '09:00 AM',
    tags: ['Habit', 'Must'],
    status: 'completed',
  },
  {
    id: '2',
    icon: 'meditation',
    title: '2.5 Hours Simran and Meditation',
    time: '08:00 AM',
    tags: ['Habit', 'Must'],
    status: 'pending',
  },
  {
    id: '3',
    icon: 'meditation',
    title: '2.5 Hours Simran and Meditation',
    time: '08:00 AM',
    tags: ['Habit', 'Must'],
    status: 'pending',
  },
  {
    id: '4',
    icon: 'meditation',
    title: '2.5 Hours Simran and Meditation',
    time: '08:00 AM',
    tags: ['Habit', 'Must'],
    status: 'pending',
  },
  {
    id: '5',
    icon: 'meditation',
    title: '2.5 Hours Simran and Meditation',
    time: '08:00 AM',
    tags: ['Habit', 'Must'],
    status: 'pending',
  },
  {
    id: '6',
    icon: 'meditation',
    title: '2.5 Hours Simran and Meditation',
    time: '08:00 AM',
    tags: ['Habit', 'Must'],
    status: 'pending',
  },
  {
    id: '7',
    icon: 'meditation',
    title: '2.5 Hours Simran and Meditation',
    time: '08:00 AM',
    tags: ['Habit', 'Must'],
    status: 'pending',
  },
  {
    id: '8',
    icon: 'meditation',
    title: '2.5 Hours Simran and Meditation',
    time: '08:00 AM',
    tags: ['Habit', 'Must'],
    status: 'pending',
  },
  {
    id: '9',
    icon: 'meditation',
    title: '2.5 Hours Simran and Meditation',
    time: '08:00 AM',
    tags: ['Habit', 'Must'],
    status: 'pending',
  },
];
