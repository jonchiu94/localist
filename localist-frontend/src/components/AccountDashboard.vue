<template>
    <div>
        <v-container fluid>
            <v-layout row>
                <v-flex md2>
                    <ProfileNavigation></ProfileNavigation>
                </v-flex>
                <v-flex md9>
                    <Account v-if="isAccount()"></Account>
                    <Profile v-else-if="isProfile()"></Profile>
                    <EditTours v-else-if="isEditTours()"></EditTours>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import ProfileNavigation from "./ProfileNavigation.vue";
import Account from "./Account.vue";
import Profile from "./Profile.vue";
import EditTours from "./EditTours.vue";

export default {
    data: () => ({
        current: "Account"
    }),
    components: { ProfileNavigation, Account, Profile, EditTours },
    methods: {
        isAccount() {
            return this.current === "Account";
        },

        isProfile() {
            return this.current === "Profile";
        },

        isEditTours() {
            return this.current === "EditTours";
        }
    }
};
</script>
