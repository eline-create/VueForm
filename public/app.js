const { numeric } = require("vuelidate/lib/validators");


const app = new Vue({
    el: '#app',
    data: {
      errors: [],
      name: null,
      email: null,
      phoneNumber: null,
      password: null

    },
    computed: {
      campos: function () {
        return numeric(this.phoneNumber) +
        numeric(this.password)
      }

    },
  
    methods:{
      checkForm: function (e) {
        if (this.name && this.phoneNumber) {
          return true;
        }
  
        this.errors = [];
  
        if (!this.name) {
          this.errors.push('O nome é obrigatório.');
        } else if (!this.validName(this.name)) {
          this.errors.push('O nome digitado não consta no Banco de Dados.')
        }
        if (!this.phoneNumber) {
          this.errors.push('O número de telefone é obrigatório.');
        } else if (!this.validphoneNumber(this.phoneNumber)) {
          this.errors.push('Digite um número válido.') 
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
   }
  }
})