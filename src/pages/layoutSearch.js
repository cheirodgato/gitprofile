import React, { useState } from 'react';
import { FaGithubAlt, FaSearch } from 'react-icons/fa';
import { Container } from './layoutStyle';
import { LayoutProfile } from './layoutProfile';

const LayoutSearch = () => {
  const [users, setUsers] = useState('');
  function handleOnInput() {
    const fild = document.getElementById('fild');
    setUsers(document.addEventListener('button', fild.value));
  }

  return (
    <Container>
      <div>
        <FaGithubAlt />
        Git Profile
      </div>
      <form>
        <input id="fild" name={users} />
        <button
          type="button"
          onClick={(e) => {
            handleOnInput();
            e.preventDefault();
          }}
        >
          <FaSearch />
        </button>
      </form>

      <LayoutProfile user="octocat" />
    </Container>
  );
};

export default LayoutSearch;
