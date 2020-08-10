import styled from 'styled-components';

export default styled.section`
  padding:20px;
  .title{
    h1 {
      text-align:center;
      text-transform:uppercase;
      font-size:2em;
      width:auto;
      max-width:200px;
      margin:0 auto;
    }
  }
`;

export const ProgressBarStyle = styled.div`
  display:flex;
  width:300px;
  background-color:${({ theme }) => theme.dark};
  padding:2px;
  /* box-shadow:inset 0px 0px 5px rgba(70,70,70,.9); */
  span {
    box-shadow:0px 0px 5px rgba(70,70,70,.39);
    width:20px;
    height:20px;
    flex:1;
    margin:2px 3px;
    background-color:${({ theme }) => theme.light};
    &.active {
      background-color:${({ theme }) => theme.secundary};
    }
  }
`;
