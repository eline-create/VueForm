
<template>
  <form
    id="app"
    @submit="checkForm"
    action="submit"
    method="post"
  >
    <p>
      <b>Cadastro Inicial</b>
    </p>
    <p>
      <label for="name">Nome</label>
      <input id="name" v-model="name" type="text" name="name" />
    </p>

    <p>
      <label for="phoneNumber">Telefone</label>
      <input
        id="phoneNumber"
        v-model.number="phoneNumber"
        type="number"
        name="phoneNumber"
      />
    </p>

    <p>
      <label for="email">Email</label>
      <input id="email" v-model="email" type="text" name="email" />
    </p>

    <p>
      <label for="password">Senha</label>
      <input id="password" v-model="password" type="password" name="password" />
    </p>
    <p>
      <input type="submit" value="Enviar" />
    </p>
  </form>
</template>

<script lang="js">
({
  el: "#app",
  data: {
    errors: [],
    name: null,
    email: null,
    phoneNumber: null,
    password: null,
  }
  computed: {
    campos: function () {
      return Number(this.phoneNumber) + Number(this.password);
    },
  },

  methods: {
    checkForm: function checkForm(e) {
      if (this.name && this.phoneNumber) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push("O nome é obrigatório.");
      } else if (!this.validName(this.name)) {
        this.errors.push("O nome digitado não consta no Banco de Dados.");  
      }
      if (!this.phoneNumber) {
        this.errors.push("O número de telefone é obrigatório.");
      } else if (!this.validphoneNumber(this.phoneNumber)) {
        this.errors.push("Digite um número válido.");
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validName: function (name) {
      var re = /[a-zA-Z]/;
      return re.test(name);
    },
    validphoneNumber: function (phoneNumber) {
      var re = /[0-9]/;
      return re.test(phoneNumber);
    },
  },
});
</script>

<style>
input {
  margin-left: 10px;
}
</style>
