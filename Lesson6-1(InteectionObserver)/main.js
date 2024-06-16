const child = document.querySelector('.child');

const cb = function(entries, observer){
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            console.log('enter')
            //一回きりでやめるなら
            //observer.unobserve(entry, target)
            entry.target.classList.add('inview');
        }else{
            console.log("out view")
            entry.target.classList.remove("inview");
        }
    });
}

const options = {
    root: null,
    rootMargin: "-300px 0px",
    
};

const io = new IntersectionObserver(cb,options);

//監視したいドムを入れる
io.observe(child);
