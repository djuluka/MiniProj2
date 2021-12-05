<template>
  <b-col cols="4">
    <b-card
      :title="sponsor.name"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-5"
    >
      <b-card-text>
       <!-- <kbd> Grupo{{ animal.group }}</kbd>&nbsp;-->
        <kbd style="background-color: #6798A0">Nível {{ sponsor.level }}</kbd>
      </b-card-text>
      <b-card-text>{{sponsor.description}}</b-card-text>
      <b-card-text align="left">
        <i class="fas fa-star fa-lg" @click="evaluate()"></i>
        {{sponsor.avaliacao.length}} 
        <i class="fas fa-comment fa-lg ml-2"></i>
        {{sponsor.comentario.length}}
      </b-card-text>

      <router-link
        :to="{ name: 'sponsor', params: { sponsorId: sponsor.id }}"
        tag="b-button"
        variant="outline-success"
        align="center"
        class="mr-2"
      >
        <i class="fas fa-search"></i> ver Sponsor
      </router-link>
      <b-button variant="info" :href="'https://www.facebook.com/sharer/sharer.php?u='/*+ animal.links[0].url*/" target="_blank">
        <i class="fab fa-facebook"></i> Partilhar
      </b-button>


    </b-card>
  </b-col>
</template>

<script>
export default {
  name: "Sponsor",
  props: ["sponsor"],
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
