import React from 'react';

import Button from './components/Button';

import './App.css';
import colors from './components/colors';

function App() {
  return (
    <div>
      <Button bgColor={colors.bgColorCustom} color={colors.textColorCustom}>
        Click on me!
      </Button>
    </div>
  );
};

export default App;