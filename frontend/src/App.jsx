import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>} /> {/* 홈 */}
            </Routes>
        </>
    )
}

export default App;