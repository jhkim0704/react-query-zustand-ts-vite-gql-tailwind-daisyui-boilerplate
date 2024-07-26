import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { worker } from './mocks/browser'
import './styles.css';

async function prepare() {
  if (process.env.NODE_ENV !== 'production') {
    return worker.start({
      onUnhandledRequest: 'bypass'
    })
  }
  return Promise.resolve()
}


const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

prepare().then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
})
