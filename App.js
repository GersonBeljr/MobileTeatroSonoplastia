//Elementos do React
import { ScrollView, Alert, Text, View, Image } from 'react-native';
import { useEffect, useState } from 'react';

//Estilo Native Wind
import "./global.css"

//Elementos do app
import SoundBtn from './elements/SoundBtn';
import NewSound from './elements/NewSound';
import BellBtn from './elements/BellBtn';
import MuteAllBtn from './elements/MuteAllBtn';
import ConfigBtn from './elements/ConfigBtn';
import ProjBtn from './elements/ProjectBtn';
import NewProject from './elements/NewProject';
import VolumeSlider from './elements/VolumeSlider';

//Elementos de arquivos de salvamento
import * as FileSystem from 'expo-file-system';

//Caminho do arquivo de configuração
const CONFIG_FILE = FileSystem.documentDirectory + "soundsaveconfig.json";

export default function App() {
  const [configMode, setConfigMode] = useState(false);
  const [project, setProjects] = useState(null);
  const [selectSet, setSelectSet] = useState(0);
  const [volume, setVolume] = useState(1);


  //Verificando e criar arquivo JSON de configuração
  useEffect(() => {
    const loadConfig = async () => {
      const fileInfo = await FileSystem.getInfoAsync(CONFIG_FILE);

      //await FileSystem.deleteAsync(CONFIG_FILE);
      if (!fileInfo.exists) {
        const initialData = {
          "version": "1",
          "sets": [
            {
              "setId": "0",
              "setName": "primeiro set",
              "sounds": [
                {
                  "soundId": "1",
                  "name": "1s",
                  "address": require('./elements/SONS_TESTE/tiro.mp3'),
                  "loop": false
                },
                {
                  "soundId": "2",
                  "name": "2s",
                  "address": require('./elements/SONS_TESTE/teste1.mp3'),
                  "loop": false
                }
              ]
            },
            {
              "setId": "1",
              "setName": "Segundo set",
              "sounds": [
                {
                  "soundId": "3",
                  "name": "2s",
                  "address": require('./elements/SONS_TESTE/teste1.mp3'),
                  "loop": false
                }
              ]
            },
            {
              "setId": "2",
              "setName": "Terceiro set",
              "sounds": [
                {
                  "soundId": "4",
                  "name": "3s",
                  "address": require('./elements/SONS_TESTE/teste2.mp3'),
                  "loop": false
                }
              ]
            },
            {
              "setId": "2",
              "setName": "Quarto set",
              "sounds": [
                {
                  "soundId": "5",
                  "name": "4s",
                  "address": require('./elements/SONS_TESTE/teste3.mp3'),
                  "loop": false
                }
              ]
            },
            {
              "setId": "2",
              "setName": "Quinto set",
              "sounds": [
                {
                  "soundId": "6",
                  "name": "5s",
                  "address": require('./elements/SONS_TESTE/testiculo.mp3'),
                  "loop": false
                }
              ]
            },
            {
              "setId": "2",
              "setName": "Sexto set",
              "sounds": [
                {
                  "soundId": "7",
                  "name": "6s",
                  "address": require('./elements/SONS_TESTE/testiculo.mp3'),
                  "loop": false
                }
              ]
            },
            {
              "setId": "2",
              "setName": "Setimo set",
              "sounds": [
                {
                  "soundId": "8",
                  "name": "7s",
                  "address": require('./elements/SONS_TESTE/testiculo.mp3'),
                  "loop": false
                }
              ]
            }
          ]
        };

        await FileSystem.writeAsStringAsync(CONFIG_FILE, JSON.stringify(initialData));
        setProjects(initialData);
      } else {
        const content = await FileSystem.readAsStringAsync(CONFIG_FILE);
        const json = JSON.parse(content);
        //Alert.alert("test" + json.sets[0].setId);
        setProjects(json);
      }
    };

    loadConfig();
  }, []);

  return (

    <View className="flex-1 flex-row bg-black">
      <View className="flex-col justify-between gap-2 p-6 w-[250px] bg-[#565656] ">
        <Text className="text-4xl text-center text-[#FFFFFF]">Projetos</Text>
        <ScrollView className="p-2 h-5/6">
          <View className="gap-2">
            {project && project.sets.map((set, setId) => (
              <ProjBtn 
                key={setId}
                id={setId}
                setSelectSet={setSelectSet} 
                boxTxt={set.setName} 
                />
            ))}
            
            <NewProject />
          </View>
        </ScrollView>
        <View className=" justify-center">
          <View className="flex-row gap-2 justify-around">
            <MuteAllBtn setVolume={setVolume}/>
            <BellBtn />
          </View>
        </View>
      </View>
      <View className="flex-col flex-1 p-10">
        <View className="flex-row justify-between">
          <View className="justify-center">
            <Text className="text-4xl text-[#FC822D]">Sons</Text>
          </View>
          <Image source={require('./assets/CTM/logoBO.jpg')} className="h-20 w-60" />
        </View>
        <View className="flex-1 justify-between">
          <ScrollView>
            <View className="flex-row gap-5 flex-wrap p-4 border-4">
              {project && project.sets[selectSet].sounds.map((sound) => (
                <SoundBtn
                  key={sound.soundId}
                  soundAddress={sound.address}
                  boxTxt={sound.name}
                  loop={sound.loop}
                  configMode={configMode}
                  volumeNow={volume}
                />
              ))}
              {configMode && <NewSound />}
            </View>
          </ScrollView>
          <View className="flex-row justify-between">
            <VolumeSlider 
              setVolume={setVolume}
              volume={volume}
            />
            <ConfigBtn
              configMode={configMode}
              setConfigMode={setConfigMode}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

