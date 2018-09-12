<template>
    <div>
        <slot name="header"></slot>
        <main>
            <v-container 
            fluid>
                <slot name="pageTitle"></slot>
                <slot name="pageDescription"></slot>
                <slot name="tutorial"></slot>
            </v-container>
            <slot></slot>
        </main>
        <slot name="footer"></slot>
    </div>
</template>
