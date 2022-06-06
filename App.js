import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Rede Social - Encontros no Senac</Text>
      <Text>Você tem um projeto Integrador?</Text>
      <Text>Quer envolver novas áreas?</Text>
      <Text>Então vamos encontar os alunos aqui. </Text>
      
      <FlatList 
        data={pessoas}
        renderItem={({item})=>
        <View>
          <Text>{item.nome}</Text>
          <Text>{item.curso}</Text>
          <Text>{item.periodo}</Text>
          <Text>{item.turma}</Text>
          <Text>{item.gosto}</Text>
          <Text>{item.bio}</Text>
          <Text>{item.img}</Text>
        </View>

        }
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
  },
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
    img:'./assets/miranha.png'
  },
  {
    uid:420,
    nome:'Bruno Galeazzo',
    curso:'Tecnico de informatica',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Hardware, Redes',
    bio:'mais novo membro da conferencia mundial de pods no banheiro ',
    img:'./assets/silvio.png',
  },
  
  {
    uid:69,
    nome:'sasuke',
    curso:'ninja',
    periodo:'manhã',
    turma:'ti12',
    gosto:'sofrer',
    bio:'matar um certo alguem é meu sonho',
    img:'./assets/silvio.png'
  },

  {
    uid:10,
    nome:'Washington barreto',
    curso: 'Técnico de informática',
    periodo: 'Manhã',
    turma: 'Ti10',
    gosto: 'Hardware, Back-End, Redes, C#',
    bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy.',
    img:'./assets/sherek.png',
  },

  {
    uid:850,
    name:'Daniel Lacerda',
    curso:'Técnico de Informática',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Php, Css, Design Gráfico, Games',
    bio:'Gosto de Jogar, gosto de mexer na internet, sou professor de informática, e gosto de tocar instrumentos como teclado, violão, guitarra e bateria',
    img: '',
  },
]
