import './App.css';
import Card from './components/UI/CARD/Card';

const list = [
  {  
      id: 1,
      Name: "Alpha male",
      Age: "13",
      description: 'ready & single',
      img: "img/men/man2.jpeg"
  },
  {  
      id: 2,
      Name: "Alpha male",
      Age: "18",
      description: 'ready',
      img: "img/men/man3.jpeg"
  },
  {  
      id: 3,
      Name: "Alpha male",
      Age: "19",
      description: 'single',
      img: "img/men/man4.jpeg"
  },
  {  
      id: 4,
      Name: "Alpha male",
      Age: "92",
      description: 'homosexual',
      img: "img/men/man2.jpeg"
  },
  {  
      id: 5,
      Name: "Alpha male",
      Age: "123",
      description: 'ready, not single',
      img: "img/men/man5.jpeg"
  },
  {  
      id: 6,
      Name: "Beta male",
      Age: "15",
      description: 'confident & searching',
      img: "img/men/man3.jpeg"
  },
  {  
      id: 7,
      Name: "Gamma male",
      Age: "20",
      description: 'focused & independent',
      img: "img/men/man.jpeg"
  }
];

function App() {
  return (
    <Card list={list} />
  );
}

export default App;
