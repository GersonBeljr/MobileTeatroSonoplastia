import { TouchableOpacity, Image } from 'react-native';
import { useAudioPlayer } from 'expo-audio';

const audioSource = require('../assets/DEFAULT_SOUNDS/Bell.mp3');

export default function BellBtn() {
    const player = useAudioPlayer(audioSource);
    player.loop = true;

    const handlePressIn = () => {
        player.seekTo(0);
        player.play();   
    };

    const handlePressOut = () => {
        player.pause();
    };

    return (
    <TouchableOpacity
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        className="border-4 rounded-xl p-2 bg-[#FFFF5B]"
    >
        <Image
        source={require('../assets/ICONS/bell.png')}
        className="w-20 h-20"
        />
    </TouchableOpacity>
    );
}
