const child = document.querySelector(".child");
const cb = function(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('inview')
            console.log('inview')
            //解除
            // observer.unobserve(entry.target); 
        }else{
            console.log("out view")
            entry.target.classList.remove('inview')
            
        }
    });
}

const options = {
    root: null,
    //必ずピクセルをつけること
    rootMargin: "-300px 0px",
  
};

const io = new IntersectionObserver(cb,options);
io.observe(child);