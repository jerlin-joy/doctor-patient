import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginComponent, RegisterComponent, ChatComponent } from './components';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<LoginComponent />}
                />
                <Route
                    path='/register'
                    element={<RegisterComponent />}
                />
                <Route
                    path='/chat'
                    element={<ChatComponent />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
