import React from "react";
import ReactDOM from "react-dom";

const Title = ({ course }) => <h1>{course}</h1>;

const Parrafo = (props) => {
  console.log(props);
  const { part } = props.part;
  const { number } = props.number;
  return (
    <p>
      {props.part} {props.number}
    </p>
  );
};
const SumatoriaExam = (props) => {
  const sumatoria = props.exercises1 + props.exercises2 + props.exercises3;
  return <p> Number of exercises {sumatoria}</p>;
};
const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Title course={course} />
      <Parrafo part={part1} number={exercises1} />
      <Parrafo part={part2} number={exercises2} />
      <Parrafo part={part3} number={exercises3} />
      <SumatoriaExam
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
