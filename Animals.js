const Husky = (props) =>{
    return (
        <div>
            <p>{props.choices}</p>
              <ul>
                <li>is cute: {props.isCute ? "yes" : "no" }</li>
              </ul>
        </div>
      
            
        
    )
    
}