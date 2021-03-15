import React from 'react'

// Modo 1
// const Book = (props) => {
//   return (
//     <article className="book">
//       <img src={props.img}></img>
//       <h1>{props.tittle}</h1>
//       <h4>{props.author}</h4>
//       {props.children}
//     </article>
//   );
// };

// Modo 2
const Book = (props) => {
    const { img, tittle, author, children } = props;
    const clickHandler = (e) => {
      console.log(e);
      console.log(e.target);
      alert("Hello world");
    };
    const complexExample = (author) => {
      console.log(author);
    };
    return (
      <article
        className="book"
        onMouseOver={() => {
          console.log({ tittle });
        }}
      >
        <img src={img}></img>
        <h1
          onClick={() => {
            console.log({ tittle });
          }}
        >
          {tittle}
        </h1>
        <h4>{author}</h4>
        {/* {children} */}
        <button type="button" onClick={clickHandler}>
          Reference example
        </button>
        <button type="button" onClick={complexExample(author)}>
          More complex example
        </button>
      </article>
    );
  };
  
  // Modo3
  // const Book = ({ img, tittle, author, children }) => {
  //   return (
  //     <article className="book">
  //       <img src={img} alt="img"></img>
  //       <h1>{tittle}</h1>
  //       <h4>{author}</h4>
  //       {children}
  //     </article>
  //   );
  // };

export default Book
