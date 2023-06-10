<template>
    <div>
      <ATopHeader></ATopHeader>
      <b-container class="mt-5">
      <b-row align-v="center">
        <b-col>
          <h3>Hello {{ user.firstName }} {{ user.lastName }},</h3>
          <h5>Welcome to admin dashboard</h5>
        </b-col>
       
      </b-row>
    </b-container>
    <div>
      <iframe title="rapportv2" width="1480" height="1060" src="https://app.powerbi.com/view?r=eyJrIjoiMWRmMGQyNTctZjcxNy00NGYxLWJiY2MtMThmN2M2OWM4ODZmIiwidCI6ImRiZDY2NjRkLTRlYjktNDZlYi05OWQ4LTVjNDNiYTE1M2M2MSIsImMiOjl9" frameborder="0" allowFullScreen="true"></iframe>
    </div>
      <MyFooter class="mt-5" />
    </div>
  </template>
  
  <script>
  import ATopHeader from "@/components/Admins/ATopHeader.vue";
  import MyFooter from "@/components/Common/MyFooter.vue";
  import * as pbi from "powerbi-client";

  export default {
    name: "AOverview",
    components: {
      ATopHeader,
      MyFooter,
   
    },
    data() {
      return {
         user: this.$store.state.CurrentUser.user,
          
      };
    },
    mounted () {
   const permissions = pbi.models.Permissions.All
   const config = {
     type: 'dashboard',
     tokenType: pbi.models.TokenType.Embed,
     accessToken:"true",
     embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiMWRmMGQyNTctZjcxNy00NGYxLWJiY2MtMThmN2M2OWM4ODZmIiwidCI6ImRiZDY2NjRkLTRlYjktNDZlYi05OWQ4LTVjNDNiYTE1M2M2MSIsImMiOjl9",
     id: "603104f7-5845-4adc-9536-5c972fc0ba67",
     pageView: 'fitToWidth',
     permissions: permissions,
   };

   

   let powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory);
   const dashboardContainer = document.getElementById('container');
   const dashboard = powerbi.embed(dashboardContainer, config);

   dashboard.off("loaded");
   dashboard.off("rendered");
   dashboard.on("error", function () {
     this.dashboard.off("error");
   });
  }
 };

  </script>
  
  <style lang="scss" scoped></style>
  