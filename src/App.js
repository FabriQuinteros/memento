import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import './App.css';

class Memento {
  constructor(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }
}

class Originator {
  constructor() {
    this.state = '';
  }

  setState(state) {
    this.state = state;
  }

  save() {
    return new Memento(this.state);
  }

  restore(memento) {
    this.state = memento.getState();
  }
}

class Caretaker {
  constructor() {
    this.history = [];
  }

  addMemento(memento) {
    this.history.push(memento);
  }

  undo() {
    if (this.history.length > 0) {
      return this.history.pop();
    }
    return new Memento('');
  }
}


function App() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const originatorRef = useRef(new Originator());
  const caretakerRef = useRef(new Caretaker());

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    originatorRef.current.setState(newValue);
  };

  const saveState = () => {
    const memento = originatorRef.current.save();
    caretakerRef.current.addMemento(memento);
    setOutputValue(inputValue);
  };

  const undoState = () => {
    const lastMemento = caretakerRef.current.undo();
    originatorRef.current.restore(lastMemento);
    setInputValue(originatorRef.current.state);
    setOutputValue(originatorRef.current.state);
  };

  return (
    <Container style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Implementación del Patrón Memento
      </Typography>

      <TextField
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Escribe algo..."
        fullWidth
        variant="outlined"
        margin="normal"
      />

      <Stack direction="row" spacing={2} marginBottom={2}>
        <Button variant="contained" color="primary" onClick={saveState}>
          Guardar Estado
        </Button>

        <Button variant="contained" color="secondary" onClick={undoState}>
          Deshacer
        </Button>
      </Stack>

      <Typography variant="h6" style={{ marginTop: '20px' }}>
        Estado Actual: {outputValue}
      </Typography>
    </Container>
  );
}

export default App;
