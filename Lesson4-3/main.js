document.addEventListener('DOMContentLoaded', function(){
    const el = document.querySelector('.animate-title');
    //トリム
    const str = el.innerHTML.trim().split("");
    
    //DOMの更新をfor文でたくさん行うため、パフォーマンスは悪い
    //let concatStr = '';

    //for(let c of str){
        //空白回避
    //    c = c.replace('','&nbsp;');
    //    concatStr += `<span class="char">${c}</span>`;
    //}

    //reduceで書き換えると・・・
    el.innerHTML = str.reduce((acc, curr)=>{
        curr = curr.replace("","&nbsp;");
        return `${acc}<span class="char">${curr}</span>`;
    },"");
});