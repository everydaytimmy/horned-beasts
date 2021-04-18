import React from 'react';
import HornedBeasts from "./horned.js"
import BeastForm from "./beastform.js";
import CardColumns from 'react-bootstrap/CardColumns';
import item from '../data.json';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hornsArray: [],
    }
  }

  hornFilter = (hornCount) => {
    if (hornCount === isNaN) {
      this.setState({ hornsArray: [] });
    } else {
      const hornTotal = item.filter(beast => beast.horns === hornCount);
      this.setState({ hornsArray: hornTotal });
    }
  }

  render() {
    if (this.state.hornsArray.length > 0) {
      return (
        <>
          <BeastForm filter={this.hornFilter} />
          <CardColumns>
            {this.state.hornsArray.map((element) =>
              <HornedBeasts
                title={element.title}
                description={element.description}
                img={element.image_url}
                horns={element.horns}
              />)
            }
          </CardColumns>
        </>
      );
    } else {
      return (
        <>
          <BeastForm filter={this.hornFilter} />
          <CardColumns>
            {
              item.map((element, index) =>
                <HornedBeasts
                  title={element.title}
                  description={element.description}
                  img={element.image_url}
                  horns={element.horns}
                />)
            }
          </CardColumns>
        </>
      )
    }
  }
}

export default Main;

