import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 100%;

  #h {
    font-size: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Courier 10 Pitch';
  }

  svg {
    margin-right: 10px;
  }

  form {
    flex: auto;
    flex-direction: row;
    align-content: center;

    input {
      text-align: center;
    }

    button {
      margin: 3%;
      svg {
        margin-left: 10px;
      }
    }
  }

  LayoutProfile {
    flex-direction: row;
    text-justify: auto;
  }
`;
