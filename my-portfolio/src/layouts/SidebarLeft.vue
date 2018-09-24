<template>
    <div>
        <slot name="header"></slot>
        <main>
            <v-container 
            fluid>
                <v-layout>
                    <v-flex>
                        <slot name="contentLeft"></slot>
                    </v-flex>
                    <v-flex>
                        <slot name="contentRight"></slot>
                    </v-flex>
                    
                </v-layout>
            </v-container>
        </main>
        <slot name="footer"></slot>
    </div>
</template>
