import { defineStore } from "pinia";

export const useInit = defineStore("init", {
  state: () => ({
    companyData: null,
    pageData: null,
    _isEnglish: true,
    _isLoad: false,
    headerMenus: null,
    footerMenus: null,
  }),

  actions: {
    async SetCompany(company) {
      try {
        this.companyData = company;
        if (this.pageData != null) this._isLoad = true;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    async SetPage(page) {
      try {
        this.pageData = page;
        this.headerMenus = page.filter((page) => page.headerShow == true);
        this.footerMenus = page.filter((page) => page.footerShow == true);
        if (this.companyData != null) this._isLoad = true;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    async ChangeLang() {
      try {
        this._isEnglish = !this._isEnglish;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  },
});
