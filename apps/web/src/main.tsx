import { StrictMode } from 'react';
// import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppRegistry } from 'react-native';

import App from './app/app';

const RouterApp = () => (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

AppRegistry.registerComponent('main', () => RouterApp);
AppRegistry.runApplication('main', {
  rootTag: document.getElementById('root'),
});

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );
