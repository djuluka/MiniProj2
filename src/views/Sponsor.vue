<template>
  <section class="page-section">
    <b-container>
      <HeaderPage :title="sponsor.name" />
      <b-row>
         <b-col>
            <b-card class="overflow-hidden" style="max-width: 1540px; ">
                 <b-row>
              <b-col md="6">
                <b-card-body >
                  <b-card-text align="left">
                    <!-- Level -->
                    <i class="fas fa-medal fa-lg ml-2"></i>
                   Evaluation
                    <!-- {{animal.level}} Evaluation -->
                    <i class="fas fa-star fa-lg ml-2"></i>
                   Comments
                    <!--  {{animal.evaluation.length}}  -->
                    <i class="fas fa-comment fa-lg ml-2"></i>
                    Ranking
                    <!-- {{animal.comments.length}}  -->
                    <i class="fas fa-clipboard-list fa-lg ml-2"></i>
                    {{sponsor.avaliacao}}
                  </b-card-text>
                  <b-card-text>
                    <b>Descrição:</b>
                     {{sponsor.description}}
                  </b-card-text>
                  <b-card-text>
                    <b>Level:</b>
                    <b-alert
                      show
                      variant="secondary"
                    >
                      <b> {{sponsor.level}}<!--{{comment.user.name}}--></b>
                       <!-- ({{setCurrentDateTime(comment.date)}}) -->
                      <br />
                       <!-- {{comment.body}}-->
                    </b-alert>
                  </b-card-text>
                  <b-card-text>
                    <b>Comentário:</b>
                    <div class="form-group">
                     
                      <br />
                      <b-button variant="danger" class="mr-2">
                        <i class="fas fa-comments"></i> COMENTAR
                      </b-button>
                      <b-button
                        variant="outline-success"
                        class="mr-2"
                      >
                        <i class="fas fa-video"></i> VER VÍDEO
                      </b-button>

                      <router-link
                        :to="{name: 'sponsors'}"
                        tag="b-button"
                        variant="outline-danger"
                        align="center"
                        class="mr-2"
                      >
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
  name: "Sponsor",
  components: {
    HeaderPage
  },
  data: function() {
    return {
      sponsor: {
        "id": "2",
        "name": "XPTO XzT",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        "level": "Nivel Gold",
        "avaliacao": "24",
        "comentario": "5"
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
