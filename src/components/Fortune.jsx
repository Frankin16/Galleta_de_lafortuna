const FortunePhrase = ({ data, textColor }) => {
    //const { data } = props
  
    /*
      props = {
          data : {
  
          }
      }
      */
    //Destructuring de objetos
    /*
     const infoObject= {
          age : 34,
          favoriteColor : "Negro",
          favoriteBand : "Megadeth" 
     }
  
     const { favoriteBand, age } = infoObject
     console.log( favoriteBand, age )
      */
  
    return (
      <article className="phrase" style={{ color: textColor }}>
        <h2>
          {data.phrase}
        </h2>
        
        <div className="author">
          <p>
            {data.author}
          </p>
        </div>
      </article>
    );
  };
  
  export default FortunePhrase;
  
