(function() {
    function hasClass(element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }

    window.addEventListener("load", function() {
        var mobileToggle = document.getElementsByClassName("nav-menu-toggle")[0];

        mobileToggle.addEventListener("click", function() {
            var collapsed = document.getElementsByClassName("nav-mobile-collapse")[0];

            if(hasClass(collapsed, "active")) {
                collapsed.className = "nav-mobile-collapse";
            } else {
                collapsed.className += " active";
            }
        });
    });
})();
