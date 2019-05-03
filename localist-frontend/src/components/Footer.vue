<template>
    <v-footer red height="auto">
        <v-layout row wrap teal lighten-2 white--text text-xs-center>
            <v-flex xs12>
                <v-card-text class="white--text px-5 subheading">
                    Anyone can become a local guide and sell their experiences. <br>
                    Anyone can quickly get a custom local tour that cannot find in traditional tourist means.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="white--text">
                    &copy; {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </v-card-text>
            </v-flex>

        </v-layout>
    </v-footer>
</template>

<script>
    export default {

    };
</script>
