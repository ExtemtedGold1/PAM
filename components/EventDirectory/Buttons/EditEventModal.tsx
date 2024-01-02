
import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
interface EventData {
    id: number;
    name: string;
    desc: string;
    data: string;
    time: string;
}
interface EditEventModalProps {
    id: number;
    visible: boolean;
    onClose: () => void;
    onSave: (editedEvent: Partial<EventData>) => void;
    eventData: EventData;
}
const EditEventModal: React.FC<EditEventModalProps> = ({
                                                           visible,
                                                           onClose,
                                                           onSave,
                                                           eventData,
                                                       }) => {
    const [editedName, setEditedName] = useState(eventData.name);
    const [editedDesc, setEditedDesc] = useState(eventData.desc);
    const [editedData, setEditedData] = useState(eventData.data);
    const [editedTime, setEditedTime] = useState(eventData.time);

    useEffect(() => {
        const { name, desc, data, time } = eventData;
        setEditedName(name);
        setEditedDesc(desc);
        setEditedData(data);
        setEditedTime(time);
    }, [eventData]);

    const handleSave = () => {
        onSave({
            id: eventData.id, // Upewnij się, że przekazujesz id
            name: editedName,
            desc: editedDesc,
            data: editedData,
            time: editedTime,
        });
        onClose();
    };

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.modalContainer}>
                <Text style={styles.modalHeader}>Edit Event</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={editedName}
                    onChangeText={setEditedName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Description"
                    value={editedDesc}
                    onChangeText={setEditedDesc}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Date"
                    value={editedData}
                    onChangeText={setEditedData}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Time"
                    value={editedTime}
                    onChangeText={setEditedTime}
                />
                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                    <Text style={styles.buttonText}>Close</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    modalHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        width: '100%',
    },
    saveButton: {
        backgroundColor: '#4caf50',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    closeButton: {
        backgroundColor: '#900',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default EditEventModal;
