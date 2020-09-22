import styled from 'styled-components';

export const GeneralProductWrapper = styled.div`
display: block;
width: 210px;
height:290px;
text-align: justify;
position: relative;
border: #fff solid 1px;
background-color:transparent;
padding: 8px 13px 4px 13px;
line-height: 6px;
font-size: 14px;

&:hover{
  border:1px solid palevioletred;

  -webkit-transition: all .2s linear;
  -moz-transition: all .2s linear;
  -o-transition: all .2s linear;
  transition: all .2s linear;

  .buy-button-mod{
    display:block;
    transform: translate3d(0, 0, 0);
  }
}

& a{
  text-decoration: none;
}

`;

export const StaticProductWrapper=styled(GeneralProductWrapper)`
  width: 180px;
  height:320px;
`;

export const BannerDetailsWrapper=styled.div`
  height:400px;
  width:90%;
  border-bottom:1px solid red;

  .store-banner-logo{
    width:100%;
    display: block;
    border-style: none;
    max-height: 280px;
    height: auto;
    position: relative;
  }

  .store-banner-details{
    text-align:left;
    padding-left:10px;
    overflow:hidden;
    height:120px;
    position:relative
  }

  .store-details-description{
    max-height:70px;
    height:auto;
    width:70%;
    text-overflow: ellipsis;
    overflow:hidden;
    word-wrap: break-word;
    position:relative;
  }

  .store-banner-address{
    height:30px;
    bottom:0;
    position:absolute;
  }
`;
