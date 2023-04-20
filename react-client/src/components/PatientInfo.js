// Import necessary modules
import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Table } from 'antd';

// Define GraphQL query to fetch vital signs data
const GET_VITAL_SIGNS = gql`
  {
    vitalSigns{
      _id,
      bodyTemperature,
      heartRate,
      bloodPressure,
      respiratoryRate,
      weight,
      patient,
    }
  }
`;

// Define functional component to display vital signs information
const ShowVitalSigns = () => {
  // Fetch data from server using useQuery hook
  const { loading, error, data, refetch } = useQuery(GET_VITAL_SIGNS);

  // Define columns for Ant Design table
  const columns = [
    {
      title: 'Body Temperature',
      dataIndex: "bodyTemperature",
      key: "bodyTemperature"
    },
    {
      title: 'Heart Rate',
      dataIndex: "heartRate",
      key: "heartRate"
    },
    {
      title: 'Blood Pressure',
      dataIndex: "bloodPressure",
      key: "bloodPressure"
    },
    {
      title: 'Respiratory Rate',
      dataIndex: "respiratoryRate",
      key: "respiratoryRate"
    },
    {
      title: 'Weight',
      dataIndex: "weight",
      key: "weight"
    }
  ]

  // Call refetch function on component mount
  useEffect(() => {
    refetch();
  }, []);

  // Display loading message if data is being fetched from server
  if (loading) return <p>Loading...</p>;

  // Display error message if there is an error while fetching data
  if (error) return <p>Error :</p>;

  // Render table to display vital signs information
  return (
    <div>
      <br /><br />
      <center><h4>{data.vitalSigns.patient} Patient Vital Signs Information List</h4></center><br /><br />
      <Table className='tip' columns={columns} dataSource={data.vitalSigns} pagination={false} />
    </div>
  );
}

// Export component for use in other modules
export default ShowVitalSigns;