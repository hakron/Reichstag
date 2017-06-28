//show the menu when you press the hamburger img
(function() {
    document.getElementById("hamburger-menu").addEventListener("click", function(e) {
        var show = document.getElementById('menu-hamburger');
        var layer = document.getElementById('menu-layer');
        var right = document.getElementsByClassName('right');
        show.style.display = 'block';
        layer.style.display = 'block';
        e.stopPropagation();
        // console.log('click ON menu-hamburger');

    })
    //click inside div dont close the menu
    document.getElementById("menu-hamburger").addEventListener("click", function(e) {
        e.stopPropagation();
    })
    // (function CloseMenuClick(e){
    //     var show = document.getElementById('menu-hamburger');
    //     var layer = document.getElementById('layer');
    //     show.style.display = 'none';
    //     layer.style.display = 'none';
    //     e.stopPropagation();
    // });

    //hide the menu when you click the cross
    // document.getElementById("cross").addEventListener("click", CloseMenuClick());
    document.getElementById("cross").addEventListener("click", function(e) {
        var show = document.getElementById('menu-hamburger');
        var layer = document.getElementById('menu-layer');
        show.style.display = 'none';
        layer.style.display = 'none';
        e.stopPropagation();
        // console.log('click ON CROSS');
    })
    //click outside menu hide the menu
    // document.body.addEventListener("click", CloseMenuClick());
    document.body.addEventListener("click", function(e) {
        var show = document.getElementById('menu-hamburger');
        var layer = document.getElementById('menu-layer');
        show.style.display = 'none';
        layer.style.display = 'none';
        // console.log('click outside');
    })

})();
