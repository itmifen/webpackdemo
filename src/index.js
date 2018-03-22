import './style.css';
import logoimg from './logo.jpg';
import data from './data.json';
import printMe,{printMe2} from './print.js';

import list from "./indexdetail.js"

function component() {
    var element = document.createElement('div');
    element.innerHTML = "hello world!!"

    var logo=new Image();
    logo.src=logoimg;
    logo.width=100;
    element.appendChild(logo);

    let l=new list();
    l.getlist();

    return element;
  }

  document.body.appendChild(component());

   if (module.hot) {
       module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
     document.body.removeChild(element);
     element = component(); // 重新渲染页面后，component 更新 click 事件处理
     document.body.appendChild(element);
       })

       module.hot.accept('./list/list.js',function(){
        console.log('Accepting the updated printMe module!');
       });

     }