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
            <h3>Liens</h3>
            <b-link href="/profile" style="color:#fff">Mon Profile</b-link><br />
            <b-link href="/*" style="color:#fff">Terms &amp; Conditions</b-link><br />
          
          </b-col>
          <b-col cols="4">
            <h3>Localisation</h3>
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
         "header": "Trouvez ce dont vous avez besoin ici",
         "motive": "Confort et commodité.,EShopping n'est qu'un projet logiciel. Il est développé pour apprendre à créer une application Web. J'ai inclus toutes ces données provenant d'Internet à partir de différents types de sources. Et ce n'est pas un vrai site de commerce électronique.",
        "details": "Créé par Ahmed 3Ltic TEL",
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
  