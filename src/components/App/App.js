import { useState } from "react";
import Game from "../Game";
import Header from "../Header";
function App() {
    const [_, update] = useState(0);

    function handleReStart() {
        // force update
        update((v) => !v);
    }
    return (
        <div className="wrapper">
            <Header />

            <div className="game-wrapper">
                {/* change key to force update */}
                <Game key={_} handleReStart={handleReStart} />
            </div>
        </div>
    );
}

export default App;
