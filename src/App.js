import React from 'react';

import { Button, Input, Textarea } from './components/Form';

import './App.css';
import colors from './components/colors';

function App() {
  return (
    <div>
      <Button
      bgColor={colors.bgColorCustom}
      color={colors.textColorCustom}
      >
        Click on me!
      </Button>
      <Input
      bgColor={colors.bgColorCustom}
      color={colors.textColorCustom}
      borderSize='1px'
      borderRadius='5px'
      borderColor={colors.textColorCustom}
       />
      <Textarea
        bgColor={colors.bgColorCustom}
        color={colors.textColorCustom}
        borderSize='2px'
        borderRadius='5px'
        borderColor={colors.textColorCustom}
      />
    </div>
  );
};

export default App;