import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import Heading from '../../components/Heading';
import Layout from '../../hoc/Layout/main';

const Weather = props => {
  const [loading, setLoading] = useState(false);
  const [headline, setHeadline] = useState(null);
  const [dailyForecasts, setDailyForecasts] = useState(null);

  useEffect(() => {
    setData();
  }, []);

  const getData = () => {
    return new Promise((resolve, reject) => {
      fetch(
        'https://l3adm5bsjc.execute-api.us-east-1.amazonaws.com/dev/weather'
      )
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(() => reject(null));
    });
  };

  const setData = async () => {
    setLoading(true);
    const data = await getData();
    if (data) {
      setHeadline(data.Headline);
      setDailyForecasts(...data.DailyForecasts);
    }
    setLoading(false);
  };

  const mapData = data => {
    const keysAry = Object.keys(data);
    const valuesAry = Object.values(data);

    return keysAry.map((key, idx) => (
      <ListGroupItem key={idx}>
        <strong>{`${key}: `}</strong>
        {JSON.stringify(valuesAry[idx])}
      </ListGroupItem>
    ));
  };

  const renderHeadline = () => {
    if (!headline) return null;
    return mapData(headline);
  };

  const renderDailyForecasts = () => {
    if (!dailyForecasts) return null;
    return mapData(dailyForecasts);
  };

  return (
    <Layout {...props}>
      <Heading className={'mt-3'}>{loading ? 'Loading...' : 'Weather'}</Heading>
      <ListGroup className={'mt-5'}>
        <ListGroupItem>
          <h4>Headline</h4>
        </ListGroupItem>
        {renderHeadline()}
      </ListGroup>
      <ListGroup className={'mt-5'}>
        <ListGroupItem>
          <h4>DailyForecasts</h4>
        </ListGroupItem>
        {renderDailyForecasts()}
      </ListGroup>
    </Layout>
  );
};

export default Weather;
