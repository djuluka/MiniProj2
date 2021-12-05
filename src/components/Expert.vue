<template>
  <b-col cols="4">
    <b-card
      :title="expert.titulo +' '+ expert.nome"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-5"
    >
      <b-card-text>
       
        <kbd style="background-color: red"> {{expert.qualificacao}}</kbd>
      </b-card-text>
      <b-card-text><!--{{animal.description}} --></b-card-text>
      <b-card-text align="left">
        <i class="fas fa-mobile fa-lg" @click="evaluate()"></i>
      {{expert.telemovel}} 
        <i class="fas fa-tty fa-lg ml-2"></i>
         {{expert.telefone}} 
      </b-card-text>

    <router-link
        :to="{ name: 'expert', params: {expertId: expert.id}}"
        tag="b-button"
        variant="outline-success"
        align="center"
        class="mr-2"
      >
        <i class="fas fa-search"></i> ver Expert
      </router-link>
      <b-button variant="info" :href="'https://www.facebook.com/sharer/sharer.php?u='/*+ animal.links[0].url*/" target="_blank">
        <i class="fab fa-facebook"></i> Partilhar
      </b-button>


    </b-card>
  </b-col>
</template>

<script>
export default {
  name: "Expert",
  props: ["expert"],
  data: function() {
    return {
      color: ""
    };
  },
  methods: {
    evaluate() {}
  },
  created() {}
};
</script>
