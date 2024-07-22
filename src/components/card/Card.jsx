import Text from './Text';
import Body from './Body';
import Title from './Title';

const Card = (props) => <div className="card">{props.children}</div>

Card.Body = Body;
Card.Title = Title;
Card.Text = Text;

export default Card;