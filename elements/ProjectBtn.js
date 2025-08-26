import { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import "../global.css"

function ProjBtn({ boxTxt }) {
    const [t1, setName] = useState("");

    return (
        <TouchableOpacity className="border-4 rounded-xl p-6">
            <Text className="text-xl text-center text-[#FFFFFF]">{boxTxt}</Text>
        </TouchableOpacity>
    )
}

export default ProjBtn;