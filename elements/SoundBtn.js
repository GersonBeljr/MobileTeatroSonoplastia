import { useState, useEffect } from 'react';
import { Alert, TouchableOpacity, Text } from 'react-native';
import { useAudioPlayer } from 'expo-audio';

let activationColor = "#FC822D";
let defaultColor = "black";

/*
    --------- Modelo de botão ---------
    <SoundBtn 
        soundAddress={require('./elements/SONS_TESTE/tiro.mp3')}
        boxTxt="1"
        loop={false}
        configMode={configMode} 
    />

*/

function SoundBtn({ soundAddress, boxTxt, loop, configMode, volumeNow }) {

    const [isPlaying, setIsPlaying] = useState(false);
    const player = useAudioPlayer(soundAddress);
    player.loop = loop; 
    
    useEffect(() => {
        if (player) {
            player.volume = volumeNow; // agora funciona
        }
    }, [volumeNow]);

    player.addListener('playbackStatusUpdate',
        status => {
            if (status.didJustFinish) {
                setIsPlaying(!isPlaying);
            }
        })

    const canPlay = () => {
        if (isPlaying) {
            player.pause();
        } else {
            player.play();
        }
        player.seekTo(0);
        setIsPlaying(!isPlaying);
    }

    const handlePress = () => {
        if (!configMode) {
            canPlay();
        } else {
            Alert.alert("Modo configuração");
        }
    };

    return (
        <TouchableOpacity
            className={`border-4 rounded-xl border-[#FC822D] justify-center p-6 h-[90] w-1/6 overflow-hidden`}
            style={{ backgroundColor: isPlaying ? activationColor : defaultColor }}
            onPress={handlePress}
        >
            <Text
                className="text-2xl font-bold text-center text-[#FC822D]"
                style={{ color: isPlaying ? defaultColor : activationColor }}
            >{boxTxt}</Text>
        </TouchableOpacity>
    )
}

export default SoundBtn;