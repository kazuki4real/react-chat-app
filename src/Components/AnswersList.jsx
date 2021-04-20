import {Answers} from "./index"

const AnswersList = (props) => {
  console.log(props);
  return (
    <div  className="c-grid__answer">
      {props.answers.map((val, index) => (
        <Answers
        key={index}
        content={val.content}
        select={props.select}
        nextId={val.nextId}
        />
      ))}
      
    </div>
  )
}

export default AnswersList;