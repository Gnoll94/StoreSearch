export const SearchResults = (props) => {
  const { stores, firstRender } = props;
  const showNoResults = (stores === undefined || stores.length === 0) && !firstRender

  const renderTableHeader = () => (
    <tr id='Header'>
        <th>#</th>
        <th>Distance in Miles</th>
        <th>Name</th>
        <th>Address</th>
        <th>City</th>
        <th>State</th>                
        <th>Phone Number</th>
    </tr>    
  )

  const renderRows = () => {
    return stores.map((store, index) => {
      const { distance, displayName, address, phone} = store;      
      return (
          <tr key={index}>
              <td>{index+1}</td>
              <td>{distance}</td>
              <td>{displayName}</td>
              <td>{address.address}</td>
              <td>{address.city}</td>
              <td>{address.state}</td>             
              <td>{phone}</td>
          </tr>
      )      
    })
  }

  return (
    <div className='row'>
      {showNoResults
        ? <div className="col-12 text-center"> No Results </div>
        : 
        <table className='table table-striped table-bordered'>
          <tbody>
            {renderTableHeader()}
            {renderRows()}
          </tbody>
        </table>
      }
    </div> 
  );
}