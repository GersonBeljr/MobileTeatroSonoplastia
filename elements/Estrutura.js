import { useState } from 'react';
import {TouchableOpacity, View, Text, Alert} from 'react-native';

function Estrutura() {
    const  [t1, setName] = useState("");

    return (
        
        <View>
        
            <TouchableOpacity onPress={()=>{
                    setName("Te amor Demais");
                    Alert.alert("Meu bem");
                }
            }>
                <Text>Clique</Text>
            </TouchableOpacity>

            <Text>
                {t1}
            </Text>

        </View>       
    )
}

export default Estrutura;