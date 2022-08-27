/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import withCounter from './HOC/withCounter';

const HoverCounter = (props) => {
    const { count, incrementCount } = props;
    return (
        <div>
            <h2 onMouseOver={incrementCount}>Hovered {count} Times</h2>
        </div>
    );
};

export default withCounter(HoverCounter);
