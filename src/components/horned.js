
function HornedBeasts(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <img src={props.img} />
    </div>
  );
}

export default HornedBeasts;