import React,{useState, useEffect} from 'react';

const End = ({results, data}) => {
    const [correctAnswer, setCorrectAnswer] = useState(0);

    useEffect(() => {
       let correct = 0;
       results.forEach((result,index) => {
           if(result.a === data[index].answer){
               correct++;
           }
       });
       setCorrectAnswer(correct);
    },[]);
    return (
        <div className="card cardp">
          <div className="card-content">
            <div className="content">
              <h3>Your Results</h3>   
              <p>{correctAnswer} of {data.length}</p>   
              <p><strong>{Math.floor((correctAnswer / data.length * 100))}%</strong></p>   
            </div>    
          </div>  
        </div>
    )
}

export default End
