import GamePage from "./components/GamePage";
import ResultsPage from "./components/ResultsPage";
import {useState} from "react";

function App({images = [], results = []}) {
    const [result, setResult] = useState(0);
    const [page, setPage] = useState("game");

    const showResult = (counter) => {
        setResult(counter);
        setPage("results");
    }
    const handleReset = () => {
        setPage("game");
    }
    const getPage = (route) => {
        switch (route) {
            case "game":
                return <GamePage images={images} onShowResult={showResult}/>;
            case "results":
                return (
                    <ResultsPage results={results} current={result} onResetGame={handleReset}/>
                );
            default:
                return null;
        }
    }
    return getPage(page)
}



export default App;
