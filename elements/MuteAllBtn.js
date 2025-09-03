import { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useAudioPlayer } from 'expo-audio';

function MuteAllBtn({setVolume}) {

    const handlePress = () => {setVolume(0);};

    return (
        <TouchableOpacity className="border-4 rounded-xl p-2 bg-[#FF4040]"
            onPress={handlePress}
        >
            <Image source={require('../assets/ICONS/stop.png')} className="w-20 h-20" />
        </TouchableOpacity>
    )
}

export default MuteAllBtn;