import React from "react";
import MapView, { Marker } from "react-native-maps";

import { MaterialIcons } from '@expo/vector-icons';
export default function UniversityMarkers(props) {

  return props.items.map((item) => (
    <Marker
      coordinate={{
        "latitude": Number(item.latitude),
        "longitude": Number(item.longitude)
      }}
      title={item.user_id}
      key={item.id.toString()}
      description={item.user_id}
    >
      <MaterialIcons name="emoji-people" size={24} color="black" />
    </Marker>
  ));
}
