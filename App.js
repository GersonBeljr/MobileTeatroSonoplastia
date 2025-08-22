//Elementos do React
import { ScrollView, Alert, Text, View, Image} from 'react-native';
import { useEffect, useState } from 'react';

//Estilo Native Wind
import "./global.css"

//Elementos do app
import SoundBtn from './elements/SoundBtn';
import NewSound from './elements/NewSound';
import BellBtn from './elements/BellBtn';
import MuteAllBtn from './elements/MuteAllBtn';
import ConfigBtn from './elements/ConfigBtn';
import ProjectBox from './elements/ProjectBox';

//Elementos de arquivos de salvamento
import * as FileSystem from 'expo-file-system';

//Caminho do arquivo de configuração
const CONFIG_FILE = FileSystem.documentDirectory + "soundsaveconfig.json";

export default function App() {

  useEffect(() => {
  const loadConfig = async () => {
    const fileInfo = await FileSystem.getInfoAsync(CONFIG_FILE);

    if (!fileInfo.exists) {
      const initialData = { 
        "version" : "1",
        "sets" : [
          {
            "setId": "1",
            "setName": "primeiro set",
            "sonds": [
              {
                "sondId":"1",
                "name": "som teste2",
                "address": "./elements/SONS_TESTE/testiculo.mp3", 
                "loop": "false"
              }
            ]
          }
        ] 
      };

      await FileSystem.writeAsStringAsync(CONFIG_FILE, JSON.stringify(initialData));
      setProjects(initialData.sets);
    } else {
      const content = await FileSystem.readAsStringAsync(CONFIG_FILE);
      const json = JSON.parse(content);
      Alert.alert("test" + json.sets[0].sonds[0].name);
      setProjects(json.sets);
    }
  };

  loadConfig();
}, []);



  
  return (

    <View className="flex-1 flex-row bg-black">
      <View className="flex-col justify-between gap-2 p-6 w-[250px] bg-[#565656] ">
        <Text className="text-4xl text-center text-[#FFFFFF]">Projetos</Text>
        <ScrollView className="p-2 h-5/6">
          <ProjectBox/>
        </ScrollView>
        <View className=" justify-center">
          <View className="flex-row gap-2 justify-around">
            <MuteAllBtn/>
            <BellBtn/>
          </View>
        </View>
      </View>
      <View className="flex-col flex-1 p-10">
        <View className="flex-row justify-between">
          <View className="justify-center">
            <Text className="text-4xl text-[#FC822D]">Sons</Text>
          </View>
          <Image source={require('./assets/CTM/logoBO.jpg')}  className="h-20 w-60"/>
        </View>
        <View className="flex-1 justify-between">
          <ScrollView>
            <View className="flex-row gap-5 flex-wrap p-4 border-4">
              <SoundBtn 
                soundAddress={require('./elements/SONS_TESTE/testiculo.mp3')}
                boxTxt="1"
                loop={false}
              />
              <SoundBtn 
                soundAddress={require('./elements/SONS_TESTE/teste1.mp3')}
                boxTxt="2"
                loop={false}
              />
              <SoundBtn 
                soundAddress={require('./elements/SONS_TESTE/teste2.mp3')}
                boxTxt="3"
                loop={false}
              />
              <SoundBtn 
                soundAddress={require('./elements/SONS_TESTE/teste3.mp3')}
                boxTxt="4"
                loop={false}
              />
              <SoundBtn 
                soundAddress={require('./elements/SONS_TESTE/teste3.mp3')}
                boxTxt="4"
                loop={false}
              />
              <NewSound/>
            </View>
          </ScrollView>
          <View className="flex-row justify-between">
            <Text className="text-4xl text-[#FC822D]">Volume</Text>
            <ConfigBtn/>
          </View>
        </View>
      </View>      
    </View>
  );
}

