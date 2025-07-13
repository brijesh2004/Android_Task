import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Right from 'react-native-vector-icons/AntDesign';

interface Props {
    visible: boolean;
    onClose: () => void;
}

export default function BottomDrawer({ visible, onClose }: Props) {
    const slideAnim = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: visible ? 1 : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [visible]);

    const translateY = slideAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [300, 0],
    });

    return (
        <>
            {visible && <TouchableOpacity style={styles.overlay} onPress={onClose} />}
            <Animated.View style={[styles.drawer, { transform: [{ translateY }] }]}>
                {[
                    { h: 'Habit', b: 'Lorem ipsum dolor sit, amet Hello ji from ', Icons: Icon1, name: 'android' },
                    { h: 'Recurring Task', b: 'Lorem ipsum dolor sit, amet Hello ji from ', Icons: Icon1 , name:'aliyun' },
                    { h: 'Task', b: 'Lorem ipsum dolor sit, amet Hello ji from ', Icons: Icon1, name:'android' },
                    { h: 'Goal of the Day', b: 'Lorem ipsum dolor sit, amet Hello ji from ', Icons: Icon1 , name:'aliyun' }
                ].map((item, idx) => (
                    <TouchableOpacity key={idx} style={styles.option}>
                        <item.Icons name={`${item.name}`} size={30} />
                        <View style={styles.text}>
                            <Text style={styles.optionText}>{item.h}</Text>
                            <Text style={styles.optionText1}>{item.b}</Text>
                        </View>
                        <Right name='right' size={30}/>
                    </TouchableOpacity>
                ))}
            </Animated.View>

        </>
    );
}

const styles = StyleSheet.create({
    overlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#0006' },
    drawer: {
        position: 'absolute',
        left: 0, right: 0, bottom: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20, borderTopRightRadius: 20,
        padding: 20,
    },
    heading: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
    option: {
         flexDirection:'row' ,
        borderBottomWidth:1,
        margin:10,
        padding:3,
        justifyContent:'space-around'
    },
    optionText: { fontSize: 20 },
    optionText1: { fontSize: 14 },
    text:{
        marginLeft:7,
    }
});
