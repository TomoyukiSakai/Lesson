document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#btn');
    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title-2');
    ta.animate();
    ta2.animate();
    btn.addEventListener('click', ta.animate.bind(ta));
    /*
    代替の方法
    btn.addEventListener('click',fuction(){
        ta.animate()
    });
    */
});

//仮にここにthisを書くとグローバルオブジェクトが示される

class TextAnimation {
    constructor(el) {
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        
        //以下は学習用。本来は必要なし。
        window.setTimeout(function(){
            this.el.classList.toggle('inview');
        }.bind(this));
    }//thisを拘束してTextAnimationに紐付け

    /*
    const _that = this;
    window....

    でもOK
    */

}

/*thisは直近で囲まれたobjectを指す！*/
