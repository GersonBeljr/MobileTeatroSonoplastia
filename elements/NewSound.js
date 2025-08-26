import { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';


function NewSound() {


    return (
        <TouchableOpacity
            className="border-4 rounded-xl border-[#FC822D] p-6 w-1/6 flex-row justify-center"
        >
            <Image source={require('../assets/ICONS/addOrange.png')} className="w-10 h-10 self-center" />
        </TouchableOpacity>
    )
}

export default NewSound;