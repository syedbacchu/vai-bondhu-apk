
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Button } from 'react-native';


const MainScrean = ({route}) => {
    const navigation = useNavigation();
    const { itemId, otherParam } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Main Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button className="mt-2"
          title="Go to About... again"
          onPress={() =>
            navigation.navigate('Details', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        />
        <Button className="mt-2" title="Go to About" onPress={() => navigation.navigate('About')} />
        <Button className="mt-2" title="Go back" onPress={() => navigation.goBack()} />
      </View>
       
    );
}

export default MainScrean;