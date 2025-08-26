import { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import "../global.css"

function NewProject() {
    return (
        <TouchableOpacity className="border-4 rounded-xl p-6 flex-row justify-center">
            <Image source={require('../assets/ICONS/add.png')} className="w-10 h-10" />
        </TouchableOpacity>
    )
}

export default NewProject;