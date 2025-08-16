import { useState } from 'react';
import {TouchableOpacity, Text} from 'react-native';
import { useAudioPlayer } from 'expo-audio';

let activationColor = "#FC822D";
let defaultColor = "";

function SoundBtn({boxTxt}) {

    let actualColor = defaultColor;

    const audioSource = require('../elements/SONS_TESTE/teste1.mp3');
    const player = useAudioPlayer(audioSource);
    let playing = false;

    const handlePress = () =>{
        playing = !playing;

        if (playing) {
            player.play();
            actualColor = activationColor;
        } else {
            actualColor = defaultColor;
            player.pause();
        }

        player.seekTo(0);
    };

    return (
        <TouchableOpacity 
            className={`border-4 rounded-xl border-[#FC822D] justify-center p-6 w-1/5 bg-[${actualColor}]`}
            onPress={handlePress}
            >
            <Text className="text-xl text-center text-[#FC822D]">{boxTxt}</Text>
        </TouchableOpacity>    
    )
}

export default SoundBtn;