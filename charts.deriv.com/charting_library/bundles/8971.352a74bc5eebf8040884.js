(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [8971], {
        50151: (t, e) => {
            "use strict";

            function n(t, e) {
                if (void 0 === t) throw new Error("".concat(null != e ? e : "Value", " is undefined"));
                return t
            }

            function r(t, e) {
                if (null === t) throw new Error("".concat(null != e ? e : "Value", " is null"));
                return t
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ensureNever = e.ensure = e.ensureNotNull = e.ensureDefined = e.assert = void 0, e.assert = function(t, e) {
                if (!t) throw new Error("Assertion failed".concat(e ? ": ".concat(e) : ""))
            }, e.ensureDefined = n, e.ensureNotNull = r, e.ensure = function(t, e) {
                return r(n(t, e), e)
            }, e.ensureNever = function(t) {}
        },
        50335: (t, e) => {
            "use strict";

            function n(t) {
                return Math.round(1e10 * t) / 1e10
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.alignTo = e.fixComputationError = e.isNaN = e.isInteger = e.isNumber = void 0, e.isNumber = function(t) {
                return "number" == typeof t && isFinite(t)
            }, e.isInteger = function(t) {
                return "number" == typeof t && t % 1 == 0
            }, e.isNaN = function(t) {
                return !(t <= 0 || t > 0)
            }, e.fixComputationError = n, e.alignTo = function(t, e) {
                var r = t / e,
                    i = Math.floor(r),
                    o = r - i;
                return o > 2e-10 ? n(o > .5 ? (i + 1) * e : i * e) : t
            }
        },
        30551: (t, e) => {
            "use strict";
            e.hasProperty = e.isObject = void 0, e.isObject = function(t) {
                var e = typeof t;
                return null !== t && ("object" === e || "function" === e)
            }, e.hasProperty = function(t, e) {
                return e in t
            }
        },
        6453: (t, e, n) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.pointInHalfplane = function(t, e) {
                const n = e.edge;
                return n.A * t.x + n.B * t.y + n.C > 0 === e.isPositive
            }, e.pointInTriangle = function(t, e, n, i) {
                const o = e.add(n).scaled(.5).add(i).scaled(.5);
                let a = (0, r.intersectLineSegments)(e, n, o, t);
                return null === a && (a = (0, r.intersectLineSegments)(n, i, o, t), null === a && (a = (0, r.intersectLineSegments)(i, e, o, t), null === a))
            }, e.pointInBox = function(t, e) {
                return t.x >= e.min.x && t.x <= e.max.x && t.y >= e.min.y && t.y <= e.max.y
            }, e.pointInPolygon = function(t, e) {
                let n = e.length - 1,
                    r = !1;
                const i = t.x,
                    o = t.y;
                for (let t = 0; t < e.length; t++) {
                    const a = e[t],
                        u = e[n];
                    (a.y < o && u.y >= o || u.y < o && a.y >= o) && a.x + (o - a.y) / (u.y - a.y) * (u.x - a.x) < i && (r = !r), n = t
                }
                return r
            }, e.pointInCircle = function(t, e, n) {
                return (t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y) <= n * n
            };
            const r = n(48892)
        },
        2624: (t, e) => {
            "use strict";

            function n(t, e, n) {
                const r = e.subtract(t),
                    i = n.subtract(t).dotProduct(r) / r.dotProduct(r);
                return {
                    coeff: i,
                    distance: t.addScaled(r, i).subtract(n).length()
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.distanceToLine = n, e.distanceToSegment = function(t, e, r) {
                const i = n(t, e, r);
                if (0 <= i.coeff && i.coeff <= 1) return i; {
                    const n = t.subtract(r).length(),
                        i = e.subtract(r).length();
                    return n < i ? {
                        coeff: 0,
                        distance: n
                    } : {
                        coeff: 1,
                        distance: i
                    }
                }
            }
        },
        48892: (t, e, n) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.intersectLineSegmentAndBox = function(t, e) {
                let n = t[0].x,
                    r = t[0].y,
                    o = t[1].x,
                    a = t[1].y;
                const u = e.min.x,
                    s = e.min.y,
                    c = e.max.x,
                    f = e.max.y;
                let l;

                function d(t, e, n, r, i, o) {
                    let a = l.Inside;
                    return t < n ? a |= l.Left : t > i && (a |= l.Right), e < r ? a |= l.Bottom : e > o && (a |= l.Top), a
                }! function(t) {
                    t[t.Inside = 0] = "Inside", t[t.Left = 1] = "Left", t[t.Right = 2] = "Right", t[t.Bottom = 4] = "Bottom", t[t.Top = 8] = "Top"
                }(l || (l = {}));
                let h = d(n, r, u, s, c, f),
                    v = d(o, a, u, s, c, f),
                    p = !1,
                    b = 0;
                for (;;) {
                    if (b > 1e3) throw new Error("Cohen - Sutherland algorithm: infinity loop");
                    if (b++, !(h | v)) {
                        p = !0;
                        break
                    }
                    if (h & v) break; {
                        const t = h || v;
                        let e, i;
                        t & l.Top ? (e = n + (o - n) * (f - r) / (a - r), i = f) : t & l.Bottom ? (e = n + (o - n) * (s - r) / (a - r), i = s) : t & l.Right ? (i = r + (a - r) * (c - n) / (o - n), e = c) : (i = r + (a - r) * (u - n) / (o - n), e = u), t === h ? (n = e, r = i, h = d(n, r, u, s, c, f)) : (o = e, a = i, v = d(o, a, u, s, c, f))
                    }
                }
                return p ? (0, i.equalPoints)((0, i.point)(n, r), (0, i.point)(o, a)) ? (0, i.point)(n, r) : (0, i.lineSegment)((0, i.point)(n, r), (0, i.point)(o, a)) : null
            }, e.intersectLines = u, e.intersectLineSegments = s, e.intersectLineAndBox = function(t, e) {
                const n = e.min.x,
                    o = e.min.y,
                    a = e.max.x,
                    u = e.max.y;
                if (0 === t.A) {
                    const e = -t.C / t.B;
                    return o <= e && e <= u ? (0, i.lineSegment)((0, i.point)(n, e), (0, i.point)(a, e)) : null
                }
                if (0 === t.B) {
                    const e = -t.C / t.A;
                    return n <= e && e <= a ? (0, i.lineSegment)((0, i.point)(e, o), (0, i.point)(e, u)) : null
                } {
                    const e = [],
                        s = n => {
                            const r = function(t, e) {
                                return -(t.C + t.A * e) / t.B
                            }(t, n);
                            o <= r && r <= u && c(e, new i.Point(n, r))
                        },
                        f = r => {
                            const o = function(t, e) {
                                return -(t.C + t.B * e) / t.A
                            }(t, r);
                            n <= o && o <= a && c(e, new i.Point(o, r))
                        };
                    switch (s(n), f(o), s(a), f(u), e.length) {
                        case 0:
                            return null;
                        case 1:
                            return e[0];
                        case 2:
                            return (0, i.equalPoints)(e[0], e[1]) ? e[0] : (0, i.lineSegment)(e[0], e[1])
                    }
                    return (0, r.assert)(!1, "We should have at most two intersection points"), null
                }
            }, e.intersectRayAndBox = function(t, e, n) {
                const r = s(t, e, n.min, new i.Point(n.max.x, n.min.y)),
                    o = s(t, e, new i.Point(n.max.x, n.min.y), n.max),
                    a = s(t, e, n.max, new i.Point(n.min.x, n.max.y)),
                    u = s(t, e, new i.Point(n.min.x, n.max.y), n.min),
                    c = [];
                if (null !== r && r >= 0 && c.push(r), null !== o && o >= 0 && c.push(o), null !== a && a >= 0 && c.push(a), null !== u && u >= 0 && c.push(u), 0 === c.length) return null;
                const f = Math.max(...c);
                return t.addScaled(e.subtract(t), f)
            }, e.intersectPolygonAndHalfplane = l, e.intersectPolygons = function(t, e) {
                let n = t;
                for (let t = 0; t < e.length && null !== n; ++t) {
                    const r = e[t],
                        o = e[(t + 1) % e.length],
                        a = e[(t + 2) % e.length],
                        u = (0, i.lineThroughPoints)(r, o);
                    n = l(n, (0, i.halfplaneThroughPoint)(u, a))
                }
                return n
            };
            const r = n(50151),
                i = n(10555),
                o = n(2624),
                a = n(6453);

            function u(t, e) {
                const n = t.A,
                    r = e.A,
                    o = t.B,
                    a = e.B,
                    u = t.C,
                    s = e.C,
                    c = n * a - r * o;
                if (Math.abs(c) < 1e-6) return null;
                const f = (o * s - a * u) / c,
                    l = (r * u - n * s) / c;
                return new i.Point(f, l)
            }

            function s(t, e, n, r) {
                const i = function(t, e, n, r) {
                    const i = e.subtract(t),
                        o = r.subtract(n),
                        a = i.x * o.y - i.y * o.x;
                    if (Math.abs(a) < 1e-6) return null;
                    const u = t.subtract(n);
                    return (u.y * o.x - u.x * o.y) / a
                }(t, e, n, r);
                if (null === i) return null;
                const a = e.subtract(t).scaled(i).add(t),
                    u = (0, o.distanceToSegment)(n, r, a);
                return Math.abs(u.distance) < 1e-6 ? i : null
            }

            function c(t, e) {
                for (const n of t)
                    if ((0, i.equalPoints)(n, e)) return !1;
                return t.push(e), !0
            }

            function f(t, e) {
                return !(t.length > 0 && ((0, i.equalPoints)(t[t.length - 1], e) || (0, i.equalPoints)(t[0], e)) || (t.push(e), 0))
            }

            function l(t, e) {
                const n = [];
                for (let r = 0; r < t.length; ++r) {
                    const o = t[r],
                        s = t[(r + 1) % t.length],
                        c = (0, i.lineThroughPoints)(o, s);
                    if ((0, a.pointInHalfplane)(o, e)) {
                        if (f(n, o), !(0, a.pointInHalfplane)(s, e)) {
                            const t = u(c, e.edge);
                            null !== t && f(n, t)
                        }
                    } else if ((0, a.pointInHalfplane)(s, e)) {
                        const t = u(c, e.edge);
                        null !== t && f(n, t)
                    }
                }
                return n.length >= 3 ? n : null
            }
        },
        10555: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Point = void 0, e.point = r, e.equalPoints = i, e.line = o, e.lineThroughPoints = function(t, e) {
                if (i(t, e)) throw new Error("Points should be distinct");
                return o(t.y - e.y, e.x - t.x, t.x * e.y - e.x * t.y)
            }, e.lineSegment = function(t, e) {
                if (i(t, e)) throw new Error("Points of a segment should be distinct");
                return [t, e]
            }, e.halfplane = a, e.halfplaneThroughPoint = function(t, e) {
                return a(t, t.A * e.x + t.B * e.y + t.C > 0)
            }, e.box = function(t, e) {
                return {
                    min: r(Math.min(t.x, e.x), Math.min(t.y, e.y)),
                    max: r(Math.max(t.x, e.x), Math.max(t.y, e.y))
                }
            }, e.equalBoxes = function(t, e) {
                return i(t.min, e.min) && i(t.max, e.max)
            };
            class n {
                constructor(t, e) {
                    this.x = t, this.y = e
                }
                add(t) {
                    return new n(this.x + t.x, this.y + t.y)
                }
                addScaled(t, e) {
                    return new n(this.x + e * t.x, this.y + e * t.y)
                }
                subtract(t) {
                    return new n(this.x - t.x, this.y - t.y)
                }
                dotProduct(t) {
                    return this.x * t.x + this.y * t.y
                }
                crossProduct(t) {
                    return this.x * t.y - this.y * t.x
                }
                signedAngle(t) {
                    return Math.atan2(this.crossProduct(t), this.dotProduct(t))
                }
                angle(t) {
                    return Math.acos(this.dotProduct(t) / (this.length() * t.length()))
                }
                length() {
                    return Math.sqrt(this.x * this.x + this.y * this.y)
                }
                scaled(t) {
                    return new n(this.x * t, this.y * t)
                }
                normalized() {
                    return this.scaled(1 / this.length())
                }
                transposed() {
                    return new n(-this.y, this.x)
                }
                clone() {
                    return new n(this.x, this.y)
                }
            }

            function r(t, e) {
                return new n(t, e)
            }

            function i(t, e) {
                return t.x === e.x && t.y === e.y
            }

            function o(t, e, n) {
                if (0 === t && 0 === e) throw new Error("A and B can not be both equal to zero.");
                return {
                    A: t,
                    B: e,
                    C: n
                }
            }

            function a(t, e) {
                return {
                    edge: t,
                    isPositive: e
                }
            }
            e.Point = n
        },
        24377: (t, e, n) => {
            "use strict";
            var r = n(50335);

            function i(t, e, n) {
                return r.isNaN(e) || e < t ? t : e > n ? n : Math.round(e)
            }

            function o(t, e, n) {
                return r.isNaN(e) || e < t ? t : e > n ? n : Math.round(1e4 * e) / 1e4
            }

            function a(t) {
                return i(0, t, 255)
            }

            function u(t) {
                return i(0, t, 255)
            }

            function s(t) {
                return i(0, t, 255)
            }

            function c(t) {
                return o(0, t, 1)
            }

            function f(t) {
                var e = t[0] / 255,
                    n = t[1] / 255,
                    r = t[2] / 255,
                    i = Math.min(e, n, r),
                    o = Math.max(e, n, r),
                    a = 0,
                    u = 0,
                    s = (i + o) / 2;
                if (i === o) a = 0, u = 0;
                else {
                    var c = o - i;
                    switch (u = s > .5 ? c / (2 - o - i) : c / (o + i), o) {
                        case e:
                            a = ((n - r) / c + (n < r ? 6 : 0)) / 6;
                            break;
                        case n:
                            a = ((r - e) / c + 2) / 6;
                            break;
                        case r:
                            a = ((e - n) / c + 4) / 6
                    }
                }
                return [a, u, s]
            }

            function l(t, e, n) {
                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
            }

            function d(t) {
                var e, n, r, i = t[0],
                    o = t[1],
                    c = t[2];
                if (0 === o) e = n = r = c;
                else {
                    var f = c < .5 ? c * (1 + o) : c + o - c * o,
                        d = 2 * c - f;
                    e = l(d, f, i + 1 / 3), n = l(d, f, i), r = l(d, f, i - 1 / 3)
                }
                return [a(255 * e), u(255 * n), s(255 * r)]
            }
            e.normalizeAlphaComponent = c, e.areEqualRgb = function(t, e) {
                return t[0] === e[0] && t[1] === e[1] && t[2] === e[2]
            }, e.rgba = function(t, e, n, r) {
                if (Array.isArray(t)) {
                    var i = t;
                    return r = e, [i[0], i[1], i[2], c(r)]
                }
                var o = e;
                return n = n || 0, r = r || 0, [a(t), u(o), s(n), c(r)]
            }, e.areEqualRgba = function(t, e) {
                return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3]
            }, e.rgbToHsl = f, e.hslToRgb = d;
            var h = [.199, .687, .114];

            function v(t, e, n) {
                void 0 === n && (n = .05);
                var r = f(t),
                    i = r[0] + e * n;
                return r[0] = function(t) {
                    return o(0, t, 1)
                }(i - Math.floor(i)), d(r)
            }

            function p(t, e, n) {
                void 0 === n && (n = .05);
                var r = t[0],
                    i = t[1],
                    o = t[2],
                    a = t[3],
                    u = v([r, i, o], e, n);
                return [u[0], u[1], u[2], a]
            }
            e.distanceRgb = function(t, e) {
                var n = t[0],
                    r = t[1],
                    i = t[2],
                    o = e[0] - n,
                    a = e[1] - r,
                    u = e[2] - i;
                return Math.sqrt(o * o + a * a + u * u)
            }, e.invertRgb = function(t) {
                return [255 - t[0], 255 - t[1], 255 - t[2]]
            }, e.blendRgba = function(t, e) {
                var n = t[0],
                    r = t[1],
                    i = t[2],
                    o = t[3],
                    f = e[0],
                    l = e[1],
                    d = e[2],
                    h = e[3],
                    v = c(1 - (1 - h) * (1 - o));
                return [a(f * h / v + n * o * (1 - h) / v), u(l * h / v + r * o * (1 - h) / v), s(d * h / v + i * o * (1 - h) / v), v]
            }, e.shiftRgb = v, e.shiftRgba = p, e.shiftColor = function(t, e, n) {
                return void 0 === n && (n = .05), O(p(A(t), e, n))
            };
            var b, g, y, m, w = {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#00ffff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000000",
                blanchedalmond: "#ffebcd",
                blue: "#0000ff",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgreen: "#006400",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dodgerblue: "#1e90ff",
                feldspar: "#d19275",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#ff00ff",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                indianred: "#cd5c5c",
                indigo: "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrodyellow: "#fafad2",
                lightgreen: "#90ee90",
                lightgrey: "#d3d3d3",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslateblue: "#8470ff",
                lightslategray: "#778899",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#ff00ff",
                maroon: "#800000",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370d8",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#d87093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                red: "#ff0000",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                violetred: "#d02090",
                wheat: "#f5deb3",
                white: "#ffffff",
                whitesmoke: "#f5f5f5",
                yellow: "#ffff00",
                yellowgreen: "#9acd32"
            };

            function _(t, e) {
                return e in t
            }

            function x(t) {
                var e = b.re.exec(t);
                return null !== e ? b.parse(e) : null
            }

            function j(t) {
                var e = g.re.exec(t);
                return null !== e ? g.parse(e) : null
            }

            function E(t) {
                var e = y.re.exec(t);
                return null !== e ? y.parse(e) : null
            }

            function S(t) {
                var e = m.re.exec(t);
                return null !== e ? m.parse(e) : null
            }

            function O(t) {
                return "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
            }

            function z(t) {
                if (t = t.toLowerCase(), _(w, t)) {
                    var e = j(w[t]);
                    if (null !== e) return [e[0], e[1], e[2], 1];
                    throw new Error("Invalid named color definition")
                }
                var n = x(t);
                if (null !== n) return [n[0], n[1], n[2], 1];
                var r = j(t);
                if (null !== r) return [r[0], r[1], r[2], 1];
                var i = E(t);
                if (null !== i) return [i[0], i[1], i[2], 1];
                var o = S(t);
                return null !== o ? o : null
            }

            function A(t) {
                var e = z(t);
                if (null !== e) return e;
                throw new Error("Passed color string does not match any of the known color representations")
            }! function(t) {
                t.re = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/, t.parse = function(t) {
                    return [a(parseInt(t[1], 10)), u(parseInt(t[2], 10)), s(parseInt(t[3], 10))]
                }
            }(b || (b = {})),
            function(t) {
                t.re = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, t.parse = function(t) {
                    return [a(parseInt(t[1], 16)), u(parseInt(t[2], 16)), s(parseInt(t[3], 16))]
                }
            }(g || (g = {})), e.rgbToHexString = function(t) {
                    var e = t[0],
                        n = t[1],
                        r = t[2],
                        i = e.toString(16),
                        o = n.toString(16),
                        a = r.toString(16);
                    return "#" + (1 === i.length ? "0" : "") + i + (1 === o.length ? "0" : "") + o + (1 === a.length ? "0" : "") + a
                },
                function(t) {
                    t.re = /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/, t.parse = function(t) {
                        return [a(parseInt(t[1] + t[1], 16)), u(parseInt(t[2] + t[2], 16)), s(parseInt(t[3] + t[3], 16))]
                    }
                }(y || (y = {})),
                function(t) {
                    t.re = /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/, t.parse = function(t) {
                        return [a(parseInt(t[1], 10)), u(parseInt(t[2], 10)), s(parseInt(t[3], 10)), c(parseFloat(t[4]))]
                    }
                }(m || (m = {})), e.rgbaToString = O, e.rgbToBlackWhiteString = function(t, e) {
                    if (e < 0 || e > 255) throw new Error("invalid threshold value, valid values are [0, 255]");
                    return function(t) {
                        return h[0] * t[0] + h[1] * t[1] + h[2] * t[2]
                    }(t) >= e ? "white" : "black"
                }, e.parseRgb = function(t) {
                    var e = function(t) {
                        if (t = t.toLowerCase(), _(w, t)) {
                            var e = j(w[t]);
                            if (null !== e) return e;
                            throw new Error("Invalid named color definition")
                        }
                        var n = x(t);
                        if (null !== n) return n;
                        var r = j(t);
                        if (null !== r) return r;
                        var i = E(t);
                        if (null !== i) return i;
                        var o = S(t);
                        return null !== o ? [o[0], o[1], o[2]] : null
                    }(t);
                    if (null !== e) return e;
                    throw new Error("Passed color string does not match any of the known color representations")
                }, e.tryParseRgba = z, e.parseRgba = A
        },
        60521: function(t, e, n) {
            var r;
            ! function() {
                "use strict";
                var i, o = 1e6,
                    a = "[big.js] ",
                    u = a + "Invalid ",
                    s = u + "decimal places",
                    c = u + "rounding mode",
                    f = a + "Division by zero",
                    l = {},
                    d = void 0,
                    h = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;

                function v(t, e, n, r) {
                    var i = t.c;
                    if (n === d && (n = t.constructor.RM), 0 !== n && 1 !== n && 2 !== n && 3 !== n) throw Error(c);
                    if (e < 1) r = 3 === n && (r || !!i[0]) || 0 === e && (1 === n && i[0] >= 5 || 2 === n && (i[0] > 5 || 5 === i[0] && (r || i[1] !== d))), i.length = 1, r ? (t.e = t.e - e + 1, i[0] = 1) : i[0] = t.e = 0;
                    else if (e < i.length) {
                        if (r = 1 === n && i[e] >= 5 || 2 === n && (i[e] > 5 || 5 === i[e] && (r || i[e + 1] !== d || 1 & i[e - 1])) || 3 === n && (r || !!i[0]), i.length = e--, r)
                            for (; ++i[e] > 9;) i[e] = 0, e-- || (++t.e, i.unshift(1));
                        for (e = i.length; !i[--e];) i.pop()
                    }
                    return t
                }

                function p(t, e, n) {
                    var r = t.e,
                        i = t.c.join(""),
                        o = i.length;
                    if (e) i = i.charAt(0) + (o > 1 ? "." + i.slice(1) : "") + (r < 0 ? "e" : "e+") + r;
                    else if (r < 0) {
                        for (; ++r;) i = "0" + i;
                        i = "0." + i
                    } else if (r > 0)
                        if (++r > o)
                            for (r -= o; r--;) i += "0";
                        else r < o && (i = i.slice(0, r) + "." + i.slice(r));
                    else o > 1 && (i = i.charAt(0) + "." + i.slice(1));
                    return t.s < 0 && n ? "-" + i : i
                }
                l.abs = function() {
                    var t = new this.constructor(this);
                    return t.s = 1, t
                }, l.cmp = function(t) {
                    var e, n = this,
                        r = n.c,
                        i = (t = new n.constructor(t)).c,
                        o = n.s,
                        a = t.s,
                        u = n.e,
                        s = t.e;
                    if (!r[0] || !i[0]) return r[0] ? o : i[0] ? -a : 0;
                    if (o != a) return o;
                    if (e = o < 0, u != s) return u > s ^ e ? 1 : -1;
                    for (a = (u = r.length) < (s = i.length) ? u : s, o = -1; ++o < a;)
                        if (r[o] != i[o]) return r[o] > i[o] ^ e ? 1 : -1;
                    return u == s ? 0 : u > s ^ e ? 1 : -1
                }, l.div = function(t) {
                    var e = this,
                        n = e.constructor,
                        r = e.c,
                        i = (t = new n(t)).c,
                        a = e.s == t.s ? 1 : -1,
                        u = n.DP;
                    if (u !== ~~u || u < 0 || u > o) throw Error(s);
                    if (!i[0]) throw Error(f);
                    if (!r[0]) return t.s = a, t.c = [t.e = 0], t;
                    var c, l, h, p, b, g = i.slice(),
                        y = c = i.length,
                        m = r.length,
                        w = r.slice(0, c),
                        _ = w.length,
                        x = t,
                        j = x.c = [],
                        E = 0,
                        S = u + (x.e = e.e - t.e) + 1;
                    for (x.s = a, a = S < 0 ? 0 : S, g.unshift(0); _++ < c;) w.push(0);
                    do {
                        for (h = 0; h < 10; h++) {
                            if (c != (_ = w.length)) p = c > _ ? 1 : -1;
                            else
                                for (b = -1, p = 0; ++b < c;)
                                    if (i[b] != w[b]) {
                                        p = i[b] > w[b] ? 1 : -1;
                                        break
                                    } if (!(p < 0)) break;
                            for (l = _ == c ? i : g; _;) {
                                if (w[--_] < l[_]) {
                                    for (b = _; b && !w[--b];) w[b] = 9;
                                    --w[b], w[_] += 10
                                }
                                w[_] -= l[_]
                            }
                            for (; !w[0];) w.shift()
                        }
                        j[E++] = p ? h : ++h, w[0] && p ? w[_] = r[y] || 0 : w = [r[y]]
                    } while ((y++ < m || w[0] !== d) && a--);
                    return j[0] || 1 == E || (j.shift(), x.e--, S--), E > S && v(x, S, n.RM, w[0] !== d), x
                }, l.eq = function(t) {
                    return 0 === this.cmp(t)
                }, l.gt = function(t) {
                    return this.cmp(t) > 0
                }, l.gte = function(t) {
                    return this.cmp(t) > -1
                }, l.lt = function(t) {
                    return this.cmp(t) < 0
                }, l.lte = function(t) {
                    return this.cmp(t) < 1
                }, l.minus = l.sub = function(t) {
                    var e, n, r, i, o = this,
                        a = o.constructor,
                        u = o.s,
                        s = (t = new a(t)).s;
                    if (u != s) return t.s = -s, o.plus(t);
                    var c = o.c.slice(),
                        f = o.e,
                        l = t.c,
                        d = t.e;
                    if (!c[0] || !l[0]) return l[0] ? t.s = -s : c[0] ? t = new a(o) : t.s = 1, t;
                    if (u = f - d) {
                        for ((i = u < 0) ? (u = -u, r = c) : (d = f, r = l), r.reverse(), s = u; s--;) r.push(0);
                        r.reverse()
                    } else
                        for (n = ((i = c.length < l.length) ? c : l).length, u = s = 0; s < n; s++)
                            if (c[s] != l[s]) {
                                i = c[s] < l[s];
                                break
                            } if (i && (r = c, c = l, l = r, t.s = -t.s), (s = (n = l.length) - (e = c.length)) > 0)
                        for (; s--;) c[e++] = 0;
                    for (s = e; n > u;) {
                        if (c[--n] < l[n]) {
                            for (e = n; e && !c[--e];) c[e] = 9;
                            --c[e], c[n] += 10
                        }
                        c[n] -= l[n]
                    }
                    for (; 0 === c[--s];) c.pop();
                    for (; 0 === c[0];) c.shift(), --d;
                    return c[0] || (t.s = 1, c = [d = 0]), t.c = c, t.e = d, t
                }, l.mod = function(t) {
                    var e, n = this,
                        r = n.constructor,
                        i = n.s,
                        o = (t = new r(t)).s;
                    if (!t.c[0]) throw Error(f);
                    return n.s = t.s = 1, e = 1 == t.cmp(n), n.s = i, t.s = o, e ? new r(n) : (i = r.DP, o = r.RM, r.DP = r.RM = 0, n = n.div(t), r.DP = i, r.RM = o, this.minus(n.times(t)))
                }, l.plus = l.add = function(t) {
                    var e, n, r, i = this,
                        o = i.constructor;
                    if (t = new o(t), i.s != t.s) return t.s = -t.s, i.minus(t);
                    var a = i.e,
                        u = i.c,
                        s = t.e,
                        c = t.c;
                    if (!u[0] || !c[0]) return c[0] || (u[0] ? t = new o(i) : t.s = i.s), t;
                    if (u = u.slice(), e = a - s) {
                        for (e > 0 ? (s = a, r = c) : (e = -e, r = u), r.reverse(); e--;) r.push(0);
                        r.reverse()
                    }
                    for (u.length - c.length < 0 && (r = c, c = u, u = r), e = c.length, n = 0; e; u[e] %= 10) n = (u[--e] = u[e] + c[e] + n) / 10 | 0;
                    for (n && (u.unshift(n), ++s), e = u.length; 0 === u[--e];) u.pop();
                    return t.c = u, t.e = s, t
                }, l.pow = function(t) {
                    var e = this,
                        n = new e.constructor("1"),
                        r = n,
                        i = t < 0;
                    if (t !== ~~t || t < -1e6 || t > 1e6) throw Error(u + "exponent");
                    for (i && (t = -t); 1 & t && (r = r.times(e)), t >>= 1;) e = e.times(e);
                    return i ? n.div(r) : r
                }, l.prec = function(t, e) {
                    if (t !== ~~t || t < 1 || t > o) throw Error(u + "precision");
                    return v(new this.constructor(this), t, e)
                }, l.round = function(t, e) {
                    if (t === d) t = 0;
                    else if (t !== ~~t || t < -o || t > o) throw Error(s);
                    return v(new this.constructor(this), t + this.e + 1, e)
                }, l.sqrt = function() {
                    var t, e, n, r = this,
                        i = r.constructor,
                        o = r.s,
                        u = r.e,
                        s = new i("0.5");
                    if (!r.c[0]) return new i(r);
                    if (o < 0) throw Error(a + "No square root");
                    0 === (o = Math.sqrt(r + "")) || o === 1 / 0 ? ((e = r.c.join("")).length + u & 1 || (e += "0"), u = ((u + 1) / 2 | 0) - (u < 0 || 1 & u), t = new i(((o = Math.sqrt(e)) == 1 / 0 ? "5e" : (o = o.toExponential()).slice(0, o.indexOf("e") + 1)) + u)) : t = new i(o + ""), u = t.e + (i.DP += 4);
                    do {
                        n = t, t = s.times(n.plus(r.div(n)))
                    } while (n.c.slice(0, u).join("") !== t.c.slice(0, u).join(""));
                    return v(t, (i.DP -= 4) + t.e + 1, i.RM)
                }, l.times = l.mul = function(t) {
                    var e, n = this,
                        r = n.constructor,
                        i = n.c,
                        o = (t = new r(t)).c,
                        a = i.length,
                        u = o.length,
                        s = n.e,
                        c = t.e;
                    if (t.s = n.s == t.s ? 1 : -1, !i[0] || !o[0]) return t.c = [t.e = 0], t;
                    for (t.e = s + c, a < u && (e = i, i = o, o = e, c = a, a = u, u = c), e = new Array(c = a + u); c--;) e[c] = 0;
                    for (s = u; s--;) {
                        for (u = 0, c = a + s; c > s;) u = e[c] + o[s] * i[c - s - 1] + u, e[c--] = u % 10, u = u / 10 | 0;
                        e[c] = u
                    }
                    for (u ? ++t.e : e.shift(), s = e.length; !e[--s];) e.pop();
                    return t.c = e, t
                }, l.toExponential = function(t, e) {
                    var n = this,
                        r = n.c[0];
                    if (t !== d) {
                        if (t !== ~~t || t < 0 || t > o) throw Error(s);
                        for (n = v(new n.constructor(n), ++t, e); n.c.length < t;) n.c.push(0)
                    }
                    return p(n, !0, !!r)
                }, l.toFixed = function(t, e) {
                    var n = this,
                        r = n.c[0];
                    if (t !== d) {
                        if (t !== ~~t || t < 0 || t > o) throw Error(s);
                        for (t = t + (n = v(new n.constructor(n), t + n.e + 1, e)).e + 1; n.c.length < t;) n.c.push(0)
                    }
                    return p(n, !1, !!r)
                }, l.toJSON = l.toString = function() {
                    var t = this,
                        e = t.constructor;
                    return p(t, t.e <= e.NE || t.e >= e.PE, !!t.c[0])
                }, l.toNumber = function() {
                    var t = Number(p(this, !0, !0));
                    if (!0 === this.constructor.strict && !this.eq(t.toString())) throw Error(a + "Imprecise conversion");
                    return t
                }, l.toPrecision = function(t, e) {
                    var n = this,
                        r = n.constructor,
                        i = n.c[0];
                    if (t !== d) {
                        if (t !== ~~t || t < 1 || t > o) throw Error(u + "precision");
                        for (n = v(new r(n), t, e); n.c.length < t;) n.c.push(0)
                    }
                    return p(n, t <= n.e || n.e <= r.NE || n.e >= r.PE, !!i)
                }, l.valueOf = function() {
                    var t = this,
                        e = t.constructor;
                    if (!0 === e.strict) throw Error(a + "valueOf disallowed");
                    return p(t, t.e <= e.NE || t.e >= e.PE, !0)
                }, i = function t() {
                    function e(n) {
                        var r = this;
                        if (!(r instanceof e)) return n === d ? t() : new e(n);
                        if (n instanceof e) r.s = n.s, r.e = n.e, r.c = n.c.slice();
                        else {
                            if ("string" != typeof n) {
                                if (!0 === e.strict) throw TypeError(u + "number");
                                n = 0 === n && 1 / n < 0 ? "-0" : String(n)
                            }! function(t, e) {
                                var n, r, i;
                                if (!h.test(e)) throw Error(u + "number");
                                for (t.s = "-" == e.charAt(0) ? (e = e.slice(1), -1) : 1, (n = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (r = e.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +e.slice(r + 1), e = e.substring(0, r)) : n < 0 && (n = e.length), i = e.length, r = 0; r < i && "0" == e.charAt(r);) ++r;
                                if (r == i) t.c = [t.e = 0];
                                else {
                                    for (; i > 0 && "0" == e.charAt(--i););
                                    for (t.e = n - r - 1, t.c = [], n = 0; r <= i;) t.c[n++] = +e.charAt(r++)
                                }
                            }(r, n)
                        }
                        r.constructor = e
                    }
                    return e.prototype = l, e.DP = 20, e.RM = 1, e.NE = -7, e.PE = 21, e.strict = !1, e.roundDown = 0, e.roundHalfUp = 1, e.roundHalfEven = 2, e.roundUp = 3, e
                }(), i.default = i.Big = i, void 0 === (r = function() {
                    return i
                }.call(e, n, e, t)) || (t.exports = r)
            }()
        },
        64531: (t, e) => {
            "use strict";
            var n, r = !("undefined" == typeof window || !window.document || !window.document.createElement);

            function i() {
                if (n) return n;
                if (!r || !window.document.body) return "indeterminate";
                var t = window.document.createElement("div");
                return t.appendChild(document.createTextNode("ABCD")), t.dir = "rtl", t.style.fontSize = "14px", t.style.width = "4px", t.style.height = "1px", t.style.position = "absolute", t.style.top = "-1000px", t.style.overflow = "scroll", document.body.appendChild(t), n = "reverse", t.scrollLeft > 0 ? n = "default" : (t.scrollLeft = 1, 0 === t.scrollLeft && (n = "negative")), document.body.removeChild(t), n
            }
            e.detectScrollType = i, e.getNormalizedScrollLeft = function(t, e) {
                var n = t.scrollLeft;
                if ("rtl" !== e) return n;
                var r = i();
                if ("indeterminate" === r) return Number.NaN;
                switch (r) {
                    case "negative":
                        return t.scrollWidth - t.clientWidth + n;
                    case "reverse":
                        return t.scrollWidth - t.clientWidth - n
                }
                return n
            }
        },
        32563: (t, e, n) => {
            "use strict";
            n.d(e, {
                mobiletouch: () => i,
                setClasses: () => a,
                touch: () => o
            });
            var r = n(75774);
            const i = r.mobiletouch,
                o = r.touch;

            function a() {
                document.documentElement.classList.add(r.touch ? "feature-touch" : "feature-no-touch", r.mobiletouch ? "feature-mobiletouch" : "feature-no-mobiletouch")
            }
        },
        49483: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                CheckMobile: () => d,
                appVersion: () => l,
                checkPageType: () => b,
                desktopAppVersion: () => f,
                isChrome: () => g,
                isDesktopApp: () => s,
                isEdge: () => m,
                isFF: () => y,
                isLinux: () => u,
                isMac: () => o,
                isSafari: () => w,
                isSymphonyEmbed: () => c,
                isWindows: () => a,
                onGoPro: () => _,
                onMainPage: () => x,
                onWidget: () => v,
                supportTouch: () => p
            });
            var r = n(75774);
            const i = window.TradingView = window.TradingView || {};

            function o() {
                return r.isMac
            }

            function a() {
                return r.isWindows
            }

            function u() {
                return r.isLinux
            }

            function s() {
                return /TVDesktop/i.test(navigator.userAgent)
            }

            function c() {
                return i.isSymphony || !1
            }

            function f() {
                const t = navigator.userAgent.match(/TVDesktop\/([^\s]+)/);
                return t && t[1]
            }

            function l() {
                const t = navigator.userAgent.match(/TradingView\/([^\s]+)/);
                return t && t[1]
            }
            const d = {
                Android: () => r.isAndroid,
                BlackBerry: () => r.isBlackBerry,
                iOS: () => r.isIOS,
                Opera: () => r.isOperaMini,
                isIPad: () => r.isIPad,
                any: () => r.isAnyMobile
            };
            i.isMobile = d;
            const h = new Map;

            function v() {
                const t = window.location.pathname,
                    e = window.location.host,
                    n = `${e}${t}`;
                return h.has(n) || h.set(n, function(t, e) {
                    const n = ["^widget-docs"];
                    for (const t of n)
                        if (new RegExp(t).test(e)) return !0;
                    const r = ["^widgetembed/?$", "^cmewidgetembed/?$", "^([0-9a-zA-Z-]+)/widgetembed/?$", "^([0-9a-zA-Z-]+)/widgetstatic/?$", "^([0-9a-zA-Z-]+)?/?mediumwidgetembed/?$", "^twitter-chart/?$", "^telegram/chart/?$", "^embed/([0-9a-zA-Z]{8})/?$", "^widgetpopup/?$", "^extension/?$", "^idea-popup/?$", "^hotlistswidgetembed/?$", "^([0-9a-zA-Z-]+)/hotlistswidgetembed/?$", "^marketoverviewwidgetembed/?$", "^([0-9a-zA-Z-]+)/marketoverviewwidgetembed/?$", "^eventswidgetembed/?$", "^tickerswidgetembed/?$", "^forexcrossrateswidgetembed/?$", "^forexheatmapwidgetembed/?$", "^marketquoteswidgetembed/?$", "^screenerwidget/?$", "^cryptomktscreenerwidget/?$", "^([0-9a-zA-Z-]+)/cryptomktscreenerwidget/?$", "^([0-9a-zA-Z-]+)/marketquoteswidgetembed/?$", "^technical-analysis-widget-embed/$", "^singlequotewidgetembed/?$", "^([0-9a-zA-Z-]+)/singlequotewidgetembed/?$", "^embed-widget/([0-9a-zA-Z-]+)/(([0-9a-zA-Z-]+)/)?$", "^widget-docs/([0-9a-zA-Z-]+)/([0-9a-zA-Z-/]+)?$"],
                        i = t.replace(/^\//, "");
                    let o;
                    for (let t = r.length - 1; t >= 0; t--)
                        if (o = new RegExp(r[t]), o.test(i)) return !0;
                    return !1
                }(t, e)), h.get(n) ? ? !1
            }

            function p() {
                return r.mobiletouch || r.touch || r.isAnyMobile
            }

            function b(t) {
                return new URLSearchParams(window.location.search).get("page_type") === t
            }
            i.onWidget = v;
            const g = r.isChrome,
                y = r.isFF,
                m = r.isEdge,
                w = r.isSafari;

            function _() {
                return "/pricing/" === window.location.pathname
            }

            function x() {
                return "/" === window.location.pathname
            }
        },
        11542: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                t: () => r.t,
                withTranslationContext: () => i
            }), n(40167);
            var r = n(89880);

            function i(t) {
                throw new Error("Not implemented")
            }
        },
        28865: (t, e, n) => {
            "use strict";
            n.d(e, {
                getIsoLanguageCodeFromLanguage: () => i
            });
            const r = {
                ar_AE: "ar",
                br: "pt",
                de_DE: "de",
                ca_ES: "ca",
                he_IL: "he",
                id_ID: "id",
                in: "en",
                kr: "ko",
                ms_MY: "ms",
                sv_SE: "sv",
                th_TH: "th",
                uk: "en",
                vi_VN: "vi",
                zh_CN: "zh-Hans",
                zh_TW: "zh-Hant",
                zh: "zh-Hans",
                hu_HU: "hu-HU"
            };

            function i(t) {
                return r[t] || t
            }
        },
        37103: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                disable: () => r.disable,
                enable: () => r.enable,
                enabled: () => r.enabled,
                getAllFeatures: () => r.getAllFeatures,
                setEnabled: () => r.setEnabled
            });
            var r = n(95779);
            "object" == typeof __initialDisabledFeaturesets && Array.isArray(__initialDisabledFeaturesets) && __initialDisabledFeaturesets.forEach(r.disable), "object" == typeof __initialEnabledFeaturesets && Array.isArray(__initialEnabledFeaturesets) && __initialEnabledFeaturesets.forEach(r.enable)
        },
        40167: (t, e, n) => {
            "use strict";
            n.r(e);
            var r = n(87465);
            const i = /{(\w+)}/g,
                o = /{(\d+)}/g;
            String.prototype.format = function(...t) {
                const e = (0, r.isObject)(t[0]),
                    n = e ? i : o,
                    a = e ? (e, n) => {
                        const r = t[0];
                        return void 0 !== r[n] ? r[n] : e
                    } : (e, n) => {
                        const r = parseInt(n, 10),
                            i = t[r];
                        return void 0 !== i ? i : e
                    };
                return this.replace(n, a)
            }
        },
        57298: () => {
            "use strict";
            var t, e, n, r, i, o;
            window.parent !== window && window.CanvasRenderingContext2D && window.TextMetrics && (e = window.CanvasRenderingContext2D.prototype) && e.hasOwnProperty("font") && e.hasOwnProperty("mozTextStyle") && "function" == typeof e.__lookupSetter__ && (n = e.__lookupSetter__("font")) && (e.__defineSetter__("font", (function(t) {
                try {
                    return n.call(this, t)
                } catch (t) {
                    if ("NS_ERROR_FAILURE" !== t.name) throw t
                }
            })), r = e.measureText, t = function() {
                this.width = 0, this.isFake = !0, this.__proto__ = window.TextMetrics.prototype
            }, e.measureText = function(e) {
                try {
                    return r.apply(this, arguments)
                } catch (e) {
                    if ("NS_ERROR_FAILURE" !== e.name) throw e;
                    return new t
                }
            }, i = e.fillText, e.fillText = function(t, e, n, r) {
                try {
                    i.apply(this, arguments)
                } catch (t) {
                    if ("NS_ERROR_FAILURE" !== t.name) throw t
                }
            }, o = e.strokeText, e.strokeText = function(t, e, n, r) {
                try {
                    o.apply(this, arguments)
                } catch (t) {
                    if ("NS_ERROR_FAILURE" !== t.name) throw t
                }
            })
        },
        85459: function(t, e, n) {
            var r;
            ! function(e) {
                "use strict";

                function i() {}
                var o = i.prototype,
                    a = e.EventEmitter;

                function u(t, e) {
                    for (var n = t.length; n--;)
                        if (t[n].listener === e) return n;
                    return -1
                }

                function s(t) {
                    return function() {
                        return this[t].apply(this, arguments)
                    }
                }

                function c(t) {
                    return "function" == typeof t || t instanceof RegExp || !(!t || "object" != typeof t) && c(t.listener)
                }
                o.getListeners = function(t) {
                    var e, n, r = this._getEvents();
                    if (t instanceof RegExp)
                        for (n in e = {}, r) r.hasOwnProperty(n) && t.test(n) && (e[n] = r[n]);
                    else e = r[t] || (r[t] = []);
                    return e
                }, o.flattenListeners = function(t) {
                    var e, n = [];
                    for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
                    return n
                }, o.getListenersAsObject = function(t) {
                    var e, n = this.getListeners(t);
                    return n instanceof Array && ((e = {})[t] = n), e || n
                }, o.addListener = function(t, e) {
                    if (!c(e)) throw new TypeError("listener must be a function");
                    var n, r = this.getListenersAsObject(t),
                        i = "object" == typeof e;
                    for (n in r) r.hasOwnProperty(n) && -1 === u(r[n], e) && r[n].push(i ? e : {
                        listener: e,
                        once: !1
                    });
                    return this
                }, o.on = s("addListener"), o.addOnceListener = function(t, e) {
                    return this.addListener(t, {
                        listener: e,
                        once: !0
                    })
                }, o.once = s("addOnceListener"), o.defineEvent = function(t) {
                    return this.getListeners(t), this
                }, o.defineEvents = function(t) {
                    for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
                    return this
                }, o.removeListener = function(t, e) {
                    var n, r, i = this.getListenersAsObject(t);
                    for (r in i) i.hasOwnProperty(r) && -1 !== (n = u(i[r], e)) && i[r].splice(n, 1);
                    return this
                }, o.off = s("removeListener"), o.addListeners = function(t, e) {
                    return this.manipulateListeners(!1, t, e)
                }, o.removeListeners = function(t, e) {
                    return this.manipulateListeners(!0, t, e)
                }, o.manipulateListeners = function(t, e, n) {
                    var r, i, o = t ? this.removeListener : this.addListener,
                        a = t ? this.removeListeners : this.addListeners;
                    if ("object" != typeof e || e instanceof RegExp)
                        for (r = n.length; r--;) o.call(this, e, n[r]);
                    else
                        for (r in e) e.hasOwnProperty(r) && (i = e[r]) && ("function" == typeof i ? o.call(this, r, i) : a.call(this, r, i));
                    return this
                }, o.removeEvent = function(t) {
                    var e, n = typeof t,
                        r = this._getEvents();
                    if ("string" === n) delete r[t];
                    else if (t instanceof RegExp)
                        for (e in r) r.hasOwnProperty(e) && t.test(e) && delete r[e];
                    else delete this._events;
                    return this
                }, o.removeAllListeners = s("removeEvent"), o.emitEvent = function(t, e) {
                    var n, r, i, o, a = this.getListenersAsObject(t);
                    for (o in a)
                        if (a.hasOwnProperty(o))
                            for (n = a[o].slice(0), i = 0; i < n.length; i++) !0 === (r = n[i]).once && this.removeListener(t, r.listener), r.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, r.listener);
                    return this
                }, o.trigger = s("emitEvent"), o.emit = function(t) {
                    var e = Array.prototype.slice.call(arguments, 1);
                    return this.emitEvent(t, e)
                }, o.setOnceReturnValue = function(t) {
                    return this._onceReturnValue = t, this
                }, o._getOnceReturnValue = function() {
                    return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
                }, o._getEvents = function() {
                    return this._events || (this._events = {})
                }, i.noConflict = function() {
                    return e.EventEmitter = a, i
                }, void 0 === (r = function() {
                    return i
                }.call(e, n, e, t)) || (t.exports = r)
            }(this || {})
        },
        27714: (t, e, n) => {
            "use strict";

            function r(t) {
                var e = t.width,
                    n = t.height;
                if (e < 0) throw new Error("Negative width is not allowed for Size");
                if (n < 0) throw new Error("Negative height is not allowed for Size");
                return {
                    width: e,
                    height: n
                }
            }

            function i(t, e) {
                return t.width === e.width && t.height === e.height
            }
            n.d(e, {
                CanvasRenderingTarget2D: () => c,
                bindCanvasElementBitmapSizeTo: () => u,
                equalSizes: () => i,
                size: () => r
            });
            var o = function() {
                    function t(t) {
                        var e = this;
                        this._resolutionListener = function() {
                            return e._onResolutionChanged()
                        }, this._resolutionMediaQueryList = null, this._observers = [], this._window = t, this._installResolutionListener()
                    }
                    return t.prototype.dispose = function() {
                        this._uninstallResolutionListener(), this._window = null
                    }, Object.defineProperty(t.prototype, "value", {
                        get: function() {
                            return this._window.devicePixelRatio
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.subscribe = function(t) {
                        var e = this,
                            n = {
                                next: t
                            };
                        return this._observers.push(n), {
                            unsubscribe: function() {
                                e._observers = e._observers.filter((function(t) {
                                    return t !== n
                                }))
                            }
                        }
                    }, t.prototype._installResolutionListener = function() {
                        if (null !== this._resolutionMediaQueryList) throw new Error("Resolution listener is already installed");
                        var t = this._window.devicePixelRatio;
                        this._resolutionMediaQueryList = this._window.matchMedia("all and (resolution: ".concat(t, "dppx)")), this._resolutionMediaQueryList.addListener(this._resolutionListener)
                    }, t.prototype._uninstallResolutionListener = function() {
                        null !== this._resolutionMediaQueryList && (this._resolutionMediaQueryList.removeListener(this._resolutionListener), this._resolutionMediaQueryList = null)
                    }, t.prototype._reinstallResolutionListener = function() {
                        this._uninstallResolutionListener(), this._installResolutionListener()
                    }, t.prototype._onResolutionChanged = function() {
                        var t = this;
                        this._observers.forEach((function(e) {
                            return e.next(t._window.devicePixelRatio)
                        })), this._reinstallResolutionListener()
                    }, t
                }(),
                a = function() {
                    function t(t, e, n) {
                        var i;
                        this._canvasElement = null, this._bitmapSizeChangedListeners = [], this._suggestedBitmapSize = null, this._suggestedBitmapSizeChangedListeners = [], this._devicePixelRatioObservable = null, this._canvasElementResizeObserver = null, this._canvasElement = t, this._canvasElementClientSize = r({
                            width: this._canvasElement.clientWidth,
                            height: this._canvasElement.clientHeight
                        }), this._transformBitmapSize = null != e ? e : function(t) {
                            return t
                        }, this._allowResizeObserver = null === (i = null == n ? void 0 : n.allowResizeObserver) || void 0 === i || i, this._chooseAndInitObserver()
                    }
                    return t.prototype.dispose = function() {
                        var t, e;
                        if (null === this._canvasElement) throw new Error("Object is disposed");
                        null === (t = this._canvasElementResizeObserver) || void 0 === t || t.disconnect(), this._canvasElementResizeObserver = null, null === (e = this._devicePixelRatioObservable) || void 0 === e || e.dispose(), this._devicePixelRatioObservable = null, this._suggestedBitmapSizeChangedListeners.length = 0, this._bitmapSizeChangedListeners.length = 0, this._canvasElement = null
                    }, Object.defineProperty(t.prototype, "canvasElement", {
                        get: function() {
                            if (null === this._canvasElement) throw new Error("Object is disposed");
                            return this._canvasElement
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "canvasElementClientSize", {
                        get: function() {
                            return this._canvasElementClientSize
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "bitmapSize", {
                        get: function() {
                            return r({
                                width: this.canvasElement.width,
                                height: this.canvasElement.height
                            })
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.resizeCanvasElement = function(t) {
                        this._canvasElementClientSize = r(t), this.canvasElement.style.width = "".concat(this._canvasElementClientSize.width, "px"), this.canvasElement.style.height = "".concat(this._canvasElementClientSize.height, "px"), this._invalidateBitmapSize()
                    }, t.prototype.subscribeBitmapSizeChanged = function(t) {
                        this._bitmapSizeChangedListeners.push(t)
                    }, t.prototype.unsubscribeBitmapSizeChanged = function(t) {
                        this._bitmapSizeChangedListeners = this._bitmapSizeChangedListeners.filter((function(e) {
                            return e !== t
                        }))
                    }, Object.defineProperty(t.prototype, "suggestedBitmapSize", {
                        get: function() {
                            return this._suggestedBitmapSize
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.subscribeSuggestedBitmapSizeChanged = function(t) {
                        this._suggestedBitmapSizeChangedListeners.push(t)
                    }, t.prototype.unsubscribeSuggestedBitmapSizeChanged = function(t) {
                        this._suggestedBitmapSizeChangedListeners = this._suggestedBitmapSizeChangedListeners.filter((function(e) {
                            return e !== t
                        }))
                    }, t.prototype.applySuggestedBitmapSize = function() {
                        if (null !== this._suggestedBitmapSize) {
                            var t = this._suggestedBitmapSize;
                            this._suggestedBitmapSize = null, this._resizeBitmap(t), this._emitSuggestedBitmapSizeChanged(t, this._suggestedBitmapSize)
                        }
                    }, t.prototype._resizeBitmap = function(t) {
                        var e = this.bitmapSize;
                        i(e, t) || (this.canvasElement.width = t.width, this.canvasElement.height = t.height, this._emitBitmapSizeChanged(e, t))
                    }, t.prototype._emitBitmapSizeChanged = function(t, e) {
                        var n = this;
                        this._bitmapSizeChangedListeners.forEach((function(r) {
                            return r.call(n, t, e)
                        }))
                    }, t.prototype._suggestNewBitmapSize = function(t) {
                        var e = this._suggestedBitmapSize,
                            n = r(this._transformBitmapSize(t, this._canvasElementClientSize)),
                            o = i(this.bitmapSize, n) ? null : n;
                        null === e && null === o || null !== e && null !== o && i(e, o) || (this._suggestedBitmapSize = o, this._emitSuggestedBitmapSizeChanged(e, o))
                    }, t.prototype._emitSuggestedBitmapSizeChanged = function(t, e) {
                        var n = this;
                        this._suggestedBitmapSizeChangedListeners.forEach((function(r) {
                            return r.call(n, t, e)
                        }))
                    }, t.prototype._chooseAndInitObserver = function() {
                        var t = this;
                        this._allowResizeObserver ? new Promise((function(t) {
                            var e = new ResizeObserver((function(n) {
                                t(n.every((function(t) {
                                    return "devicePixelContentBoxSize" in t
                                }))), e.disconnect()
                            }));
                            e.observe(document.body, {
                                box: "device-pixel-content-box"
                            })
                        })).catch((function() {
                            return !1
                        })).then((function(e) {
                            return e ? t._initResizeObserver() : t._initDevicePixelRatioObservable()
                        })) : this._initDevicePixelRatioObservable()
                    }, t.prototype._initDevicePixelRatioObservable = function() {
                        var t = this;
                        if (null !== this._canvasElement) {
                            var e = s(this._canvasElement);
                            if (null === e) throw new Error("No window is associated with the canvas");
                            this._devicePixelRatioObservable = function(t) {
                                return new o(t)
                            }(e), this._devicePixelRatioObservable.subscribe((function() {
                                return t._invalidateBitmapSize()
                            })), this._invalidateBitmapSize()
                        }
                    }, t.prototype._invalidateBitmapSize = function() {
                        var t, e;
                        if (null !== this._canvasElement) {
                            var n = s(this._canvasElement);
                            if (null !== n) {
                                var i = null !== (e = null === (t = this._devicePixelRatioObservable) || void 0 === t ? void 0 : t.value) && void 0 !== e ? e : n.devicePixelRatio,
                                    o = this._canvasElement.getClientRects(),
                                    a = void 0 !== o[0] ? function(t, e) {
                                        return r({
                                            width: Math.round(t.left * e + t.width * e) - Math.round(t.left * e),
                                            height: Math.round(t.top * e + t.height * e) - Math.round(t.top * e)
                                        })
                                    }(o[0], i) : r({
                                        width: this._canvasElementClientSize.width * i,
                                        height: this._canvasElementClientSize.height * i
                                    });
                                this._suggestNewBitmapSize(a)
                            }
                        }
                    }, t.prototype._initResizeObserver = function() {
                        var t = this;
                        null !== this._canvasElement && (this._canvasElementResizeObserver = new ResizeObserver((function(e) {
                            var n = e.find((function(e) {
                                return e.target === t._canvasElement
                            }));
                            if (n && n.devicePixelContentBoxSize && n.devicePixelContentBoxSize[0]) {
                                var i = n.devicePixelContentBoxSize[0],
                                    o = r({
                                        width: i.inlineSize,
                                        height: i.blockSize
                                    });
                                t._suggestNewBitmapSize(o)
                            }
                        })), this._canvasElementResizeObserver.observe(this._canvasElement, {
                            box: "device-pixel-content-box"
                        }))
                    }, t
                }();

            function u(t, e) {
                if ("device-pixel-content-box" === e.type) return new a(t, e.transform, e.options);
                throw new Error("Unsupported binding target")
            }

            function s(t) {
                return t.ownerDocument.defaultView
            }
            var c = function() {
                function t(t, e, n) {
                    if (0 === e.width || 0 === e.height) throw new TypeError("Rendering target could only be created on a media with positive width and height");
                    if (this._mediaSize = e, 0 === n.width || 0 === n.height) throw new TypeError("Rendering target could only be created using a bitmap with positive integer width and height");
                    this._bitmapSize = n, this._context = t
                }
                return t.prototype.useMediaCoordinateSpace = function(t) {
                    try {
                        return this._context.save(), this._context.setTransform(1, 0, 0, 1, 0, 0), this._context.scale(this._horizontalPixelRatio, this._verticalPixelRatio), t({
                            context: this._context,
                            mediaSize: this._mediaSize
                        })
                    } finally {
                        this._context.restore()
                    }
                }, t.prototype.useBitmapCoordinateSpace = function(t) {
                    try {
                        return this._context.save(), this._context.setTransform(1, 0, 0, 1, 0, 0), t({
                            context: this._context,
                            mediaSize: this._mediaSize,
                            bitmapSize: this._bitmapSize,
                            horizontalPixelRatio: this._horizontalPixelRatio,
                            verticalPixelRatio: this._verticalPixelRatio
                        })
                    } finally {
                        this._context.restore()
                    }
                }, Object.defineProperty(t.prototype, "_horizontalPixelRatio", {
                    get: function() {
                        return this._bitmapSize.width / this._mediaSize.width
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "_verticalPixelRatio", {
                    get: function() {
                        return this._bitmapSize.height / this._mediaSize.height
                    },
                    enumerable: !1,
                    configurable: !0
                }), t
            }()
        },
        46956: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => u
            });
            var r = n(54523);
            const i = function(t, e) {
                for (var n = t.length; n--;)
                    if ((0, r.default)(t[n][0], e)) return n;
                return -1
            };
            var o = Array.prototype.splice;

            function a(t) {
                var e = -1,
                    n = null == t ? 0 : t.length;
                for (this.clear(); ++e < n;) {
                    var r = t[e];
                    this.set(r[0], r[1])
                }
            }
            a.prototype.clear = function() {
                this.__data__ = [], this.size = 0
            }, a.prototype.delete = function(t) {
                var e = this.__data__,
                    n = i(e, t);
                return !(n < 0 || (n == e.length - 1 ? e.pop() : o.call(e, n, 1), --this.size, 0))
            }, a.prototype.get = function(t) {
                var e = this.__data__,
                    n = i(e, t);
                return n < 0 ? void 0 : e[n][1]
            }, a.prototype.has = function(t) {
                return i(this.__data__, t) > -1
            }, a.prototype.set = function(t, e) {
                var n = this.__data__,
                    r = i(n, t);
                return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this
            };
            const u = a
        },
        19385: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => o
            });
            var r = n(52494),
                i = n(99615);
            const o = (0, r.default)(i.default, "Map")
        },
        75440: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => d
            });
            const r = (0, n(52494).default)(Object, "create");
            var i = Object.prototype.hasOwnProperty;
            var o = Object.prototype.hasOwnProperty;

            function a(t) {
                var e = -1,
                    n = null == t ? 0 : t.length;
                for (this.clear(); ++e < n;) {
                    var r = t[e];
                    this.set(r[0], r[1])
                }
            }
            a.prototype.clear = function() {
                this.__data__ = r ? r(null) : {}, this.size = 0
            }, a.prototype.delete = function(t) {
                var e = this.has(t) && delete this.__data__[t];
                return this.size -= e ? 1 : 0, e
            }, a.prototype.get = function(t) {
                var e = this.__data__;
                if (r) {
                    var n = e[t];
                    return "__lodash_hash_undefined__" === n ? void 0 : n
                }
                return i.call(e, t) ? e[t] : void 0
            }, a.prototype.has = function(t) {
                var e = this.__data__;
                return r ? void 0 !== e[t] : o.call(e, t)
            }, a.prototype.set = function(t, e) {
                var n = this.__data__;
                return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? "__lodash_hash_undefined__" : e, this
            };
            const u = a;
            var s = n(46956),
                c = n(19385);
            const f = function(t, e) {
                var n = t.__data__;
                return function(t) {
                    var e = typeof t;
                    return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
                }(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
            };

            function l(t) {
                var e = -1,
                    n = null == t ? 0 : t.length;
                for (this.clear(); ++e < n;) {
                    var r = t[e];
                    this.set(r[0], r[1])
                }
            }
            l.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                    hash: new u,
                    map: new(c.default || s.default),
                    string: new u
                }
            }, l.prototype.delete = function(t) {
                var e = f(this, t).delete(t);
                return this.size -= e ? 1 : 0, e
            }, l.prototype.get = function(t) {
                return f(this, t).get(t)
            }, l.prototype.has = function(t) {
                return f(this, t).has(t)
            }, l.prototype.set = function(t, e) {
                var n = f(this, t),
                    r = n.size;
                return n.set(t, e), this.size += n.size == r ? 0 : 1, this
            };
            const d = l
        },
        87593: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => u
            });
            var r = n(46956);
            var i = n(19385),
                o = n(75440);

            function a(t) {
                var e = this.__data__ = new r.default(t);
                this.size = e.size
            }
            a.prototype.clear = function() {
                this.__data__ = new r.default, this.size = 0
            }, a.prototype.delete = function(t) {
                var e = this.__data__,
                    n = e.delete(t);
                return this.size = e.size, n
            }, a.prototype.get = function(t) {
                return this.__data__.get(t)
            }, a.prototype.has = function(t) {
                return this.__data__.has(t)
            }, a.prototype.set = function(t, e) {
                var n = this.__data__;
                if (n instanceof r.default) {
                    var a = n.__data__;
                    if (!i.default || a.length < 199) return a.push([t, e]), this.size = ++n.size, this;
                    n = this.__data__ = new o.default(a)
                }
                return n.set(t, e), this.size = n.size, this
            };
            const u = a
        },
        66711: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => r
            });
            const r = n(99615).default.Symbol
        },
        16299: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => r
            });
            const r = n(99615).default.Uint8Array
        },
        60545: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => c
            });
            var r = n(54404),
                i = n(56052),
                o = n(32437),
                a = n(99313),
                u = n(9125),
                s = Object.prototype.hasOwnProperty;
            const c = function(t, e) {
                var n = (0, i.default)(t),
                    c = !n && (0, r.default)(t),
                    f = !n && !c && (0, o.default)(t),
                    l = !n && !c && !f && (0, u.default)(t),
                    d = n || c || f || l,
                    h = d ? function(t, e) {
                        for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                        return r
                    }(t.length, String) : [],
                    v = h.length;
                for (var p in t) !e && !s.call(t, p) || d && ("length" == p || f && ("offset" == p || "parent" == p) || l && ("buffer" == p || "byteLength" == p || "byteOffset" == p) || (0, a.default)(p, v)) || h.push(p);
                return h
            }
        },
        18573: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => r
            });
            const r = function(t, e) {
                for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
                return t
            }
        },
        61572: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => a
            });
            var r = n(857),
                i = n(54523),
                o = Object.prototype.hasOwnProperty;
            const a = function(t, e, n) {
                var a = t[e];
                o.call(t, e) && (0, i.default)(a, n) && (void 0 !== n || e in t) || (0, r.default)(t, e, n)
            }
        },
        857: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => i
            });
            var r = n(55136);
            const i = function(t, e, n) {
                "__proto__" == e && r.default ? (0, r.default)(t, e, {
                    configurable: !0,
                    enumerable: !0,
                    value: n,
                    writable: !0
                }) : t[e] = n
            }
        },
        76507: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => r
            });
            const r = function(t, e, n) {
                for (var r = -1, i = Object(t), o = n(t), a = o.length; a--;) {
                    var u = o[++r];
                    if (!1 === e(i[u], u, i)) break
                }
                return t
            }
        },
        49084: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => o
            });
            var r = n(31434),
                i = n(13383);
            const o = function(t, e) {
                for (var n = 0, o = (e = (0, r.default)(e, t)).length; null != t && n < o;) t = t[(0, i.default)(e[n++])];
                return n && n == o ? t : void 0
            }
        },
        96909: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => o
            });
            var r = n(18573),
                i = n(56052);
            const o = function(t, e, n) {
                var o = e(t);
                return (0, i.default)(t) ? o : (0, r.default)(o, n(t))
            }
        },
        89572: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => f
            });
            var r = n(66711),
                i = Object.prototype,
                o = i.hasOwnProperty,
                a = i.toString,
                u = r.default ? r.default.toStringTag : void 0;
            var s = Object.prototype.toString;
            var c = r.default ? r.default.toStringTag : void 0;
            const f = function(t) {
                return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : c && c in Object(t) ? function(t) {
                    var e = o.call(t, u),
                        n = t[u];
                    try {
                        t[u] = void 0;
                        var r = !0
                    } catch (t) {}
                    var i = a.call(t);
                    return r && (e ? t[u] = n : delete t[u]), i
                }(t) : function(t) {
                    return s.call(t)
                }(t)
            }
        },
        12189: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => R
            });
            var r = n(87593),
                i = n(75440);

            function o(t) {
                var e = -1,
                    n = null == t ? 0 : t.length;
                for (this.__data__ = new i.default; ++e < n;) this.add(t[e])
            }
            o.prototype.add = o.prototype.push = function(t) {
                return this.__data__.set(t, "__lodash_hash_undefined__"), this
            }, o.prototype.has = function(t) {
                return this.__data__.has(t)
            };
            const a = o,
                u = function(t, e) {
                    for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
                        if (e(t[n], n, t)) return !0;
                    return !1
                },
                s = function(t, e) {
                    return t.has(e)
                },
                c = function(t, e, n, r, i, o) {
                    var c = 1 & n,
                        f = t.length,
                        l = e.length;
                    if (f != l && !(c && l > f)) return !1;
                    var d = o.get(t),
                        h = o.get(e);
                    if (d && h) return d == e && h == t;
                    var v = -1,
                        p = !0,
                        b = 2 & n ? new a : void 0;
                    for (o.set(t, e), o.set(e, t); ++v < f;) {
                        var g = t[v],
                            y = e[v];
                        if (r) var m = c ? r(y, g, v, e, t, o) : r(g, y, v, t, e, o);
                        if (void 0 !== m) {
                            if (m) continue;
                            p = !1;
                            break
                        }
                        if (b) {
                            if (!u(e, (function(t, e) {
                                    if (!s(b, e) && (g === t || i(g, t, n, r, o))) return b.push(e)
                                }))) {
                                p = !1;
                                break
                            }
                        } else if (g !== y && !i(g, y, n, r, o)) {
                            p = !1;
                            break
                        }
                    }
                    return o.delete(t), o.delete(e), p
                };
            var f = n(66711),
                l = n(16299),
                d = n(54523);
            const h = function(t) {
                    var e = -1,
                        n = Array(t.size);
                    return t.forEach((function(t, r) {
                        n[++e] = [r, t]
                    })), n
                },
                v = function(t) {
                    var e = -1,
                        n = Array(t.size);
                    return t.forEach((function(t) {
                        n[++e] = t
                    })), n
                };
            var p = f.default ? f.default.prototype : void 0,
                b = p ? p.valueOf : void 0;
            const g = function(t, e, n, r, i, o, a) {
                switch (n) {
                    case "[object DataView]":
                        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                        t = t.buffer, e = e.buffer;
                    case "[object ArrayBuffer]":
                        return !(t.byteLength != e.byteLength || !o(new l.default(t), new l.default(e)));
                    case "[object Boolean]":
                    case "[object Date]":
                    case "[object Number]":
                        return (0, d.default)(+t, +e);
                    case "[object Error]":
                        return t.name == e.name && t.message == e.message;
                    case "[object RegExp]":
                    case "[object String]":
                        return t == e + "";
                    case "[object Map]":
                        var u = h;
                    case "[object Set]":
                        var s = 1 & r;
                        if (u || (u = v), t.size != e.size && !s) return !1;
                        var f = a.get(t);
                        if (f) return f == e;
                        r |= 2, a.set(t, e);
                        var p = c(u(t), u(e), r, i, o, a);
                        return a.delete(t), p;
                    case "[object Symbol]":
                        if (b) return b.call(t) == b.call(e)
                }
                return !1
            };
            var y = n(38366),
                m = Object.prototype.hasOwnProperty;
            var w = n(81296),
                _ = n(56052),
                x = n(32437),
                j = n(9125),
                E = "[object Arguments]",
                S = "[object Array]",
                O = "[object Object]",
                z = Object.prototype.hasOwnProperty;
            const A = function(t, e, n, i, o, a) {
                var u = (0, _.default)(t),
                    s = (0, _.default)(e),
                    f = u ? S : (0, w.default)(t),
                    l = s ? S : (0, w.default)(e),
                    d = (f = f == E ? O : f) == O,
                    h = (l = l == E ? O : l) == O,
                    v = f == l;
                if (v && (0, x.default)(t)) {
                    if (!(0, x.default)(e)) return !1;
                    u = !0, d = !1
                }
                if (v && !d) return a || (a = new r.default), u || (0, j.default)(t) ? c(t, e, n, i, o, a) : g(t, e, f, n, i, o, a);
                if (!(1 & n)) {
                    var p = d && z.call(t, "__wrapped__"),
                        b = h && z.call(e, "__wrapped__");
                    if (p || b) {
                        var A = p ? t.value() : t,
                            P = b ? e.value() : e;
                        return a || (a = new r.default), o(A, P, n, i, a)
                    }
                }
                return !!v && (a || (a = new r.default), function(t, e, n, r, i, o) {
                    var a = 1 & n,
                        u = (0, y.default)(t),
                        s = u.length;
                    if (s != (0, y.default)(e).length && !a) return !1;
                    for (var c = s; c--;) {
                        var f = u[c];
                        if (!(a ? f in e : m.call(e, f))) return !1
                    }
                    var l = o.get(t),
                        d = o.get(e);
                    if (l && d) return l == e && d == t;
                    var h = !0;
                    o.set(t, e), o.set(e, t);
                    for (var v = a; ++c < s;) {
                        var p = t[f = u[c]],
                            b = e[f];
                        if (r) var g = a ? r(b, p, f, e, t, o) : r(p, b, f, t, e, o);
                        if (!(void 0 === g ? p === b || i(p, b, n, r, o) : g)) {
                            h = !1;
                            break
                        }
                        v || (v = "constructor" == f)
                    }
                    if (h && !v) {
                        var w = t.constructor,
                            _ = e.constructor;
                        w == _ || !("constructor" in t) || !("constructor" in e) || "function" == typeof w && w instanceof w && "function" == typeof _ && _ instanceof _ || (h = !1)
                    }
                    return o.delete(t), o.delete(e), h
                }(t, e, n, i, o, a))
            };
            var P = n(13795);
            const R = function t(e, n, r, i, o) {
                return e === n || (null == e || null == n || !(0, P.default)(e) && !(0, P.default)(n) ? e != e && n != n : A(e, n, r, i, t, o))
            }
        },
        73748: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => j
            });
            var r = n(87593),
                i = n(12189);
            var o = n(82433);
            const a = function(t) {
                return t == t && !(0, o.default)(t)
            };
            var u = n(77251);
            const s = function(t, e) {
                    return function(n) {
                        return null != n && n[t] === e && (void 0 !== e || t in Object(n))
                    }
                },
                c = function(t) {
                    var e = function(t) {
                        for (var e = (0, u.default)(t), n = e.length; n--;) {
                            var r = e[n],
                                i = t[r];
                            e[n] = [r, i, a(i)]
                        }
                        return e
                    }(t);
                    return 1 == e.length && e[0][2] ? s(e[0][0], e[0][1]) : function(n) {
                        return n === t || function(t, e, n, o) {
                            var a = n.length,
                                u = a,
                                s = !o;
                            if (null == t) return !u;
                            for (t = Object(t); a--;) {
                                var c = n[a];
                                if (s && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1
                            }
                            for (; ++a < u;) {
                                var f = (c = n[a])[0],
                                    l = t[f],
                                    d = c[1];
                                if (s && c[2]) {
                                    if (void 0 === l && !(f in t)) return !1
                                } else {
                                    var h = new r.default;
                                    if (o) var v = o(l, d, f, t, e, h);
                                    if (!(void 0 === v ? (0, i.default)(d, l, 3, o, h) : v)) return !1
                                }
                            }
                            return !0
                        }(n, t, e)
                    }
                };
            var f = n(54029);
            const l = function(t, e) {
                return null != t && e in Object(t)
            };
            var d = n(31434),
                h = n(54404),
                v = n(56052),
                p = n(99313),
                b = n(65743),
                g = n(13383);
            const y = function(t, e) {
                return null != t && function(t, e, n) {
                    for (var r = -1, i = (e = (0, d.default)(e, t)).length, o = !1; ++r < i;) {
                        var a = (0, g.default)(e[r]);
                        if (!(o = null != t && n(t, a))) break;
                        t = t[a]
                    }
                    return o || ++r != i ? o : !!(i = null == t ? 0 : t.length) && (0, b.default)(i) && (0, p.default)(a, i) && ((0, v.default)(t) || (0, h.default)(t))
                }(t, e, l)
            };
            var m = n(61070);
            var w = n(76402);
            var _ = n(49084);
            const x = function(t) {
                    return (0, m.default)(t) ? function(t) {
                        return function(e) {
                            return null == e ? void 0 : e[t]
                        }
                    }((0, g.default)(t)) : function(t) {
                        return function(e) {
                            return (0, _.default)(e, t)
                        }
                    }(t)
                },
                j = function(t) {
                    return "function" == typeof t ? t : null == t ? w.default : "object" == typeof t ? (0, v.default)(t) ? function(t, e) {
                        return (0, m.default)(t) && a(e) ? s((0, g.default)(t), e) : function(n) {
                            var r = (0, f.default)(n, t);
                            return void 0 === r && r === e ? y(n, t) : (0, i.default)(e, r, 3)
                        }
                    }(t[0], t[1]) : c(t) : x(t)
                }
        },
        89815: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => a
            });
            var r = n(5196);
            const i = (0, n(45635).default)(Object.keys, Object);
            var o = Object.prototype.hasOwnProperty;
            const a = function(t) {
                if (!(0, r.default)(t)) return i(t);
                var e = [];
                for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
                return e
            }
        },
        38459: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => r
            });
            const r = function(t, e, n) {
                var r = -1,
                    i = t.length;
                e < 0 && (e = -e > i ? 0 : i + e), (n = n > i ? i : n) < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
                for (var o = Array(i); ++r < i;) o[r] = t[r + e];
                return o
            }
        },
        5467: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => r
            });
            const r = function(t) {
                return function(e) {
                    return t(e)
                }
            }
        },
        31434: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => v
            });
            var r = n(56052),
                i = n(61070),
                o = n(59332),
                a = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                u = /\\(\\)?/g;
            const s = function() {
                var t = (0, o.default)((function(t) {
                        var e = [];
                        return 46 === t.charCodeAt(0) && e.push(""), t.replace(a, (function(t, n, r, i) {
                            e.push(r ? i.replace(u, "$1") : n || t)
                        })), e
                    }), (function(t) {
                        return 500 === e.size && e.clear(), t
                    })),
                    e = t.cache;
                return t
            }();
            var c = n(66711);
            var f = n(98111),
                l = c.default ? c.default.prototype : void 0,
                d = l ? l.toString : void 0;
            const h = function t(e) {
                    if ("string" == typeof e) return e;
                    if ((0, r.default)(e)) return function(t, e) {
                        for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
                        return i
                    }(e, t) + "";
                    if ((0, f.default)(e)) return d ? d.call(e) : "";
                    var n = e + "";
                    return "0" == n && 1 / e == -1 / 0 ? "-0" : n
                },
                v = function(t, e) {
                    return (0, r.default)(t) ? t : (0, i.default)(t, e) ? [t] : s(function(t) {
                        return null == t ? "" : h(t)
                    }(t))
                }
        },
        97990: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => i
            });
            var r = n(16299);
            const i = function(t) {
                var e = new t.constructor(t.byteLength);
                return new r.default(e).set(new r.default(t)), e
            }
        },
        14054: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => s
            });
            var r = n(99615),
                i = "object" == typeof exports && exports && !exports.nodeType && exports,
                o = i && "object" == typeof module && module && !module.nodeType && module,
                a = o && o.exports === i ? r.default.Buffer : void 0,
                u = a ? a.allocUnsafe : void 0;
            const s = function(t, e) {
                if (e) return t.slice();
                var n = t.length,
                    r = u ? u(n) : new t.constructor(n);
                return t.copy(r), r
            }
        },
        11523: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => i
            });
            var r = n(97990);
            const i = function(t, e) {
                var n = e ? (0, r.default)(t.buffer) : t.buffer;
                return new t.constructor(n, t.byteOffset, t.length)
            }
        },
        32126: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => r
            });
            const r = function(t, e) {
                var n = -1,
                    r = t.length;
                for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
                return e
            }
        },
        52949: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => o
            });
            var r = n(61572),
                i = n(857);
            const o = function(t, e, n, o) {
                var a = !n;
                n || (n = {});
                for (var u = -1, s = e.length; ++u < s;) {
                    var c = e[u],
                        f = o ? o(n[c], t[c], c, n, t) : void 0;
                    void 0 === f && (f = t[c]), a ? (0, i.default)(n, c, f) : (0, r.default)(n, c, f)
                }
                return n
            }
        },
        55136: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => i
            });
            var r = n(52494);
            const i = function() {
                try {
                    var t = (0, r.default)(Object, "defineProperty");
                    return t({}, "", {}), t
                } catch (t) {}
            }()
        },
        97889: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => r
            });
            const r = "object" == typeof global && global && global.Object === Object && global
        },
        38366: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => a
            });
            var r = n(96909),
                i = n(21578),
                o = n(77251);
            const a = function(t) {
                return (0, r.default)(t, o.default, i.default)
            }
        },
        52494: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => b
            });
            var r = n(88987);
            const i = n(99615).default["__core-js_shared__"];
            var o, a = (o = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + o : "";
            var u = n(82433),
                s = n(65114),
                c = /^\[object .+?Constructor\]$/,
                f = Function.prototype,
                l = Object.prototype,
                d = f.toString,
                h = l.hasOwnProperty,
                v = RegExp("^" + d.call(h).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            const p = function(t) {
                    return !(!(0, u.default)(t) || function(t) {
                        return !!a && a in t
                    }(t)) && ((0, r.default)(t) ? v : c).test((0, s.default)(t))
                },
                b = function(t, e) {
                    var n = function(t, e) {
                        return null == t ? void 0 : t[e]
                    }(t, e);
                    return p(n) ? n : void 0
                }
        },
        10964: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => r
            });
            const r = (0, n(45635).default)(Object.getPrototypeOf, Object)
        },
        21578: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => a
            });
            var r = n(69043),
                i = Object.prototype.propertyIsEnumerable,
                o = Object.getOwnPropertySymbols;
            const a = o ? function(t) {
                return null == t ? [] : (t = Object(t), function(t, e) {
                    for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
                        var a = t[n];
                        e(a, n, t) && (o[i++] = a)
                    }
                    return o
                }(o(t), (function(e) {
                    return i.call(t, e)
                })))
            } : r.default
        },
        81296: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => j
            });
            var r = n(52494),
                i = n(99615);
            const o = (0, r.default)(i.default, "DataView");
            var a = n(19385);
            const u = (0, r.default)(i.default, "Promise"),
                s = (0, r.default)(i.default, "Set"),
                c = (0, r.default)(i.default, "WeakMap");
            var f = n(89572),
                l = n(65114),
                d = "[object Map]",
                h = "[object Promise]",
                v = "[object Set]",
                p = "[object WeakMap]",
                b = "[object DataView]",
                g = (0, l.default)(o),
                y = (0, l.default)(a.default),
                m = (0, l.default)(u),
                w = (0, l.default)(s),
                _ = (0, l.default)(c),
                x = f.default;
            (o && x(new o(new ArrayBuffer(1))) != b || a.default && x(new a.default) != d || u && x(u.resolve()) != h || s && x(new s) != v || c && x(new c) != p) && (x = function(t) {
                var e = (0, f.default)(t),
                    n = "[object Object]" == e ? t.constructor : void 0,
                    r = n ? (0, l.default)(n) : "";
                if (r) switch (r) {
                    case g:
                        return b;
                    case y:
                        return d;
                    case m:
                        return h;
                    case w:
                        return v;
                    case _:
                        return p
                }
                return e
            });
            const j = x
        },
        85146: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => s
            });
            var r = n(82433),
                i = Object.create;
            const o = function() {
                function t() {}
                return function(e) {
                    if (!(0, r.default)(e)) return {};
                    if (i) return i(e);
                    t.prototype = e;
                    var n = new t;
                    return t.prototype = void 0, n
                }
            }();
            var a = n(10964),
                u = n(5196);
            const s = function(t) {
                return "function" != typeof t.constructor || (0, u.default)(t) ? {} : o((0, a.default)(t))
            }
        },
        99313: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => i
            });
            var r = /^(?:0|[1-9]\d*)$/;
            const i = function(t, e) {
                var n = typeof t;
                return !!(e = e ? ? 9007199254740991) && ("number" == n || "symbol" != n && r.test(t)) && t > -1 && t % 1 == 0 && t < e
            }
        },
        61833: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => u
            });
            var r = n(54523),
                i = n(49634),
                o = n(99313),
                a = n(82433);
            const u = function(t, e, n) {
                if (!(0, a.default)(n)) return !1;
                var u = typeof e;
                return !!("number" == u ? (0, i.default)(n) && (0, o.default)(e, n.length) : "string" == u && e in n) && (0, r.default)(n[e], t)
            }
        },
        61070: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => u
            });
            var r = n(56052),
                i = n(98111),
                o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                a = /^\w*$/;
            const u = function(t, e) {
                if ((0, r.default)(t)) return !1;
                var n = typeof t;
                return !("number" != n && "symbol" != n && "boolean" != n && null != t && !(0, i.default)(t)) || a.test(t) || !o.test(t) || null != e && t in Object(e)
            }
        },
        5196: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => i
            });
            var r = Object.prototype;
            const i = function(t) {
                var e = t && t.constructor;
                return t === ("function" == typeof e && e.prototype || r)
            }
        },
        92350: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => u
            });
            var r = n(97889),
                i = "object" == typeof exports && exports && !exports.nodeType && exports,
                o = i && "object" == typeof module && module && !module.nodeType && module,
                a = o && o.exports === i && r.default.process;
            const u = function() {
                try {
                    return o && o.require && o.require("util").types || a && a.binding && a.binding("util")
                } catch (t) {}
            }()
        },
        45635: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => r
            });
            const r = function(t, e) {
                return function(n) {
                    return t(e(n))
                }
            }
        },
        99615: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => o
            });
            var r = n(97889),
                i = "object" == typeof self && self && self.Object === Object && self;
            const o = r.default || i || Function("return this")()
        },
        13383: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => i
            });
            var r = n(98111);
            const i = function(t) {
                if ("string" == typeof t || (0, r.default)(t)) return t;
                var e = t + "";
                return "0" == e && 1 / t == -1 / 0 ? "-0" : e
            }
        },
        65114: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => i
            });
            var r = Function.prototype.toString;
            const i = function(t) {
                if (null != t) {
                    try {
                        return r.call(t)
                    } catch (t) {}
                    try {
                        return t + ""
                    } catch (t) {}
                }
                return ""
            }
        },
        90054: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => Z
            });
            var r = n(87593);
            var i = n(61572),
                o = n(52949),
                a = n(77251);
            const u = function(t, e) {
                return t && (0, o.default)(e, (0, a.default)(e), t)
            };
            var s = n(2960);
            const c = function(t, e) {
                return t && (0, o.default)(e, (0, s.default)(e), t)
            };
            var f = n(14054),
                l = n(32126),
                d = n(21578);
            const h = function(t, e) {
                return (0, o.default)(t, (0, d.default)(t), e)
            };
            var v = n(18573),
                p = n(10964),
                b = n(69043);
            const g = Object.getOwnPropertySymbols ? function(t) {
                    for (var e = []; t;)(0, v.default)(e, (0, d.default)(t)), t = (0, p.default)(t);
                    return e
                } : b.default,
                y = function(t, e) {
                    return (0, o.default)(t, g(t), e)
                };
            var m = n(38366),
                w = n(96909);
            const _ = function(t) {
                return (0, w.default)(t, s.default, g)
            };
            var x = n(81296),
                j = Object.prototype.hasOwnProperty;
            const E = function(t) {
                var e = t.length,
                    n = new t.constructor(e);
                return e && "string" == typeof t[0] && j.call(t, "index") && (n.index = t.index, n.input = t.input), n
            };
            var S = n(97990);
            var O = /\w*$/;
            var z = n(66711),
                A = z.default ? z.default.prototype : void 0,
                P = A ? A.valueOf : void 0;
            var R = n(11523);
            const L = function(t, e, n) {
                var r = t.constructor;
                switch (e) {
                    case "[object ArrayBuffer]":
                        return (0, S.default)(t);
                    case "[object Boolean]":
                    case "[object Date]":
                        return new r(+t);
                    case "[object DataView]":
                        return function(t, e) {
                            var n = e ? (0, S.default)(t.buffer) : t.buffer;
                            return new t.constructor(n, t.byteOffset, t.byteLength)
                        }(t, n);
                    case "[object Float32Array]":
                    case "[object Float64Array]":
                    case "[object Int8Array]":
                    case "[object Int16Array]":
                    case "[object Int32Array]":
                    case "[object Uint8Array]":
                    case "[object Uint8ClampedArray]":
                    case "[object Uint16Array]":
                    case "[object Uint32Array]":
                        return (0, R.default)(t, n);
                    case "[object Map]":
                    case "[object Set]":
                        return new r;
                    case "[object Number]":
                    case "[object String]":
                        return new r(t);
                    case "[object RegExp]":
                        return function(t) {
                            var e = new t.constructor(t.source, O.exec(t));
                            return e.lastIndex = t.lastIndex, e
                        }(t);
                    case "[object Symbol]":
                        return function(t) {
                            return P ? Object(P.call(t)) : {}
                        }(t)
                }
            };
            var k = n(85146),
                C = n(56052),
                B = n(32437),
                M = n(43888),
                T = n(82433),
                I = n(13795);
            var N = n(5467),
                $ = n(92350),
                F = $.default && $.default.isSet;
            const D = F ? (0, N.default)(F) : function(t) {
                return (0, I.default)(t) && "[object Set]" == (0, x.default)(t)
            };
            var q = "[object Arguments]",
                U = "[object Function]",
                V = "[object Object]",
                W = {};
            W[q] = W["[object Array]"] = W["[object ArrayBuffer]"] = W["[object DataView]"] = W["[object Boolean]"] = W["[object Date]"] = W["[object Float32Array]"] = W["[object Float64Array]"] = W["[object Int8Array]"] = W["[object Int16Array]"] = W["[object Int32Array]"] = W["[object Map]"] = W["[object Number]"] = W[V] = W["[object RegExp]"] = W["[object Set]"] = W["[object String]"] = W["[object Symbol]"] = W["[object Uint8Array]"] = W["[object Uint8ClampedArray]"] = W["[object Uint16Array]"] = W["[object Uint32Array]"] = !0, W["[object Error]"] = W[U] = W["[object WeakMap]"] = !1;
            const H = function t(e, n, o, d, v, p) {
                    var b, g = 1 & n,
                        w = 2 & n,
                        j = 4 & n;
                    if (o && (b = v ? o(e, d, v, p) : o(e)), void 0 !== b) return b;
                    if (!(0, T.default)(e)) return e;
                    var S = (0, C.default)(e);
                    if (S) {
                        if (b = E(e), !g) return (0, l.default)(e, b)
                    } else {
                        var O = (0, x.default)(e),
                            z = O == U || "[object GeneratorFunction]" == O;
                        if ((0, B.default)(e)) return (0, f.default)(e, g);
                        if (O == V || O == q || z && !v) {
                            if (b = w || z ? {} : (0, k.default)(e), !g) return w ? y(e, c(b, e)) : h(e, u(b, e))
                        } else {
                            if (!W[O]) return v ? e : {};
                            b = L(e, O, g)
                        }
                    }
                    p || (p = new r.default);
                    var A = p.get(e);
                    if (A) return A;
                    p.set(e, b), D(e) ? e.forEach((function(r) {
                        b.add(t(r, n, o, r, e, p))
                    })) : (0, M.default)(e) && e.forEach((function(r, i) {
                        b.set(i, t(r, n, o, i, e, p))
                    }));
                    var P = j ? w ? _ : m.default : w ? s.default : a.default,
                        R = S ? void 0 : P(e);
                    return function(t, e) {
                        for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
                    }(R || e, (function(r, a) {
                        R && (r = e[a = r]), (0, i.default)(b, a, t(r, n, o, a, e, p))
                    })), b
                },
                Z = function(t) {
                    return H(t, 5)
                }
        },
        90484: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => c
            });
            var r = n(82433),
                i = n(99615);
            const o = function() {
                return i.default.Date.now()
            };
            var a = n(78677),
                u = Math.max,
                s = Math.min;
            const c = function(t, e, n) {
                var i, c, f, l, d, h, v = 0,
                    p = !1,
                    b = !1,
                    g = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");

                function y(e) {
                    var n = i,
                        r = c;
                    return i = c = void 0, v = e, l = t.apply(r, n)
                }

                function m(t) {
                    var n = t - h;
                    return void 0 === h || n >= e || n < 0 || b && t - v >= f
                }

                function w() {
                    var t = o();
                    if (m(t)) return _(t);
                    d = setTimeout(w, function(t) {
                        var n = e - (t - h);
                        return b ? s(n, f - (t - v)) : n
                    }(t))
                }

                function _(t) {
                    return d = void 0, g && i ? y(t) : (i = c = void 0, l)
                }

                function x() {
                    var t = o(),
                        n = m(t);
                    if (i = arguments, c = this, h = t, n) {
                        if (void 0 === d) return function(t) {
                            return v = t, d = setTimeout(w, e), p ? y(t) : l
                        }(h);
                        if (b) return clearTimeout(d), d = setTimeout(w, e), y(h)
                    }
                    return void 0 === d && (d = setTimeout(w, e)), l
                }
                return e = (0, a.default)(e) || 0, (0, r.default)(n) && (p = !!n.leading, f = (b = "maxWait" in n) ? u((0, a.default)(n.maxWait) || 0, e) : f, g = "trailing" in n ? !!n.trailing : g), x.cancel = function() {
                    void 0 !== d && clearTimeout(d), v = 0, i = h = c = d = void 0
                }, x.flush = function() {
                    return void 0 === d ? l : _(o())
                }, x
            }
        },
        54523: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => r
            });
            const r = function(t, e) {
                return t === e || t != t && e != e
            }
        },
        68192: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => c
            });
            var r = n(73748),
                i = n(49634),
                o = n(77251);
            var a = n(56882),
                u = Math.max,
                s = Math.min;
            const c = function(t) {
                return function(e, n, a) {
                    var u = Object(e);
                    if (!(0, i.default)(e)) {
                        var s = (0, r.default)(n, 3);
                        e = (0, o.default)(e), n = function(t) {
                            return s(u[t], t, u)
                        }
                    }
                    var c = t(e, n, a);
                    return c > -1 ? u[s ? e[c] : c] : void 0
                }
            }((function(t, e, n) {
                var i = null == t ? 0 : t.length;
                if (!i) return -1;
                var o = i - 1;
                return void 0 !== n && (o = (0, a.default)(n), o = n < 0 ? u(i + o, 0) : s(o, i - 1)),
                    function(t, e, n, r) {
                        for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
                            if (e(t[o], o, t)) return o;
                        return -1
                    }(t, (0, r.default)(e, 3), o, !0)
            }))
        },
        54029: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => i
            });
            var r = n(49084);
            const i = function(t, e, n) {
                var i = null == t ? void 0 : (0, r.default)(t, e);
                return void 0 === i ? n : i
            }
        },
        76402: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => r
            });
            const r = function(t) {
                return t
            }
        },
        54404: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => c
            });
            var r = n(89572),
                i = n(13795);
            const o = function(t) {
                return (0, i.default)(t) && "[object Arguments]" == (0, r.default)(t)
            };
            var a = Object.prototype,
                u = a.hasOwnProperty,
                s = a.propertyIsEnumerable;
            const c = o(function() {
                return arguments
            }()) ? o : function(t) {
                return (0, i.default)(t) && u.call(t, "callee") && !s.call(t, "callee")
            }
        },
        56052: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => r
            });
            const r = Array.isArray
        },
        49634: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => o
            });
            var r = n(88987),
                i = n(65743);
            const o = function(t) {
                return null != t && (0, i.default)(t.length) && !(0, r.default)(t)
            }
        },
        83350: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => o
            });
            var r = n(89572),
                i = n(13795);
            const o = function(t) {
                return !0 === t || !1 === t || (0, i.default)(t) && "[object Boolean]" == (0, r.default)(t)
            }
        },
        32437: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => u
            });
            var r = n(99615);
            var i = "object" == typeof exports && exports && !exports.nodeType && exports,
                o = i && "object" == typeof module && module && !module.nodeType && module,
                a = o && o.exports === i ? r.default.Buffer : void 0;
            const u = (a ? a.isBuffer : void 0) || function() {
                return !1
            }
        },
        15943: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => d
            });
            var r = n(89815),
                i = n(81296),
                o = n(54404),
                a = n(56052),
                u = n(49634),
                s = n(32437),
                c = n(5196),
                f = n(9125),
                l = Object.prototype.hasOwnProperty;
            const d = function(t) {
                if (null == t) return !0;
                if ((0, u.default)(t) && ((0, a.default)(t) || "string" == typeof t || "function" == typeof t.splice || (0, s.default)(t) || (0, f.default)(t) || (0, o.default)(t))) return !t.length;
                var e = (0, i.default)(t);
                if ("[object Map]" == e || "[object Set]" == e) return !t.size;
                if ((0, c.default)(t)) return !(0, r.default)(t).length;
                for (var n in t)
                    if (l.call(t, n)) return !1;
                return !0
            }
        },
        50279: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => i
            });
            var r = n(12189);
            const i = function(t, e) {
                return (0, r.default)(t, e)
            }
        },
        88987: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => o
            });
            var r = n(89572),
                i = n(82433);
            const o = function(t) {
                if (!(0, i.default)(t)) return !1;
                var e = (0, r.default)(t);
                return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
            }
        },
        65743: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => r
            });
            const r = function(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
            }
        },
        43888: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => s
            });
            var r = n(81296),
                i = n(13795);
            var o = n(5467),
                a = n(92350),
                u = a.default && a.default.isMap;
            const s = u ? (0, o.default)(u) : function(t) {
                return (0, i.default)(t) && "[object Map]" == (0, r.default)(t)
            }
        },
        63193: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => r
            });
            const r = function(t) {
                return null == t
            }
        },
        69708: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => o
            });
            var r = n(89572),
                i = n(13795);
            const o = function(t) {
                return "number" == typeof t || (0, i.default)(t) && "[object Number]" == (0, r.default)(t)
            }
        },
        82433: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => r
            });
            const r = function(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e)
            }
        },
        13795: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => r
            });
            const r = function(t) {
                return null != t && "object" == typeof t
            }
        },
        83873: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => a
            });
            var r = n(89572),
                i = n(56052),
                o = n(13795);
            const a = function(t) {
                return "string" == typeof t || !(0, i.default)(t) && (0, o.default)(t) && "[object String]" == (0, r.default)(t)
            }
        },
        98111: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => o
            });
            var r = n(89572),
                i = n(13795);
            const o = function(t) {
                return "symbol" == typeof t || (0, i.default)(t) && "[object Symbol]" == (0, r.default)(t)
            }
        },
        9125: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => f
            });
            var r = n(89572),
                i = n(65743),
                o = n(13795),
                a = {};
            a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1;
            var u = n(5467),
                s = n(92350),
                c = s.default && s.default.isTypedArray;
            const f = c ? (0, u.default)(c) : function(t) {
                return (0, o.default)(t) && (0, i.default)(t.length) && !!a[(0, r.default)(t)]
            }
        },
        77251: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => a
            });
            var r = n(60545),
                i = n(89815),
                o = n(49634);
            const a = function(t) {
                return (0, o.default)(t) ? (0, r.default)(t) : (0, i.default)(t)
            }
        },
        2960: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => c
            });
            var r = n(60545),
                i = n(82433),
                o = n(5196);
            var a = Object.prototype.hasOwnProperty;
            const u = function(t) {
                if (!(0, i.default)(t)) return function(t) {
                    var e = [];
                    if (null != t)
                        for (var n in Object(t)) e.push(n);
                    return e
                }(t);
                var e = (0, o.default)(t),
                    n = [];
                for (var r in t)("constructor" != r || !e && a.call(t, r)) && n.push(r);
                return n
            };
            var s = n(49634);
            const c = function(t) {
                return (0, s.default)(t) ? (0, r.default)(t, !0) : u(t)
            }
        },
        82593: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => r
            });
            const r = function(t) {
                var e = null == t ? 0 : t.length;
                return e ? t[e - 1] : void 0
            }
        },
        59332: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => o
            });
            var r = n(75440);

            function i(t, e) {
                if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError("Expected a function");
                var n = function() {
                    var r = arguments,
                        i = e ? e.apply(this, r) : r[0],
                        o = n.cache;
                    if (o.has(i)) return o.get(i);
                    var a = t.apply(this, r);
                    return n.cache = o.set(i, a) || o, a
                };
                return n.cache = new(i.Cache || r.default), n
            }
            i.Cache = r.default;
            const o = i
        },
        16738: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => U
            });
            var r = n(87593),
                i = n(857),
                o = n(54523);
            const a = function(t, e, n) {
                (void 0 !== n && !(0, o.default)(t[e], n) || void 0 === n && !(e in t)) && (0, i.default)(t, e, n)
            };
            var u = n(76507),
                s = n(14054),
                c = n(11523),
                f = n(32126),
                l = n(85146),
                d = n(54404),
                h = n(56052),
                v = n(49634),
                p = n(13795);
            const b = function(t) {
                return (0, p.default)(t) && (0, v.default)(t)
            };
            var g = n(32437),
                y = n(88987),
                m = n(82433),
                w = n(89572),
                _ = n(10964),
                x = Function.prototype,
                j = Object.prototype,
                E = x.toString,
                S = j.hasOwnProperty,
                O = E.call(Object);
            const z = function(t) {
                if (!(0, p.default)(t) || "[object Object]" != (0, w.default)(t)) return !1;
                var e = (0, _.default)(t);
                if (null === e) return !0;
                var n = S.call(e, "constructor") && e.constructor;
                return "function" == typeof n && n instanceof n && E.call(n) == O
            };
            var A = n(9125);
            const P = function(t, e) {
                if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e]
            };
            var R = n(52949),
                L = n(2960);
            const k = function(t, e, n, r, i, o, u) {
                    var v = P(t, n),
                        p = P(e, n),
                        w = u.get(p);
                    if (w) a(t, n, w);
                    else {
                        var _ = o ? o(v, p, n + "", t, e, u) : void 0,
                            x = void 0 === _;
                        if (x) {
                            var j = (0, h.default)(p),
                                E = !j && (0, g.default)(p),
                                S = !j && !E && (0, A.default)(p);
                            _ = p, j || E || S ? (0, h.default)(v) ? _ = v : b(v) ? _ = (0, f.default)(v) : E ? (x = !1, _ = (0, s.default)(p, !0)) : S ? (x = !1, _ = (0, c.default)(p, !0)) : _ = [] : z(p) || (0, d.default)(p) ? (_ = v, (0, d.default)(v) ? _ = function(t) {
                                return (0, R.default)(t, (0, L.default)(t))
                            }(v) : (0, m.default)(v) && !(0, y.default)(v) || (_ = (0, l.default)(p))) : x = !1
                        }
                        x && (u.set(p, _), i(_, p, r, o, u), u.delete(p)), a(t, n, _)
                    }
                },
                C = function t(e, n, i, o, s) {
                    e !== n && (0, u.default)(n, (function(u, c) {
                        if (s || (s = new r.default), (0, m.default)(u)) k(e, n, c, i, t, o, s);
                        else {
                            var f = o ? o(P(e, c), u, c + "", e, n, s) : void 0;
                            void 0 === f && (f = u), a(e, c, f)
                        }
                    }), L.default)
                };
            var B = n(76402);
            var M = Math.max;
            const T = function(t) {
                return function() {
                    return t
                }
            };
            var I = n(55136);
            const N = I.default ? function(t, e) {
                return (0, I.default)(t, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: T(e),
                    writable: !0
                })
            } : B.default;
            var $ = Date.now;
            const F = function(t) {
                    var e = 0,
                        n = 0;
                    return function() {
                        var r = $(),
                            i = 16 - (r - n);
                        if (n = r, i > 0) {
                            if (++e >= 800) return arguments[0]
                        } else e = 0;
                        return t.apply(void 0, arguments)
                    }
                }(N),
                D = function(t, e) {
                    return F(function(t, e, n) {
                        return e = M(void 0 === e ? t.length - 1 : e, 0),
                            function() {
                                for (var r = arguments, i = -1, o = M(r.length - e, 0), a = Array(o); ++i < o;) a[i] = r[e + i];
                                i = -1;
                                for (var u = Array(e + 1); ++i < e;) u[i] = r[i];
                                return u[e] = n(a),
                                    function(t, e, n) {
                                        switch (n.length) {
                                            case 0:
                                                return t.call(e);
                                            case 1:
                                                return t.call(e, n[0]);
                                            case 2:
                                                return t.call(e, n[0], n[1]);
                                            case 3:
                                                return t.call(e, n[0], n[1], n[2])
                                        }
                                        return t.apply(e, n)
                                    }(t, this, u)
                            }
                    }(t, e, B.default), t + "")
                };
            var q = n(61833);
            const U = function(t) {
                return D((function(e, n) {
                    var r = -1,
                        i = n.length,
                        o = i > 1 ? n[i - 1] : void 0,
                        a = i > 2 ? n[2] : void 0;
                    for (o = t.length > 3 && "function" == typeof o ? (i--, o) : void 0, a && (0, q.default)(n[0], n[1], a) && (o = i < 3 ? void 0 : o, i = 1), e = Object(e); ++r < i;) {
                        var u = n[r];
                        u && t(e, u, r)
                    }
                    return e
                }))
            }((function(t, e, n) {
                C(t, e, n)
            }))
        },
        81251: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => i
            });
            var r = n(56882);
            const i = function(t) {
                return function(t, e) {
                    var n;
                    if ("function" != typeof e) throw new TypeError("Expected a function");
                    return t = (0, r.default)(t),
                        function() {
                            return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = void 0), n
                        }
                }(2, t)
            }
        },
        28569: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => l
            });
            const r = function(t, e, n, r) {
                var i = -1,
                    o = null == t ? 0 : t.length;
                for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
                return n
            };
            var i = n(76507),
                o = n(77251);
            var a = n(49634);
            const u = function(t) {
                return function(e, n) {
                    if (null == e) return e;
                    if (!(0, a.default)(e)) return t(e, n);
                    for (var r = e.length, i = -1, o = Object(e); ++i < r && !1 !== n(o[i], i, o););
                    return e
                }
            }((function(t, e) {
                return t && (0, i.default)(t, e, o.default)
            }));
            var s = n(73748);
            const c = function(t, e, n, r, i) {
                return i(t, (function(t, i, o) {
                    n = r ? (r = !1, t) : e(n, t, i, o)
                })), n
            };
            var f = n(56052);
            const l = function(t, e, n) {
                var i = (0, f.default)(t) ? r : c,
                    o = arguments.length < 3;
                return i(t, (0, s.default)(e, 4), n, o, u)
            }
        },
        47339: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => s
            });
            var r = n(61572),
                i = n(31434),
                o = n(99313),
                a = n(82433),
                u = n(13383);
            const s = function(t, e, n) {
                return null == t ? t : function(t, e, n, s) {
                    if (!(0, a.default)(t)) return t;
                    for (var c = -1, f = (e = (0, i.default)(e, t)).length, l = f - 1, d = t; null != d && ++c < f;) {
                        var h = (0, u.default)(e[c]),
                            v = n;
                        if ("__proto__" === h || "constructor" === h || "prototype" === h) return t;
                        if (c != l) {
                            var p = d[h];
                            void 0 === (v = s ? s(p, h, d) : void 0) && (v = (0, a.default)(p) ? p : (0, o.default)(e[c + 1]) ? [] : {})
                        }(0, r.default)(d, h, v), d = d[h]
                    }
                    return t
                }(t, e, n)
            }
        },
        69043: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => r
            });
            const r = function() {
                return []
            }
        },
        20057: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => o
            });
            var r = n(90484),
                i = n(82433);
            const o = function(t, e, n) {
                var o = !0,
                    a = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");
                return (0, i.default)(n) && (o = "leading" in n ? !!n.leading : o, a = "trailing" in n ? !!n.trailing : a), (0, r.default)(t, e, {
                    leading: o,
                    maxWait: e,
                    trailing: a
                })
            }
        },
        56882: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => o
            });
            var r = n(78677),
                i = 1 / 0;
            const o = function(t) {
                var e = function(t) {
                        return t ? (t = (0, r.default)(t)) === i || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
                    }(t),
                    n = e % 1;
                return e == e ? n ? e - n : e : 0
            }
        },
        78677: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => d
            });
            var r = /\s/;
            var i = /^\s+/;
            const o = function(t) {
                return t ? t.slice(0, function(t) {
                    for (var e = t.length; e-- && r.test(t.charAt(e)););
                    return e
                }(t) + 1).replace(i, "") : t
            };
            var a = n(82433),
                u = n(98111),
                s = /^[-+]0x[0-9a-f]+$/i,
                c = /^0b[01]+$/i,
                f = /^0o[0-7]+$/i,
                l = parseInt;
            const d = function(t) {
                if ("number" == typeof t) return t;
                if ((0, u.default)(t)) return NaN;
                if ((0, a.default)(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = (0, a.default)(e) ? e + "" : e
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = o(t);
                var n = c.test(t);
                return n || f.test(t) ? l(t.slice(2), n ? 2 : 8) : s.test(t) ? NaN : +t
            }
        },
        81960: (t, e, n) => {
            "use strict";
            n.d(e, {
                default: () => c
            });
            var r = n(31434),
                i = n(82593),
                o = n(49084),
                a = n(38459);
            var u = n(13383);
            const s = function(t, e) {
                    return null == (t = function(t, e) {
                        return e.length < 2 ? t : (0, o.default)(t, (0, a.default)(e, 0, -1))
                    }(t, e = (0, r.default)(e, t))) || delete t[(0, u.default)((0, i.default)(e))]
                },
                c = function(t, e) {
                    return null == t || s(t, e)
                }
        }
    }
]);