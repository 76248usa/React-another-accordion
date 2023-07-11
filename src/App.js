import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown';
import './index.css';
import {useState} from 'react';

function App() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option.value); 
  }

const options = [
  {label: 'Red', value: 'Red'},
  {label: 'Green', value: 'Green'},
  {label: 'Blue', value: 'Blue'}
]

  return <Dropdown options={options} 
  selection={selection} onSelect={handleSelect}  />
}

export default App;
