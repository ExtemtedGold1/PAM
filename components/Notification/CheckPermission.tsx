import React from "react";
import * as Notifications from 'expo-notifications';

export const checkPermissions = async () => {
    const permissons = await Notifications.getPermissionsAsync();
    console.log('permisje',permissons);
}

export const requestPermissons = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted'){
        alert('Notification consent not granted');
        return;
    }
};


