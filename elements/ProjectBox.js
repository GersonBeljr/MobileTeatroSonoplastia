import { useState } from 'react';
import {View} from 'react-native';
import ProjBtn from './ProjectBtn';
import NewProject from './NewProject';
import "../global.css"

function ProjectBox() {

    return (
        <View className="gap-2">
            <ProjBtn boxTxt="teste"/>
            <NewProject/>
        </View>  
    )
}

export default ProjectBox;