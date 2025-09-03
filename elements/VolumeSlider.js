import { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';

function VolumeSlider({setVolume, volume}) {

    return (
        <View className="flex-col w-3/5 gap-2">
            <View className="flex-row gap-2">
                <Text className="text-4xl text-[#FC822D]">Volume:  </Text>
                <Text className="text-4xl text-[#FC822D]">{Math.floor(volume *100)} %</Text>
            </View>
            <Slider 
            maximumValue={1}
            value={1}

            minimumTrackTintColor="#FC822D"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#FC822D"

            onValueChange={setVolume}
            />

        </View>
    )
}

export default VolumeSlider;