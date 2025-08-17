import { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useAudioPlayer } from 'expo-audio';

let activationColor = "#FC822D";
let defaultColor = "black";

function SoundBtn({soundAddress, boxTxt ,loop}) {

    const [isPlaying, setIsPlaying] = useState(false);
    const player = useAudioPlayer(soundAddress);
    player.loop = loop;

/*
--------- Modelo de botão ---------
<SoundBtn 
  soundAddress={require('../elements/SONS_TESTE/teste1.mp3')}
  boxTxt="Play"
  loop={true/false}
/>
*/

    player.addListener('playbackStatusUpdate',
        status =>{
            if (status.didJustFinish) {
                setIsPlaying(!isPlaying);
            }
        })

    const handlePress = () =>{
        if (isPlaying) {
            player.pause();
        } else {  
            player.play();
        }
        player.seekTo(0);
        setIsPlaying(!isPlaying);
    };

    return (
        <TouchableOpacity 
            className={`border-4 rounded-xl border-[#FC822D] justify-center p-6 w-1/5`}
            style={{backgroundColor: isPlaying ? activationColor : defaultColor}}
            onPress={handlePress}
            >
            <Text 
                className="text-2xl font-bold text-center text-[#FC822D]"
                style={{color: isPlaying ? defaultColor : activationColor }}
            >{boxTxt}</Text>
        </TouchableOpacity>    
    )
}

export default SoundBtn;