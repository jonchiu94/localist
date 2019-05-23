<template>
    <v-layout>
        <v-flex xs2 md2>
            <ProfileNavigation></ProfileNavigation>
        </v-flex>
        <v-flex xs10 md10></v-flex>
    </v-layout>
</template>
<script>
import ProfileNavigation from "./ProfileNavigation.vue";
export default {
    data: () => ({}),
    created() {},
    components: { ProfileNavigation }
};
</script>
<style scoped>
</style>