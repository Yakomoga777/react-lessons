export default function Painting(props) {
  const { call, autor, image, caloriesJ, alt, hard } = props;

  return (
    <div>
      <img src={image} alt={alt} width="480" />
      <h2>{call}name</h2>
      <p>
        Автор <a href=""> id - {autor}</a>
      </p>
      <p>Калорії: {caloriesJ}</p>
      <p>Складність: {hard} </p>
      <button type="button">Добавити в корзину</button>
    </div>
  );
}
