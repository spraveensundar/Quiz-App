import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


const shuffleArray= (array) =>{
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}


const Quiz = ({navigation}) => {

  const [questions ,setQuestions] = useState();
  const[ques, setQues] = useState(0);
  const[options, setOptions] = useState([]);
  const[score , setScore] = useState(0);
  const[isLoading, setisLoading] = useState(false);

  const getQuiz = async () =>{
    setisLoading(true);
    const url ="https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple&encode=url3986";
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    setOptions(generateOptionsSuffle(data.results[0]));
    setisLoading(false);
  }

  const handelPressed =() =>{
    setQues(ques+1);
    setOptions(generateOptionsSuffle(questions[ques+1]))
  }


  const generateOptionsSuffle = (_questions) =>{

    const options = [..._questions.incorrect_answers]

    options.push(_questions.correct_answer)

    shuffleArray(options)

    return options;
  }


  const selected =(_option) =>{

    if(_option===questions[ques].correct_answer){
      setScore(score+10)
    }
    if(ques!==9){
      setQues(ques+1);
      setOptions(generateOptionsSuffle(questions[ques+1]));
    }
    if(ques===9){
      handelResult()
    }

  }

  const handelResult = () =>{
    navigation.navigate('Result',{
      score:score
    })
  }


  useEffect(()=>{
    getQuiz()
  },[])

  return (
    <View style={styles.container}>
        {isLoading ? <View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:40,fontWeight:600,color:"#111"}}>Loading...</Text></View> :questions && (<View style={styles.parent}>
          <View style={styles.top}>          
            <Text style={styles.head}>Q. {decodeURIComponent(questions[ques].question)}</Text>
          </View>
          <View style={styles.options}>
              
            <TouchableOpacity style={styles.optionButton} onPress={()=> selected(options[0])}>
              <Text style={styles.option}>{decodeURIComponent(options[0])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={()=> selected(options[1])}>
              <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={()=> selected(options[2])}>
              <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={()=> selected(options[3])}>
              <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>

          {ques!==9 && <TouchableOpacity style={styles.button} onPress={handelPressed}>
                          <Text style={styles.fontStyle}>Next</Text>
                        </TouchableOpacity> }

          {ques===9 && <TouchableOpacity style={styles.button} onPress={handelResult}>
                          <Text style={styles.fontStyle}>Show Result</Text>
                        </TouchableOpacity>}
            
          </View>
        </View>)}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({

    container:{
        padding:20,
        height:"100%",
    },
    top:{
        marginVertical:16,
    },
    options:{
        marginVertical:16,
        flex:2,
    },
    bottom:{
        marginBottom:10,
        paddingVertical:16,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    head:{
        fontSize:30,
        color:"#111",
    },
    button:{
        backgroundColor:"#b100c2",
        padding:15,
        borderRadius:20
    },
    fontStyle:{
        fontSize:20,
        color:"#fff"
    },
    optionButton:{
        backgroundColor:"#b100c2",
        marginVertical:10,
        borderRadius:10,
    },
    option:{
        padding:15,
        color:"#fff",
        fontSize:20,
    },
    parent:{
        height:"100%",
    }
});