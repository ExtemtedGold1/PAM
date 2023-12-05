import AsyncStorage from "@react-native-async-storage/async-storage";


const saveEvents = async (event: object) => {
    try{
      let eventsArray = [];
      let eventsStorage;
      let eventsFrom = await AsyncStorage.getItem('events')
      if(eventsFrom!==null){ eventsStorage = JSON.parse(eventsFrom)}

        if(!eventsStorage){
            eventsArray.push(event)
        }else{
            eventsArray=eventsStorage;
            eventsArray.push(event);
        }

         await AsyncStorage.setItem( 'events', JSON.stringify( eventsArray))
        console.log('events:',eventsArray)
    } catch (e) {
        console.error(e);
    }
}

export default saveEvents;