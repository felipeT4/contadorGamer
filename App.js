//Importação para o menu lateral funcionar
import 'react-native-gesture-handler';

//importar o container da navegação 
// ele controla todas as telas do app 
import { NavigationContainer } from '@react-navigation/native';

// importar o menu lateral (DRAWER)
import { createDrawerNavigator } from '@react-navigation/drawer';

//importar as telas
import jogador1 from './components/Jogador1';
import jogador2 from './components/Jogador2';
import jogador3 from './components/Jogador3';


// Cria o DRAWER 
const Drawer = createDrawerNavigator();

//componente principal do APP
export default function Jogador1(){
  /// o que está dentro do return aparece na tela 
  return (
   // container Principal da navegação 
   <NavigationContainer>
    {/* menu lateral*/}
    <Drawer.Navigator>
      {/*tela do jogador1*/}
      <Drawer.Screen 
      // nome que aparece no menu
      name="Jogador 1"
      // componente que será aberto
      component={jogador1}

      
      />
   
   
      <Drawer.Screen 
      // nome que aparece no menu
      name="Jogador 2"
      // componente que será aberto
      component={jogador2}

      
      />

      <Drawer.Screen 
      // nome que aparece no menu
      name="Jogador 3"
      // componente que será aberto
      component={jogador3}

      
      />
  
     </Drawer.Navigator>
   </NavigationContainer> 
  );
}



