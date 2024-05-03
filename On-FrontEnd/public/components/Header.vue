<template>
  <pv-toolbar style="background-color: #FF94B0;">
      <template #start>
        <h1>OnContigo</h1>
      </template>
      <template #end>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/acerca">Acerca</a></li>
          </ul>
        </nav>
      </template>
  </pv-toolbar>
</template>


<script>
export default {
  name: 'Header'
}
</script>

<style>

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
}

nav ul li {
  margin-right: 20px; /* Espaciado entre elementos de menú */
}

nav ul li a {
  text-decoration: none;
  color: inherit;
}

h1 {
  margin: 0; /* Elimina cualquier margen predeterminado para ajustar el alineamiento */
}
</style>
