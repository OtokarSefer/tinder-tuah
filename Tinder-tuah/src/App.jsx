import './App.css';
import Card from './components/UI/CARD/Card';

const nameList = [
  "John", "Jane", "Sam", "Emily", "Alex", "Chris", "Katie", "Mark", "Sarah", "Beta", "Sigma", "Dumbass", "Shithead"
  // Add more names as needed
];

const surnameList = [
  "Smith", "Johnson", "Williams", "Jones", "Brown", "Taylor", "Thomas", "Jackson", "White", "Fuckface", "Gaylord",
  "Harris"
  // Add more surnames as needed
];

const descriptionsList = [
  "lobotomized",
  "Shows aggression towards women",
  "A frequent member of the KKK",
  "loves children", 
  "has children",
  "gay and circumsized",
  "doesn't love lesbians",
  "I work in IT",
  "I'm a gamer",
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
  // Add more descriptions as needed
]

const personalTraitsList = [
  "loves children",
  "has children",
  "gay and circumcised",
  "doesn't love lesbians",
  "I work in IT",
  "I'm a gamer",
  "not allowed near dogs or cats",
  "would you like to be a part of my secondary family",
  "shower, not a grower",
  "I used to kiss the homies good night, now I'm single",
  "I'm into video games",
  "proud member of the 'I'm not racist, but...' club",
  "always makes bad decisions, but regrets nothing",
  "likes long walks in the park",
  "I prefer cats over dogs",
  "doesn't enjoy going to the gym",
  "constantly hungry"
];

const socialBehavioralList = [
  "shows aggression towards women",
  "a frequent member of the KKK",
  "I mildly dislike other cultures",
  "can’t stand authority",
  "always interrupts conversations",
  "claims to be woke, but doesn't know what it means",
  "spends hours online arguing with strangers",
  "always looking for drama",
  "doesn’t tolerate anyone who disagrees",
  "is always the victim in every situation",
  "super competitive at everything",
  "always wants to be the center of attention",
  "has a tendency to ghost people",
  "involved in drama wherever they go",
  "avoids conflict at all costs",
  "wants to be a part of every trend"
];

const physicalBodyList = [
  "12 inches",
  "grower, not a shower",
  "I’m the champion of the gayest competition: ‘gay chicken’",
  "my record is 0.12 inches",
  "I love working out, but never seem to get bigger",
  "constantly trying to lose weight, but always failing",
  "proud of my dad bod",
  "I used to be in shape, but now I’m a couch potato",
  "shower, not a grower",
  "not afraid to show my belly to strangers",
  "always wearing the same hoodie",
  "can’t grow a beard to save my life",
  "I like looking like a retard",
  "hairline is receding faster than my hopes",
  "always getting sunburned, even with sunscreen",
  "never skips leg day"
];



const imagesList = [
  "img/men/man.jpeg",
  "img/men/man2.jpeg", 
  "img/men/man3.jpeg",
  "img/men/man4.jpeg",
  "img/men/man5.jpeg",
  "img/men/man6.png", 
  "img/men/man7.png",
  "img/men/man8.png",
  "img/men/man9.png",
  "img/men/man10.png", 
  "img/men/man11.png",
  "img/men/man12.png",
];


const list = [
  { id: 1, Name: "John", Age: 25, description: "ready & single", img: "img/men/man1.jpeg" },
  { id: 2, Name: "Jane", Age: 28, description: "has a family", img: "img/men/man2.jpeg" },
  { id: 3, Name: "Sam", Age: 22, description: "single but talks to kids", img: "img/men/man3.jpeg" },
  { id: 4, Name: "Emily", Age: 35, description: "lobotomized, homosexual + gay", img: "img/men/man4.jpeg" }
  // Add more data as needed
];

function App() {
  return (
    <Card
    list={list} 
    frontname={nameList} 
    lastname={surnameList} 
    personalTraitsList={descriptionsList} 
    socialBehavioralList={socialBehavioralList} 
    physicalBodyList={physicalBodyList} 
    imagesList={imagesList}
    />
  );
}

export default App;
