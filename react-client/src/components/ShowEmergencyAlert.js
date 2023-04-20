// Import required dependencies
import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Table } from 'antd';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Define the GraphQL query to fetch the emergency alerts
const GET_ALERT = gql`
  {
    emergencyAlerts{
      _id,
      alertMessage,
    }
  }
`;

// Define the ListAlert functional component
const ListAlert = () => {

  // Call the useQuery hook to fetch the emergency alerts
  const { loading, error, data, refetch } = useQuery(GET_ALERT);

  // Call the refetch function whenever the component is mounted
  useEffect(() => {
    refetch();
  }, []);

  // Define the columns for the table
  const columns = [
    {
      dataIndex: "alertMessage",
      key: "alertMessage"
    }
  ]

  // Render the component
  return (
    <div>
      {/* Display a header with an exclamation triangle icon */}
      <br /><br /><br /><center><h2>Emergency Alert <FontAwesomeIcon icon={faExclamationTriangle} color='red' /></h2></center><br />
      <div className='nursePage'>
        {/* Render the emergency alerts in a table */}
        <h1> <Table className='tip' columns={columns} dataSource={data.emergencyAlerts} pagination={false} /></h1>
      </div>
    </div>
  );
}

// Export the ListAlert component
export default ListAlert;
