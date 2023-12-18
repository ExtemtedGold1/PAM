// import React, { createContext, useContext, ReactNode } from 'react';
//
// interface EventContextProps {
//     events: Event[];
//     setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
// }
//
// const EventContext = createContext<EventContextProps | undefined>(undefined);
//
// export const EventProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//     const [events, setEvents] = React.useState<Event[]>([]);
//
//     return (
//         <EventContext.Provider value={{ events, setEvents }}>
//             {children}
//         </EventContext.Provider>
//     );
// };
//
// export const useEventContext = () => {
//     const context = useContext(EventContext);
//     if (!context) {
//         throw new Error('useEventContext must be used within an EventProvider');
//     }
//     return context;
// };
