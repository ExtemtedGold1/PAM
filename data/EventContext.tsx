// import React, {createContext, useState, useContext, ReactNode} from "react";
//
// const EventContext = createContext();
//
// export const DataProvider = ({ children }:{children: ReactNode }) => {
//     const [events, setEvents] = useState([]);
//
//     const addEvent = (newEvent: Event) => {
//         setEvents([...events ,newEvent]);
//     };
//     return (
//         <EventContext.Provider value={{ events, addEvent }}>
//             {children}
//         </EventContext.Provider>
//     );
// };
//
// export const useData = () => {
//     return useContext(EventContext);
// }