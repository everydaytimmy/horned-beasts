
function Main() {

  return <HornedBeasts title={'Narwhal'} description="Aquatic stabby boi" />

}

function HornedBeasts(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default Main;