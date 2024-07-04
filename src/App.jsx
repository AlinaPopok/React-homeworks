import Definitions from './componennts/Definitions';

function App() {
    const definitions = [
        {dt: 'one', dd: 'two', id: 1},
        {dt: 'another term', dd: 'another description', id: 2}
    ];
    return <Definitions arr={definitions}/>;


}

export default App;
