"use strict";
(self.webpackChunkderiv_charts = self.webpackChunkderiv_charts || []).push([
    [934], {
        934: (e, t, n) => {
            var r = n(692),
                o = n.n(r);

            function i(e) {
                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, i(e)
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, a(r.key), r)
                }
            }

            function a(e) {
                var t = function(e, t) {
                    if ("object" != i(e) || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != i(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == i(t) ? t : t + ""
            }
            const u = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return t = e, r = [{
                    key: "getInstance",
                    value: function() {
                        return e.instance || (e.instance = new e), e.instance
                    }
                }], (n = [{
                    key: "parseSuffixAndIntValue",
                    value: function() {
                        if (!TradingView.actualResolution) return {
                            suffix: "M",
                            intVal: 1
                        };
                        var e = TradingView.actualResolution.toUpperCase().replace("M", "").replace("W", ""),
                            t = "" === e ? 1 : parseInt(e),
                            n = TradingView.actualResolution.replace("" + t, "");
                        switch (n) {
                            case "":
                                t < 60 ? n = "M" : (t /= 60, n = "H");
                                break;
                            case "W":
                                t *= 7, n = "D";
                                break;
                            case "M":
                                t *= 30, n = "D"
                        }
                        return {
                            suffix: n,
                            intVal: t
                        }
                    }
                }, {
                    key: "totalSecondsInABar",
                    value: function(e, t) {
                        var n = 0;
                        switch (e) {
                            case "M":
                                n = 60 * t;
                                break;
                            case "H":
                                n = 60 * t * 60;
                                break;
                            case "D":
                                n = 24 * t * 60 * 60
                        }
                        return n
                    }
                }]) && s(t.prototype, n), r && s(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t;
                var t, n, r
            }();
            n(358);

            function c(e) {
                return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, c(e)
            }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, f(r.key), r)
                }
            }

            function f(e) {
                var t = function(e, t) {
                    if ("object" != c(e) || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != c(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == c(t) ? t : t + ""
            }
            const p = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.handleEvent = function(e) {
                        var t = o()(document).find("iframe").contents().find(".chart-status-picture");
                        t.removeClass(t.attr("class")).addClass("chart-status-picture " + e)
                    }
                }
                return t = e, r = [{
                    key: "getInstance",
                    value: function() {
                        return e.instance || (e.instance = new e), e.instance
                    }
                }], (n = [{
                    key: "delayedNotification",
                    value: function() {
                        this.handleEvent("delayed-feed")
                    }
                }, {
                    key: "realtimeNotification",
                    value: function() {
                        this.handleEvent("realtime-feed")
                    }
                }, {
                    key: "loadingNotification",
                    value: function() {
                        this.handleEvent("loading")
                    }
                }, {
                    key: "noConnectionNotification",
                    value: function() {
                        this.handleEvent("no-connection")
                    }
                }]) && l(t.prototype, n), r && l(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t;
                var t, n, r
            }();

            function h(e) {
                return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, h(e)
            }

            function y(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, m(r.key), r)
                }
            }

            function m(e) {
                var t = function(e, t) {
                    if ("object" != h(e) || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != h(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == h(t) ? t : t + ""
            }
            var b = [];
            const d = function() {
                return e = function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.unresolved_promises = [], this.callbacks = [], this.ws = null, this._commonUtils = u.getInstance(), this.globalNotifier = p.getInstance(), this.reqIdCounter = 0, this.watchlist_markets = []
                }, t = [{
                    key: "init",
                    value: function() {
                        var e, t, n = this,
                            r = ((t = window.localStorage.getItem("config.server_url")) || (t = "frontend.derivws.com"), "wss://" + t + "/websockets/v3?l=en&app_id=" + ((e = window.localStorage.getItem("config.app_id")) || (e = 2742), e));
                        return this.ws = new WebSocket(r), this.ws.onopen = function(e) {
                            (n.unresolved_promises.connectionOpenEvent || []).forEach((function(e) {
                                e.resolve(!0)
                            })), delete n.unresolved_promises.connectionOpenEvent
                        }, this.ws.onclose = function(e) {
                            setTimeout((function() {
                                n.init().then((function(e) {
                                    e && ((n.callbacks.ohlc || []).forEach((function(e) {
                                        if (e.requestObject) {
                                            var t = e.requestObject.req_id && Object.keys(e.requestObject).length > 1,
                                                r = !e.requestObject.req_id && Object.keys(e.requestObject).length > 0;
                                            (t || r) && n.ws.send(JSON.stringify(e.requestObject))
                                        }
                                    })), n.watchlist_markets.forEach((function(e) {
                                        n.send_request({
                                            ticks_batch: 1,
                                            market: e,
                                            subscribe: 1
                                        })
                                    })))
                                }))
                            }), 1e3)
                        }, this.ws.onerror = function(e) {
                            n.globalNotifier.noConnectionNotification(), o().growl.error({
                                title: "",
                                message: "Connection error. Refresh page!"
                            }), n.unresolved_promises = [], n.callbacks = []
                        }, this.ws.onmessage = function(e) {
                            var t = JSON.parse(e.data);
                            (n.callbacks[t.msg_type] || []).forEach((function(e) {
                                e._callback(t)
                            }));
                            var r = t.req_id,
                                o = n.unresolved_promises[r];
                            o && (t.error ? (t.error.echo_req = t.echo_req, o.reject(t.error)) : o.resolve(t), delete n.unresolved_promises[r])
                        }, new Promise((function(e, t) {
                            n.unresolved_promises.connectionOpenEvent = n.unresolved_promises.connectionOpenEvent || [], n.unresolved_promises.connectionOpenEvent.push({
                                resolve: e,
                                reject: t
                            })
                        }))
                    }
                }, {
                    key: "send_request",
                    value: function(e) {
                        e.req_id = ++this.reqIdCounter;
                        var t = this;
                        return e.req_id && Object.keys(e).length > 1 ? new Promise((function(n, r) {
                            t.unresolved_promises[e.req_id] = {
                                resolve: n,
                                reject: r
                            }, t.ws.send(JSON.stringify(e))
                        })) : Promise.reject({
                            code: "EmptyRequest",
                            message: "Empty Request",
                            echo_req: e
                        })
                    }
                }, {
                    key: "on",
                    value: function(e, t) {
                        (this.callbacks[e] = this.callbacks[e] || []).push(t)
                    }
                }, {
                    key: "request_trading_times",
                    value: function() {
                        return this.send_request({
                            trading_times: "" + (new Date).toISOString().slice(0, 10)
                        })
                    }
                }, {
                    key: "request_stop_ohlc_streaming",
                    value: function(e, t) {
                        var n = this;
                        return this.callbacks.ohlc = this.callbacks.ohlc || [], this.callbacks.ohlc.forEach((function(e, r) {
                            if (e.listenerID === t) return n.callbacks.ohlc.splice(r, 1), !1
                        })), this.send_request({
                            forget: e
                        })
                    }
                }, {
                    key: "request_ohlc_streaming",
                    value: function(e, t, n) {
                        var r = {
                            ticks_history: e,
                            end: "latest",
                            count: 1,
                            style: "candles",
                            granularity: t,
                            subscribe: 1
                        };
                        n && (n.requestObject = r, this.on("ohlc", n))
                    }
                }, {
                    key: "request_candles",
                    value: function(e) {
                        var t = e.count || 5e3,
                            n = e.granularity,
                            r = null;
                        e.startTime && (r = moment.utc(e.startTime));
                        var o = e.endTime || "latest",
                            i = moment.utc();
                        i = (i = i.subtract(3, "years")).add(2, "days"), r && r.isBefore(i) && (r = i);
                        var s = {
                            ticks_history: e.symbol,
                            style: "candles",
                            count: t,
                            granularity: n,
                            subscribe: 1
                        };
                        return r ? s.start = r.unix() : s.end = o, void 0 !== e.adjust_start_time && null !== e.adjust_start_time || (s.adjust_start_time = 1), this.send_request(s)
                    }
                }, {
                    key: "request_tick_streaming",
                    value: function(e) {
                        this.on("ticks_batch", {
                            _callback: function(t) {
                                null != t && t.ticks_batch && (t.ticks_batch.forEach((function(e) {
                                    var t = e.change,
                                        n = e.ask,
                                        r = e.bid,
                                        o = e.symbol,
                                        i = e.quote,
                                        s = {
                                            s: "ok",
                                            n: o,
                                            v: {
                                                chp: Number(t),
                                                lp: Number(i),
                                                ask: n || null,
                                                bid: r || null,
                                                original_name: o,
                                                short_name: o,
                                                description: o
                                            }
                                        },
                                        a = b.findIndex((function(e) {
                                            return e.n === o
                                        })); - 1 !== a ? b[a] = s : b.push(s)
                                })), e(b))
                            }
                        })
                    }
                }], t && y(e.prototype, t), n && y(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e;
                var e, t, n
            }();

            function _(e) {
                return _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, _(e)
            }

            function v(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, g(r.key), r)
                }
            }

            function g(e) {
                var t = function(e, t) {
                    if ("object" != _(e) || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != _(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == _(t) ? t : t + ""
            }
            const w = function() {
                return e = function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this._binary_websockets = t
                }, (t = [{
                    key: "init",
                    value: function() {
                        this._markets = null, this._symbolTypes = null;
                        var e = this;
                        return new Promise((function(t, n) {
                            e._binary_websockets.request_trading_times().then((function(n) {
                                e.process(n), t(e._symbolTypes, e._markets)
                            })).catch((function(e) {
                                "undefined" != typeof trackJs && trackJs.track("Unexpected response from server, [request_trading_times] Response error " + JSON.stringify(e))
                            }))
                        }))
                    }
                }, {
                    key: "process",
                    value: function(e) {
                        this._markets = [], this._symbolTypes = [];
                        for (var t = 0; t < e.trading_times.markets.length; t++) {
                            var n = e.trading_times.markets[t];
                            this._symbolTypes.push(n.name);
                            for (var r = {
                                    name: n.name,
                                    submarkets: []
                                }, o = 0; o < n.submarkets.length; ++o) {
                                for (var i = n.submarkets[o], s = {
                                        name: i.name,
                                        symbols: []
                                    }, a = 0; a < i.symbols.length; a++) {
                                    var u = i.symbols[a];
                                    u.feed_license && "chartonly" === u.feed_license || s.symbols.push({
                                        symbol: u.symbol,
                                        symbol_display: u.name,
                                        feed_license: u.feed_license || "realtime",
                                        delay_amount: u.delay_amount || 0
                                    })
                                }
                                r.submarkets.push(s)
                            }
                            this._markets.push(r)
                        }
                    }
                }, {
                    key: "findInstrumentObjectBySymbol",
                    value: function(e) {
                        var t = null,
                            n = !0;
                        return this._markets.forEach((function(r) {
                            return r.submarkets.forEach((function(r) {
                                return r.symbols.forEach((function(r) {
                                    return r.symbol === e && (t = o().extend(!0, {}, r), n = !1), n
                                })), n
                            })), n
                        })), t
                    }
                }]) && v(e.prototype, t), n && v(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e;
                var e, t, n
            }();

            function k(e) {
                return k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, k(e)
            }

            function S(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, D(r.key), r)
                }
            }

            function D(e) {
                var t = function(e, t) {
                    if ("object" != k(e) || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != k(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == k(t) ? t : t + ""
            }
            const C = function() {
                return e = function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this._binary_websockets = t, this._commonUtils = u.getInstance()
                }, (t = [{
                    key: "getBars",
                    value: function(e, t, n, r) {
                        this._binary_websockets.request_candles({
                            symbol: e.ticker,
                            granularity: 60 * Number(null != n ? n : 1),
                            endTime: t.firstDataRequest ? void 0 : t.to
                        }).catch((function() {
                            r([], {
                                noData: !0
                            })
                        })).then((function(e) {
                            if (e && e.candles) {
                                var t = [];
                                for (e.candles.forEach((function(e) {
                                        var n = 1e3 * parseInt(e.epoch),
                                            r = parseFloat(e.open),
                                            o = parseFloat(e.high),
                                            i = parseFloat(e.low),
                                            s = parseFloat(e.close);
                                        t.push({
                                            time: n,
                                            open: r,
                                            high: o,
                                            low: i,
                                            close: s
                                        })
                                    })); t.length > 1 && t.length < 300;) t.unshift({
                                    time: t[0].time - (t[1].time - t[0].time),
                                    open: t[0].open,
                                    high: t[0].open,
                                    low: t[0].open,
                                    close: t[0].open
                                });
                                r(t)
                            }
                        }))
                    }
                }]) && S(e.prototype, t), n && S(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e;
                var e, t, n
            }();

            function x(e) {
                return x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, x(e)
            }

            function O(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, E(r.key), r)
                }
            }

            function E(e) {
                var t = function(e, t) {
                    if ("object" != x(e) || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != x(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == x(t) ? t : t + ""
            }
            const q = function() {
                return e = function e(t, n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this._binary_websockets = t, this._streamingMap = {}, this._commonUtils = u.getInstance(), this._symbolRequestResponseHandler = n, this.globalNotifier = p.getInstance()
                }, (t = [{
                    key: "subscribeBars",
                    value: function(e, t, n) {
                        var r = this,
                            o = this._commonUtils.parseSuffixAndIntValue(),
                            i = this._commonUtils.totalSecondsInABar(o.suffix, o.intVal);
                        this._streamingMap[n] = {
                            symbol: e.ticker,
                            resolution: TradingView.actualResolution,
                            timerHandler: null,
                            granularity: i,
                            lastBar: null,
                            timerCallback: function() {
                                r.globalNotifier.delayedNotification();
                                var e = this;
                                r._binary_websockets.request_candles({
                                    symbol: e.symbol,
                                    granularity: e.granularity,
                                    startTime: e.lastBar ? e.lastBar.time : null,
                                    count: e.lastBar ? null : 1,
                                    adjust_start_time: e.lastBar ? 0 : null,
                                    subscribe: 1
                                }).catch((function(e) {})).then((function(n) {
                                    n && n.candles && n.candles.forEach((function(n) {
                                        var r = {
                                            time: 1e3 * parseInt(n.epoch),
                                            open: parseFloat(n.open),
                                            high: parseFloat(n.high),
                                            low: parseFloat(n.low),
                                            close: parseFloat(n.close)
                                        };
                                        (!e.lastBar || r.time > e.lastBar.time) && (e.lastBar = r), t(r)
                                    }))
                                }))
                            },
                            streamingCallback: function(e) {
                                r.globalNotifier.realtimeNotification();
                                var o = r._streamingMap[n];
                                if (o && e.ohlc.symbol === o.symbol && e.ohlc.granularity === o.granularity) {
                                    o.server_request_id = e.ohlc.id;
                                    var i = 1e3 * parseInt(e.ohlc.open_time),
                                        s = parseFloat(e.ohlc.open),
                                        a = parseFloat(e.ohlc.high),
                                        u = parseFloat(e.ohlc.low),
                                        c = parseFloat(e.ohlc.close);
                                    i && s && a && u && c && (this.lastBar = {
                                        time: i,
                                        open: s,
                                        high: a,
                                        low: u,
                                        close: c
                                    }, t(this.lastBar))
                                }
                            }
                        };
                        var s = this._symbolRequestResponseHandler.findInstrumentObjectBySymbol(e.ticker);
                        if (s)
                            if (s.delay_amount > 0) {
                                var a = this._streamingMap[n];
                                a.timerHandler = setInterval((function() {
                                    a.timerCallback.call(a)
                                }), 6e4)
                            } else this._binary_websockets.request_ohlc_streaming(e.ticker, i, {
                                listenerID: n,
                                _callback: this._streamingMap[n].streamingCallback
                            })
                    }
                }, {
                    key: "unsubscribeBars",
                    value: function(e) {
                        var t = this._streamingMap[e];
                        t.timerHandler ? clearInterval(t.timerHandler) : this._binary_websockets.request_stop_ohlc_streaming(t.server_request_id, e).then((function() {})).catch((function() {})), delete this._streamingMap[e]
                    }
                }]) && O(e.prototype, t), n && O(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e;
                var e, t, n
            }();
            var j = n(692);
            const I = function() {
                j.fn.bindFirst = function(e, t, n) {
                    var r = e.indexOf("."),
                        o = r > 0 ? e.substring(r) : "";
                    return e = r > 0 ? e.substring(0, r) : e, n = void 0 === n ? t : n, t = "function" == typeof t ? {} : t, this.each((function() {
                        var r = j(this),
                            i = this["on" + e];
                        i && (r.bind(e, (function(e) {
                            return i(e.originalEvent)
                        })), this["on" + e] = null), r.bind(e + o, t, n);
                        var s = (r.data("events") || j._data(r[0], "events"))[e],
                            a = s.pop();
                        s.unshift(a)
                    }))
                }, j.isEnterKeyPressed = function(e) {
                    return "13" == (e.keyCode ? e.keyCode : e.which)
                }
            };
            var F = n(692);

            function T(e) {
                return T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, T(e)
            }

            function R() {
                R = function() {
                    return t
                };
                var e, t = {},
                    n = Object.prototype,
                    r = n.hasOwnProperty,
                    o = Object.defineProperty || function(e, t, n) {
                        e[t] = n.value
                    },
                    i = "function" == typeof Symbol ? Symbol : {},
                    s = i.iterator || "@@iterator",
                    a = i.asyncIterator || "@@asyncIterator",
                    u = i.toStringTag || "@@toStringTag";

                function c(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    c({}, "")
                } catch (e) {
                    c = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function l(e, t, n, r) {
                    var i = t && t.prototype instanceof d ? t : d,
                        s = Object.create(i.prototype),
                        a = new j(r || []);
                    return o(s, "_invoke", {
                        value: x(e, n, a)
                    }), s
                }

                function f(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                t.wrap = l;
                var p = "suspendedStart",
                    h = "suspendedYield",
                    y = "executing",
                    m = "completed",
                    b = {};

                function d() {}

                function _() {}

                function v() {}
                var g = {};
                c(g, s, (function() {
                    return this
                }));
                var w = Object.getPrototypeOf,
                    k = w && w(w(I([])));
                k && k !== n && r.call(k, s) && (g = k);
                var S = v.prototype = d.prototype = Object.create(g);

                function D(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        c(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function C(e, t) {
                    function n(o, i, s, a) {
                        var u = f(e[o], e, i);
                        if ("throw" !== u.type) {
                            var c = u.arg,
                                l = c.value;
                            return l && "object" == T(l) && r.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                                n("next", e, s, a)
                            }), (function(e) {
                                n("throw", e, s, a)
                            })) : t.resolve(l).then((function(e) {
                                c.value = e, s(c)
                            }), (function(e) {
                                return n("throw", e, s, a)
                            }))
                        }
                        a(u.arg)
                    }
                    var i;
                    o(this, "_invoke", {
                        value: function(e, r) {
                            function o() {
                                return new t((function(t, o) {
                                    n(e, r, t, o)
                                }))
                            }
                            return i = i ? i.then(o, o) : o()
                        }
                    })
                }

                function x(t, n, r) {
                    var o = p;
                    return function(i, s) {
                        if (o === y) throw Error("Generator is already running");
                        if (o === m) {
                            if ("throw" === i) throw s;
                            return {
                                value: e,
                                done: !0
                            }
                        }
                        for (r.method = i, r.arg = s;;) {
                            var a = r.delegate;
                            if (a) {
                                var u = O(a, r);
                                if (u) {
                                    if (u === b) continue;
                                    return u
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if (o === p) throw o = m, r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            o = y;
                            var c = f(t, n, r);
                            if ("normal" === c.type) {
                                if (o = r.done ? m : h, c.arg === b) continue;
                                return {
                                    value: c.arg,
                                    done: r.done
                                }
                            }
                            "throw" === c.type && (o = m, r.method = "throw", r.arg = c.arg)
                        }
                    }
                }

                function O(t, n) {
                    var r = n.method,
                        o = t.iterator[r];
                    if (o === e) return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = e, O(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), b;
                    var i = f(o, t.iterator, n.arg);
                    if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, b;
                    var s = i.arg;
                    return s ? s.done ? (n[t.resultName] = s.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, b) : s : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, b)
                }

                function E(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function q(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function j(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(E, this), this.reset(!0)
                }

                function I(t) {
                    if (t || "" === t) {
                        var n = t[s];
                        if (n) return n.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var o = -1,
                                i = function n() {
                                    for (; ++o < t.length;)
                                        if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
                                    return n.value = e, n.done = !0, n
                                };
                            return i.next = i
                        }
                    }
                    throw new TypeError(T(t) + " is not iterable")
                }
                return _.prototype = v, o(S, "constructor", {
                    value: v,
                    configurable: !0
                }), o(v, "constructor", {
                    value: _,
                    configurable: !0
                }), _.displayName = c(v, u, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === _ || "GeneratorFunction" === (t.displayName || t.name))
                }, t.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v, c(e, u, "GeneratorFunction")), e.prototype = Object.create(S), e
                }, t.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, D(C.prototype), c(C.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = C, t.async = function(e, n, r, o, i) {
                    void 0 === i && (i = Promise);
                    var s = new C(l(e, n, r, o), i);
                    return t.isGeneratorFunction(n) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, D(S), c(S, u, "Generator"), c(S, s, (function() {
                    return this
                })), c(S, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(e) {
                    var t = Object(e),
                        n = [];
                    for (var r in t) n.push(r);
                    return n.reverse(),
                        function e() {
                            for (; n.length;) {
                                var r = n.pop();
                                if (r in t) return e.value = r, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, t.values = I, j.prototype = {
                    constructor: j,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(q), !t)
                            for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var n = this;

                        function o(r, o) {
                            return a.type = "throw", a.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var s = this.tryEntries[i],
                                a = s.completion;
                            if ("root" === s.tryLoc) return o("end");
                            if (s.tryLoc <= this.prev) {
                                var u = r.call(s, "catchLoc"),
                                    c = r.call(s, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < s.catchLoc) return o(s.catchLoc, !0);
                                    if (this.prev < s.finallyLoc) return o(s.finallyLoc)
                                } else if (u) {
                                    if (this.prev < s.catchLoc) return o(s.catchLoc, !0)
                                } else {
                                    if (!c) throw Error("try statement without catch or finally");
                                    if (this.prev < s.finallyLoc) return o(s.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var s = i ? i.completion : {};
                        return s.type = e, s.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, b) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), b
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), q(n), b
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    q(n)
                                }
                                return o
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(t, n, r) {
                        return this.delegate = {
                            iterator: I(t),
                            resultName: n,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = e), b
                    }
                }, t
            }

            function L(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return P(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? P(e, t) : void 0
                            }
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, s = !0,
                    a = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return s = e.done, e
                    },
                    e: function(e) {
                        a = !0, i = e
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                }
            }

            function P(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function U(e, t, n, r, o, i, s) {
                try {
                    var a = e[i](s),
                        u = a.value
                } catch (e) {
                    return void n(e)
                }
                a.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function N(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function s(e) {
                            U(i, r, o, s, a, "next", e)
                        }

                        function a(e) {
                            U(i, r, o, s, a, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }
            I(), window.Datafeeds = {}, Datafeeds.UDFCompatibleDatafeed = function() {
                this._configuration = void 0, this._symbolSearch = null, this._symbolsStorage = null, this._enableLogging = !1, this._initializationFinished = !1, this._callbacks = {}, this._binary_websockets = new d, this._symbolRequestResponseHandler = new w(this._binary_websockets), this._historicalOHLCReqResHandler = new C(this._binary_websockets), this._ohlcStreamingReqResHandler = new q(this._binary_websockets, this._symbolRequestResponseHandler), this._marketSubscriptions = new Map, this._supported_resolutions = [], this._supported_resolutions.push("1"), this._supported_resolutions.push("2"), this._supported_resolutions.push("3"), this._supported_resolutions.push("5"), this._supported_resolutions.push("10"), this._supported_resolutions.push("15"), this._supported_resolutions.push("30"), this._supported_resolutions.push("60"), this._supported_resolutions.push("120"), this._supported_resolutions.push("240"), this._supported_resolutions.push("480"), this._supported_resolutions.push("1440"), this.globalNotifier = p.getInstance(), this._initialize()
            }, Datafeeds.UDFCompatibleDatafeed.prototype.defaultConfiguration = function() {
                return {
                    supports_search: !0,
                    supports_group_request: !1,
                    supported_resolutions: this._supported_resolutions,
                    supports_marks: !0,
                    exchanges: [],
                    symbolsTypes: [{
                        name: "Forex",
                        value: "Forex"
                    }, {
                        name: "Indices",
                        value: "Indices"
                    }, {
                        name: "OTC Stocks",
                        value: "OTC Stocks"
                    }, {
                        name: "Commodities",
                        value: "Commodities"
                    }, {
                        name: "Derived",
                        value: "Derived"
                    }]
                }
            }, Datafeeds.UDFCompatibleDatafeed.prototype.on = function(e, t) {
                return this._callbacks.hasOwnProperty(e) || (this._callbacks[e] = []), this._callbacks[e].push(t), this
            }, Datafeeds.UDFCompatibleDatafeed.prototype._fireEvent = function(e, t) {
                if (this._callbacks.hasOwnProperty(e)) {
                    for (var n = this._callbacks[e], r = 0; r < n.length; ++r) n[r](t);
                    this._callbacks[e] = []
                }
            }, Datafeeds.UDFCompatibleDatafeed.prototype.onInitialized = function() {
                this._initializationFinished = !0, this._fireEvent("initialized")
            }, Datafeeds.UDFCompatibleDatafeed.prototype._logMessage = function(e) {
                if (this._enableLogging) new Date
            }, Datafeeds.UDFCompatibleDatafeed.prototype._initialize = function() {
                var e = this;
                this._binary_websockets.init().then((function(t) {
                    t && e._symbolRequestResponseHandler.init().then((function(t, n) {
                        var r = e.defaultConfiguration();
                        r.symbolsTypes = [], t.forEach((function(e) {
                            r.symbolsTypes.push({
                                name: e,
                                value: e
                            })
                        })), e._setupWithConfiguration(r)
                    }))
                }))
            }, Datafeeds.UDFCompatibleDatafeed.prototype.onReady = function(e) {
                var t = this;
                setTimeout((function() {
                    t._configuration ? e(t._configuration) : t.on("configuration_ready", (function() {
                        e(t._configuration)
                    }))
                }), 0)
            }, Datafeeds.UDFCompatibleDatafeed.prototype._setupWithConfiguration = function(e) {
                this._configuration = e, e.exchanges || (e.exchanges = []);
                var t = e.supported_resolutions || e.supportedResolutions;
                e.supported_resolutions = t;
                var n = e.symbols_types || e.symbolsTypes;
                if (e.symbols_types = n, !e.supports_search && !e.supports_group_request) throw "Unsupported datafeed configuration. Must either support search, or support group request";
                e.supports_search || (this._symbolSearch = new Datafeeds.SymbolSearchComponent(this)), e.supports_group_request ? this._symbolsStorage = new Datafeeds.SymbolsStorage(this) : this.onInitialized(), this._fireEvent("configuration_ready"), this._logMessage("Initialized with " + JSON.stringify(e))
            }, Datafeeds.UDFCompatibleDatafeed.prototype._symbolMetadata = function(e) {
                var t = {};
                if (e) {
                    var n = 1e4,
                        r = "2200-2159:123456";
                    "Forex" === e && (n = 1e5), "OTC Stocks" !== e && "Indices" !== e && "Stock Indices" !== e && "Commodities" !== e || (n = 100), "Volatility Indices" !== e && "Derived" !== e && "Cryptocurrencies" !== e || (n = 1e4, r = "24x7"), t = {
                        pricescale: n,
                        minmov: 1,
                        session: r
                    }
                }
                return t
            }, Datafeeds.UDFCompatibleDatafeed.prototype.searchSymbols = function(e, t, n, r) {
                var o, i;
                if (this._configuration) {
                    if (this._configuration.supports_search) {
                        var s = this;
                        r((o = e, i = [], F.each(s._symbolRequestResponseHandler._markets, (function(e, t) {
                            t.name === n && F.each(t.submarkets, (function(e, r) {
                                F.each(r.symbols, (function(e, r) {
                                    -1 !== t.name.indexOf(n) && (-1 === r.symbol.toUpperCase().indexOf(o.toUpperCase()) && -1 === r.symbol_display.toUpperCase().indexOf(o.toUpperCase()) || i.push({
                                        symbol: r.symbol,
                                        description: r.symbol_display,
                                        type: t.name,
                                        exchange: "",
                                        full_name: r.symbol,
                                        supported_resolutions: s._supported_resolutions
                                    }))
                                }))
                            }))
                        })), i))
                    }
                } else r([])
            }, Datafeeds.UDFCompatibleDatafeed.prototype.searchSymbolsByNameOnly = function(e) {
                if (!this._configuration) return [];
                if (this._configuration.supports_search) {
                    var t = this,
                        n = [];
                    return F.each(t._symbolRequestResponseHandler._markets, (function(r, o) {
                        F.each(o.submarkets, (function(r, i) {
                            F.each(i.symbols, (function(r, i) {
                                -1 === i.symbol.toUpperCase().indexOf(e.toUpperCase()) && -1 === i.symbol_display.toUpperCase().indexOf(e.toUpperCase()) || n.push({
                                    symbol: i.symbol,
                                    description: i.symbol_display,
                                    type: o.name,
                                    exchange: "",
                                    full_name: i.symbol,
                                    supported_resolutions: t._supported_resolutions
                                })
                            }))
                        }))
                    })), n
                }
            }, Datafeeds.UDFCompatibleDatafeed.prototype.resolveSymbol = function(e, t, n) {
                var r = this;
                setTimeout((function() {
                    if (r._initializationFinished)
                        if (r._configuration.supports_group_request) r._initializationFinished ? r._symbolsStorage.resolveSymbol(e, i, n) : r.on("initialized", (function() {
                            r._symbolsStorage.resolveSymbol(e, i, n)
                        }));
                        else {
                            var o = !1;
                            F.each(r._symbolRequestResponseHandler._markets, (function(t, n) {
                                return F.each(n.submarkets, (function(t, s) {
                                    return F.each(s.symbols, (function(t, s) {
                                        if (-1 !== s.symbol.indexOf(e)) {
                                            var a = r._symbolMetadata(n.name),
                                                u = a.pricescale,
                                                c = a.minmov,
                                                l = a.session;
                                            return i({
                                                name: s.symbol,
                                                timezone: "UTC",
                                                has_intraday: !0,
                                                visible_plots_set: !0,
                                                ticker: s.symbol,
                                                description: s.symbol_display,
                                                type: n.name,
                                                minmov: c,
                                                pricescale: u,
                                                supported_resolutions: r._supported_resolutions,
                                                session: l,
                                                data_status: "streaming",
                                                exchange: " "
                                            }), o = !0, !1
                                        }
                                    })), !o
                                })), !o
                            })), o || n("unknown_symbol")
                        }
                    else r.on("initialized", (function() {
                        r.resolveSymbol(e, t, n)
                    }));

                    function i(e) {
                        var n = e;
                        r.postProcessSymbolInfo && (n = r.postProcessSymbolInfo(n)), t(n)
                    }
                }), 0)
            }, Datafeeds.UDFCompatibleDatafeed.prototype.getBars = function(e, t, n, r, o) {
                this.globalNotifier.loadingNotification(), this._historicalOHLCReqResHandler.getBars(e, n, t, r, o)
            }, Datafeeds.UDFCompatibleDatafeed.prototype.subscribeBars = function(e, t, n, r) {
                TradingView.actualResolution = t, this._ohlcStreamingReqResHandler.subscribeBars(e, n, r)
            }, Datafeeds.UDFCompatibleDatafeed.prototype.unsubscribeBars = function(e) {
                this._ohlcStreamingReqResHandler.unsubscribeBars(e)
            }, Datafeeds.UDFCompatibleDatafeed.prototype.getMarks = function(e, t, n, r, o) {}, Datafeeds.UDFCompatibleDatafeed.prototype.calculateHistoryDepth = function(e, t, n) {}, Datafeeds.UDFCompatibleDatafeed.prototype.getQuotes = function() {
                var e = N(R().mark((function e(t, n, r) {
                    var o, i, s = this;
                    return R().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(window.innerWidth <= 600)) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                o = [], i = function() {
                                    var e = N(R().mark((function e() {
                                        var a, u, c, l, f, p, h, y, m = arguments;
                                        return R().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (a = m.length > 0 && void 0 !== m[0] ? m[0] : 0, u = m.length > 1 && void 0 !== m[1] ? m[1] : 10, c = window.widget) {
                                                        e.next = 9;
                                                        break
                                                    }
                                                    if (!(a < u)) {
                                                        e.next = 7;
                                                        break
                                                    }
                                                    return setTimeout((function() {
                                                        return i(a + 1, u)
                                                    }), 100), e.abrupt("return");
                                                case 7:
                                                    return e.abrupt("return");
                                                case 9:
                                                    return e.next = 11, c.watchList();
                                                case 11:
                                                    l = e.sent, f = l.getActiveListId(), p = l.getList(f), h = t.filter((function(e) {
                                                        return p.includes(e)
                                                    })), y = new Set, h.forEach((function(e) {
                                                        for (var t = 0, n = Object.values(s._symbolRequestResponseHandler._markets); t < n.length; t++) {
                                                            var r, o = n[t],
                                                                i = L(o.submarkets);
                                                            try {
                                                                for (i.s(); !(r = i.n()).done;) {
                                                                    for (var a = r.value, u = !1, c = 0; c < a.symbols.length; c++)
                                                                        if (a.symbols[c].symbol === e) {
                                                                            u = !0;
                                                                            break
                                                                        }
                                                                    if (u) {
                                                                        var l = {
                                                                            Forex: "forex",
                                                                            "Stock Indices": "indices",
                                                                            Commodities: "commodities",
                                                                            Cryptocurrencies: "cryptocurrency",
                                                                            Derived: "synthetic_index"
                                                                        };
                                                                        l[o.name] && y.add(l[o.name]);
                                                                        break
                                                                    }
                                                                }
                                                            } catch (e) {
                                                                i.e(e)
                                                            } finally {
                                                                i.f()
                                                            }
                                                        }
                                                    })), Array.from(y).forEach((function(e) {
                                                        s._binary_websockets.watchlist_markets.includes(e) || (s._binary_websockets.watchlist_markets.push(e), s._binary_websockets.send_request({
                                                            ticks_batch: 1,
                                                            market: e,
                                                            subscribe: 1
                                                        }).then((function(t) {
                                                            var n;
                                                            null !== (n = t.subscription) && void 0 !== n && n.id && s._marketSubscriptions.set(e, t.subscription.id)
                                                        })).catch((function(e) {
                                                            o.push({
                                                                s: "error",
                                                                v: {
                                                                    lp: null,
                                                                    ch: 0,
                                                                    cp: 0
                                                                }
                                                            }), r(e)
                                                        })))
                                                    })), setTimeout((function() {
                                                        return n(o)
                                                    }), 0);
                                                case 19:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }(), i();
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, n, r) {
                    return e.apply(this, arguments)
                }
            }(), Datafeeds.UDFCompatibleDatafeed.prototype.subscribeQuotes = function(e, t, n, r) {
                window.innerWidth <= 600 || this._binary_websockets.request_tick_streaming(n)
            }, Datafeeds.UDFCompatibleDatafeed.prototype.unsubscribeQuotes = N(R().mark((function e() {
                var t, n, r, o, i = this;
                return R().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (!(window.innerWidth <= 600)) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            if (t = window.widget) {
                                e.next = 5;
                                break
                            }
                            return e.abrupt("return");
                        case 5:
                            return e.next = 7, t.watchList();
                        case 7:
                            n = e.sent, r = n.getActiveListId(), o = n.getList(r), this._binary_websockets.watchlist_markets.slice().forEach((function(e) {
                                var t, n = !1,
                                    r = L(o);
                                try {
                                    for (r.s(); !(t = r.n()).done;) {
                                        for (var s = t.value, a = 0, u = Object.values(i._symbolRequestResponseHandler._markets); a < u.length; a++) {
                                            var c = u[a];
                                            if ({
                                                    Forex: "forex",
                                                    "Stock Indices": "indices",
                                                    Commodities: "commodities",
                                                    Cryptocurrencies: "cryptocurrency",
                                                    Derived: "synthetic_index"
                                                }[c.name] === e) {
                                                var l, f = L(c.submarkets);
                                                try {
                                                    for (f.s(); !(l = f.n()).done;) {
                                                        for (var p = l.value, h = !1, y = 0; y < p.symbols.length; y++)
                                                            if (p.symbols[y].symbol === s) {
                                                                h = !0;
                                                                break
                                                            }
                                                        if (h) {
                                                            n = !0;
                                                            break
                                                        }
                                                    }
                                                } catch (e) {
                                                    f.e(e)
                                                } finally {
                                                    f.f()
                                                }
                                            }
                                            if (n) break
                                        }
                                        if (n) break
                                    }
                                } catch (e) {
                                    r.e(e)
                                } finally {
                                    r.f()
                                }
                                if (!n) {
                                    var m = i._binary_websockets.watchlist_markets.indexOf(e);
                                    i._binary_websockets.watchlist_markets.splice(m, 1);
                                    var b = i._marketSubscriptions.get(e);
                                    b && (i._binary_websockets.send_request({
                                        forget: b
                                    }), i._marketSubscriptions.delete(e))
                                }
                            }));
                        case 11:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            }))), Datafeeds.SymbolsStorage = function(e) {
                this._datafeed = e, this._symbolsInfo = {}, this._symbolsList = [], this._requestFullSymbolsList()
            }, Datafeeds.SymbolsStorage.prototype._requestFullSymbolsList = function() {
                var e = this,
                    t = this._datafeed;
                F.each(e._symbolRequestResponseHandler._markets, (function(n, r) {
                    F.each(r.submarkets, (function(n, o) {
                        F.each(o.symbols, (function(n, o) {
                            var i = t._symbolMetadata(r.symbol),
                                s = i.pricescale,
                                a = i.minmov,
                                u = i.session,
                                c = {
                                    name: o.symbol,
                                    base_name: o.symbol,
                                    description: o.symbol_display,
                                    full_name: o.symbol,
                                    legs: [o.symbol],
                                    has_intraday: !0,
                                    has_no_volume: !0,
                                    listed_exchange: [],
                                    exchange: [""],
                                    minmov: a,
                                    pricescale: s,
                                    type: r.name,
                                    session: u,
                                    ticker: o.symbol,
                                    timezone: "UTC",
                                    supported_resolutions: e._supported_resolutions,
                                    has_daily: !0,
                                    has_fractional_volume: !1,
                                    has_weekly_and_monthly: !0,
                                    has_empty_bars: !1,
                                    volume_precision: 0,
                                    data_status: "streaming"
                                };
                            e._symbolsInfo[o.symbol] = e._symbolsInfo[o.display_name] = c, e._symbolsList.push(o.symbol)
                        }))
                    }))
                })), this._symbolsList.sort(), this._datafeed.onInitialized()
            }, Datafeeds.SymbolsStorage.prototype.resolveSymbol = function(e, t, n) {
                this._symbolsInfo.hasOwnProperty(e) ? t(this._symbolsInfo[e]) : n("invalid symbol")
            }, Datafeeds.SymbolSearchComponent = function(e) {
                this._datafeed = e
            }, Datafeeds.SymbolSearchComponent.prototype.searchSymbolsByName = function(e, t) {
                if (!this._datafeed._symbolsStorage) throw "Cannot use local symbol search when no groups information is available";
                for (var n = this._datafeed._symbolsStorage, r = [], o = !e.ticker || 0 === e.ticker.length, i = 0; i < n._symbolsList.length; ++i) {
                    var s = n._symbolsList[i],
                        a = n._symbolsInfo[s];
                    if (!(e.type && e.type.length > 0 && a.type !== e.type) && ((o || 0 === a.name.toUpperCase().indexOf(e.ticker)) && r.push({
                            symbol: a.name,
                            full_name: a.full_name,
                            description: a.description,
                            exchange: a.exchange,
                            params: [],
                            type: a.type,
                            ticker: a.name,
                            supported_resolutions: this._datafeed._supported_resolutions
                        }), r.length >= t)) break
                }
                e.onResultReadyCallback(r)
            }
        }
    }
]);