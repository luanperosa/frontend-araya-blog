import styled from 'styled-components';

export default styled.section`
  padding:20px;
  .title{
    h1 {
      box-shadow:0px 0px 5px rgba(70,70,70,.39);
      text-align:center;
      text-transform:uppercase;
      font-size:2em;
      width:auto;
      max-width:230px;
      margin:0 auto;
      user-select:none;
    }
  }
  .wrapper-skills{
    position:relative;
    padding:105px 0px;
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:60px;
  }
`;

export const ProgressBarStyle = styled.div`
  position:relative;
  display:flex;
  width:100%;
  max-width:300px;
  background-color:${({ theme }) => theme.dark};
  padding:2px;
  margin:0px auto;
  /* box-shadow:inset 0px 0px 5px rgba(70,70,70,.9); */
  span {
    box-shadow:0px 0px 5px rgba(70,70,70,.39);
    width:20px;
    height:10px;
    flex:1;
    margin:2px 3px;
    background-color:${({ theme }) => theme.light};
    &.active {
      background-color:${({ theme }) => theme.secundary};
    }
  }
`;

export const WrapperProgress = styled.div`
  margin:0 auto;
`;
