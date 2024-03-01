import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '../pages/home';
import siteConfig from '../shared/config/site.config';

import './styles/reset.css';
import './styles/global.css';

const client = new ApolloClient({
    uri: siteConfig.API_URL,
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <StrictMode>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </ApolloProvider>
    </StrictMode>,
);
