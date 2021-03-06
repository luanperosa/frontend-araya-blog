import styled from 'styled-components';

export const WrapperAbout = styled.div`
  margin-top:90px;
  width:100%;
  height:100vh;
  display:flex;
  flex-direction:column;
  .welcome {
    font-weight:normal;
    text-align:center;
    max-width:550px;
    font-size:1.87em;
    margin:75px auto;
  }
  .profile-content {
    max-width:600px;
    text-align:center;
    line-height:32px;
    p {
      font-size:1.28em;
    }
    span {
      display:block;
      padding:5px 0;
      margin-bottom:75px;
      font-size:1.34em;
    }
    .title-name {
      text-transform:uppercase;
    }
  }
`;

export const ProfilePicture = styled.div`
  width:250px;
  height:250px;
  background:${({ theme }) => theme.dark};
  border-radius:50%;
  margin:105px auto 30px auto;
`;
