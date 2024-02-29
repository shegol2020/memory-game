import GamePage from "./components/GamePage";
import ResultsPage from "./components/ResultsPage";

function App({images = []}) {
    const getPage = (route) => {
        switch (route) {
            case "game":
                return <GamePage images={images}/>;
            case "results":
                return (
                    <ResultsPage/>
                );
            default:
                return null;
        }
    }
    return getPage("game")
}



export default App;
