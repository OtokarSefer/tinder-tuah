import './App.css';
import Card from './components/UI/CARD/Card';

const nameList = [
    "John", "Jane", "Sam", "Emily", "Alex", "Chris", "Katie", "Mark", "Sarah", "Beta", 
    "Gamma", "Sigma", "Alpha", "Lily", "Ethan", "Sophia", "David", "Mia", "Lucas", "Olivia", 
    "Benjamin", "Charlotte", "Amelia", "James", "Aiden", "Isabella", "Henry", "Grace", "Zoe", 
    "Jack", "Mia", "Ella", "Zion", "Lana", "Raven", "Johnny", "Riley"
  ];  
const surnameList = [
    "Smith", "Johnson", "Williams", "Jones", "Brown", "Taylor", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Roberts",
    "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "King", "Scott", "Sins", "Rhoades", "Malkova", "Reid"
  ];
  
const descriptions = [
    "lobotomized",
    "Shows agression towards wome",
    "A frequent member in the kkk",
    "loves children",
    "has children",
    "gay",
    "lesbian",
    "i like bdsm",
    "i work in IT",
    "im a gamer",
    "not allowed near dogs or cats",
    "not allowed near children",
    "would you like to be a part of my secondary family",
    "12 inches",
    "grower, not a shower",
    "shower, not a grower",
    "i mildly racist",
    "0.12 inches is my record...",
    "im the chapion of the gayeest competitoin: 'football'.",
    "I loved horses when i was little, now im scared of them"
]

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
