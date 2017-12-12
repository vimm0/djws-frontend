<template>
    <div id="nav">
        <v-toolbar color="grey darken-1" dark>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-menu :nudge-width="100">
                <v-toolbar-title slot="activator">
                    <span class="brand">Web Shikshalaya</span>
                </v-toolbar-title>
                <v-list>
                    <v-list-tile v-for="item in items" :key="item" @click="">
                        <v-list-tile-title v-text="item"></v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>more_vert</v-icon>
            </v-btn>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        name: 'nav',
        data() {
            return {items: ['Home', 'Sitemap', 'Resource', 'Support']}
        },
    }
</script>
<style lang="scss">
</style>
