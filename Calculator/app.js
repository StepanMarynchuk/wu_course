"use strict"

function insert (num) {
    document.form.out.value= document.form.out.value+num;
}

function equal () {
    document.form.out.value= eval (document.form.out.value);
}

function clean () {
    document.form.out.value="";
}

function back () {
    let exp= document.form.out.value;
    document.form.out.value=exp.substring (0,exp.length-1);
}
