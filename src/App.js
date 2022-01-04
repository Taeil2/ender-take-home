import "./App.scss";

import { useEffect, useState } from 'react';

import Card from './components/Card';
import Table from './components/Table';

const data = [
  {
    name: 'Property One',
    address: 'One St, San Francisco, CA',
    baseRent: 1000,
    sqft: 500,
    id: 1,
  },
  {
    name: 'Property Two',
    address: 'Two St, San Francisco, CA',
    baseRent: 2000,
    sqft: 1000,
    id: 2,
  },
  {
    name: 'Property Three',
    address: 'Three St, San Francisco, CA',
    baseRent: 3000,
    sqft: 1500,
    id: 3,
  },
]

function App() {
  const [ cardData, setCardData ] = useState([]);
  const [ tableData, setTableData ] = useState([]);
  const [ tableShown, setTableShown ] = useState(false);

  // URL endpoint is not working, so I used dummy data instead.
  useEffect(() => {
    // fetch('https://talent.ender.com/fe-challenge/properties', {
    //   headers: {
    //     'token': 'dde70fd6-b600-43cd-b1d9-33250337b31a',
    //   },
    //   mode: 'no-cors',
    // })
    // .then(response => response.json())
    // .then(data => {
    //   setCardData(data);
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    // });

    setCardData(data);
  }, [])

  return <div className="App">
    <div className="card-list">
      {cardData.map((property) => {
        return <Card property={property} key={property.id} setTableData={setTableData} setTableShown={setTableShown} />
      })}
    </div>
    {tableShown && <Table data={tableData} setTableShown={setTableShown} />}
  </div>;
}

export default App;
