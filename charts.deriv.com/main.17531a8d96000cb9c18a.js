(() => {
    "use strict";
    var e, t = {
            85: (e, t, a) => {
                a.d(t, {
                    Ez: () => n,
                    yL: () => s
                });
                var r = a(692),
                    i = a.n(r);

                function n(e) {
                    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                    var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
                    return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
                }

                function o(e) {
                    return new URLSearchParams(window.location.search).get(e)
                }

                function s() {
                    i()(document).ready((function() {
                        window.requestAnimationFrame((function() {
                            if ("true" == o("hide-signup")) {
                                var e = document.querySelector(".deriv-right-side-nav");
                                e && (e.style.display = "none")
                            }
                        }))
                    }))
                }
                window.getParameterByName = n, window.getQueryParamByName = o
            },
            781: (e, t, a) => {
                var r = a(692),
                    i = a.n(r),
                    n = (a(358), a(415), a(85));
                a(692);
                window.$ = i(), (0, n.yL)(), i()(document).ready((function() {
                    var e, t = !1,
                        a = window.location.search,
                        r = new URLSearchParams(a).get("theme");
                    "light" !== r && "dark" !== r && (r = null !== (e = localStorage.getItem("tradingview.current_theme.name")) && void 0 !== e ? e : "light", localStorage.setItem("tradingview.current_theme.name", r));
                    "dark" === r ? (i()("body").addClass("dark-theme"), i()(".theme-toggle-dark-icon").hide()) : i()(".theme-toggle-light-icon").hide(), i()("#deriv-signup").on("click", (function() {
                        window.location.href = "https://deriv.com/signup" + a
                    })), (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (t = !0);
                    var o = ["uppercase_instrument_names", "trading_account_manager", "drawing_templates"],
                        s = (0, n.Ez)("instrument") || "R_25",
                        c = (0, n.Ez)("timePeriod") || "1440",
                        l = (0, n.Ez)("affiliates") || !1;
                    if (t && (o.push("use_localstorage_for_settings"), o.push("header_fullscreen_button"), o.push("header_screenshot")), l && (o.push("header_fullscreen_button"), o.push("header_symbol_search")), o.push("chart_property_page_timezone_sessions"), o.push("trading_options"), c && (c = c.toUpperCase()), -1 != c.indexOf("M") ? c = c.replace("M", "") : -1 != c.indexOf("H") && (c = 60 * parseInt(c.replace("H", ""))), !i().isNumeric(parseInt(c))) throw alert("Invalid timePeriod parameter passed!"), new Error("Invalid timePeriod parameter passed!");
                    i()("#tv_chart_container iframe").contents().find("#loading-indicator").show(), TradingView.actualResolution = c, TradingView.currentlyDisplayedSymbol = s;
                    var m = new Datafeeds.UDFCompatibleDatafeed,
                        d = new TradingView.widget({
                            autosize: !0,
                            symbol: s,
                            interval: TradingView.actualResolution,
                            container: "tv_chart_container",
                            datafeed: m,
                            library_path: "charting_library/",
                            locale: "en",
                            drawings_access: {
                                type: "black",
                                tools: [{
                                    name: "Regression Trend"
                                }]
                            },
                            disabled_features: o,
                            enabled_features: ["hide_object_tree_and_price_scale_exchange_label"],
                            uppercase_instrument_names: !1,
                            debug: !1,
                            theme: r,
                            studies_access: {
                                type: "black",
                                tools: [{
                                    name: "Accumulation/Distribution"
                                }, {
                                    name: "Chaikin Money Flow"
                                }, {
                                    name: "Chaikin Oscillator"
                                }, {
                                    name: "Correlation Coeff"
                                }, {
                                    name: "Ease of Movement"
                                }, {
                                    name: "Elders Force Index"
                                }, {
                                    name: "Klinger Oscillator"
                                }, {
                                    name: "Money Flow"
                                }, {
                                    name: "Net Volume"
                                }, {
                                    name: "On Balance Volume"
                                }, {
                                    name: "VWMA"
                                }, {
                                    name: "Volume"
                                }, {
                                    name: "Volume Oscillator"
                                }]
                            },
                            save_load_adapter: {
                                charts: localStorage.getItem("charts") ? JSON.parse(localStorage.getItem("charts")) : [],
                                studyTemplates: [],
                                drawingTemplates: [],
                                getAllCharts: function() {
                                    return Promise.resolve(this.charts)
                                },
                                removeChart: function(e) {
                                    this.charts = localStorage.getItem("charts") ? JSON.parse(localStorage.getItem("charts")) : [];
                                    for (var t = 0; t < this.charts.length; ++t)
                                        if (this.charts[t].id === e) return this.charts.splice(t, 1), localStorage.setItem("charts", JSON.stringify(this.charts)), Promise.resolve();
                                    return localStorage.setItem("charts", JSON.stringify(this.charts)), Promise.reject()
                                },
                                saveChart: function(e) {
                                    return this.charts = localStorage.getItem("charts") ? JSON.parse(localStorage.getItem("charts")) : [], e.id ? this.removeChart(e.id) : e.id = Math.random().toString(), e.timestamp = (new Date).valueOf(), this.charts.push(e), localStorage.setItem("charts", JSON.stringify(this.charts)), e.id
                                },
                                getChartContent: function(e) {
                                    this.charts = localStorage.getItem("charts") ? JSON.parse(localStorage.getItem("charts")) : [];
                                    for (var t = 0; t < this.charts.length; ++t)
                                        if (this.charts[t].id === e) return Promise.resolve(this.charts[t].content);
                                    return Promise.reject()
                                }
                            },
                            widgetbar: {
                                watchlist: !0,
                                watchlist_settings: {
                                    default_symbols: ["frxEURUSD", "frxGBPUSD", "frxUSDJPY", "frxAUDUSD", "R_100", "R_10", "R_75", "1HZ75V", "1HZ100V", "CRASH500", "BOOM500", "CRASH1000", "BOOM1000", "stpRNG", "stpRNG2", "JD100", "JD10", "cryBTCUSD", "cryETHUSD", "frxXAUUSD", "OTC_HSI", "OTC_SX5E"]
                                }
                            }
                        });
                    d.onChartReady((function() {
                        d.changeTheme(r).then((function() {
                            d.changeTheme(r)
                        })), document.querySelector(".theme-toggle").addEventListener("click", (function() {
                            var e = "light" === localStorage.getItem("tradingview.current_theme.name") ? "dark" : "light";
                            localStorage.setItem("tradingview.current_theme.name", e), "dark" === e ? (i()("body").addClass("dark-theme"), i()(".theme-toggle-dark-icon").hide(), i()(".theme-toggle-light-icon").show()) : (i()("body").removeClass("dark-theme"), i()(".theme-toggle-dark-icon").show(), i()(".theme-toggle-light-icon").hide()), d.changeTheme(e).then((function() {
                                d.changeTheme(e)
                            }))
                        }));
                        var e = i().jStorage.get("binary_chart_store"),
                            t = i().jStorage.get("binary_chart_template_store");
                        e && t && setTimeout((function() {
                            d.load(e), d.chart().setSymbol(e.charts[0].panes[0].sources[0].state.symbol), d.chart().applyStudyTemplate(t)
                        }), 0), d.chart().onIntervalChanged().subscribe(null, (function(e) {
                            TradingView.actualResolution = e
                        })), d.chart().onSymbolChanged().subscribe(null, (function(e) {
                            TradingView.currentlyDisplayedSymbol = e.name
                        })), window.widget = d, i()("#tv_chart_container iframe").contents().find(".compare").click((function() {
                            i()("#tv_chart_container iframe").contents().find("input.symbol-edit.with-plus.single").bindFirst("keydown", null, (function(e) {
                                if (i().isEnterKeyPressed(e)) {
                                    var t = m.searchSymbolsByNameOnly(i()(this).val());
                                    (!t || t.length <= 0) && (e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation())
                                }
                            }))
                        }))
                    }))
                }))
            }
        },
        a = {};

    function r(e) {
        var i = a[e];
        if (void 0 !== i) return i.exports;
        var n = a[e] = {
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, r), n.exports
    }
    r.m = t, e = [], r.O = (t, a, i, n) => {
        if (!a) {
            var o = 1 / 0;
            for (m = 0; m < e.length; m++) {
                for (var [a, i, n] = e[m], s = !0, c = 0; c < a.length; c++)(!1 & n || o >= n) && Object.keys(r.O).every((e => r.O[e](a[c]))) ? a.splice(c--, 1) : (s = !1, n < o && (o = n));
                if (s) {
                    e.splice(m--, 1);
                    var l = i();
                    void 0 !== l && (t = l)
                }
            }
            return t
        }
        n = n || 0;
        for (var m = e.length; m > 0 && e[m - 1][2] > n; m--) e[m] = e[m - 1];
        e[m] = [a, i, n]
    }, r.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return r.d(t, {
            a: t
        }), t
    }, r.d = (e, t) => {
        for (var a in t) r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a]
        })
    }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        var e = {
            76: 0,
            792: 0
        };
        r.O.j = t => 0 === e[t];
        var t = (t, a) => {
                var i, n, [o, s, c] = a,
                    l = 0;
                if (o.some((t => 0 !== e[t]))) {
                    for (i in s) r.o(s, i) && (r.m[i] = s[i]);
                    if (c) var m = c(r)
                }
                for (t && t(a); l < o.length; l++) n = o[l], r.o(e, n) && e[n] && e[n][0](), e[n] = 0;
                return r.O(m)
            },
            a = self.webpackChunkderiv_charts = self.webpackChunkderiv_charts || [];
        a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
    })(), r.O(void 0, [96, 934], (() => r(934)));
    var i = r.O(void 0, [96, 934], (() => r(781)));
    i = r.O(i)
})();