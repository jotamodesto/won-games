import React, { memo, useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from '@buffetjs/custom';
import { Table } from '@buffetjs/core';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 18px 30px;

  p {
    margin-top: 1rem;
  }
`

const headers = [
  { name: "Name", value: "name" },
  { name: "Description", value: "description" },
  { name: "Url", value: "html_url" }
]

const HomePage = () => {

  const [rows, setRows] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('https://api.github.com/users/React-avancado/repos');

        setRows(response.data);
      } catch (error) {
        strapi.notification.error(`Oops... github API limit exceeded. ${error}`);
      }
    })();
  }, []);


  return (
    <Wrapper>
      <Header 
        title={{label: "React avançado Repositories"}}
        content="A list of repositories in React Avançado course."
      />
      <Table headers={headers} rows={rows} />
    </Wrapper>
  );
};

export default memo(HomePage);
