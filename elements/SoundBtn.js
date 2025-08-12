import { useState } from 'react';
import {TouchableOpacity, Text} from 'react-native';

let activationColor = "";
let defaultColor = "";

function SoundBtn({boxTxt}) {

    const audioSource = require('../elements/SONS_TESTE/teste1.mp3');
    const player = useAudioPlayer(audioSource);
    let playing = false;

    const handlePress = () =>{
        playing = !playing;

        if (playing) {
            player.play();
        } else {
            player.pause();
        }

        player.seekTo(0);
    };

    return (
        <TouchableOpacity 
            className="border-4 rounded-xl border-[#FC822D] justify-center p-6 w-1/5"
            onPress={handlePress}
            >
            <Text className="text-xl text-center text-[#FC822D]">{boxTxt}</Text>
        </TouchableOpacity>    
    )
}

export default SoundBtn;