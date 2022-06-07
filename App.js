import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Nunito_400Regular,
  Lato_400Regular,
  Inter_900Black,
} from '@expo-google-fonts/dev';


export default function App() {

    let [fontsLoaded] = useFonts({
      Nunito_400Regular,
      Lato_400Regular,
      Inter_900Black,
    });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }else{

  return (
    <View style={estilo.container}>
      <StatusBar estilo="auto" />
      <Text style={estilo.titulo1} >Rede Social - Encontros no Senac</Text>
      <Text style={estilo.titulo2} >Você tem um projeto Integrador?</Text>
      <Text style={estilo.titulo2} >Quer envolver novas áreas?</Text>
      <Text style={estilo.titulo2} >Então vamos encontar os alunos aqui. </Text>
      <FlatList 
        data={pessoas}
        renderItem={({item})=>
        <View style={estilo.container} >
          <View>
          <Image style={estilo.img} source={item.img} />
            </View>
          <Text style={estilo.titulo1} >{item.nome}</Text>
          <Text style={estilo.titulo2}>{item.curso}</Text>
          <Text style={estilo.titulo2}>{item.periodo}</Text>
          <Text style={estilo.titulo2}>{item.turma}</Text>
          <Text style={estilo.titulo2}>{item.gosto}</Text>
          <Text style={estilo.titulo2}>{item.bio}</Text>
          
        </View>

        }
      />
      
    </View>
  );
      }
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
    margin:3,
    backgroundColor: '#e9ecef'
  },
  img:{
    width:100,
    height:150,
    alignItems:'center',
    borderRadius:150,
    marginVertical:5,
  },
  titulo1:{
    marginTop:10,
    marginBottom:1,
    fontFamily:'SansitaSwashed_700Bold',
    fontSize:20,
  },
  titulo2:{
    marginVertical:2,
    fontFamily:'OInter_900Black'
  }
});


const pessoas =[
  {
    uid: 159,
    nome: 'Danilo Soares',
    curso: 'Técnico de informática',
    periodo: 'Manhã',
    turma: 'Ti10m',
    gosto:'Php',
    bio:'Curta a vida a doida',
    img:require('./assets/miranha.png'),
  },
  {
    uid:420,
    nome:'Bruno Galeazzo',
    curso:'Tecnico de informatica',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Hardware, Redes',
    bio:'mais novo membro da conferencia mundial de pods no banheiro ',
    img:require('./assets/silvio.jpg'),
  },
  
  {
    uid:69,
    nome:'sasuke',
    curso:'ninja',
    periodo:'manhã',
    turma:'ti12',
    gosto:'sofrer',
    bio:'matar um certo alguem é meu sonho',
    img:require ('./assets/opequenino.png'),
  },

  {
    uid:10,
    nome:'Washington barreto',
    curso: 'Técnico de informática',
    periodo: 'Manhã',
    turma: 'Ti10',
    gosto: 'Hardware, Back-End, Redes, C#',
    bio: ' been the industry Lorem Ipsum is simply dummy.',
    img:require ('./assets/shrek.png')
  },

  {
    uid:850,
    name:'Daniel Lacerda',
    curso:'Técnico de Informática',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Php, Css, Design Gráfico, Games',
    bio:'Gosto de Jogar, gosto de mexer na internet, sou professor de informática, e gosto de tocar instrumentos como teclado, violão, guitarra e bateria',
    img:require ('./assets/opequenino.png')
  },
]
