import { createGenerateClassName } from "@material-ui/styles";

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
  ]
};

//import axios from "axios";
//example code for how to grabs posts and dynamically create routes from them
// getRoutes: async () => {
//   // const { data: posts } = await axios.get(
//   //   'https://jsonplaceholder.typicode.com/posts'
//   // )
//   return [
//     {
//       path: '/blog',
//       getData: () => ({
//         posts,
//       }),
//       children: posts.map(post => ({
//         path: `/post/${post.id}`,
//         component: 'src/containers/Post',
//         getData: () => ({
//           post,
//         }),
//       })),
//     },
//   ]
// },
