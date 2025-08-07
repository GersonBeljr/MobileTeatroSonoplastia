import { useState } from 'react';
import {Image, TouchableOpacity} from 'react-native';

function ConfigBtn() {
    return (
        <TouchableOpacity className="border-4 rounded-xl p-2 border-[#FC822D]">
            <Image source={require('../assets/ICONS/config.png')}  className="w-20 h-20"/>
        </TouchableOpacity>
        
    )
}

export default ConfigBtn;