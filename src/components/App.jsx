import Painting from './Painting';
import recipe from '../recipes.json';
// export const App = () => {
//   return (
//     <div
//     // style={{
//     //   height: '100vh',
//     //   display: 'flex',
//     //   justifyContent: 'center',
//     //   alignItems: 'center',
//     //   fontSize: 40,
//     //   color: '#010101',
//     // }}
//     >
//       React homework template
//     </div>
//   );
// };

export function App() {
  return (
    <div>
      <Painting
        call={recipe[0].name}
        autor={recipe[0].id}
        image={recipe[0].image}
        caloriesJ={recipe[0].calories}
        alt={recipe[0].name}
        hard={recipe[0].difficulty}
      />
      <Painting
        call={recipe[1].name}
        autor={recipe[1].id}
        image={recipe[1].image}
        caloriesJ={recipe[1].calories}
        alt={recipe[1].name}
        hard={recipe[1].difficulty}
      />
    </div>
  );
}
