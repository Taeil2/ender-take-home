import './style.scss';

const data = [
  {
    tenant: 'Tenant One',
    startDate: '1/12/21',
    endDate: 'N/A',
    leaseStatus: 'Active',
    primaryContact: 'Contact One',
    id: 1
  },
  {
    tenant: 'Tenant Two',
    startDate: '1/15/20',
    endDate: '1/10/21',
    leaseStatus: 'Closed',
    primaryContact: 'Contact Two',
    id: 2
  },
  {
    tenant: 'Tenant Three',
    startDate: '5/24/18',
    endDate: '6/25/20',
    leaseStatus: 'Closed',
    primaryContact: 'Contact Three',
    id: 3
  },
]

const Card = (props) => {
  const { property, setTableData, setTableShown } = props;

  // URL endpoint is not working, so I used dummy data instead.
  const showTable = () => {
    // fetch(`https://talent.ender.com/fe-challenge/properties/${id}/leases`, {
    //   headers: {
    //     'token': 'dde70fd6-b600-43cd-b1d9-33250337b31a',
    //   },
    //   mode: 'no-cors',
    // })
    // .then(response => response.json())
    // .then(data => {
    //   setTableData(data);
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    // });

    setTableData(data)
    setTableShown(true);
  }

  return <div className="card" onClick={showTable} >
    <h1>{property.name}</h1>
    <div className="card-content">
      <div className="address-line">
        <div>{property.address}</div>
        <div className="base-rent">${property.baseRent}</div>
      </div>
      <div className="footer">
        <div>{property.sqft} sqft.</div>
        <div>${(property.sqft/property.baseRent).toFixed(2)}/sqft/mo</div>
        <div>${(property.sqft/(property.baseRent*12)).toFixed(2)}/sqft/year</div>
      </div>
    </div>
  </div>
}

export default Card;