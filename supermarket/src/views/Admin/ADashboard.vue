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
   <section id="container" style="height: 750px"/>
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
     embedUrl: "https://app.powerbi.com/reportEmbed?reportId=2e182efc-2f2c-4fd1-a6b4-1a1a64b48726",
     id: "dbd6664d-4eb9-46eb-99d8-5c43ba153c61",
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
  