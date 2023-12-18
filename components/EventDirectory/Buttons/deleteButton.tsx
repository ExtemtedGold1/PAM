// import {TouchableOpacity, Text, StyleSheet} from "react-native";
// import { MaterialIcons } from '@expo/vector-icons';
// import {deleteEvent} from "../SaveEvents";
// import React from "react";
//
// interface DeleteButtonProps {
//     index: number;
//     setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
// }
//
// const DeleteButton: React.FC<DeleteButtonProps> = ({index, setEvents}) => {
//     const handleDelete = () => {
//         deleteEvent(index, setEvents);
//     }
//     return (
//         <TouchableOpacity
//             style={styles.iconButton}
//             onPress={() => handleDelete}>
//             <MaterialIcons name="delete" size={30} color="#900" />
//             <Text>delete</Text>
//         </TouchableOpacity>
//     );
// };
//
// const styles = StyleSheet.create({
//     iconButton: {
//         backgroundColor: '#fff',
//         borderStyle: 'solid',
//         borderRadius: 15,
//         borderWidth: 2,
//         borderColor: '#222',
//         textAlign: 'center',
//         width: 60,
//         alignItems: 'center',
//     },
// });
//
// export default DeleteButton;