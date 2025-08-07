import { useState } from 'react';
import {Image, TouchableOpacity} from 'react-native';
import { useAudioPlayer } from 'expo-audio';

const audioSource = require('../elements/SONS_TESTE/teste1.mp3');

function MuteAllBtn() {
    const player = useAudioPlayer(audioSource);
    let playing = false;

    const handlePress = () => {
        playing = !playing;

        if(playing){
            player.play();   
        } else {
            player.pause(); 
        }
        
        player.seekTo(0);

    };


    return (
        <TouchableOpacity className="border-4 rounded-xl p-2 bg-[#FF4040]"
             onPress={handlePress}
        >
            <Image source={require('../assets/ICONS/stop.png')}  className="w-20 h-20"/>
        </TouchableOpacity>
    )
}

export default MuteAllBtn;