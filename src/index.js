import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

// import paintings from './recipes.json';

// const recipe = {
//   id: 1,
//   name: 'Smoked salmon burger',
//   time: '20',
//   servings: 6,
//   calories: 210,
//   image:
//     'https://assets.bonappetit.com/photos/62cc4eca787a907e535e8e7f/1:1/w_2580%2Cc_limit/0711-black-bean-burger-lede.jpg',
//   difficulty: 'easy',
// };

// console.log(Painting);
// const recipe = paintings[3];

//  <Painting
//    call={recipe.name}
//    autor={recipe.id}
//    image={recipe.image}
//    caloriesJ={recipe.calories}
//    alt={recipe.name}
//    hard={recipe.difficulty}
//  />;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
