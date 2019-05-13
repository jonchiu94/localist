<template>
    <div id="booking">
        <v-layout row wrap>
            <v-flex xs12 sm6 class="hidden-xs-only">
                <v-date-picker v-model="picker" color="blue lighten-1" header-color="blue"></v-date-picker>
            </v-flex>
            <v-flex xs12 sm6 class="hidden-xs-only">
                <v-card>
                    <v-list two-line>
                        <template>
                            <v-subheader>
                                Availability
                            </v-subheader>
                                    <v-list-tile>
                                        <v-list-tile-content>
                                            <v-list-tile-title>asdadaa</v-list-tile-title>
                                            <v-list-tile-sub-title>hi</v-list-tile-sub-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                        </template>
                        <!--<template v-for="(time, availability) in items">-->
                            <!--<v-subheader-->
                                    <!--v-if="item.header"-->
                                    <!--:key="item.header"-->
                            <!--&gt;-->
                                <!--{{ item.header }}-->
                            <!--</v-subheader>-->

                            <!--<v-divider-->
                                    <!--v-else-if="item.divider"-->
                                    <!--:key="index"-->
                                    <!--:inset="item.inset"-->
                            <!--&gt;</v-divider>-->

                            <!--<v-list-tile-->
                                    <!--v-else-->
                                    <!--:key="item.title"-->
                                    <!--avatar-->
                                    <!--@click=""-->
                            <!--&gt;-->
                                <!--<v-list-tile-avatar>-->
                                    <!--<img :src="item.avatar">-->
                                <!--</v-list-tile-avatar>-->

                                <!--<v-list-tile-content>-->
                                    <!--<v-list-tile-title v-html="item.title"></v-list-tile-title>-->
                                    <!--<v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>-->
                                <!--</v-list-tile-content>-->
                            <!--</v-list-tile>-->
                        <!--</template>-->
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                picker: new Date().toISOString().substr(0, 10),
                availability: [],
            }
        }
    }
</script>
<style scoped>
    #booking{
        padding-top: 5%;
    }
</style>