import './style.scss';

const Table = (props) => {
  const { data, setTableShown } = props;

  return (
    <div className="table-container">
      <div className="shadow" onClick={() => setTableShown(false)}></div>
      <div className="table">
        <div className="header">
          <div>Tenant</div>
          <div>Start Date</div>
          <div>End Date</div>
          <div>Lease Status</div>
          <div>Primary Contact</div>
        </div>
        {data.map((rowData) => (
          <div className="row" key={rowData.id}>
            <div>{rowData.tenant}</div>
            <div>{rowData.startDate}</div>
            <div>{rowData.endDate}</div>
            <div>{rowData.leaseStatus}</div>
            <div>{rowData.primaryContact}</div>
          </div>
        ))}
      </div>
    </div>);
}

export default Table;