
import HornedBeasts from "./horned.js"

function Main(props) {


  return (
    <>
    {
      props.data.map( element => <HornedBeasts title={element.title} description={element.description} img={element.image_url} />)
    }
    </>
  )
}

export default Main;