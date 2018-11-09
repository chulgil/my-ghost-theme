'use strict';

import Vue from 'vue';
window.Vue = Vue;

var app = new Vue({

    el: '#app-calendar',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
});
