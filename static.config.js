import { createGenerateClassName } from "@material-ui/core/styles";

const generateClassName = createGenerateClassName();

export default {
  getSiteData: () => ({
    title: "React Static"
  }),
  plugins: [
    [
      "react-static-plugin-jss",
      {
        providerProps: {
          generateClassName
        }
      }
    ]
  ],
  siteRoot: "https://sawyerburnett.com",
  siteRootStaging: "http://localhost:5001"
};
