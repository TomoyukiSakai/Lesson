document.addEventListener('DOMContentLoaded', function () {
    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title-2');
    setTimeout(() => {
        ta.animate();
        ta2.animate();
    }, 1000);
    
});

class TextAnimation {
    constructor(el) {
        //セレクターelに一致する最初のDOM要素をthis.elに代入
        this.el = document.querySelector(el);
        //要素をトリミングし(前後の空白を削除),文字ごとに分割して配列にする
        this.chars = this.el.innerHTML.trim().split("");
        //要素の内容を分割されたテキストに置き換える
        this.el.innerHTML = this._splitText();
    }
    //_から始まるのはプライベートメソッド。ただし、見た目の問題
    //this.chars配列の各文字を<span class="char">タグで囲み、スペースを&nbsp;に置き換えた文字列を生成
    _splitText() {
        //reduceメソッドの呼び出し
        /*コールバック関数(ある関数を呼び出す際に、その関数の引数に指定される別の関数)
        (acc, curr) => {} はreduceメソッドに渡され、配列の各要素に実行される
        /.../
        は正規表現を囲うもの。\sはホワイトスペース文字を表すシーケンス。ホワイトスペースは&nbspによって削除できる。
        curr.replace(/\s+/, '&nbsp;');
        */
       /*accはアキュムレータ累積値を意味しコールバック関数が呼び出されるたびに値を蓄積する、currは現在の値。配列の現在の要素を指す。*/
        return this.chars.reduce((acc, curr) => {
            /*現在の文字を、置き換えている*/
            curr = curr.replace(/\s+/, '&nbsp;');
           　/**/
            return `${acc}<span class="char">${curr}</span>`;
        }, "")
    };
    

    animate() {
        //toggleはすでにある場合は削除、ついていない場合は付与
        this.el.classList.toggle('inview');
    }
}
