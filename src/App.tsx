import Main from "./components/Main/Main";
import Projects from "./components/Projects/Projects";

function App() {
    return (
        <>
            <div className="border">
                <Main />
            </div>

            <div className="border border-black">
                <Projects />
            </div>

        </>
    )
}

export default App
