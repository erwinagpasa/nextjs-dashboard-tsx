# Nextjs Dashboard TypeScript

[![Star on GitHub](https://img.shields.io/github/stars/erwinagpasa/nextjs-dashboard-tsx.svg?style=social)](https://github.com/erwinagpasa/nextjs-dashboard-tsx)

Demo: https://velvety-flan-16e644.netlify.app



# Installing tailwindcss

1. npm install -D tailwindcss postcss autoprefixer

2. npx tailwindcss init -p 

3. Config file
```

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. add new component folder within the root then modify the config +

```
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],  
```

5. Add these tailwind directives in global.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Ref: https://www.youtube.com/watch?v=iP3DnhCUIsE



## Contributors

Thanks go to these wonderful people:

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://www.facebook.com/witchcraft.xxx"><img src="https://avatars.githubusercontent.com/u/637956?s=100&u=8257bbca6cb7bba4841ee509540328439884f8bd&v=4&fit=cover&mask=circle" width="100px;" alt="Erwin Agpasa"/></a><br />Erwin Agpasa</td>
      <td align="center"><a href="https://www.facebook.com/witchcraft.xxx"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="100px;" alt="Erwin Agpasa"/></a><br />-</td>
    </tr>    
  </tbody>
</table>
