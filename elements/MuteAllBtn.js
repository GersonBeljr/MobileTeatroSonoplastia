import { useState } from 'react';
import {Image, TouchableOpacity} from 'react-native';
import { useAudioPlayer } from 'expo-audio';

const audioSource = require('../elements/SONS_TESTE/teste1.mp3');

function MuteAllBtn() {
    const player = useAudioPlayer(audioSource);

    const handlePressIn = () => {
        player.seekTo(0);
        player.play();   
    };


    return (
        <TouchableOpacity className="border-4 rounded-xl p-2 bg-[#FF4040]"
             onPressIn={handlePressIn}
        >
            <Image source={require('../assets/ICONS/stop.png')}  className="w-20 h-20"/>
        </TouchableOpacity>
    )
}

export default MuteAllBtn;