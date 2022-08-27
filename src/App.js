import Calculator from './components/Calculator';
import ClockList from './components/ClockList';
import Form from './components/Form';

function App() {
    const quantities = [1, 2, 3];
    return (
        <div>
            <ClockList quantities={quantities} />
            <Form />
            <br />
            <br />
            <Calculator />
        </div>
    );
}

export default App;
