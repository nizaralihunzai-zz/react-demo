import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    width: 100%;
    position: relative;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Roboto', sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
    margin-top: 70px;
    // background: #f1f2f6;
    background: white;
    // height: 100vh;
  }

  label{
    font-weight: normal !important;
  }

  
.uppercase{
    text-transform: uppercase;
}

.logo img{
  height: 100px;
  width: 100px;
}
  
  .inner-body{
    // margin: 30px 30px;
  }
   
  .box{
    background: white;
    // border: 1px solid white;
    // box-shadow: 1px 1px 10px -2px rgba(0,0,0,0.6);
    // width: 100%;
    // margin-bottom: 20px;
    // margin-top: 20px
    // padding: 20px;
  }
  
  
  
  .box-header{
    border-bottom:1px solid #ddd;
    padding: 10px 20px;
  }
  
  .box-header .heading{
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 400;
  }
  
  .box-header .heading, .box-header .right-heading{
    margin-top:10px;
  }
  
  .box-body{
  
  }
  
  .roles-box{
    margin: 20px;
    padding: 20px;
    background: white;
    border: 1px solid #ddd;
  }

  
  .btn-outline-primary{
    color: #4a99cb;
    background-color: transparent;
    background-image: none;
    border-color: #4a99cb;
  }

  .btn-outline-primary:hover {
      color: #fff;
      background-color: #4a99cb;
      border-color: #4a99cb;
  }

  .btn-outline-success{
    color: #91c640;
    background-color: transparent;
    background-image: none;
    border-color: #91c640;
  }


  .btn-outline-success:hover {
    color: #fff;
    background-color: #91c640;
    border-color: #91c640;
  }
  .btn{
    border-radius: 0;
  }

  h5, h4, h3{
    font-weight: 400;
  }

  p{
    font-size:14px;
  }
  .box p{
    font-size:12px;
  }
  
  .submit-button{
    margin-top: 20px;
    border-radius: 2px;
  }

  .mainbody{
      padding-top: 50px;
      padding-bottom: 50px;
      background: white;
  }
  .form-control{
      border-radius: 2px;
      border:2px solid #ccc;
      padding:10px;
  }

  select.form-control:not([size]):not([multiple]) {
      height: calc(2.8rem + 2px);
  }



  
`;
  