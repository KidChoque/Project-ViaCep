import { useFonts,Roboto_500Medium,Roboto_700Bold } from '@expo-google-fonts/roboto';

import { StatusBar } from 'react-native';
import { Header } from './src/components/Header/Index';
import { Container } from './Style';
import { Home } from './src/screens/Home';

export default function App() {

const [fontLoaded,fontError]= useFonts({
  Roboto_500Medium,
  Roboto_700Bold
})

if (!fontLoaded && !fontError) {
  return null;
}


  return (
    <Container>

      <StatusBar/>

      <Header/>

      <Home/>

    </Container>
  );
}