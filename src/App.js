import Calculator from './components/Calculator';
import ClickCounter from './components/ClickCounter';
import ClockList from './components/ClockList';
import Form from './components/Form';
import HoverCounter from './components/HoverCounter';

function App() {
    const quantities = [1, 2, 3];
    return (
        <div>
            <ClockList quantities={quantities} />
            <Form />
            <br />
            <br />
            <Calculator />
            <br />
            <br />
            <ClickCounter />
            <br />
            <br />
            <HoverCounter />
        </div>
    );
}

export default App;
