const navToggle = document.querySelector('.nav_toggle');
const links = document.querySelector('.links')

navToggle.addEventListener('click', function(){
    /*check list in console
    console.log(links.classList); */

    /* Manual method of toggle using add and remove method*/
/*    console.log(links.classList.contains('.show_links'));
    if (links.classList.contains('show_links')) {
        links.classList.remove('show_links');
    }
    else{
        links.classList.add('show_links');
    }
*/
    links.classList.toggle('show_links');
});