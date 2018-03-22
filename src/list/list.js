
import $ from 'expose-loader?$!jquery';
import _ from 'lodash';

export default class list{
     getlist(){
        $("#list").html("js添加的文字12");
        console.error("ssss");
    }
}

var l=new list();
l.getlist();


