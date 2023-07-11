import Accordion from './components/Accordion'
import './index.css';

function App() {
  const items = [
    {id: 1,
      label: 'I want to use React',
    content: 'You are welcome to use React'},
    {id: 2,
      label: 'I want to use C++',
    content: 'You are welcome to use C++'},
    {id: 3,
      label: 'I want to use Java',
    content: 'You are welcome to use Java'}
  ]
  return <Accordion items={items} />
}

export default App;
