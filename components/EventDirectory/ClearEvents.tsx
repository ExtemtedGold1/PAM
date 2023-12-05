import AsyncStorage from "@react-native-async-storage/async-storage";

export const clearAll = async () => {
    try {
        await AsyncStorage.clear();
    } catch (e){
        console.error(e);
    }

    console.warn('All events clear');
}

export const deleteEvent = async (index: number, updateState: (events: Event[]) => void) => {
    try {
        // Pobierz wydarzenia z AsyncStorage
        const eventsFromStorage = await AsyncStorage.getItem('events');
        if (eventsFromStorage !== null) {
            const parsedEvents = JSON.parse(eventsFromStorage) as Event[];

            // Sprawdź, czy indeks mieści się w zakresie poprawnych indeksów dla tablicy `parsedEvents`
            if (index >= 0 && index < parsedEvents.length) {
                // Usuń wydarzenie o określonym indeksie
                parsedEvents.splice(index, 1);

                // Zapisz zaktualizowane wydarzenia z powrotem do AsyncStorage
                await AsyncStorage.setItem('events', JSON.stringify(parsedEvents));

                // Zaktualizuj stan komponentu
                updateState(parsedEvents);
            } else {
                console.error('Invalid index for deleteEvent');
            }
        }
    } catch (e) {
        console.error(e);
    }
};