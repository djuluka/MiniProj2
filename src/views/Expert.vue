<template>
  <section class="page-section">
    <b-container>
        <HeaderPage :title="expert.nome +' '+ expert.apelido" />
      <b-row>
         <b-col>
            <b-card class="overflow-hidden" style="max-width: 1540px; ">
                 <b-row>
              <b-col md="6">
                <b-card-body >
                  <b-card-text align="left">
                    <!-- Level -->
                    <i class="fas fa-mobile fa-lg ml-2"></i>
                   {{expert.telemovel}}
                    <i class="fas fa-clipboard-list fa-lg ml-2"></i>
                      {{expert.email}}
                  </b-card-text>
                  <b-card-text>
                    <b>Qualificacao:</b>
                    {{expert.qualificacao}}
                  </b-card-text>
                  <b-card-text>
                    <b>Especialidade:</b>
                    {{expert.especialidade}}
                  </b-card-text>
                  <b-card-text>
                    <b>Comentário:</b>
                    <div class="form-group">
                      <br />
                      <b-button variant="outline-success" class="mr-2">
                        <i class="fas fa-video"></i> VER VÍDEO
                      </b-button>

                      <router-link :to="{name: 'experts'}"
                        tag="b-button"
                        variant="outline-danger"
                        align="center"
                        class="mr-2">
                        <i class="fas fa-arrow-alt-circle-left"></i> VOLTAR
                      </router-link>
                    </div>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>

            </b-card>
         </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
export default {
  name: "Expert",
  components: {
    HeaderPage
  },
  data: function() {
    return {
      expert: {
        "id": "6",
        "titulo": "Dr.",
        "nome": "Amntao ",
        "apelido": "P. Fortes",
        "qualificacao": "Nivel Especialista",
        "especialidade": "Animais Selvagems",
        "foto": "",
        "telemovel": "(+351)356789",
        "telefone": "(+351)956789",
        "email": "costa.pedro@animalec.io",
        "pais": "Portugal",
        "cidade": "Beira",
        "website": "www.animalec.io",
        "endereco": "Rua 3- Bairo dos Perdidos"
      },
      comment: "",
    };
  },
  computed: {},
  methods: {
    showVideo() {},
    showComments() {},
    generateComments() {},
    setComment() {},
    getCurrentDateTime() {},
    setCurrentDateTime() {}
  },
  created() {}
};
</script>
