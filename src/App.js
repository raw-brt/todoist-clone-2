import React from 'react';
import { Header } from './components/layout/header';
import { Content } from './components/layout/Content';
import './App.scss';
import { ProjectsProvider, SelectedProjectProvider } from './context'

function App() {
  return (
    <SelectedProjectProvider>
        <ProjectsProvider>
          <div className="App">
            <Header />
            <Content />
          </div>
        </ProjectsProvider>
      </SelectedProjectProvider>
  );
}

export default App;
