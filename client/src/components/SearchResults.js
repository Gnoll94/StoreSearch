export const SearchResults = (props) => {
  const { stores } = props;
  const showNoResults = stores === undefined || stores.length == 0

  const renderTableHeader = () => (
    <tr id='Header'>
        <th>#</th>
        <th>Distance in Miles</th>
        <th>Name</th>
        <th>Address</th>
    </tr>    
  )

  const renderRows = () => {
    return stores.map((store, index) => {
      console.log(store)
      const { distance, displayName, address} = store;      
      return (
          <tr key={index}>
              <td>{index+1}</td>
              <td>{distance}</td>
              <td>{displayName}</td>
              <td>{address.address}</td>
          </tr>
      )      
    })
  }

  return (
    <div className='row'>
      {showNoResults
        ? <div> No Results </div>
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