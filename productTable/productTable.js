import React from 'react';

export default (props) => {
  const { products } = props;
  // const [sortedField, setSortedField] = React.useState(null);
  const [sortConfig, setSortConfig] = React.useState({key: "name", direction: "descending"});

  let sortedProducts = [...products];

  const requestSort = key => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  }

  if(sortConfig !== null){
    sortedProducts.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
}


  // if(sortedField !== null){
  //   sortedProducts.sort((a, b) => {
  //     if (a.name < b.name) {
  //       return -1;
  //     }
  //     if (a.name > b.name) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  // }
  
  return (
      <table>
          <thead>
            <tr>
              <th>
                <button type="button" onClick={() => requestSort('name')}>
                  Name
                </button>
              </th>
              <th>
                <button type="button" onClick={() => requestSort('price')}>
                  Price
                </button>
              </th>
              <th>
                <button type="button" onClick={() => requestSort('stock')}>
                  In Stock
                </button>
              </th>
            </tr>
          </thead>
        <tbody>
          {sortedProducts.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };