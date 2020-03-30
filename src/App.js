import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import TextField from './components/TextField';
import Button from './components/Button';

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/todo')
      .then((json) => json.json())
      .then((res) => {
        setState(res.data);
        console.log(res);
      });
  }, []);

  return (
    <div className='App'>
      <Card>
        {state.map((el) => (
          <TextField
            key={el._id}
            disabled
            value={el.name}
            endAdornment={<Button>Delete</Button>}
          />
        ))}
        <TextField endAdornment={<Button>Submit</Button>} />
      </Card>
    </div>
  );
}

export default App;
