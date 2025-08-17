import { ScrollView, Text, View, Image} from 'react-native';
import "./global.css"
import SoundBtn from './elements/SoundBtn';
import NewSound from './elements/NewSound';
import BellBtn from './elements/BellBtn';
import MuteAllBtn from './elements/MuteAllBtn';
import ConfigBtn from './elements/ConfigBtn';
import ProjectBox from './elements/ProjectBox';

export default function App() {
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
            <View className="flex-row gap-5 flex-wrap p-4 ">
              <SoundBtn 
                soundAddress={require('./elements/SONS_TESTE/tiro.mp3')}
                boxTxt="Play"
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

