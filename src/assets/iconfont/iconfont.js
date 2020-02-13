!(function(l) {
  var e,
    d =
      '<svg><symbol id="iconemoji-copy" viewBox="0 0 1024 1024"><path d="M510.8736 989.86666667c-263.50933333 0-477.86666667-214.35733333-477.86666667-477.86666667s214.39146667-477.86666667 477.86666667-477.86666667c263.4752 0 477.86666667 214.35733333 477.86666667 477.86666667S774.38293333 989.86666667 510.8736 989.86666667zM510.8736 102.4c-225.86026667 0-409.6 183.73973333-409.6 409.6 0 225.86026667 183.73973333 409.6 409.6 409.6 225.86026667 0 409.6-183.73973333 409.6-409.6C920.4736 286.13973333 736.73386667 102.4 510.8736 102.4zM512 790.76693333c-95.1296 0-183.36426667-43.008-242.03946667-117.99893333-11.60533333-14.848-9.0112-36.28373333 5.8368-47.88906667 14.81386667-11.63946667 36.28373333-9.04533333 47.9232 5.8368 45.63626667 58.33386667 114.2784 91.78453333 188.27946667 91.78453334 74.78613333 0 143.872-34.03093333 189.50826667-93.3888 11.50293333-14.9504 32.90453333-17.78346667 47.85493333-6.28053334 14.9504 11.50293333 17.78346667 32.93866667 6.28053333 47.85493334C696.96853333 747.008 608.1536 790.76693333 512 790.76693333zM358.4 515.41333333c-28.29653333 0-51.2-22.90346667-51.2-51.2l0-68.26666666c0-28.29653333 22.90346667-51.2 51.2-51.2s51.2 22.90346667 51.2 51.2l0 68.26666666C409.6 492.47573333 386.6624 515.41333333 358.4 515.41333333zM665.6 515.41333333c-28.2624 0-51.2-22.90346667-51.2-51.2l0-68.26666666c0-28.29653333 22.9376-51.2 51.2-51.2s51.2 22.90346667 51.2 51.2l0 68.26666666C716.8 492.47573333 693.8624 515.41333333 665.6 515.41333333z"  ></path></symbol></svg>',
    t = (e = document.getElementsByTagName("script"))[
      e.length - 1
    ].getAttribute("data-injectcss");
  if (t && !l.__iconfont__svg__cssinject__) {
    l.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  !(function(e) {
    if (document.addEventListener)
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState))
        setTimeout(e, 0);
      else {
        var t = function() {
          document.removeEventListener("DOMContentLoaded", t, !1), e();
        };
        document.addEventListener("DOMContentLoaded", t, !1);
      }
    else
      document.attachEvent &&
        ((o = e),
        (i = l.document),
        (c = !1),
        (d = function() {
          try {
            i.documentElement.doScroll("left");
          } catch (e) {
            return void setTimeout(d, 50);
          }
          n();
        })(),
        (i.onreadystatechange = function() {
          "complete" == i.readyState && ((i.onreadystatechange = null), n());
        }));
    function n() {
      c || ((c = !0), o());
    }
    var o, i, c, d;
  })(function() {
    var e, t, n, o, i, c;
    ((e = document.createElement("div")).innerHTML = d),
      (d = null),
      (t = e.getElementsByTagName("svg")[0]) &&
        (t.setAttribute("aria-hidden", "true"),
        (t.style.position = "absolute"),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = "hidden"),
        (n = t),
        (o = document.body).firstChild
          ? ((i = n), (c = o.firstChild).parentNode.insertBefore(i, c))
          : o.appendChild(n));
  });
})(window);
