import React, { Fragment } from 'react';

import Form from 'components/Form';
import Card from 'components/Card';

import './App.css';

function App() {
  return (
    <Fragment>
      <main>
        <Form />
        <Card
        title='Shrimp and Chorizo Paella'
        date='Wednesday, 8th of June, 2022'
        intro='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
        showMoreContent='Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes...' />
      </main>
    </Fragment>
  );
};

export default App;