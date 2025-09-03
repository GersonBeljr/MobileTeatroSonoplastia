import { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import "../global.css"

/*
<ProjBtn 
    key={setId}
    setSelectSet={setSelectSet} 
    boxTxt={set.setName} 
/>
*/

function ProjBtn({ boxTxt, id, setSelectSet}) {
    const [t1, setName] = useState("");

    return (
        <TouchableOpacity 
            className="border-4 rounded-xl justify-center p-6 h-[90] overflow-hidden"
            onPress={() => setSelectSet(id)}
        >
            <Text className="text-xl text-center text-[#FFFFFF]">{boxTxt}</Text>
        </TouchableOpacity>
    )
}

export default ProjBtn;