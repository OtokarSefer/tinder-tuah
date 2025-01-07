import './App.css';
import Card from './components/UI/CARD/Card';

const nameList = [
    "John", "Jane", "Sam", "Emily", "Alex", "Chris", "Katie", "Mark", "Sarah", "Beta", 
    "Gamma", "Sigma", "Alpha", "Lily", "Ethan", "Sophia", "David", "Mia", "Lucas", "Olivia", 
    "Benjamin", "Charlotte", "Amelia", "James", "Aiden", "Isabella", "Henry", "Grace", "Zoe", 
    "Jack", "Ella"
  ];  
const surnameList = [
    "Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor",
    "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Roberts",
    "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "King", "Scott"
  ];
  

const list = [
  {  
      id: 1,
      Name: "Alpha male",
      Age: "13",
      description: 'ready & single and ready to nimgel',
      img: "img/men/man2.jpeg"
  },
  {  
      id: 2,
      Name: "Alpha male",
      Age: "18",
      description: 'ready, has a family of 4',
      img: "img/men/man3.jpeg"
  },
  {  
      id: 3,
      Name: "Alpha male",
      Age: "19",
      description: 'single but talks to kids',
      img: "img/men/man4.jpeg"
  },
  {  
      id: 4,
      Name: "Alpha male",
      Age: "92",
      description: 'lobotomized, homosexual + gay',
      img: "img/men/man2.jpeg"
  },
  {  
      id: 5,
      Name: "Alpha male",
      Age: "123",
      description: 'ready, not single and wants to get pegged',
      img: "img/men/man5.jpeg"
  },
  {  
      id: 6,
      Age: "15",
      description: 'confident & searching',
      img: "img/men/man3.jpeg"
  },
  {  
      id: 7,
      Age: "20",
      description: 'focused & independent',
      img: "img/men/man.jpeg"
  }
];

function App() {
  return (
    <Card list={list} frontname={nameList} lastname={surnameList}/>
  );
}

export default App;
