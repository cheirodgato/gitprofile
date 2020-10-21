import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 100%;

  h1 {
    font-size: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Courier 10 Pitch';
  }

  svg {
    margin-right: 10px;
  }

  Form {
    flex: auto;
    flex-direction: row;
    align-content: center;

    #Input {
      text-align: center;
    }

    Button {
      margin: 3%;
      svg {
        margin-left: 10px;
      }
    }
  }

  LayoutProfile {
    flex-direction: row;
  }
`;
