export const GTM_ID = "GTM-M9V3CPH";

export const pageview = (url: string) => {
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};
