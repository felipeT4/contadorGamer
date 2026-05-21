//Importa o React e o useState
//useState serve para criar valores que podem mudar a tela
import React, {useState} from "react";
//importa componentes nativos do react native
import {
  View,                         // Caixa / Área da tela
  Text,                        // Textos
  Button,                     // Botão
  StyleSheet,                // Estilos
  TouchableOpacity          // Botão customizável
} from 'react-native';
import Jogador1 from "../App";

// Componente principal APP

export default function App(){
  // Cria um estado (variável PHP) chamado "pontos"
  // pontos = valor atual 
  // setPontos = função para alterar o valor 
  // 0 = valor inicial
  const [pontos,setPontos] = useState(0);
  const [pontos2,setPontos2] = useState(0);



 // Função para aumentar 1 ponto
  function aumentar(){
  // Pega o valor auto e soma +1
    setPontos(pontos+1);
  }


  // Função para diminuir 1 ponto
  function diminuir(){
  // Pega o valor auto e subtrai -1
    setPontos(pontos-1);
  }


 // Função para resetar o contador
  function resetar(){
    // volta o valor para 0
    setPontos(0);
  }

  if 
    (pontos < 0){
      setPontos(0)
    }

/*-------------------------------------------------*/
  function aumentar2(){
  // Pega o valor auto e soma +1
    setPontos2(pontos2+1);
  }


  // Função para diminuir 1 ponto
  function diminuir2(){
  // Pega o valor auto e subtrai -1
    setPontos2(pontos2-1);
  }


 // Função para resetar o contador
  function resetar2(){
    // volta o valor para 0
    setPontos2(0);
  }

  if 
    (pontos2 < 0){
      setPontos2(0)
    }
  
/*-----------------------------------------------*/




   // tudo que está no RETURN aparece na tela
  return(
    // View proncipal do APP
    <View style={styles.container}>
      {/* Título do APP */}
      <Text style={styles.titulo}>
        👾 Contador Gamer
      </Text>
     
     <View style={styles.t}>
        </View>

        
      <Text style={styles.titulo}>
        Jogador1
      </Text>

      
     
      {/* Mostra o valor dos pontos */}
      <Text style={styles.pontos}>{pontos}</Text> 
       <View style={styles.Jogador1}>
      
      {/* área dos botões +1 e -1 */}
      <View style={styles.areaBotoes}>
       <TouchableOpacity 
       onPress={aumentar}
       style={styles.botao}>
        <Text style={styles.textoBotao}>+1</Text>
       </TouchableOpacity>

       <TouchableOpacity 
       onPress={diminuir}
       style={styles.botao}>
        <Text style={styles.textoBotao}>-1</Text>
       </TouchableOpacity>
      </View>
      </View>

     

      <TouchableOpacity 
       onPress={resetar}
       style={styles.botaoReset}>
        <Text style={styles.textoBotao}>Reset</Text>
       </TouchableOpacity>
       

{/*-------------------------------------------------------------------------------------------*/}
   
      <Text style={styles.pontos}>{pontos2}</Text> 
      
     <View style={styles.Jogador2}>
      {/* área dos botões +1 e -1 */}
      <View style={styles.areaBotoes}>
       <TouchableOpacity 
       onPress={aumentar2}
       style={styles.botao}>
        <Text style={styles.textoBotao}>+1</Text>
       </TouchableOpacity>

       <TouchableOpacity 
       onPress={diminuir2}
       style={styles.botao}>
        <Text style={styles.textoBotao}>-1</Text>
       </TouchableOpacity>
        </View>
        </View>
    
     

      <TouchableOpacity 
       onPress={resetar2}
       style={styles.botaoReset}>
        <Text style={styles.textoBotao}>Reset</Text>
       </TouchableOpacity>
       

{/*----------------------------------------------------------------------------------------*/}




      

    </View>
  );

 }


 // ÁREA DE ESTILOS DO APP 
 const styles = StyleSheet.create({
  // ESTILO DA TELA PRINCIPAL
  container:{
    // OCUPA A TELA TODA
     
    flex:1,
    // COR DE FUNDO
    backgroundColor:'#002d4fff',
    // CENTRALIZA HORIZONTALMENTE
    alignItems:'center',
    // CENTRALIZA VERTICALMENTE
    justifyContent:'center',
    // ESPAÇAMENTO INTERNO
    padding:20,
  },
  t:{
    flexDirection: 'row'
  },
  Jogador1:{
    flexDirection: 'column',
  },
    Jogador2:{
    flexDirection: 'column',
  },


   // ESTILO DO TÍTULO
  titulo:{
    // TAMANHO DA FONTE
    fontSize:32,
    // COR DO TEXTO
    color:'#00a6ffff',
    // TEXTO EM NEGRITO
    fontWeight:'bold',
    // ESPAÇO ABAIXO
    marginBottom:30,
  },

  // ESTILO DOS PONTOS
  pontos:{
    // TAMANHO GRANDE (¬‿¬)
    fontSize:80,
    // COR BRANCA
    color:'#ffffffff',
    // ESPAÇO ABAIXO
    marginBottom:40,
    // NEGRITO
    fontWeight:'bold',
  },

 // ÁREA DOS BOTÕES 
 areaBotoes:{
    // DEIXA UM BOTÃO AO LADO DO OUTRO
    flexDirection: 'row',
    // ESPAÇO ABAIXO
    marginBottom:20,
 },
   // ESTILOS DOS BOTÕES +1 E -1
 botao:{
   // COR DO BOTÃO 
  backgroundColor:'#41de4cff',
   // ESPAÇAMENTO VERTICAL
  paddingVertical:15,
   // ESPAÇAMENTO HORIZONTAL
 paddingHorizontal:30,
  // ARREDONDA AS BORDAS
 borderRadius:12,
  // ESPAÇO ENTRE OS BOTÕES
 marginHorizontal:10,
 },

 //ESTILO DO BOTÃO RESETAR
 botaoReset:{
  // COR VERMELHA
  backgroundColor:'#d40b00ff',
  // ESPAÇAMENTOS
  paddingVertical:15,
  paddingHorizontal:40,
  // ARREDONDA AS BORDAS
  borderRadius:12,
 },

 // ESTILO DOS TEXTOS DOS BOTÕES 
 textoBotao:{
  // TAMANHO DA LETRA
  fontSize:22,
  // COR DO TEXTO
  color:'#181818ff',
  // NEGRITO
  fontWeight:'bold',

 },


 });