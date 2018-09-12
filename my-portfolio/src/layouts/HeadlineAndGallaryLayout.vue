<template>
    <div>
        <slot name="header"></slot>
        <main>
            
            <v-container 
            fluid
            >
                <slot name="pageTitle"></slot>
                <slot name="pageDescription"></slot>
                <v-layout 
                align-center
                justify-space-around
                row
                wrap
                >
                <!-- Causing problems with have 3x as many project links. -->
                    <slot name="displayItem"></slot>
                    
                </v-layout>
            </v-container>
            <slot></slot>
        </main>
        <slot name="footer"></slot>
    </div>
</template>
