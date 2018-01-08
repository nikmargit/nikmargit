$(function() {
    let topoffset = 30;

    $("body").scrollspy({
        target: ".navbar",
        offset: topoffset
    });

    let hash = $(this)
        .find("li.active a")
        .attr("href");

    if (hash !== "#headerwrap") {
        $("nav").addClass("inbody");
    } else {
        $("nav").removeClass("inbody");
    }

    $(".navbar-fixed-top").on("activate.bs.scrollspy", function() {
        let hash = $(this)
            .find("li.active a")
            .attr("href");

        if (hash !== "#headerwrap") {
            $("nav").addClass("inbody");
        } else {
            $("nav").removeClass("inbody");
        }
    });

    //Use smooth scrolling when clicking on navigation
    $(".navbar a[href*=\\#]:not([href=\\#])").click(function() {
        if (
            location.pathname.replace(/^\//, "") ===
                this.pathname.replace(/^\//, "") &&
            location.hostname === this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html,body").animate(
                    {
                        scrollTop: target.offset().top - topoffset + 2
                    },
                    400
                );
                return false;
            } //target.length
        } //click function
    }); //smooth scrolling
});
