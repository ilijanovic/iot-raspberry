<template>
  <div>
    <Nuxt />
  </div>
</template>


<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

:root {
  --light-blue: #273c75;
  --dark-blue: #192a56;
  --border-color: #dadada;
  --shadow: 0 0 10px -6px black;
  --text-light: white;
  --text-dark: #192a56;
  --background-light: white;
}

small {
  color: grey;
  font-size: 15px;
  padding: 5px 0;
  display: block;
}

input {
  display: block;
  border: none;
  border: 1px solid var(--border-color);
  padding: 15px;
  width: 100%;
  outline: none;
  border-radius: 6px;
}
</style>
