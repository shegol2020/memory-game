import GamePage from "./components/GamePage";
import ResultsPage from "./components/ResultsPage";
import {useState} from "react";
import InitialPage from "./components/InitialPage";

function App({getImages, results = []}) {
    const [result, setResult] = useState(0);
    const [page, setPage] = useState("initial");
    const [images, setImages] = useState([]);
    const [backImage, setBackImage] = useState(null);
    const showResult = (counter) => {
        setResult(counter);
        setPage("results");
    }
    const handleReset = () => {
        setPage("initial");
    }

    const handleStart = (type) => {
        setPage("game")
        setBackImage(type)
        setImages(getImages(type))
    }
    const getPage = (route) => {
        switch (route) {
            case "initial":
                return <InitialPage onStart={handleStart}/>
            case "game":
                return <GamePage images={images} backImage={backImage} onShowResult={showResult}/>;
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
