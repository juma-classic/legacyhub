(() => {
    "use strict";
    var e, r = {
            85: (e, r, a) => {
                a(692);

                function n(e) {
                    return new URLSearchParams(window.location.search).get(e)
                }
                window.getParameterByName = function(e) {
                    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                    var r = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
                    return null === r ? "" : decodeURIComponent(r[1].replace(/\+/g, " "))
                }, window.getQueryParamByName = n
            }
        },
        a = {};

    function n(e) {
        var o = a[e];
        if (void 0 !== o) return o.exports;
        var t = a[e] = {
            exports: {}
        };
        return r[e].call(t.exports, t, t.exports, n), t.exports
    }
    n.m = r, e = [], n.O = (r, a, o, t) => {
        if (!a) {
            var i = 1 / 0;
            for (u = 0; u < e.length; u++) {
                for (var [a, o, t] = e[u], c = !0, l = 0; l < a.length; l++)(!1 & t || i >= t) && Object.keys(n.O).every((e => n.O[e](a[l]))) ? a.splice(l--, 1) : (c = !1, t < i && (i = t));
                if (c) {
                    e.splice(u--, 1);
                    var s = o();
                    void 0 !== s && (r = s)
                }
            }
            return r
        }
        t = t || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > t; u--) e[u] = e[u - 1];
        e[u] = [a, o, t]
    }, n.n = e => {
        var r = e && e.__esModule ? () => e.default : () => e;
        return n.d(r, {
            a: r
        }), r
    }, n.d = (e, r) => {
        for (var a in r) n.o(r, a) && !n.o(e, a) && Object.defineProperty(e, a, {
            enumerable: !0,
            get: r[a]
        })
    }, n.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), (() => {
        var e = {
            76: 0
        };
        n.O.j = r => 0 === e[r];
        var r = (r, a) => {
                var o, t, [i, c, l] = a,
                    s = 0;
                if (i.some((r => 0 !== e[r]))) {
                    for (o in c) n.o(c, o) && (n.m[o] = c[o]);
                    if (l) var u = l(n)
                }
                for (r && r(a); s < i.length; s++) t = i[s], n.o(e, t) && e[t] && e[t][0](), e[t] = 0;
                return n.O(u)
            },
            a = self.webpackChunkderiv_charts = self.webpackChunkderiv_charts || [];
        a.forEach(r.bind(null, 0)), a.push = r.bind(null, a.push.bind(a))
    })();
    var o = n.O(void 0, [96], (() => n(85)));
    o = n.O(o)
})();