import GamePage from "./components/GamePage";

function App({images = []}) {
    const getPage = (route) => {
        switch (route) {
            case "game":
                return <GamePage images={images}/>;
            case "results":
                return (
                    <p>test page</p>
                );
            default:
                return null;
        }
    }
    return getPage("results")
}



export default App;
