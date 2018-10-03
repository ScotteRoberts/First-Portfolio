<template>
    <div>
        <slot name="header"></slot>
        <main>
            <v-container fluid>
                <v-layout>
                    <!-- Left Sidebar -->
                    <v-flex xs4>
                        <slot name="contentLeft"></slot>
                    </v-flex>
                    <!-- Gap between left side bar and right content -->
                    <v-flex xs1 />
                    <!-- Right Content -->
                    <v-flex>
                        <slot name="contentRight"></slot>
                    </v-flex>
                </v-layout>
            </v-container>
        </main>
        <slot name="footer"></slot>
    </div>
</template>
