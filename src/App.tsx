import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from './pages/main';
import theme from './theme';
import '@fontsource/roboto/100.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'

const App: React.FC = () => {
    return (
        <ChakraProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
            </Router>
        </ChakraProvider>
    );
}

export default App;