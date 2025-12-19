import React, { useState } from 'react';

function Switch() {
  const [offn, setoffn] = useState(false);

 return (
    <div style={{  
      width: '100vw',           
      height: '100vh',          
      backgroundColor: offn ? 'white' : 'black',  
      color: offn ? 'black' : 'white',                         
    }}>
      <div>{offn ? 'свет включен' : 'свет выключен'}</div>
      <button onClick={() => setoffn(!offn)}>
        {offn ? 'Выключить' : 'Включить'}
      </button>
    </div>
  )
}

export default Switch