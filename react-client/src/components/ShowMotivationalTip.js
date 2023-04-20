// Import necessary modules
import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Table } from 'antd';

// Define GraphQL query
const GET_Tip = gql`
  {
    MotivationalTips{
      _id,
      message,
    }
  }
`;

// Define component to list motivational tips
const ListTip = () => {
  // Fetch data using useQuery hook
  const { loading, error, data, refetch } = useQuery(GET_Tip);

  // Call refetch function to update data
  useEffect(() => {
    refetch();
  }, []);

  // Define table columns for displaying data
  const columns = [
    {
      dataIndex: "message",
      key: "message"
    }
  ]

  // Display data or error message
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  // Render component
  return (
    <div>
      <br /><br /><br /><center><h2>Tip of the day!</h2></center><br />
      <div className='nursePage'>
        <h1> <Table className='tip' columns={columns} dataSource={data.MotivationalTips} pagination={false} /></h1>
      </div>
    </div>
  );
}

// Export component
export default ListTip;