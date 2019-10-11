const timeSlicing = (fn,bool) =>{
    const timer;
    function slice(){
        requestAnimationFrame(slice);
    }
    if(!bool){
        timer = ()
        fn();
    }else{
        cancelAnimationFrame(timer);
    }
    requestAnimationFrame(fn);
}