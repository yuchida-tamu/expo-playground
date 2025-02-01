import { NativeModule, requireNativeModule } from 'expo';
import React from 'react';
import { Button, Text, View } from 'react-native';
import Location from "../modules/significant-location-change";

type LocationEvent = {
  longitude: number;
  latitude: number;
}

type LocationModuleEvents = {
  onLocationUpdate: (event: LocationEvent) => void;
}

declare class LocationModule extends NativeModule<LocationModuleEvents> {}
const Locatio = requireNativeModule<LocationModule>('SignificantLocationChange');

Locatio.addListener<LocationModule>('onLocationUpdate', (event) => {
  console.log(event);
});

export default function DebugScreen() {
  
    return (
    <View>
      <Text>Debug</Text>
      <Button title='Start Tracking' onPress={() => Location.startMonitoring()} />
        <Button title='Request' onPress={() => Location.requestPermission()} />
           <Button title='Stop' onPress={() => Location.stopMonitoring()} />
    </View>
  );
}