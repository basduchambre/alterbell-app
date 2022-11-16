import {View, Button} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const BottomNav = ({navigation}) => {
  return (
    <View>
      <Button
        color="white"
        title="Terug naar home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default BottomNav;
