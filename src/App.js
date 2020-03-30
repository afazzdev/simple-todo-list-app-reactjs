import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';
import TextField from './components/TextField';
import Button from './components/Button';

const URL = 'https://zi-todo-list.herokuapp.com/api/v1/todo';

const initialValue = { name: '' }

function App() {
  const [state, setState] = useState([]);
  const [input, setInput] = useState(initialValue);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    axios.get(URL).then((res) => {
      setState(res.data.data);
      // console.log(res);
    });
  }, []);

  const handleDelete = (id) => {
    const newState = state.filter((el) => el._id !== id)
    console.log(id, newState)
    axios
      .delete(`${URL}/${id}`)
      .then((res) => {
        setState(newState)
        // console.log(res)
      })
      .catch((err) => console.log('err', err))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.name) return;
    setLoading(true)

    axios
      .post(URL, input)
      .then((res) => {
        // console.log(res)
        setInput(initialValue)
        setState([
          ...state,
          res.data.data
        ])
      })
      .catch((err) => console.log('err', err))
      .finally(() => setLoading(false))
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <div 
          style={{
            width: '100%',
            overflowY: 'auto',
            margin: '.5rem 0 1rem',
            paddingRight: '1rem'
          }}
        >
          {state &&
            state.map((el, index) => (
              <TextField
                key={el._id}
                disabled
                value={el.name}
                endAdornment={<Button type='button' onClick={() => handleDelete(el._id)}>Delete</Button>}
                style={{
                  margin: '1rem 0'
                }}
              />
            ))}
        </div>
        <div style={{
            positon: 'relative',
            marginTop: 'auto'
          }}
        >
          <TextField
            name='name'
            onChange={(e) => setInput({ [e.target.name]: e.target.value })}
            value={input.name}
            endAdornment={<Button type='submit'>Submit</Button>}

          />
        </div>
      </Card>
    </form>
  );
}

export default App;
