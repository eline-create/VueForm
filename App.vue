<template>

 <form 
  id="app"
  @submit="checkForm"
  action="https://vuejs.org/"
  method="post"
  novalidate="true" >

  <p>
    <b>Cadastro Inicial</b>
    
  </p>
  <p>
  
    <label for="name">Nome</label>
    <input
      id="name"
      v-model="name"
      type="text"
      name="name"
    >
  </p>

  <p>
    <label for="phoneNumber">Telefone</label>
    <input
      id="phoneNumber"
       v-model.number="phoneNumber"
      type="number"
      name="phoneNumber"
    >
  </p>

  <p>
    <label for="email">Email</label>
    <input
      id="email"
      v-model="email"
      type="text"
      name="email"
    >
  </p>

  <p>
    <label for="password">Senha</label>
    <input
      id="password"
       v-model="password"
      type="password"
      name="password"
    >
  </p>




  <p>
    <input
      type="submit"
      value="Enviar"
    >
  </p>
 </form>

 

</template>





