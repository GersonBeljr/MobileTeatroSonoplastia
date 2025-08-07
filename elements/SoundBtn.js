import { useState } from 'react';
import {TouchableOpacity, Text} from 'react-native';

function SoundBtn({boxTxt}) {
    const  [t1, setName] = useState("");

    return (
        <TouchableOpacity className="border-4 rounded-xl border-[#FC822D] justify-center p-6 w-1/5">
            <Text className="text-xl text-center text-[#FC822D]">{boxTxt}</Text>
        </TouchableOpacity>    
    )
}

export default SoundBtn;