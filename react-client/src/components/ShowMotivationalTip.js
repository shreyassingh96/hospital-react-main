import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Table } from 'antd';

const GET_Tip = gql`
  {
    MotivationalTips{
      _id,
      message,
    }
  }
`;

const ListTip = () => {
  const { loading, error, data, refetch } = useQuery(GET_Tip);

  useEffect(() => {
    refetch();
  }, []);

  const columns = [
    {
      title: "Tip",
      dataIndex: "message",
      key: "message",
      render: (text, record, index) => (
        <div>
          <h3>{index + 1}. {text.charAt(0).toUpperCase() + text.slice(1)}</h3>
        </div>
      )
    }
  ]

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <Jumbotron className='form'>
    <div>
      <br /><br /><br /><h2>Tip from the nurse for the day!</h2><br />
      <div className='nursePage'>
        <Table className='tip' columns={columns} dataSource={data.MotivationalTips} pagination={false} />
      </div>
    </div>
    </Jumbotron>
  );
}

export default ListTip;
