<template>
    <div style="background: #023047; color: #ffffff">
      <b-container class="pb-11">
        <b-row class="pt-5 pb-4">
          <b-col cols="5">
            <h2>
              <strong>{{ company.name }}</strong>
            </h2>
            <p>{{ company.motive }}</p>
            <h6>{{ company.details }}</h6>
          </b-col>
          <b-col cols="3">
            <h3>Links</h3>
            <b-link href="/profile" style="color:#fff">Your Account</b-link><br />
            <b-link href="/*" style="color:#fff">Terms &amp; Conditions</b-link><br />
          
          </b-col>
          <b-col cols="4">
            <h3>Location</h3>
            <div v-html="company.location" />
            <div class="mt-3">
              <b-icon icon="phone" /> {{ company.phoneNo }} <br />
              <b-icon icon="envelope" /> {{ company.email }} <br />
            </div>
          </b-col>
        </b-row>
        <hr />
        <h5>© 2023, All rights reserved</h5>
      </b-container>
    </div>
  </template>
  
  <script>
  export default {
    name: "MyFooter",
    data() {
      return {
        company: {
          "name": "E Shopping",
        "icon": "",
        "logo": "http://localhost:8084/public/company/EShopping/logo.avif",
        "code": "EShopping",
        "email": "eshopcommerce11@gmail.com",
        "phoneNo": "+216 55491729",
        "location": "Sfax,Tunisie",
         "header": "Find what you need here",
         "motive": "Comfort and convenience.,EShopping is just a software project. It is developed to learn how to build a web application. Ive included all these data from the internet from different kind of source. And this is not a real ecommerce site.",
        "details": "Created by Ahmed 3Ltic TEL",
        },
      };
    },
   
  };
  </script>
  
  <style scoped lang="scss">
  #footer {
    bottom: 10px;
  }
  </style>
  