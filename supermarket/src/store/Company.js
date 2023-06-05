import CompanyService from "@/services/CompanyService.js";
export const CompanyModule = {
  namespaced: true,
  strict: true,
  state: {
    companyId: 1,
    company: {},
    
  },
  mutations: {
    SET_COMPANY(state, company) {
      state.company = company;
    },
  },
  SET_NEW_COMPANY_ID(state, id) {
    state.companyId = id;
  },
   SET_NAME(state, { Name}) {
    state.company.name = Name;
  },
  SET_NEW_COMPANY_EMAIL(state, email) {
    state.companyEmail = email;
  },
 
  actions: {

    
    async setNewCompany({ state, commit }) {
      try {
        const company = (await CompanyService.createCompany(state.commit)).data;
        commit("SET_COMPANY", company);
      } catch (error) {
        console.log(error.response.data.error);
      }
    },

    async setCompany({ state, commit }) {
      try {
        const company = (await CompanyService.getCompany(state.companyId)).data;
        commit("SET_COMPANY", company);
      } catch (error) {
        console.log(error.response.data.error);
      }
    },
    async getCompany({ state, dispatch }) {
      if (Object.keys(state.company).length == 0) {
        await dispatch("setCompany");
      }
      return state.company;
    },
    setName({ commit }, { Name }) {
      commit("SET_NAME", { Name});
    },
    setNewCompanyId({ commit }, id) {
      commit("SET_NEW_COMPANY_ID", id);
    },
    setNewCompanyEmail({ commit }, email) {
      commit("SET_NEW_COMPANY_EMAIL", email);
    },
    
    async getCompanyLogo({ state, dispatch }) {
      if (!state.company.logo) {
        await dispatch("setCompany");
      }
      return state.company.logo;
    },
    async getCompanyName({ state, dispatch }) {
      if (!state.company.name) {
        await dispatch("setCompany");
      }
      return state.company.name;
    },
  },
};
