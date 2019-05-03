<template>
    <div id="tourList">
        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex d-flex xs12 sm6 md4>
                    <v-card color="red" dark>
                        <v-card-title primary class="title">{{ info.data.title }}</v-card-title>
                        <v-card-text>{{info.data.description}}</v-card-text>
                    </v-card>
                </v-flex>
                <v-flex d-flex xs12 sm6 md5>
                    <v-layout row wrap>
                        <v-flex d-flex>
                            <v-card dark tile flat color="red lighten-1">
                                <v-card-text>
                                    <img
                                        src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
                                        id="tour-img"
                                    >
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex d-flex>
                            <v-layout row wrap>
                                <v-flex d-flex xs12>
                                    <v-card color="red lighten-2" dark>
                                        <v-card-text>
                                            $ {{info.data.price.low}} -
                                            {{info.data.price.high}}
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex d-flex xs12 sm6 md3>
                    <v-card color="blue lighten-2" dark>
                        <v-card-text>
                            {{ info.data.duration.short }} -
                            {{ info.data.duration.long }}
                            hours
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>


<script>
export default {
    data: () => ({
        info: ""
    }),
    mounted() {
        this.$http
            .get("/tour/find/" + this.$route.params.id)
            .then(response => (this.info = response))
            .catch(error => alert(error))
            .finally(() => (this.loading = false));
    }
};
</script>

<style scoped>
#tour-img {
    width: 500px;
}
</style>
