import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { withRouter, useHistory } from 'react-router-dom';
import { Table } from 'antd';
import Button from 'react-bootstrap/Button';

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
  const history = useHistory();

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
  ];

  // Function to go back to previous page
  const onBack = e => {
    e.preventDefault();
    history.push('/nurse');
  };

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
    <div className="container">
      <Jumbotron className='form'>
        <h2>{data.vitalSigns.patient} Patient Vital Signs Information List</h2>
        <Table className='tip' columns={columns} dataSource={data.vitalSigns} pagination={false} />
        <center>
          <div className='buttonBack'><br></br>
            <Button onClick={onBack} variant="primary" type="submit">
              Back
            </Button>
          </div>
        </center>
      </Jumbotron>
    </div>
  );
}

// Export component for use in other modules
export default ShowVitalSigns;
