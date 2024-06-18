const likeimg = document.querySelector('#like')

likeimg.addEventListener('click', function() {

    if(likeimg) {
        likeimg.classList.toggle('bg-blue-500');
    
        // likeimg.classList.toggle('p-12');
    }
})