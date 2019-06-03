! function e(t, n, r) {
    function i(a, s) { if (!n[a]) { if (!t[a]) { var l = "function" == typeof require && require; if (!s && l) return l(a, !0); if (o) return o(a, !0); var c = new Error("Cannot find module '" + a + "'"); throw c.code = "MODULE_NOT_FOUND", c } var u = n[a] = { exports: {} };
            t[a][0].call(u.exports, function(e) { var n = t[a][1][e]; return i(n ? n : e) }, u, u.exports, e, t, n, r) } return n[a].exports } for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]); return i }({
    1: [function(e, t, n) { var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";! function(e) { "use strict";

            function t(e) { var t = e.charCodeAt(0); return t === a || t === d ? 62 : t === s || t === f ? 63 : t < l ? -1 : t < l + 10 ? t - l + 26 + 26 : t < u + 26 ? t - u : t < c + 26 ? t - c + 26 : void 0 }

            function n(e) {
                function n(e) { c[d++] = e } var r, i, a, s, l, c; if (e.length % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4"); var u = e.length;
                l = "=" === e.charAt(u - 2) ? 2 : "=" === e.charAt(u - 1) ? 1 : 0, c = new o(3 * e.length / 4 - l), a = l > 0 ? e.length - 4 : e.length; var d = 0; for (r = 0, i = 0; r < a; r += 4, i += 3) s = t(e.charAt(r)) << 18 | t(e.charAt(r + 1)) << 12 | t(e.charAt(r + 2)) << 6 | t(e.charAt(r + 3)), n((16711680 & s) >> 16), n((65280 & s) >> 8), n(255 & s); return 2 === l ? (s = t(e.charAt(r)) << 2 | t(e.charAt(r + 1)) >> 4, n(255 & s)) : 1 === l && (s = t(e.charAt(r)) << 10 | t(e.charAt(r + 1)) << 4 | t(e.charAt(r + 2)) >> 2, n(s >> 8 & 255), n(255 & s)), c }

            function i(e) {
                function t(e) { return r.charAt(e) }

                function n(e) { return t(e >> 18 & 63) + t(e >> 12 & 63) + t(e >> 6 & 63) + t(63 & e) } var i, o, a, s = e.length % 3,
                    l = ""; for (i = 0, a = e.length - s; i < a; i += 3) o = (e[i] << 16) + (e[i + 1] << 8) + e[i + 2], l += n(o); switch (s) {
                    case 1:
                        o = e[e.length - 1], l += t(o >> 2), l += t(o << 4 & 63), l += "=="; break;
                    case 2:
                        o = (e[e.length - 2] << 8) + e[e.length - 1], l += t(o >> 10), l += t(o >> 4 & 63), l += t(o << 2 & 63), l += "=" } return l } var o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                a = "+".charCodeAt(0),
                s = "/".charCodeAt(0),
                l = "0".charCodeAt(0),
                c = "a".charCodeAt(0),
                u = "A".charCodeAt(0),
                d = "-".charCodeAt(0),
                f = "_".charCodeAt(0);
            e.toByteArray = n, e.fromByteArray = i }("undefined" == typeof n ? this.base64js = {} : n) }, {}],
    2: [function(e, t, n) {}, {}],
    3: [function(e, t, n) {
        (function(t) { "use strict";

            function r() {
                function e() {} try { var t = new Uint8Array(1); return t.foo = function() { return 42 }, t.constructor = e, 42 === t.foo() && t.constructor === e && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength } catch (n) { return !1 } }

            function i() { return o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823 }

            function o(e) { return this instanceof o ? (o.TYPED_ARRAY_SUPPORT || (this.length = 0, this.parent = void 0), "number" == typeof e ? a(this, e) : "string" == typeof e ? s(this, e, arguments.length > 1 ? arguments[1] : "utf8") : l(this, e)) : arguments.length > 1 ? new o(e, arguments[1]) : new o(e) }

            function a(e, t) { if (e = m(e, t < 0 ? 0 : 0 | g(t)), !o.TYPED_ARRAY_SUPPORT)
                    for (var n = 0; n < t; n++) e[n] = 0; return e }

            function s(e, t, n) { "string" == typeof n && "" !== n || (n = "utf8"); var r = 0 | y(t, n); return e = m(e, r), e.write(t, n), e }

            function l(e, t) { if (o.isBuffer(t)) return c(e, t); if (X(t)) return u(e, t); if (null == t) throw new TypeError("must start with number, buffer, array or string"); if ("undefined" != typeof ArrayBuffer) { if (t.buffer instanceof ArrayBuffer) return d(e, t); if (t instanceof ArrayBuffer) return f(e, t) } return t.length ? h(e, t) : p(e, t) }

            function c(e, t) { var n = 0 | g(t.length); return e = m(e, n), t.copy(e, 0, 0, n), e }

            function u(e, t) { var n = 0 | g(t.length);
                e = m(e, n); for (var r = 0; r < n; r += 1) e[r] = 255 & t[r]; return e }

            function d(e, t) { var n = 0 | g(t.length);
                e = m(e, n); for (var r = 0; r < n; r += 1) e[r] = 255 & t[r]; return e }

            function f(e, t) { return o.TYPED_ARRAY_SUPPORT ? (t.byteLength, e = o._augment(new Uint8Array(t))) : e = d(e, new Uint8Array(t)), e }

            function h(e, t) { var n = 0 | g(t.length);
                e = m(e, n); for (var r = 0; r < n; r += 1) e[r] = 255 & t[r]; return e }

            function p(e, t) { var n, r = 0; "Buffer" === t.type && X(t.data) && (n = t.data, r = 0 | g(n.length)), e = m(e, r); for (var i = 0; i < r; i += 1) e[i] = 255 & n[i]; return e }

            function m(e, t) { o.TYPED_ARRAY_SUPPORT ? (e = o._augment(new Uint8Array(t)), e.__proto__ = o.prototype) : (e.length = t, e._isBuffer = !0); var n = 0 !== t && t <= o.poolSize >>> 1; return n && (e.parent = J), e }

            function g(e) { if (e >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes"); return 0 | e }

            function v(e, t) { if (!(this instanceof v)) return new v(e, t); var n = new o(e, t); return delete n.parent, n }

            function y(e, t) { "string" != typeof e && (e = "" + e); var n = e.length; if (0 === n) return 0; for (var r = !1;;) switch (t) {
                    case "ascii":
                    case "binary":
                    case "raw":
                    case "raws":
                        return n;
                    case "utf8":
                    case "utf-8":
                        return W(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * n;
                    case "hex":
                        return n >>> 1;
                    case "base64":
                        return G(e).length;
                    default:
                        if (r) return W(e).length;
                        t = ("" + t).toLowerCase(), r = !0 } }

            function b(e, t, n) { var r = !1; if (t = 0 | t, n = void 0 === n || n === 1 / 0 ? this.length : 0 | n, e || (e = "utf8"), t < 0 && (t = 0), n > this.length && (n = this.length), n <= t) return ""; for (;;) switch (e) {
                    case "hex":
                        return A(this, t, n);
                    case "utf8":
                    case "utf-8":
                        return T(this, t, n);
                    case "ascii":
                        return j(this, t, n);
                    case "binary":
                        return O(this, t, n);
                    case "base64":
                        return L(this, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return E(this, t, n);
                    default:
                        if (r) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), r = !0 } }

            function x(e, t, n, r) { n = Number(n) || 0; var i = e.length - n;
                r ? (r = Number(r), r > i && (r = i)) : r = i; var o = t.length; if (o % 2 !== 0) throw new Error("Invalid hex string");
                r > o / 2 && (r = o / 2); for (var a = 0; a < r; a++) { var s = parseInt(t.substr(2 * a, 2), 16); if (isNaN(s)) throw new Error("Invalid hex string");
                    e[n + a] = s } return a }

            function w(e, t, n, r) { return V(W(t, e.length - n), e, n, r) }

            function k(e, t, n, r) { return V(U(t), e, n, r) }

            function C(e, t, n, r) { return k(e, t, n, r) }

            function S(e, t, n, r) { return V(G(t), e, n, r) }

            function _(e, t, n, r) { return V(q(t, e.length - n), e, n, r) }

            function L(e, t, n) { return 0 === t && n === e.length ? K.fromByteArray(e) : K.fromByteArray(e.slice(t, n)) }

            function T(e, t, n) { n = Math.min(e.length, n); for (var r = [], i = t; i < n;) { var o = e[i],
                        a = null,
                        s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1; if (i + s <= n) { var l, c, u, d; switch (s) {
                            case 1:
                                o < 128 && (a = o); break;
                            case 2:
                                l = e[i + 1], 128 === (192 & l) && (d = (31 & o) << 6 | 63 & l, d > 127 && (a = d)); break;
                            case 3:
                                l = e[i + 1], c = e[i + 2], 128 === (192 & l) && 128 === (192 & c) && (d = (15 & o) << 12 | (63 & l) << 6 | 63 & c, d > 2047 && (d < 55296 || d > 57343) && (a = d)); break;
                            case 4:
                                l = e[i + 1], c = e[i + 2], u = e[i + 3], 128 === (192 & l) && 128 === (192 & c) && 128 === (192 & u) && (d = (15 & o) << 18 | (63 & l) << 12 | (63 & c) << 6 | 63 & u, d > 65535 && d < 1114112 && (a = d)) } } null === a ? (a = 65533, s = 1) : a > 65535 && (a -= 65536, r.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), r.push(a), i += s } return M(r) }

            function M(e) { var t = e.length; if (t <= Z) return String.fromCharCode.apply(String, e); for (var n = "", r = 0; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += Z)); return n }

            function j(e, t, n) { var r = "";
                n = Math.min(e.length, n); for (var i = t; i < n; i++) r += String.fromCharCode(127 & e[i]); return r }

            function O(e, t, n) { var r = "";
                n = Math.min(e.length, n); for (var i = t; i < n; i++) r += String.fromCharCode(e[i]); return r }

            function A(e, t, n) { var r = e.length;
                (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r); for (var i = "", o = t; o < n; o++) i += $(e[o]); return i }

            function E(e, t, n) { for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]); return i }

            function N(e, t, n) { if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint"); if (e + t > n) throw new RangeError("Trying to access beyond buffer length") }

            function P(e, t, n, r, i, a) { if (!o.isBuffer(e)) throw new TypeError("buffer must be a Buffer instance"); if (t > i || t < a) throw new RangeError("value is out of bounds"); if (n + r > e.length) throw new RangeError("index out of range") }

            function I(e, t, n, r) { t < 0 && (t = 65535 + t + 1); for (var i = 0, o = Math.min(e.length - n, 2); i < o; i++) e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i) }

            function D(e, t, n, r) { t < 0 && (t = 4294967295 + t + 1); for (var i = 0, o = Math.min(e.length - n, 4); i < o; i++) e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255 }

            function F(e, t, n, r, i, o) { if (t > i || t < o) throw new RangeError("value is out of bounds"); if (n + r > e.length) throw new RangeError("index out of range"); if (n < 0) throw new RangeError("index out of range") }

            function z(e, t, n, r, i) { return i || F(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), Y.write(e, t, n, r, 23, 4), n + 4 }

            function R(e, t, n, r, i) { return i || F(e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), Y.write(e, t, n, r, 52, 8), n + 8 }

            function B(e) { if (e = H(e).replace(ee, ""), e.length < 2) return ""; for (; e.length % 4 !== 0;) e += "="; return e }

            function H(e) { return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "") }

            function $(e) { return e < 16 ? "0" + e.toString(16) : e.toString(16) }

            function W(e, t) { t = t || 1 / 0; for (var n, r = e.length, i = null, o = [], a = 0; a < r; a++) { if (n = e.charCodeAt(a), n > 55295 && n < 57344) { if (!i) { if (n > 56319) {
                                (t -= 3) > -1 && o.push(239, 191, 189); continue } if (a + 1 === r) {
                                (t -= 3) > -1 && o.push(239, 191, 189); continue } i = n; continue } if (n < 56320) {
                            (t -= 3) > -1 && o.push(239, 191, 189), i = n; continue } n = (i - 55296 << 10 | n - 56320) + 65536 } else i && (t -= 3) > -1 && o.push(239, 191, 189); if (i = null, n < 128) { if ((t -= 1) < 0) break;
                        o.push(n) } else if (n < 2048) { if ((t -= 2) < 0) break;
                        o.push(n >> 6 | 192, 63 & n | 128) } else if (n < 65536) { if ((t -= 3) < 0) break;
                        o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128) } else { if (!(n < 1114112)) throw new Error("Invalid code point"); if ((t -= 4) < 0) break;
                        o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128) } } return o }

            function U(e) { for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n)); return t }

            function q(e, t) { for (var n, r, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); a++) n = e.charCodeAt(a), r = n >> 8, i = n % 256, o.push(i), o.push(r); return o }

            function G(e) { return K.toByteArray(B(e)) }

            function V(e, t, n, r) { for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); i++) t[i + n] = e[i]; return i } var K = e("base64-js"),
                Y = e("ieee754"),
                X = e("isarray");
            n.Buffer = o, n.SlowBuffer = v, n.INSPECT_MAX_BYTES = 50, o.poolSize = 8192; var J = {};
            o.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : r(), o.TYPED_ARRAY_SUPPORT ? (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array) : (o.prototype.length = void 0, o.prototype.parent = void 0), o.isBuffer = function(e) { return !(null == e || !e._isBuffer) }, o.compare = function(e, t) { if (!o.isBuffer(e) || !o.isBuffer(t)) throw new TypeError("Arguments must be Buffers"); if (e === t) return 0; for (var n = e.length, r = t.length, i = 0, a = Math.min(n, r); i < a && e[i] === t[i];) ++i; return i !== a && (n = e[i], r = t[i]), n < r ? -1 : r < n ? 1 : 0 }, o.isEncoding = function(e) { switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "raw":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1 } }, o.concat = function(e, t) { if (!X(e)) throw new TypeError("list argument must be an Array of Buffers."); if (0 === e.length) return new o(0); var n; if (void 0 === t)
                    for (t = 0, n = 0; n < e.length; n++) t += e[n].length; var r = new o(t),
                    i = 0; for (n = 0; n < e.length; n++) { var a = e[n];
                    a.copy(r, i), i += a.length } return r }, o.byteLength = y, o.prototype.toString = function() { var e = 0 | this.length; return 0 === e ? "" : 0 === arguments.length ? T(this, 0, e) : b.apply(this, arguments) }, o.prototype.equals = function(e) { if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer"); return this === e || 0 === o.compare(this, e) }, o.prototype.inspect = function() { var e = "",
                    t = n.INSPECT_MAX_BYTES; return this.length > 0 && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">" }, o.prototype.compare = function(e) { if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer"); return this === e ? 0 : o.compare(this, e) }, o.prototype.indexOf = function(e, t) {
                function n(e, t, n) { for (var r = -1, i = 0; n + i < e.length; i++)
                        if (e[n + i] === t[r === -1 ? 0 : i - r]) { if (r === -1 && (r = i), i - r + 1 === t.length) return n + r } else r = -1; return -1 } if (t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t >>= 0, 0 === this.length) return -1; if (t >= this.length) return -1; if (t < 0 && (t = Math.max(this.length + t, 0)), "string" == typeof e) return 0 === e.length ? -1 : String.prototype.indexOf.call(this, e, t); if (o.isBuffer(e)) return n(this, e, t); if ("number" == typeof e) return o.TYPED_ARRAY_SUPPORT && "function" === Uint8Array.prototype.indexOf ? Uint8Array.prototype.indexOf.call(this, e, t) : n(this, [e], t); throw new TypeError("val must be string, number or Buffer") }, o.prototype.get = function(e) { return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(e) }, o.prototype.set = function(e, t) { return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(e, t) }, o.prototype.write = function(e, t, n, r) { if (void 0 === t) r = "utf8", n = this.length, t = 0;
                else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
                else if (isFinite(t)) t = 0 | t, isFinite(n) ? (n = 0 | n, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
                else { var i = r;
                    r = t, t = 0 | n, n = i } var o = this.length - t; if ((void 0 === n || n > o) && (n = o), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("attempt to write outside buffer bounds");
                r || (r = "utf8"); for (var a = !1;;) switch (r) {
                    case "hex":
                        return x(this, e, t, n);
                    case "utf8":
                    case "utf-8":
                        return w(this, e, t, n);
                    case "ascii":
                        return k(this, e, t, n);
                    case "binary":
                        return C(this, e, t, n);
                    case "base64":
                        return S(this, e, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return _(this, e, t, n);
                    default:
                        if (a) throw new TypeError("Unknown encoding: " + r);
                        r = ("" + r).toLowerCase(), a = !0 } }, o.prototype.toJSON = function() { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } }; var Z = 4096;
            o.prototype.slice = function(e, t) { var n = this.length;
                e = ~~e, t = void 0 === t ? n : ~~t, e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), t < e && (t = e); var r; if (o.TYPED_ARRAY_SUPPORT) r = o._augment(this.subarray(e, t));
                else { var i = t - e;
                    r = new o(i, (void 0)); for (var a = 0; a < i; a++) r[a] = this[a + e] } return r.length && (r.parent = this.parent || this), r }, o.prototype.readUIntLE = function(e, t, n) { e = 0 | e, t = 0 | t, n || N(e, t, this.length); for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i; return r }, o.prototype.readUIntBE = function(e, t, n) { e = 0 | e, t = 0 | t, n || N(e, t, this.length); for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i; return r }, o.prototype.readUInt8 = function(e, t) { return t || N(e, 1, this.length), this[e] }, o.prototype.readUInt16LE = function(e, t) { return t || N(e, 2, this.length), this[e] | this[e + 1] << 8 }, o.prototype.readUInt16BE = function(e, t) { return t || N(e, 2, this.length), this[e] << 8 | this[e + 1] }, o.prototype.readUInt32LE = function(e, t) { return t || N(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3] }, o.prototype.readUInt32BE = function(e, t) { return t || N(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]) }, o.prototype.readIntLE = function(e, t, n) { e = 0 | e, t = 0 | t, n || N(e, t, this.length); for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i; return i *= 128, r >= i && (r -= Math.pow(2, 8 * t)), r }, o.prototype.readIntBE = function(e, t, n) { e = 0 | e, t = 0 | t, n || N(e, t, this.length); for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256);) o += this[e + --r] * i; return i *= 128, o >= i && (o -= Math.pow(2, 8 * t)), o }, o.prototype.readInt8 = function(e, t) { return t || N(e, 1, this.length), 128 & this[e] ? (255 - this[e] + 1) * -1 : this[e] }, o.prototype.readInt16LE = function(e, t) { t || N(e, 2, this.length); var n = this[e] | this[e + 1] << 8; return 32768 & n ? 4294901760 | n : n }, o.prototype.readInt16BE = function(e, t) { t || N(e, 2, this.length); var n = this[e + 1] | this[e] << 8; return 32768 & n ? 4294901760 | n : n }, o.prototype.readInt32LE = function(e, t) { return t || N(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24 }, o.prototype.readInt32BE = function(e, t) { return t || N(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3] }, o.prototype.readFloatLE = function(e, t) { return t || N(e, 4, this.length), Y.read(this, e, !0, 23, 4) }, o.prototype.readFloatBE = function(e, t) { return t || N(e, 4, this.length), Y.read(this, e, !1, 23, 4) }, o.prototype.readDoubleLE = function(e, t) { return t || N(e, 8, this.length), Y.read(this, e, !0, 52, 8) }, o.prototype.readDoubleBE = function(e, t) { return t || N(e, 8, this.length), Y.read(this, e, !1, 52, 8) }, o.prototype.writeUIntLE = function(e, t, n, r) { e = +e, t = 0 | t, n = 0 | n, r || P(this, e, t, n, Math.pow(2, 8 * n), 0); var i = 1,
                    o = 0; for (this[t] = 255 & e; ++o < n && (i *= 256);) this[t + o] = e / i & 255; return t + n }, o.prototype.writeUIntBE = function(e, t, n, r) { e = +e, t = 0 | t, n = 0 | n, r || P(this, e, t, n, Math.pow(2, 8 * n), 0); var i = n - 1,
                    o = 1; for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255; return t + n }, o.prototype.writeUInt8 = function(e, t, n) { return e = +e, t = 0 | t, n || P(this, e, t, 1, 255, 0), o.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1 }, o.prototype.writeUInt16LE = function(e, t, n) { return e = +e, t = 0 | t, n || P(this, e, t, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : I(this, e, t, !0), t + 2 }, o.prototype.writeUInt16BE = function(e, t, n) { return e = +e, t = 0 | t, n || P(this, e, t, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : I(this, e, t, !1), t + 2 }, o.prototype.writeUInt32LE = function(e, t, n) { return e = +e, t = 0 | t, n || P(this, e, t, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : D(this, e, t, !0), t + 4 }, o.prototype.writeUInt32BE = function(e, t, n) { return e = +e, t = 0 | t, n || P(this, e, t, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : D(this, e, t, !1), t + 4 }, o.prototype.writeIntLE = function(e, t, n, r) { if (e = +e, t = 0 | t, !r) { var i = Math.pow(2, 8 * n - 1);
                    P(this, e, t, n, i - 1, -i) } var o = 0,
                    a = 1,
                    s = e < 0 ? 1 : 0; for (this[t] = 255 & e; ++o < n && (a *= 256);) this[t + o] = (e / a >> 0) - s & 255; return t + n }, o.prototype.writeIntBE = function(e, t, n, r) { if (e = +e, t = 0 | t, !r) { var i = Math.pow(2, 8 * n - 1);
                    P(this, e, t, n, i - 1, -i) } var o = n - 1,
                    a = 1,
                    s = e < 0 ? 1 : 0; for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) this[t + o] = (e / a >> 0) - s & 255; return t + n }, o.prototype.writeInt8 = function(e, t, n) { return e = +e, t = 0 | t, n || P(this, e, t, 1, 127, -128), o.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1 }, o.prototype.writeInt16LE = function(e, t, n) { return e = +e, t = 0 | t, n || P(this, e, t, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : I(this, e, t, !0), t + 2 }, o.prototype.writeInt16BE = function(e, t, n) { return e = +e, t = 0 | t, n || P(this, e, t, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : I(this, e, t, !1), t + 2 }, o.prototype.writeInt32LE = function(e, t, n) { return e = +e, t = 0 | t, n || P(this, e, t, 4, 2147483647, -2147483648), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : D(this, e, t, !0), t + 4 }, o.prototype.writeInt32BE = function(e, t, n) { return e = +e, t = 0 | t, n || P(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : D(this, e, t, !1), t + 4 }, o.prototype.writeFloatLE = function(e, t, n) { return z(this, e, t, !0, n) }, o.prototype.writeFloatBE = function(e, t, n) { return z(this, e, t, !1, n) }, o.prototype.writeDoubleLE = function(e, t, n) { return R(this, e, t, !0, n) }, o.prototype.writeDoubleBE = function(e, t, n) { return R(this, e, t, !1, n) }, o.prototype.copy = function(e, t, n, r) { if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0; if (0 === e.length || 0 === this.length) return 0; if (t < 0) throw new RangeError("targetStart out of bounds"); if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds"); if (r < 0) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n); var i, a = r - n; if (this === e && n < t && t < r)
                    for (i = a - 1; i >= 0; i--) e[i + t] = this[i + n];
                else if (a < 1e3 || !o.TYPED_ARRAY_SUPPORT)
                    for (i = 0; i < a; i++) e[i + t] = this[i + n];
                else e._set(this.subarray(n, n + a), t); return a }, o.prototype.fill = function(e, t, n) { if (e || (e = 0), t || (t = 0), n || (n = this.length), n < t) throw new RangeError("end < start"); if (n !== t && 0 !== this.length) { if (t < 0 || t >= this.length) throw new RangeError("start out of bounds"); if (n < 0 || n > this.length) throw new RangeError("end out of bounds"); var r; if ("number" == typeof e)
                        for (r = t; r < n; r++) this[r] = e;
                    else { var i = W(e.toString()),
                            o = i.length; for (r = t; r < n; r++) this[r] = i[r % o] } return this } }, o.prototype.toArrayBuffer = function() { if ("undefined" != typeof Uint8Array) { if (o.TYPED_ARRAY_SUPPORT) return new o(this).buffer; for (var e = new Uint8Array(this.length), t = 0, n = e.length; t < n; t += 1) e[t] = this[t]; return e.buffer } throw new TypeError("Buffer.toArrayBuffer not supported in this browser") }; var Q = o.prototype;
            o._augment = function(e) { return e.constructor = o, e._isBuffer = !0, e._set = e.set, e.get = Q.get, e.set = Q.set, e.write = Q.write, e.toString = Q.toString, e.toLocaleString = Q.toString, e.toJSON = Q.toJSON, e.equals = Q.equals, e.compare = Q.compare, e.indexOf = Q.indexOf, e.copy = Q.copy, e.slice = Q.slice, e.readUIntLE = Q.readUIntLE, e.readUIntBE = Q.readUIntBE, e.readUInt8 = Q.readUInt8, e.readUInt16LE = Q.readUInt16LE, e.readUInt16BE = Q.readUInt16BE, e.readUInt32LE = Q.readUInt32LE, e.readUInt32BE = Q.readUInt32BE, e.readIntLE = Q.readIntLE, e.readIntBE = Q.readIntBE, e.readInt8 = Q.readInt8, e.readInt16LE = Q.readInt16LE, e.readInt16BE = Q.readInt16BE, e.readInt32LE = Q.readInt32LE, e.readInt32BE = Q.readInt32BE, e.readFloatLE = Q.readFloatLE, e.readFloatBE = Q.readFloatBE, e.readDoubleLE = Q.readDoubleLE, e.readDoubleBE = Q.readDoubleBE, e.writeUInt8 = Q.writeUInt8, e.writeUIntLE = Q.writeUIntLE, e.writeUIntBE = Q.writeUIntBE, e.writeUInt16LE = Q.writeUInt16LE, e.writeUInt16BE = Q.writeUInt16BE, e.writeUInt32LE = Q.writeUInt32LE, e.writeUInt32BE = Q.writeUInt32BE, e.writeIntLE = Q.writeIntLE, e.writeIntBE = Q.writeIntBE, e.writeInt8 = Q.writeInt8, e.writeInt16LE = Q.writeInt16LE, e.writeInt16BE = Q.writeInt16BE, e.writeInt32LE = Q.writeInt32LE, e.writeInt32BE = Q.writeInt32BE, e.writeFloatLE = Q.writeFloatLE, e.writeFloatBE = Q.writeFloatBE, e.writeDoubleLE = Q.writeDoubleLE, e.writeDoubleBE = Q.writeDoubleBE, e.fill = Q.fill, e.inspect = Q.inspect, e.toArrayBuffer = Q.toArrayBuffer, e }; var ee = /[^+\/0-9A-Za-z-_]/g }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, { "base64-js": 1, ieee754: 22, isarray: 4 }],
    4: [function(e, t, n) { var r = {}.toString;
        t.exports = Array.isArray || function(e) { return "[object Array]" == r.call(e) } }, {}],
    5: [function(e, t, n) { "use strict";

        function r(e) { return e = e || {}, "function" != typeof e.codeMirrorInstance || "function" != typeof e.codeMirrorInstance.defineMode ? void console.log("CodeMirror Spell Checker: You must provide an instance of CodeMirror via the option `codeMirrorInstance`") : (String.prototype.includes || (String.prototype.includes = function() { return String.prototype.indexOf.apply(this, arguments) !== -1 }), void e.codeMirrorInstance.defineMode("spell-checker", function(t) { if (!r.aff_loading) { r.aff_loading = !0; var n = new XMLHttpRequest;
                    n.open("GET", "https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.aff", !0), n.onload = function() { 4 === n.readyState && 200 === n.status && (r.aff_data = n.responseText, r.num_loaded++, 2 == r.num_loaded && (r.typo = new i("en_US", r.aff_data, r.dic_data, { platform: "any" }))) }, n.send(null) } if (!r.dic_loading) { r.dic_loading = !0; var o = new XMLHttpRequest;
                    o.open("GET", "https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.dic", !0), o.onload = function() { 4 === o.readyState && 200 === o.status && (r.dic_data = o.responseText, r.num_loaded++, 2 == r.num_loaded && (r.typo = new i("en_US", r.aff_data, r.dic_data, { platform: "any" }))) }, o.send(null) } var a = '!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~ ',
                    s = { token: function(e) { var t = e.peek(),
                                n = ""; if (a.includes(t)) return e.next(), null; for (; null != (t = e.peek()) && !a.includes(t);) n += t, e.next(); return r.typo && !r.typo.check(n) ? "spell-error" : null } },
                    l = e.codeMirrorInstance.getMode(t, t.backdrop || "text/plain"); return e.codeMirrorInstance.overlayMode(l, s, !0) })) } var i = e("typo-js");
        r.num_loaded = 0, r.aff_loading = !1, r.dic_loading = !1, r.aff_data = "", r.dic_data = "", r.typo, t.exports = r }, { "typo-js": 187 }],
    6: [function(e, t, n) {! function(r) { "object" == typeof n && "object" == typeof t ? r(e("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], r) : r(CodeMirror) }(function(e) { "use strict";

            function t(e) { var t = e.getWrapperElement();
                e.state.fullScreenRestore = { scrollTop: window.pageYOffset, scrollLeft: window.pageXOffset, width: t.style.width, height: t.style.height }, t.style.width = "", t.style.height = "auto", t.className += " CodeMirror-fullscreen", document.documentElement.style.overflow = "hidden", e.refresh() }

            function n(e) { var t = e.getWrapperElement();
                t.className = t.className.replace(/\s*CodeMirror-fullscreen\b/, ""), document.documentElement.style.overflow = ""; var n = e.state.fullScreenRestore;
                t.style.width = n.width, t.style.height = n.height, window.scrollTo(n.scrollLeft, n.scrollTop), e.refresh() } e.defineOption("fullScreen", !1, function(r, i, o) { o == e.Init && (o = !1), !o != !i && (i ? t(r) : n(r)) }) }) }, { "../../lib/codemirror": 14 }],
    7: [function(e, t, n) {! function(r) { "object" == typeof n && "object" == typeof t ? r(e("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], r) : r(CodeMirror) }(function(e) {
            function t(e) { e.state.placeholder && (e.state.placeholder.parentNode.removeChild(e.state.placeholder), e.state.placeholder = null) }

            function n(e) { t(e); var n = e.state.placeholder = document.createElement("pre");
                n.style.cssText = "height: 0; overflow: visible", n.className = "CodeMirror-placeholder"; var r = e.getOption("placeholder"); "string" == typeof r && (r = document.createTextNode(r)), n.appendChild(r), e.display.lineSpace.insertBefore(n, e.display.lineSpace.firstChild) }

            function r(e) { o(e) && n(e) }

            function i(e) { var r = e.getWrapperElement(),
                    i = o(e);
                r.className = r.className.replace(" CodeMirror-empty", "") + (i ? " CodeMirror-empty" : ""), i ? n(e) : t(e) }

            function o(e) { return 1 === e.lineCount() && "" === e.getLine(0) } e.defineOption("placeholder", "", function(n, o, a) { var s = a && a != e.Init; if (o && !s) n.on("blur", r), n.on("change", i), n.on("swapDoc", i), i(n);
                else if (!o && s) { n.off("blur", r), n.off("change", i), n.off("swapDoc", i), t(n); var l = n.getWrapperElement();
                    l.className = l.className.replace(" CodeMirror-empty", "") } o && !n.hasFocus() && r(n) }) }) }, { "../../lib/codemirror": 14 }],
    8: [function(e, t, n) {! function(r) { "object" == typeof n && "object" == typeof t ? r(e("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], r) : r(CodeMirror) }(function(e) { "use strict"; var t = /^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/,
                n = /^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/,
                r = /[*+-]\s/;
            e.commands.newlineAndIndentContinueMarkdownList = function(i) { if (i.getOption("disableInput")) return e.Pass; for (var o = i.listSelections(), a = [], s = 0; s < o.length; s++) { var l = o[s].head,
                        c = i.getStateAfter(l.line),
                        u = c.list !== !1,
                        d = 0 !== c.quote,
                        f = i.getLine(l.line),
                        h = t.exec(f); if (!o[s].empty() || !u && !d || !h) return void i.execCommand("newlineAndIndent"); if (n.test(f)) />\s*$/.test(f) || i.replaceRange("", { line: l.line, ch: 0 }, { line: l.line, ch: l.ch + 1 }), a[s] = "\n";
                    else { var p = h[1],
                            m = h[5],
                            g = r.test(h[2]) || h[2].indexOf(">") >= 0 ? h[2].replace("x", " ") : parseInt(h[3], 10) + 1 + h[4];
                        a[s] = "\n" + p + g + m } } i.replaceSelections(a) } }) }, { "../../lib/codemirror": 14 }],
    9: [function(e, t, n) {! function(r) { "object" == typeof n && "object" == typeof t ? r(e("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], r) : r(CodeMirror) }(function(e) {
            function t(e, t, r) { var i = e.getLineHandle(t.line),
                    o = t.ch - 1,
                    l = r && r.afterCursor;
                null == l && (l = /(^| )cm-fat-cursor($| )/.test(e.getWrapperElement().className)); var c = !l && o >= 0 && s[i.text.charAt(o)] || s[i.text.charAt(++o)]; if (!c) return null; var u = ">" == c.charAt(1) ? 1 : -1; if (r && r.strict && u > 0 != (o == t.ch)) return null; var d = e.getTokenTypeAt(a(t.line, o + 1)),
                    f = n(e, a(t.line, o + (u > 0 ? 1 : 0)), u, d || null, r); return null == f ? null : { from: a(t.line, o), to: f && f.pos, match: f && f.ch == c.charAt(0), forward: u > 0 } }

            function n(e, t, n, r, i) { for (var o = i && i.maxScanLineLength || 1e4, l = i && i.maxScanLines || 1e3, c = [], u = i && i.bracketRegex ? i.bracketRegex : /[(){}[\]]/, d = n > 0 ? Math.min(t.line + l, e.lastLine() + 1) : Math.max(e.firstLine() - 1, t.line - l), f = t.line; f != d; f += n) { var h = e.getLine(f); if (h) { var p = n > 0 ? 0 : h.length - 1,
                            m = n > 0 ? h.length : -1; if (!(h.length > o))
                            for (f == t.line && (p = t.ch - (n < 0 ? 1 : 0)); p != m; p += n) { var g = h.charAt(p); if (u.test(g) && (void 0 === r || e.getTokenTypeAt(a(f, p + 1)) == r)) { var v = s[g]; if (">" == v.charAt(1) == n > 0) c.push(g);
                                    else { if (!c.length) return { pos: a(f, p), ch: g };
                                        c.pop() } } } } } return f - n != (n > 0 ? e.lastLine() : e.firstLine()) && null }

            function r(e, n, r) { for (var i = e.state.matchBrackets.maxHighlightLineLength || 1e3, s = [], l = e.listSelections(), c = 0; c < l.length; c++) { var u = l[c].empty() && t(e, l[c].head, r); if (u && e.getLine(u.from.line).length <= i) { var d = u.match ? "CodeMirror-matchingbracket" : "CodeMirror-nonmatchingbracket";
                        s.push(e.markText(u.from, a(u.from.line, u.from.ch + 1), { className: d })), u.to && e.getLine(u.to.line).length <= i && s.push(e.markText(u.to, a(u.to.line, u.to.ch + 1), { className: d })) } } if (s.length) { o && e.state.focused && e.focus(); var f = function() { e.operation(function() { for (var e = 0; e < s.length; e++) s[e].clear() }) }; if (!n) return f;
                    setTimeout(f, 800) } }

            function i(e) { e.operation(function() { l && (l(), l = null), l = r(e, !1, e.state.matchBrackets) }) } var o = /MSIE \d/.test(navigator.userAgent) && (null == document.documentMode || document.documentMode < 8),
                a = e.Pos,
                s = { "(": ")>", ")": "(<", "[": "]>", "]": "[<", "{": "}>", "}": "{<" },
                l = null;
            e.defineOption("matchBrackets", !1, function(t, n, r) { r && r != e.Init && (t.off("cursorActivity", i), l && (l(), l = null)), n && (t.state.matchBrackets = "object" == typeof n ? n : {}, t.on("cursorActivity", i)) }), e.defineExtension("matchBrackets", function() { r(this, !0) }), e.defineExtension("findMatchingBracket", function(e, n, r) { return (r || "boolean" == typeof n) && (r ? (r.strict = n, n = r) : n = n ? { strict: !0 } : null), t(this, e, n) }), e.defineExtension("scanForBracket", function(e, t, r, i) { return n(this, e, t, r, i) }) }) }, { "../../lib/codemirror": 14 }],
    10: [function(e, t, n) {! function(r) { "object" == typeof n && "object" == typeof t ? r(e("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], r) : r(CodeMirror) }(function(e) { "use strict";
            e.overlayMode = function(t, n, r) { return { startState: function() { return { base: e.startState(t), overlay: e.startState(n), basePos: 0, baseCur: null, overlayPos: 0, overlayCur: null, streamSeen: null } }, copyState: function(r) { return { base: e.copyState(t, r.base), overlay: e.copyState(n, r.overlay), basePos: r.basePos, baseCur: null, overlayPos: r.overlayPos, overlayCur: null } }, token: function(e, i) { return (e != i.streamSeen || Math.min(i.basePos, i.overlayPos) < e.start) && (i.streamSeen = e, i.basePos = i.overlayPos = e.start), e.start == i.basePos && (i.baseCur = t.token(e, i.base), i.basePos = e.pos), e.start == i.overlayPos && (e.pos = e.start, i.overlayCur = n.token(e, i.overlay), i.overlayPos = e.pos), e.pos = Math.min(i.basePos, i.overlayPos), null == i.overlayCur ? i.baseCur : null != i.baseCur && i.overlay.combineTokens || r && null == i.overlay.combineTokens ? i.baseCur + " " + i.overlayCur : i.overlayCur }, indent: t.indent && function(e, n) { return t.indent(e.base, n) }, electricChars: t.electricChars, innerMode: function(e) { return { state: e.base, mode: t } }, blankLine: function(e) { var i, o; return t.blankLine && (i = t.blankLine(e.base)), n.blankLine && (o = n.blankLine(e.overlay)), null == o ? i : r && null != i ? i + " " + o : o } } } }) }, { "../../lib/codemirror": 14 }],
    11: [function(e, t, n) {
        ! function(r) { "object" == typeof n && "object" == typeof t ? r(e("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], r) : r(CodeMirror) }(function(e) {
            "use strict";

            function t(e) { var t = e.flags; return null != t ? t : (e.ignoreCase ? "i" : "") + (e.global ? "g" : "") + (e.multiline ? "m" : "") }

            function n(e) { return e.global ? e : new RegExp(e.source, t(e) + "g") }

            function r(e) { return /\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source) }

            function i(e, t, r) { t = n(t); for (var i = r.line, o = r.ch, a = e.lastLine(); i <= a; i++, o = 0) { t.lastIndex = o; var s = e.getLine(i),
                        l = t.exec(s); if (l) return { from: m(i, l.index), to: m(i, l.index + l[0].length), match: l } } }

            function o(e, t, o) { if (!r(t)) return i(e, t, o);
                t = n(t); for (var a, s = 1, l = o.line, c = e.lastLine(); l <= c;) { for (var u = 0; u < s; u++) { var d = e.getLine(l++);
                        a = null == a ? d : a + "\n" + d } s = 2 * s, t.lastIndex = o.ch; var f = t.exec(a); if (f) { var h = a.slice(0, f.index).split("\n"),
                            p = f[0].split("\n"),
                            g = o.line + h.length - 1,
                            v = h[h.length - 1].length; return { from: m(g, v), to: m(g + p.length - 1, 1 == p.length ? v + p[0].length : p[p.length - 1].length), match: f } } } }

            function a(e, t) { for (var n, r = 0;;) { t.lastIndex = r; var i = t.exec(e); if (!i) return n; if (n = i, r = n.index + (n[0].length || 1), r == e.length) return n } }

            function s(e, t, r) { t = n(t); for (var i = r.line, o = r.ch, s = e.firstLine(); i >= s; i--, o = -1) { var l = e.getLine(i);
                    o > -1 && (l = l.slice(0, o)); var c = a(l, t); if (c) return { from: m(i, c.index), to: m(i, c.index + c[0].length), match: c } } }

            function l(e, t, r) { t = n(t); for (var i, o = 1, s = r.line, l = e.firstLine(); s >= l;) { for (var c = 0; c < o; c++) { var u = e.getLine(s--);
                        i = null == i ? u.slice(0, r.ch) : u + "\n" + i } o *= 2; var d = a(i, t); if (d) { var f = i.slice(0, d.index).split("\n"),
                            h = d[0].split("\n"),
                            p = s + f.length,
                            g = f[f.length - 1].length; return { from: m(p, g), to: m(p + h.length - 1, 1 == h.length ? g + h[0].length : h[h.length - 1].length), match: d } } } }

            function c(e, t, n, r) { if (e.length == t.length) return n; for (var i = 0, o = n + Math.max(0, e.length - t.length);;) { if (i == o) return i; var a = i + o >> 1,
                        s = r(e.slice(0, a)).length; if (s == n) return a;
                    s > n ? o = a : i = a + 1 } }

            function u(e, t, n, r) { if (!t.length) return null; var i = r ? h : p,
                    o = i(t).split(/\r|\n\r?/);
                e: for (var a = n.line, s = n.ch, l = e.lastLine() + 1 - o.length; a <= l; a++, s = 0) { var u = e.getLine(a).slice(s),
                        d = i(u); if (1 == o.length) { var f = d.indexOf(o[0]); if (f == -1) continue e; var n = c(u, d, f, i) + s; return { from: m(a, c(u, d, f, i) + s), to: m(a, c(u, d, f + o[0].length, i) + s) } } var g = d.length - o[0].length; if (d.slice(g) == o[0]) { for (var v = 1; v < o.length - 1; v++)
                            if (i(e.getLine(a + v)) != o[v]) continue e; var y = e.getLine(a + o.length - 1),
                            b = i(y),
                            x = o[o.length - 1]; if (y.slice(0, x.length) == x) return { from: m(a, c(u, d, g, i) + s), to: m(a + o.length - 1, c(y, b, x.length, i)) } } } }

            function d(e, t, n, r) {
                if (!t.length) return null;
                var i = r ? h : p,
                    o = i(t).split(/\r|\n\r?/);
                e: for (var a = n.line, s = n.ch, l = e.firstLine() - 1 + o.length; a >= l; a--, s = -1) { var u = e.getLine(a);
                    s > -1 && (u = u.slice(0, s)); var d = i(u); if (1 == o.length) { var f = d.lastIndexOf(o[0]); if (f == -1) continue e; return { from: m(a, c(u, d, f, i)), to: m(a, c(u, d, f + o[0].length, i)) } } var g = o[o.length - 1]; if (d.slice(0, g.length) == g) { for (var v = 1, n = a - o.length + 1; v < o.length - 1; v++)
                            if (i(e.getLine(n + v)) != o[v]) continue e; var y = e.getLine(a + 1 - o.length),
                            b = i(y); if (b.slice(b.length - o[0].length) == o[0]) return { from: m(a + 1 - o.length, c(y, b, y.length - o[0].length, i)), to: m(a, c(u, d, g.length, i)) } } }
            }

            function f(e, t, r, a) { this.atOccurrence = !1, this.doc = e, r = r ? e.clipPos(r) : m(0, 0), this.pos = { from: r, to: r }; var c; "object" == typeof a ? c = a.caseFold : (c = a, a = null), "string" == typeof t ? (null == c && (c = !1), this.matches = function(n, r) { return (n ? d : u)(e, t, r, c) }) : (t = n(t), a && a.multiline === !1 ? this.matches = function(n, r) { return (n ? s : i)(e, t, r) } : this.matches = function(n, r) { return (n ? l : o)(e, t, r) }) }
            var h, p, m = e.Pos;
            String.prototype.normalize ? (h = function(e) { return e.normalize("NFD").toLowerCase() }, p = function(e) { return e.normalize("NFD") }) : (h = function(e) { return e.toLowerCase() }, p = function(e) { return e }), f.prototype = { findNext: function() { return this.find(!1) }, findPrevious: function() { return this.find(!0) }, find: function(t) { for (var n = this.matches(t, this.doc.clipPos(t ? this.pos.from : this.pos.to)); n && 0 == e.cmpPos(n.from, n.to);) t ? n.from.ch ? n.from = m(n.from.line, n.from.ch - 1) : n = n.from.line == this.doc.firstLine() ? null : this.matches(t, this.doc.clipPos(m(n.from.line - 1))) : n.to.ch < this.doc.getLine(n.to.line).length ? n.to = m(n.to.line, n.to.ch + 1) : n = n.to.line == this.doc.lastLine() ? null : this.matches(t, m(n.to.line + 1, 0)); if (n) return this.pos = n, this.atOccurrence = !0, this.pos.match || !0; var r = m(t ? this.doc.firstLine() : this.doc.lastLine() + 1, 0); return this.pos = { from: r, to: r }, this.atOccurrence = !1 }, from: function() { if (this.atOccurrence) return this.pos.from }, to: function() { if (this.atOccurrence) return this.pos.to }, replace: function(t, n) { if (this.atOccurrence) { var r = e.splitLines(t);
                        this.doc.replaceRange(r, this.pos.from, this.pos.to, n), this.pos.to = m(this.pos.from.line + r.length - 1, r[r.length - 1].length + (1 == r.length ? this.pos.from.ch : 0)) } } }, e.defineExtension("getSearchCursor", function(e, t, n) { return new f(this.doc, e, t, n) }), e.defineDocExtension("getSearchCursor", function(e, t, n) { return new f(this, e, t, n) }), e.defineExtension("selectMatches", function(t, n) { for (var r = [], i = this.getSearchCursor(t, this.getCursor("from"), n); i.findNext() && !(e.cmpPos(i.to(), this.getCursor("to")) > 0);) r.push({ anchor: i.from(), head: i.to() });
                r.length && this.setSelections(r, 0) })
        })
    }, { "../../lib/codemirror": 14 }],
    12: [function(e, t, n) {! function(r) { "object" == typeof n && "object" == typeof t ? r(e("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], r) : r(CodeMirror) }(function(e) { "use strict";

            function t(e) { e.state.markedSelection && e.operation(function() { a(e) }) }

            function n(e) { e.state.markedSelection && e.state.markedSelection.length && e.operation(function() { i(e) }) }

            function r(e, t, n, r) { if (0 != c(t, n))
                    for (var i = e.state.markedSelection, o = e.state.markedSelectionStyle, a = t.line;;) { var u = a == t.line ? t : l(a, 0),
                            d = a + s,
                            f = d >= n.line,
                            h = f ? n : l(d, 0),
                            p = e.markText(u, h, { className: o }); if (null == r ? i.push(p) : i.splice(r++, 0, p), f) break;
                        a = d } }

            function i(e) { for (var t = e.state.markedSelection, n = 0; n < t.length; ++n) t[n].clear();
                t.length = 0 }

            function o(e) { i(e); for (var t = e.listSelections(), n = 0; n < t.length; n++) r(e, t[n].from(), t[n].to()) }

            function a(e) { if (!e.somethingSelected()) return i(e); if (e.listSelections().length > 1) return o(e); var t = e.getCursor("start"),
                    n = e.getCursor("end"),
                    a = e.state.markedSelection; if (!a.length) return r(e, t, n); var l = a[0].find(),
                    u = a[a.length - 1].find(); if (!l || !u || n.line - t.line < s || c(t, u.to) >= 0 || c(n, l.from) <= 0) return o(e); for (; c(t, l.from) > 0;) a.shift().clear(), l = a[0].find(); for (c(t, l.from) < 0 && (l.to.line - t.line < s ? (a.shift().clear(), r(e, t, l.to, 0)) : r(e, t, l.from, 0)); c(n, u.to) < 0;) a.pop().clear(), u = a[a.length - 1].find();
                c(n, u.to) > 0 && (n.line - u.from.line < s ? (a.pop().clear(), r(e, u.from, n)) : r(e, u.to, n)) } e.defineOption("styleSelectedText", !1, function(r, a, s) { var l = s && s != e.Init;
                a && !l ? (r.state.markedSelection = [], r.state.markedSelectionStyle = "string" == typeof a ? a : "CodeMirror-selectedtext", o(r), r.on("cursorActivity", t), r.on("change", n)) : !a && l && (r.off("cursorActivity", t), r.off("change", n), i(r), r.state.markedSelection = r.state.markedSelectionStyle = null) }); var s = 8,
                l = e.Pos,
                c = e.cmpPos }) }, { "../../lib/codemirror": 14 }],
    13: [function(e, t, n) {! function(r) { "object" == typeof n && "object" == typeof t ? r(e("../lib/codemirror"), e("../addon/search/searchcursor"), e("../addon/edit/matchbrackets")) : "function" == typeof define && define.amd ? define(["../lib/codemirror", "../addon/search/searchcursor", "../addon/edit/matchbrackets"], r) : r(CodeMirror) }(function(e) { "use strict";

            function t(t, n, r) { if (r < 0 && 0 == n.ch) return t.clipPos(p(n.line - 1)); var i = t.getLine(n.line); if (r > 0 && n.ch >= i.length) return t.clipPos(p(n.line + 1, 0)); for (var o, a = "start", s = n.ch, l = r < 0 ? 0 : i.length, c = 0; s != l; s += r, c++) { var u = i.charAt(r < 0 ? s - 1 : s),
                        d = "_" != u && e.isWordChar(u) ? "w" : "o"; if ("w" == d && u.toUpperCase() == u && (d = "W"), "start" == a) "o" != d && (a = "in", o = d);
                    else if ("in" == a && o != d) { if ("w" == o && "W" == d && r < 0 && s--, "W" == o && "w" == d && r > 0) { o = "w"; continue } break } } return p(n.line, s) }

            function n(e, n) { e.extendSelectionsBy(function(r) { return e.display.shift || e.doc.extend || r.empty() ? t(e.doc, r.head, n) : n < 0 ? r.from() : r.to() }) }

            function r(t, n) { return t.isReadOnly() ? e.Pass : (t.operation(function() { for (var e = t.listSelections().length, r = [], i = -1, o = 0; o < e; o++) { var a = t.listSelections()[o].head; if (!(a.line <= i)) { var s = p(a.line + (n ? 0 : 1), 0);
                            t.replaceRange("\n", s, null, "+insertLine"), t.indentLine(s.line, null, !0), r.push({ head: s, anchor: s }), i = a.line + 1 } } t.setSelections(r) }), void t.execCommand("indentAuto")) }

            function i(t, n) { for (var r = n.ch, i = r, o = t.getLine(n.line); r && e.isWordChar(o.charAt(r - 1));) --r; for (; i < o.length && e.isWordChar(o.charAt(i));) ++i; return { from: p(n.line, r), to: p(n.line, i), word: o.slice(r, i) } }

            function o(e, t) { for (var n = e.listSelections(), r = [], i = 0; i < n.length; i++) { var o = n[i],
                        a = e.findPosV(o.anchor, t, "line"),
                        s = e.findPosV(o.head, t, "line"),
                        l = { anchor: a, head: s };
                    r.push(o), r.push(l) } e.setSelections(r) }

            function a(e, t, n) { for (var r = 0; r < e.length; r++)
                    if (e[r].from() == t && e[r].to() == n) return !0; return !1 }

            function s(e) { for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++) { var i = t[r],
                        o = i.head,
                        a = e.scanForBracket(o, -1); if (!a) return !1; for (;;) { var s = e.scanForBracket(o, 1); if (!s) return !1; if (s.ch == x.charAt(x.indexOf(a.ch) + 1)) { n.push({ anchor: p(a.pos.line, a.pos.ch + 1), head: s.pos }); break } o = p(s.pos.line, s.pos.ch + 1) } } return e.setSelections(n), !0 }

            function l(t, n) { if (t.isReadOnly()) return e.Pass; for (var r, i = t.listSelections(), o = [], a = 0; a < i.length; a++) { var s = i[a]; if (!s.empty()) { for (var l = s.from().line, c = s.to().line; a < i.length - 1 && i[a + 1].from().line == c;) c = i[++a].to().line;
                        i[a].to().ch || c--, o.push(l, c) } } o.length ? r = !0 : o.push(t.firstLine(), t.lastLine()), t.operation(function() { for (var e = [], i = 0; i < o.length; i += 2) { var a = o[i],
                            s = o[i + 1],
                            l = p(a, 0),
                            c = p(s),
                            u = t.getRange(l, c, !1);
                        n ? u.sort() : u.sort(function(e, t) { var n = e.toUpperCase(),
                                r = t.toUpperCase(); return n != r && (e = n, t = r), e < t ? -1 : e == t ? 0 : 1 }), t.replaceRange(u, l, c), r && e.push({ anchor: l, head: p(s + 1, 0) }) } r && t.setSelections(e, 0) }) }

            function c(t, n) { t.operation(function() { for (var r = t.listSelections(), o = [], a = [], s = 0; s < r.length; s++) { var l = r[s];
                        l.empty() ? (o.push(s), a.push("")) : a.push(n(t.getRange(l.from(), l.to()))) } t.replaceSelections(a, "around", "case"); for (var c, s = o.length - 1; s >= 0; s--) { var l = r[o[s]]; if (!(c && e.cmpPos(l.head, c) > 0)) { var u = i(t, l.head);
                            c = u.from, t.replaceRange(n(u.word), u.from, u.to) } } }) }

            function u(t) { var n = t.getCursor("from"),
                    r = t.getCursor("to"); if (0 == e.cmpPos(n, r)) { var o = i(t, n); if (!o.word) return;
                    n = o.from, r = o.to } return { from: n, to: r, query: t.getRange(n, r), word: o } }

            function d(e, t) { var n = u(e); if (n) { var r = n.query,
                        i = e.getSearchCursor(r, t ? n.to : n.from);
                    (t ? i.findNext() : i.findPrevious()) ? e.setSelection(i.from(), i.to()): (i = e.getSearchCursor(r, t ? p(e.firstLine(), 0) : e.clipPos(p(e.lastLine()))), (t ? i.findNext() : i.findPrevious()) ? e.setSelection(i.from(), i.to()) : n.word && e.setSelection(n.from, n.to)) } } var f = e.keyMap.sublime = { fallthrough: "default" },
                h = e.commands,
                p = e.Pos,
                m = e.keyMap["default"] == e.keyMap.macDefault,
                g = m ? "Cmd-" : "Ctrl-",
                v = m ? "Ctrl-" : "Alt-";
            h[f[v + "Left"] = "goSubwordLeft"] = function(e) { n(e, -1) }, h[f[v + "Right"] = "goSubwordRight"] = function(e) { n(e, 1) }, m && (f["Cmd-Left"] = "goLineStartSmart"); var y = m ? "Ctrl-Alt-" : "Ctrl-";
            h[f[y + "Up"] = "scrollLineUp"] = function(e) { var t = e.getScrollInfo(); if (!e.somethingSelected()) { var n = e.lineAtHeight(t.top + t.clientHeight, "local");
                    e.getCursor().line >= n && e.execCommand("goLineUp") } e.scrollTo(null, t.top - e.defaultTextHeight()) }, h[f[y + "Down"] = "scrollLineDown"] = function(e) { var t = e.getScrollInfo(); if (!e.somethingSelected()) { var n = e.lineAtHeight(t.top, "local") + 1;
                    e.getCursor().line <= n && e.execCommand("goLineDown") } e.scrollTo(null, t.top + e.defaultTextHeight()) }, h[f["Shift-" + g + "L"] = "splitSelectionByLine"] = function(e) { for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++)
                    for (var i = t[r].from(), o = t[r].to(), a = i.line; a <= o.line; ++a) o.line > i.line && a == o.line && 0 == o.ch || n.push({ anchor: a == i.line ? i : p(a, 0), head: a == o.line ? o : p(a) });
                e.setSelections(n, 0) }, f["Shift-Tab"] = "indentLess", h[f.Esc = "singleSelectionTop"] = function(e) { var t = e.listSelections()[0];
                e.setSelection(t.anchor, t.head, { scroll: !1 }) }, h[f[g + "L"] = "selectLine"] = function(e) { for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++) { var i = t[r];
                    n.push({ anchor: p(i.from().line, 0), head: p(i.to().line + 1, 0) }) } e.setSelections(n) }, f["Shift-Ctrl-K"] = "deleteLine", h[f[g + "Enter"] = "insertLineAfter"] = function(e) { return r(e, !1) }, h[f["Shift-" + g + "Enter"] = "insertLineBefore"] = function(e) { return r(e, !0) }, h[f[g + "D"] = "selectNextOccurrence"] = function(t) { var n = t.getCursor("from"),
                    r = t.getCursor("to"),
                    o = t.state.sublimeFindFullWord == t.doc.sel; if (0 == e.cmpPos(n, r)) { var s = i(t, n); if (!s.word) return;
                    t.setSelection(s.from, s.to), o = !0 } else { var l = t.getRange(n, r),
                        c = o ? new RegExp("\\b" + l + "\\b") : l,
                        u = t.getSearchCursor(c, r),
                        d = u.findNext(); if (d || (u = t.getSearchCursor(c, p(t.firstLine(), 0)), d = u.findNext()), !d || a(t.listSelections(), u.from(), u.to())) return e.Pass;
                    t.addSelection(u.from(), u.to()) } o && (t.state.sublimeFindFullWord = t.doc.sel) }; var b = m ? "Shift-Cmd" : "Alt-Ctrl";
            h[f[b + "Up"] = "addCursorToPrevLine"] = function(e) { o(e, -1) }, h[f[b + "Down"] = "addCursorToNextLine"] = function(e) { o(e, 1) }; var x = "(){}[]";
            h[f["Shift-" + g + "Space"] = "selectScope"] = function(e) { s(e) || e.execCommand("selectAll") }, h[f["Shift-" + g + "M"] = "selectBetweenBrackets"] = function(t) { if (!s(t)) return e.Pass }, h[f[g + "M"] = "goToBracket"] = function(t) { t.extendSelectionsBy(function(n) { var r = t.scanForBracket(n.head, 1); if (r && 0 != e.cmpPos(r.pos, n.head)) return r.pos; var i = t.scanForBracket(n.head, -1); return i && p(i.pos.line, i.pos.ch + 1) || n.head }) }; var w = m ? "Cmd-Ctrl-" : "Shift-Ctrl-";
            h[f[w + "Up"] = "swapLineUp"] = function(t) { if (t.isReadOnly()) return e.Pass; for (var n = t.listSelections(), r = [], i = t.firstLine() - 1, o = [], a = 0; a < n.length; a++) { var s = n[a],
                        l = s.from().line - 1,
                        c = s.to().line;
                    o.push({ anchor: p(s.anchor.line - 1, s.anchor.ch), head: p(s.head.line - 1, s.head.ch) }), 0 != s.to().ch || s.empty() || --c, l > i ? r.push(l, c) : r.length && (r[r.length - 1] = c), i = c } t.operation(function() { for (var e = 0; e < r.length; e += 2) { var n = r[e],
                            i = r[e + 1],
                            a = t.getLine(n);
                        t.replaceRange("", p(n, 0), p(n + 1, 0), "+swapLine"), i > t.lastLine() ? t.replaceRange("\n" + a, p(t.lastLine()), null, "+swapLine") : t.replaceRange(a + "\n", p(i, 0), null, "+swapLine") } t.setSelections(o), t.scrollIntoView() }) }, h[f[w + "Down"] = "swapLineDown"] = function(t) { if (t.isReadOnly()) return e.Pass; for (var n = t.listSelections(), r = [], i = t.lastLine() + 1, o = n.length - 1; o >= 0; o--) { var a = n[o],
                        s = a.to().line + 1,
                        l = a.from().line;
                    0 != a.to().ch || a.empty() || s--, s < i ? r.push(s, l) : r.length && (r[r.length - 1] = l), i = l } t.operation(function() { for (var e = r.length - 2; e >= 0; e -= 2) { var n = r[e],
                            i = r[e + 1],
                            o = t.getLine(n);
                        n == t.lastLine() ? t.replaceRange("", p(n - 1), p(n), "+swapLine") : t.replaceRange("", p(n, 0), p(n + 1, 0), "+swapLine"), t.replaceRange(o + "\n", p(i, 0), null, "+swapLine") } t.scrollIntoView() }) }, h[f[g + "/"] = "toggleCommentIndented"] = function(e) { e.toggleComment({ indent: !0 }) }, h[f[g + "J"] = "joinLines"] = function(e) { for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++) { for (var i = t[r], o = i.from(), a = o.line, s = i.to().line; r < t.length - 1 && t[r + 1].from().line == s;) s = t[++r].to().line;
                    n.push({ start: a, end: s, anchor: !i.empty() && o }) } e.operation(function() { for (var t = 0, r = [], i = 0; i < n.length; i++) { for (var o, a = n[i], s = a.anchor && p(a.anchor.line - t, a.anchor.ch), l = a.start; l <= a.end; l++) { var c = l - t;
                            l == a.end && (o = p(c, e.getLine(c).length + 1)), c < e.lastLine() && (e.replaceRange(" ", p(c), p(c + 1, /^\s*/.exec(e.getLine(c + 1))[0].length)), ++t) } r.push({ anchor: s || o, head: o }) } e.setSelections(r, 0) }) }, h[f["Shift-" + g + "D"] = "duplicateLine"] = function(e) { e.operation(function() { for (var t = e.listSelections().length, n = 0; n < t; n++) { var r = e.listSelections()[n];
                        r.empty() ? e.replaceRange(e.getLine(r.head.line) + "\n", p(r.head.line, 0)) : e.replaceRange(e.getRange(r.from(), r.to()), r.from()) } e.scrollIntoView() }) }, m || (f[g + "T"] = "transposeChars"), h[f.F9 = "sortLines"] = function(e) { l(e, !0) }, h[f[g + "F9"] = "sortLinesInsensitive"] = function(e) { l(e, !1) }, h[f.F2 = "nextBookmark"] = function(e) { var t = e.state.sublimeBookmarks; if (t)
                    for (; t.length;) { var n = t.shift(),
                            r = n.find(); if (r) return t.push(n), e.setSelection(r.from, r.to) } }, h[f["Shift-F2"] = "prevBookmark"] = function(e) { var t = e.state.sublimeBookmarks; if (t)
                    for (; t.length;) { t.unshift(t.pop()); var n = t[t.length - 1].find(); if (n) return e.setSelection(n.from, n.to);
                        t.pop() } }, h[f[g + "F2"] = "toggleBookmark"] = function(e) { for (var t = e.listSelections(), n = e.state.sublimeBookmarks || (e.state.sublimeBookmarks = []), r = 0; r < t.length; r++) { for (var i = t[r].from(), o = t[r].to(), a = e.findMarks(i, o), s = 0; s < a.length; s++)
                        if (a[s].sublimeBookmark) { a[s].clear(); for (var l = 0; l < n.length; l++) n[l] == a[s] && n.splice(l--, 1); break }
                    s == a.length && n.push(e.markText(i, o, { sublimeBookmark: !0, clearWhenEmpty: !1 })) } }, h[f["Shift-" + g + "F2"] = "clearBookmarks"] = function(e) { var t = e.state.sublimeBookmarks; if (t)
                    for (var n = 0; n < t.length; n++) t[n].clear();
                t.length = 0 }, h[f["Alt-F2"] = "selectBookmarks"] = function(e) { var t = e.state.sublimeBookmarks,
                    n = []; if (t)
                    for (var r = 0; r < t.length; r++) { var i = t[r].find();
                        i ? n.push({ anchor: i.from, head: i.to }) : t.splice(r--, 0) } n.length && e.setSelections(n, 0) }, f["Alt-Q"] = "wrapLines"; var k = g + "K ";
            f[k + g + "Backspace"] = "delLineLeft", h[f.Backspace = "smartBackspace"] = function(t) { return t.somethingSelected() ? e.Pass : void t.operation(function() { for (var n = t.listSelections(), r = t.getOption("indentUnit"), i = n.length - 1; i >= 0; i--) { var o = n[i].head,
                            a = t.getRange({ line: o.line, ch: 0 }, o),
                            s = e.countColumn(a, null, t.getOption("tabSize")),
                            l = t.findPosH(o, -1, "char", !1); if (a && !/\S/.test(a) && s % r == 0) { var c = new p(o.line, e.findColumn(a, s - r, r));
                            c.ch != o.ch && (l = c) } t.replaceRange("", l, o, "+delete") } }) }, h[f[k + g + "K"] = "delLineRight"] = function(e) { e.operation(function() { for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--) e.replaceRange("", t[n].anchor, p(t[n].to().line), "+delete");
                    e.scrollIntoView() }) }, h[f[k + g + "U"] = "upcaseAtCursor"] = function(e) { c(e, function(e) { return e.toUpperCase() }) }, h[f[k + g + "L"] = "downcaseAtCursor"] = function(e) { c(e, function(e) { return e.toLowerCase() }) }, h[f[k + g + "Space"] = "setSublimeMark"] = function(e) { e.state.sublimeMark && e.state.sublimeMark.clear(), e.state.sublimeMark = e.setBookmark(e.getCursor()) }, h[f[k + g + "A"] = "selectToSublimeMark"] = function(e) { var t = e.state.sublimeMark && e.state.sublimeMark.find();
                t && e.setSelection(e.getCursor(), t) }, h[f[k + g + "W"] = "deleteToSublimeMark"] = function(t) { var n = t.state.sublimeMark && t.state.sublimeMark.find(); if (n) { var r = t.getCursor(),
                        i = n; if (e.cmpPos(r, i) > 0) { var o = i;
                        i = r, r = o } t.state.sublimeKilled = t.getRange(r, i), t.replaceRange("", r, i) } }, h[f[k + g + "X"] = "swapWithSublimeMark"] = function(e) { var t = e.state.sublimeMark && e.state.sublimeMark.find();
                t && (e.state.sublimeMark.clear(), e.state.sublimeMark = e.setBookmark(e.getCursor()), e.setCursor(t)) }, h[f[k + g + "Y"] = "sublimeYank"] = function(e) { null != e.state.sublimeKilled && e.replaceSelection(e.state.sublimeKilled, null, "paste") }, f[k + g + "G"] = "clearBookmarks", h[f[k + g + "C"] = "showInCenter"] = function(e) { var t = e.cursorCoords(null, "local");
                e.scrollTo(null, (t.top + t.bottom) / 2 - e.getScrollInfo().clientHeight / 2) }; var C = m ? "Ctrl-Shift-" : "Ctrl-Alt-";
            h[f[C + "Up"] = "selectLinesUpward"] = function(e) { e.operation(function() { for (var t = e.listSelections(), n = 0; n < t.length; n++) { var r = t[n];
                        r.head.line > e.firstLine() && e.addSelection(p(r.head.line - 1, r.head.ch)) } }) }, h[f[C + "Down"] = "selectLinesDownward"] = function(e) { e.operation(function() { for (var t = e.listSelections(), n = 0; n < t.length; n++) { var r = t[n];
                        r.head.line < e.lastLine() && e.addSelection(p(r.head.line + 1, r.head.ch)) } }) }, h[f[g + "F3"] = "findUnder"] = function(e) { d(e, !0) }, h[f["Shift-" + g + "F3"] = "findUnderPrevious"] = function(e) { d(e, !1) }, h[f["Alt-F3"] = "findAllUnder"] = function(e) { var t = u(e); if (t) { for (var n = e.getSearchCursor(t.query), r = [], i = -1; n.findNext();) r.push({ anchor: n.from(), head: n.to() }), n.from().line <= t.from.line && n.from().ch <= t.from.ch && i++;
                    e.setSelections(r, i) } }, f["Shift-" + g + "["] = "fold", f["Shift-" + g + "]"] = "unfold", f[k + g + "0"] = f[k + g + "J"] = "unfoldAll", f[g + "I"] = "findIncremental", f["Shift-" + g + "I"] = "findIncrementalReverse", f[g + "H"] = "replace", f.F3 = "findNext", f["Shift-F3"] = "findPrev", e.normalizeKeyMap(f) }) }, { "../addon/edit/matchbrackets": 9, "../addon/search/searchcursor": 11, "../lib/codemirror": 14 }],
    14: [function(e, t, n) {
        ! function(e, r) { "object" == typeof n && "undefined" != typeof t ? t.exports = r() : "function" == typeof define && define.amd ? define(r) : e.CodeMirror = r() }(this, function() {
            "use strict";

            function e(e) { return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*") }

            function t(e) { for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild); return e }

            function n(e, n) { return t(e).appendChild(n) }

            function r(e, t, n, r) { var i = document.createElement(e); if (n && (i.className = n), r && (i.style.cssText = r), "string" == typeof t) i.appendChild(document.createTextNode(t));
                else if (t)
                    for (var o = 0; o < t.length; ++o) i.appendChild(t[o]); return i }

            function i(e, t, n, i) { var o = r(e, t, n, i); return o.setAttribute("role", "presentation"), o }

            function o(e, t) { if (3 == t.nodeType && (t = t.parentNode), e.contains) return e.contains(t);
                do
                    if (11 == t.nodeType && (t = t.host), t == e) return !0; while (t = t.parentNode) }

            function a() { var e; try { e = document.activeElement } catch (t) { e = document.body || null } for (; e && e.shadowRoot && e.shadowRoot.activeElement;) e = e.shadowRoot.activeElement; return e }

            function s(t, n) { var r = t.className;
                e(n).test(r) || (t.className += (r ? " " : "") + n) }

            function l(t, n) { for (var r = t.split(" "), i = 0; i < r.length; i++) r[i] && !e(r[i]).test(n) && (n += " " + r[i]); return n }

            function c(e) { var t = Array.prototype.slice.call(arguments, 1); return function() { return e.apply(null, t) } }

            function u(e, t, n) { t || (t = {}); for (var r in e) !e.hasOwnProperty(r) || n === !1 && t.hasOwnProperty(r) || (t[r] = e[r]); return t }

            function d(e, t, n, r, i) { null == t && (t = e.search(/[^\s\u00a0]/), t == -1 && (t = e.length)); for (var o = r || 0, a = i || 0;;) { var s = e.indexOf("\t", o); if (s < 0 || s >= t) return a + (t - o);
                    a += s - o, a += n - a % n, o = s + 1 } }

            function f(e, t) { for (var n = 0; n < e.length; ++n)
                    if (e[n] == t) return n; return -1 }

            function h(e, t, n) { for (var r = 0, i = 0;;) { var o = e.indexOf("\t", r);
                    o == -1 && (o = e.length); var a = o - r; if (o == e.length || i + a >= t) return r + Math.min(a, t - i); if (i += o - r, i += n - i % n, r = o + 1, i >= t) return r } }

            function p(e) { for (; $a.length <= e;) $a.push(m($a) + " "); return $a[e] }

            function m(e) { return e[e.length - 1] }

            function g(e, t) { for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r); return n }

            function v(e, t, n) { for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i;) r++;
                e.splice(r, 0, t) }

            function y() {}

            function b(e, t) { var n; return Object.create ? n = Object.create(e) : (y.prototype = e, n = new y), t && u(t, n), n }

            function x(e) { return /\w/.test(e) || e > "Â€" && (e.toUpperCase() != e.toLowerCase() || Wa.test(e)) }

            function w(e, t) { return t ? !!(t.source.indexOf("\\w") > -1 && x(e)) || t.test(e) : x(e) }

            function k(e) { for (var t in e)
                    if (e.hasOwnProperty(t) && e[t]) return !1; return !0 }

            function C(e) { return e.charCodeAt(0) >= 768 && Ua.test(e) }

            function S(e, t, n) { for (;
                    (n < 0 ? t > 0 : t < e.length) && C(e.charAt(t));) t += n; return t }

            function _(e, t, n) { for (;;) { if (Math.abs(t - n) <= 1) return e(t) ? t : n; var r = Math.floor((t + n) / 2);
                    e(r) ? n = r : t = r } }

            function L(e, t, n) { var o = this;
                this.input = n, o.scrollbarFiller = r("div", null, "CodeMirror-scrollbar-filler"), o.scrollbarFiller.setAttribute("cm-not-content", "true"), o.gutterFiller = r("div", null, "CodeMirror-gutter-filler"), o.gutterFiller.setAttribute("cm-not-content", "true"), o.lineDiv = i("div", null, "CodeMirror-code"), o.selectionDiv = r("div", null, null, "position: relative; z-index: 1"), o.cursorDiv = r("div", null, "CodeMirror-cursors"), o.measure = r("div", null, "CodeMirror-measure"), o.lineMeasure = r("div", null, "CodeMirror-measure"), o.lineSpace = i("div", [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv], null, "position: relative; outline: none"); var a = i("div", [o.lineSpace], "CodeMirror-lines");
                o.mover = r("div", [a], null, "position: relative"), o.sizer = r("div", [o.mover], "CodeMirror-sizer"), o.sizerWidth = null, o.heightForcer = r("div", null, null, "position: absolute; height: " + Fa + "px; width: 1px;"), o.gutters = r("div", null, "CodeMirror-gutters"), o.lineGutter = null, o.scroller = r("div", [o.sizer, o.heightForcer, o.gutters], "CodeMirror-scroll"), o.scroller.setAttribute("tabIndex", "-1"), o.wrapper = r("div", [o.scrollbarFiller, o.gutterFiller, o.scroller], "CodeMirror"), ha && pa < 8 && (o.gutters.style.zIndex = -1, o.scroller.style.paddingRight = 0), ma || ca && Sa || (o.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)), o.viewFrom = o.viewTo = t.first, o.reportedViewFrom = o.reportedViewTo = t.first, o.view = [], o.renderedView = null, o.externalMeasured = null, o.viewOffset = 0, o.lastWrapHeight = o.lastWrapWidth = 0, o.updateLineNumbers = null, o.nativeBarWidth = o.barHeight = o.barWidth = 0, o.scrollbarsClipped = !1, o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null, o.alignWidgets = !1, o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null, o.maxLine = null, o.maxLineLength = 0, o.maxLineChanged = !1, o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null, o.shift = !1, o.selForContextMenu = null, o.activeTouch = null, n.init(o) }

            function T(e, t) { if (t -= e.first, t < 0 || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document."); for (var n = e; !n.lines;)
                    for (var r = 0;; ++r) { var i = n.children[r],
                            o = i.chunkSize(); if (t < o) { n = i; break } t -= o }
                return n.lines[t] }

            function M(e, t, n) { var r = [],
                    i = t.line; return e.iter(t.line, n.line + 1, function(e) { var o = e.text;
                    i == n.line && (o = o.slice(0, n.ch)), i == t.line && (o = o.slice(t.ch)), r.push(o), ++i }), r }

            function j(e, t, n) { var r = []; return e.iter(t, n, function(e) { r.push(e.text) }), r }

            function O(e, t) { var n = t - e.height; if (n)
                    for (var r = e; r; r = r.parent) r.height += n }

            function A(e) { if (null == e.parent) return null; for (var t = e.parent, n = f(t.lines, e), r = t.parent; r; t = r, r = r.parent)
                    for (var i = 0; r.children[i] != t; ++i) n += r.children[i].chunkSize(); return n + t.first }

            function E(e, t) { var n = e.first;
                e: do { for (var r = 0; r < e.children.length; ++r) { var i = e.children[r],
                            o = i.height; if (t < o) { e = i; continue e } t -= o, n += i.chunkSize() } return n } while (!e.lines); for (var a = 0; a < e.lines.length; ++a) { var s = e.lines[a],
                        l = s.height; if (t < l) break;
                    t -= l } return n + a }

            function N(e, t) { return t >= e.first && t < e.first + e.size }

            function P(e, t) { return String(e.lineNumberFormatter(t + e.firstLineNumber)) }

            function I(e, t, n) { return void 0 === n && (n = null), this instanceof I ? (this.line = e, this.ch = t, void(this.sticky = n)) : new I(e, t, n) }

            function D(e, t) { return e.line - t.line || e.ch - t.ch }

            function F(e, t) { return e.sticky == t.sticky && 0 == D(e, t) }

            function z(e) { return I(e.line, e.ch) }

            function R(e, t) { return D(e, t) < 0 ? t : e }

            function B(e, t) { return D(e, t) < 0 ? e : t }

            function H(e, t) { return Math.max(e.first, Math.min(t, e.first + e.size - 1)) }

            function $(e, t) { if (t.line < e.first) return I(e.first, 0); var n = e.first + e.size - 1; return t.line > n ? I(n, T(e, n).text.length) : W(t, T(e, t.line).text.length) }

            function W(e, t) { var n = e.ch; return null == n || n > t ? I(e.line, t) : n < 0 ? I(e.line, 0) : e }

            function U(e, t) { for (var n = [], r = 0; r < t.length; r++) n[r] = $(e, t[r]); return n }

            function q() { qa = !0 }

            function G() { Ga = !0 }

            function V(e, t, n) { this.marker = e, this.from = t, this.to = n }

            function K(e, t) { if (e)
                    for (var n = 0; n < e.length; ++n) { var r = e[n]; if (r.marker == t) return r } }

            function Y(e, t) { for (var n, r = 0; r < e.length; ++r) e[r] != t && (n || (n = [])).push(e[r]); return n }

            function X(e, t) { e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], t.marker.attachLine(e) }

            function J(e, t, n) { var r; if (e)
                    for (var i = 0; i < e.length; ++i) { var o = e[i],
                            a = o.marker,
                            s = null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t); if (s || o.from == t && "bookmark" == a.type && (!n || !o.marker.insertLeft)) { var l = null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);
                            (r || (r = [])).push(new V(a, o.from, l ? null : o.to)) } }
                return r }

            function Z(e, t, n) { var r; if (e)
                    for (var i = 0; i < e.length; ++i) { var o = e[i],
                            a = o.marker,
                            s = null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t); if (s || o.from == t && "bookmark" == a.type && (!n || o.marker.insertLeft)) { var l = null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t);
                            (r || (r = [])).push(new V(a, l ? null : o.from - t, null == o.to ? null : o.to - t)) } }
                return r }

            function Q(e, t) { if (t.full) return null; var n = N(e, t.from.line) && T(e, t.from.line).markedSpans,
                    r = N(e, t.to.line) && T(e, t.to.line).markedSpans; if (!n && !r) return null; var i = t.from.ch,
                    o = t.to.ch,
                    a = 0 == D(t.from, t.to),
                    s = J(n, i, a),
                    l = Z(r, o, a),
                    c = 1 == t.text.length,
                    u = m(t.text).length + (c ? i : 0); if (s)
                    for (var d = 0; d < s.length; ++d) { var f = s[d]; if (null == f.to) { var h = K(l, f.marker);
                            h ? c && (f.to = null == h.to ? null : h.to + u) : f.to = i } }
                if (l)
                    for (var p = 0; p < l.length; ++p) { var g = l[p]; if (null != g.to && (g.to += u), null == g.from) { var v = K(s, g.marker);
                            v || (g.from = u, c && (s || (s = [])).push(g)) } else g.from += u, c && (s || (s = [])).push(g) } s && (s = ee(s)), l && l != s && (l = ee(l)); var y = [s]; if (!c) { var b, x = t.text.length - 2; if (x > 0 && s)
                        for (var w = 0; w < s.length; ++w) null == s[w].to && (b || (b = [])).push(new V(s[w].marker, null, null)); for (var k = 0; k < x; ++k) y.push(b);
                    y.push(l) } return y }

            function ee(e) { for (var t = 0; t < e.length; ++t) { var n = e[t];
                    null != n.from && n.from == n.to && n.marker.clearWhenEmpty !== !1 && e.splice(t--, 1) } return e.length ? e : null }

            function te(e, t, n) { var r = null; if (e.iter(t.line, n.line + 1, function(e) { if (e.markedSpans)
                            for (var t = 0; t < e.markedSpans.length; ++t) { var n = e.markedSpans[t].marker;!n.readOnly || r && f(r, n) != -1 || (r || (r = [])).push(n) } }), !r) return null; for (var i = [{ from: t, to: n }], o = 0; o < r.length; ++o)
                    for (var a = r[o], s = a.find(0), l = 0; l < i.length; ++l) { var c = i[l]; if (!(D(c.to, s.from) < 0 || D(c.from, s.to) > 0)) { var u = [l, 1],
                                d = D(c.from, s.from),
                                h = D(c.to, s.to);
                            (d < 0 || !a.inclusiveLeft && !d) && u.push({ from: c.from, to: s.from }), (h > 0 || !a.inclusiveRight && !h) && u.push({ from: s.to, to: c.to }), i.splice.apply(i, u), l += u.length - 3 } }
                return i }

            function ne(e) { var t = e.markedSpans; if (t) { for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
                    e.markedSpans = null } }

            function re(e, t) { if (t) { for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
                    e.markedSpans = t } }

            function ie(e) { return e.inclusiveLeft ? -1 : 0 }

            function oe(e) { return e.inclusiveRight ? 1 : 0 }

            function ae(e, t) { var n = e.lines.length - t.lines.length; if (0 != n) return n; var r = e.find(),
                    i = t.find(),
                    o = D(r.from, i.from) || ie(e) - ie(t); if (o) return -o; var a = D(r.to, i.to) || oe(e) - oe(t); return a ? a : t.id - e.id }

            function se(e, t) { var n, r = Ga && e.markedSpans; if (r)
                    for (var i = void 0, o = 0; o < r.length; ++o) i = r[o], i.marker.collapsed && null == (t ? i.from : i.to) && (!n || ae(n, i.marker) < 0) && (n = i.marker); return n }

            function le(e) { return se(e, !0) }

            function ce(e) { return se(e, !1) }

            function ue(e, t, n, r, i) { var o = T(e, t),
                    a = Ga && o.markedSpans; if (a)
                    for (var s = 0; s < a.length; ++s) { var l = a[s]; if (l.marker.collapsed) { var c = l.marker.find(0),
                                u = D(c.from, n) || ie(l.marker) - ie(i),
                                d = D(c.to, r) || oe(l.marker) - oe(i); if (!(u >= 0 && d <= 0 || u <= 0 && d >= 0) && (u <= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? D(c.to, n) >= 0 : D(c.to, n) > 0) || u >= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? D(c.from, r) <= 0 : D(c.from, r) < 0))) return !0 } } }

            function de(e) { for (var t; t = le(e);) e = t.find(-1, !0).line; return e }

            function fe(e) { for (var t; t = ce(e);) e = t.find(1, !0).line; return e }

            function he(e) { for (var t, n; t = ce(e);) e = t.find(1, !0).line, (n || (n = [])).push(e); return n }

            function pe(e, t) { var n = T(e, t),
                    r = de(n); return n == r ? t : A(r) }

            function me(e, t) { if (t > e.lastLine()) return t; var n, r = T(e, t); if (!ge(e, r)) return t; for (; n = ce(r);) r = n.find(1, !0).line; return A(r) + 1 }

            function ge(e, t) { var n = Ga && t.markedSpans; if (n)
                    for (var r = void 0, i = 0; i < n.length; ++i)
                        if (r = n[i], r.marker.collapsed) { if (null == r.from) return !0; if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && ve(e, t, r)) return !0 } }

            function ve(e, t, n) { if (null == n.to) { var r = n.marker.find(1, !0); return ve(e, r.line, K(r.line.markedSpans, n.marker)) } if (n.marker.inclusiveRight && n.to == t.text.length) return !0; for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
                    if (i = t.markedSpans[o], i.marker.collapsed && !i.marker.widgetNode && i.from == n.to && (null == i.to || i.to != n.from) && (i.marker.inclusiveLeft || n.marker.inclusiveRight) && ve(e, t, i)) return !0 }

            function ye(e) { e = de(e); for (var t = 0, n = e.parent, r = 0; r < n.lines.length; ++r) { var i = n.lines[r]; if (i == e) break;
                    t += i.height } for (var o = n.parent; o; n = o, o = n.parent)
                    for (var a = 0; a < o.children.length; ++a) { var s = o.children[a]; if (s == n) break;
                        t += s.height }
                return t }

            function be(e) { if (0 == e.height) return 0; for (var t, n = e.text.length, r = e; t = le(r);) { var i = t.find(0, !0);
                    r = i.from.line, n += i.from.ch - i.to.ch } for (r = e; t = ce(r);) { var o = t.find(0, !0);
                    n -= r.text.length - o.from.ch, r = o.to.line, n += r.text.length - o.to.ch } return n }

            function xe(e) { var t = e.display,
                    n = e.doc;
                t.maxLine = T(n, n.first), t.maxLineLength = be(t.maxLine), t.maxLineChanged = !0, n.iter(function(e) { var n = be(e);
                    n > t.maxLineLength && (t.maxLineLength = n, t.maxLine = e) }) }

            function we(e, t, n, r) { if (!e) return r(t, n, "ltr"); for (var i = !1, o = 0; o < e.length; ++o) { var a = e[o];
                    (a.from < n && a.to > t || t == n && a.to == t) && (r(Math.max(a.from, t), Math.min(a.to, n), 1 == a.level ? "rtl" : "ltr"), i = !0) } i || r(t, n, "ltr") }

            function ke(e, t, n) { var r;
                Va = null; for (var i = 0; i < e.length; ++i) { var o = e[i]; if (o.from < t && o.to > t) return i;
                    o.to == t && (o.from != o.to && "before" == n ? r = i : Va = i), o.from == t && (o.from != o.to && "before" != n ? r = i : Va = i) } return null != r ? r : Va }

            function Ce(e, t) { var n = e.order; return null == n && (n = e.order = Ka(e.text, t)), n }

            function Se(e, t, n) { var r = S(e.text, t + n, n); return r < 0 || r > e.text.length ? null : r }

            function _e(e, t, n) { var r = Se(e, t.ch, n); return null == r ? null : new I(t.line, r, n < 0 ? "after" : "before") }

            function Le(e, t, n, r, i) { if (e) { var o = Ce(n, t.doc.direction); if (o) { var a, s = i < 0 ? m(o) : o[0],
                            l = i < 0 == (1 == s.level),
                            c = l ? "after" : "before"; if (s.level > 0) { var u = Jt(t, n);
                            a = i < 0 ? n.text.length - 1 : 0; var d = Zt(t, u, a).top;
                            a = _(function(e) { return Zt(t, u, e).top == d }, i < 0 == (1 == s.level) ? s.from : s.to - 1, a), "before" == c && (a = Se(n, a, 1)) } else a = i < 0 ? s.to : s.from; return new I(r, a, c) } } return new I(r, i < 0 ? n.text.length : 0, i < 0 ? "before" : "after") }

            function Te(e, t, n, r) { var i = Ce(t, e.doc.direction); if (!i) return _e(t, n, r);
                n.ch >= t.text.length ? (n.ch = t.text.length, n.sticky = "before") : n.ch <= 0 && (n.ch = 0, n.sticky = "after"); var o = ke(i, n.ch, n.sticky),
                    a = i[o]; if ("ltr" == e.doc.direction && a.level % 2 == 0 && (r > 0 ? a.to > n.ch : a.from < n.ch)) return _e(t, n, r); var s, l = function(e, n) { return Se(t, e instanceof I ? e.ch : e, n) },
                    c = function(n) { return e.options.lineWrapping ? (s = s || Jt(e, t), vn(e, t, s, n)) : { begin: 0, end: t.text.length } },
                    u = c("before" == n.sticky ? l(n, -1) : n.ch); if ("rtl" == e.doc.direction || 1 == a.level) { var d = 1 == a.level == r < 0,
                        f = l(n, d ? 1 : -1); if (null != f && (d ? f <= a.to && f <= u.end : f >= a.from && f >= u.begin)) { var h = d ? "before" : "after"; return new I(n.line, f, h) } } var p = function(e, t, r) { for (var o = function(e, t) { return t ? new I(n.line, l(e, 1), "before") : new I(n.line, e, "after") }; e >= 0 && e < i.length; e += t) { var a = i[e],
                                s = t > 0 == (1 != a.level),
                                c = s ? r.begin : l(r.end, -1); if (a.from <= c && c < a.to) return o(c, s); if (c = s ? a.from : l(a.to, -1), r.begin <= c && c < r.end) return o(c, s) } },
                    m = p(o + r, r, u); if (m) return m; var g = r > 0 ? u.end : l(u.begin, -1); return null == g || r > 0 && g == t.text.length || !(m = p(r > 0 ? 0 : i.length - 1, r, c(g))) ? null : m }

            function Me(e, t) { return e._handlers && e._handlers[t] || Ya }

            function je(e, t, n) { if (e.removeEventListener) e.removeEventListener(t, n, !1);
                else if (e.detachEvent) e.detachEvent("on" + t, n);
                else { var r = e._handlers,
                        i = r && r[t]; if (i) { var o = f(i, n);
                        o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1))) } } }

            function Oe(e, t) { var n = Me(e, t); if (n.length)
                    for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i) n[i].apply(null, r) }

            function Ae(e, t, n) { return "string" == typeof t && (t = { type: t, preventDefault: function() { this.defaultPrevented = !0 } }), Oe(e, n || t.type, e, t), Fe(t) || t.codemirrorIgnore }

            function Ee(e) { var t = e._handlers && e._handlers.cursorActivity; if (t)
                    for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < t.length; ++r) f(n, t[r]) == -1 && n.push(t[r]) }

            function Ne(e, t) { return Me(e, t).length > 0 }

            function Pe(e) { e.prototype.on = function(e, t) { Xa(this, e, t) }, e.prototype.off = function(e, t) { je(this, e, t) } }

            function Ie(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1 }

            function De(e) { e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0 }

            function Fe(e) {
                return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue;
            }

            function ze(e) { Ie(e), De(e) }

            function Re(e) { return e.target || e.srcElement }

            function Be(e) { var t = e.which; return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), _a && e.ctrlKey && 1 == t && (t = 3), t }

            function He(e) { if (null == Ia) { var t = r("span", "â€‹");
                    n(e, r("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (Ia = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(ha && pa < 8)) } var i = Ia ? r("span", "â€‹") : r("span", "Â ", null, "display: inline-block; width: 1px; margin-right: -1px"); return i.setAttribute("cm-text", ""), i }

            function $e(e) { if (null != Da) return Da; var r = n(e, document.createTextNode("AØ®A")),
                    i = ja(r, 0, 1).getBoundingClientRect(),
                    o = ja(r, 1, 2).getBoundingClientRect(); return t(e), !(!i || i.left == i.right) && (Da = o.right - i.right < 3) }

            function We(e) { if (null != ts) return ts; var t = n(e, r("span", "x")),
                    i = t.getBoundingClientRect(),
                    o = ja(t, 0, 1).getBoundingClientRect(); return ts = Math.abs(i.left - o.left) > 1 }

            function Ue(e, t) { arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), ns[e] = t }

            function qe(e, t) { rs[e] = t }

            function Ge(e) { if ("string" == typeof e && rs.hasOwnProperty(e)) e = rs[e];
                else if (e && "string" == typeof e.name && rs.hasOwnProperty(e.name)) { var t = rs[e.name]; "string" == typeof t && (t = { name: t }), e = b(t, e), e.name = t.name } else { if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return Ge("application/xml"); if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return Ge("application/json") } return "string" == typeof e ? { name: e } : e || { name: "null" } }

            function Ve(e, t) { t = Ge(t); var n = ns[t.name]; if (!n) return Ve(e, "text/plain"); var r = n(e, t); if (is.hasOwnProperty(t.name)) { var i = is[t.name]; for (var o in i) i.hasOwnProperty(o) && (r.hasOwnProperty(o) && (r["_" + o] = r[o]), r[o] = i[o]) } if (r.name = t.name, t.helperType && (r.helperType = t.helperType), t.modeProps)
                    for (var a in t.modeProps) r[a] = t.modeProps[a]; return r }

            function Ke(e, t) { var n = is.hasOwnProperty(e) ? is[e] : is[e] = {};
                u(t, n) }

            function Ye(e, t) { if (t === !0) return t; if (e.copyState) return e.copyState(t); var n = {}; for (var r in t) { var i = t[r];
                    i instanceof Array && (i = i.concat([])), n[r] = i } return n }

            function Xe(e, t) { for (var n; e.innerMode && (n = e.innerMode(t), n && n.mode != e);) t = n.state, e = n.mode; return n || { mode: e, state: t } }

            function Je(e, t, n) { return !e.startState || e.startState(t, n) }

            function Ze(e, t, n, r) { var i = [e.state.modeGen],
                    o = {};
                at(e, t.text, e.doc.mode, n, function(e, t) { return i.push(e, t) }, o, r); for (var a = n.state, s = function(r) { var a = e.state.overlays[r],
                            s = 1,
                            l = 0;
                        n.state = !0, at(e, t.text, a.mode, n, function(e, t) { for (var n = s; l < e;) { var r = i[s];
                                r > e && i.splice(s, 1, e, i[s + 1], r), s += 2, l = Math.min(e, r) } if (t)
                                if (a.opaque) i.splice(n, s - n, e, "overlay " + t), s = n + 2;
                                else
                                    for (; n < s; n += 2) { var o = i[n + 1];
                                        i[n + 1] = (o ? o + " " : "") + "overlay " + t } }, o) }, l = 0; l < e.state.overlays.length; ++l) s(l); return n.state = a, { styles: i, classes: o.bgClass || o.textClass ? o : null } }

            function Qe(e, t, n) { if (!t.styles || t.styles[0] != e.state.modeGen) { var r = et(e, A(t)),
                        i = t.text.length > e.options.maxHighlightLength && Ye(e.doc.mode, r.state),
                        o = Ze(e, t, r);
                    i && (r.state = i), t.stateAfter = r.save(!i), t.styles = o.styles, o.classes ? t.styleClasses = o.classes : t.styleClasses && (t.styleClasses = null), n === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier)) } return t.styles }

            function et(e, t, n) { var r = e.doc,
                    i = e.display; if (!r.mode.startState) return new ss(r, (!0), t); var o = st(e, t, n),
                    a = o > r.first && T(r, o - 1).stateAfter,
                    s = a ? ss.fromSaved(r, a, o) : new ss(r, Je(r.mode), o); return r.iter(o, t, function(n) { tt(e, n.text, s); var r = s.line;
                    n.stateAfter = r == t - 1 || r % 5 == 0 || r >= i.viewFrom && r < i.viewTo ? s.save() : null, s.nextLine() }), n && (r.modeFrontier = s.line), s }

            function tt(e, t, n, r) { var i = e.doc.mode,
                    o = new os(t, e.options.tabSize, n); for (o.start = o.pos = r || 0, "" == t && nt(i, n.state); !o.eol();) rt(i, o, n.state), o.start = o.pos }

            function nt(e, t) { if (e.blankLine) return e.blankLine(t); if (e.innerMode) { var n = Xe(e, t); return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0 } }

            function rt(e, t, n, r) { for (var i = 0; i < 10; i++) { r && (r[0] = Xe(e, n).mode); var o = e.token(t, n); if (t.pos > t.start) return o } throw new Error("Mode " + e.name + " failed to advance stream.") }

            function it(e, t, n, r) { var i, o = e.doc,
                    a = o.mode;
                t = $(o, t); var s, l = T(o, t.line),
                    c = et(e, t.line, n),
                    u = new os(l.text, e.options.tabSize, c); for (r && (s = []);
                    (r || u.pos < t.ch) && !u.eol();) u.start = u.pos, i = rt(a, u, c.state), r && s.push(new ls(u, i, Ye(o.mode, c.state))); return r ? s : new ls(u, i, c.state) }

            function ot(e, t) { if (e)
                    for (;;) { var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/); if (!n) break;
                        e = e.slice(0, n.index) + e.slice(n.index + n[0].length); var r = n[1] ? "bgClass" : "textClass";
                        null == t[r] ? t[r] = n[2] : new RegExp("(?:^|s)" + n[2] + "(?:$|s)").test(t[r]) || (t[r] += " " + n[2]) }
                return e }

            function at(e, t, n, r, i, o, a) { var s = n.flattenSpans;
                null == s && (s = e.options.flattenSpans); var l, c = 0,
                    u = null,
                    d = new os(t, e.options.tabSize, r),
                    f = e.options.addModeClass && [null]; for ("" == t && ot(nt(n, r.state), o); !d.eol();) { if (d.pos > e.options.maxHighlightLength ? (s = !1, a && tt(e, t, r, d.pos), d.pos = t.length, l = null) : l = ot(rt(n, d, r.state, f), o), f) { var h = f[0].name;
                        h && (l = "m-" + (l ? h + " " + l : h)) } if (!s || u != l) { for (; c < d.start;) c = Math.min(d.start, c + 5e3), i(c, u);
                        u = l } d.start = d.pos } for (; c < d.pos;) { var p = Math.min(d.pos, c + 5e3);
                    i(p, u), c = p } }

            function st(e, t, n) { for (var r, i, o = e.doc, a = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), s = t; s > a; --s) { if (s <= o.first) return o.first; var l = T(o, s - 1),
                        c = l.stateAfter; if (c && (!n || s + (c instanceof as ? c.lookAhead : 0) <= o.modeFrontier)) return s; var u = d(l.text, null, e.options.tabSize);
                    (null == i || r > u) && (i = s - 1, r = u) } return i }

            function lt(e, t) { if (e.modeFrontier = Math.min(e.modeFrontier, t), !(e.highlightFrontier < t - 10)) { for (var n = e.first, r = t - 1; r > n; r--) { var i = T(e, r).stateAfter; if (i && (!(i instanceof as) || r + i.lookAhead < t)) { n = r + 1; break } } e.highlightFrontier = Math.min(e.highlightFrontier, n) } }

            function ct(e, t, n, r) { e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), ne(e), re(e, n); var i = r ? r(e) : 1;
                i != e.height && O(e, i) }

            function ut(e) { e.parent = null, ne(e) }

            function dt(e, t) { if (!e || /^\s*$/.test(e)) return null; var n = t.addModeClass ? fs : ds; return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&")) }

            function ft(e, t) { var n = i("span", null, null, ma ? "padding-right: .1px" : null),
                    r = { pre: i("pre", [n], "CodeMirror-line"), content: n, col: 0, pos: 0, cm: e, trailingSpace: !1, splitSpaces: (ha || ma) && e.getOption("lineWrapping") };
                t.measure = {}; for (var o = 0; o <= (t.rest ? t.rest.length : 0); o++) { var a = o ? t.rest[o - 1] : t.line,
                        s = void 0;
                    r.pos = 0, r.addToken = pt, $e(e.display.measure) && (s = Ce(a, e.doc.direction)) && (r.addToken = gt(r.addToken, s)), r.map = []; var c = t != e.display.externalMeasured && A(a);
                    yt(a, r, Qe(e, a, c)), a.styleClasses && (a.styleClasses.bgClass && (r.bgClass = l(a.styleClasses.bgClass, r.bgClass || "")), a.styleClasses.textClass && (r.textClass = l(a.styleClasses.textClass, r.textClass || ""))), 0 == r.map.length && r.map.push(0, 0, r.content.appendChild(He(e.display.measure))), 0 == o ? (t.measure.map = r.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(r.map), (t.measure.caches || (t.measure.caches = [])).push({})) } if (ma) { var u = r.content.lastChild;
                    (/\bcm-tab\b/.test(u.className) || u.querySelector && u.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack") } return Oe(e, "renderLine", e, t.line, r.pre), r.pre.className && (r.textClass = l(r.pre.className, r.textClass || "")), r }

            function ht(e) { var t = r("span", "â€¢", "cm-invalidchar"); return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t }

            function pt(e, t, n, i, o, a, s) { if (t) { var l, c = e.splitSpaces ? mt(t, e.trailingSpace) : t,
                        u = e.cm.state.specialChars,
                        d = !1; if (u.test(t)) { l = document.createDocumentFragment(); for (var f = 0;;) { u.lastIndex = f; var h = u.exec(t),
                                m = h ? h.index - f : t.length - f; if (m) { var g = document.createTextNode(c.slice(f, f + m));
                                ha && pa < 9 ? l.appendChild(r("span", [g])) : l.appendChild(g), e.map.push(e.pos, e.pos + m, g), e.col += m, e.pos += m } if (!h) break;
                            f += m + 1; var v = void 0; if ("\t" == h[0]) { var y = e.cm.options.tabSize,
                                    b = y - e.col % y;
                                v = l.appendChild(r("span", p(b), "cm-tab")), v.setAttribute("role", "presentation"), v.setAttribute("cm-text", "\t"), e.col += b } else "\r" == h[0] || "\n" == h[0] ? (v = l.appendChild(r("span", "\r" == h[0] ? "â" : "â¤", "cm-invalidchar")), v.setAttribute("cm-text", h[0]), e.col += 1) : (v = e.cm.options.specialCharPlaceholder(h[0]), v.setAttribute("cm-text", h[0]), ha && pa < 9 ? l.appendChild(r("span", [v])) : l.appendChild(v), e.col += 1);
                            e.map.push(e.pos, e.pos + 1, v), e.pos++ } } else e.col += t.length, l = document.createTextNode(c), e.map.push(e.pos, e.pos + t.length, l), ha && pa < 9 && (d = !0), e.pos += t.length; if (e.trailingSpace = 32 == c.charCodeAt(t.length - 1), n || i || o || d || s) { var x = n || "";
                        i && (x += i), o && (x += o); var w = r("span", [l], x, s); return a && (w.title = a), e.content.appendChild(w) } e.content.appendChild(l) } }

            function mt(e, t) { if (e.length > 1 && !/  /.test(e)) return e; for (var n = t, r = "", i = 0; i < e.length; i++) { var o = e.charAt(i); " " != o || !n || i != e.length - 1 && 32 != e.charCodeAt(i + 1) || (o = "Â "), r += o, n = " " == o } return r }

            function gt(e, t) { return function(n, r, i, o, a, s, l) { i = i ? i + " cm-force-border" : "cm-force-border"; for (var c = n.pos, u = c + r.length;;) { for (var d = void 0, f = 0; f < t.length && (d = t[f], !(d.to > c && d.from <= c)); f++); if (d.to >= u) return e(n, r, i, o, a, s, l);
                        e(n, r.slice(0, d.to - c), i, o, null, s, l), o = null, r = r.slice(d.to - c), c = d.to } } }

            function vt(e, t, n, r) { var i = !r && n.widgetNode;
                i && e.map.push(e.pos, e.pos + t, i), !r && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", n.id)), i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)), e.pos += t, e.trailingSpace = !1 }

            function yt(e, t, n) { var r = e.markedSpans,
                    i = e.text,
                    o = 0; if (r)
                    for (var a, s, l, c, u, d, f, h = i.length, p = 0, m = 1, g = "", v = 0;;) { if (v == p) { l = c = u = d = s = "", f = null, v = 1 / 0; for (var y = [], b = void 0, x = 0; x < r.length; ++x) { var w = r[x],
                                    k = w.marker; "bookmark" == k.type && w.from == p && k.widgetNode ? y.push(k) : w.from <= p && (null == w.to || w.to > p || k.collapsed && w.to == p && w.from == p) ? (null != w.to && w.to != p && v > w.to && (v = w.to, c = ""), k.className && (l += " " + k.className), k.css && (s = (s ? s + ";" : "") + k.css), k.startStyle && w.from == p && (u += " " + k.startStyle), k.endStyle && w.to == v && (b || (b = [])).push(k.endStyle, w.to), k.title && !d && (d = k.title), k.collapsed && (!f || ae(f.marker, k) < 0) && (f = w)) : w.from > p && v > w.from && (v = w.from) } if (b)
                                for (var C = 0; C < b.length; C += 2) b[C + 1] == v && (c += " " + b[C]); if (!f || f.from == p)
                                for (var S = 0; S < y.length; ++S) vt(t, 0, y[S]); if (f && (f.from || 0) == p) { if (vt(t, (null == f.to ? h + 1 : f.to) - p, f.marker, null == f.from), null == f.to) return;
                                f.to == p && (f = !1) } } if (p >= h) break; for (var _ = Math.min(h, v);;) { if (g) { var L = p + g.length; if (!f) { var T = L > _ ? g.slice(0, _ - p) : g;
                                    t.addToken(t, T, a ? a + l : l, u, p + T.length == v ? c : "", d, s) } if (L >= _) { g = g.slice(_ - p), p = _; break } p = L, u = "" } g = i.slice(o, o = n[m++]), a = dt(n[m++], t.cm.options) } } else
                        for (var M = 1; M < n.length; M += 2) t.addToken(t, i.slice(o, o = n[M]), dt(n[M + 1], t.cm.options)) }

            function bt(e, t, n) { this.line = t, this.rest = he(t), this.size = this.rest ? A(m(this.rest)) - n + 1 : 1, this.node = this.text = null, this.hidden = ge(e, t) }

            function xt(e, t, n) { for (var r, i = [], o = t; o < n; o = r) { var a = new bt(e.doc, T(e.doc, o), o);
                    r = o + a.size, i.push(a) } return i }

            function wt(e) { hs ? hs.ops.push(e) : e.ownsGroup = hs = { ops: [e], delayedCallbacks: [] } }

            function kt(e) { var t = e.delayedCallbacks,
                    n = 0;
                do { for (; n < t.length; n++) t[n].call(null); for (var r = 0; r < e.ops.length; r++) { var i = e.ops[r]; if (i.cursorActivityHandlers)
                            for (; i.cursorActivityCalled < i.cursorActivityHandlers.length;) i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm) } } while (n < t.length) }

            function Ct(e, t) { var n = e.ownsGroup; if (n) try { kt(n) } finally { hs = null, t(n) } }

            function St(e, t) { var n = Me(e, t); if (n.length) { var r, i = Array.prototype.slice.call(arguments, 2);
                    hs ? r = hs.delayedCallbacks : ps ? r = ps : (r = ps = [], setTimeout(_t, 0)); for (var o = function(e) { r.push(function() { return n[e].apply(null, i) }) }, a = 0; a < n.length; ++a) o(a) } }

            function _t() { var e = ps;
                ps = null; for (var t = 0; t < e.length; ++t) e[t]() }

            function Lt(e, t, n, r) { for (var i = 0; i < t.changes.length; i++) { var o = t.changes[i]; "text" == o ? Ot(e, t) : "gutter" == o ? Et(e, t, n, r) : "class" == o ? At(e, t) : "widget" == o && Nt(e, t, r) } t.changes = null }

            function Tt(e) { return e.node == e.text && (e.node = r("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), ha && pa < 8 && (e.node.style.zIndex = 2)), e.node }

            function Mt(e, t) { var n = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass; if (n && (n += " CodeMirror-linebackground"), t.background) n ? t.background.className = n : (t.background.parentNode.removeChild(t.background), t.background = null);
                else if (n) { var i = Tt(t);
                    t.background = i.insertBefore(r("div", null, n), i.firstChild), e.display.input.setUneditable(t.background) } }

            function jt(e, t) { var n = e.display.externalMeasured; return n && n.line == t.line ? (e.display.externalMeasured = null, t.measure = n.measure, n.built) : ft(e, t) }

            function Ot(e, t) { var n = t.text.className,
                    r = jt(e, t);
                t.text == t.node && (t.node = r.pre), t.text.parentNode.replaceChild(r.pre, t.text), t.text = r.pre, r.bgClass != t.bgClass || r.textClass != t.textClass ? (t.bgClass = r.bgClass, t.textClass = r.textClass, At(e, t)) : n && (t.text.className = n) }

            function At(e, t) { Mt(e, t), t.line.wrapClass ? Tt(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = ""); var n = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
                t.text.className = n || "" }

            function Et(e, t, n, i) { if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) { var o = Tt(t);
                    t.gutterBackground = r("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) + "px; width: " + i.gutterTotalWidth + "px"), e.display.input.setUneditable(t.gutterBackground), o.insertBefore(t.gutterBackground, t.text) } var a = t.line.gutterMarkers; if (e.options.lineNumbers || a) { var s = Tt(t),
                        l = t.gutter = r("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) + "px"); if (e.display.input.setUneditable(l), s.insertBefore(l, t.text), t.line.gutterClass && (l.className += " " + t.line.gutterClass), !e.options.lineNumbers || a && a["CodeMirror-linenumbers"] || (t.lineNumber = l.appendChild(r("div", P(e.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + i.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), a)
                        for (var c = 0; c < e.options.gutters.length; ++c) { var u = e.options.gutters[c],
                                d = a.hasOwnProperty(u) && a[u];
                            d && l.appendChild(r("div", [d], "CodeMirror-gutter-elt", "left: " + i.gutterLeft[u] + "px; width: " + i.gutterWidth[u] + "px")) } } }

            function Nt(e, t, n) { t.alignable && (t.alignable = null); for (var r = t.node.firstChild, i = void 0; r; r = i) i = r.nextSibling, "CodeMirror-linewidget" == r.className && t.node.removeChild(r);
                It(e, t, n) }

            function Pt(e, t, n, r) { var i = jt(e, t); return t.text = t.node = i.pre, i.bgClass && (t.bgClass = i.bgClass), i.textClass && (t.textClass = i.textClass), At(e, t), Et(e, t, n, r), It(e, t, r), t.node }

            function It(e, t, n) { if (Dt(e, t.line, t, n, !0), t.rest)
                    for (var r = 0; r < t.rest.length; r++) Dt(e, t.rest[r], t, n, !1) }

            function Dt(e, t, n, i, o) { if (t.widgets)
                    for (var a = Tt(n), s = 0, l = t.widgets; s < l.length; ++s) { var c = l[s],
                            u = r("div", [c.node], "CodeMirror-linewidget");
                        c.handleMouseEvents || u.setAttribute("cm-ignore-events", "true"), Ft(c, u, n, i), e.display.input.setUneditable(u), o && c.above ? a.insertBefore(u, n.gutter || n.text) : a.appendChild(u), St(c, "redraw") } }

            function Ft(e, t, n, r) { if (e.noHScroll) {
                    (n.alignable || (n.alignable = [])).push(t); var i = r.wrapperWidth;
                    t.style.left = r.fixedPos + "px", e.coverGutter || (i -= r.gutterTotalWidth, t.style.paddingLeft = r.gutterTotalWidth + "px"), t.style.width = i + "px" } e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px")) }

            function zt(e) { if (null != e.height) return e.height; var t = e.doc.cm; if (!t) return 0; if (!o(document.body, e.node)) { var i = "position: relative;";
                    e.coverGutter && (i += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (i += "width: " + t.display.wrapper.clientWidth + "px;"), n(t.display.measure, r("div", [e.node], null, i)) } return e.height = e.node.parentNode.offsetHeight }

            function Rt(e, t) { for (var n = Re(t); n != e.wrapper; n = n.parentNode)
                    if (!n || 1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events") || n.parentNode == e.sizer && n != e.mover) return !0 }

            function Bt(e) { return e.lineSpace.offsetTop }

            function Ht(e) { return e.mover.offsetHeight - e.lineSpace.offsetHeight }

            function $t(e) { if (e.cachedPaddingH) return e.cachedPaddingH; var t = n(e.measure, r("pre", "x")),
                    i = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
                    o = { left: parseInt(i.paddingLeft), right: parseInt(i.paddingRight) }; return isNaN(o.left) || isNaN(o.right) || (e.cachedPaddingH = o), o }

            function Wt(e) { return Fa - e.display.nativeBarWidth }

            function Ut(e) { return e.display.scroller.clientWidth - Wt(e) - e.display.barWidth }

            function qt(e) { return e.display.scroller.clientHeight - Wt(e) - e.display.barHeight }

            function Gt(e, t, n) { var r = e.options.lineWrapping,
                    i = r && Ut(e); if (!t.measure.heights || r && t.measure.width != i) { var o = t.measure.heights = []; if (r) { t.measure.width = i; for (var a = t.text.firstChild.getClientRects(), s = 0; s < a.length - 1; s++) { var l = a[s],
                                c = a[s + 1];
                            Math.abs(l.bottom - c.bottom) > 2 && o.push((l.bottom + c.top) / 2 - n.top) } } o.push(n.bottom - n.top) } }

            function Vt(e, t, n) { if (e.line == t) return { map: e.measure.map, cache: e.measure.cache }; for (var r = 0; r < e.rest.length; r++)
                    if (e.rest[r] == t) return { map: e.measure.maps[r], cache: e.measure.caches[r] }; for (var i = 0; i < e.rest.length; i++)
                    if (A(e.rest[i]) > n) return { map: e.measure.maps[i], cache: e.measure.caches[i], before: !0 } }

            function Kt(e, t) { t = de(t); var r = A(t),
                    i = e.display.externalMeasured = new bt(e.doc, t, r);
                i.lineN = r; var o = i.built = ft(e, i); return i.text = o.pre, n(e.display.lineMeasure, o.pre), i }

            function Yt(e, t, n, r) { return Zt(e, Jt(e, t), n, r) }

            function Xt(e, t) { if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[Ln(e, t)]; var n = e.display.externalMeasured; return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0 }

            function Jt(e, t) { var n = A(t),
                    r = Xt(e, n);
                r && !r.text ? r = null : r && r.changes && (Lt(e, r, n, wn(e)), e.curOp.forceUpdate = !0), r || (r = Kt(e, t)); var i = Vt(r, t, n); return { line: t, view: r, rect: null, map: i.map, cache: i.cache, before: i.before, hasHeights: !1 } }

            function Zt(e, t, n, r, i) { t.before && (n = -1); var o, a = n + (r || ""); return t.cache.hasOwnProperty(a) ? o = t.cache[a] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (Gt(e, t.view, t.rect), t.hasHeights = !0), o = tn(e, t, n, r), o.bogus || (t.cache[a] = o)), { left: o.left, right: o.right, top: i ? o.rtop : o.top, bottom: i ? o.rbottom : o.bottom } }

            function Qt(e, t, n) { for (var r, i, o, a, s, l, c = 0; c < e.length; c += 3)
                    if (s = e[c], l = e[c + 1], t < s ? (i = 0, o = 1, a = "left") : t < l ? (i = t - s, o = i + 1) : (c == e.length - 3 || t == l && e[c + 3] > t) && (o = l - s, i = o - 1, t >= l && (a = "right")), null != i) { if (r = e[c + 2], s == l && n == (r.insertLeft ? "left" : "right") && (a = n), "left" == n && 0 == i)
                            for (; c && e[c - 2] == e[c - 3] && e[c - 1].insertLeft;) r = e[(c -= 3) + 2], a = "left"; if ("right" == n && i == l - s)
                            for (; c < e.length - 3 && e[c + 3] == e[c + 4] && !e[c + 5].insertLeft;) r = e[(c += 3) + 2], a = "right"; break }
                return { node: r, start: i, end: o, collapse: a, coverStart: s, coverEnd: l } }

            function en(e, t) { var n = ms; if ("left" == t)
                    for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++);
                else
                    for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--); return n }

            function tn(e, t, n, r) { var i, o = Qt(t.map, n, r),
                    a = o.node,
                    s = o.start,
                    l = o.end,
                    c = o.collapse; if (3 == a.nodeType) { for (var u = 0; u < 4; u++) { for (; s && C(t.line.text.charAt(o.coverStart + s));) --s; for (; o.coverStart + l < o.coverEnd && C(t.line.text.charAt(o.coverStart + l));) ++l; if (i = ha && pa < 9 && 0 == s && l == o.coverEnd - o.coverStart ? a.parentNode.getBoundingClientRect() : en(ja(a, s, l).getClientRects(), r), i.left || i.right || 0 == s) break;
                        l = s, s -= 1, c = "right" } ha && pa < 11 && (i = nn(e.display.measure, i)) } else { s > 0 && (c = r = "right"); var d;
                    i = e.options.lineWrapping && (d = a.getClientRects()).length > 1 ? d["right" == r ? d.length - 1 : 0] : a.getBoundingClientRect() } if (ha && pa < 9 && !s && (!i || !i.left && !i.right)) { var f = a.parentNode.getClientRects()[0];
                    i = f ? { left: f.left, right: f.left + xn(e.display), top: f.top, bottom: f.bottom } : ms } for (var h = i.top - t.rect.top, p = i.bottom - t.rect.top, m = (h + p) / 2, g = t.view.measure.heights, v = 0; v < g.length - 1 && !(m < g[v]); v++); var y = v ? g[v - 1] : 0,
                    b = g[v],
                    x = { left: ("right" == c ? i.right : i.left) - t.rect.left, right: ("left" == c ? i.left : i.right) - t.rect.left, top: y, bottom: b }; return i.left || i.right || (x.bogus = !0), e.options.singleCursorHeightPerLine || (x.rtop = h, x.rbottom = p), x }

            function nn(e, t) { if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !We(e)) return t; var n = screen.logicalXDPI / screen.deviceXDPI,
                    r = screen.logicalYDPI / screen.deviceYDPI; return { left: t.left * n, right: t.right * n, top: t.top * r, bottom: t.bottom * r } }

            function rn(e) { if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest))
                    for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {} }

            function on(e) { e.display.externalMeasure = null, t(e.display.lineMeasure); for (var n = 0; n < e.display.view.length; n++) rn(e.display.view[n]) }

            function an(e) { on(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null }

            function sn() { return va && Ca ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft }

            function ln() { return va && Ca ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop }

            function cn(e, t, n, r, i) { if (!i && t.widgets)
                    for (var o = 0; o < t.widgets.length; ++o)
                        if (t.widgets[o].above) { var a = zt(t.widgets[o]);
                            n.top += a, n.bottom += a }
                if ("line" == r) return n;
                r || (r = "local"); var s = ye(t); if ("local" == r ? s += Bt(e.display) : s -= e.display.viewOffset, "page" == r || "window" == r) { var l = e.display.lineSpace.getBoundingClientRect();
                    s += l.top + ("window" == r ? 0 : ln()); var c = l.left + ("window" == r ? 0 : sn());
                    n.left += c, n.right += c } return n.top += s, n.bottom += s, n }

            function un(e, t, n) { if ("div" == n) return t; var r = t.left,
                    i = t.top; if ("page" == n) r -= sn(), i -= ln();
                else if ("local" == n || !n) { var o = e.display.sizer.getBoundingClientRect();
                    r += o.left, i += o.top } var a = e.display.lineSpace.getBoundingClientRect(); return { left: r - a.left, top: i - a.top } }

            function dn(e, t, n, r, i) { return r || (r = T(e.doc, t.line)), cn(e, r, Yt(e, r, t.ch, i), n) }

            function fn(e, t, n, r, i, o) {
                function a(t, a) { var s = Zt(e, i, t, a ? "right" : "left", o); return a ? s.left = s.right : s.right = s.left, cn(e, r, s, n) }

                function s(e, t, n) { var r = l[t],
                        i = r.level % 2 != 0; return a(n ? e - 1 : e, i != n) } r = r || T(e.doc, t.line), i || (i = Jt(e, r)); var l = Ce(r, e.doc.direction),
                    c = t.ch,
                    u = t.sticky; if (c >= r.text.length ? (c = r.text.length, u = "before") : c <= 0 && (c = 0, u = "after"), !l) return a("before" == u ? c - 1 : c, "before" == u); var d = ke(l, c, u),
                    f = Va,
                    h = s(c, d, "before" == u); return null != f && (h.other = s(c, f, "before" != u)), h }

            function hn(e, t) { var n = 0;
                t = $(e.doc, t), e.options.lineWrapping || (n = xn(e.display) * t.ch); var r = T(e.doc, t.line),
                    i = ye(r) + Bt(e.display); return { left: n, right: n, top: i, bottom: i + r.height } }

            function pn(e, t, n, r, i) { var o = I(e, t, n); return o.xRel = i, r && (o.outside = !0), o }

            function mn(e, t, n) { var r = e.doc; if (n += e.display.viewOffset, n < 0) return pn(r.first, 0, null, !0, -1); var i = E(r, n),
                    o = r.first + r.size - 1; if (i > o) return pn(r.first + r.size - 1, T(r, o).text.length, null, !0, 1);
                t < 0 && (t = 0); for (var a = T(r, i);;) { var s = yn(e, a, i, t, n),
                        l = ce(a),
                        c = l && l.find(0, !0); if (!l || !(s.ch > c.from.ch || s.ch == c.from.ch && s.xRel > 0)) return s;
                    i = A(a = c.to.line) } }

            function gn(e, t, n, r) { var i = function(r) { return cn(e, t, Zt(e, n, r), "line") },
                    o = t.text.length,
                    a = _(function(e) { return i(e - 1).bottom <= r }, o, 0); return o = _(function(e) { return i(e).top > r }, a, o), { begin: a, end: o } }

            function vn(e, t, n, r) { var i = cn(e, t, Zt(e, n, r), "line").top; return gn(e, t, n, i) }

            function yn(e, t, n, r, i) { i -= ye(t); var o, a = 0,
                    s = t.text.length,
                    l = Jt(e, t),
                    c = Ce(t, e.doc.direction); if (c) { if (e.options.lineWrapping) { var u;
                        u = gn(e, t, l, i), a = u.begin, s = u.end, u } o = new I(n, Math.floor(a + (s - a) / 2)); var d, f, h = fn(e, o, "line", t, l).left,
                        p = h < r ? 1 : -1,
                        m = h - r,
                        g = Math.ceil((s - a) / 4);
                    e: do { d = m, f = o; for (var v = 0; v < g; ++v) { var y = o; if (o = Te(e, t, o, p), null == o || o.ch < a || s <= ("before" == o.sticky ? o.ch - 1 : o.ch)) { o = y; break e } } if (m = fn(e, o, "line", t, l).left - r, g > 1) { var b = Math.abs(m - d) / g;
                            g = Math.min(g, Math.ceil(Math.abs(m) / b)), p = m < 0 ? 1 : -1 } } while (0 != m && (g > 1 || p < 0 != m < 0 && Math.abs(m) <= Math.abs(d))); if (Math.abs(m) > Math.abs(d)) { if (m < 0 == d < 0) throw new Error("Broke out of infinite loop in coordsCharInner");
                        o = f } } else { var x = _(function(n) { var o = cn(e, t, Zt(e, l, n), "line"); return o.top > i ? (s = Math.min(n, s), !0) : !(o.bottom <= i) && (o.left > r || !(o.right < r) && r - o.left < o.right - r) }, a, s);
                    x = S(t.text, x, 1), o = new I(n, x, x == s ? "before" : "after") } var w = fn(e, o, "line", t, l); return (i < w.top || w.bottom < i) && (o.outside = !0), o.xRel = r < w.left ? -1 : r > w.right ? 1 : 0, o }

            function bn(e) { if (null != e.cachedTextHeight) return e.cachedTextHeight; if (null == us) { us = r("pre"); for (var i = 0; i < 49; ++i) us.appendChild(document.createTextNode("x")), us.appendChild(r("br"));
                    us.appendChild(document.createTextNode("x")) } n(e.measure, us); var o = us.offsetHeight / 50; return o > 3 && (e.cachedTextHeight = o), t(e.measure), o || 1 }

            function xn(e) { if (null != e.cachedCharWidth) return e.cachedCharWidth; var t = r("span", "xxxxxxxxxx"),
                    i = r("pre", [t]);
                n(e.measure, i); var o = t.getBoundingClientRect(),
                    a = (o.right - o.left) / 10; return a > 2 && (e.cachedCharWidth = a), a || 10 }

            function wn(e) { for (var t = e.display, n = {}, r = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, a = 0; o; o = o.nextSibling, ++a) n[e.options.gutters[a]] = o.offsetLeft + o.clientLeft + i, r[e.options.gutters[a]] = o.clientWidth; return { fixedPos: kn(t), gutterTotalWidth: t.gutters.offsetWidth, gutterLeft: n, gutterWidth: r, wrapperWidth: t.wrapper.clientWidth } }

            function kn(e) { return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left }

            function Cn(e) { var t = bn(e.display),
                    n = e.options.lineWrapping,
                    r = n && Math.max(5, e.display.scroller.clientWidth / xn(e.display) - 3); return function(i) { if (ge(e.doc, i)) return 0; var o = 0; if (i.widgets)
                        for (var a = 0; a < i.widgets.length; a++) i.widgets[a].height && (o += i.widgets[a].height); return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t } }

            function Sn(e) { var t = e.doc,
                    n = Cn(e);
                t.iter(function(e) { var t = n(e);
                    t != e.height && O(e, t) }) }

            function _n(e, t, n, r) { var i = e.display; if (!n && "true" == Re(t).getAttribute("cm-not-content")) return null; var o, a, s = i.lineSpace.getBoundingClientRect(); try { o = t.clientX - s.left, a = t.clientY - s.top } catch (t) { return null } var l, c = mn(e, o, a); if (r && 1 == c.xRel && (l = T(e.doc, c.line).text).length == c.ch) { var u = d(l, l.length, e.options.tabSize) - l.length;
                    c = I(c.line, Math.max(0, Math.round((o - $t(e.display).left) / xn(e.display)) - u)) } return c }

            function Ln(e, t) { if (t >= e.display.viewTo) return null; if (t -= e.display.viewFrom, t < 0) return null; for (var n = e.display.view, r = 0; r < n.length; r++)
                    if (t -= n[r].size, t < 0) return r }

            function Tn(e) { e.display.input.showSelection(e.display.input.prepareSelection()) }

            function Mn(e, t) { for (var n = e.doc, r = {}, i = r.cursors = document.createDocumentFragment(), o = r.selection = document.createDocumentFragment(), a = 0; a < n.sel.ranges.length; a++)
                    if (t !== !1 || a != n.sel.primIndex) { var s = n.sel.ranges[a]; if (!(s.from().line >= e.display.viewTo || s.to().line < e.display.viewFrom)) { var l = s.empty();
                            (l || e.options.showCursorWhenSelecting) && jn(e, s.head, i), l || On(e, s, o) } }
                return r }

            function jn(e, t, n) { var i = fn(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
                    o = n.appendChild(r("div", "Â ", "CodeMirror-cursor")); if (o.style.left = i.left + "px", o.style.top = i.top + "px", o.style.height = Math.max(0, i.bottom - i.top) * e.options.cursorHeight + "px", i.other) { var a = n.appendChild(r("div", "Â ", "CodeMirror-cursor CodeMirror-secondarycursor"));
                    a.style.display = "", a.style.left = i.other.left + "px", a.style.top = i.other.top + "px", a.style.height = .85 * (i.other.bottom - i.other.top) + "px" } }

            function On(e, t, n) {
                function i(e, t, n, i) { t < 0 && (t = 0), t = Math.round(t), i = Math.round(i), l.appendChild(r("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == n ? d - e : n) + "px;\n                             height: " + (i - t) + "px")) }

                function o(t, n, r) {
                    function o(n, r) { return dn(e, I(t, n), "div", c, r) } var a, l, c = T(s, t),
                        f = c.text.length; return we(Ce(c, s.direction), n || 0, null == r ? f : r, function(e, t, s) { var c, h, p, m = o(e, "left"); if (e == t) c = m, h = p = m.left;
                        else { if (c = o(t - 1, "right"), "rtl" == s) { var g = m;
                                m = c, c = g } h = m.left, p = c.right } null == n && 0 == e && (h = u), c.top - m.top > 3 && (i(h, m.top, null, m.bottom), h = u, m.bottom < c.top && i(h, m.bottom, null, c.top)), null == r && t == f && (p = d), (!a || m.top < a.top || m.top == a.top && m.left < a.left) && (a = m), (!l || c.bottom > l.bottom || c.bottom == l.bottom && c.right > l.right) && (l = c), h < u + 1 && (h = u), i(h, c.top, p - h, c.bottom) }), { start: a, end: l } } var a = e.display,
                    s = e.doc,
                    l = document.createDocumentFragment(),
                    c = $t(e.display),
                    u = c.left,
                    d = Math.max(a.sizerWidth, Ut(e) - a.sizer.offsetLeft) - c.right,
                    f = t.from(),
                    h = t.to(); if (f.line == h.line) o(f.line, f.ch, h.ch);
                else { var p = T(s, f.line),
                        m = T(s, h.line),
                        g = de(p) == de(m),
                        v = o(f.line, f.ch, g ? p.text.length + 1 : null).end,
                        y = o(h.line, g ? 0 : null, h.ch).start;
                    g && (v.top < y.top - 2 ? (i(v.right, v.top, null, v.bottom), i(u, y.top, y.left, y.bottom)) : i(v.right, v.top, y.left - v.right, v.bottom)), v.bottom < y.top && i(u, v.bottom, null, y.top) } n.appendChild(l) }

            function An(e) { if (e.state.focused) { var t = e.display;
                    clearInterval(t.blinker); var n = !0;
                    t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function() { return t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden" }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden") } }

            function En(e) { e.state.focused || (e.display.input.focus(), Pn(e)) }

            function Nn(e) { e.state.delayingBlurEvent = !0, setTimeout(function() { e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, In(e)) }, 100) }

            function Pn(e, t) { e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1), "nocursor" != e.options.readOnly && (e.state.focused || (Oe(e, "focus", e, t), e.state.focused = !0, s(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), ma && setTimeout(function() { return e.display.input.reset(!0) }, 20)), e.display.input.receivedFocus()), An(e)) }

            function In(e, t) { e.state.delayingBlurEvent || (e.state.focused && (Oe(e, "blur", e, t), e.state.focused = !1, Ea(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function() { e.state.focused || (e.display.shift = !1) }, 150)) }

            function Dn(e) { for (var t = e.display, n = t.lineDiv.offsetTop, r = 0; r < t.view.length; r++) { var i = t.view[r],
                        o = void 0; if (!i.hidden) { if (ha && pa < 8) { var a = i.node.offsetTop + i.node.offsetHeight;
                            o = a - n, n = a } else { var s = i.node.getBoundingClientRect();
                            o = s.bottom - s.top } var l = i.line.height - o; if (o < 2 && (o = bn(t)), (l > .005 || l < -.005) && (O(i.line, o), Fn(i.line), i.rest))
                            for (var c = 0; c < i.rest.length; c++) Fn(i.rest[c]) } } }

            function Fn(e) { if (e.widgets)
                    for (var t = 0; t < e.widgets.length; ++t) e.widgets[t].height = e.widgets[t].node.parentNode.offsetHeight }

            function zn(e, t, n) { var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
                r = Math.floor(r - Bt(e)); var i = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight,
                    o = E(t, r),
                    a = E(t, i); if (n && n.ensure) { var s = n.ensure.from.line,
                        l = n.ensure.to.line;
                    s < o ? (o = s, a = E(t, ye(T(t, s)) + e.wrapper.clientHeight)) : Math.min(l, t.lastLine()) >= a && (o = E(t, ye(T(t, l)) - e.wrapper.clientHeight), a = l) } return { from: o, to: Math.max(a, o + 1) } }

            function Rn(e) { var t = e.display,
                    n = t.view; if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) { for (var r = kn(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = r + "px", a = 0; a < n.length; a++)
                        if (!n[a].hidden) { e.options.fixedGutter && (n[a].gutter && (n[a].gutter.style.left = o), n[a].gutterBackground && (n[a].gutterBackground.style.left = o)); var s = n[a].alignable; if (s)
                                for (var l = 0; l < s.length; l++) s[l].style.left = o }
                    e.options.fixedGutter && (t.gutters.style.left = r + i + "px") } }

            function Bn(e) { if (!e.options.lineNumbers) return !1; var t = e.doc,
                    n = P(e.options, t.first + t.size - 1),
                    i = e.display; if (n.length != i.lineNumChars) { var o = i.measure.appendChild(r("div", [r("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
                        a = o.firstChild.offsetWidth,
                        s = o.offsetWidth - a; return i.lineGutter.style.width = "", i.lineNumInnerWidth = Math.max(a, i.lineGutter.offsetWidth - s) + 1, i.lineNumWidth = i.lineNumInnerWidth + s, i.lineNumChars = i.lineNumInnerWidth ? n.length : -1, i.lineGutter.style.width = i.lineNumWidth + "px", Ar(e), !0 } return !1 }

            function Hn(e, t) { if (!Ae(e, "scrollCursorIntoView")) { var n = e.display,
                        i = n.sizer.getBoundingClientRect(),
                        o = null; if (t.top + i.top < 0 ? o = !0 : t.bottom + i.top > (window.innerHeight || document.documentElement.clientHeight) && (o = !1), null != o && !wa) { var a = r("div", "â€‹", null, "position: absolute;\n                         top: " + (t.top - n.viewOffset - Bt(e.display)) + "px;\n                         height: " + (t.bottom - t.top + Wt(e) + n.barHeight) + "px;\n                         left: " + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
                        e.display.lineSpace.appendChild(a), a.scrollIntoView(o), e.display.lineSpace.removeChild(a) } } }

            function $n(e, t, n, r) {
                null == r && (r = 0);
                var i;
                e.options.lineWrapping || t != n || (t = t.ch ? I(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t, n = "before" == t.sticky ? I(t.line, t.ch + 1, "before") : t);
                for (var o = 0; o < 5; o++) {
                    var a = !1,
                        s = fn(e, t),
                        l = n && n != t ? fn(e, n) : s;
                    i = { left: Math.min(s.left, l.left), top: Math.min(s.top, l.top) - r, right: Math.max(s.left, l.left), bottom: Math.max(s.bottom, l.bottom) + r };
                    var c = Un(e, i),
                        u = e.doc.scrollTop,
                        d = e.doc.scrollLeft;
                    if (null != c.scrollTop && (Jn(e, c.scrollTop), Math.abs(e.doc.scrollTop - u) > 1 && (a = !0)), null != c.scrollLeft && (Qn(e, c.scrollLeft), Math.abs(e.doc.scrollLeft - d) > 1 && (a = !0)), !a) break
                }
                return i
            }

            function Wn(e, t) { var n = Un(e, t);
                null != n.scrollTop && Jn(e, n.scrollTop), null != n.scrollLeft && Qn(e, n.scrollLeft) }

            function Un(e, t) { var n = e.display,
                    r = bn(e.display);
                t.top < 0 && (t.top = 0); var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : n.scroller.scrollTop,
                    o = qt(e),
                    a = {};
                t.bottom - t.top > o && (t.bottom = t.top + o); var s = e.doc.height + Ht(n),
                    l = t.top < r,
                    c = t.bottom > s - r; if (t.top < i) a.scrollTop = l ? 0 : t.top;
                else if (t.bottom > i + o) { var u = Math.min(t.top, (c ? s : t.bottom) - o);
                    u != i && (a.scrollTop = u) } var d = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : n.scroller.scrollLeft,
                    f = Ut(e) - (e.options.fixedGutter ? n.gutters.offsetWidth : 0),
                    h = t.right - t.left > f; return h && (t.right = t.left + f), t.left < 10 ? a.scrollLeft = 0 : t.left < d ? a.scrollLeft = Math.max(0, t.left - (h ? 0 : 10)) : t.right > f + d - 3 && (a.scrollLeft = t.right + (h ? 0 : 10) - f), a }

            function qn(e, t) { null != t && (Yn(e), e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t) }

            function Gn(e) { Yn(e); var t = e.getCursor();
                e.curOp.scrollToPos = { from: t, to: t, margin: e.options.cursorScrollMargin } }

            function Vn(e, t, n) { null == t && null == n || Yn(e), null != t && (e.curOp.scrollLeft = t), null != n && (e.curOp.scrollTop = n) }

            function Kn(e, t) { Yn(e), e.curOp.scrollToPos = t }

            function Yn(e) { var t = e.curOp.scrollToPos; if (t) { e.curOp.scrollToPos = null; var n = hn(e, t.from),
                        r = hn(e, t.to);
                    Xn(e, n, r, t.margin) } }

            function Xn(e, t, n, r) { var i = Un(e, { left: Math.min(t.left, n.left), top: Math.min(t.top, n.top) - r, right: Math.max(t.right, n.right), bottom: Math.max(t.bottom, n.bottom) + r });
                Vn(e, i.scrollLeft, i.scrollTop) }

            function Jn(e, t) { Math.abs(e.doc.scrollTop - t) < 2 || (ca || jr(e, { top: t }), Zn(e, t, !0), ca && jr(e), kr(e, 100)) }

            function Zn(e, t, n) { t = Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t), (e.display.scroller.scrollTop != t || n) && (e.doc.scrollTop = t, e.display.scrollbars.setScrollTop(t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t)) }

            function Qn(e, t, n, r) { t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), (n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !r || (e.doc.scrollLeft = t, Rn(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t)) }

            function er(e) { var t = e.display,
                    n = t.gutters.offsetWidth,
                    r = Math.round(e.doc.height + Ht(e.display)); return { clientHeight: t.scroller.clientHeight, viewHeight: t.wrapper.clientHeight, scrollWidth: t.scroller.scrollWidth, clientWidth: t.scroller.clientWidth, viewWidth: t.wrapper.clientWidth, barLeft: e.options.fixedGutter ? n : 0, docHeight: r, scrollHeight: r + Wt(e) + t.barHeight, nativeBarWidth: t.nativeBarWidth, gutterWidth: n } }

            function tr(e, t) { t || (t = er(e)); var n = e.display.barWidth,
                    r = e.display.barHeight;
                nr(e, t); for (var i = 0; i < 4 && n != e.display.barWidth || r != e.display.barHeight; i++) n != e.display.barWidth && e.options.lineWrapping && Dn(e), nr(e, er(e)), n = e.display.barWidth, r = e.display.barHeight }

            function nr(e, t) { var n = e.display,
                    r = n.scrollbars.update(t);
                n.sizer.style.paddingRight = (n.barWidth = r.right) + "px", n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px", n.heightForcer.style.borderBottom = r.bottom + "px solid transparent", r.right && r.bottom ? (n.scrollbarFiller.style.display = "block", n.scrollbarFiller.style.height = r.bottom + "px", n.scrollbarFiller.style.width = r.right + "px") : n.scrollbarFiller.style.display = "", r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (n.gutterFiller.style.display = "block", n.gutterFiller.style.height = r.bottom + "px", n.gutterFiller.style.width = t.gutterWidth + "px") : n.gutterFiller.style.display = "" }

            function rr(e) { e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && Ea(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new ys[e.options.scrollbarStyle](function(t) { e.display.wrapper.insertBefore(t, e.display.scrollbarFiller), Xa(t, "mousedown", function() { e.state.focused && setTimeout(function() { return e.display.input.focus() }, 0) }), t.setAttribute("cm-not-content", "true") }, function(t, n) { "horizontal" == n ? Qn(e, t) : Jn(e, t) }, e), e.display.scrollbars.addClass && s(e.display.wrapper, e.display.scrollbars.addClass) }

            function ir(e) { e.curOp = { cm: e, viewChanged: !1, startHeight: e.doc.height, forceUpdate: !1, updateInput: null, typing: !1, changeObjs: null, cursorActivityHandlers: null, cursorActivityCalled: 0, selectionChanged: !1, updateMaxLine: !1, scrollLeft: null, scrollTop: null, scrollToPos: null, focus: !1, id: ++bs }, wt(e.curOp) }

            function or(e) { var t = e.curOp;
                Ct(t, function(e) { for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
                    ar(e) }) }

            function ar(e) { for (var t = e.ops, n = 0; n < t.length; n++) sr(t[n]); for (var r = 0; r < t.length; r++) lr(t[r]); for (var i = 0; i < t.length; i++) cr(t[i]); for (var o = 0; o < t.length; o++) ur(t[o]); for (var a = 0; a < t.length; a++) dr(t[a]) }

            function sr(e) { var t = e.cm,
                    n = t.display;
                Sr(t), e.updateMaxLine && xe(t), e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new xs(t, e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos }, e.forceUpdate) }

            function lr(e) { e.updatedDisplay = e.mustUpdate && Tr(e.cm, e.update) }

            function cr(e) { var t = e.cm,
                    n = t.display;
                e.updatedDisplay && Dn(t), e.barMeasure = er(t), n.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Yt(t, n.maxLine, n.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + Wt(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - Ut(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection(e.focus)) }

            function ur(e) { var t = e.cm;
                null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && Qn(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1); var n = e.focus && e.focus == a() && (!document.hasFocus || document.hasFocus());
                e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n), (e.updatedDisplay || e.startHeight != t.doc.height) && tr(t, e.barMeasure), e.updatedDisplay && Er(t, e.barMeasure), e.selectionChanged && An(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), n && En(e.cm) }

            function dr(e) { var t = e.cm,
                    n = t.display,
                    r = t.doc; if (e.updatedDisplay && Mr(t, e.update), null == n.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (n.wheelStartX = n.wheelStartY = null), null != e.scrollTop && Zn(t, e.scrollTop, e.forceScroll), null != e.scrollLeft && Qn(t, e.scrollLeft, !0, !0), e.scrollToPos) { var i = $n(t, $(r, e.scrollToPos.from), $(r, e.scrollToPos.to), e.scrollToPos.margin);
                    Hn(t, i) } var o = e.maybeHiddenMarkers,
                    a = e.maybeUnhiddenMarkers; if (o)
                    for (var s = 0; s < o.length; ++s) o[s].lines.length || Oe(o[s], "hide"); if (a)
                    for (var l = 0; l < a.length; ++l) a[l].lines.length && Oe(a[l], "unhide");
                n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop), e.changeObjs && Oe(t, "changes", t, e.changeObjs), e.update && e.update.finish() }

            function fr(e, t) { if (e.curOp) return t();
                ir(e); try { return t() } finally { or(e) } }

            function hr(e, t) { return function() { if (e.curOp) return t.apply(e, arguments);
                    ir(e); try { return t.apply(e, arguments) } finally { or(e) } } }

            function pr(e) { return function() { if (this.curOp) return e.apply(this, arguments);
                    ir(this); try { return e.apply(this, arguments) } finally { or(this) } } }

            function mr(e) { return function() { var t = this.cm; if (!t || t.curOp) return e.apply(this, arguments);
                    ir(t); try { return e.apply(this, arguments) } finally { or(t) } } }

            function gr(e, t, n, r) { null == t && (t = e.doc.first), null == n && (n = e.doc.first + e.doc.size), r || (r = 0); var i = e.display; if (r && n < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= i.viewTo) Ga && pe(e.doc, t) < i.viewTo && yr(e);
                else if (n <= i.viewFrom) Ga && me(e.doc, n + r) > i.viewFrom ? yr(e) : (i.viewFrom += r, i.viewTo += r);
                else if (t <= i.viewFrom && n >= i.viewTo) yr(e);
                else if (t <= i.viewFrom) { var o = br(e, n, n + r, 1);
                    o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN, i.viewTo += r) : yr(e) } else if (n >= i.viewTo) { var a = br(e, t, t, -1);
                    a ? (i.view = i.view.slice(0, a.index), i.viewTo = a.lineN) : yr(e) } else { var s = br(e, t, t, -1),
                        l = br(e, n, n + r, 1);
                    s && l ? (i.view = i.view.slice(0, s.index).concat(xt(e, s.lineN, l.lineN)).concat(i.view.slice(l.index)), i.viewTo += r) : yr(e) } var c = i.externalMeasured;
                c && (n < c.lineN ? c.lineN += r : t < c.lineN + c.size && (i.externalMeasured = null)) }

            function vr(e, t, n) { e.curOp.viewChanged = !0; var r = e.display,
                    i = e.display.externalMeasured; if (i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null), !(t < r.viewFrom || t >= r.viewTo)) { var o = r.view[Ln(e, t)]; if (null != o.node) { var a = o.changes || (o.changes = []);
                        f(a, n) == -1 && a.push(n) } } }

            function yr(e) { e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0 }

            function br(e, t, n, r) { var i, o = Ln(e, t),
                    a = e.display.view; if (!Ga || n == e.doc.first + e.doc.size) return { index: o, lineN: n }; for (var s = e.display.viewFrom, l = 0; l < o; l++) s += a[l].size; if (s != t) { if (r > 0) { if (o == a.length - 1) return null;
                        i = s + a[o].size - t, o++ } else i = s - t;
                    t += i, n += i } for (; pe(e.doc, n) != n;) { if (o == (r < 0 ? 0 : a.length - 1)) return null;
                    n += r * a[o - (r < 0 ? 1 : 0)].size, o += r } return { index: o, lineN: n } }

            function xr(e, t, n) { var r = e.display,
                    i = r.view;
                0 == i.length || t >= r.viewTo || n <= r.viewFrom ? (r.view = xt(e, t, n), r.viewFrom = t) : (r.viewFrom > t ? r.view = xt(e, t, r.viewFrom).concat(r.view) : r.viewFrom < t && (r.view = r.view.slice(Ln(e, t))), r.viewFrom = t, r.viewTo < n ? r.view = r.view.concat(xt(e, r.viewTo, n)) : r.viewTo > n && (r.view = r.view.slice(0, Ln(e, n)))), r.viewTo = n }

            function wr(e) { for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) { var i = t[r];
                    i.hidden || i.node && !i.changes || ++n } return n }

            function kr(e, t) { e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, c(Cr, e)) }

            function Cr(e) { var t = e.doc; if (!(t.highlightFrontier >= e.display.viewTo)) { var n = +new Date + e.options.workTime,
                        r = et(e, t.highlightFrontier),
                        i = [];
                    t.iter(r.line, Math.min(t.first + t.size, e.display.viewTo + 500), function(o) { if (r.line >= e.display.viewFrom) { var a = o.styles,
                                s = o.text.length > e.options.maxHighlightLength ? Ye(t.mode, r.state) : null,
                                l = Ze(e, o, r, !0);
                            s && (r.state = s), o.styles = l.styles; var c = o.styleClasses,
                                u = l.classes;
                            u ? o.styleClasses = u : c && (o.styleClasses = null); for (var d = !a || a.length != o.styles.length || c != u && (!c || !u || c.bgClass != u.bgClass || c.textClass != u.textClass), f = 0; !d && f < a.length; ++f) d = a[f] != o.styles[f];
                            d && i.push(r.line), o.stateAfter = r.save(), r.nextLine() } else o.text.length <= e.options.maxHighlightLength && tt(e, o.text, r), o.stateAfter = r.line % 5 == 0 ? r.save() : null, r.nextLine(); if (+new Date > n) return kr(e, e.options.workDelay), !0 }), t.highlightFrontier = r.line, t.modeFrontier = Math.max(t.modeFrontier, r.line), i.length && fr(e, function() { for (var t = 0; t < i.length; t++) vr(e, i[t], "text") }) } }

            function Sr(e) { var t = e.display;!t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = Wt(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = Wt(e) + "px", t.scrollbarsClipped = !0) }

            function _r(e) { if (e.hasFocus()) return null; var t = a(); if (!t || !o(e.display.lineDiv, t)) return null; var n = { activeElt: t }; if (window.getSelection) { var r = window.getSelection();
                    r.anchorNode && r.extend && o(e.display.lineDiv, r.anchorNode) && (n.anchorNode = r.anchorNode, n.anchorOffset = r.anchorOffset, n.focusNode = r.focusNode, n.focusOffset = r.focusOffset) } return n }

            function Lr(e) { if (e && e.activeElt && e.activeElt != a() && (e.activeElt.focus(), e.anchorNode && o(document.body, e.anchorNode) && o(document.body, e.focusNode))) { var t = window.getSelection(),
                        n = document.createRange();
                    n.setEnd(e.anchorNode, e.anchorOffset), n.collapse(!1), t.removeAllRanges(), t.addRange(n), t.extend(e.focusNode, e.focusOffset) } }

            function Tr(e, n) { var r = e.display,
                    i = e.doc; if (n.editorIsHidden) return yr(e), !1; if (!n.force && n.visible.from >= r.viewFrom && n.visible.to <= r.viewTo && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) && r.renderedView == r.view && 0 == wr(e)) return !1;
                Bn(e) && (yr(e), n.dims = wn(e)); var o = i.first + i.size,
                    a = Math.max(n.visible.from - e.options.viewportMargin, i.first),
                    s = Math.min(o, n.visible.to + e.options.viewportMargin);
                r.viewFrom < a && a - r.viewFrom < 20 && (a = Math.max(i.first, r.viewFrom)), r.viewTo > s && r.viewTo - s < 20 && (s = Math.min(o, r.viewTo)), Ga && (a = pe(e.doc, a), s = me(e.doc, s)); var l = a != r.viewFrom || s != r.viewTo || r.lastWrapHeight != n.wrapperHeight || r.lastWrapWidth != n.wrapperWidth;
                xr(e, a, s), r.viewOffset = ye(T(e.doc, r.viewFrom)), e.display.mover.style.top = r.viewOffset + "px"; var c = wr(e); if (!l && 0 == c && !n.force && r.renderedView == r.view && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo)) return !1; var u = _r(e); return c > 4 && (r.lineDiv.style.display = "none"), Or(e, r.updateLineNumbers, n.dims), c > 4 && (r.lineDiv.style.display = ""), r.renderedView = r.view, Lr(u), t(r.cursorDiv), t(r.selectionDiv), r.gutters.style.height = r.sizer.style.minHeight = 0, l && (r.lastWrapHeight = n.wrapperHeight, r.lastWrapWidth = n.wrapperWidth, kr(e, 400)), r.updateLineNumbers = null, !0 }

            function Mr(e, t) { for (var n = t.viewport, r = !0;
                    (r && e.options.lineWrapping && t.oldDisplayWidth != Ut(e) || (n && null != n.top && (n = { top: Math.min(e.doc.height + Ht(e.display) - qt(e), n.top) }), t.visible = zn(e.display, e.doc, n), !(t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo))) && Tr(e, t); r = !1) { Dn(e); var i = er(e);
                    Tn(e), tr(e, i), Er(e, i), t.force = !1 } t.signal(e, "update", e), e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo) }

            function jr(e, t) { var n = new xs(e, t); if (Tr(e, n)) { Dn(e), Mr(e, n); var r = er(e);
                    Tn(e), tr(e, r), Er(e, r), n.finish() } }

            function Or(e, n, r) {
                function i(t) { var n = t.nextSibling; return ma && _a && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t), n } for (var o = e.display, a = e.options.lineNumbers, s = o.lineDiv, l = s.firstChild, c = o.view, u = o.viewFrom, d = 0; d < c.length; d++) { var h = c[d]; if (h.hidden);
                    else if (h.node && h.node.parentNode == s) { for (; l != h.node;) l = i(l); var p = a && null != n && n <= u && h.lineNumber;
                        h.changes && (f(h.changes, "gutter") > -1 && (p = !1), Lt(e, h, u, r)), p && (t(h.lineNumber), h.lineNumber.appendChild(document.createTextNode(P(e.options, u)))), l = h.node.nextSibling } else { var m = Pt(e, h, u, r);
                        s.insertBefore(m, l) } u += h.size } for (; l;) l = i(l) }

            function Ar(e) { var t = e.display.gutters.offsetWidth;
                e.display.sizer.style.marginLeft = t + "px" }

            function Er(e, t) { e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + Wt(e) + "px" }

            function Nr(e) { var n = e.display.gutters,
                    i = e.options.gutters;
                t(n); for (var o = 0; o < i.length; ++o) { var a = i[o],
                        s = n.appendChild(r("div", null, "CodeMirror-gutter " + a)); "CodeMirror-linenumbers" == a && (e.display.lineGutter = s, s.style.width = (e.display.lineNumWidth || 1) + "px") } n.style.display = o ? "" : "none", Ar(e) }

            function Pr(e) { var t = f(e.gutters, "CodeMirror-linenumbers");
                t == -1 && e.lineNumbers ? e.gutters = e.gutters.concat(["CodeMirror-linenumbers"]) : t > -1 && !e.lineNumbers && (e.gutters = e.gutters.slice(0), e.gutters.splice(t, 1)) }

            function Ir(e) { var t = e.wheelDeltaX,
                    n = e.wheelDeltaY; return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == n && e.detail && e.axis == e.VERTICAL_AXIS ? n = e.detail : null == n && (n = e.wheelDelta), { x: t, y: n } }

            function Dr(e) { var t = Ir(e); return t.x *= ks, t.y *= ks, t }

            function Fr(e, t) { var n = Ir(t),
                    r = n.x,
                    i = n.y,
                    o = e.display,
                    a = o.scroller,
                    s = a.scrollWidth > a.clientWidth,
                    l = a.scrollHeight > a.clientHeight; if (r && s || i && l) { if (i && _a && ma) e: for (var c = t.target, u = o.view; c != a; c = c.parentNode)
                        for (var d = 0; d < u.length; d++)
                            if (u[d].node == c) { e.display.currentWheelTarget = c; break e }
                    if (r && !ca && !ya && null != ks) return i && l && Jn(e, Math.max(0, a.scrollTop + i * ks)), Qn(e, Math.max(0, a.scrollLeft + r * ks)), (!i || i && l) && Ie(t), void(o.wheelStartX = null); if (i && null != ks) { var f = i * ks,
                            h = e.doc.scrollTop,
                            p = h + o.wrapper.clientHeight;
                        f < 0 ? h = Math.max(0, h + f - 50) : p = Math.min(e.doc.height, p + f + 50), jr(e, { top: h, bottom: p }) } ws < 20 && (null == o.wheelStartX ? (o.wheelStartX = a.scrollLeft, o.wheelStartY = a.scrollTop, o.wheelDX = r, o.wheelDY = i, setTimeout(function() { if (null != o.wheelStartX) { var e = a.scrollLeft - o.wheelStartX,
                                t = a.scrollTop - o.wheelStartY,
                                n = t && o.wheelDY && t / o.wheelDY || e && o.wheelDX && e / o.wheelDX;
                            o.wheelStartX = o.wheelStartY = null, n && (ks = (ks * ws + n) / (ws + 1), ++ws) } }, 200)) : (o.wheelDX += r, o.wheelDY += i)) } }

            function zr(e, t) { var n = e[t];
                e.sort(function(e, t) { return D(e.from(), t.from()) }), t = f(e, n); for (var r = 1; r < e.length; r++) { var i = e[r],
                        o = e[r - 1]; if (D(o.to(), i.from()) >= 0) { var a = B(o.from(), i.from()),
                            s = R(o.to(), i.to()),
                            l = o.empty() ? i.from() == i.head : o.from() == o.head;
                        r <= t && --t, e.splice(--r, 2, new Ss(l ? s : a, l ? a : s)) } } return new Cs(e, t) }

            function Rr(e, t) { return new Cs([new Ss(e, t || e)], 0) }

            function Br(e) { return e.text ? I(e.from.line + e.text.length - 1, m(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to }

            function Hr(e, t) { if (D(e, t.from) < 0) return e; if (D(e, t.to) <= 0) return Br(t); var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
                    r = e.ch; return e.line == t.to.line && (r += Br(t).ch - t.to.ch), I(n, r) }

            function $r(e, t) { for (var n = [], r = 0; r < e.sel.ranges.length; r++) { var i = e.sel.ranges[r];
                    n.push(new Ss(Hr(i.anchor, t), Hr(i.head, t))) } return zr(n, e.sel.primIndex) }

            function Wr(e, t, n) { return e.line == t.line ? I(n.line, e.ch - t.ch + n.ch) : I(n.line + (e.line - t.line), e.ch) }

            function Ur(e, t, n) { for (var r = [], i = I(e.first, 0), o = i, a = 0; a < t.length; a++) { var s = t[a],
                        l = Wr(s.from, i, o),
                        c = Wr(Br(s), i, o); if (i = s.to, o = c, "around" == n) { var u = e.sel.ranges[a],
                            d = D(u.head, u.anchor) < 0;
                        r[a] = new Ss(d ? c : l, d ? l : c) } else r[a] = new Ss(l, l) } return new Cs(r, e.sel.primIndex) }

            function qr(e) { e.doc.mode = Ve(e.options, e.doc.modeOption), Gr(e) }

            function Gr(e) { e.doc.iter(function(e) { e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null) }), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, kr(e, 100), e.state.modeGen++, e.curOp && gr(e) }

            function Vr(e, t) { return 0 == t.from.ch && 0 == t.to.ch && "" == m(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore) }

            function Kr(e, t, n, r) {
                function i(e) { return n ? n[e] : null }

                function o(e, n, i) { ct(e, n, i, r), St(e, "change", e, t) }

                function a(e, t) { for (var n = [], o = e; o < t; ++o) n.push(new cs(c[o], i(o), r)); return n } var s = t.from,
                    l = t.to,
                    c = t.text,
                    u = T(e, s.line),
                    d = T(e, l.line),
                    f = m(c),
                    h = i(c.length - 1),
                    p = l.line - s.line; if (t.full) e.insert(0, a(0, c.length)), e.remove(c.length, e.size - c.length);
                else if (Vr(e, t)) { var g = a(0, c.length - 1);
                    o(d, d.text, h), p && e.remove(s.line, p), g.length && e.insert(s.line, g) } else if (u == d)
                    if (1 == c.length) o(u, u.text.slice(0, s.ch) + f + u.text.slice(l.ch), h);
                    else { var v = a(1, c.length - 1);
                        v.push(new cs(f + u.text.slice(l.ch), h, r)), o(u, u.text.slice(0, s.ch) + c[0], i(0)), e.insert(s.line + 1, v) } else if (1 == c.length) o(u, u.text.slice(0, s.ch) + c[0] + d.text.slice(l.ch), i(0)), e.remove(s.line + 1, p);
                else { o(u, u.text.slice(0, s.ch) + c[0], i(0)), o(d, f + d.text.slice(l.ch), h); var y = a(1, c.length - 1);
                    p > 1 && e.remove(s.line + 1, p - 1), e.insert(s.line + 1, y) } St(e, "change", e, t) }

            function Yr(e, t, n) {
                function r(e, i, o) { if (e.linked)
                        for (var a = 0; a < e.linked.length; ++a) { var s = e.linked[a]; if (s.doc != i) { var l = o && s.sharedHist;
                                n && !l || (t(s.doc, l), r(s.doc, e, l)) } } } r(e, null, !0) }

            function Xr(e, t) { if (t.cm) throw new Error("This document is already in use.");
                e.doc = t, t.cm = e, Sn(e), qr(e), Jr(e), e.options.lineWrapping || xe(e), e.options.mode = t.modeOption, gr(e) }

            function Jr(e) {
                ("rtl" == e.doc.direction ? s : Ea)(e.display.lineDiv, "CodeMirror-rtl") }

            function Zr(e) { fr(e, function() { Jr(e), gr(e) }) }

            function Qr(e) { this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e || 1 }

            function ei(e, t) { var n = { from: z(t.from), to: Br(t), text: M(e, t.from, t.to) }; return si(e, n, t.from.line, t.to.line + 1), Yr(e, function(e) { return si(e, n, t.from.line, t.to.line + 1) }, !0), n }

            function ti(e) { for (; e.length;) { var t = m(e); if (!t.ranges) break;
                    e.pop() } }

            function ni(e, t) { return t ? (ti(e.done), m(e.done)) : e.done.length && !m(e.done).ranges ? m(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), m(e.done)) : void 0 }

            function ri(e, t, n, r) { var i = e.history;
                i.undone.length = 0; var o, a, s = +new Date; if ((i.lastOp == r || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && e.cm && i.lastModTime > s - e.cm.options.historyEventDelay || "*" == t.origin.charAt(0))) && (o = ni(i, i.lastOp == r))) a = m(o.changes), 0 == D(t.from, t.to) && 0 == D(t.from, a.to) ? a.to = Br(t) : o.changes.push(ei(e, t));
                else { var l = m(i.done); for (l && l.ranges || ai(e.sel, i.done), o = { changes: [ei(e, t)], generation: i.generation }, i.done.push(o); i.done.length > i.undoDepth;) i.done.shift(), i.done[0].ranges || i.done.shift() } i.done.push(n), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = s, i.lastOp = i.lastSelOp = r, i.lastOrigin = i.lastSelOrigin = t.origin, a || Oe(e, "historyAdded") }

            function ii(e, t, n, r) { var i = t.charAt(0); return "*" == i || "+" == i && n.ranges.length == r.ranges.length && n.somethingSelected() == r.somethingSelected() && new Date - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500) }

            function oi(e, t, n, r) { var i = e.history,
                    o = r && r.origin;
                n == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || ii(e, o, m(i.done), t)) ? i.done[i.done.length - 1] = t : ai(t, i.done), i.lastSelTime = +new Date, i.lastSelOrigin = o, i.lastSelOp = n, r && r.clearRedo !== !1 && ti(i.undone) }

            function ai(e, t) { var n = m(t);
                n && n.ranges && n.equals(e) || t.push(e) }

            function si(e, t, n, r) { var i = t["spans_" + e.id],
                    o = 0;
                e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function(n) { n.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = n.markedSpans), ++o }) }

            function li(e) { if (!e) return null; for (var t, n = 0; n < e.length; ++n) e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]); return t ? t.length ? t : null : e }

            function ci(e, t) { var n = t["spans_" + e.id]; if (!n) return null; for (var r = [], i = 0; i < t.text.length; ++i) r.push(li(n[i])); return r }

            function ui(e, t) { var n = ci(e, t),
                    r = Q(e, t); if (!n) return r; if (!r) return n; for (var i = 0; i < n.length; ++i) { var o = n[i],
                        a = r[i]; if (o && a) e: for (var s = 0; s < a.length; ++s) { for (var l = a[s], c = 0; c < o.length; ++c)
                            if (o[c].marker == l.marker) continue e;
                        o.push(l) } else a && (n[i] = a) } return n }

            function di(e, t, n) { for (var r = [], i = 0; i < e.length; ++i) { var o = e[i]; if (o.ranges) r.push(n ? Cs.prototype.deepCopy.call(o) : o);
                    else { var a = o.changes,
                            s = [];
                        r.push({ changes: s }); for (var l = 0; l < a.length; ++l) { var c = a[l],
                                u = void 0; if (s.push({ from: c.from, to: c.to, text: c.text }), t)
                                for (var d in c)(u = d.match(/^spans_(\d+)$/)) && f(t, Number(u[1])) > -1 && (m(s)[d] = c[d], delete c[d]) } } } return r }

            function fi(e, t, n, r) { if (r) { var i = e.anchor; if (n) { var o = D(t, i) < 0;
                        o != D(n, i) < 0 ? (i = t, t = n) : o != D(t, n) < 0 && (t = n) } return new Ss(i, t) } return new Ss(n || t, t) }

            function hi(e, t, n, r, i) { null == i && (i = e.cm && (e.cm.display.shift || e.extend)), bi(e, new Cs([fi(e.sel.primary(), t, n, i)], 0), r) }

            function pi(e, t, n) { for (var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++) r[o] = fi(e.sel.ranges[o], t[o], null, i); var a = zr(r, e.sel.primIndex);
                bi(e, a, n) }

            function mi(e, t, n, r) { var i = e.sel.ranges.slice(0);
                i[t] = n, bi(e, zr(i, e.sel.primIndex), r) }

            function gi(e, t, n, r) { bi(e, Rr(t, n), r) }

            function vi(e, t, n) { var r = { ranges: t.ranges, update: function(t) { var n = this;
                        this.ranges = []; for (var r = 0; r < t.length; r++) n.ranges[r] = new Ss($(e, t[r].anchor), $(e, t[r].head)) }, origin: n && n.origin }; return Oe(e, "beforeSelectionChange", e, r), e.cm && Oe(e.cm, "beforeSelectionChange", e.cm, r), r.ranges != t.ranges ? zr(r.ranges, r.ranges.length - 1) : t }

            function yi(e, t, n) { var r = e.history.done,
                    i = m(r);
                i && i.ranges ? (r[r.length - 1] = t, xi(e, t, n)) : bi(e, t, n) }

            function bi(e, t, n) { xi(e, t, n), oi(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n) }

            function xi(e, t, n) {
                (Ne(e, "beforeSelectionChange") || e.cm && Ne(e.cm, "beforeSelectionChange")) && (t = vi(e, t, n)); var r = n && n.bias || (D(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
                wi(e, Ci(e, t, r, !0)), n && n.scroll === !1 || !e.cm || Gn(e.cm) }

            function wi(e, t) { t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0, Ee(e.cm)), St(e, "cursorActivity", e)) }

            function ki(e) { wi(e, Ci(e, e.sel, null, !1)) }

            function Ci(e, t, n, r) { for (var i, o = 0; o < t.ranges.length; o++) { var a = t.ranges[o],
                        s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
                        l = _i(e, a.anchor, s && s.anchor, n, r),
                        c = _i(e, a.head, s && s.head, n, r);
                    (i || l != a.anchor || c != a.head) && (i || (i = t.ranges.slice(0, o)), i[o] = new Ss(l, c)) } return i ? zr(i, t.primIndex) : t }

            function Si(e, t, n, r, i) { var o = T(e, t.line); if (o.markedSpans)
                    for (var a = 0; a < o.markedSpans.length; ++a) { var s = o.markedSpans[a],
                            l = s.marker; if ((null == s.from || (l.inclusiveLeft ? s.from <= t.ch : s.from < t.ch)) && (null == s.to || (l.inclusiveRight ? s.to >= t.ch : s.to > t.ch))) { if (i && (Oe(l, "beforeCursorEnter"), l.explicitlyCleared)) { if (o.markedSpans) {--a; continue } break } if (!l.atomic) continue; if (n) { var c = l.find(r < 0 ? 1 : -1),
                                    u = void 0; if ((r < 0 ? l.inclusiveRight : l.inclusiveLeft) && (c = Li(e, c, -r, c && c.line == t.line ? o : null)), c && c.line == t.line && (u = D(c, n)) && (r < 0 ? u < 0 : u > 0)) return Si(e, c, t, r, i) } var d = l.find(r < 0 ? -1 : 1); return (r < 0 ? l.inclusiveLeft : l.inclusiveRight) && (d = Li(e, d, r, d.line == t.line ? o : null)), d ? Si(e, d, t, r, i) : null } }
                return t }

            function _i(e, t, n, r, i) { var o = r || 1,
                    a = Si(e, t, n, o, i) || !i && Si(e, t, n, o, !0) || Si(e, t, n, -o, i) || !i && Si(e, t, n, -o, !0); return a ? a : (e.cantEdit = !0, I(e.first, 0)) }

            function Li(e, t, n, r) { return n < 0 && 0 == t.ch ? t.line > e.first ? $(e, I(t.line - 1)) : null : n > 0 && t.ch == (r || T(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? I(t.line + 1, 0) : null : new I(t.line, t.ch + n) }

            function Ti(e) { e.setSelection(I(e.firstLine(), 0), I(e.lastLine()), Ra) }

            function Mi(e, t, n) { var r = { canceled: !1, from: t.from, to: t.to, text: t.text, origin: t.origin, cancel: function() { return r.canceled = !0 } }; return n && (r.update = function(t, n, i, o) { t && (r.from = $(e, t)), n && (r.to = $(e, n)), i && (r.text = i), void 0 !== o && (r.origin = o) }), Oe(e, "beforeChange", e, r), e.cm && Oe(e.cm, "beforeChange", e.cm, r), r.canceled ? null : { from: r.from, to: r.to, text: r.text, origin: r.origin } }

            function ji(e, t, n) { if (e.cm) { if (!e.cm.curOp) return hr(e.cm, ji)(e, t, n); if (e.cm.state.suppressEdits) return } if (!(Ne(e, "beforeChange") || e.cm && Ne(e.cm, "beforeChange")) || (t = Mi(e, t, !0))) { var r = qa && !n && te(e, t.from, t.to); if (r)
                        for (var i = r.length - 1; i >= 0; --i) Oi(e, { from: r[i].from, to: r[i].to, text: i ? [""] : t.text });
                    else Oi(e, t) } }

            function Oi(e, t) { if (1 != t.text.length || "" != t.text[0] || 0 != D(t.from, t.to)) { var n = $r(e, t);
                    ri(e, t, n, e.cm ? e.cm.curOp.id : NaN), Ni(e, t, n, Q(e, t)); var r = [];
                    Yr(e, function(e, n) { n || f(r, e.history) != -1 || (zi(e.history, t), r.push(e.history)), Ni(e, t, null, Q(e, t)) }) } }

            function Ai(e, t, n) { if (!e.cm || !e.cm.state.suppressEdits || n) { for (var r, i = e.history, o = e.sel, a = "undo" == t ? i.done : i.undone, s = "undo" == t ? i.undone : i.done, l = 0; l < a.length && (r = a[l], n ? !r.ranges || r.equals(e.sel) : r.ranges); l++); if (l != a.length) { for (i.lastOrigin = i.lastSelOrigin = null; r = a.pop(), r.ranges;) { if (ai(r, s), n && !r.equals(e.sel)) return void bi(e, r, { clearRedo: !1 });
                            o = r } var c = [];
                        ai(o, s), s.push({ changes: c, generation: i.generation }), i.generation = r.generation || ++i.maxGeneration; for (var u = Ne(e, "beforeChange") || e.cm && Ne(e.cm, "beforeChange"), d = function(n) { var i = r.changes[n]; if (i.origin = t, u && !Mi(e, i, !1)) return a.length = 0, {};
                                c.push(ei(e, i)); var o = n ? $r(e, i) : m(a);
                                Ni(e, i, o, ui(e, i)), !n && e.cm && e.cm.scrollIntoView({ from: i.from, to: Br(i) }); var s = [];
                                Yr(e, function(e, t) { t || f(s, e.history) != -1 || (zi(e.history, i), s.push(e.history)), Ni(e, i, null, ui(e, i)) }) }, h = r.changes.length - 1; h >= 0; --h) { var p = d(h); if (p) return p.v } } } }

            function Ei(e, t) { if (0 != t && (e.first += t, e.sel = new Cs(g(e.sel.ranges, function(e) { return new Ss(I(e.anchor.line + t, e.anchor.ch), I(e.head.line + t, e.head.ch)) }), e.sel.primIndex), e.cm)) { gr(e.cm, e.first, e.first - t, t); for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++) vr(e.cm, r, "gutter") } }

            function Ni(e, t, n, r) { if (e.cm && !e.cm.curOp) return hr(e.cm, Ni)(e, t, n, r); if (t.to.line < e.first) return void Ei(e, t.text.length - 1 - (t.to.line - t.from.line)); if (!(t.from.line > e.lastLine())) { if (t.from.line < e.first) { var i = t.text.length - 1 - (e.first - t.from.line);
                        Ei(e, i), t = { from: I(e.first, 0), to: I(t.to.line + i, t.to.ch), text: [m(t.text)], origin: t.origin } } var o = e.lastLine();
                    t.to.line > o && (t = { from: t.from, to: I(o, T(e, o).text.length), text: [t.text[0]], origin: t.origin }), t.removed = M(e, t.from, t.to), n || (n = $r(e, t)), e.cm ? Pi(e.cm, t, r) : Kr(e, t, r), xi(e, n, Ra) } }

            function Pi(e, t, n) { var r = e.doc,
                    i = e.display,
                    o = t.from,
                    a = t.to,
                    s = !1,
                    l = o.line;
                e.options.lineWrapping || (l = A(de(T(r, o.line))), r.iter(l, a.line + 1, function(e) { if (e == i.maxLine) return s = !0, !0 })), r.sel.contains(t.from, t.to) > -1 && Ee(e), Kr(r, t, n, Cn(e)), e.options.lineWrapping || (r.iter(l, o.line + t.text.length, function(e) { var t = be(e);
                    t > i.maxLineLength && (i.maxLine = e, i.maxLineLength = t, i.maxLineChanged = !0, s = !1) }), s && (e.curOp.updateMaxLine = !0)), lt(r, o.line), kr(e, 400); var c = t.text.length - (a.line - o.line) - 1;
                t.full ? gr(e) : o.line != a.line || 1 != t.text.length || Vr(e.doc, t) ? gr(e, o.line, a.line + 1, c) : vr(e, o.line, "text"); var u = Ne(e, "changes"),
                    d = Ne(e, "change"); if (d || u) { var f = { from: o, to: a, text: t.text, removed: t.removed, origin: t.origin };
                    d && St(e, "change", e, f), u && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(f) } e.display.selForContextMenu = null }

            function Ii(e, t, n, r, i) { if (r || (r = n), D(r, n) < 0) { var o = r;
                    r = n, n = o } "string" == typeof t && (t = e.splitLines(t)), ji(e, { from: n, to: r, text: t, origin: i }) }

            function Di(e, t, n, r) { n < e.line ? e.line += r : t < e.line && (e.line = t, e.ch = 0) }

            function Fi(e, t, n, r) { for (var i = 0; i < e.length; ++i) { var o = e[i],
                        a = !0; if (o.ranges) { o.copied || (o = e[i] = o.deepCopy(), o.copied = !0); for (var s = 0; s < o.ranges.length; s++) Di(o.ranges[s].anchor, t, n, r), Di(o.ranges[s].head, t, n, r) } else { for (var l = 0; l < o.changes.length; ++l) { var c = o.changes[l]; if (n < c.from.line) c.from = I(c.from.line + r, c.from.ch), c.to = I(c.to.line + r, c.to.ch);
                            else if (t <= c.to.line) { a = !1; break } } a || (e.splice(0, i + 1), i = 0) } } }

            function zi(e, t) { var n = t.from.line,
                    r = t.to.line,
                    i = t.text.length - (r - n) - 1;
                Fi(e.done, n, r, i), Fi(e.undone, n, r, i) }

            function Ri(e, t, n, r) { var i = t,
                    o = t; return "number" == typeof t ? o = T(e, H(e, t)) : i = A(t), null == i ? null : (r(o, i) && e.cm && vr(e.cm, i, n), o) }

            function Bi(e) { var t = this;
                this.lines = e, this.parent = null; for (var n = 0, r = 0; r < e.length; ++r) e[r].parent = t, n += e[r].height;
                this.height = n }

            function Hi(e) { var t = this;
                this.children = e; for (var n = 0, r = 0, i = 0; i < e.length; ++i) { var o = e[i];
                    n += o.chunkSize(), r += o.height, o.parent = t } this.size = n, this.height = r, this.parent = null }

            function $i(e, t, n) { ye(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && qn(e, n) }

            function Wi(e, t, n, r) { var i = new _s(e, n, r),
                    o = e.cm; return o && i.noHScroll && (o.display.alignWidgets = !0), Ri(e, t, "widget", function(t) { var n = t.widgets || (t.widgets = []); if (null == i.insertAt ? n.push(i) : n.splice(Math.min(n.length - 1, Math.max(0, i.insertAt)), 0, i), i.line = t, o && !ge(e, t)) { var r = ye(t) < e.scrollTop;
                        O(t, t.height + zt(i)), r && qn(o, i.height), o.curOp.forceUpdate = !0 } return !0 }), St(o, "lineWidgetAdded", o, i, "number" == typeof t ? t : A(t)), i }

            function Ui(e, t, n, r, o) { if (r && r.shared) return qi(e, t, n, r, o); if (e.cm && !e.cm.curOp) return hr(e.cm, Ui)(e, t, n, r, o); var a = new Ts(e, o),
                    s = D(t, n); if (r && u(r, a, !1), s > 0 || 0 == s && a.clearWhenEmpty !== !1) return a; if (a.replacedWith && (a.collapsed = !0, a.widgetNode = i("span", [a.replacedWith], "CodeMirror-widget"), r.handleMouseEvents || a.widgetNode.setAttribute("cm-ignore-events", "true"), r.insertLeft && (a.widgetNode.insertLeft = !0)), a.collapsed) { if (ue(e, t.line, t, n, a) || t.line != n.line && ue(e, n.line, t, n, a)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
                    G() } a.addToHistory && ri(e, { from: t, to: n, origin: "markText" }, e.sel, NaN); var l, c = t.line,
                    d = e.cm; if (e.iter(c, n.line + 1, function(e) { d && a.collapsed && !d.options.lineWrapping && de(e) == d.display.maxLine && (l = !0), a.collapsed && c != t.line && O(e, 0), X(e, new V(a, c == t.line ? t.ch : null, c == n.line ? n.ch : null)), ++c }), a.collapsed && e.iter(t.line, n.line + 1, function(t) { ge(e, t) && O(t, 0) }), a.clearOnEnter && Xa(a, "beforeCursorEnter", function() { return a.clear() }), a.readOnly && (q(), (e.history.done.length || e.history.undone.length) && e.clearHistory()), a.collapsed && (a.id = ++Ls, a.atomic = !0), d) { if (l && (d.curOp.updateMaxLine = !0), a.collapsed) gr(d, t.line, n.line + 1);
                    else if (a.className || a.title || a.startStyle || a.endStyle || a.css)
                        for (var f = t.line; f <= n.line; f++) vr(d, f, "text");
                    a.atomic && ki(d.doc), St(d, "markerAdded", d, a) } return a }

            function qi(e, t, n, r, i) { r = u(r), r.shared = !1; var o = [Ui(e, t, n, r, i)],
                    a = o[0],
                    s = r.widgetNode; return Yr(e, function(e) { s && (r.widgetNode = s.cloneNode(!0)), o.push(Ui(e, $(e, t), $(e, n), r, i)); for (var l = 0; l < e.linked.length; ++l)
                        if (e.linked[l].isParent) return;
                    a = m(o) }), new Ms(o, a) }

            function Gi(e) { return e.findMarks(I(e.first, 0), e.clipPos(I(e.lastLine())), function(e) { return e.parent }) }

            function Vi(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n],
                        i = r.find(),
                        o = e.clipPos(i.from),
                        a = e.clipPos(i.to);
                    if (D(o, a)) {
                        var s = Ui(e, o, a, r.primary, r.primary.type);
                        r.markers.push(s), s.parent = r
                    }
                }
            }

            function Ki(e) { for (var t = function(t) { var n = e[t],
                            r = [n.primary.doc];
                        Yr(n.primary.doc, function(e) { return r.push(e) }); for (var i = 0; i < n.markers.length; i++) { var o = n.markers[i];
                            f(r, o.doc) == -1 && (o.parent = null, n.markers.splice(i--, 1)) } }, n = 0; n < e.length; n++) t(n) }

            function Yi(e) { var t = this; if (Zi(t), !Ae(t, e) && !Rt(t.display, e)) { Ie(e), ha && (As = +new Date); var n = _n(t, e, !0),
                        r = e.dataTransfer.files; if (n && !t.isReadOnly())
                        if (r && r.length && window.FileReader && window.File)
                            for (var i = r.length, o = Array(i), a = 0, s = function(e, r) { if (!t.options.allowDropFileTypes || f(t.options.allowDropFileTypes, e.type) != -1) { var s = new FileReader;
                                        s.onload = hr(t, function() { var e = s.result; if (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""), o[r] = e, ++a == i) { n = $(t.doc, n); var l = { from: n, to: n, text: t.doc.splitLines(o.join(t.doc.lineSeparator())), origin: "paste" };
                                                ji(t.doc, l), yi(t.doc, Rr(n, Br(l))) } }), s.readAsText(e) } }, l = 0; l < i; ++l) s(r[l], l);
                        else { if (t.state.draggingText && t.doc.sel.contains(n) > -1) return t.state.draggingText(e), void setTimeout(function() { return t.display.input.focus() }, 20); try { var c = e.dataTransfer.getData("Text"); if (c) { var u; if (t.state.draggingText && !t.state.draggingText.copy && (u = t.listSelections()), xi(t.doc, Rr(n, n)), u)
                                        for (var d = 0; d < u.length; ++d) Ii(t.doc, "", u[d].anchor, u[d].head, "drag");
                                    t.replaceSelection(c, "around", "paste"), t.display.input.focus() } } catch (e) {} } } }

            function Xi(e, t) { if (ha && (!e.state.draggingText || +new Date - As < 100)) return void ze(t); if (!Ae(e, t) && !Rt(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !ba)) { var n = r("img", null, null, "position: fixed; left: 0; top: 0;");
                    n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", ya && (n.width = n.height = 1, e.display.wrapper.appendChild(n), n._top = n.offsetTop), t.dataTransfer.setDragImage(n, 0, 0), ya && n.parentNode.removeChild(n) } }

            function Ji(e, t) { var i = _n(e, t); if (i) { var o = document.createDocumentFragment();
                    jn(e, i, o), e.display.dragCursor || (e.display.dragCursor = r("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), n(e.display.dragCursor, o) } }

            function Zi(e) { e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null) }

            function Qi(e) { if (document.getElementsByClassName)
                    for (var t = document.getElementsByClassName("CodeMirror"), n = 0; n < t.length; n++) { var r = t[n].CodeMirror;
                        r && e(r) } }

            function eo() { Es || (to(), Es = !0) }

            function to() { var e;
                Xa(window, "resize", function() { null == e && (e = setTimeout(function() { e = null, Qi(no) }, 100)) }), Xa(window, "blur", function() { return Qi(In) }) }

            function no(e) { var t = e.display;
                t.lastWrapHeight == t.wrapper.clientHeight && t.lastWrapWidth == t.wrapper.clientWidth || (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize()) }

            function ro(e) { var t = e.split(/-(?!$)/);
                e = t[t.length - 1]; for (var n, r, i, o, a = 0; a < t.length - 1; a++) { var s = t[a]; if (/^(cmd|meta|m)$/i.test(s)) o = !0;
                    else if (/^a(lt)?$/i.test(s)) n = !0;
                    else if (/^(c|ctrl|control)$/i.test(s)) r = !0;
                    else { if (!/^s(hift)?$/i.test(s)) throw new Error("Unrecognized modifier name: " + s);
                        i = !0 } } return n && (e = "Alt-" + e), r && (e = "Ctrl-" + e), o && (e = "Cmd-" + e), i && (e = "Shift-" + e), e }

            function io(e) { var t = {}; for (var n in e)
                    if (e.hasOwnProperty(n)) { var r = e[n]; if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue; if ("..." == r) { delete e[n]; continue } for (var i = g(n.split(" "), ro), o = 0; o < i.length; o++) { var a = void 0,
                                s = void 0;
                            o == i.length - 1 ? (s = i.join(" "), a = r) : (s = i.slice(0, o + 1).join(" "), a = "..."); var l = t[s]; if (l) { if (l != a) throw new Error("Inconsistent bindings for " + s) } else t[s] = a } delete e[n] }
                for (var c in t) e[c] = t[c]; return e }

            function oo(e, t, n, r) { t = co(t); var i = t.call ? t.call(e, r) : t[e]; if (i === !1) return "nothing"; if ("..." === i) return "multi"; if (null != i && n(i)) return "handled"; if (t.fallthrough) { if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return oo(e, t.fallthrough, n, r); for (var o = 0; o < t.fallthrough.length; o++) { var a = oo(e, t.fallthrough[o], n, r); if (a) return a } } }

            function ao(e) { var t = "string" == typeof e ? e : Ns[e.keyCode]; return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t }

            function so(e, t, n) { var r = e; return t.altKey && "Alt" != r && (e = "Alt-" + e), (Oa ? t.metaKey : t.ctrlKey) && "Ctrl" != r && (e = "Ctrl-" + e), (Oa ? t.ctrlKey : t.metaKey) && "Cmd" != r && (e = "Cmd-" + e), !n && t.shiftKey && "Shift" != r && (e = "Shift-" + e), e }

            function lo(e, t) { if (ya && 34 == e.keyCode && e["char"]) return !1; var n = Ns[e.keyCode]; return null != n && !e.altGraphKey && so(n, e, t) }

            function co(e) { return "string" == typeof e ? Fs[e] : e }

            function uo(e, t) { for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) { for (var o = t(n[i]); r.length && D(o.from, m(r).to) <= 0;) { var a = r.pop(); if (D(a.from, o.from) < 0) { o.from = a.from; break } } r.push(o) } fr(e, function() { for (var t = r.length - 1; t >= 0; t--) Ii(e.doc, "", r[t].from, r[t].to, "+delete");
                    Gn(e) }) }

            function fo(e, t) { var n = T(e.doc, t),
                    r = de(n); return r != n && (t = A(r)), Le(!0, e, r, t, 1) }

            function ho(e, t) { var n = T(e.doc, t),
                    r = fe(n); return r != n && (t = A(r)), Le(!0, e, n, t, -1) }

            function po(e, t) { var n = fo(e, t.line),
                    r = T(e.doc, n.line),
                    i = Ce(r, e.doc.direction); if (!i || 0 == i[0].level) { var o = Math.max(0, r.text.search(/\S/)),
                        a = t.line == n.line && t.ch <= o && t.ch; return I(n.line, a ? 0 : o, n.sticky) } return n }

            function mo(e, t, n) { if ("string" == typeof t && (t = zs[t], !t)) return !1;
                e.display.input.ensurePolled(); var r = e.display.shift,
                    i = !1; try { e.isReadOnly() && (e.state.suppressEdits = !0), n && (e.display.shift = !1), i = t(e) != za } finally { e.display.shift = r, e.state.suppressEdits = !1 } return i }

            function go(e, t, n) { for (var r = 0; r < e.state.keyMaps.length; r++) { var i = oo(t, e.state.keyMaps[r], n, e); if (i) return i } return e.options.extraKeys && oo(t, e.options.extraKeys, n, e) || oo(t, e.options.keyMap, n, e) }

            function vo(e, t, n, r) { var i = e.state.keySeq; if (i) { if (ao(t)) return "handled";
                    Rs.set(50, function() { e.state.keySeq == i && (e.state.keySeq = null, e.display.input.reset()) }), t = i + " " + t } var o = go(e, t, r); return "multi" == o && (e.state.keySeq = t), "handled" == o && St(e, "keyHandled", e, t, n), "handled" != o && "multi" != o || (Ie(n), An(e)), i && !o && /\'$/.test(t) ? (Ie(n), !0) : !!o }

            function yo(e, t) { var n = lo(t, !0); return !!n && (t.shiftKey && !e.state.keySeq ? vo(e, "Shift-" + n, t, function(t) { return mo(e, t, !0) }) || vo(e, n, t, function(t) { if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) return mo(e, t) }) : vo(e, n, t, function(t) { return mo(e, t) })) }

            function bo(e, t, n) { return vo(e, "'" + n + "'", t, function(t) { return mo(e, t, !0) }) }

            function xo(e) { var t = this; if (t.curOp.focus = a(), !Ae(t, e)) { ha && pa < 11 && 27 == e.keyCode && (e.returnValue = !1); var n = e.keyCode;
                    t.display.shift = 16 == n || e.shiftKey; var r = yo(t, e);
                    ya && (Bs = r ? n : null, !r && 88 == n && !es && (_a ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")), 18 != n || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || wo(t) } }

            function wo(e) {
                function t(e) { 18 != e.keyCode && e.altKey || (Ea(n, "CodeMirror-crosshair"), je(document, "keyup", t), je(document, "mouseover", t)) } var n = e.display.lineDiv;
                s(n, "CodeMirror-crosshair"), Xa(document, "keyup", t), Xa(document, "mouseover", t) }

            function ko(e) { 16 == e.keyCode && (this.doc.sel.shift = !1), Ae(this, e) }

            function Co(e) { var t = this; if (!(Rt(t.display, e) || Ae(t, e) || e.ctrlKey && !e.altKey || _a && e.metaKey)) { var n = e.keyCode,
                        r = e.charCode; if (ya && n == Bs) return Bs = null, void Ie(e); if (!ya || e.which && !(e.which < 10) || !yo(t, e)) { var i = String.fromCharCode(null == r ? n : r); "\b" != i && (bo(t, e, i) || t.display.input.onKeyPress(e)) } } }

            function So(e, t) { var n = +new Date; return Us && Us.compare(n, e, t) ? (Ws = Us = null, "triple") : Ws && Ws.compare(n, e, t) ? (Us = new $s(n, e, t), Ws = null, "double") : (Ws = new $s(n, e, t), Us = null, "single") }

            function _o(e) { var t = this,
                    n = t.display; if (!(Ae(t, e) || n.activeTouch && n.input.supportsTouch())) { if (n.input.ensurePolled(), n.shift = e.shiftKey, Rt(n, e)) return void(ma || (n.scroller.draggable = !1, setTimeout(function() { return n.scroller.draggable = !0 }, 100))); if (!No(t, e)) { var r = _n(t, e),
                            i = Be(e),
                            o = r ? So(r, i) : "single";
                        window.focus(), 1 == i && t.state.selectingText && t.state.selectingText(e), r && Lo(t, i, r, o, e) || (1 == i ? r ? Mo(t, r, o, e) : Re(e) == n.scroller && Ie(e) : 2 == i ? (r && hi(t.doc, r), setTimeout(function() { return n.input.focus() }, 20)) : 3 == i && (Aa ? Po(t, e) : Nn(t))) } } }

            function Lo(e, t, n, r, i) { var o = "Click"; return "double" == r ? o = "Double" + o : "triple" == r && (o = "Triple" + o), o = (1 == t ? "Left" : 2 == t ? "Middle" : "Right") + o, vo(e, so(o, i), i, function(t) { if ("string" == typeof t && (t = zs[t]), !t) return !1; var r = !1; try { e.isReadOnly() && (e.state.suppressEdits = !0), r = t(e, n) != za } finally { e.state.suppressEdits = !1 } return r }) }

            function To(e, t, n) { var r = e.getOption("configureMouse"),
                    i = r ? r(e, t, n) : {}; if (null == i.unit) { var o = La ? n.shiftKey && n.metaKey : n.altKey;
                    i.unit = o ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line" } return (null == i.extend || e.doc.extend) && (i.extend = e.doc.extend || n.shiftKey), null == i.addNew && (i.addNew = _a ? n.metaKey : n.ctrlKey), null == i.moveOnDrag && (i.moveOnDrag = !(_a ? n.altKey : n.ctrlKey)), i }

            function Mo(e, t, n, r) { ha ? setTimeout(c(En, e), 0) : e.curOp.focus = a(); var i, o = To(e, n, r),
                    s = e.doc.sel;
                e.options.dragDrop && Ja && !e.isReadOnly() && "single" == n && (i = s.contains(t)) > -1 && (D((i = s.ranges[i]).from(), t) < 0 || t.xRel > 0) && (D(i.to(), t) > 0 || t.xRel < 0) ? jo(e, r, t, o) : Ao(e, r, t, o) }

            function jo(e, t, n, r) { var i = e.display,
                    o = !1,
                    a = hr(e, function(t) { ma && (i.scroller.draggable = !1), e.state.draggingText = !1, je(document, "mouseup", a), je(document, "mousemove", s), je(i.scroller, "dragstart", l), je(i.scroller, "drop", a), o || (Ie(t), r.addNew || hi(e.doc, n, null, null, r.extend), ma || ha && 9 == pa ? setTimeout(function() { document.body.focus(), i.input.focus() }, 20) : i.input.focus()) }),
                    s = function(e) { o = o || Math.abs(t.clientX - e.clientX) + Math.abs(t.clientY - e.clientY) >= 10 },
                    l = function() { return o = !0 };
                ma && (i.scroller.draggable = !0), e.state.draggingText = a, a.copy = !r.moveOnDrag, i.scroller.dragDrop && i.scroller.dragDrop(), Xa(document, "mouseup", a), Xa(document, "mousemove", s), Xa(i.scroller, "dragstart", l), Xa(i.scroller, "drop", a), Nn(e), setTimeout(function() { return i.input.focus() }, 20) }

            function Oo(e, t, n) { if ("char" == n) return new Ss(t, t); if ("word" == n) return e.findWordAt(t); if ("line" == n) return new Ss(I(t.line, 0), $(e.doc, I(t.line + 1, 0))); var r = n(e, t); return new Ss(r.from, r.to) }

            function Ao(e, t, n, r) {
                function i(t) { if (0 != D(v, t))
                        if (v = t, "rectangle" == r.unit) { for (var i = [], o = e.options.tabSize, a = d(T(c, n.line).text, n.ch, o), s = d(T(c, t.line).text, t.ch, o), l = Math.min(a, s), m = Math.max(a, s), g = Math.min(n.line, t.line), y = Math.min(e.lastLine(), Math.max(n.line, t.line)); g <= y; g++) { var b = T(c, g).text,
                                    x = h(b, l, o);
                                l == m ? i.push(new Ss(I(g, x), I(g, x))) : b.length > x && i.push(new Ss(I(g, x), I(g, h(b, m, o)))) } i.length || i.push(new Ss(n, n)), bi(c, zr(p.ranges.slice(0, f).concat(i), f), { origin: "*mouse", scroll: !1 }), e.scrollIntoView(t) } else { var w, k = u,
                                C = Oo(e, t, r.unit),
                                S = k.anchor;
                            D(C.anchor, S) > 0 ? (w = C.head, S = B(k.from(), C.anchor)) : (w = C.anchor, S = R(k.to(), C.head)); var _ = p.ranges.slice(0);
                            _[f] = new Ss($(c, S), w), bi(c, zr(_, f), Ba) } }

                function o(t) { var n = ++b,
                        s = _n(e, t, !0, "rectangle" == r.unit); if (s)
                        if (0 != D(s, v)) { e.curOp.focus = a(), i(s); var u = zn(l, c);
                            (s.line >= u.to || s.line < u.from) && setTimeout(hr(e, function() { b == n && o(t) }), 150) } else { var d = t.clientY < y.top ? -20 : t.clientY > y.bottom ? 20 : 0;
                            d && setTimeout(hr(e, function() { b == n && (l.scroller.scrollTop += d, o(t)) }), 50) } }

                function s(t) { e.state.selectingText = !1, b = 1 / 0, Ie(t), l.input.focus(), je(document, "mousemove", x), je(document, "mouseup", w), c.history.lastSelOrigin = null } var l = e.display,
                    c = e.doc;
                Ie(t); var u, f, p = c.sel,
                    m = p.ranges; if (r.addNew && !r.extend ? (f = c.sel.contains(n), u = f > -1 ? m[f] : new Ss(n, n)) : (u = c.sel.primary(), f = c.sel.primIndex), "rectangle" == r.unit) r.addNew || (u = new Ss(n, n)), n = _n(e, t, !0, !0), f = -1;
                else { var g = Oo(e, n, r.unit);
                    u = r.extend ? fi(u, g.anchor, g.head, r.extend) : g } r.addNew ? f == -1 ? (f = m.length, bi(c, zr(m.concat([u]), f), { scroll: !1, origin: "*mouse" })) : m.length > 1 && m[f].empty() && "char" == r.unit && !r.extend ? (bi(c, zr(m.slice(0, f).concat(m.slice(f + 1)), 0), { scroll: !1, origin: "*mouse" }), p = c.sel) : mi(c, f, u, Ba) : (f = 0, bi(c, new Cs([u], 0), Ba), p = c.sel); var v = n,
                    y = l.wrapper.getBoundingClientRect(),
                    b = 0,
                    x = hr(e, function(e) { Be(e) ? o(e) : s(e) }),
                    w = hr(e, s);
                e.state.selectingText = w, Xa(document, "mousemove", x), Xa(document, "mouseup", w) }

            function Eo(e, t, n, r) { var i, o; try { i = t.clientX, o = t.clientY } catch (t) { return !1 } if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
                r && Ie(t); var a = e.display,
                    s = a.lineDiv.getBoundingClientRect(); if (o > s.bottom || !Ne(e, n)) return Fe(t);
                o -= s.top - a.viewOffset; for (var l = 0; l < e.options.gutters.length; ++l) { var c = a.gutters.childNodes[l]; if (c && c.getBoundingClientRect().right >= i) { var u = E(e.doc, o),
                            d = e.options.gutters[l]; return Oe(e, n, e, u, d, t), Fe(t) } } }

            function No(e, t) { return Eo(e, t, "gutterClick", !0) }

            function Po(e, t) { Rt(e.display, t) || Io(e, t) || Ae(e, t, "contextmenu") || e.display.input.onContextMenu(t) }

            function Io(e, t) { return !!Ne(e, "gutterContextMenu") && Eo(e, t, "gutterContextMenu", !1) }

            function Do(e) { e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), an(e) }

            function Fo(e) {
                function t(t, r, i, o) { e.defaults[t] = r, i && (n[t] = o ? function(e, t, n) { n != qs && i(e, t, n) } : i) } var n = e.optionHandlers;
                e.defineOption = t, e.Init = qs, t("value", "", function(e, t) { return e.setValue(t) }, !0), t("mode", null, function(e, t) { e.doc.modeOption = t, qr(e) }, !0), t("indentUnit", 2, qr, !0), t("indentWithTabs", !1), t("smartIndent", !0), t("tabSize", 4, function(e) { Gr(e), an(e), gr(e) }, !0), t("lineSeparator", null, function(e, t) { if (e.doc.lineSep = t, t) { var n = [],
                            r = e.doc.first;
                        e.doc.iter(function(e) { for (var i = 0;;) { var o = e.text.indexOf(t, i); if (o == -1) break;
                                i = o + t.length, n.push(I(r, o)) } r++ }); for (var i = n.length - 1; i >= 0; i--) Ii(e.doc, t, n[i], I(n[i].line, n[i].ch + t.length)) } }), t("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g, function(e, t, n) { e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g"), n != qs && e.refresh() }), t("specialCharPlaceholder", ht, function(e) { return e.refresh() }, !0), t("electricChars", !0), t("inputStyle", Sa ? "contenteditable" : "textarea", function() { throw new Error("inputStyle can not (yet) be changed in a running editor") }, !0), t("spellcheck", !1, function(e, t) { return e.getInputField().spellcheck = t }, !0), t("rtlMoveVisually", !Ta), t("wholeLineUpdateBefore", !0), t("theme", "default", function(e) { Do(e), zo(e) }, !0), t("keyMap", "default", function(e, t, n) { var r = co(t),
                        i = n != qs && co(n);
                    i && i.detach && i.detach(e, r), r.attach && r.attach(e, i || null) }), t("extraKeys", null), t("configureMouse", null), t("lineWrapping", !1, Bo, !0), t("gutters", [], function(e) { Pr(e.options), zo(e) }, !0), t("fixedGutter", !0, function(e, t) { e.display.gutters.style.left = t ? kn(e.display) + "px" : "0", e.refresh() }, !0), t("coverGutterNextToScrollbar", !1, function(e) { return tr(e) }, !0), t("scrollbarStyle", "native", function(e) { rr(e), tr(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft) }, !0), t("lineNumbers", !1, function(e) { Pr(e.options), zo(e) }, !0), t("firstLineNumber", 1, zo, !0), t("lineNumberFormatter", function(e) { return e }, zo, !0), t("showCursorWhenSelecting", !1, Tn, !0), t("resetSelectionOnContextMenu", !0), t("lineWiseCopyCut", !0), t("pasteLinesPerSelection", !0), t("readOnly", !1, function(e, t) { "nocursor" == t && (In(e), e.display.input.blur()), e.display.input.readOnlyChanged(t) }), t("disableInput", !1, function(e, t) { t || e.display.input.reset() }, !0), t("dragDrop", !0, Ro), t("allowDropFileTypes", null), t("cursorBlinkRate", 530), t("cursorScrollMargin", 0), t("cursorHeight", 1, Tn, !0), t("singleCursorHeightPerLine", !0, Tn, !0), t("workTime", 100), t("workDelay", 100), t("flattenSpans", !0, Gr, !0), t("addModeClass", !1, Gr, !0), t("pollInterval", 100), t("undoDepth", 200, function(e, t) { return e.doc.history.undoDepth = t }), t("historyEventDelay", 1250), t("viewportMargin", 10, function(e) { return e.refresh() }, !0), t("maxHighlightLength", 1e4, Gr, !0), t("moveInputWithCursor", !0, function(e, t) { t || e.display.input.resetPosition() }), t("tabindex", null, function(e, t) { return e.display.input.getField().tabIndex = t || "" }), t("autofocus", null), t("direction", "ltr", function(e, t) { return e.doc.setDirection(t) }, !0) }

            function zo(e) { Nr(e), gr(e), Rn(e) }

            function Ro(e, t, n) { var r = n && n != qs; if (!t != !r) { var i = e.display.dragFunctions,
                        o = t ? Xa : je;
                    o(e.display.scroller, "dragstart", i.start), o(e.display.scroller, "dragenter", i.enter), o(e.display.scroller, "dragover", i.over), o(e.display.scroller, "dragleave", i.leave), o(e.display.scroller, "drop", i.drop) } }

            function Bo(e) { e.options.lineWrapping ? (s(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (Ea(e.display.wrapper, "CodeMirror-wrap"), xe(e)), Sn(e), gr(e), an(e), setTimeout(function() { return tr(e) }, 100) }

            function Ho(e, t) { var n = this; if (!(this instanceof Ho)) return new Ho(e, t);
                this.options = t = t ? u(t) : {}, u(Gs, t, !1), Pr(t); var r = t.value; "string" == typeof r && (r = new Os(r, t.mode, null, t.lineSeparator, t.direction)), this.doc = r; var i = new Ho.inputStyles[t.inputStyle](this),
                    o = this.display = new L(e, r, i);
                o.wrapper.CodeMirror = this, Nr(this), Do(this), t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), rr(this), this.state = { keyMaps: [], overlays: [], modeGen: 0, overwrite: !1, delayingBlurEvent: !1, focused: !1, suppressEdits: !1, pasteIncoming: !1, cutIncoming: !1, selectingText: !1, draggingText: !1, highlight: new Pa, keySeq: null, specialChars: null }, t.autofocus && !Sa && o.input.focus(), ha && pa < 11 && setTimeout(function() { return n.display.input.reset(!0) }, 20), $o(this), eo(), ir(this), this.curOp.forceUpdate = !0, Xr(this, r), t.autofocus && !Sa || this.hasFocus() ? setTimeout(c(Pn, this), 20) : In(this); for (var a in Vs) Vs.hasOwnProperty(a) && Vs[a](n, t[a], qs);
                Bn(this), t.finishInit && t.finishInit(this); for (var s = 0; s < Ks.length; ++s) Ks[s](n);
                or(this), ma && t.lineWrapping && "optimizelegibility" == getComputedStyle(o.lineDiv).textRendering && (o.lineDiv.style.textRendering = "auto") }

            function $o(e) {
                function t() { i.activeTouch && (o = setTimeout(function() { return i.activeTouch = null }, 1e3), a = i.activeTouch, a.end = +new Date) }

                function n(e) { if (1 != e.touches.length) return !1; var t = e.touches[0]; return t.radiusX <= 1 && t.radiusY <= 1 }

                function r(e, t) { if (null == t.left) return !0; var n = t.left - e.left,
                        r = t.top - e.top; return n * n + r * r > 400 } var i = e.display;
                Xa(i.scroller, "mousedown", hr(e, _o)), ha && pa < 11 ? Xa(i.scroller, "dblclick", hr(e, function(t) { if (!Ae(e, t)) { var n = _n(e, t); if (n && !No(e, t) && !Rt(e.display, t)) { Ie(t); var r = e.findWordAt(n);
                            hi(e.doc, r.anchor, r.head) } } })) : Xa(i.scroller, "dblclick", function(t) { return Ae(e, t) || Ie(t) }), Aa || Xa(i.scroller, "contextmenu", function(t) { return Po(e, t) }); var o, a = { end: 0 };
                Xa(i.scroller, "touchstart", function(t) { if (!Ae(e, t) && !n(t)) { i.input.ensurePolled(), clearTimeout(o); var r = +new Date;
                        i.activeTouch = { start: r, moved: !1, prev: r - a.end <= 300 ? a : null }, 1 == t.touches.length && (i.activeTouch.left = t.touches[0].pageX, i.activeTouch.top = t.touches[0].pageY) } }), Xa(i.scroller, "touchmove", function() { i.activeTouch && (i.activeTouch.moved = !0) }), Xa(i.scroller, "touchend", function(n) { var o = i.activeTouch; if (o && !Rt(i, n) && null != o.left && !o.moved && new Date - o.start < 300) { var a, s = e.coordsChar(i.activeTouch, "page");
                        a = !o.prev || r(o, o.prev) ? new Ss(s, s) : !o.prev.prev || r(o, o.prev.prev) ? e.findWordAt(s) : new Ss(I(s.line, 0), $(e.doc, I(s.line + 1, 0))), e.setSelection(a.anchor, a.head), e.focus(), Ie(n) } t() }), Xa(i.scroller, "touchcancel", t), Xa(i.scroller, "scroll", function() { i.scroller.clientHeight && (Jn(e, i.scroller.scrollTop), Qn(e, i.scroller.scrollLeft, !0), Oe(e, "scroll", e)) }), Xa(i.scroller, "mousewheel", function(t) { return Fr(e, t) }), Xa(i.scroller, "DOMMouseScroll", function(t) { return Fr(e, t) }), Xa(i.wrapper, "scroll", function() { return i.wrapper.scrollTop = i.wrapper.scrollLeft = 0 }), i.dragFunctions = { enter: function(t) { Ae(e, t) || ze(t) }, over: function(t) { Ae(e, t) || (Ji(e, t), ze(t)) }, start: function(t) { return Xi(e, t) }, drop: hr(e, Yi), leave: function(t) { Ae(e, t) || Zi(e) } }; var s = i.input.getField();
                Xa(s, "keyup", function(t) { return ko.call(e, t) }), Xa(s, "keydown", hr(e, xo)), Xa(s, "keypress", hr(e, Co)), Xa(s, "focus", function(t) { return Pn(e, t) }), Xa(s, "blur", function(t) { return In(e, t) }) }

            function Wo(e, t, n, r) { var i, o = e.doc;
                null == n && (n = "add"), "smart" == n && (o.mode.indent ? i = et(e, t).state : n = "prev"); var a = e.options.tabSize,
                    s = T(o, t),
                    l = d(s.text, null, a);
                s.stateAfter && (s.stateAfter = null); var c, u = s.text.match(/^\s*/)[0]; if (r || /\S/.test(s.text)) { if ("smart" == n && (c = o.mode.indent(i, s.text.slice(u.length), s.text), c == za || c > 150)) { if (!r) return;
                        n = "prev" } } else c = 0, n = "not"; "prev" == n ? c = t > o.first ? d(T(o, t - 1).text, null, a) : 0 : "add" == n ? c = l + e.options.indentUnit : "subtract" == n ? c = l - e.options.indentUnit : "number" == typeof n && (c = l + n), c = Math.max(0, c); var f = "",
                    h = 0; if (e.options.indentWithTabs)
                    for (var m = Math.floor(c / a); m; --m) h += a, f += "\t"; if (h < c && (f += p(c - h)), f != u) return Ii(o, f, I(t, 0), I(t, u.length), "+input"), s.stateAfter = null, !0; for (var g = 0; g < o.sel.ranges.length; g++) { var v = o.sel.ranges[g]; if (v.head.line == t && v.head.ch < u.length) { var y = I(t, u.length);
                        mi(o, g, new Ss(y, y)); break } } }

            function Uo(e) { Ys = e }

            function qo(e, t, n, r, i) { var o = e.doc;
                e.display.shift = !1, r || (r = o.sel); var a = e.state.pasteIncoming || "paste" == i,
                    s = Za(t),
                    l = null; if (a && r.ranges.length > 1)
                    if (Ys && Ys.text.join("\n") == t) { if (r.ranges.length % Ys.text.length == 0) { l = []; for (var c = 0; c < Ys.text.length; c++) l.push(o.splitLines(Ys.text[c])) } } else s.length == r.ranges.length && e.options.pasteLinesPerSelection && (l = g(s, function(e) { return [e] })); for (var u, d = r.ranges.length - 1; d >= 0; d--) { var f = r.ranges[d],
                        h = f.from(),
                        p = f.to();
                    f.empty() && (n && n > 0 ? h = I(h.line, h.ch - n) : e.state.overwrite && !a ? p = I(p.line, Math.min(T(o, p.line).text.length, p.ch + m(s).length)) : Ys && Ys.lineWise && Ys.text.join("\n") == t && (h = p = I(h.line, 0))), u = e.curOp.updateInput; var v = { from: h, to: p, text: l ? l[d % l.length] : s, origin: i || (a ? "paste" : e.state.cutIncoming ? "cut" : "+input") };
                    ji(e.doc, v), St(e, "inputRead", e, v) } t && !a && Vo(e, t), Gn(e), e.curOp.updateInput = u, e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = !1 }

            function Go(e, t) { var n = e.clipboardData && e.clipboardData.getData("Text"); if (n) return e.preventDefault(), t.isReadOnly() || t.options.disableInput || fr(t, function() { return qo(t, n, 0, null, "paste") }), !0 }

            function Vo(e, t) { if (e.options.electricChars && e.options.smartIndent)
                    for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) { var i = n.ranges[r]; if (!(i.head.ch > 100 || r && n.ranges[r - 1].head.line == i.head.line)) { var o = e.getModeAt(i.head),
                                a = !1; if (o.electricChars) { for (var s = 0; s < o.electricChars.length; s++)
                                    if (t.indexOf(o.electricChars.charAt(s)) > -1) { a = Wo(e, i.head.line, "smart"); break } } else o.electricInput && o.electricInput.test(T(e.doc, i.head.line).text.slice(0, i.head.ch)) && (a = Wo(e, i.head.line, "smart"));
                            a && St(e, "electricInput", e, i.head.line) } } }

            function Ko(e) { for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) { var i = e.doc.sel.ranges[r].head.line,
                        o = { anchor: I(i, 0), head: I(i + 1, 0) };
                    n.push(o), t.push(e.getRange(o.anchor, o.head)) } return { text: t, ranges: n } }

            function Yo(e, t) { e.setAttribute("autocorrect", "off"), e.setAttribute("autocapitalize", "off"), e.setAttribute("spellcheck", !!t) }

            function Xo() { var e = r("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
                    t = r("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;"); return ma ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), ka && (e.style.border = "1px solid black"), Yo(e), t }

            function Jo(e, t, n, r, i) {
                function o() { var r = t.line + n; return !(r < e.first || r >= e.first + e.size) && (t = new I(r, t.ch, t.sticky), c = T(e, r)) }

                function a(r) { var a; if (a = i ? Te(e.cm, c, t, n) : _e(c, t, n), null == a) { if (r || !o()) return !1;
                        t = Le(i, e.cm, c, t.line, n) } else t = a; return !0 } var s = t,
                    l = n,
                    c = T(e, t.line); if ("char" == r) a();
                else if ("column" == r) a(!0);
                else if ("word" == r || "group" == r)
                    for (var u = null, d = "group" == r, f = e.cm && e.cm.getHelper(t, "wordChars"), h = !0; !(n < 0) || a(!h); h = !1) { var p = c.text.charAt(t.ch) || "\n",
                            m = w(p, f) ? "w" : d && "\n" == p ? "n" : !d || /\s/.test(p) ? null : "p"; if (!d || h || m || (m = "s"), u && u != m) { n < 0 && (n = 1, a(), t.sticky = "after"); break } if (m && (u = m), n > 0 && !a(!h)) break }
                var g = _i(e, t, s, l, !0); return F(s, g) && (g.hitSide = !0), g }

            function Zo(e, t, n, r) { var i, o = e.doc,
                    a = t.left; if ("page" == r) { var s = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
                        l = Math.max(s - .5 * bn(e.display), 3);
                    i = (n > 0 ? t.bottom : t.top) + n * l } else "line" == r && (i = n > 0 ? t.bottom + 3 : t.top - 3); for (var c; c = mn(e, a, i), c.outside;) { if (n < 0 ? i <= 0 : i >= o.height) { c.hitSide = !0; break } i += 5 * n } return c }

            function Qo(e, t) { var n = Xt(e, t.line); if (!n || n.hidden) return null; var r = T(e.doc, t.line),
                    i = Vt(n, r, t.line),
                    o = Ce(r, e.doc.direction),
                    a = "left"; if (o) { var s = ke(o, t.ch);
                    a = s % 2 ? "right" : "left" } var l = Qt(i.map, t.ch, a); return l.offset = "right" == l.collapse ? l.end : l.start, l }

            function ea(e) { for (var t = e; t; t = t.parentNode)
                    if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0; return !1 }

            function ta(e, t) { return t && (e.bad = !0), e }

            function na(e, t, n, r, i) {
                function o(e) { return function(t) { return t.id == e } }

                function a() { u && (c += d, u = !1) }

                function s(e) { e && (a(), c += e) }

                function l(t) { if (1 == t.nodeType) { var n = t.getAttribute("cm-text"); if (null != n) return void s(n || t.textContent.replace(/\u200b/g, "")); var c, f = t.getAttribute("cm-marker"); if (f) { var h = e.findMarks(I(r, 0), I(i + 1, 0), o(+f)); return void(h.length && (c = h[0].find()) && s(M(e.doc, c.from, c.to).join(d))) } if ("false" == t.getAttribute("contenteditable")) return; var p = /^(pre|div|p)$/i.test(t.nodeName);
                        p && a(); for (var m = 0; m < t.childNodes.length; m++) l(t.childNodes[m]);
                        p && (u = !0) } else 3 == t.nodeType && s(t.nodeValue) } for (var c = "", u = !1, d = e.doc.lineSeparator(); l(t), t != n;) t = t.nextSibling; return c }

            function ra(e, t, n) { var r; if (t == e.display.lineDiv) { if (r = e.display.lineDiv.childNodes[n], !r) return ta(e.clipPos(I(e.display.viewTo - 1)), !0);
                    t = null, n = 0 } else
                    for (r = t;; r = r.parentNode) { if (!r || r == e.display.lineDiv) return null; if (r.parentNode && r.parentNode == e.display.lineDiv) break }
                for (var i = 0; i < e.display.view.length; i++) { var o = e.display.view[i]; if (o.node == r) return ia(o, t, n) } }

            function ia(e, t, n) {
                function r(t, n, r) { for (var i = -1; i < (d ? d.length : 0); i++)
                        for (var o = i < 0 ? u.map : d[i], a = 0; a < o.length; a += 3) { var s = o[a + 2]; if (s == t || s == n) { var l = A(i < 0 ? e.line : e.rest[i]),
                                    c = o[a] + r; return (r < 0 || s != t) && (c = o[a + (r ? 1 : 0)]), I(l, c) } } } var i = e.text.firstChild,
                    a = !1; if (!t || !o(i, t)) return ta(I(A(e.line), 0), !0); if (t == i && (a = !0, t = i.childNodes[n], n = 0, !t)) { var s = e.rest ? m(e.rest) : e.line; return ta(I(A(s), s.text.length), a) } var l = 3 == t.nodeType ? t : null,
                    c = t; for (l || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (l = t.firstChild, n && (n = l.nodeValue.length)); c.parentNode != i;) c = c.parentNode; var u = e.measure,
                    d = u.maps,
                    f = r(l, c, n); if (f) return ta(f, a); for (var h = c.nextSibling, p = l ? l.nodeValue.length - n : 0; h; h = h.nextSibling) { if (f = r(h, h.firstChild, 0)) return ta(I(f.line, f.ch - p), a);
                    p += h.textContent.length } for (var g = c.previousSibling, v = n; g; g = g.previousSibling) { if (f = r(g, g.firstChild, -1)) return ta(I(f.line, f.ch + v), a);
                    v += g.textContent.length } }

            function oa(e, t) {
                function n() { e.value = c.getValue() } if (t = t ? u(t) : {}, t.value = e.value, !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder), null == t.autofocus) { var r = a();
                    t.autofocus = r == e || null != e.getAttribute("autofocus") && r == document.body } var i; if (e.form && (Xa(e.form, "submit", n), !t.leaveSubmitMethodAlone)) { var o = e.form;
                    i = o.submit; try { var s = o.submit = function() { n(), o.submit = i, o.submit(), o.submit = s } } catch (l) {} } t.finishInit = function(t) { t.save = n, t.getTextArea = function() { return e }, t.toTextArea = function() { t.toTextArea = isNaN, n(), e.parentNode.removeChild(t.getWrapperElement()), e.style.display = "", e.form && (je(e.form, "submit", n), "function" == typeof e.form.submit && (e.form.submit = i)) } }, e.style.display = "none"; var c = Ho(function(t) { return e.parentNode.insertBefore(t, e.nextSibling) }, t); return c }

            function aa(e) { e.off = je, e.on = Xa, e.wheelEventPixels = Dr, e.Doc = Os, e.splitLines = Za, e.countColumn = d, e.findColumn = h, e.isWordChar = x, e.Pass = za, e.signal = Oe, e.Line = cs, e.changeEnd = Br, e.scrollbarModel = ys, e.Pos = I, e.cmpPos = D, e.modes = ns, e.mimeModes = rs, e.resolveMode = Ge, e.getMode = Ve, e.modeExtensions = is, e.extendMode = Ke, e.copyState = Ye, e.startState = Je, e.innerMode = Xe, e.commands = zs, e.keyMap = Fs, e.keyName = lo, e.isModifierKey = ao, e.lookupKey = oo, e.normalizeKeyMap = io, e.StringStream = os, e.SharedTextMarker = Ms, e.TextMarker = Ts, e.LineWidget = _s, e.e_preventDefault = Ie, e.e_stopPropagation = De, e.e_stop = ze, e.addClass = s, e.contains = o, e.rmClass = Ea, e.keyNames = Ns }
            var sa = navigator.userAgent,
                la = navigator.platform,
                ca = /gecko\/\d/i.test(sa),
                ua = /MSIE \d/.test(sa),
                da = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(sa),
                fa = /Edge\/(\d+)/.exec(sa),
                ha = ua || da || fa,
                pa = ha && (ua ? document.documentMode || 6 : +(fa || da)[1]),
                ma = !fa && /WebKit\//.test(sa),
                ga = ma && /Qt\/\d+\.\d+/.test(sa),
                va = !fa && /Chrome\//.test(sa),
                ya = /Opera\//.test(sa),
                ba = /Apple Computer/.test(navigator.vendor),
                xa = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(sa),
                wa = /PhantomJS/.test(sa),
                ka = !fa && /AppleWebKit/.test(sa) && /Mobile\/\w+/.test(sa),
                Ca = /Android/.test(sa),
                Sa = ka || Ca || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(sa),
                _a = ka || /Mac/.test(la),
                La = /\bCrOS\b/.test(sa),
                Ta = /win/i.test(la),
                Ma = ya && sa.match(/Version\/(\d*\.\d*)/);
            Ma && (Ma = Number(Ma[1])), Ma && Ma >= 15 && (ya = !1, ma = !0);
            var ja, Oa = _a && (ga || ya && (null == Ma || Ma < 12.11)),
                Aa = ca || ha && pa >= 9,
                Ea = function(t, n) { var r = t.className,
                        i = e(n).exec(r); if (i) { var o = r.slice(i.index + i[0].length);
                        t.className = r.slice(0, i.index) + (o ? i[1] + o : "") } };
            ja = document.createRange ? function(e, t, n, r) { var i = document.createRange(); return i.setEnd(r || e, n), i.setStart(e, t), i } : function(e, t, n) { var r = document.body.createTextRange(); try { r.moveToElementText(e.parentNode) } catch (i) { return r } return r.collapse(!0), r.moveEnd("character", n), r.moveStart("character", t), r };
            var Na = function(e) { e.select() };
            ka ? Na = function(e) { e.selectionStart = 0, e.selectionEnd = e.value.length } : ha && (Na = function(e) { try { e.select() } catch (t) {} });
            var Pa = function() { this.id = null };
            Pa.prototype.set = function(e, t) { clearTimeout(this.id), this.id = setTimeout(t, e) };
            var Ia, Da, Fa = 30,
                za = { toString: function() { return "CodeMirror.Pass" } },
                Ra = { scroll: !1 },
                Ba = { origin: "*mouse" },
                Ha = { origin: "+move" },
                $a = [""],
                Wa = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
                Ua = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,
                qa = !1,
                Ga = !1,
                Va = null,
                Ka = function() {
                    function e(e) { return e <= 247 ? n.charAt(e) : 1424 <= e && e <= 1524 ? "R" : 1536 <= e && e <= 1785 ? r.charAt(e - 1536) : 1774 <= e && e <= 2220 ? "r" : 8192 <= e && e <= 8203 ? "w" : 8204 == e ? "b" : "L" }

                    function t(e, t, n) { this.level = e, this.from = t, this.to = n }
                    var n = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
                        r = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111",
                        i = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
                        o = /[stwN]/,
                        a = /[LRr]/,
                        s = /[Lb1n]/,
                        l = /[1n]/;
                    return function(n, r) {
                        var c = "ltr" == r ? "L" : "R";
                        if (0 == n.length || "ltr" == r && !i.test(n)) return !1;
                        for (var u = n.length, d = [], f = 0; f < u; ++f) d.push(e(n.charCodeAt(f)));
                        for (var h = 0, p = c; h < u; ++h) { var g = d[h]; "m" == g ? d[h] = p : p = g }
                        for (var v = 0, y = c; v < u; ++v) { var b = d[v]; "1" == b && "r" == y ? d[v] = "n" : a.test(b) && (y = b, "r" == b && (d[v] = "R")) }
                        for (var x = 1, w = d[0]; x < u - 1; ++x) { var k = d[x]; "+" == k && "1" == w && "1" == d[x + 1] ? d[x] = "1" : "," != k || w != d[x + 1] || "1" != w && "n" != w || (d[x] = w), w = k }
                        for (var C = 0; C < u; ++C) { var S = d[C]; if ("," == S) d[C] = "N";
                            else if ("%" == S) { var _ = void 0; for (_ = C + 1; _ < u && "%" == d[_]; ++_); for (var L = C && "!" == d[C - 1] || _ < u && "1" == d[_] ? "1" : "N", T = C; T < _; ++T) d[T] = L;
                                C = _ - 1 } }
                        for (var M = 0, j = c; M < u; ++M) { var O = d[M]; "L" == j && "1" == O ? d[M] = "L" : a.test(O) && (j = O) }
                        for (var A = 0; A < u; ++A)
                            if (o.test(d[A])) { var E = void 0; for (E = A + 1; E < u && o.test(d[E]); ++E); for (var N = "L" == (A ? d[A - 1] : c), P = "L" == (E < u ? d[E] : c), I = N == P ? N ? "L" : "R" : c, D = A; D < E; ++D) d[D] = I;
                                A = E - 1 }
                        for (var F, z = [], R = 0; R < u;)
                            if (s.test(d[R])) { var B = R; for (++R; R < u && s.test(d[R]); ++R);
                                z.push(new t(0, B, R)) } else { var H = R,
                                    $ = z.length; for (++R; R < u && "L" != d[R]; ++R); for (var W = H; W < R;)
                                    if (l.test(d[W])) { H < W && z.splice($, 0, new t(1, H, W)); var U = W; for (++W; W < R && l.test(d[W]); ++W);
                                        z.splice($, 0, new t(2, U, W)), H = W } else ++W;
                                H < R && z.splice($, 0, new t(1, H, R)) }
                        return 1 == z[0].level && (F = n.match(/^\s+/)) && (z[0].from = F[0].length, z.unshift(new t(0, 0, F[0].length))), 1 == m(z).level && (F = n.match(/\s+$/)) && (m(z).to -= F[0].length, z.push(new t(0, u - F[0].length, u))), "rtl" == r ? z.reverse() : z
                    }
                }(),
                Ya = [],
                Xa = function(e, t, n) { if (e.addEventListener) e.addEventListener(t, n, !1);
                    else if (e.attachEvent) e.attachEvent("on" + t, n);
                    else { var r = e._handlers || (e._handlers = {});
                        r[t] = (r[t] || Ya).concat(n) } },
                Ja = function() { if (ha && pa < 9) return !1; var e = r("div"); return "draggable" in e || "dragDrop" in e }(),
                Za = 3 != "\n\nb".split(/\n/).length ? function(e) { for (var t = 0, n = [], r = e.length; t <= r;) { var i = e.indexOf("\n", t);
                        i == -1 && (i = e.length); var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
                            a = o.indexOf("\r");
                        a != -1 ? (n.push(o.slice(0, a)), t += a + 1) : (n.push(o), t = i + 1) } return n } : function(e) { return e.split(/\r\n?|\n/) },
                Qa = window.getSelection ? function(e) { try { return e.selectionStart != e.selectionEnd } catch (t) { return !1 } } : function(e) { var t; try { t = e.ownerDocument.selection.createRange() } catch (n) {} return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t) },
                es = function() { var e = r("div"); return "oncopy" in e || (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy) }(),
                ts = null,
                ns = {},
                rs = {},
                is = {},
                os = function(e, t, n) { this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = n };
            os.prototype.eol = function() { return this.pos >= this.string.length }, os.prototype.sol = function() { return this.pos == this.lineStart }, os.prototype.peek = function() { return this.string.charAt(this.pos) || void 0 }, os.prototype.next = function() { if (this.pos < this.string.length) return this.string.charAt(this.pos++) }, os.prototype.eat = function(e) { var t, n = this.string.charAt(this.pos); if (t = "string" == typeof e ? n == e : n && (e.test ? e.test(n) : e(n))) return ++this.pos, n }, os.prototype.eatWhile = function(e) { for (var t = this.pos; this.eat(e);); return this.pos > t }, os.prototype.eatSpace = function() { for (var e = this, t = this.pos;
                    /[\s\u00a0]/.test(this.string.charAt(this.pos));) ++e.pos; return this.pos > t }, os.prototype.skipToEnd = function() { this.pos = this.string.length }, os.prototype.skipTo = function(e) { var t = this.string.indexOf(e, this.pos); if (t > -1) return this.pos = t, !0 }, os.prototype.backUp = function(e) { this.pos -= e }, os.prototype.column = function() { return this.lastColumnPos < this.start && (this.lastColumnValue = d(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? d(this.string, this.lineStart, this.tabSize) : 0) }, os.prototype.indentation = function() { return d(this.string, null, this.tabSize) - (this.lineStart ? d(this.string, this.lineStart, this.tabSize) : 0) }, os.prototype.match = function(e, t, n) { if ("string" != typeof e) { var r = this.string.slice(this.pos).match(e); return r && r.index > 0 ? null : (r && t !== !1 && (this.pos += r[0].length), r) } var i = function(e) { return n ? e.toLowerCase() : e },
                    o = this.string.substr(this.pos, e.length); if (i(o) == i(e)) return t !== !1 && (this.pos += e.length), !0 }, os.prototype.current = function() { return this.string.slice(this.start, this.pos) }, os.prototype.hideFirstChars = function(e, t) { this.lineStart += e; try { return t() } finally { this.lineStart -= e } }, os.prototype.lookAhead = function(e) { var t = this.lineOracle; return t && t.lookAhead(e) };
            var as = function(e, t) { this.state = e, this.lookAhead = t },
                ss = function(e, t, n, r) { this.state = t, this.doc = e, this.line = n, this.maxLookAhead = r || 0 };
            ss.prototype.lookAhead = function(e) { var t = this.doc.getLine(this.line + e); return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t }, ss.prototype.nextLine = function() { this.line++, this.maxLookAhead > 0 && this.maxLookAhead-- }, ss.fromSaved = function(e, t, n) { return t instanceof as ? new ss(e, Ye(e.mode, t.state), n, t.lookAhead) : new ss(e, Ye(e.mode, t), n) }, ss.prototype.save = function(e) { var t = e !== !1 ? Ye(this.doc.mode, this.state) : this.state; return this.maxLookAhead > 0 ? new as(t, this.maxLookAhead) : t };
            var ls = function(e, t, n) { this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = t || null, this.state = n },
                cs = function(e, t, n) { this.text = e, re(this, t), this.height = n ? n(this) : 1 };
            cs.prototype.lineNo = function() { return A(this) }, Pe(cs);
            var us, ds = {},
                fs = {},
                hs = null,
                ps = null,
                ms = { left: 0, right: 0, top: 0, bottom: 0 },
                gs = function(e, t, n) { this.cm = n; var i = this.vert = r("div", [r("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
                        o = this.horiz = r("div", [r("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
                    e(i), e(o), Xa(i, "scroll", function() { i.clientHeight && t(i.scrollTop, "vertical") }), Xa(o, "scroll", function() { o.clientWidth && t(o.scrollLeft, "horizontal") }), this.checkedZeroWidth = !1, ha && pa < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px") };
            gs.prototype.update = function(e) { var t = e.scrollWidth > e.clientWidth + 1,
                    n = e.scrollHeight > e.clientHeight + 1,
                    r = e.nativeBarWidth; if (n) { this.vert.style.display = "block", this.vert.style.bottom = t ? r + "px" : "0"; var i = e.viewHeight - (t ? r : 0);
                    this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px" } else this.vert.style.display = "", this.vert.firstChild.style.height = "0"; if (t) { this.horiz.style.display = "block", this.horiz.style.right = n ? r + "px" : "0", this.horiz.style.left = e.barLeft + "px"; var o = e.viewWidth - e.barLeft - (n ? r : 0);
                    this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + "px" } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0"; return !this.checkedZeroWidth && e.clientHeight > 0 && (0 == r && this.zeroWidthHack(), this.checkedZeroWidth = !0), { right: n ? r : 0, bottom: t ? r : 0 } }, gs.prototype.setScrollLeft = function(e) { this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz") }, gs.prototype.setScrollTop = function(e) { this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert") }, gs.prototype.zeroWidthHack = function() { var e = _a && !xa ? "12px" : "18px";
                this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new Pa, this.disableVert = new Pa }, gs.prototype.enableZeroWidthBar = function(e, t, n) {
                function r() { var i = e.getBoundingClientRect(),
                        o = "vert" == n ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2) : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1);
                    o != e ? e.style.pointerEvents = "none" : t.set(1e3, r) } e.style.pointerEvents = "auto", t.set(1e3, r) }, gs.prototype.clear = function() { var e = this.horiz.parentNode;
                e.removeChild(this.horiz), e.removeChild(this.vert) };
            var vs = function() {};
            vs.prototype.update = function() { return { bottom: 0, right: 0 } }, vs.prototype.setScrollLeft = function() {}, vs.prototype.setScrollTop = function() {}, vs.prototype.clear = function() {};
            var ys = { "native": gs, "null": vs },
                bs = 0,
                xs = function(e, t, n) { var r = e.display;
                    this.viewport = t, this.visible = zn(r, e.doc, t), this.editorIsHidden = !r.wrapper.offsetWidth, this.wrapperHeight = r.wrapper.clientHeight, this.wrapperWidth = r.wrapper.clientWidth, this.oldDisplayWidth = Ut(e), this.force = n, this.dims = wn(e), this.events = [] };
            xs.prototype.signal = function(e, t) { Ne(e, t) && this.events.push(arguments) }, xs.prototype.finish = function() { for (var e = this, t = 0; t < this.events.length; t++) Oe.apply(null, e.events[t]) };
            var ws = 0,
                ks = null;
            ha ? ks = -.53 : ca ? ks = 15 : va ? ks = -.7 : ba && (ks = -1 / 3);
            var Cs = function(e, t) { this.ranges = e, this.primIndex = t };
            Cs.prototype.primary = function() { return this.ranges[this.primIndex] }, Cs.prototype.equals = function(e) { var t = this; if (e == this) return !0; if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1; for (var n = 0; n < this.ranges.length; n++) { var r = t.ranges[n],
                        i = e.ranges[n]; if (!F(r.anchor, i.anchor) || !F(r.head, i.head)) return !1 } return !0 }, Cs.prototype.deepCopy = function() { for (var e = this, t = [], n = 0; n < this.ranges.length; n++) t[n] = new Ss(z(e.ranges[n].anchor), z(e.ranges[n].head)); return new Cs(t, this.primIndex) }, Cs.prototype.somethingSelected = function() { for (var e = this, t = 0; t < this.ranges.length; t++)
                    if (!e.ranges[t].empty()) return !0; return !1 }, Cs.prototype.contains = function(e, t) { var n = this;
                t || (t = e); for (var r = 0; r < this.ranges.length; r++) { var i = n.ranges[r]; if (D(t, i.from()) >= 0 && D(e, i.to()) <= 0) return r } return -1 };
            var Ss = function(e, t) { this.anchor = e, this.head = t };
            Ss.prototype.from = function() { return B(this.anchor, this.head) }, Ss.prototype.to = function() { return R(this.anchor, this.head) }, Ss.prototype.empty = function() { return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch }, Bi.prototype = { chunkSize: function() { return this.lines.length }, removeInner: function(e, t) { for (var n = this, r = e, i = e + t; r < i; ++r) { var o = n.lines[r];
                        n.height -= o.height, ut(o), St(o, "delete") } this.lines.splice(e, t) }, collapse: function(e) { e.push.apply(e, this.lines) }, insertInner: function(e, t, n) { var r = this;
                    this.height += n, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e)); for (var i = 0; i < t.length; ++i) t[i].parent = r }, iterN: function(e, t, n) { for (var r = this, i = e + t; e < i; ++e)
                        if (n(r.lines[e])) return !0 } }, Hi.prototype = { chunkSize: function() { return this.size }, removeInner: function(e, t) { var n = this;
                    this.size -= t; for (var r = 0; r < this.children.length; ++r) { var i = n.children[r],
                            o = i.chunkSize(); if (e < o) { var a = Math.min(t, o - e),
                                s = i.height; if (i.removeInner(e, a), n.height -= s - i.height, o == a && (n.children.splice(r--, 1), i.parent = null), 0 == (t -= a)) break;
                            e = 0 } else e -= o } if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof Bi))) { var l = [];
                        this.collapse(l), this.children = [new Bi(l)], this.children[0].parent = this } }, collapse: function(e) { for (var t = this, n = 0; n < this.children.length; ++n) t.children[n].collapse(e) }, insertInner: function(e, t, n) { var r = this;
                    this.size += t.length, this.height += n; for (var i = 0; i < this.children.length; ++i) { var o = r.children[i],
                            a = o.chunkSize(); if (e <= a) { if (o.insertInner(e, t, n), o.lines && o.lines.length > 50) { for (var s = o.lines.length % 25 + 25, l = s; l < o.lines.length;) { var c = new Bi(o.lines.slice(l, l += 25));
                                    o.height -= c.height, r.children.splice(++i, 0, c), c.parent = r } o.lines = o.lines.slice(0, s), r.maybeSpill() } break } e -= a } }, maybeSpill: function() { if (!(this.children.length <= 10)) { var e = this;
                        do { var t = e.children.splice(e.children.length - 5, 5),
                                n = new Hi(t); if (e.parent) { e.size -= n.size, e.height -= n.height; var r = f(e.parent.children, e);
                                e.parent.children.splice(r + 1, 0, n) } else { var i = new Hi(e.children);
                                i.parent = e, e.children = [i, n], e = i } n.parent = e.parent } while (e.children.length > 10);
                        e.parent.maybeSpill() } }, iterN: function(e, t, n) { for (var r = this, i = 0; i < this.children.length; ++i) { var o = r.children[i],
                            a = o.chunkSize(); if (e < a) { var s = Math.min(t, a - e); if (o.iterN(e, s, n)) return !0; if (0 == (t -= s)) break;
                            e = 0 } else e -= a } } };
            var _s = function(e, t, n) { var r = this; if (n)
                    for (var i in n) n.hasOwnProperty(i) && (r[i] = n[i]);
                this.doc = e, this.node = t };
            _s.prototype.clear = function() { var e = this,
                    t = this.doc.cm,
                    n = this.line.widgets,
                    r = this.line,
                    i = A(r); if (null != i && n) { for (var o = 0; o < n.length; ++o) n[o] == e && n.splice(o--, 1);
                    n.length || (r.widgets = null); var a = zt(this);
                    O(r, Math.max(0, r.height - a)), t && (fr(t, function() { $i(t, r, -a), vr(t, i, "widget") }), St(t, "lineWidgetCleared", t, this, i)) } }, _s.prototype.changed = function() { var e = this,
                    t = this.height,
                    n = this.doc.cm,
                    r = this.line;
                this.height = null; var i = zt(this) - t;
                i && (O(r, r.height + i), n && fr(n, function() { n.curOp.forceUpdate = !0, $i(n, r, i), St(n, "lineWidgetChanged", n, e, A(r)) })) }, Pe(_s);
            var Ls = 0,
                Ts = function(e, t) { this.lines = [], this.type = t, this.doc = e, this.id = ++Ls };
            Ts.prototype.clear = function() { var e = this; if (!this.explicitlyCleared) { var t = this.doc.cm,
                        n = t && !t.curOp; if (n && ir(t), Ne(this, "clear")) { var r = this.find();
                        r && St(this, "clear", r.from, r.to) } for (var i = null, o = null, a = 0; a < this.lines.length; ++a) { var s = e.lines[a],
                            l = K(s.markedSpans, e);
                        t && !e.collapsed ? vr(t, A(s), "text") : t && (null != l.to && (o = A(s)), null != l.from && (i = A(s))), s.markedSpans = Y(s.markedSpans, l), null == l.from && e.collapsed && !ge(e.doc, s) && t && O(s, bn(t.display)) } if (t && this.collapsed && !t.options.lineWrapping)
                        for (var c = 0; c < this.lines.length; ++c) { var u = de(e.lines[c]),
                                d = be(u);
                            d > t.display.maxLineLength && (t.display.maxLine = u, t.display.maxLineLength = d, t.display.maxLineChanged = !0) } null != i && t && this.collapsed && gr(t, i, o + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, t && ki(t.doc)), t && St(t, "markerCleared", t, this, i, o), n && or(t), this.parent && this.parent.clear() } }, Ts.prototype.find = function(e, t) { var n = this;
                null == e && "bookmark" == this.type && (e = 1); for (var r, i, o = 0; o < this.lines.length; ++o) { var a = n.lines[o],
                        s = K(a.markedSpans, n); if (null != s.from && (r = I(t ? a : A(a), s.from), e == -1)) return r; if (null != s.to && (i = I(t ? a : A(a), s.to), 1 == e)) return i } return r && { from: r, to: i } }, Ts.prototype.changed = function() { var e = this,
                    t = this.find(-1, !0),
                    n = this,
                    r = this.doc.cm;
                t && r && fr(r, function() { var i = t.line,
                        o = A(t.line),
                        a = Xt(r, o); if (a && (rn(a), r.curOp.selectionChanged = r.curOp.forceUpdate = !0), r.curOp.updateMaxLine = !0, !ge(n.doc, i) && null != n.height) { var s = n.height;
                        n.height = null; var l = zt(n) - s;
                        l && O(i, i.height + l) } St(r, "markerChanged", r, e) }) }, Ts.prototype.attachLine = function(e) { if (!this.lines.length && this.doc.cm) { var t = this.doc.cm.curOp;
                    t.maybeHiddenMarkers && f(t.maybeHiddenMarkers, this) != -1 || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this) } this.lines.push(e) }, Ts.prototype.detachLine = function(e) { if (this.lines.splice(f(this.lines, e), 1), !this.lines.length && this.doc.cm) { var t = this.doc.cm.curOp;
                    (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this) } }, Pe(Ts);
            var Ms = function(e, t) { var n = this;
                this.markers = e, this.primary = t; for (var r = 0; r < e.length; ++r) e[r].parent = n };
            Ms.prototype.clear = function() { var e = this; if (!this.explicitlyCleared) { this.explicitlyCleared = !0; for (var t = 0; t < this.markers.length; ++t) e.markers[t].clear();
                    St(this, "clear") } }, Ms.prototype.find = function(e, t) { return this.primary.find(e, t) }, Pe(Ms);
            var js = 0,
                Os = function(e, t, n, r, i) { if (!(this instanceof Os)) return new Os(e, t, n, r, i);
                    null == n && (n = 0), Hi.call(this, [new Bi([new cs("", null)])]), this.first = n, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = n; var o = I(n, 0);
                    this.sel = Rr(o), this.history = new Qr(null), this.id = ++js, this.modeOption = t, this.lineSep = r, this.direction = "rtl" == i ? "rtl" : "ltr", this.extend = !1, "string" == typeof e && (e = this.splitLines(e)), Kr(this, { from: o, to: o, text: e }), bi(this, Rr(o), Ra) };
            Os.prototype = b(Hi.prototype, { constructor: Os, iter: function(e, t, n) { n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e) }, insert: function(e, t) { for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height;
                    this.insertInner(e - this.first, t, n) }, remove: function(e, t) { this.removeInner(e - this.first, t) }, getValue: function(e) { var t = j(this, this.first, this.first + this.size); return e === !1 ? t : t.join(e || this.lineSeparator()) }, setValue: mr(function(e) { var t = I(this.first, 0),
                        n = this.first + this.size - 1;
                    ji(this, { from: t, to: I(n, T(this, n).text.length), text: this.splitLines(e), origin: "setValue", full: !0 }, !0), this.cm && Vn(this.cm, 0, 0), bi(this, Rr(t), Ra) }), replaceRange: function(e, t, n, r) { t = $(this, t), n = n ? $(this, n) : t, Ii(this, e, t, n, r) }, getRange: function(e, t, n) { var r = M(this, $(this, e), $(this, t)); return n === !1 ? r : r.join(n || this.lineSeparator()) }, getLine: function(e) { var t = this.getLineHandle(e); return t && t.text }, getLineHandle: function(e) { if (N(this, e)) return T(this, e) }, getLineNumber: function(e) { return A(e) }, getLineHandleVisualStart: function(e) { return "number" == typeof e && (e = T(this, e)), de(e) }, lineCount: function() { return this.size }, firstLine: function() { return this.first }, lastLine: function() { return this.first + this.size - 1 }, clipPos: function(e) { return $(this, e) }, getCursor: function(e) { var t, n = this.sel.primary(); return t = null == e || "head" == e ? n.head : "anchor" == e ? n.anchor : "end" == e || "to" == e || e === !1 ? n.to() : n.from() }, listSelections: function() { return this.sel.ranges }, somethingSelected: function() { return this.sel.somethingSelected() }, setCursor: mr(function(e, t, n) { gi(this, $(this, "number" == typeof e ? I(e, t || 0) : e), null, n) }), setSelection: mr(function(e, t, n) { gi(this, $(this, e), $(this, t || e), n) }), extendSelection: mr(function(e, t, n) { hi(this, $(this, e), t && $(this, t), n) }), extendSelections: mr(function(e, t) { pi(this, U(this, e), t) }), extendSelectionsBy: mr(function(e, t) { var n = g(this.sel.ranges, e);
                    pi(this, U(this, n), t) }), setSelections: mr(function(e, t, n) { var r = this; if (e.length) { for (var i = [], o = 0; o < e.length; o++) i[o] = new Ss($(r, e[o].anchor), $(r, e[o].head));
                        null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), bi(this, zr(i, t), n) } }), addSelection: mr(function(e, t, n) { var r = this.sel.ranges.slice(0);
                    r.push(new Ss($(this, e), $(this, t || e))), bi(this, zr(r, r.length - 1), n) }), getSelection: function(e) { for (var t, n = this, r = this.sel.ranges, i = 0; i < r.length; i++) { var o = M(n, r[i].from(), r[i].to());
                        t = t ? t.concat(o) : o } return e === !1 ? t : t.join(e || this.lineSeparator()) }, getSelections: function(e) { for (var t = this, n = [], r = this.sel.ranges, i = 0; i < r.length; i++) { var o = M(t, r[i].from(), r[i].to());
                        e !== !1 && (o = o.join(e || t.lineSeparator())), n[i] = o } return n }, replaceSelection: function(e, t, n) { for (var r = [], i = 0; i < this.sel.ranges.length; i++) r[i] = e;
                    this.replaceSelections(r, t, n || "+input") }, replaceSelections: mr(function(e, t, n) { for (var r = this, i = [], o = this.sel, a = 0; a < o.ranges.length; a++) { var s = o.ranges[a];
                        i[a] = { from: s.from(), to: s.to(), text: r.splitLines(e[a]), origin: n } } for (var l = t && "end" != t && Ur(this, i, t), c = i.length - 1; c >= 0; c--) ji(r, i[c]);
                    l ? yi(this, l) : this.cm && Gn(this.cm) }), undo: mr(function() { Ai(this, "undo") }), redo: mr(function() { Ai(this, "redo") }), undoSelection: mr(function() { Ai(this, "undo", !0) }), redoSelection: mr(function() { Ai(this, "redo", !0) }), setExtending: function(e) { this.extend = e }, getExtending: function() { return this.extend }, historySize: function() { for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++) e.done[r].ranges || ++t; for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++n; return { undo: t, redo: n } }, clearHistory: function() { this.history = new Qr(this.history.maxGeneration) }, markClean: function() { this.cleanGeneration = this.changeGeneration(!0) }, changeGeneration: function(e) { return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation }, isClean: function(e) { return this.history.generation == (e || this.cleanGeneration) }, getHistory: function() { return { done: di(this.history.done), undone: di(this.history.undone) } }, setHistory: function(e) { var t = this.history = new Qr(this.history.maxGeneration);
                    t.done = di(e.done.slice(0), null, !0), t.undone = di(e.undone.slice(0), null, !0) }, setGutterMarker: mr(function(e, t, n) { return Ri(this, e, "gutter", function(e) { var r = e.gutterMarkers || (e.gutterMarkers = {}); return r[t] = n, !n && k(r) && (e.gutterMarkers = null), !0 }) }), clearGutter: mr(function(e) { var t = this;
                    this.iter(function(n) { n.gutterMarkers && n.gutterMarkers[e] && Ri(t, n, "gutter", function() { return n.gutterMarkers[e] = null, k(n.gutterMarkers) && (n.gutterMarkers = null), !0 }) }) }), lineInfo: function(e) { var t; if ("number" == typeof e) { if (!N(this, e)) return null; if (t = e, e = T(this, e), !e) return null } else if (t = A(e), null == t) return null; return { line: t, handle: e, text: e.text, gutterMarkers: e.gutterMarkers, textClass: e.textClass, bgClass: e.bgClass, wrapClass: e.wrapClass, widgets: e.widgets } }, addLineClass: mr(function(t, n, r) { return Ri(this, t, "gutter" == n ? "gutter" : "class", function(t) { var i = "text" == n ? "textClass" : "background" == n ? "bgClass" : "gutter" == n ? "gutterClass" : "wrapClass"; if (t[i]) { if (e(r).test(t[i])) return !1;
                            t[i] += " " + r } else t[i] = r; return !0 }) }), removeLineClass: mr(function(t, n, r) { return Ri(this, t, "gutter" == n ? "gutter" : "class", function(t) { var i = "text" == n ? "textClass" : "background" == n ? "bgClass" : "gutter" == n ? "gutterClass" : "wrapClass",
                            o = t[i]; if (!o) return !1; if (null == r) t[i] = null;
                        else { var a = o.match(e(r)); if (!a) return !1; var s = a.index + a[0].length;
                            t[i] = o.slice(0, a.index) + (a.index && s != o.length ? " " : "") + o.slice(s) || null } return !0 }) }), addLineWidget: mr(function(e, t, n) { return Wi(this, e, t, n) }), removeLineWidget: function(e) { e.clear() }, markText: function(e, t, n) { return Ui(this, $(this, e), $(this, t), n, n && n.type || "range") }, setBookmark: function(e, t) { var n = { replacedWith: t && (null == t.nodeType ? t.widget : t), insertLeft: t && t.insertLeft, clearWhenEmpty: !1, shared: t && t.shared, handleMouseEvents: t && t.handleMouseEvents }; return e = $(this, e), Ui(this, e, e, n, "bookmark") }, findMarksAt: function(e) { e = $(this, e); var t = [],
                        n = T(this, e.line).markedSpans; if (n)
                        for (var r = 0; r < n.length; ++r) { var i = n[r];
                            (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker) }
                    return t }, findMarks: function(e, t, n) { e = $(this, e), t = $(this, t); var r = [],
                        i = e.line; return this.iter(e.line, t.line + 1, function(o) { var a = o.markedSpans; if (a)
                            for (var s = 0; s < a.length; s++) { var l = a[s];
                                null != l.to && i == e.line && e.ch >= l.to || null == l.from && i != e.line || null != l.from && i == t.line && l.from >= t.ch || n && !n(l.marker) || r.push(l.marker.parent || l.marker) }++i }), r }, getAllMarks: function() { var e = []; return this.iter(function(t) { var n = t.markedSpans; if (n)
                            for (var r = 0; r < n.length; ++r) null != n[r].from && e.push(n[r].marker) }), e }, posFromIndex: function(e) { var t, n = this.first,
                        r = this.lineSeparator().length; return this.iter(function(i) { var o = i.text.length + r; return o > e ? (t = e, !0) : (e -= o, void++n) }), $(this, I(n, t)) }, indexFromPos: function(e) { e = $(this, e); var t = e.ch; if (e.line < this.first || e.ch < 0) return 0; var n = this.lineSeparator().length; return this.iter(this.first, e.line, function(e) { t += e.text.length + n }), t }, copy: function(e) { var t = new Os(j(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction); return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t }, linkedDoc: function(e) { e || (e = {}); var t = this.first,
                        n = this.first + this.size;
                    null != e.from && e.from > t && (t = e.from), null != e.to && e.to < n && (n = e.to); var r = new Os(j(this, t, n), e.mode || this.modeOption, t, this.lineSep, this.direction); return e.sharedHist && (r.history = this.history), (this.linked || (this.linked = [])).push({ doc: r, sharedHist: e.sharedHist }), r.linked = [{ doc: this, isParent: !0, sharedHist: e.sharedHist }], Vi(r, Gi(this)), r }, unlinkDoc: function(e) { var t = this; if (e instanceof Ho && (e = e.doc), this.linked)
                        for (var n = 0; n < this.linked.length; ++n) { var r = t.linked[n]; if (r.doc == e) { t.linked.splice(n, 1), e.unlinkDoc(t), Ki(Gi(t)); break } }
                    if (e.history == this.history) { var i = [e.id];
                        Yr(e, function(e) { return i.push(e.id) }, !0), e.history = new Qr(null), e.history.done = di(this.history.done, i), e.history.undone = di(this.history.undone, i) } }, iterLinkedDocs: function(e) { Yr(this, e) }, getMode: function() { return this.mode }, getEditor: function() { return this.cm }, splitLines: function(e) { return this.lineSep ? e.split(this.lineSep) : Za(e) }, lineSeparator: function() { return this.lineSep || "\n" }, setDirection: mr(function(e) { "rtl" != e && (e = "ltr"), e != this.direction && (this.direction = e, this.iter(function(e) { return e.order = null }), this.cm && Zr(this.cm)) }) }), Os.prototype.eachLine = Os.prototype.iter;
            for (var As = 0, Es = !1, Ns = { 3: "Enter", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert", 46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod", 106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 127: "Delete", 173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete", 63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert" }, Ps = 0; Ps < 10; Ps++) Ns[Ps + 48] = Ns[Ps + 96] = String(Ps);
            for (var Is = 65; Is <= 90; Is++) Ns[Is] = String.fromCharCode(Is);
            for (var Ds = 1; Ds <= 12; Ds++) Ns[Ds + 111] = Ns[Ds + 63235] = "F" + Ds;
            var Fs = {};
            Fs.basic = { Left: "goCharLeft", Right: "goCharRight", Up: "goLineUp", Down: "goLineDown", End: "goLineEnd", Home: "goLineStartSmart", PageUp: "goPageUp", PageDown: "goPageDown", Delete: "delCharAfter", Backspace: "delCharBefore", "Shift-Backspace": "delCharBefore", Tab: "defaultTab", "Shift-Tab": "indentAuto", Enter: "newlineAndIndent", Insert: "toggleOverwrite", Esc: "singleSelection" }, Fs.pcDefault = { "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo", "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown", "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd", "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find", "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll", "Ctrl-[": "indentLess", "Ctrl-]": "indentMore", "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection", fallthrough: "basic" }, Fs.emacsy = { "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown", "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd", "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore", "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars", "Ctrl-O": "openLine" }, Fs.macDefault = { "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo", "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft", "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore", "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find", "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll", "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight", "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd", fallthrough: ["basic", "emacsy"] }, Fs["default"] = _a ? Fs.macDefault : Fs.pcDefault;
            var zs = { selectAll: Ti, singleSelection: function(e) { return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), Ra) }, killLine: function(e) { return uo(e, function(t) { if (t.empty()) { var n = T(e.doc, t.head.line).text.length; return t.head.ch == n && t.head.line < e.lastLine() ? { from: t.head, to: I(t.head.line + 1, 0) } : { from: t.head, to: I(t.head.line, n) } } return { from: t.from(), to: t.to() } }) }, deleteLine: function(e) { return uo(e, function(t) { return { from: I(t.from().line, 0), to: $(e.doc, I(t.to().line + 1, 0)) } }) }, delLineLeft: function(e) { return uo(e, function(e) { return { from: I(e.from().line, 0), to: e.from() } }) }, delWrappedLineLeft: function(e) { return uo(e, function(t) { var n = e.charCoords(t.head, "div").top + 5,
                                r = e.coordsChar({ left: 0, top: n }, "div"); return { from: r, to: t.from() } }) }, delWrappedLineRight: function(e) { return uo(e, function(t) { var n = e.charCoords(t.head, "div").top + 5,
                                r = e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: n }, "div"); return { from: t.from(), to: r } }) }, undo: function(e) { return e.undo() }, redo: function(e) { return e.redo() }, undoSelection: function(e) { return e.undoSelection() }, redoSelection: function(e) { return e.redoSelection() }, goDocStart: function(e) { return e.extendSelection(I(e.firstLine(), 0)) }, goDocEnd: function(e) { return e.extendSelection(I(e.lastLine())) }, goLineStart: function(e) { return e.extendSelectionsBy(function(t) { return fo(e, t.head.line) }, { origin: "+move", bias: 1 }) }, goLineStartSmart: function(e) { return e.extendSelectionsBy(function(t) { return po(e, t.head) }, { origin: "+move", bias: 1 }) }, goLineEnd: function(e) { return e.extendSelectionsBy(function(t) { return ho(e, t.head.line) }, { origin: "+move", bias: -1 }) }, goLineRight: function(e) { return e.extendSelectionsBy(function(t) { var n = e.cursorCoords(t.head, "div").top + 5; return e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: n }, "div") }, Ha) }, goLineLeft: function(e) { return e.extendSelectionsBy(function(t) { var n = e.cursorCoords(t.head, "div").top + 5; return e.coordsChar({ left: 0, top: n }, "div") }, Ha) }, goLineLeftSmart: function(e) { return e.extendSelectionsBy(function(t) { var n = e.cursorCoords(t.head, "div").top + 5,
                                r = e.coordsChar({ left: 0, top: n }, "div"); return r.ch < e.getLine(r.line).search(/\S/) ? po(e, t.head) : r }, Ha) }, goLineUp: function(e) { return e.moveV(-1, "line") }, goLineDown: function(e) { return e.moveV(1, "line") }, goPageUp: function(e) { return e.moveV(-1, "page") }, goPageDown: function(e) { return e.moveV(1, "page") }, goCharLeft: function(e) { return e.moveH(-1, "char") }, goCharRight: function(e) { return e.moveH(1, "char") }, goColumnLeft: function(e) { return e.moveH(-1, "column") }, goColumnRight: function(e) { return e.moveH(1, "column") }, goWordLeft: function(e) { return e.moveH(-1, "word") }, goGroupRight: function(e) { return e.moveH(1, "group") }, goGroupLeft: function(e) { return e.moveH(-1, "group") }, goWordRight: function(e) { return e.moveH(1, "word") }, delCharBefore: function(e) { return e.deleteH(-1, "char") }, delCharAfter: function(e) { return e.deleteH(1, "char") }, delWordBefore: function(e) { return e.deleteH(-1, "word") }, delWordAfter: function(e) { return e.deleteH(1, "word") }, delGroupBefore: function(e) { return e.deleteH(-1, "group") }, delGroupAfter: function(e) { return e.deleteH(1, "group") }, indentAuto: function(e) { return e.indentSelection("smart") }, indentMore: function(e) { return e.indentSelection("add") }, indentLess: function(e) { return e.indentSelection("subtract") }, insertTab: function(e) { return e.replaceSelection("\t") }, insertSoftTab: function(e) { for (var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0; i < n.length; i++) { var o = n[i].from(),
                                a = d(e.getLine(o.line), o.ch, r);
                            t.push(p(r - a % r)) } e.replaceSelections(t) }, defaultTab: function(e) { e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab") }, transposeChars: function(e) { return fr(e, function() { for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++)
                                if (t[r].empty()) { var i = t[r].head,
                                        o = T(e.doc, i.line).text; if (o)
                                        if (i.ch == o.length && (i = new I(i.line, i.ch - 1)), i.ch > 0) i = new I(i.line, i.ch + 1), e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), I(i.line, i.ch - 2), i, "+transpose");
                                        else if (i.line > e.doc.first) { var a = T(e.doc, i.line - 1).text;
                                        a && (i = new I(i.line, 1), e.replaceRange(o.charAt(0) + e.doc.lineSeparator() + a.charAt(a.length - 1), I(i.line - 1, a.length - 1), i, "+transpose")) } n.push(new Ss(i, i)) }
                            e.setSelections(n) }) }, newlineAndIndent: function(e) { return fr(e, function() { for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--) e.replaceRange(e.doc.lineSeparator(), t[n].anchor, t[n].head, "+input");
                            t = e.listSelections(); for (var r = 0; r < t.length; r++) e.indentLine(t[r].from().line, null, !0);
                            Gn(e) }) }, openLine: function(e) { return e.replaceSelection("\n", "start") }, toggleOverwrite: function(e) { return e.toggleOverwrite() } },
                Rs = new Pa,
                Bs = null,
                Hs = 400,
                $s = function(e, t, n) { this.time = e, this.pos = t, this.button = n };
            $s.prototype.compare = function(e, t, n) { return this.time + Hs > e && 0 == D(t, this.pos) && n == this.button };
            var Ws, Us, qs = { toString: function() { return "CodeMirror.Init" } },
                Gs = {},
                Vs = {};
            Ho.defaults = Gs, Ho.optionHandlers = Vs;
            var Ks = [];
            Ho.defineInitHook = function(e) { return Ks.push(e) };
            var Ys = null,
                Xs = function(e) {
                    var t = e.optionHandlers,
                        n = e.helpers = {};
                    e.prototype = {
                        constructor: e,
                        focus: function() { window.focus(), this.display.input.focus() },
                        setOption: function(e, n) { var r = this.options,
                                i = r[e];
                            r[e] == n && "mode" != e || (r[e] = n, t.hasOwnProperty(e) && hr(this, t[e])(this, n, i), Oe(this, "optionChange", this, e)) },
                        getOption: function(e) { return this.options[e] },
                        getDoc: function() { return this.doc },
                        addKeyMap: function(e, t) { this.state.keyMaps[t ? "push" : "unshift"](co(e)) },
                        removeKeyMap: function(e) { for (var t = this.state.keyMaps, n = 0; n < t.length; ++n)
                                if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0 },
                        addOverlay: pr(function(t, n) {
                            var r = t.token ? t : e.getMode(this.options, t);
                            if (r.startState) throw new Error("Overlays may not be stateful.");
                            v(this.state.overlays, {
                                mode: r,
                                modeSpec: t,
                                opaque: n && n.opaque,
                                priority: n && n.priority || 0
                            }, function(e) { return e.priority }), this.state.modeGen++, gr(this)
                        }),
                        removeOverlay: pr(function(e) { for (var t = this, n = this.state.overlays, r = 0; r < n.length; ++r) { var i = n[r].modeSpec; if (i == e || "string" == typeof e && i.name == e) return n.splice(r, 1), t.state.modeGen++, void gr(t) } }),
                        indentLine: pr(function(e, t, n) { "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), N(this.doc, e) && Wo(this, e, t, n) }),
                        indentSelection: pr(function(e) { for (var t = this, n = this.doc.sel.ranges, r = -1, i = 0; i < n.length; i++) { var o = n[i]; if (o.empty()) o.head.line > r && (Wo(t, o.head.line, e, !0), r = o.head.line, i == t.doc.sel.primIndex && Gn(t));
                                else { var a = o.from(),
                                        s = o.to(),
                                        l = Math.max(r, a.line);
                                    r = Math.min(t.lastLine(), s.line - (s.ch ? 0 : 1)) + 1; for (var c = l; c < r; ++c) Wo(t, c, e); var u = t.doc.sel.ranges;
                                    0 == a.ch && n.length == u.length && u[i].from().ch > 0 && mi(t.doc, i, new Ss(a, u[i].to()), Ra) } } }),
                        getTokenAt: function(e, t) { return it(this, e, t) },
                        getLineTokens: function(e, t) { return it(this, I(e), t, !0) },
                        getTokenTypeAt: function(e) { e = $(this.doc, e); var t, n = Qe(this, T(this.doc, e.line)),
                                r = 0,
                                i = (n.length - 1) / 2,
                                o = e.ch; if (0 == o) t = n[2];
                            else
                                for (;;) { var a = r + i >> 1; if ((a ? n[2 * a - 1] : 0) >= o) i = a;
                                    else { if (!(n[2 * a + 1] < o)) { t = n[2 * a + 2]; break } r = a + 1 } }
                            var s = t ? t.indexOf("overlay ") : -1; return s < 0 ? t : 0 == s ? null : t.slice(0, s - 1) },
                        getModeAt: function(t) { var n = this.doc.mode; return n.innerMode ? e.innerMode(n, this.getTokenAt(t).state).mode : n },
                        getHelper: function(e, t) { return this.getHelpers(e, t)[0] },
                        getHelpers: function(e, t) { var r = this,
                                i = []; if (!n.hasOwnProperty(t)) return i; var o = n[t],
                                a = this.getModeAt(e); if ("string" == typeof a[t]) o[a[t]] && i.push(o[a[t]]);
                            else if (a[t])
                                for (var s = 0; s < a[t].length; s++) { var l = o[a[t][s]];
                                    l && i.push(l) } else a.helperType && o[a.helperType] ? i.push(o[a.helperType]) : o[a.name] && i.push(o[a.name]); for (var c = 0; c < o._global.length; c++) { var u = o._global[c];
                                u.pred(a, r) && f(i, u.val) == -1 && i.push(u.val) } return i },
                        getStateAfter: function(e, t) { var n = this.doc; return e = H(n, null == e ? n.first + n.size - 1 : e), et(this, e + 1, t).state },
                        cursorCoords: function(e, t) { var n, r = this.doc.sel.primary(); return n = null == e ? r.head : "object" == typeof e ? $(this.doc, e) : e ? r.from() : r.to(), fn(this, n, t || "page") },
                        charCoords: function(e, t) { return dn(this, $(this.doc, e), t || "page") },
                        coordsChar: function(e, t) { return e = un(this, e, t || "page"), mn(this, e.left, e.top) },
                        lineAtHeight: function(e, t) { return e = un(this, { top: e, left: 0 }, t || "page").top, E(this.doc, e + this.display.viewOffset) },
                        heightAtLine: function(e, t, n) { var r, i = !1; if ("number" == typeof e) { var o = this.doc.first + this.doc.size - 1;
                                e < this.doc.first ? e = this.doc.first : e > o && (e = o, i = !0), r = T(this.doc, e) } else r = e; return cn(this, r, { top: 0, left: 0 }, t || "page", n || i).top + (i ? this.doc.height - ye(r) : 0) },
                        defaultTextHeight: function() { return bn(this.display) },
                        defaultCharWidth: function() { return xn(this.display) },
                        getViewport: function() { return { from: this.display.viewFrom, to: this.display.viewTo } },
                        addWidget: function(e, t, n, r, i) { var o = this.display;
                            e = fn(this, $(this.doc, e)); var a = e.bottom,
                                s = e.left; if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), o.sizer.appendChild(t), "over" == r) a = e.top;
                            else if ("above" == r || "near" == r) { var l = Math.max(o.wrapper.clientHeight, this.doc.height),
                                    c = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
                                ("above" == r || e.bottom + t.offsetHeight > l) && e.top > t.offsetHeight ? a = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= l && (a = e.bottom), s + t.offsetWidth > c && (s = c - t.offsetWidth) } t.style.top = a + "px", t.style.left = t.style.right = "", "right" == i ? (s = o.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == i ? s = 0 : "middle" == i && (s = (o.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = s + "px"), n && Wn(this, { left: s, top: a, right: s + t.offsetWidth, bottom: a + t.offsetHeight }) },
                        triggerOnKeyDown: pr(xo),
                        triggerOnKeyPress: pr(Co),
                        triggerOnKeyUp: ko,
                        triggerOnMouseDown: pr(_o),
                        execCommand: function(e) { if (zs.hasOwnProperty(e)) return zs[e].call(null, this) },
                        triggerElectric: pr(function(e) { Vo(this, e) }),
                        findPosH: function(e, t, n, r) { var i = this,
                                o = 1;
                            t < 0 && (o = -1, t = -t); for (var a = $(this.doc, e), s = 0; s < t && (a = Jo(i.doc, a, o, n, r), !a.hitSide); ++s); return a },
                        moveH: pr(function(e, t) { var n = this;
                            this.extendSelectionsBy(function(r) { return n.display.shift || n.doc.extend || r.empty() ? Jo(n.doc, r.head, e, t, n.options.rtlMoveVisually) : e < 0 ? r.from() : r.to() }, Ha) }),
                        deleteH: pr(function(e, t) { var n = this.doc.sel,
                                r = this.doc;
                            n.somethingSelected() ? r.replaceSelection("", null, "+delete") : uo(this, function(n) { var i = Jo(r, n.head, e, t, !1); return e < 0 ? { from: i, to: n.head } : { from: n.head, to: i } }) }),
                        findPosV: function(e, t, n, r) { var i = this,
                                o = 1,
                                a = r;
                            t < 0 && (o = -1, t = -t); for (var s = $(this.doc, e), l = 0; l < t; ++l) { var c = fn(i, s, "div"); if (null == a ? a = c.left : c.left = a, s = Zo(i, c, o, n), s.hitSide) break } return s },
                        moveV: pr(function(e, t) { var n = this,
                                r = this.doc,
                                i = [],
                                o = !this.display.shift && !r.extend && r.sel.somethingSelected(); if (r.extendSelectionsBy(function(a) { if (o) return e < 0 ? a.from() : a.to(); var s = fn(n, a.head, "div");
                                    null != a.goalColumn && (s.left = a.goalColumn), i.push(s.left); var l = Zo(n, s, e, t); return "page" == t && a == r.sel.primary() && qn(n, dn(n, l, "div").top - s.top), l }, Ha), i.length)
                                for (var a = 0; a < r.sel.ranges.length; a++) r.sel.ranges[a].goalColumn = i[a] }),
                        findWordAt: function(e) { var t = this.doc,
                                n = T(t, e.line).text,
                                r = e.ch,
                                i = e.ch; if (n) { var o = this.getHelper(e, "wordChars"); "before" != e.sticky && i != n.length || !r ? ++i : --r; for (var a = n.charAt(r), s = w(a, o) ? function(e) { return w(e, o) } : /\s/.test(a) ? function(e) { return /\s/.test(e) } : function(e) { return !/\s/.test(e) && !w(e) }; r > 0 && s(n.charAt(r - 1));) --r; for (; i < n.length && s(n.charAt(i));) ++i } return new Ss(I(e.line, r), I(e.line, i)) },
                        toggleOverwrite: function(e) { null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? s(this.display.cursorDiv, "CodeMirror-overwrite") : Ea(this.display.cursorDiv, "CodeMirror-overwrite"), Oe(this, "overwriteToggle", this, this.state.overwrite)) },
                        hasFocus: function() { return this.display.input.getField() == a() },
                        isReadOnly: function() { return !(!this.options.readOnly && !this.doc.cantEdit) },
                        scrollTo: pr(function(e, t) { Vn(this, e, t) }),
                        getScrollInfo: function() { var e = this.display.scroller; return { left: e.scrollLeft, top: e.scrollTop, height: e.scrollHeight - Wt(this) - this.display.barHeight, width: e.scrollWidth - Wt(this) - this.display.barWidth, clientHeight: qt(this), clientWidth: Ut(this) } },
                        scrollIntoView: pr(function(e, t) { null == e ? (e = { from: this.doc.sel.primary().head, to: null }, null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = { from: I(e, 0), to: null } : null == e.from && (e = { from: e, to: null }), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line ? Kn(this, e) : Xn(this, e.from, e.to, e.margin) }),
                        setSize: pr(function(e, t) { var n = this,
                                r = function(e) { return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e };
                            null != e && (this.display.wrapper.style.width = r(e)), null != t && (this.display.wrapper.style.height = r(t)), this.options.lineWrapping && on(this); var i = this.display.viewFrom;
                            this.doc.iter(i, this.display.viewTo, function(e) { if (e.widgets)
                                    for (var t = 0; t < e.widgets.length; t++)
                                        if (e.widgets[t].noHScroll) { vr(n, i, "widget"); break }++i }), this.curOp.forceUpdate = !0, Oe(this, "refresh", this) }),
                        operation: function(e) { return fr(this, e) },
                        startOperation: function() { return ir(this) },
                        endOperation: function() { return or(this) },
                        refresh: pr(function() { var e = this.display.cachedTextHeight;
                            gr(this), this.curOp.forceUpdate = !0, an(this), Vn(this, this.doc.scrollLeft, this.doc.scrollTop), Ar(this), (null == e || Math.abs(e - bn(this.display)) > .5) && Sn(this), Oe(this, "refresh", this) }),
                        swapDoc: pr(function(e) { var t = this.doc; return t.cm = null, Xr(this, e), an(this), this.display.input.reset(), Vn(this, e.scrollLeft, e.scrollTop), this.curOp.forceScroll = !0, St(this, "swapDoc", this, t), t }),
                        getInputField: function() { return this.display.input.getField() },
                        getWrapperElement: function() { return this.display.wrapper },
                        getScrollerElement: function() { return this.display.scroller },
                        getGutterElement: function() { return this.display.gutters }
                    }, Pe(e), e.registerHelper = function(t, r, i) { n.hasOwnProperty(t) || (n[t] = e[t] = { _global: [] }), n[t][r] = i }, e.registerGlobalHelper = function(t, r, i, o) { e.registerHelper(t, r, o), n[t]._global.push({ pred: i, val: o }) }
                },
                Js = function(e) { this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new Pa, this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null };
            Js.prototype.init = function(e) {
                function t(e) { if (!Ae(i, e)) { if (i.somethingSelected()) Uo({ lineWise: !1, text: i.getSelections() }), "cut" == e.type && i.replaceSelection("", null, "cut");
                        else { if (!i.options.lineWiseCopyCut) return; var t = Ko(i);
                            Uo({ lineWise: !0, text: t.text }), "cut" == e.type && i.operation(function() { i.setSelections(t.ranges, 0, Ra), i.replaceSelection("", null, "cut") }) } if (e.clipboardData) { e.clipboardData.clearData(); var n = Ys.text.join("\n"); if (e.clipboardData.setData("Text", n), e.clipboardData.getData("Text") == n) return void e.preventDefault() } var a = Xo(),
                            s = a.firstChild;
                        i.display.lineSpace.insertBefore(a, i.display.lineSpace.firstChild), s.value = Ys.text.join("\n"); var l = document.activeElement;
                        Na(s), setTimeout(function() { i.display.lineSpace.removeChild(a), l.focus(), l == o && r.showPrimarySelection() }, 50) } } var n = this,
                    r = this,
                    i = r.cm,
                    o = r.div = e.lineDiv;
                Yo(o, i.options.spellcheck), Xa(o, "paste", function(e) { Ae(i, e) || Go(e, i) || pa <= 11 && setTimeout(hr(i, function() { return n.updateFromDOM() }), 20) }), Xa(o, "compositionstart", function(e) { n.composing = { data: e.data, done: !1 } }), Xa(o, "compositionupdate", function(e) { n.composing || (n.composing = { data: e.data, done: !1 }) }), Xa(o, "compositionend", function(e) { n.composing && (e.data != n.composing.data && n.readFromDOMSoon(), n.composing.done = !0) }), Xa(o, "touchstart", function() { return r.forceCompositionEnd() }), Xa(o, "input", function() { n.composing || n.readFromDOMSoon() }), Xa(o, "copy", t), Xa(o, "cut", t) }, Js.prototype.prepareSelection = function() { var e = Mn(this.cm, !1); return e.focus = this.cm.state.focused, e }, Js.prototype.showSelection = function(e, t) { e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e)) }, Js.prototype.showPrimarySelection = function() { var e = window.getSelection(),
                    t = this.cm,
                    n = t.doc.sel.primary(),
                    r = n.from(),
                    i = n.to(); if (t.display.viewTo == t.display.viewFrom || r.line >= t.display.viewTo || i.line < t.display.viewFrom) return void e.removeAllRanges(); var o = ra(t, e.anchorNode, e.anchorOffset),
                    a = ra(t, e.focusNode, e.focusOffset); if (!o || o.bad || !a || a.bad || 0 != D(B(o, a), r) || 0 != D(R(o, a), i)) { var s = t.display.view,
                        l = r.line >= t.display.viewFrom && Qo(t, r) || { node: s[0].measure.map[2], offset: 0 },
                        c = i.line < t.display.viewTo && Qo(t, i); if (!c) { var u = s[s.length - 1].measure,
                            d = u.maps ? u.maps[u.maps.length - 1] : u.map;
                        c = { node: d[d.length - 1], offset: d[d.length - 2] - d[d.length - 3] } } if (!l || !c) return void e.removeAllRanges(); var f, h = e.rangeCount && e.getRangeAt(0); try { f = ja(l.node, l.offset, c.offset, c.node) } catch (p) {} f && (!ca && t.state.focused ? (e.collapse(l.node, l.offset), f.collapsed || (e.removeAllRanges(), e.addRange(f))) : (e.removeAllRanges(), e.addRange(f)), h && null == e.anchorNode ? e.addRange(h) : ca && this.startGracePeriod()), this.rememberSelection() } }, Js.prototype.startGracePeriod = function() { var e = this;
                clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function() { e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function() { return e.cm.curOp.selectionChanged = !0 }) }, 20) }, Js.prototype.showMultipleSelections = function(e) { n(this.cm.display.cursorDiv, e.cursors), n(this.cm.display.selectionDiv, e.selection) }, Js.prototype.rememberSelection = function() { var e = window.getSelection();
                this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset }, Js.prototype.selectionInEditor = function() { var e = window.getSelection(); if (!e.rangeCount) return !1; var t = e.getRangeAt(0).commonAncestorContainer; return o(this.div, t) }, Js.prototype.focus = function() { "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() || this.showSelection(this.prepareSelection(), !0), this.div.focus()) }, Js.prototype.blur = function() { this.div.blur() }, Js.prototype.getField = function() { return this.div }, Js.prototype.supportsTouch = function() { return !0 }, Js.prototype.receivedFocus = function() {
                function e() { t.cm.state.focused && (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, e)) } var t = this;
                this.selectionInEditor() ? this.pollSelection() : fr(this.cm, function() { return t.cm.curOp.selectionChanged = !0 }), this.polling.set(this.cm.options.pollInterval, e) }, Js.prototype.selectionChanged = function() { var e = window.getSelection(); return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset }, Js.prototype.pollSelection = function() { if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) { var e = window.getSelection(),
                        t = this.cm; if (Ca && va && this.cm.options.gutters.length && ea(e.anchorNode)) return this.cm.triggerOnKeyDown({ type: "keydown", keyCode: 8, preventDefault: Math.abs }), this.blur(), void this.focus(); if (!this.composing) { this.rememberSelection(); var n = ra(t, e.anchorNode, e.anchorOffset),
                            r = ra(t, e.focusNode, e.focusOffset);
                        n && r && fr(t, function() { bi(t.doc, Rr(n, r), Ra), (n.bad || r.bad) && (t.curOp.selectionChanged = !0) }) } } }, Js.prototype.pollContent = function() { null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null); var e = this.cm,
                    t = e.display,
                    n = e.doc.sel.primary(),
                    r = n.from(),
                    i = n.to(); if (0 == r.ch && r.line > e.firstLine() && (r = I(r.line - 1, T(e.doc, r.line - 1).length)), i.ch == T(e.doc, i.line).text.length && i.line < e.lastLine() && (i = I(i.line + 1, 0)), r.line < t.viewFrom || i.line > t.viewTo - 1) return !1; var o, a, s;
                r.line == t.viewFrom || 0 == (o = Ln(e, r.line)) ? (a = A(t.view[0].line), s = t.view[0].node) : (a = A(t.view[o].line), s = t.view[o - 1].node.nextSibling); var l, c, u = Ln(e, i.line); if (u == t.view.length - 1 ? (l = t.viewTo - 1, c = t.lineDiv.lastChild) : (l = A(t.view[u + 1].line) - 1, c = t.view[u + 1].node.previousSibling), !s) return !1; for (var d = e.doc.splitLines(na(e, s, c, a, l)), f = M(e.doc, I(a, 0), I(l, T(e.doc, l).text.length)); d.length > 1 && f.length > 1;)
                    if (m(d) == m(f)) d.pop(), f.pop(), l--;
                    else { if (d[0] != f[0]) break;
                        d.shift(), f.shift(), a++ }
                for (var h = 0, p = 0, g = d[0], v = f[0], y = Math.min(g.length, v.length); h < y && g.charCodeAt(h) == v.charCodeAt(h);) ++h; for (var b = m(d), x = m(f), w = Math.min(b.length - (1 == d.length ? h : 0), x.length - (1 == f.length ? h : 0)); p < w && b.charCodeAt(b.length - p - 1) == x.charCodeAt(x.length - p - 1);) ++p; if (1 == d.length && 1 == f.length && a == r.line)
                    for (; h && h > r.ch && b.charCodeAt(b.length - p - 1) == x.charCodeAt(x.length - p - 1);) h--, p++;
                d[d.length - 1] = b.slice(0, b.length - p).replace(/^\u200b+/, ""), d[0] = d[0].slice(h).replace(/\u200b+$/, ""); var k = I(a, h),
                    C = I(l, f.length ? m(f).length - p : 0); return d.length > 1 || d[0] || D(k, C) ? (Ii(e.doc, d, k, C, "+input"), !0) : void 0 }, Js.prototype.ensurePolled = function() { this.forceCompositionEnd() }, Js.prototype.reset = function() { this.forceCompositionEnd() }, Js.prototype.forceCompositionEnd = function() { this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus()) }, Js.prototype.readFromDOMSoon = function() { var e = this;
                null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout(function() { if (e.readDOMTimeout = null, e.composing) { if (!e.composing.done) return;
                        e.composing = null } e.updateFromDOM() }, 80)) }, Js.prototype.updateFromDOM = function() { var e = this;!this.cm.isReadOnly() && this.pollContent() || fr(this.cm, function() { return gr(e.cm) }) }, Js.prototype.setUneditable = function(e) { e.contentEditable = "false" }, Js.prototype.onKeyPress = function(e) { 0 != e.charCode && (e.preventDefault(), this.cm.isReadOnly() || hr(this.cm, qo)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0)) }, Js.prototype.readOnlyChanged = function(e) { this.div.contentEditable = String("nocursor" != e) }, Js.prototype.onContextMenu = function() {}, Js.prototype.resetPosition = function() {}, Js.prototype.needsContentAttribute = !0;
            var Zs = function(e) { this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new Pa, this.hasSelection = !1, this.composing = null };
            Zs.prototype.init = function(e) {
                function t(e) { if (!Ae(i, e)) { if (i.somethingSelected()) Uo({ lineWise: !1, text: i.getSelections() });
                        else { if (!i.options.lineWiseCopyCut) return; var t = Ko(i);
                            Uo({ lineWise: !0, text: t.text }), "cut" == e.type ? i.setSelections(t.ranges, null, Ra) : (r.prevInput = "", a.value = t.text.join("\n"), Na(a)) } "cut" == e.type && (i.state.cutIncoming = !0) } } var n = this,
                    r = this,
                    i = this.cm,
                    o = this.wrapper = Xo(),
                    a = this.textarea = o.firstChild;
                e.wrapper.insertBefore(o, e.wrapper.firstChild), ka && (a.style.width = "0px"), Xa(a, "input", function() { ha && pa >= 9 && n.hasSelection && (n.hasSelection = null), r.poll() }), Xa(a, "paste", function(e) { Ae(i, e) || Go(e, i) || (i.state.pasteIncoming = !0, r.fastPoll()) }), Xa(a, "cut", t), Xa(a, "copy", t), Xa(e.scroller, "paste", function(t) { Rt(e, t) || Ae(i, t) || (i.state.pasteIncoming = !0, r.focus()) }), Xa(e.lineSpace, "selectstart", function(t) { Rt(e, t) || Ie(t) }), Xa(a, "compositionstart", function() { var e = i.getCursor("from");
                    r.composing && r.composing.range.clear(), r.composing = { start: e, range: i.markText(e, i.getCursor("to"), { className: "CodeMirror-composing" }) } }), Xa(a, "compositionend", function() { r.composing && (r.poll(), r.composing.range.clear(), r.composing = null) }) }, Zs.prototype.prepareSelection = function() { var e = this.cm,
                    t = e.display,
                    n = e.doc,
                    r = Mn(e); if (e.options.moveInputWithCursor) { var i = fn(e, n.sel.primary().head, "div"),
                        o = t.wrapper.getBoundingClientRect(),
                        a = t.lineDiv.getBoundingClientRect();
                    r.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + a.top - o.top)), r.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + a.left - o.left)) } return r }, Zs.prototype.showSelection = function(e) { var t = this.cm,
                    r = t.display;
                n(r.cursorDiv, e.cursors), n(r.selectionDiv, e.selection), null != e.teTop && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px") }, Zs.prototype.reset = function(e) { if (!this.contextMenuPending && !this.composing) { var t = this.cm; if (t.somethingSelected()) { this.prevInput = ""; var n = t.getSelection();
                        this.textarea.value = n, t.state.focused && Na(this.textarea), ha && pa >= 9 && (this.hasSelection = n) } else e || (this.prevInput = this.textarea.value = "", ha && pa >= 9 && (this.hasSelection = null)) } }, Zs.prototype.getField = function() { return this.textarea }, Zs.prototype.supportsTouch = function() { return !1 }, Zs.prototype.focus = function() { if ("nocursor" != this.cm.options.readOnly && (!Sa || a() != this.textarea)) try { this.textarea.focus() } catch (e) {} }, Zs.prototype.blur = function() { this.textarea.blur() }, Zs.prototype.resetPosition = function() { this.wrapper.style.top = this.wrapper.style.left = 0 }, Zs.prototype.receivedFocus = function() { this.slowPoll() }, Zs.prototype.slowPoll = function() { var e = this;
                this.pollingFast || this.polling.set(this.cm.options.pollInterval, function() { e.poll(), e.cm.state.focused && e.slowPoll() }) }, Zs.prototype.fastPoll = function() {
                function e() { var r = n.poll();
                    r || t ? (n.pollingFast = !1, n.slowPoll()) : (t = !0, n.polling.set(60, e)) } var t = !1,
                    n = this;
                n.pollingFast = !0, n.polling.set(20, e) }, Zs.prototype.poll = function() { var e = this,
                    t = this.cm,
                    n = this.textarea,
                    r = this.prevInput; if (this.contextMenuPending || !t.state.focused || Qa(n) && !r && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq) return !1; var i = n.value; if (i == r && !t.somethingSelected()) return !1; if (ha && pa >= 9 && this.hasSelection === i || _a && /[\uf700-\uf7ff]/.test(i)) return t.display.input.reset(), !1; if (t.doc.sel == t.display.selForContextMenu) { var o = i.charCodeAt(0); if (8203 != o || r || (r = "â€‹"), 8666 == o) return this.reset(), this.cm.execCommand("undo") } for (var a = 0, s = Math.min(r.length, i.length); a < s && r.charCodeAt(a) == i.charCodeAt(a);) ++a; return fr(t, function() { qo(t, i.slice(a), r.length - a, null, e.composing ? "*compose" : null), i.length > 1e3 || i.indexOf("\n") > -1 ? n.value = e.prevInput = "" : e.prevInput = i, e.composing && (e.composing.range.clear(), e.composing.range = t.markText(e.composing.start, t.getCursor("to"), { className: "CodeMirror-composing" })) }), !0 }, Zs.prototype.ensurePolled = function() { this.pollingFast && this.poll() && (this.pollingFast = !1) }, Zs.prototype.onKeyPress = function() { ha && pa >= 9 && (this.hasSelection = null), this.fastPoll() }, Zs.prototype.onContextMenu = function(e) {
                function t() { if (null != a.selectionStart) { var e = i.somethingSelected(),
                            t = "â€‹" + (e ? a.value : "");
                        a.value = "â‡š", a.value = t, r.prevInput = e ? "" : "â€‹", a.selectionStart = 1, a.selectionEnd = t.length, o.selForContextMenu = i.doc.sel } }

                function n() { if (r.contextMenuPending = !1, r.wrapper.style.cssText = d, a.style.cssText = u, ha && pa < 9 && o.scrollbars.setScrollTop(o.scroller.scrollTop = l), null != a.selectionStart) {
                        (!ha || ha && pa < 9) && t(); var e = 0,
                            n = function() { o.selForContextMenu == i.doc.sel && 0 == a.selectionStart && a.selectionEnd > 0 && "â€‹" == r.prevInput ? hr(i, Ti)(i) : e++ < 10 ? o.detectingSelectAll = setTimeout(n, 500) : (o.selForContextMenu = null, o.input.reset()) };
                        o.detectingSelectAll = setTimeout(n, 200) } } var r = this,
                    i = r.cm,
                    o = i.display,
                    a = r.textarea,
                    s = _n(i, e),
                    l = o.scroller.scrollTop; if (s && !ya) { var c = i.options.resetSelectionOnContextMenu;
                    c && i.doc.sel.contains(s) == -1 && hr(i, bi)(i.doc, Rr(s), Ra); var u = a.style.cssText,
                        d = r.wrapper.style.cssText;
                    r.wrapper.style.cssText = "position: absolute"; var f = r.wrapper.getBoundingClientRect();
                    a.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - f.top - 5) + "px; left: " + (e.clientX - f.left - 5) + "px;\n      z-index: 1000; background: " + (ha ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);"; var h; if (ma && (h = window.scrollY), o.input.focus(), ma && window.scrollTo(null, h), o.input.reset(), i.somethingSelected() || (a.value = r.prevInput = " "), r.contextMenuPending = !0, o.selForContextMenu = i.doc.sel, clearTimeout(o.detectingSelectAll), ha && pa >= 9 && t(), Aa) { ze(e); var p = function() { je(window, "mouseup", p), setTimeout(n, 20) };
                        Xa(window, "mouseup", p) } else setTimeout(n, 50) } }, Zs.prototype.readOnlyChanged = function(e) { e || this.reset(), this.textarea.disabled = "nocursor" == e }, Zs.prototype.setUneditable = function() {}, Zs.prototype.needsContentAttribute = !1, Fo(Ho), Xs(Ho);
            var Qs = "iter insert remove copy getEditor constructor".split(" ");
            for (var el in Os.prototype) Os.prototype.hasOwnProperty(el) && f(Qs, el) < 0 && (Ho.prototype[el] = function(e) { return function() { return e.apply(this.doc, arguments) } }(Os.prototype[el]));
            return Pe(Os), Ho.inputStyles = { textarea: Zs, contenteditable: Js }, Ho.defineMode = function(e) { Ho.defaults.mode || "null" == e || (Ho.defaults.mode = e), Ue.apply(this, arguments) }, Ho.defineMIME = qe, Ho.defineMode("null", function() { return { token: function(e) { return e.skipToEnd() } } }), Ho.defineMIME("text/plain", "null"), Ho.defineExtension = function(e, t) { Ho.prototype[e] = t }, Ho.defineDocExtension = function(e, t) { Os.prototype[e] = t }, Ho.fromTextArea = oa, aa(Ho), Ho.version = "5.28.0", Ho
        })
    }, {}],
    15: [function(e, t, n) {
        ! function(r) { "object" == typeof n && "object" == typeof t ? r(e("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], r) : r(CodeMirror) }(function(e) {
            "use strict";

            function t(e) { for (var t = {}, n = 0; n < e.length; ++n) t[e[n].toLowerCase()] = !0; return t }

            function n(e, t) { for (var n, r = !1; null != (n = e.next());) { if (r && "/" == n) { t.tokenize = null; break } r = "*" == n } return ["comment", "comment"] } e.defineMode("css", function(t, n) {
                function r(e, t) { return p = t, e }

                function i(e, t) { var n = e.next(); if (v[n]) { var i = v[n](e, t); if (i !== !1) return i } return "@" == n ? (e.eatWhile(/[\w\\\-]/), r("def", e.current())) : "=" == n || ("~" == n || "|" == n) && e.eat("=") ? r(null, "compare") : '"' == n || "'" == n ? (t.tokenize = o(n), t.tokenize(e, t)) : "#" == n ? (e.eatWhile(/[\w\\\-]/), r("atom", "hash")) : "!" == n ? (e.match(/^\s*\w*/), r("keyword", "important")) : /\d/.test(n) || "." == n && e.eat(/\d/) ? (e.eatWhile(/[\w.%]/), r("number", "unit")) : "-" !== n ? /[,+>*\/]/.test(n) ? r(null, "select-op") : "." == n && e.match(/^-?[_a-z][_a-z0-9-]*/i) ? r("qualifier", "qualifier") : /[:;{}\[\]\(\)]/.test(n) ? r(null, n) : "u" == n && e.match(/rl(-prefix)?\(/) || "d" == n && e.match("omain(") || "r" == n && e.match("egexp(") ? (e.backUp(1), t.tokenize = a, r("property", "word")) : /[\w\\\-]/.test(n) ? (e.eatWhile(/[\w\\\-]/), r("property", "word")) : r(null, null) : /[\d.]/.test(e.peek()) ? (e.eatWhile(/[\w.%]/), r("number", "unit")) : e.match(/^-[\w\\\-]+/) ? (e.eatWhile(/[\w\\\-]/), e.match(/^\s*:/, !1) ? r("variable-2", "variable-definition") : r("variable-2", "variable")) : e.match(/^\w+-/) ? r("meta", "meta") : void 0 }

                function o(e) { return function(t, n) { for (var i, o = !1; null != (i = t.next());) { if (i == e && !o) { ")" == e && t.backUp(1); break } o = !o && "\\" == i } return (i == e || !o && ")" != e) && (n.tokenize = null), r("string", "string") } }

                function a(e, t) { return e.next(), e.match(/\s*[\"\')]/, !1) ? t.tokenize = null : t.tokenize = o(")"), r(null, "(") }

                function s(e, t, n) { this.type = e, this.indent = t, this.prev = n }

                function l(e, t, n, r) { return e.context = new s(n, t.indentation() + (r === !1 ? 0 : g), e.context), n }

                function c(e) { return e.context.prev && (e.context = e.context.prev), e.context.type }

                function u(e, t, n) { return A[n.context.type](e, t, n) }

                function d(e, t, n, r) { for (var i = r || 1; i > 0; i--) n.context = n.context.prev; return u(e, t, n) }

                function f(e) { var t = e.current().toLowerCase();
                    m = T.hasOwnProperty(t) ? "atom" : L.hasOwnProperty(t) ? "keyword" : "variable" } var h = n.inline;
                n.propertyKeywords || (n = e.resolveMode("text/css")); var p, m, g = t.indentUnit,
                    v = n.tokenHooks,
                    y = n.documentTypes || {},
                    b = n.mediaTypes || {},
                    x = n.mediaFeatures || {},
                    w = n.mediaValueKeywords || {},
                    k = n.propertyKeywords || {},
                    C = n.nonStandardPropertyKeywords || {},
                    S = n.fontProperties || {},
                    _ = n.counterDescriptors || {},
                    L = n.colorKeywords || {},
                    T = n.valueKeywords || {},
                    M = n.allowNested,
                    j = n.lineComment,
                    O = n.supportsAtComponent === !0,
                    A = {}; return A.top = function(e, t, n) { if ("{" == e) return l(n, t, "block"); if ("}" == e && n.context.prev) return c(n); if (O && /@component/.test(e)) return l(n, t, "atComponentBlock"); if (/^@(-moz-)?document$/.test(e)) return l(n, t, "documentTypes"); if (/^@(media|supports|(-moz-)?document|import)$/.test(e)) return l(n, t, "atBlock"); if (/^@(font-face|counter-style)/.test(e)) return n.stateArg = e, "restricted_atBlock_before"; if (/^@(-(moz|ms|o|webkit)-)?keyframes$/.test(e)) return "keyframes"; if (e && "@" == e.charAt(0)) return l(n, t, "at"); if ("hash" == e) m = "builtin";
                    else if ("word" == e) m = "tag";
                    else { if ("variable-definition" == e) return "maybeprop"; if ("interpolation" == e) return l(n, t, "interpolation"); if (":" == e) return "pseudo"; if (M && "(" == e) return l(n, t, "parens") } return n.context.type }, A.block = function(e, t, n) { if ("word" == e) { var r = t.current().toLowerCase(); return k.hasOwnProperty(r) ? (m = "property", "maybeprop") : C.hasOwnProperty(r) ? (m = "string-2", "maybeprop") : M ? (m = t.match(/^\s*:(?:\s|$)/, !1) ? "property" : "tag", "block") : (m += " error", "maybeprop") } return "meta" == e ? "block" : M || "hash" != e && "qualifier" != e ? A.top(e, t, n) : (m = "error", "block") }, A.maybeprop = function(e, t, n) { return ":" == e ? l(n, t, "prop") : u(e, t, n) }, A.prop = function(e, t, n) { if (";" == e) return c(n); if ("{" == e && M) return l(n, t, "propBlock"); if ("}" == e || "{" == e) return d(e, t, n); if ("(" == e) return l(n, t, "parens"); if ("hash" != e || /^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(t.current())) { if ("word" == e) f(t);
                        else if ("interpolation" == e) return l(n, t, "interpolation") } else m += " error"; return "prop" }, A.propBlock = function(e, t, n) { return "}" == e ? c(n) : "word" == e ? (m = "property", "maybeprop") : n.context.type }, A.parens = function(e, t, n) { return "{" == e || "}" == e ? d(e, t, n) : ")" == e ? c(n) : "(" == e ? l(n, t, "parens") : "interpolation" == e ? l(n, t, "interpolation") : ("word" == e && f(t), "parens") }, A.pseudo = function(e, t, n) { return "meta" == e ? "pseudo" : "word" == e ? (m = "variable-3", n.context.type) : u(e, t, n) }, A.documentTypes = function(e, t, n) { return "word" == e && y.hasOwnProperty(t.current()) ? (m = "tag", n.context.type) : A.atBlock(e, t, n) }, A.atBlock = function(e, t, n) { if ("(" == e) return l(n, t, "atBlock_parens"); if ("}" == e || ";" == e) return d(e, t, n); if ("{" == e) return c(n) && l(n, t, M ? "block" : "top"); if ("interpolation" == e) return l(n, t, "interpolation"); if ("word" == e) { var r = t.current().toLowerCase();
                        m = "only" == r || "not" == r || "and" == r || "or" == r ? "keyword" : b.hasOwnProperty(r) ? "attribute" : x.hasOwnProperty(r) ? "property" : w.hasOwnProperty(r) ? "keyword" : k.hasOwnProperty(r) ? "property" : C.hasOwnProperty(r) ? "string-2" : T.hasOwnProperty(r) ? "atom" : L.hasOwnProperty(r) ? "keyword" : "error" } return n.context.type }, A.atComponentBlock = function(e, t, n) { return "}" == e ? d(e, t, n) : "{" == e ? c(n) && l(n, t, M ? "block" : "top", !1) : ("word" == e && (m = "error"), n.context.type) }, A.atBlock_parens = function(e, t, n) { return ")" == e ? c(n) : "{" == e || "}" == e ? d(e, t, n, 2) : A.atBlock(e, t, n) }, A.restricted_atBlock_before = function(e, t, n) { return "{" == e ? l(n, t, "restricted_atBlock") : "word" == e && "@counter-style" == n.stateArg ? (m = "variable", "restricted_atBlock_before") : u(e, t, n) }, A.restricted_atBlock = function(e, t, n) { return "}" == e ? (n.stateArg = null, c(n)) : "word" == e ? (m = "@font-face" == n.stateArg && !S.hasOwnProperty(t.current().toLowerCase()) || "@counter-style" == n.stateArg && !_.hasOwnProperty(t.current().toLowerCase()) ? "error" : "property", "maybeprop") : "restricted_atBlock" }, A.keyframes = function(e, t, n) { return "word" == e ? (m = "variable", "keyframes") : "{" == e ? l(n, t, "top") : u(e, t, n) }, A.at = function(e, t, n) { return ";" == e ? c(n) : "{" == e || "}" == e ? d(e, t, n) : ("word" == e ? m = "tag" : "hash" == e && (m = "builtin"), "at") }, A.interpolation = function(e, t, n) { return "}" == e ? c(n) : "{" == e || ";" == e ? d(e, t, n) : ("word" == e ? m = "variable" : "variable" != e && "(" != e && ")" != e && (m = "error"), "interpolation") }, { startState: function(e) { return { tokenize: null, state: h ? "block" : "top", stateArg: null, context: new s(h ? "block" : "top", e || 0, null) } }, token: function(e, t) { if (!t.tokenize && e.eatSpace()) return null; var n = (t.tokenize || i)(e, t); return n && "object" == typeof n && (p = n[1], n = n[0]), m = n, t.state = A[t.state](p, e, t), m }, indent: function(e, t) { var n = e.context,
                            r = t && t.charAt(0),
                            i = n.indent; return "prop" != n.type || "}" != r && ")" != r || (n = n.prev), n.prev && ("}" != r || "block" != n.type && "top" != n.type && "interpolation" != n.type && "restricted_atBlock" != n.type ? (")" != r || "parens" != n.type && "atBlock_parens" != n.type) && ("{" != r || "at" != n.type && "atBlock" != n.type) || (i = Math.max(0, n.indent - g)) : (n = n.prev, i = n.indent)), i }, electricChars: "}", blockCommentStart: "/*", blockCommentEnd: "*/", lineComment: j, fold: "brace" } });
            var r = ["domain", "regexp", "url", "url-prefix"],
                i = t(r),
                o = ["all", "aural", "braille", "handheld", "print", "projection", "screen", "tty", "tv", "embossed"],
                a = t(o),
                s = ["width", "min-width", "max-width", "height", "min-height", "max-height", "device-width", "min-device-width", "max-device-width", "device-height", "min-device-height", "max-device-height", "aspect-ratio", "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio", "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color", "max-color", "color-index", "min-color-index", "max-color-index", "monochrome", "min-monochrome", "max-monochrome", "resolution", "min-resolution", "max-resolution", "scan", "grid", "orientation", "device-pixel-ratio", "min-device-pixel-ratio", "max-device-pixel-ratio", "pointer", "any-pointer", "hover", "any-hover"],
                l = t(s),
                c = ["landscape", "portrait", "none", "coarse", "fine", "on-demand", "hover", "interlace", "progressive"],
                u = t(c),
                d = ["align-content", "align-items", "align-self", "alignment-adjust", "alignment-baseline", "anchor-point", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "appearance", "azimuth", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "baseline-shift", "binding", "bleed", "bookmark-label", "bookmark-level", "bookmark-state", "bookmark-target", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "color", "color-profile", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "crop", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "dominant-baseline", "drop-initial-after-adjust", "drop-initial-after-align", "drop-initial-before-adjust", "drop-initial-before-align", "drop-initial-size", "drop-initial-value", "elevation", "empty-cells", "fit", "fit-position", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "float-offset", "flow-from", "flow-into", "font", "font-feature-settings", "font-family", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-weight", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-gap", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-gap", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "inline-box-align", "justify-content", "justify-items", "justify-self", "left", "letter-spacing", "line-break", "line-height", "line-stacking", "line-stacking-ruby", "line-stacking-shift", "line-stacking-strategy", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "marquee-direction", "marquee-loop", "marquee-play-count", "marquee-speed", "marquee-style", "max-height", "max-width", "min-height", "min-width", "move-to", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page", "page-break-after", "page-break-before", "page-break-inside", "page-policy", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pitch", "pitch-range", "place-content", "place-items", "place-self", "play-during", "position", "presentation-level", "punctuation-trim", "quotes", "region-break-after", "region-break-before", "region-break-inside", "region-fragment", "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness", "right", "rotation", "rotation-point", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span", "shape-image-threshold", "shape-inside", "shape-margin", "shape-outside", "size", "speak", "speak-as", "speak-header", "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set", "tab-size", "table-layout", "target", "target-name", "target-new", "target-position", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-skip", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-height", "text-indent", "text-justify", "text-outline", "text-overflow", "text-shadow", "text-size-adjust", "text-space-collapse", "text-transform", "text-underline-position", "text-wrap", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "user-select", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "z-index", "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color", "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events", "color-interpolation", "color-interpolation-filters", "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering", "marker", "marker-end", "marker-mid", "marker-start", "shape-rendering", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering", "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal", "glyph-orientation-vertical", "text-anchor", "writing-mode"],
                f = t(d),
                h = ["scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color", "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color", "scrollbar-3d-light-color", "scrollbar-track-color", "shape-inside", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "zoom"],
                p = t(h),
                m = ["font-family", "src", "unicode-range", "font-variant", "font-feature-settings", "font-stretch", "font-weight", "font-style"],
                g = t(m),
                v = ["additive-symbols", "fallback", "negative", "pad", "prefix", "range", "speak-as", "suffix", "symbols", "system"],
                y = t(v),
                b = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"],
                x = t(b),
                w = ["above", "absolute", "activeborder", "additive", "activecaption", "afar", "after-white-space", "ahead", "alias", "all", "all-scroll", "alphabetic", "alternate", "always", "amharic", "amharic-abegede", "antialiased", "appworkspace", "arabic-indic", "armenian", "asterisks", "attr", "auto", "auto-flow", "avoid", "avoid-column", "avoid-page", "avoid-region", "background", "backwards", "baseline", "below", "bidi-override", "binary", "bengali", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box", "both", "bottom", "break", "break-all", "break-word", "bullets", "button", "button-bevel", "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "calc", "cambodian", "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret", "cell", "center", "checkbox", "circle", "cjk-decimal", "cjk-earthly-branch", "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote", "col-resize", "collapse", "color", "color-burn", "color-dodge", "column", "column-reverse", "compact", "condensed", "contain", "content", "contents", "content-box", "context-menu", "continuous", "copy", "counter", "counters", "cover", "crop", "cross", "crosshair", "currentcolor", "cursive", "cyclic", "darken", "dashed", "decimal", "decimal-leading-zero", "default", "default-button", "dense", "destination-atop", "destination-in", "destination-out", "destination-over", "devanagari", "difference", "disc", "discard", "disclosure-closed", "disclosure-open", "document", "dot-dash", "dot-dot-dash", "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out", "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede", "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er", "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er", "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et", "ethiopic-halehame-gez", "ethiopic-halehame-om-et", "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et", "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig", "ethiopic-numeric", "ew-resize", "exclusion", "expanded", "extends", "extra-condensed", "extra-expanded", "fantasy", "fast", "fill", "fixed", "flat", "flex", "flex-end", "flex-start", "footnotes", "forwards", "from", "geometricPrecision", "georgian", "graytext", "grid", "groove", "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hard-light", "hebrew", "help", "hidden", "hide", "higher", "highlight", "highlighttext", "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "hue", "icon", "ignore", "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite", "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis", "inline-block", "inline-flex", "inline-grid", "inline-table", "inset", "inside", "intrinsic", "invert", "italic", "japanese-formal", "japanese-informal", "justify", "kannada", "katakana", "katakana-iroha", "keep-all", "khmer", "korean-hangul-formal", "korean-hanja-formal", "korean-hanja-informal", "landscape", "lao", "large", "larger", "left", "level", "lighter", "lighten", "line-through", "linear", "linear-gradient", "lines", "list-item", "listbox", "listitem", "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian", "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian", "lower-roman", "lowercase", "ltr", "luminosity", "malayalam", "match", "matrix", "matrix3d", "media-controls-background", "media-current-time-display", "media-fullscreen-button", "media-mute-button", "media-play-button", "media-return-to-realtime-button", "media-rewind-button", "media-seek-back-button", "media-seek-forward-button", "media-slider", "media-sliderthumb", "media-time-remaining-display", "media-volume-slider", "media-volume-slider-container", "media-volume-sliderthumb", "medium", "menu", "menulist", "menulist-button", "menulist-text", "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic", "mix", "mongolian", "monospace", "move", "multiple", "multiply", "myanmar", "n-resize", "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop", "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap", "ns-resize", "numbers", "numeric", "nw-resize", "nwse-resize", "oblique", "octal", "opacity", "open-quote", "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset", "outside", "outside-shape", "overlay", "overline", "padding", "padding-box", "painted", "page", "paused", "persian", "perspective", "plus-darker", "plus-lighter", "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d", "progress", "push-button", "radial-gradient", "radio", "read-only", "read-write", "read-write-plaintext-only", "rectangle", "region", "relative", "repeat", "repeating-linear-gradient", "repeating-radial-gradient", "repeat-x", "repeat-y", "reset", "reverse", "rgb", "rgba", "ridge", "right", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "round", "row", "row-resize", "row-reverse", "rtl", "run-in", "running", "s-resize", "sans-serif", "saturation", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "screen", "scroll", "scrollbar", "scroll-position", "se-resize", "searchfield", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "self-start", "self-end", "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama", "simp-chinese-formal", "simp-chinese-informal", "single", "skew", "skewX", "skewY", "skip-white-space", "slide", "slider-horizontal", "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow", "small", "small-caps", "small-caption", "smaller", "soft-light", "solid", "somali", "source-atop", "source-in", "source-out", "source-over", "space", "space-around", "space-between", "space-evenly", "spell-out", "square", "square-button", "start", "static", "status-bar", "stretch", "stroke", "sub", "subpixel-antialiased", "super", "sw-resize", "symbolic", "symbols", "system-ui", "table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group", "tamil", "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai", "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight", "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er", "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top", "trad-chinese-formal", "trad-chinese-informal", "transform", "translate", "translate3d", "translateX", "translateY", "translateZ", "transparent", "ultra-condensed", "ultra-expanded", "underline", "unset", "up", "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal", "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url", "var", "vertical", "vertical-text", "visible", "visibleFill", "visiblePainted", "visibleStroke", "visual", "w-resize", "wait", "wave", "wider", "window", "windowframe", "windowtext", "words", "wrap", "wrap-reverse", "x-large", "x-small", "xor", "xx-large", "xx-small"],
                k = t(w),
                C = r.concat(o).concat(s).concat(c).concat(d).concat(h).concat(b).concat(w);
            e.registerHelper("hintWords", "css", C), e.defineMIME("text/css", { documentTypes: i, mediaTypes: a, mediaFeatures: l, mediaValueKeywords: u, propertyKeywords: f, nonStandardPropertyKeywords: p, fontProperties: g, counterDescriptors: y, colorKeywords: x, valueKeywords: k, tokenHooks: { "/": function(e, t) { return !!e.eat("*") && (t.tokenize = n, n(e, t)) } }, name: "css" }), e.defineMIME("text/x-scss", { mediaTypes: a, mediaFeatures: l, mediaValueKeywords: u, propertyKeywords: f, nonStandardPropertyKeywords: p, colorKeywords: x, valueKeywords: k, fontProperties: g, allowNested: !0, lineComment: "//", tokenHooks: { "/": function(e, t) { return e.eat("/") ? (e.skipToEnd(), ["comment", "comment"]) : e.eat("*") ? (t.tokenize = n, n(e, t)) : ["operator", "operator"] }, ":": function(e) { return !!e.match(/\s*\{/, !1) && [null, null] }, $: function(e) { return e.match(/^[\w-]+/), e.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"] }, "#": function(e) { return !!e.eat("{") && [null, "interpolation"] } }, name: "css", helperType: "scss" }), e.defineMIME("text/x-less", { mediaTypes: a, mediaFeatures: l, mediaValueKeywords: u, propertyKeywords: f, nonStandardPropertyKeywords: p, colorKeywords: x, valueKeywords: k, fontProperties: g, allowNested: !0, lineComment: "//", tokenHooks: { "/": function(e, t) { return e.eat("/") ? (e.skipToEnd(), ["comment", "comment"]) : e.eat("*") ? (t.tokenize = n, n(e, t)) : ["operator", "operator"] }, "@": function(e) { return e.eat("{") ? [null, "interpolation"] : !e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/, !1) && (e.eatWhile(/[\w\\\-]/), e.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"]) }, "&": function() { return ["atom", "atom"] } }, name: "css", helperType: "less" }), e.defineMIME("text/x-gss", { documentTypes: i, mediaTypes: a, mediaFeatures: l, propertyKeywords: f, nonStandardPropertyKeywords: p, fontProperties: g, counterDescriptors: y, colorKeywords: x, valueKeywords: k, supportsAtComponent: !0, tokenHooks: { "/": function(e, t) { return !!e.eat("*") && (t.tokenize = n, n(e, t)) } }, name: "css", helperType: "gss" })
        })
    }, { "../../lib/codemirror": 14 }],
    16: [function(e, t, n) {! function(r) { "object" == typeof n && "object" == typeof t ? r(e("../../lib/codemirror"), e("../markdown/markdown"), e("../../addon/mode/overlay")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../markdown/markdown", "../../addon/mode/overlay"], r) : r(CodeMirror) }(function(e) { "use strict"; var t = /^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?Â«Â»â€œâ€â€˜â€™]))/i;
            e.defineMode("gfm", function(n, r) {
                function i(e) { return e.code = !1, null } var o = 0,
                    a = { startState: function() { return { code: !1, codeBlock: !1, ateSpace: !1 } }, copyState: function(e) { return { code: e.code, codeBlock: e.codeBlock, ateSpace: e.ateSpace } }, token: function(e, n) { if (n.combineTokens = null, n.codeBlock) return e.match(/^```+/) ? (n.codeBlock = !1, null) : (e.skipToEnd(), null); if (e.sol() && (n.code = !1), e.sol() && e.match(/^```+/)) return e.skipToEnd(), n.codeBlock = !0, null; if ("`" === e.peek()) { e.next(); var i = e.pos;
                                e.eatWhile("`"); var a = 1 + e.pos - i; return n.code ? a === o && (n.code = !1) : (o = a, n.code = !0), null } if (n.code) return e.next(), null; if (e.eatSpace()) return n.ateSpace = !0, null; if ((e.sol() || n.ateSpace) && (n.ateSpace = !1, r.gitHubSpice !== !1)) { if (e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?:[a-f0-9]{7,40}\b)/)) return n.combineTokens = !0, "link"; if (e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/)) return n.combineTokens = !0, "link" } return e.match(t) && "](" != e.string.slice(e.start - 2, e.start) && (0 == e.start || /\W/.test(e.string.charAt(e.start - 1))) ? (n.combineTokens = !0, "link") : (e.next(), null) }, blankLine: i },
                    s = { taskLists: !0, fencedCodeBlocks: "```", strikethrough: !0, emoji: !0 }; for (var l in r) s[l] = r[l]; return s.name = "markdown", e.overlayMode(e.getMode(n, s), a) }, "markdown"), e.defineMIME("text/x-gfm", "gfm") }) }, { "../../addon/mode/overlay": 10, "../../lib/codemirror": 14, "../markdown/markdown": 18 }],
    17: [function(e, t, n) {! function(r) { "object" == typeof n && "object" == typeof t ? r(e("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], r) : r(CodeMirror) }(function(e) { "use strict";

            function t(e, t, n) { return /^(?:operator|sof|keyword c|case|new|export|default|[\[{}\(,;:]|=>)$/.test(t.lastType) || "quasi" == t.lastType && /\{\s*$/.test(e.string.slice(0, e.pos - (n || 0))) } e.defineMode("javascript", function(n, r) {
                function i(e) { for (var t, n = !1, r = !1; null != (t = e.next());) { if (!n) { if ("/" == t && !r) return; "[" == t ? r = !0 : r && "]" == t && (r = !1) } n = !n && "\\" == t } }

                function o(e, t, n) { return _e = e, Le = n, t }

                function a(e, n) { var r = e.next(); if ('"' == r || "'" == r) return n.tokenize = s(r), n.tokenize(e, n); if ("." == r && e.match(/^\d+(?:[eE][+\-]?\d+)?/)) return o("number", "number"); if ("." == r && e.match("..")) return o("spread", "meta"); if (/[\[\]{}\(\),;\:\.]/.test(r)) return o(r); if ("=" == r && e.eat(">")) return o("=>", "operator"); if ("0" == r && e.eat(/x/i)) return e.eatWhile(/[\da-f]/i), o("number", "number"); if ("0" == r && e.eat(/o/i)) return e.eatWhile(/[0-7]/i), o("number", "number"); if ("0" == r && e.eat(/b/i)) return e.eatWhile(/[01]/i), o("number", "number"); if (/\d/.test(r)) return e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/), o("number", "number"); if ("/" == r) return e.eat("*") ? (n.tokenize = l, l(e, n)) : e.eat("/") ? (e.skipToEnd(), o("comment", "comment")) : t(e, n, 1) ? (i(e), e.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/), o("regexp", "string-2")) : (e.eatWhile(Pe), o("operator", "operator", e.current())); if ("`" == r) return n.tokenize = c, c(e, n); if ("#" == r) return e.skipToEnd(), o("error", "error"); if (Pe.test(r)) return ">" == r && n.lexical && ">" == n.lexical.type || e.eatWhile(Pe), o("operator", "operator", e.current()); if (Ee.test(r)) { e.eatWhile(Ee); var a = e.current(); if ("." != n.lastType) { if (Ne.propertyIsEnumerable(a)) { var u = Ne[a]; return o(u.type, u.style, a) } if ("async" == a && e.match(/^\s*[\(\w]/, !1)) return o("async", "keyword", a) } return o("variable", "variable", a) } }

                function s(e) { return function(t, n) { var r, i = !1; if (je && "@" == t.peek() && t.match(Ie)) return n.tokenize = a, o("jsonld-keyword", "meta"); for (; null != (r = t.next()) && (r != e || i);) i = !i && "\\" == r; return i || (n.tokenize = a), o("string", "string") } }

                function l(e, t) { for (var n, r = !1; n = e.next();) { if ("/" == n && r) { t.tokenize = a; break } r = "*" == n } return o("comment", "comment") }

                function c(e, t) { for (var n, r = !1; null != (n = e.next());) { if (!r && ("`" == n || "$" == n && e.eat("{"))) { t.tokenize = a; break } r = !r && "\\" == n } return o("quasi", "string-2", e.current()) }

                function u(e, t) { t.fatArrowAt && (t.fatArrowAt = null); var n = e.string.indexOf("=>", e.start); if (!(n < 0)) { if (Ae) { var r = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start, n));
                            r && (n = r.index) } for (var i = 0, o = !1, a = n - 1; a >= 0; --a) { var s = e.string.charAt(a),
                                l = De.indexOf(s); if (l >= 0 && l < 3) { if (!i) {++a; break } if (0 == --i) { "(" == s && (o = !0); break } } else if (l >= 3 && l < 6) ++i;
                            else if (Ee.test(s)) o = !0;
                            else { if (/["'\/]/.test(s)) return; if (o && !i) {++a; break } } } o && !i && (t.fatArrowAt = a) } }

                function d(e, t, n, r, i, o) { this.indented = e, this.column = t, this.type = n, this.prev = i, this.info = o, null != r && (this.align = r) }

                function f(e, t) { for (var n = e.localVars; n; n = n.next)
                        if (n.name == t) return !0; for (var r = e.context; r; r = r.prev)
                        for (var n = r.vars; n; n = n.next)
                            if (n.name == t) return !0 }

                function h(e, t, n, r, i) { var o = e.cc; for (ze.state = e, ze.stream = i, ze.marked = null, ze.cc = o, ze.style = t, e.lexical.hasOwnProperty("align") || (e.lexical.align = !0);;) { var a = o.length ? o.pop() : Oe ? C : k; if (a(n, r)) { for (; o.length && o[o.length - 1].lex;) o.pop()(); return ze.marked ? ze.marked : "variable" == n && f(e, r) ? "variable-2" : t } } }

                function p() { for (var e = arguments.length - 1; e >= 0; e--) ze.cc.push(arguments[e]) }

                function m() { return p.apply(null, arguments), !0 }

                function g(e) {
                    function t(t) { for (var n = t; n; n = n.next)
                            if (n.name == e) return !0; return !1 } var n = ze.state; if (ze.marked = "def", n.context) { if (t(n.localVars)) return;
                        n.localVars = { name: e, next: n.localVars } } else { if (t(n.globalVars)) return;
                        r.globalVars && (n.globalVars = { name: e, next: n.globalVars }) } }

                function v() { ze.state.context = { prev: ze.state.context, vars: ze.state.localVars }, ze.state.localVars = Re }

                function y() { ze.state.localVars = ze.state.context.vars, ze.state.context = ze.state.context.prev }

                function b(e, t) { var n = function() { var n = ze.state,
                            r = n.indented; if ("stat" == n.lexical.type) r = n.lexical.indented;
                        else
                            for (var i = n.lexical; i && ")" == i.type && i.align; i = i.prev) r = i.indented;
                        n.lexical = new d(r, ze.stream.column(), e, null, n.lexical, t) }; return n.lex = !0, n }

                function x() { var e = ze.state;
                    e.lexical.prev && (")" == e.lexical.type && (e.indented = e.lexical.indented), e.lexical = e.lexical.prev) }

                function w(e) {
                    function t(n) { return n == e ? m() : ";" == e ? p() : m(t) } return t }

                function k(e, t) { return "var" == e ? m(b("vardef", t.length), Z, w(";"), x) : "keyword a" == e ? m(b("form"), _, k, x) : "keyword b" == e ? m(b("form"), k, x) : "{" == e ? m(b("}"), q, x) : ";" == e ? m() : "if" == e ? ("else" == ze.state.lexical.info && ze.state.cc[ze.state.cc.length - 1] == x && ze.state.cc.pop()(), m(b("form"), _, k, x, re)) : "function" == e ? m(ce) : "for" == e ? m(b("form"), ie, k, x) : "variable" == e ? Ae && "type" == t ? (ze.marked = "keyword", m(V, w("operator"), V, w(";"))) : m(b("stat"), z) : "switch" == e ? m(b("form"), _, w("{"), b("}", "switch"), q, x, x) : "case" == e ? m(C, w(":")) : "default" == e ? m(w(":")) : "catch" == e ? m(b("form"), v, w("("), ue, w(")"), k, x, y) : "class" == e ? m(b("form"), fe, x) : "export" == e ? m(b("stat"), ge, x) : "import" == e ? m(b("stat"), ye, x) : "module" == e ? m(b("form"), Q, w("{"), b("}"), q, x, x) : "async" == e ? m(k) : "@" == t ? m(C, k) : p(b("stat"), C, w(";"), x) }

                function C(e) { return L(e, !1) }

                function S(e) { return L(e, !0) }

                function _(e) { return "(" != e ? p() : m(b(")"), C, w(")"), x) }

                function L(e, t) { if (ze.state.fatArrowAt == ze.stream.start) { var n = t ? P : N; if ("(" == e) return m(v, b(")"), W(Q, ")"), x, w("=>"), n, y); if ("variable" == e) return p(v, Q, w("=>"), n, y) } var r = t ? O : j; return Fe.hasOwnProperty(e) ? m(r) : "function" == e ? m(ce, r) : "class" == e ? m(b("form"), de, x) : "keyword c" == e || "async" == e ? m(t ? M : T) : "(" == e ? m(b(")"), T, w(")"), x, r) : "operator" == e || "spread" == e ? m(t ? S : C) : "[" == e ? m(b("]"), Ce, x, r) : "{" == e ? U(B, "}", null, r) : "quasi" == e ? p(A, r) : "new" == e ? m(I(t)) : m() }

                function T(e) { return e.match(/[;\}\)\],]/) ? p() : p(C) }

                function M(e) { return e.match(/[;\}\)\],]/) ? p() : p(S) }

                function j(e, t) { return "," == e ? m(C) : O(e, t, !1) }

                function O(e, t, n) { var r = 0 == n ? j : O,
                        i = 0 == n ? C : S; return "=>" == e ? m(v, n ? P : N, y) : "operator" == e ? /\+\+|--/.test(t) ? m(r) : "?" == t ? m(C, w(":"), i) : m(i) : "quasi" == e ? p(A, r) : ";" != e ? "(" == e ? U(S, ")", "call", r) : "." == e ? m(R, r) : "[" == e ? m(b("]"), T, w("]"), x, r) : Ae && "as" == t ? (ze.marked = "keyword", m(V, r)) : void 0 : void 0 }

                function A(e, t) { return "quasi" != e ? p() : "${" != t.slice(t.length - 2) ? m(A) : m(C, E) }

                function E(e) { if ("}" == e) return ze.marked = "string-2", ze.state.tokenize = c, m(A) }

                function N(e) { return u(ze.stream, ze.state), p("{" == e ? k : C) }

                function P(e) { return u(ze.stream, ze.state), p("{" == e ? k : S) }

                function I(e) { return function(t) { return "." == t ? m(e ? F : D) : p(e ? S : C) } }

                function D(e, t) { if ("target" == t) return ze.marked = "keyword", m(j) }

                function F(e, t) { if ("target" == t) return ze.marked = "keyword", m(O) }

                function z(e) { return ":" == e ? m(x, k) : p(j, w(";"), x) }

                function R(e) { if ("variable" == e) return ze.marked = "property", m() }

                function B(e, t) { return "async" == e ? (ze.marked = "property", m(B)) : "variable" == e || "keyword" == ze.style ? (ze.marked = "property", m("get" == t || "set" == t ? H : $)) : "number" == e || "string" == e ? (ze.marked = je ? "property" : ze.style + " property", m($)) : "jsonld-keyword" == e ? m($) : "modifier" == e ? m(B) : "[" == e ? m(C, w("]"), $) : "spread" == e ? m(C, $) : ":" == e ? p($) : void 0 }

                function H(e) { return "variable" != e ? p($) : (ze.marked = "property", m(ce)) }

                function $(e) { return ":" == e ? m(S) : "(" == e ? p(ce) : void 0 }

                function W(e, t, n) {
                    function r(i, o) { if (n ? n.indexOf(i) > -1 : "," == i) { var a = ze.state.lexical; return "call" == a.info && (a.pos = (a.pos || 0) + 1), m(function(n, r) { return n == t || r == t ? p() : p(e) }, r) } return i == t || o == t ? m() : m(w(t)) } return function(n, i) { return n == t || i == t ? m() : p(e, r) } }

                function U(e, t, n) { for (var r = 3; r < arguments.length; r++) ze.cc.push(arguments[r]); return m(b(t, n), W(e, t), x) }

                function q(e) { return "}" == e ? m() : p(k, q) }

                function G(e, t) { if (Ae) { if (":" == e) return m(V); if ("?" == t) return m(G) } }

                function V(e) { return "variable" == e ? (ze.marked = "type", m(J)) : "string" == e || "number" == e || "atom" == e ? m(J) : "{" == e ? m(b("}"), W(Y, "}", ",;"), x, J) : "(" == e ? m(W(X, ")"), K) : void 0 }

                function K(e) { if ("=>" == e) return m(V) }

                function Y(e, t) { return "variable" == e || "keyword" == ze.style ? (ze.marked = "property", m(Y)) : "?" == t ? m(Y) : ":" == e ? m(V) : "[" == e ? m(C, G, w("]"), Y) : void 0 }

                function X(e) { return "variable" == e ? m(X) : ":" == e ? m(V) : void 0 }

                function J(e, t) { return "<" == t ? m(b(">"), W(V, ">"), x, J) : "|" == t || "." == e ? m(V) : "[" == e ? m(w("]"), J) : "extends" == t ? m(V) : void 0 }

                function Z() { return p(Q, G, te, ne) }

                function Q(e, t) { return "modifier" == e ? m(Q) : "variable" == e ? (g(t), m()) : "spread" == e ? m(Q) : "[" == e ? U(Q, "]") : "{" == e ? U(ee, "}") : void 0 }

                function ee(e, t) { return "variable" != e || ze.stream.match(/^\s*:/, !1) ? ("variable" == e && (ze.marked = "property"), "spread" == e ? m(Q) : "}" == e ? p() : m(w(":"), Q, te)) : (g(t), m(te)) }

                function te(e, t) { if ("=" == t) return m(S) }

                function ne(e) { if ("," == e) return m(Z) }

                function re(e, t) { if ("keyword b" == e && "else" == t) return m(b("form", "else"), k, x) }

                function ie(e) { if ("(" == e) return m(b(")"), oe, w(")"), x) }

                function oe(e) { return "var" == e ? m(Z, w(";"), se) : ";" == e ? m(se) : "variable" == e ? m(ae) : p(C, w(";"), se) }

                function ae(e, t) { return "in" == t || "of" == t ? (ze.marked = "keyword", m(C)) : m(j, se) }

                function se(e, t) { return ";" == e ? m(le) : "in" == t || "of" == t ? (ze.marked = "keyword", m(C)) : p(C, w(";"), le) }

                function le(e) { ")" != e && m(C) }

                function ce(e, t) { return "*" == t ? (ze.marked = "keyword", m(ce)) : "variable" == e ? (g(t), m(ce)) : "(" == e ? m(v, b(")"), W(ue, ")"), x, G, k, y) : Ae && "<" == t ? m(b(">"), W(V, ">"), x, ce) : void 0 }

                function ue(e) { return "spread" == e ? m(ue) : p(Q, G, te) }

                function de(e, t) { return "variable" == e ? fe(e, t) : he(e, t) }

                function fe(e, t) { if ("variable" == e) return g(t), m(he) }

                function he(e, t) { return "<" == t ? m(b(">"), W(V, ">"), x, he) : "extends" == t || "implements" == t || Ae && "," == e ? m(Ae ? V : C, he) : "{" == e ? m(b("}"), pe, x) : void 0 }

                function pe(e, t) { return "variable" == e || "keyword" == ze.style ? ("async" == t || "static" == t || "get" == t || "set" == t || Ae && ("public" == t || "private" == t || "protected" == t || "readonly" == t || "abstract" == t)) && ze.stream.match(/^\s+[\w$\xa1-\uffff]/, !1) ? (ze.marked = "keyword", m(pe)) : (ze.marked = "property", m(Ae ? me : ce, pe)) : "[" == e ? m(C, w("]"), Ae ? me : ce, pe) : "*" == t ? (ze.marked = "keyword", m(pe)) : ";" == e ? m(pe) : "}" == e ? m() : "@" == t ? m(C, pe) : void 0 }

                function me(e, t) { return "?" == t ? m(me) : ":" == e ? m(V, te) : "=" == t ? m(S) : p(ce) }

                function ge(e, t) { return "*" == t ? (ze.marked = "keyword", m(ke, w(";"))) : "default" == t ? (ze.marked = "keyword", m(C, w(";"))) : "{" == e ? m(W(ve, "}"), ke, w(";")) : p(k) }

                function ve(e, t) { return "as" == t ? (ze.marked = "keyword", m(w("variable"))) : "variable" == e ? p(S, ve) : void 0 }

                function ye(e) { return "string" == e ? m() : p(be, xe, ke) }

                function be(e, t) { return "{" == e ? U(be, "}") : ("variable" == e && g(t), "*" == t && (ze.marked = "keyword"), m(we)) }

                function xe(e) { if ("," == e) return m(be, xe) }

                function we(e, t) { if ("as" == t) return ze.marked = "keyword", m(be) }

                function ke(e, t) { if ("from" == t) return ze.marked = "keyword", m(C) }

                function Ce(e) { return "]" == e ? m() : p(W(S, "]")) }

                function Se(e, t) { return "operator" == e.lastType || "," == e.lastType || Pe.test(t.charAt(0)) || /[,.]/.test(t.charAt(0)) } var _e, Le, Te = n.indentUnit,
                    Me = r.statementIndent,
                    je = r.jsonld,
                    Oe = r.json || je,
                    Ae = r.typescript,
                    Ee = r.wordCharacters || /[\w$\xa1-\uffff]/,
                    Ne = function() {
                        function e(e) { return { type: e, style: "keyword" } } var t = e("keyword a"),
                            n = e("keyword b"),
                            r = e("keyword c"),
                            i = e("operator"),
                            o = { type: "atom", style: "atom" },
                            a = { "if": e("if"), "while": t, "with": t, "else": n, "do": n, "try": n, "finally": n, "return": r, "break": r, "continue": r, "new": e("new"), "delete": r, "throw": r, "debugger": r, "var": e("var"), "const": e("var"), "let": e("var"), "function": e("function"), "catch": e("catch"), "for": e("for"), "switch": e("switch"), "case": e("case"), "default": e("default"), "in": i, "typeof": i, "instanceof": i, "true": o, "false": o, "null": o, undefined: o, NaN: o, Infinity: o, "this": e("this"), "class": e("class"), "super": e("atom"), "yield": r, "export": e("export"), "import": e("import"), "extends": r, await: r }; if (Ae) { var s = { type: "variable", style: "type" },
                                l = { "interface": e("class"), "implements": r, namespace: r, module: e("module"), "enum": e("module"), "public": e("modifier"), "private": e("modifier"), "protected": e("modifier"), "abstract": e("modifier"), string: s, number: s, "boolean": s, any: s }; for (var c in l) a[c] = l[c] } return a }(),
                    Pe = /[+\-*&%=<>!?|~^@]/,
                    Ie = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,
                    De = "([{}])",
                    Fe = { atom: !0, number: !0, variable: !0, string: !0, regexp: !0, "this": !0, "jsonld-keyword": !0 },
                    ze = { state: null, column: null, marked: null, cc: null },
                    Re = { name: "this", next: { name: "arguments" } }; return x.lex = !0, { startState: function(e) { var t = { tokenize: a, lastType: "sof", cc: [], lexical: new d((e || 0) - Te, 0, "block", (!1)), localVars: r.localVars, context: r.localVars && { vars: r.localVars }, indented: e || 0 }; return r.globalVars && "object" == typeof r.globalVars && (t.globalVars = r.globalVars), t }, token: function(e, t) { if (e.sol() && (t.lexical.hasOwnProperty("align") || (t.lexical.align = !1), t.indented = e.indentation(), u(e, t)), t.tokenize != l && e.eatSpace()) return null; var n = t.tokenize(e, t); return "comment" == _e ? n : (t.lastType = "operator" != _e || "++" != Le && "--" != Le ? _e : "incdec", h(t, n, _e, Le, e)) }, indent: function(t, n) { if (t.tokenize == l) return e.Pass; if (t.tokenize != a) return 0; var i, o = n && n.charAt(0),
                            s = t.lexical; if (!/^\s*else\b/.test(n))
                            for (var c = t.cc.length - 1; c >= 0; --c) { var u = t.cc[c]; if (u == x) s = s.prev;
                                else if (u != re) break }
                        for (;
                            ("stat" == s.type || "form" == s.type) && ("}" == o || (i = t.cc[t.cc.length - 1]) && (i == j || i == O) && !/^[,\.=+\-*:?[\(]/.test(n));) s = s.prev;
                        Me && ")" == s.type && "stat" == s.prev.type && (s = s.prev); var d = s.type,
                            f = o == d; return "vardef" == d ? s.indented + ("operator" == t.lastType || "," == t.lastType ? s.info + 1 : 0) : "form" == d && "{" == o ? s.indented : "form" == d ? s.indented + Te : "stat" == d ? s.indented + (Se(t, n) ? Me || Te : 0) : "switch" != s.info || f || 0 == r.doubleIndentSwitch ? s.align ? s.column + (f ? 0 : 1) : s.indented + (f ? 0 : Te) : s.indented + (/^(?:case|default)\b/.test(n) ? Te : 2 * Te) }, electricInput: /^\s*(?:case .*?:|default:|\{|\})$/, blockCommentStart: Oe ? null : "/*", blockCommentEnd: Oe ? null : "*/", lineComment: Oe ? null : "//", fold: "brace", closeBrackets: "()[]{}''\"\"``", helperType: Oe ? "json" : "javascript", jsonldMode: je, jsonMode: Oe, expressionAllowed: t, skipExpression: function(e) { var t = e.cc[e.cc.length - 1];
                        t != C && t != S || e.cc.pop() } } }), e.registerHelper("wordChars", "javascript", /[\w$]/), e.defineMIME("text/javascript", "javascript"), e.defineMIME("text/ecmascript", "javascript"), e.defineMIME("application/javascript", "javascript"), e.defineMIME("application/x-javascript", "javascript"), e.defineMIME("application/ecmascript", "javascript"), e.defineMIME("application/json", { name: "javascript", json: !0 }), e.defineMIME("application/x-json", { name: "javascript", json: !0 }), e.defineMIME("application/ld+json", { name: "javascript", jsonld: !0 }), e.defineMIME("text/typescript", { name: "javascript", typescript: !0 }), e.defineMIME("application/typescript", { name: "javascript", typescript: !0 }) }) }, { "../../lib/codemirror": 14 }],
    18: [function(e, t, n) {! function(r) { "object" == typeof n && "object" == typeof t ? r(e("../../lib/codemirror"), e("../xml/xml"), e("../meta")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../xml/xml", "../meta"], r) : r(CodeMirror) }(function(e) { "use strict";
            e.defineMode("markdown", function(t, n) {
                function r(n) { if (e.findModeByName) { var r = e.findModeByName(n);
                        r && (n = r.mime || r.mimes[0]) } var i = e.getMode(t, n); return "null" == i.name ? null : i }

                function i(e, t, n) { return t.f = t.inline = n, n(e, t) }

                function o(e, t, n) { return t.f = t.block = n, n(e, t) }

                function a(e) { return !e || !/\S/.test(e.string) }

                function s(e) { return e.linkTitle = !1, e.em = !1, e.strong = !1, e.strikethrough = !1, e.quote = 0, e.indentedCode = !1, e.f == c && (e.f = h, e.block = l), e.trailingSpace = 0, e.trailingSpaceNewLine = !1, e.prevLine = e.thisLine, e.thisLine = null, null }

                function l(t, o) { var s = t.sol(),
                        l = o.list !== !1,
                        c = o.indentedCode;
                    o.indentedCode = !1; var f; if (null === o.indentationDiff && (f = o.indentation, o.indentationDiff = o.indentation, l)) { for (o.list = null; f < o.listStack[o.listStack.length - 1];) o.listStack.pop(), o.listStack.length ? o.indentation = o.listStack[o.listStack.length - 1] : o.list = !1;
                        o.list !== !1 && (o.indentationDiff = f - o.listStack[o.listStack.length - 1]) } var h = null; if (o.indentationDiff >= 4 && (c || a(o.prevLine))) return t.skipToEnd(), o.indentedCode = !0, k.code; if (t.eatSpace()) return null; if ((h = t.match(T)) && h[1].length <= 6) return o.header = h[1].length, n.highlightFormatting && (o.formatting = "header"), o.f = o.inline, d(o); if (!(a(o.prevLine) || o.quote || l || c) && (h = t.match(M))) return o.header = "=" == h[0].charAt(0) ? 1 : 2, n.highlightFormatting && (o.formatting = "header"), o.f = o.inline, d(o); if (t.eat(">")) return o.quote = s ? 1 : o.quote + 1, n.highlightFormatting && (o.formatting = "quote"), t.eatSpace(), d(o); if ("[" === t.peek()) return i(t, o, v); if (t.match(S, !0)) return o.hr = !0, k.hr; if (h = t.match(_)) { var p = h[1] ? "ol" : "ul"; return o.indentation = f + t.current().length, o.list = !0, o.listStack.push(o.indentation), n.taskLists && t.match(L, !1) && (o.taskList = !0), o.f = o.inline, n.highlightFormatting && (o.formatting = ["list", "list-" + p]), d(o) } return n.fencedCodeBlocks && (h = t.match(O, !0)) ? (o.fencedChars = h[1], o.localMode = r(h[2]), o.localMode && (o.localState = e.startState(o.localMode)), o.f = o.block = u, n.highlightFormatting && (o.formatting = "code-block"), o.code = -1, d(o)) : i(t, o, o.inline) }

                function c(t, n) { var r = x.token(t, n.htmlState); if (!w) { var i = e.innerMode(x, n.htmlState);
                        ("xml" == i.mode.name && null === i.state.tagStart && !i.state.context && i.state.tokenize.isInText || n.md_inside && t.current().indexOf(">") > -1) && (n.f = h, n.block = l, n.htmlState = null) } return r }

                function u(e, t) { if (t.fencedChars && e.match(t.fencedChars)) { n.highlightFormatting && (t.formatting = "code-block"); var r = d(t); return t.localMode = t.localState = null, t.block = l, t.f = h, t.fencedChars = null, t.code = 0, r } return t.fencedChars && e.skipTo(t.fencedChars) ? "comment" : t.localMode ? t.localMode.token(e, t.localState) : (e.skipToEnd(), k.code) }

                function d(e) { var t = []; if (e.formatting) { t.push(k.formatting), "string" == typeof e.formatting && (e.formatting = [e.formatting]); for (var r = 0; r < e.formatting.length; r++) t.push(k.formatting + "-" + e.formatting[r]), "header" === e.formatting[r] && t.push(k.formatting + "-" + e.formatting[r] + "-" + e.header), "quote" === e.formatting[r] && (!n.maxBlockquoteDepth || n.maxBlockquoteDepth >= e.quote ? t.push(k.formatting + "-" + e.formatting[r] + "-" + e.quote) : t.push("error")) } if (e.taskOpen) return t.push("meta"), t.length ? t.join(" ") : null; if (e.taskClosed) return t.push("property"), t.length ? t.join(" ") : null; if (e.linkHref ? t.push(k.linkHref, "url") : (e.strong && t.push(k.strong), e.em && t.push(k.em), e.strikethrough && t.push(k.strikethrough), e.emoji && t.push(k.emoji), e.linkText && t.push(k.linkText), e.code && t.push(k.code), e.image && t.push(k.image), e.imageAltText && t.push(k.imageAltText, "link"), e.imageMarker && t.push(k.imageMarker)), e.header && t.push(k.header, k.header + "-" + e.header), e.quote && (t.push(k.quote), !n.maxBlockquoteDepth || n.maxBlockquoteDepth >= e.quote ? t.push(k.quote + "-" + e.quote) : t.push(k.quote + "-" + n.maxBlockquoteDepth)), e.list !== !1) { var i = (e.listStack.length - 1) % 3;
                        i ? 1 === i ? t.push(k.list2) : t.push(k.list3) : t.push(k.list1) } return e.trailingSpaceNewLine ? t.push("trailing-space-new-line") : e.trailingSpace && t.push("trailing-space-" + (e.trailingSpace % 2 ? "a" : "b")), t.length ? t.join(" ") : null }

                function f(e, t) { if (e.match(j, !0)) return d(t) }

                function h(t, r) { var i = r.text(t, r); if ("undefined" != typeof i) return i; if (r.list) return r.list = null, d(r); if (r.taskList) { var a = "x" !== t.match(L, !0)[1]; return a ? r.taskOpen = !0 : r.taskClosed = !0, n.highlightFormatting && (r.formatting = "task"), r.taskList = !1, d(r) } if (r.taskOpen = !1, r.taskClosed = !1, r.header && t.match(/^#+$/, !0)) return n.highlightFormatting && (r.formatting = "header"), d(r); var s = t.next(); if (r.linkTitle) { r.linkTitle = !1; var l = s; "(" === s && (l = ")"), l = (l + "").replace(/([.?*+^\[\]\\(){}|-])/g, "\\$1"); var u = "^\\s*(?:[^" + l + "\\\\]+|\\\\\\\\|\\\\.)" + l; if (t.match(new RegExp(u), !0)) return k.linkHref } if ("`" === s) { var f = r.formatting;
                        n.highlightFormatting && (r.formatting = "code"), t.eatWhile("`"); var g = t.current().length; if (0 == r.code) return r.code = g, d(r); if (g == r.code) { var v = d(r); return r.code = 0, v } return r.formatting = f, d(r) } if (r.code) return d(r); if ("\\" === s && (t.next(), n.highlightFormatting)) { var y = d(r),
                            b = k.formatting + "-escape"; return y ? y + " " + b : b } if ("!" === s && t.match(/\[[^\]]*\] ?(?:\(|\[)/, !1)) return r.imageMarker = !0, r.image = !0, n.highlightFormatting && (r.formatting = "image"), d(r); if ("[" === s && r.imageMarker && t.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, !1)) return r.imageMarker = !1, r.imageAltText = !0, n.highlightFormatting && (r.formatting = "image"), d(r); if ("]" === s && r.imageAltText) { n.highlightFormatting && (r.formatting = "image"); var y = d(r); return r.imageAltText = !1, r.image = !1, r.inline = r.f = m, y } if ("[" === s && !r.image) return r.linkText = !0, n.highlightFormatting && (r.formatting = "link"), d(r); if ("]" === s && r.linkText) { n.highlightFormatting && (r.formatting = "link"); var y = d(r); return r.linkText = !1, r.inline = r.f = t.match(/\(.*?\)| ?\[.*?\]/, !1) ? m : h, y } if ("<" === s && t.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, !1)) { r.f = r.inline = p, n.highlightFormatting && (r.formatting = "link"); var y = d(r); return y ? y += " " : y = "", y + k.linkInline } if ("<" === s && t.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, !1)) { r.f = r.inline = p, n.highlightFormatting && (r.formatting = "link"); var y = d(r); return y ? y += " " : y = "", y + k.linkEmail } if ("<" === s && t.match(/^(!--|[a-z]+(?:\s+[a-z_:.\-]+(?:\s*=\s*[^ >]+)?)*\s*>)/i, !1)) { var w = t.string.indexOf(">", t.pos); if (w != -1) { var C = t.string.substring(t.start, w); /markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(C) && (r.md_inside = !0) } return t.backUp(1), r.htmlState = e.startState(x), o(t, r, c) } if ("<" === s && t.match(/^\/\w*?>/)) return r.md_inside = !1, "tag"; if ("*" === s || "_" === s) { for (var S = 1, _ = 1 == t.pos ? " " : t.string.charAt(t.pos - 2); S < 3 && t.eat(s);) S++; var T = t.peek() || " ",
                            M = !/\s/.test(T) && (!A.test(T) || /\s/.test(_) || A.test(_)),
                            j = !/\s/.test(_) && (!A.test(_) || /\s/.test(T) || A.test(T)),
                            O = null,
                            E = null; if (S % 2 && (r.em || !M || "*" !== s && j && !A.test(_) ? r.em != s || !j || "*" !== s && M && !A.test(T) || (O = !1) : O = !0), S > 1 && (r.strong || !M || "*" !== s && j && !A.test(_) ? r.strong != s || !j || "*" !== s && M && !A.test(T) || (E = !1) : E = !0), null != E || null != O) { n.highlightFormatting && (r.formatting = null == O ? "strong" : null == E ? "em" : "strong em"), O === !0 && (r.em = s), E === !0 && (r.strong = s); var v = d(r); return O === !1 && (r.em = !1), E === !1 && (r.strong = !1), v } } else if (" " === s && (t.eat("*") || t.eat("_"))) { if (" " === t.peek()) return d(r);
                        t.backUp(1) } if (n.strikethrough)
                        if ("~" === s && t.eatWhile(s)) { if (r.strikethrough) { n.highlightFormatting && (r.formatting = "strikethrough"); var v = d(r); return r.strikethrough = !1, v } if (t.match(/^[^\s]/, !1)) return r.strikethrough = !0, n.highlightFormatting && (r.formatting = "strikethrough"), d(r) } else if (" " === s && t.match(/^~~/, !0)) { if (" " === t.peek()) return d(r);
                        t.backUp(2) } if (n.emoji && ":" === s && t.match(/^[a-z_\d+-]+:/)) { r.emoji = !0, n.highlightFormatting && (r.formatting = "emoji"); var N = d(r); return r.emoji = !1, N } return " " === s && (t.match(/ +$/, !1) ? r.trailingSpace++ : r.trailingSpace && (r.trailingSpaceNewLine = !0)), d(r) }

                function p(e, t) { var r = e.next(); if (">" === r) { t.f = t.inline = h, n.highlightFormatting && (t.formatting = "link"); var i = d(t); return i ? i += " " : i = "", i + k.linkInline } return e.match(/^[^>]+/, !0), k.linkInline }

                function m(e, t) { if (e.eatSpace()) return null; var r = e.next(); return "(" === r || "[" === r ? (t.f = t.inline = g("(" === r ? ")" : "]"), n.highlightFormatting && (t.formatting = "link-string"), t.linkHref = !0, d(t)) : "error" }

                function g(e) { return function(t, r) { var i = t.next(); if (i === e) { r.f = r.inline = h, n.highlightFormatting && (r.formatting = "link-string"); var o = d(r); return r.linkHref = !1, o } return t.match(N[e]), r.linkHref = !0, d(r) } }

                function v(e, t) { return e.match(/^([^\]\\]|\\.)*\]:/, !1) ? (t.f = y, e.next(), n.highlightFormatting && (t.formatting = "link"), t.linkText = !0, d(t)) : i(e, t, h) }

                function y(e, t) { if (e.match(/^\]:/, !0)) { t.f = t.inline = b, n.highlightFormatting && (t.formatting = "link"); var r = d(t); return t.linkText = !1, r } return e.match(/^([^\]\\]|\\.)+/, !0), k.linkText }

                function b(e, t) { return e.eatSpace() ? null : (e.match(/^[^\s]+/, !0), void 0 === e.peek() ? t.linkTitle = !0 : e.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/, !0), t.f = t.inline = h, k.linkHref + " url") } var x = e.getMode(t, "text/html"),
                    w = "null" == x.name;
                void 0 === n.highlightFormatting && (n.highlightFormatting = !1), void 0 === n.maxBlockquoteDepth && (n.maxBlockquoteDepth = 0), void 0 === n.taskLists && (n.taskLists = !1), void 0 === n.strikethrough && (n.strikethrough = !1), void 0 === n.emoji && (n.emoji = !1), void 0 === n.tokenTypeOverrides && (n.tokenTypeOverrides = {}); var k = { header: "header", code: "comment", quote: "quote", list1: "variable-2", list2: "variable-3", list3: "keyword", hr: "hr", image: "image", imageAltText: "image-alt-text", imageMarker: "image-marker", formatting: "formatting", linkInline: "link", linkEmail: "link", linkText: "link", linkHref: "string", em: "em", strong: "strong", strikethrough: "strikethrough", emoji: "builtin" }; for (var C in k) k.hasOwnProperty(C) && n.tokenTypeOverrides[C] && (k[C] = n.tokenTypeOverrides[C]); var S = /^([*\-_])(?:\s*\1){2,}\s*$/,
                    _ = /^(?:[*\-+]|^[0-9]+([.)]))\s+/,
                    L = /^\[(x| )\](?=\s)/,
                    T = n.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/,
                    M = /^ *(?:\={1,}|-{1,})\s*$/,
                    j = /^[^#!\[\]*_\\<>` "'(~:]+/,
                    O = new RegExp("^(" + (n.fencedCodeBlocks === !0 ? "~~~+|```+" : n.fencedCodeBlocks) + ")[ \\t]*([\\w+#-]*)"),
                    A = /[!\"#$%&\'()*+,\-\.\/:;<=>?@\[\\\]^_`{|}~â€”]/,
                    E = "    ",
                    N = { ")": /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/, "]": /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/ },
                    P = { startState: function() { return { f: l, prevLine: null, thisLine: null, block: l, htmlState: null, indentation: 0, inline: h, text: f, formatting: !1, linkText: !1, linkHref: !1, linkTitle: !1, code: 0, em: !1, strong: !1, header: 0, hr: !1, taskList: !1, list: !1, listStack: [], quote: 0, trailingSpace: 0, trailingSpaceNewLine: !1, strikethrough: !1, emoji: !1, fencedChars: null } }, copyState: function(t) { return { f: t.f, prevLine: t.prevLine, thisLine: t.thisLine, block: t.block, htmlState: t.htmlState && e.copyState(x, t.htmlState), indentation: t.indentation, localMode: t.localMode, localState: t.localMode ? e.copyState(t.localMode, t.localState) : null, inline: t.inline, text: t.text, formatting: !1, linkText: t.linkText, linkTitle: t.linkTitle, code: t.code, em: t.em, strong: t.strong, strikethrough: t.strikethrough, emoji: t.emoji, header: t.header, hr: t.hr, taskList: t.taskList, list: t.list, listStack: t.listStack.slice(0), quote: t.quote, indentedCode: t.indentedCode, trailingSpace: t.trailingSpace, trailingSpaceNewLine: t.trailingSpaceNewLine, md_inside: t.md_inside, fencedChars: t.fencedChars } }, token: function(e, t) { if (t.formatting = !1, e != t.thisLine) { if (t.header = 0, t.hr = !1, e.match(/^\s*$/, !0)) return s(t), null; if (t.prevLine = t.thisLine, t.thisLine = e, t.taskList = !1, t.trailingSpace = 0, t.trailingSpaceNewLine = !1, t.f = t.block, t.f != c) { var n = e.match(/^\s*/, !0)[0].replace(/\t/g, E).length; if (t.indentation = n, t.indentationDiff = null, n > 0) return null } } return t.f(e, t) }, innerMode: function(e) { return e.block == c ? { state: e.htmlState, mode: x } : e.localState ? { state: e.localState, mode: e.localMode } : { state: e, mode: P } }, indent: function(t, n, r) { return t.block == c ? x.indent(t.htmlState, n, r) : t.localState ? t.localMode.indent(t.localState, n, r) : e.Pass }, blankLine: s, getType: d, closeBrackets: "()[]{}''\"\"``", fold: "markdown" }; return P }, "xml"), e.defineMIME("text/x-markdown", "markdown") }) }, { "../../lib/codemirror": 14, "../meta": 19, "../xml/xml": 20 }],
    19: [function(e, t, n) {
        ! function(r) { "object" == typeof n && "object" == typeof t ? r(e("../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../lib/codemirror"], r) : r(CodeMirror) }(function(e) {
            "use strict";
            e.modeInfo = [{ name: "APL", mime: "text/apl", mode: "apl", ext: ["dyalog", "apl"] }, { name: "PGP", mimes: ["application/pgp", "application/pgp-keys", "application/pgp-signature"], mode: "asciiarmor", ext: ["pgp"] }, { name: "ASN.1", mime: "text/x-ttcn-asn", mode: "asn.1", ext: ["asn", "asn1"] }, { name: "Asterisk", mime: "text/x-asterisk", mode: "asterisk", file: /^extensions\.conf$/i }, { name: "Brainfuck", mime: "text/x-brainfuck", mode: "brainfuck", ext: ["b", "bf"] }, { name: "C", mime: "text/x-csrc", mode: "clike", ext: ["c", "h"] }, {
                name: "C++",
                mime: "text/x-c++src",
                mode: "clike",
                ext: ["cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx"],
                alias: ["cpp"]
            }, { name: "Cobol", mime: "text/x-cobol", mode: "cobol", ext: ["cob", "cpy"] }, { name: "C#", mime: "text/x-csharp", mode: "clike", ext: ["cs"], alias: ["csharp"] }, { name: "Clojure", mime: "text/x-clojure", mode: "clojure", ext: ["clj", "cljc", "cljx"] }, { name: "ClojureScript", mime: "text/x-clojurescript", mode: "clojure", ext: ["cljs"] }, { name: "Closure Stylesheets (GSS)", mime: "text/x-gss", mode: "css", ext: ["gss"] }, { name: "CMake", mime: "text/x-cmake", mode: "cmake", ext: ["cmake", "cmake.in"], file: /^CMakeLists.txt$/ }, { name: "CoffeeScript", mime: "text/x-coffeescript", mode: "coffeescript", ext: ["coffee"], alias: ["coffee", "coffee-script"] }, { name: "Common Lisp", mime: "text/x-common-lisp", mode: "commonlisp", ext: ["cl", "lisp", "el"], alias: ["lisp"] }, { name: "Cypher", mime: "application/x-cypher-query", mode: "cypher", ext: ["cyp", "cypher"] }, { name: "Cython", mime: "text/x-cython", mode: "python", ext: ["pyx", "pxd", "pxi"] }, { name: "Crystal", mime: "text/x-crystal", mode: "crystal", ext: ["cr"] }, { name: "CSS", mime: "text/css", mode: "css", ext: ["css"] }, { name: "CQL", mime: "text/x-cassandra", mode: "sql", ext: ["cql"] }, { name: "D", mime: "text/x-d", mode: "d", ext: ["d"] }, { name: "Dart", mimes: ["application/dart", "text/x-dart"], mode: "dart", ext: ["dart"] }, { name: "diff", mime: "text/x-diff", mode: "diff", ext: ["diff", "patch"] }, { name: "Django", mime: "text/x-django", mode: "django" }, { name: "Dockerfile", mime: "text/x-dockerfile", mode: "dockerfile", file: /^Dockerfile$/ }, { name: "DTD", mime: "application/xml-dtd", mode: "dtd", ext: ["dtd"] }, { name: "Dylan", mime: "text/x-dylan", mode: "dylan", ext: ["dylan", "dyl", "intr"] }, { name: "EBNF", mime: "text/x-ebnf", mode: "ebnf" }, { name: "ECL", mime: "text/x-ecl", mode: "ecl", ext: ["ecl"] }, { name: "edn", mime: "application/edn", mode: "clojure", ext: ["edn"] }, { name: "Eiffel", mime: "text/x-eiffel", mode: "eiffel", ext: ["e"] }, { name: "Elm", mime: "text/x-elm", mode: "elm", ext: ["elm"] }, { name: "Embedded Javascript", mime: "application/x-ejs", mode: "htmlembedded", ext: ["ejs"] }, { name: "Embedded Ruby", mime: "application/x-erb", mode: "htmlembedded", ext: ["erb"] }, { name: "Erlang", mime: "text/x-erlang", mode: "erlang", ext: ["erl"] }, { name: "Factor", mime: "text/x-factor", mode: "factor", ext: ["factor"] }, { name: "FCL", mime: "text/x-fcl", mode: "fcl" }, { name: "Forth", mime: "text/x-forth", mode: "forth", ext: ["forth", "fth", "4th"] }, { name: "Fortran", mime: "text/x-fortran", mode: "fortran", ext: ["f", "for", "f77", "f90"] }, { name: "F#", mime: "text/x-fsharp", mode: "mllike", ext: ["fs"], alias: ["fsharp"] }, { name: "Gas", mime: "text/x-gas", mode: "gas", ext: ["s"] }, { name: "Gherkin", mime: "text/x-feature", mode: "gherkin", ext: ["feature"] }, { name: "GitHub Flavored Markdown", mime: "text/x-gfm", mode: "gfm", file: /^(readme|contributing|history).md$/i }, { name: "Go", mime: "text/x-go", mode: "go", ext: ["go"] }, { name: "Groovy", mime: "text/x-groovy", mode: "groovy", ext: ["groovy", "gradle"], file: /^Jenkinsfile$/ }, { name: "HAML", mime: "text/x-haml", mode: "haml", ext: ["haml"] }, { name: "Haskell", mime: "text/x-haskell", mode: "haskell", ext: ["hs"] }, { name: "Haskell (Literate)", mime: "text/x-literate-haskell", mode: "haskell-literate", ext: ["lhs"] }, { name: "Haxe", mime: "text/x-haxe", mode: "haxe", ext: ["hx"] }, { name: "HXML", mime: "text/x-hxml", mode: "haxe", ext: ["hxml"] }, { name: "ASP.NET", mime: "application/x-aspx", mode: "htmlembedded", ext: ["aspx"], alias: ["asp", "aspx"] }, { name: "HTML", mime: "text/html", mode: "htmlmixed", ext: ["html", "htm"], alias: ["xhtml"] }, { name: "HTTP", mime: "message/http", mode: "http" }, { name: "IDL", mime: "text/x-idl", mode: "idl", ext: ["pro"] }, { name: "Pug", mime: "text/x-pug", mode: "pug", ext: ["jade", "pug"], alias: ["jade"] }, { name: "Java", mime: "text/x-java", mode: "clike", ext: ["java"] }, { name: "Java Server Pages", mime: "application/x-jsp", mode: "htmlembedded", ext: ["jsp"], alias: ["jsp"] }, { name: "JavaScript", mimes: ["text/javascript", "text/ecmascript", "application/javascript", "application/x-javascript", "application/ecmascript"], mode: "javascript", ext: ["js"], alias: ["ecmascript", "js", "node"] }, { name: "JSON", mimes: ["application/json", "application/x-json"], mode: "javascript", ext: ["json", "map"], alias: ["json5"] }, { name: "JSON-LD", mime: "application/ld+json", mode: "javascript", ext: ["jsonld"], alias: ["jsonld"] }, { name: "JSX", mime: "text/jsx", mode: "jsx", ext: ["jsx"] }, { name: "Jinja2", mime: "null", mode: "jinja2" }, { name: "Julia", mime: "text/x-julia", mode: "julia", ext: ["jl"] }, { name: "Kotlin", mime: "text/x-kotlin", mode: "clike", ext: ["kt"] }, { name: "LESS", mime: "text/x-less", mode: "css", ext: ["less"] }, { name: "LiveScript", mime: "text/x-livescript", mode: "livescript", ext: ["ls"], alias: ["ls"] }, { name: "Lua", mime: "text/x-lua", mode: "lua", ext: ["lua"] }, { name: "Markdown", mime: "text/x-markdown", mode: "markdown", ext: ["markdown", "md", "mkd"] }, { name: "mIRC", mime: "text/mirc", mode: "mirc" }, { name: "MariaDB SQL", mime: "text/x-mariadb", mode: "sql" }, { name: "Mathematica", mime: "text/x-mathematica", mode: "mathematica", ext: ["m", "nb"] }, { name: "Modelica", mime: "text/x-modelica", mode: "modelica", ext: ["mo"] }, { name: "MUMPS", mime: "text/x-mumps", mode: "mumps", ext: ["mps"] }, { name: "MS SQL", mime: "text/x-mssql", mode: "sql" }, { name: "mbox", mime: "application/mbox", mode: "mbox", ext: ["mbox"] }, { name: "MySQL", mime: "text/x-mysql", mode: "sql" }, { name: "Nginx", mime: "text/x-nginx-conf", mode: "nginx", file: /nginx.*\.conf$/i }, { name: "NSIS", mime: "text/x-nsis", mode: "nsis", ext: ["nsh", "nsi"] }, { name: "NTriples", mimes: ["application/n-triples", "application/n-quads", "text/n-triples"], mode: "ntriples", ext: ["nt", "nq"] }, { name: "Objective C", mime: "text/x-objectivec", mode: "clike", ext: ["m", "mm"], alias: ["objective-c", "objc"] }, { name: "OCaml", mime: "text/x-ocaml", mode: "mllike", ext: ["ml", "mli", "mll", "mly"] }, { name: "Octave", mime: "text/x-octave", mode: "octave", ext: ["m"] }, { name: "Oz", mime: "text/x-oz", mode: "oz", ext: ["oz"] }, { name: "Pascal", mime: "text/x-pascal", mode: "pascal", ext: ["p", "pas"] }, { name: "PEG.js", mime: "null", mode: "pegjs", ext: ["jsonld"] }, { name: "Perl", mime: "text/x-perl", mode: "perl", ext: ["pl", "pm"] }, { name: "PHP", mime: "application/x-httpd-php", mode: "php", ext: ["php", "php3", "php4", "php5", "php7", "phtml"] }, { name: "Pig", mime: "text/x-pig", mode: "pig", ext: ["pig"] }, { name: "Plain Text", mime: "text/plain", mode: "null", ext: ["txt", "text", "conf", "def", "list", "log"] }, { name: "PLSQL", mime: "text/x-plsql", mode: "sql", ext: ["pls"] }, { name: "PowerShell", mime: "application/x-powershell", mode: "powershell", ext: ["ps1", "psd1", "psm1"] }, { name: "Properties files", mime: "text/x-properties", mode: "properties", ext: ["properties", "ini", "in"], alias: ["ini", "properties"] }, { name: "ProtoBuf", mime: "text/x-protobuf", mode: "protobuf", ext: ["proto"] }, { name: "Python", mime: "text/x-python", mode: "python", ext: ["BUILD", "bzl", "py", "pyw"], file: /^(BUCK|BUILD)$/ }, { name: "Puppet", mime: "text/x-puppet", mode: "puppet", ext: ["pp"] }, { name: "Q", mime: "text/x-q", mode: "q", ext: ["q"] }, { name: "R", mime: "text/x-rsrc", mode: "r", ext: ["r", "R"], alias: ["rscript"] }, { name: "reStructuredText", mime: "text/x-rst", mode: "rst", ext: ["rst"], alias: ["rst"] }, { name: "RPM Changes", mime: "text/x-rpm-changes", mode: "rpm" }, { name: "RPM Spec", mime: "text/x-rpm-spec", mode: "rpm", ext: ["spec"] }, { name: "Ruby", mime: "text/x-ruby", mode: "ruby", ext: ["rb"], alias: ["jruby", "macruby", "rake", "rb", "rbx"] }, { name: "Rust", mime: "text/x-rustsrc", mode: "rust", ext: ["rs"] }, { name: "SAS", mime: "text/x-sas", mode: "sas", ext: ["sas"] }, { name: "Sass", mime: "text/x-sass", mode: "sass", ext: ["sass"] }, { name: "Scala", mime: "text/x-scala", mode: "clike", ext: ["scala"] }, { name: "Scheme", mime: "text/x-scheme", mode: "scheme", ext: ["scm", "ss"] }, { name: "SCSS", mime: "text/x-scss", mode: "css", ext: ["scss"] }, { name: "Shell", mime: "text/x-sh", mode: "shell", ext: ["sh", "ksh", "bash"], alias: ["bash", "sh", "zsh"], file: /^PKGBUILD$/ }, { name: "Sieve", mime: "application/sieve", mode: "sieve", ext: ["siv", "sieve"] }, { name: "Slim", mimes: ["text/x-slim", "application/x-slim"], mode: "slim", ext: ["slim"] }, { name: "Smalltalk", mime: "text/x-stsrc", mode: "smalltalk", ext: ["st"] }, { name: "Smarty", mime: "text/x-smarty", mode: "smarty", ext: ["tpl"] }, { name: "Solr", mime: "text/x-solr", mode: "solr" }, { name: "Soy", mime: "text/x-soy", mode: "soy", ext: ["soy"], alias: ["closure template"] }, { name: "SPARQL", mime: "application/sparql-query", mode: "sparql", ext: ["rq", "sparql"], alias: ["sparul"] }, { name: "Spreadsheet", mime: "text/x-spreadsheet", mode: "spreadsheet", alias: ["excel", "formula"] }, { name: "SQL", mime: "text/x-sql", mode: "sql", ext: ["sql"] }, { name: "SQLite", mime: "text/x-sqlite", mode: "sql" }, { name: "Squirrel", mime: "text/x-squirrel", mode: "clike", ext: ["nut"] }, { name: "Stylus", mime: "text/x-styl", mode: "stylus", ext: ["styl"] }, { name: "Swift", mime: "text/x-swift", mode: "swift", ext: ["swift"] }, { name: "sTeX", mime: "text/x-stex", mode: "stex" }, { name: "LaTeX", mime: "text/x-latex", mode: "stex", ext: ["text", "ltx"], alias: ["tex"] }, { name: "SystemVerilog", mime: "text/x-systemverilog", mode: "verilog", ext: ["v"] }, { name: "Tcl", mime: "text/x-tcl", mode: "tcl", ext: ["tcl"] }, { name: "Textile", mime: "text/x-textile", mode: "textile", ext: ["textile"] }, { name: "TiddlyWiki ", mime: "text/x-tiddlywiki", mode: "tiddlywiki" }, { name: "Tiki wiki", mime: "text/tiki", mode: "tiki" }, { name: "TOML", mime: "text/x-toml", mode: "toml", ext: ["toml"] }, { name: "Tornado", mime: "text/x-tornado", mode: "tornado" }, { name: "troff", mime: "text/troff", mode: "troff", ext: ["1", "2", "3", "4", "5", "6", "7", "8", "9"] }, { name: "TTCN", mime: "text/x-ttcn", mode: "ttcn", ext: ["ttcn", "ttcn3", "ttcnpp"] }, { name: "TTCN_CFG", mime: "text/x-ttcn-cfg", mode: "ttcn-cfg", ext: ["cfg"] }, { name: "Turtle", mime: "text/turtle", mode: "turtle", ext: ["ttl"] }, { name: "TypeScript", mime: "application/typescript", mode: "javascript", ext: ["ts"], alias: ["ts"] }, { name: "TypeScript-JSX", mime: "text/typescript-jsx", mode: "jsx", ext: ["tsx"], alias: ["tsx"] }, { name: "Twig", mime: "text/x-twig", mode: "twig" }, { name: "Web IDL", mime: "text/x-webidl", mode: "webidl", ext: ["webidl"] }, { name: "VB.NET", mime: "text/x-vb", mode: "vb", ext: ["vb"] }, { name: "VBScript", mime: "text/vbscript", mode: "vbscript", ext: ["vbs"] }, { name: "Velocity", mime: "text/velocity", mode: "velocity", ext: ["vtl"] }, { name: "Verilog", mime: "text/x-verilog", mode: "verilog", ext: ["v"] }, { name: "VHDL", mime: "text/x-vhdl", mode: "vhdl", ext: ["vhd", "vhdl"] }, { name: "Vue.js Component", mimes: ["script/x-vue", "text/x-vue"], mode: "vue", ext: ["vue"] }, { name: "XML", mimes: ["application/xml", "text/xml"], mode: "xml", ext: ["xml", "xsl", "xsd", "svg"], alias: ["rss", "wsdl", "xsd"] }, { name: "XQuery", mime: "application/xquery", mode: "xquery", ext: ["xy", "xquery"] }, { name: "Yacas", mime: "text/x-yacas", mode: "yacas", ext: ["ys"] }, { name: "YAML", mimes: ["text/x-yaml", "text/yaml"], mode: "yaml", ext: ["yaml", "yml"], alias: ["yml"] }, { name: "Z80", mime: "text/x-z80", mode: "z80", ext: ["z80"] }, { name: "mscgen", mime: "text/x-mscgen", mode: "mscgen", ext: ["mscgen", "mscin", "msc"] }, { name: "xu", mime: "text/x-xu", mode: "mscgen", ext: ["xu"] }, { name: "msgenny", mime: "text/x-msgenny", mode: "mscgen", ext: ["msgenny"] }];
            for (var t = 0; t < e.modeInfo.length; t++) { var n = e.modeInfo[t];
                n.mimes && (n.mime = n.mimes[0]) } e.findModeByMIME = function(t) { t = t.toLowerCase(); for (var n = 0; n < e.modeInfo.length; n++) { var r = e.modeInfo[n]; if (r.mime == t) return r; if (r.mimes)
                        for (var i = 0; i < r.mimes.length; i++)
                            if (r.mimes[i] == t) return r } return /\+xml$/.test(t) ? e.findModeByMIME("application/xml") : /\+json$/.test(t) ? e.findModeByMIME("application/json") : void 0 }, e.findModeByExtension = function(t) { for (var n = 0; n < e.modeInfo.length; n++) { var r = e.modeInfo[n]; if (r.ext)
                        for (var i = 0; i < r.ext.length; i++)
                            if (r.ext[i] == t) return r } }, e.findModeByFileName = function(t) { for (var n = 0; n < e.modeInfo.length; n++) { var r = e.modeInfo[n]; if (r.file && r.file.test(t)) return r } var i = t.lastIndexOf("."),
                    o = i > -1 && t.substring(i + 1, t.length); if (o) return e.findModeByExtension(o) }, e.findModeByName = function(t) { t = t.toLowerCase(); for (var n = 0; n < e.modeInfo.length; n++) { var r = e.modeInfo[n]; if (r.name.toLowerCase() == t) return r; if (r.alias)
                        for (var i = 0; i < r.alias.length; i++)
                            if (r.alias[i].toLowerCase() == t) return r } }
        })
    }, { "../lib/codemirror": 14 }],
    20: [function(e, t, n) {! function(r) { "object" == typeof n && "object" == typeof t ? r(e("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], r) : r(CodeMirror) }(function(e) { "use strict"; var t = { autoSelfClosers: { area: !0, base: !0, br: !0, col: !0, command: !0, embed: !0, frame: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0, menuitem: !0 }, implicitlyClosed: { dd: !0, li: !0, optgroup: !0, option: !0, p: !0, rp: !0, rt: !0, tbody: !0, td: !0, tfoot: !0, th: !0, tr: !0 }, contextGrabbers: { dd: { dd: !0, dt: !0 }, dt: { dd: !0, dt: !0 }, li: { li: !0 }, option: { option: !0, optgroup: !0 }, optgroup: { optgroup: !0 }, p: { address: !0, article: !0, aside: !0, blockquote: !0, dir: !0, div: !0, dl: !0, fieldset: !0, footer: !0, form: !0, h1: !0, h2: !0, h3: !0, h4: !0, h5: !0, h6: !0, header: !0, hgroup: !0, hr: !0, menu: !0, nav: !0, ol: !0, p: !0, pre: !0, section: !0, table: !0, ul: !0 }, rp: { rp: !0, rt: !0 }, rt: { rp: !0, rt: !0 }, tbody: { tbody: !0, tfoot: !0 }, td: { td: !0, th: !0 }, tfoot: { tbody: !0 }, th: { td: !0, th: !0 }, thead: { tbody: !0, tfoot: !0 }, tr: { tr: !0 } }, doNotIndent: { pre: !0 }, allowUnquoted: !0, allowMissing: !0, caseFold: !0 },
                n = { autoSelfClosers: {}, implicitlyClosed: {}, contextGrabbers: {}, doNotIndent: {}, allowUnquoted: !1, allowMissing: !1, caseFold: !1 };
            e.defineMode("xml", function(r, i) {
                function o(e, t) {
                    function n(n) { return t.tokenize = n, n(e, t) } var r = e.next(); if ("<" == r) return e.eat("!") ? e.eat("[") ? e.match("CDATA[") ? n(l("atom", "]]>")) : null : e.match("--") ? n(l("comment", "-->")) : e.match("DOCTYPE", !0, !0) ? (e.eatWhile(/[\w\._\-]/), n(c(1))) : null : e.eat("?") ? (e.eatWhile(/[\w\._\-]/), t.tokenize = l("meta", "?>"), "meta") : (L = e.eat("/") ? "closeTag" : "openTag", t.tokenize = a, "tag bracket"); if ("&" == r) { var i; return i = e.eat("#") ? e.eat("x") ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";") : e.eatWhile(/[\d]/) && e.eat(";") : e.eatWhile(/[\w\.\-:]/) && e.eat(";"), i ? "atom" : "error" } return e.eatWhile(/[^&<]/), null }

                function a(e, t) { var n = e.next(); if (">" == n || "/" == n && e.eat(">")) return t.tokenize = o, L = ">" == n ? "endTag" : "selfcloseTag", "tag bracket"; if ("=" == n) return L = "equals", null; if ("<" == n) { t.tokenize = o, t.state = h, t.tagName = t.tagStart = null; var r = t.tokenize(e, t); return r ? r + " tag error" : "tag error" } return /[\'\"]/.test(n) ? (t.tokenize = s(n), t.stringStartCol = e.column(), t.tokenize(e, t)) : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word") }

                function s(e) { var t = function(t, n) { for (; !t.eol();)
                            if (t.next() == e) { n.tokenize = a; break }
                        return "string" }; return t.isInAttribute = !0, t }

                function l(e, t) { return function(n, r) { for (; !n.eol();) { if (n.match(t)) { r.tokenize = o; break } n.next() } return e } }

                function c(e) { return function(t, n) { for (var r; null != (r = t.next());) { if ("<" == r) return n.tokenize = c(e + 1), n.tokenize(t, n); if (">" == r) { if (1 == e) { n.tokenize = o; break } return n.tokenize = c(e - 1), n.tokenize(t, n) } } return "meta" } }

                function u(e, t, n) { this.prev = e.context, this.tagName = t, this.indent = e.indented, this.startOfLine = n, (C.doNotIndent.hasOwnProperty(t) || e.context && e.context.noIndent) && (this.noIndent = !0) }

                function d(e) { e.context && (e.context = e.context.prev) }

                function f(e, t) { for (var n;;) { if (!e.context) return; if (n = e.context.tagName, !C.contextGrabbers.hasOwnProperty(n) || !C.contextGrabbers[n].hasOwnProperty(t)) return;
                        d(e) } }

                function h(e, t, n) { return "openTag" == e ? (n.tagStart = t.column(), p) : "closeTag" == e ? m : h }

                function p(e, t, n) { return "word" == e ? (n.tagName = t.current(), T = "tag", y) : (T = "error", p) }

                function m(e, t, n) { if ("word" == e) { var r = t.current(); return n.context && n.context.tagName != r && C.implicitlyClosed.hasOwnProperty(n.context.tagName) && d(n), n.context && n.context.tagName == r || C.matchClosing === !1 ? (T = "tag", g) : (T = "tag error", v) } return T = "error", v }

                function g(e, t, n) { return "endTag" != e ? (T = "error", g) : (d(n), h) }

                function v(e, t, n) { return T = "error", g(e, t, n) }

                function y(e, t, n) { if ("word" == e) return T = "attribute", b; if ("endTag" == e || "selfcloseTag" == e) { var r = n.tagName,
                            i = n.tagStart; return n.tagName = n.tagStart = null, "selfcloseTag" == e || C.autoSelfClosers.hasOwnProperty(r) ? f(n, r) : (f(n, r), n.context = new u(n, r, i == n.indented)), h } return T = "error", y }

                function b(e, t, n) { return "equals" == e ? x : (C.allowMissing || (T = "error"), y(e, t, n)) }

                function x(e, t, n) { return "string" == e ? w : "word" == e && C.allowUnquoted ? (T = "string", y) : (T = "error", y(e, t, n)) }

                function w(e, t, n) { return "string" == e ? w : y(e, t, n) } var k = r.indentUnit,
                    C = {},
                    S = i.htmlMode ? t : n; for (var _ in S) C[_] = S[_]; for (var _ in i) C[_] = i[_]; var L, T; return o.isInText = !0, { startState: function(e) { var t = { tokenize: o, state: h, indented: e || 0, tagName: null, tagStart: null, context: null }; return null != e && (t.baseIndent = e), t }, token: function(e, t) { if (!t.tagName && e.sol() && (t.indented = e.indentation()), e.eatSpace()) return null;
                        L = null; var n = t.tokenize(e, t); return (n || L) && "comment" != n && (T = null, t.state = t.state(L || n, e, t), T && (n = "error" == T ? n + " error" : T)), n }, indent: function(t, n, r) { var i = t.context; if (t.tokenize.isInAttribute) return t.tagStart == t.indented ? t.stringStartCol + 1 : t.indented + k; if (i && i.noIndent) return e.Pass; if (t.tokenize != a && t.tokenize != o) return r ? r.match(/^(\s*)/)[0].length : 0; if (t.tagName) return C.multilineTagIndentPastTag !== !1 ? t.tagStart + t.tagName.length + 2 : t.tagStart + k * (C.multilineTagIndentFactor || 1); if (C.alignCDATA && /<!\[CDATA\[/.test(n)) return 0; var s = n && /^<(\/)?([\w_:\.-]*)/.exec(n); if (s && s[1])
                            for (; i;) { if (i.tagName == s[2]) { i = i.prev; break } if (!C.implicitlyClosed.hasOwnProperty(i.tagName)) break;
                                i = i.prev } else if (s)
                                for (; i;) { var l = C.contextGrabbers[i.tagName]; if (!l || !l.hasOwnProperty(s[2])) break;
                                    i = i.prev }
                        for (; i && i.prev && !i.startOfLine;) i = i.prev; return i ? i.indent + k : t.baseIndent || 0 }, electricInput: /<\/[\s\w:]+>$/, blockCommentStart: "<!--", blockCommentEnd: "-->", configuration: C.htmlMode ? "html" : "xml", helperType: C.htmlMode ? "html" : "xml", skipAttribute: function(e) { e.state == x && (e.state = y) } } }), e.defineMIME("text/xml", "xml"), e.defineMIME("application/xml", "xml"), e.mimeModes.hasOwnProperty("text/html") || e.defineMIME("text/html", { name: "xml", htmlMode: !0 }) }) }, { "../../lib/codemirror": 14 }],
    21: [function(e, t, n) {
        (function(e) {
            ! function(e, r) { "object" == typeof n && "undefined" != typeof t ? t.exports = r() : "function" == typeof define && define.amd ? define(r) : e.EmbedJS = r() }(this, function() {
                "use strict";

                function t(e, t) { return e.substr(0, t - 1) + (e.length >= t ? "..." : "") }

                function n(e) { return e.indexOf("//") === -1 ? "//" + e : e }

                function r(e, t) { for (var n in t) t.hasOwnProperty(n) && t[n] && t[n].constructor === Object ? (e[n] = e[n] || {}, r(e[n], t[n])) : e[n] = t[n]; return e }

                function i(e) { return e.replace(/[\-\[\]\/\{}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") }

                function o(e) { return e.sort(function(e, t) { return e.index - t.index }) }

                function a(e, t) { for (var n = o(t), r = 0; r < n.length; r++) e += " " + n[r].text; return e }

                function s(e, t) { return e.exec(t) }

                function l(e, t) { if (!e.singleEmbed || !e.served.length) return e.excludeEmbed.indexOf(t) === -1 && !("all" === e.excludeEmbed) }

                function c(e, t) { return e.inlineEmbed.indexOf(t) >= 0 || "all" === e.inlineEmbed }

                function u(e) { return e.videoWidth = e.videoWidth || e.videoHeight / 3 * 4 || 800, e.videoHeight = e.videoHeight || e.videoWidth / 4 * 3 || 600, e }

                function d(e) { if (null === e || "object" != typeof e) return e; var t = e.constructor(); for (var n in e) t[n] = d(e[n]); return t }

                function f() { return /((href|src)=["']|)(\b(https?|ftp|file):\/\/[^,.\s]+[^\s]*[^,.\s]+)|((https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,}))|(?:https?:\/\/)?(?:(?:0rz\.tw)|(?:1link\.in)|(?:1url\.com)|(?:2\.gp)|(?:2big\.at)|(?:2tu\.us)|(?:3\.ly)|(?:307\.to)|(?:4ms\.me)|(?:4sq\.com)|(?:4url\.cc)|(?:6url\.com)|(?:7\.ly)|(?:a\.gg)|(?:a\.nf)|(?:aa\.cx)|(?:abcurl\.net)|(?:ad\.vu)|(?:adf\.ly)|(?:adjix\.com)|(?:afx\.cc)|(?:all\.fuseurl.com)|(?:alturl\.com)|(?:amzn\.to)|(?:ar\.gy)|(?:arst\.ch)|(?:atu\.ca)|(?:azc\.cc)|(?:b23\.ru)|(?:b2l\.me)|(?:bacn\.me)|(?:bcool\.bz)|(?:binged\.it)|(?:bit\.ly)|(?:buff\.ly)|(?:bizj\.us)|(?:bloat\.me)|(?:bravo\.ly)|(?:bsa\.ly)|(?:budurl\.com)|(?:canurl\.com)|(?:chilp\.it)|(?:chzb\.gr)|(?:cl\.lk)|(?:cl\.ly)|(?:clck\.ru)|(?:cli\.gs)|(?:cliccami\.info)|(?:clickthru\.ca)|(?:clop\.in)|(?:conta\.cc)|(?:cort\.as)|(?:cot\.ag)|(?:crks\.me)|(?:ctvr\.us)|(?:cutt\.us)|(?:dai\.ly)|(?:decenturl\.com)|(?:dfl8\.me)|(?:digbig\.com)|(?:digg\.com)|(?:disq\.us)|(?:dld\.bz)|(?:dlvr\.it)|(?:do\.my)|(?:doiop\.com)|(?:dopen\.us)|(?:easyuri\.com)|(?:easyurl\.net)|(?:eepurl\.com)|(?:eweri\.com)|(?:fa\.by)|(?:fav\.me)|(?:fb\.me)|(?:fbshare\.me)|(?:ff\.im)|(?:fff\.to)|(?:fire\.to)|(?:firsturl\.de)|(?:firsturl\.net)|(?:flic\.kr)|(?:flq\.us)|(?:fly2\.ws)|(?:fon\.gs)|(?:freak\.to)|(?:fuseurl\.com)|(?:fuzzy\.to)|(?:fwd4\.me)|(?:fwib\.net)|(?:g\.ro.lt)|(?:gizmo\.do)|(?:gl\.am)|(?:go\.9nl.com)|(?:go\.ign.com)|(?:go\.usa.gov)|(?:goo\.gl)|(?:goshrink\.com)|(?:gurl\.es)|(?:hex\.io)|(?:hiderefer\.com)|(?:hmm\.ph)|(?:href\.in)|(?:hsblinks\.com)|(?:htxt\.it)|(?:huff\.to)|(?:hulu\.com)|(?:hurl\.me)|(?:hurl\.ws)|(?:icanhaz\.com)|(?:idek\.net)|(?:ilix\.in)|(?:is\.gd)|(?:its\.my)|(?:ix\.lt)|(?:j\.mp)|(?:jijr\.com)|(?:kl\.am)|(?:klck\.me)|(?:korta\.nu)|(?:krunchd\.com)|(?:l9k\.net)|(?:lat\.ms)|(?:liip\.to)|(?:liltext\.com)|(?:linkbee\.com)|(?:linkbun\.ch)|(?:liurl\.cn)|(?:ln-s\.net)|(?:ln-s\.ru)|(?:lnk\.gd)|(?:lnk\.ms)|(?:lnkd\.in)|(?:lnkurl\.com)|(?:lru\.jp)|(?:lt\.tl)|(?:lurl\.no)|(?:macte\.ch)|(?:mash\.to)|(?:merky\.de)|(?:migre\.me)|(?:miniurl\.com)|(?:minurl\.fr)|(?:mke\.me)|(?:moby\.to)|(?:moourl\.com)|(?:mrte\.ch)|(?:myloc\.me)|(?:myurl\.in)|(?:n\.pr)|(?:nbc\.co)|(?:nblo\.gs)|(?:nn\.nf)|(?:not\.my)|(?:notlong\.com)|(?:nsfw\.in)|(?:nutshellurl\.com)|(?:nxy\.in)|(?:nyti\.ms)|(?:o-x\.fr)|(?:oc1\.us)|(?:om\.ly)|(?:omf\.gd)|(?:omoikane\.net)|(?:on\.cnn.com)|(?:on\.mktw.net)|(?:onforb\.es)|(?:orz\.se)|(?:ow\.ly)|(?:ping\.fm)|(?:pli\.gs)|(?:pnt\.me)|(?:politi\.co)|(?:post\.ly)|(?:pp\.gg)|(?:profile\.to)|(?:ptiturl\.com)|(?:pub\.vitrue.com)|(?:qlnk\.net)|(?:qte\.me)|(?:qu\.tc)|(?:qy\.fi)|(?:r\.im)|(?:rb6\.me)|(?:read\.bi)|(?:readthis\.ca)|(?:reallytinyurl\.com)|(?:redir\.ec)|(?:redirects\.ca)|(?:redirx\.com)|(?:retwt\.me)|(?:ri\.ms)|(?:rickroll\.it)|(?:riz\.gd)|(?:rt\.nu)|(?:ru\.ly)|(?:rubyurl\.com)|(?:rurl\.org)|(?:rww\.tw)|(?:s4c\.in)|(?:s7y\.us)|(?:safe\.mn)|(?:sameurl\.com)|(?:sdut\.us)|(?:shar\.es)|(?:shink\.de)|(?:shorl\.com)|(?:short\.ie)|(?:short\.to)|(?:shortlinks\.co.uk)|(?:shorturl\.com)|(?:shout\.to)|(?:show\.my)|(?:shrinkify\.com)|(?:shrinkr\.com)|(?:shrt\.fr)|(?:shrt\.st)|(?:shrten\.com)|(?:shrunkin\.com)|(?:simurl\.com)|(?:slate\.me)|(?:smallr\.com)|(?:smsh\.me)|(?:smurl\.name)|(?:sn\.im)|(?:snipr\.com)|(?:snipurl\.com)|(?:snurl\.com)|(?:sp2\.ro)|(?:spedr\.com)|(?:srnk\.net)|(?:srs\.li)|(?:starturl\.com)|(?:su\.pr)|(?:surl\.co.uk)|(?:surl\.hu)|(?:t\.cn)|(?:t\.co)|(?:t\.lh.com)|(?:ta\.gd)|(?:tbd\.ly)|(?:tcrn\.ch)|(?:tgr\.me)|(?:tgr\.ph)|(?:tighturl\.com)|(?:tiniuri\.com)|(?:tiny\.cc)|(?:tiny\.ly)|(?:tiny\.pl)|(?:tinylink\.in)|(?:tinyuri\.ca)|(?:tinyurl\.com)|(?:tl\.gd)|(?:tmi\.me)|(?:tnij\.org)|(?:tnw\.to)|(?:tny\.com)|(?:to\.ly)|(?:togoto\.us)|(?:totc\.us)|(?:toysr\.us)|(?:tpm\.ly)|(?:tr\.im)|(?:tra\.kz)|(?:trunc\.it)|(?:twhub\.com)|(?:twirl\.at)|(?:twitclicks\.com)|(?:twitterurl\.net)|(?:twitterurl\.org)|(?:twiturl\.de)|(?:twurl\.cc)|(?:twurl\.nl)|(?:u\.mavrev.com)|(?:u\.nu)|(?:u76\.org)|(?:ub0\.cc)|(?:ulu\.lu)|(?:updating\.me)|(?:ur1\.ca)|(?:url\.az)|(?:url\.co.uk)|(?:url\.ie)|(?:url360\.me)|(?:url4\.eu)|(?:urlborg\.com)|(?:urlbrief\.com)|(?:urlcover\.com)|(?:urlcut\.com)|(?:urlenco\.de)|(?:urli\.nl)|(?:urls\.im)|(?:urlshorteningservicefortwitter\.com)|(?:urlx\.ie)|(?:urlzen\.com)|(?:usat\.ly)|(?:use\.my)|(?:vb\.ly)|(?:vgn\.am)|(?:vl\.am)|(?:vm\.lc)|(?:w55\.de)|(?:wapo\.st)|(?:wapurl\.co.uk)|(?:wipi\.es)|(?:wp\.me)|(?:x\.vu)|(?:xr\.com)|(?:xrl\.in)|(?:xrl\.us)|(?:xurl\.es)|(?:xurl\.jp)|(?:y\.ahoo.it)|(?:yatuc\.com)|(?:ye\.pe)|(?:yep\.it)|(?:yfrog\.com)|(?:yhoo\.it)|(?:yiyd\.com)|(?:youtu\.be)|(?:yuarel\.com)|(?:z0p\.de)|(?:zi\.ma)|(?:zi\.mu)|(?:zipmyurl\.com)|(?:zud\.me)|(?:zurl\.ws)|(?:zz\.gd)|(?:zzang\.kr)|(?:â€º\.ws)|(?:âœ©\.ws)|(?:âœ¿\.ws)|(?:â¥\.ws)|(?:âž”\.ws)|(?:âžž\.ws)|(?:âž¡\.ws)|(?:âž¨\.ws)|(?:âž¯\.ws)|(?:âž¹\.ws)|(?:âž½\.ws))\/[a-z0-9]*/gi }

                function h(e, t) { return "string" != typeof e[t] && (e[t] = e[t].map(function(e) { return e.toLowerCase() })), e }

                function p(e) { return e = u(e), e = h(e, "excludeEmbed"), e = h(e, "inlineEmbed"), h(e, "openGraphExclude") }

                function m(e) { return e[e.length - 1] }

                function g(e) { return ":" === e[0] && ":" === m(e) && e.substring(1, e.length - 1) }

                function v(e, t) { return t = { exports: {} }, e(t, t.exports), t.exports }

                function y(e, t) { return t.template.vimeo(e, t) || t.template.youtube(e, t) }

                function b(e) { if (e.customVideoClickHandler) return e.videoClickHandler(e, y); for (var t = document.getElementsByClassName(e.videoClickClass), n = 0; n < t.length; n++) t[n].onclick = function() { e.onVideoShow(); var t = this.getAttribute("data-ejs-url") + "?autoplay=true";
                        this.parentNode.parentNode.innerHTML = y(t, e) } }

                function x(e) { if (e.videojsOptions.width = e.videoWidth, e.videojsOptions.height = e.videoHeight, e.videoJS) { if (!e.plugins.videojs) throw new ReferenceError("You have enabled videojs but you haven't loaded the library.Find it at http://videojs.com/"); for (var t = e.plugins.videojs, n = e.input.getElementsByClassName("ejs-video-js"), r = 0; r < n.length; r++) t(n[r], e.videojsOptions, function() { return e.videojsCallback() }) } }

                function w(e) { var t = e.options.link ? new RegExp("([^>]*" + e.regex.source + ")</a>", "gm") : new RegExp("([^\\s]*" + e.regex.source + ")", "gm"); return e.output = e.output.replace(t, function(t) { var n = e.options.link ? t.slice(0, -4) : t; return e.options.served.indexOf(n) === -1 ? (e.options.served.push(n), e.options.link ? e.options.inlineText ? t + e.template(t.slice(0, -4)) : e.template(t.slice(0, -4)) + "</a>" : e.options.inlineText ? t + e.template(t) : e.template(t)) : t }), [e.output, e.embeds] }

                function k(e) { for (var t; null !== (t = s(e.regex, e.input));) { var n = t[0]; if (!(e.options.served.indexOf(n) !== -1 || e.options.served.length && e.options.singleEmbed)) { e.options.served.push(n); var r = e.template(n);
                            e.embeds.push({ text: r, index: t.index }) } } return [e.output, e.embeds] }

                function C(e) { return c(e.options, e.service) ? w(e) : k(e) }

                function S(e, t, n, r, i, o, a) { return l(r, o) || l(r, o) && a ? ae(e, t, n, r, i, o) : [t, n] }

                function _(e, t, n) { var r = (e.options.link ? n[0].slice(0, -4) : n[0]) || n[1]; return e.options.served.indexOf(r) >= 0 ? Promise.resolve(null) : new Promise(function(i) { t(e, n, r).then(function(t) { return t ? (e.options.served.push(r), void i(t)) : i() }) }) }

                function L(e, t) { for (var n, r = e.options.link ? new RegExp("([^>]*" + e.regex.source + ")</a>", "gi") : new RegExp("([^\\s]*" + e.regex.source + ")", "gi"), i = []; null !== (n = s(r, e.output));) i.push(_(e, t, n)); return new Promise(function(t) { i.length ? Promise.all(i).then(function(n) { var i = 0;
                            e.output = e.output.replace(r, function(t) { return e.options.link ? e.options.inlineText ? t + n[i++] : n[i++] + "</a>" : e.options.inlineText ? t + n[i++] : n[i++] }), t(e.output) }) : t(e.output) }) }

                function T(e, t, n) { var r = n[0]; if (!(e.options.served.indexOf(r) >= 0)) return new Promise(function(i) { t(e, n, r, !0).then(function(t) { t || i(), e.options.served.push(r), e.embeds.push({ text: t, index: n.index }), i() }) }) }

                function M(e, t) { for (var n, r = []; null !== (n = s(e.regex, e.input));) r.push(T(e, t, n)); return new Promise(function(t) { Promise.all(r).then(function() { t(e.embeds) }) }) }

                function j(e, t) { return new Promise(function(n) { c(e.options, e.service) ? L(e, t).then(function(t) { return n([t, e.embeds]) }) : M(e, t).then(function(t) { return n([e.output, t]) }) }) }

                function O(e) { var t = "http://maps.googleapis.com/maps/api/geocode/json?address=" + e + "&sensor=false"; return new Promise(function(e) { le(t).then(function(e) { return e.json() }).then(function(t) { return e([t.results[0].geometry.location.lat, t.results[0].geometry.location.lng]) }) }) }

                function A(e, t, n, r) { var i = E(e); return r.template.gmap(t, n, i, r) }

                function E(e) { return e.split("(")[1].split(")")[0] }

                function N(e) { return e = e.replace(/&amp;/gm, ""), e = e.replace(/&lt;/g, "<"), e = e.replace(/&gt;/g, ">") }

                function P(e) { return e = e.replace(/^([ \t]*)/g, ""), e = e.replace(/[ \t]*$/g, "") }

                function I(e, t) { return '<pre><code class="ejs-code hljs ' + t + '">' + (e.value || e) + "</code></pre>" }

                function D(e) { return { title: e.snippet.title, thumbnail: e.snippet.thumbnails.medium.url, rawDescription: e.snippet.description, views: e.statistics.viewCount, likes: e.statistics.likeCount, description: t(e.snippet.description, 150), url: "https://www.youtube.com/watch?v=" + e.id, id: e.id, host: "youtube" } }

                function F(e, t) { var n = "https://www.googleapis.com/youtube/v3/videos?id=" + e + "&key=" + t.googleAuthKey + "&part=snippet,statistics"; return new Promise(function(e) { le(n).then(function(e) { return e.json() }).then(function(t) { return e(t.items[0]) }) }) }

                function z(e, t, n, r) { var i = r ? t[1] : t[2],
                        o = "https://www.youtube.com/embed/" + i; return e.options.videoDetails ? new Promise(function(t) { F(i, e.options).then(function(n) { return t(re(D(n), n, o, e.options)) }) }) : new Promise(function(t) { return t(y(o, e.options)) }) }

                function R(e, t) { return { title: e.title, thumbnail: e.thumbnail_medium, rawDescription: e.description.replace(/\n/g, "<br/>").replace(/&#10;/g, "<br/>"), views: e.stats_number_of_plays, likes: e.stats_number_of_likes, description: t(e.description.replace(/((<|&lt;)br\s*\/*(>|&gt;)\r\n)/g, " "), 150), url: e.url, id: e.id, host: "vimeo" } }

                function B(e) { var t = "https://vimeo.com/api/v2/video/" + e + ".json"; return new Promise(function(e) { le(t).then(function(e) { return e.json() }).then(function(t) { return e(t[0]) }) }) }

                function H(e, n, r, i) { var o; if (o = i ? n[3] : e.options.link ? n[0].slice(0, -4).split("/").slice(-1).pop() : n[0].split("/").slice(-1).pop()) { var a = "https://player.vimeo.com/video/" + o; return e.options.videoDetails ? new Promise(function(n) { B(o).then(function(r) { return n(re(R(r, t), r, a, e.options)) }) }) : new Promise(function(t) { return t(y(a, e.options)) }) } }

                function $(e, t) { var n = "http://www.slideshare.net/api/oembed/2?url=" + t + "&format=jsonp&maxwidth=" + e.options.videoWidth + "&maxheight=" + e.options.videoHeight; return new Promise(function(e) { ne(n, { credentials: "include" }).then(function(e) { return e.json() }).then(function(t) { return e(t.html) }) }) }

                function W(e, t, n) { return new Promise(function(t) { $(e, n).then(function(n) { return t(e.template(n)) }) }) }

                function U(e, t) { e = encodeURIComponent(e); var n = new Function("url", "return `" + t.options.openGraphEndpoint + "`")(e); return new Promise(function(e) { le(n).then(function(e) { return e.json() }).then(function(n) { return e(t.options.onOpenGraphFetch(n) || n) }) }) }

                function q(e, t, n) { return n.match(e.excludeRegex) ? Promise.resolve() : new Promise(function(t) { U(n, e).then(function(n) { return t(n && n.success ? e.template(n) : "") }) }) }

                function G(e, t) { return t.template.github(e, t) }

                function V(e) { var t = "https://api.github.com/repos/" + e.user + "/" + e.repo; return new Promise(function(e) { return le(t).then(function(e) { return e.json() }).then(function(t) { return e(t) }) }) }

                function K(e, t, n, r) { var i = r ? { user: t[1], repo: t[2] } : { user: t[2], repo: t[3] }; if (i.repo) return new Promise(function(t) { V(i).then(function(n) { return t(G(n, e.options)) }) }) }
                var Y = {
                        url: function(e, t) { var r = t.linkOptions; return '<a href="' + n(e) + '" rel="' + r.rel + '" target="' + r.target + '">' + e + "</a>" },
                        smiley: function(e, t, n) { return '<span class="icon-emoticon" title="' + e + '">' + t + n + "</span>" },
                        emoji: function(e) { return '<span class="emoticon emoticon-' + e + '" title=":' + e + ':"></span>' },
                        audio: function(e) { return '<div class="ejs-audio ejs-plyr ejs-embed"><audio src="' + e + '" controls class="video-js ejs-video-js"></audio></div>' },
                        soundcloud: function(e, t) { var n = t.soundCloudOptions; return '<div class="ejs-embed">\n\t\t<iframe height="160" scrolling="no" src="https://w.soundcloud.com/player/?url=' + e + "&auto_play=" + n.autoPlay + "&hide_related=" + n.hideRelated + "&show_comments= " + n.showComments + "&show_user=" + n.showUser + "&show_reposts=" + n.showReposts + "&visual=" + n.visual + "&download=" + n.download + "&color=" + n.themeColor + "&theme_color=" + n.themeColor + '"></iframe>\n\t\t</div>' },
                        spotify: function(e) { var t = m(e.split("/")); return '<div class="ejs-embed"><iframe src="https://embed.spotify.com/?uri=spotify:track:' + t + '" height="80"></iframe></div>' },
                        codepen: function(e, t) { return '<div class="ejs-embed ejs-codepen"><iframe scrolling="no" height="' + t.codeEmbedHeight + '" src="' + e.replace(/\/pen\//, "/embed/") + "/?height=" + t.codeEmbedHeight + '"></iframe></div>' },
                        ideone: function(e, t) { return '<div class="ejs-ideone ejs-embed"><iframe src="http://ideone.com/embed/' + e.split("/")[1] + '" frameborder="0" height="' + t.codeEmbedHeight + '"></iframe></div>' },
                        jsbin: function(e, t) { return '<div class="ejs-jsbin ejs-embed"><iframe height="' + t.codeEmbedHeight + '" class="jsbin-embed foo" src="http://' + e + '/embed?html,js,output"></iframe></div>' },
                        jsfiddle: function(e, t) { return e = "/" === m(e) ? e.slice(0, -1) : e, e = e.indexOf("//") !== -1 ? e : "//" + e, '<div class="ejs-embed ejs-jsfiddle"><iframe height="' + t.codeEmbedHeight + '" src="' + e + '/embedded"></iframe></div>' },
                        plunker: function(e, t) { return '<div class="ejs-embed ejs-plunker"><iframe class="ne-plunker" src="http://embed.plnkr.co/' + e + '" height="' + t.codeEmbedHeight + '"></iframe></div>' },
                        image: function(e) { return '<div class="ejs-image ejs-embed"><div class="ne-image-wrapper"><img src="' + e + '"/></div></div>' },
                        flickr: function(e, t) {
                            return '<div class="ejs-embed"><div class="ne-image-wrapper"><iframe src="' + n(e.split("/?")[0]) + '/player/" width="' + t.videoWidth + '" height="' + t.videoHeight + '"></iframe></div></div>';
                        },
                        instagram: function(e, t) { return '<div class="ejs-embed ejs-instagram"><iframe src="' + n(e.split("/?")[0]) + '/embed/" height="' + t.videoHeight + '"></iframe></div>' },
                        facebook: function(e, t) { var r = e.indexOf("/videos/") < 0 ? "post" : "video"; return '<div class="ejs-embed ejs-facebook"><iframe src="https://www.facebook.com/plugins/' + r + ".php?href=" + n(e.split("/?")[0]) + '" height="' + t.videoHeight + '" target="_top" ></iframe></div>' },
                        slideShare: function(e) { return '<div class="ejs-embed ejs-slideshare">' + e + "</div>" },
                        video: function(e) { return '<div class="ejs-video ejs-embed"><div class="ejs-video-player"><div class="ejs-player ejs-plyr"><video src="' + e + '" class="ejs-video-js video-js" controls></video></div></div></div>' },
                        dailymotion: function(e, t) { var n = m(e.split("/")); return '<div class="ejs-video ejs-embed"><iframe src="http://www.dailymotion.com/embed/video/' + n + '" height="' + t.videoHeight + '" width="' + t.videoWidth + '"></iframe></div>' },
                        liveleak: function(e, t) { return '<div class="ejs-video ejs-embed"><iframe src="http://www.liveleak.com/e/' + e.split("=")[1] + '" height="' + t.videoHeight + '" width="' + t.videoWidth + '"></iframe></div>' },
                        ted: function(e, t) { var n = e.split("/"),
                                r = n[n.length - 1]; return '<div class="ejs-embed ejs-ted"><iframe src="http://embed.ted.com/talks/' + r + '.html" height="' + t.videoHeight + '" width="' + t.videoWidth + '"></iframe></div>' },
                        ustream: function(e, t) { var n = e.split("/");
                            e.indexOf("/embed/") < 0 && n.splice(1, 0, "embed"); var r = ""; return e.indexOf("/www.ustream.tv/") < 0 && (r += "//www."), '<div class="ejs-embed ejs-ustream"><iframe src="' + r + n.join("/") + '" height="' + t.videoHeight + '" width="' + t.videoWidth + '"></iframe></div>' },
                        detailsVimeo: function(e, t, n) { return '<div class="ejs-video ejs-embed"><div class="ejs-video-preview"><div class="ejs-video-thumb" data-ejs-url="' + n + '"><div class="ejs-thumb" style="background-image:url(' + e.thumbnail + ')"></div><i class="fa fa-play-circle-o"></i></div><div class="ejs-video-detail"><div class="ejs-video-title"><a href="' + e.url + '">' + e.title + '</a></div><div class="ejs-video-desc">' + e.description + '</div><div class="ejs-video-stats"><span><i class="fa fa-eye"></i>' + e.views + '</span><span><i class="fa fa-heart"></i>' + e.likes + "</span></div></div></div></div>" },
                        detailsYoutube: function(e, t, n) { return '<div class="ejs-video ejs-embed"><div class="ejs-video-preview"><div class="ejs-video-thumb" data-ejs-url="' + n + '"><div class="ejs-thumb" style="background-image:url(' + e.thumbnail + ')"></div><i class="fa fa-play-circle-o"></i></div><div class="ejs-video-detail"><div class="ejs-video-title"><a href="' + e.url + '">' + e.title + '</a></div><div class="ejs-video-desc">' + e.description + '</div><div class="ejs-video-stats"><span><i class="fa fa-eye"></i>' + e.views + '</span><span><i class="fa fa-heart"></i>' + e.likes + "</span></div></div></div></div>" },
                        vine: function(e, t) { var n = m(e.split("/")),
                                r = t.vineOptions; return '<div class="ejs-vine"><iframe class="ejs-vine-iframe" src="https://vine.co/v/' + n + "/embed/" + r.type + '" height="' + r.height + '" width="' + r.width + '"></iframe></div>' },
                        vimeo: function(e, t) { return t.plyr ? "<div class='ejs-plyr'><div data-video-type='vimeo' data-video-id='" + m(e.split("/")) + "'></div></div>" : '<div class="ejs-video-player ejs-embed"><iframe src="' + e + '" frameBorder="0" width="' + t.videoWidth + '" height="' + t.videoHeight + '"></iframe></div>' },
                        youtube: function(e, t) { return t.plyr ? "<div class='ejs-plyr'><div data-video-type='youtube' data-video-id='" + m(e.split("/")) + "'></div></div>" : '<div class="ejs-video-player ejs-embed"><iframe src="' + e + '" frameBorder="0" width="' + t.videoWidth + '" height="' + t.videoHeight + '"></iframe></div>' },
                        openGraph: function(e, t) { return '<div class="ejs-embed ejs-ogp"><div class="ejs-ogp-thumb" style="background-image:url(' + e.image + ')"></div><div class="ejs-ogp-details"><div class="ejs-ogp-title"><a href="' + e.url + '" target="' + t.linkOptions.target + '">' + e.title + '</a></div><div class="ejs-ogb-details">' + e.description + "</div></div></div>" },
                        github: function(e, t) { return '<div class="ejs-embed ejs-github"><div class="ejs-ogp-thumb" style="background-image:url(' + e.owner.avatar_url + ')"></div><div class="ejs-ogp-details"><div class="ejs-ogp-title"><a href="' + e.html_url + '" target="' + t.linkOptions.target + '">' + e.full_name + '</a></div><div class="ejs-ogb-details">' + e.description + '</div><div class="ejs-github-stats"><span><i class="fa fa-star"></i>' + e.stargazers_count + '</span><span><i class="fa fa-code-fork"></i>' + e.network_count + "</span></div></div></div>" },
                        gmap: function(e, t, n, r) { var i = r.mapOptions; return "place" === i.mode ? '<div class="ejs-embed ejs-map"><iframe width="' + r.videoWidth + '" height="' + r.videoHeight + '" src="https://www.google.com/maps/embed/v1/place?key=' + r.googleAuthKey + "&q=" + n + '"></iframe></div>' : "streetview" === i.mode ? '<div class="ejs-embed ejs-map"><iframe width="' + r.videoWidth + '" height="' + r.videoHeight + '" src="https://www.google.com/maps/embed/v1/streetview?key=' + r.googleAuthKey + "&location=" + e + "," + t + '&heading=210&pitch=10&fov=35"></iframe></div>' : "view" === i.mode ? '<div class="ejs-embed ejs-map"><iframe width="' + r.videoWidth + '" height="' + r.videoHeight + '" src="https://www.google.com/maps/embed/v1/view?key=' + r.googleAuthKey + "&center=" + e + "," + t + '&zoom=18&maptype=satellite"></iframe></div>' : void 0 }
                    },
                    X = { mentions: /(^|\s)(@[a-z0-9_-]+)/gi, hashtag: /(^|\s)(#[a-z\d-]+)/gi, basicAudio: /((?:https?):\/\/\S*\.(?:wav|mp3|ogg))/gi, soundCloud: /(soundcloud.com)\/[a-zA-Z0-9-_]+\/[a-zA-Z0-9-_]+/gi, spotify: /spotify.com\/track\/[a-zA-Z0-9_]+/gi, codepen: /http:\/\/codepen.io\/([A-Za-z0-9_]+)\/pen\/([A-Za-z0-9_]+)/gi, gist: /gist.github.com\/[a-zA-Z0-9_-]+\/([a-zA-Z0-9]+)/gi, highlightCode: /(`{3})(\s|[a-z]+)\s*([\s\S]*?[^`])\s*\1(?!`)/gm, inlineCode: /(`)\s*([\s\S]*?[^`])\s*\1(?!`)/gm, ideone: /ideone.com\/[a-zA-Z0-9]{6}/gi, jsbin: /jsbin.com\/[a-zA-Z0-9_]+\/[0-9_]+/gi, jsfiddle: /jsfiddle.net\/[a-zA-Z0-9_]+\/[a-zA-Z0-9_\/]+/gi, plunker: /plnkr.co\/edit\/[a-zA-Z0-9\?=]+/gi, basicImage: /((?:https?):\/\/\S*\.(?:gif|jpg|jpeg|tiff|png|svg|webp))/gi, flickr: /flickr.com\/[a-z]+\/[a-zA-Z@_$!\d\-\]+\/[\d]+/gi, instagram: /instagram.com\/p\/[a-zA-Z0-9_\/\?\-\=]+/gi, facebook: /((https?:\/\/)?www\.facebook\.com\/(?:(videos|posts)\.php\?v=\d+|.*?\/(videos|posts)\/\d+\/?))/gi, slideShare: /slideshare.net\/[a-zA-Z0-9_-]*\/[a-zA-Z0-9_-]*/gi, github: /[^\.]github.com\/([\w\.\-]+)\/([\w\.\-]+)/gi, basicVideo: /(?:https?):\/\/\S*\.(?:ogv|webm|mp4)/gi, dailymotion: /dailymotion.com\/video\/[a-zA-Z0-9-_]+/gi, liveleak: /liveleak.com\/view\?i=[a-zA-Z0-9_]+/gi, ted: /ted.com\/talks\/[a-zA-Z0-9_]+/gi, ustream: /ustream.tv\/[a-z\/0-9]*/gi, vimeo: /https?:\/\/(?:www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)*/gi, vine: /vine.co\/v\/[a-zA-Z0-9]+/gi, youtube: /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/ytscreeningroom\?v=|\/feeds\/api\/videos\/|\/user\S*[^\w\-\s]|\S*[^\w\-\s]))([\w\-]{11})[?=&+%\w-]*/gi, gmap: /@\((.+)\)/gi, twitter: /https:\/\/twitter\.com\/\w+\/\w+\/\d+/gi, smileys: /:[a-zA-Z0-9-_+]+:(:skin-tone-[2-6]:)?/gi },
                    J = function(e, t) { return e.replace(X.smileys, function(e) { if ("function" == typeof t.customEmoji) return t.customEmoji(e); var n = g(e); return n ? t.template.emoji(n, t) : e }) },
                    Z = [{ text: ":)", code: "&#xe60a" }, { text: ":D", code: "&#xe608" }, { text: ":d", code: "&#xe608" }, { text: ":(", code: "&#xe60e" }, { text: ":/", code: "&#xe620" }, { text: ":P", code: "&#xe60c" }, { text: ":p", code: "&#xe60c" }, { text: "3:)", code: "&#xe618" }, { text: "(^)", code: "&#xe607" }, { text: ";)", code: "&#xe610" }, { text: ":o", code: "&#xe61a" }, { text: ":O", code: "&#xe61a" }, { text: "-_-", code: "&#xe61e" }, { text: "(y)", code: "&#xe606" }, { text: ":*", code: "&#xe604" }, { text: "&lt;3", code: "&#xe604" }, { text: "<3", code: "&#xe604" }, { text: "&lt;/3", code: "&#xe605" }, { text: "</3", code: "&#xe605" }, { text: "^_^", code: "&#xe612" }, { text: "8-)", code: "&#xe614" }, { text: "8|", code: "&#xe614" }, { text: ":S", code: "&#xe61c" }, { text: ":s", code: "&#xe61c" }],
                    Q = function(e, t) { var n = t.customFontIcons.length ? t.customFontIcons : Z,
                            r = n.map(function(e) { return i(e.text) }),
                            o = new RegExp("(^|\\s)(" + r.join("|") + ")(?=\\s|$)", "gi"); return e.replace(o, function(e, o, a) { var s = r.indexOf(i(a)); if (s === -1) return e; var l = n[s].code; return t.template.smiley(a, o, l, t) }) },
                    ee = function(e, t) { var n = t.linkOptions; return e.replace(f(), function(e) { if (")" === m(e)) return e; var r = m(e.split(".")); return "/" === m(e) && (e = e.slice(0, -1)), n.exclude.indexOf(r) === -1 ? t.template.url(e, t) : e }) },
                    te = "undefined" != typeof window ? window : "undefined" != typeof e ? e : "undefined" != typeof self ? self : {},
                    ne = v(function(e, t) {! function(n, r) { r(t, e) }(te, function(e, t) {
                            function n() { return "jsonp_" + Date.now() + "_" + Math.ceil(1e5 * Math.random()) }

                            function r(e) { try { delete window[e] } catch (t) { window[e] = void 0 } }

                            function i(e) { var t = document.getElementById(e);
                                document.getElementsByTagName("head")[0].removeChild(t) }

                            function o(e) { var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                                    o = e,
                                    s = t.timeout || a.timeout,
                                    l = t.jsonpCallback || a.jsonpCallback,
                                    c = void 0; return new Promise(function(a, u) { var d = t.jsonpCallbackFunction || n(),
                                        f = l + "_" + d;
                                    window[d] = function(e) { a({ ok: !0, json: function() { return Promise.resolve(e) } }), c && clearTimeout(c), i(f), r(d) }, o += o.indexOf("?") === -1 ? "?" : "&"; var h = document.createElement("script");
                                    h.setAttribute("src", "" + o + l + "=" + d), h.id = f, document.getElementsByTagName("head")[0].appendChild(h), c = setTimeout(function() { u(new Error("JSONP request to " + e + " timed out")), r(d), i(f) }, s) }) } var a = { timeout: 5e3, jsonpCallback: "callback", jsonpCallbackFunction: null };
                            t.exports = o }) }),
                    re = function(e, t, n, r) { return "vimeo" === e.host ? r.template.detailsVimeo(e, t, n, r) : "youtube" === e.host ? r.template.detailsYoutube(e, t, n, r) : void 0 },
                    ie = function(e) { if (e.plyr) { if (!e.plugins.plyr) throw new ReferenceError("You have enabled plyr but you haven't loaded the library.Find it at https://plyr.io/"); var t = e.plugins.plyr;
                            t.setup(".ejs-plyr", e.plyrOptions) } },
                    oe = function(e) { for (var t = document.getElementsByClassName(e), n = 0; n < t.length; n++) t[n].onclick = null },
                    ae = function(e, t, n, r, i, o) { var a = { input: e, output: t, options: r, embeds: n, regex: i, service: o, template: function(e) { return this.options.template[this.service](e, this.options) } }; return C(a) },
                    se = function(e, t, n, r) { this.input = e, this.output = t, this.options = n, this.embeds = r, this.regex = X.twitter, this.service = "twitter", this.load = this.load.bind(this), "string" != typeof this.options.input && this.options.input.addEventListener("rendered", this.load, !1) };
                se.prototype.tweetData = function(e) { var t = this.options.tweetOptions,
                        n = "https://api.twitter.com/1/statuses/oembed.json?omit_script=true&url=" + e + "&maxwidth=" + t.maxWidth + "&hide_media=" + t.hideMedia + "&hide_thread=" + t.hideThread + "&align=" + t.align + "&lang=" + t.lang; return new Promise(function(e) { ne(n, { credentials: "include" }).then(function(e) { return e.json() }).then(function(t) { return e(t) }) }) }, se.prototype.load = function() { var e = this.options.plugins.twitter;
                    e.widgets.load(this.options.element), e.events.bind("loaded", this.options.onTweetsLoad) }, se.urlToText = function(e, t, n) { return new Promise(function(t) { return e.tweetData(n).then(function(e) { return t(e.html) }) }) }, se.prototype.process = function() { var e = this; return new Promise(function(t) { return j(e, se.urlToText).then(function(e) { return t(e) }) }) };
                var le = "function" == typeof fetch ? fetch : function(e, t) { return t = t || {}, new Promise(function(n, r) {
                            function i() { var e, t = [],
                                    n = [],
                                    r = {}; return o.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm, function(i, o, a) { t.push(o = o.toLowerCase()), n.push([o, a]), e = r[o], r[o] = e ? e + "," + a : a }), { ok: 1 == (o.status / 200 | 0), status: o.status, statusText: o.statusText, url: o.responseURL, clone: i, text: function() { return Promise.resolve(o.responseText) }, json: function() { return Promise.resolve(o.responseText).then(JSON.parse) }, xml: function() { return Promise.resolve(o.responseXML) }, blob: function() { return Promise.resolve(new Blob([o.response])) }, headers: { keys: function() { return t }, entries: function() { return n }, get: function(e) { return r[e.toLowerCase()] }, has: function(e) { return e.toLowerCase() in r } } } } var o = new XMLHttpRequest;
                            o.open(t.method || "get", e); for (var a in t.headers) o.setRequestHeader(a, t.headers[a]);
                            o.withCredentials = "include" == t.credentials, o.onload = function() { n(i()) }, o.onerror = r, o.send(t.body) }) },
                    ce = function(e, t, n, r) { for (var i, o = [], a = [], l = "map"; null !== (i = s(X.gmap, t));) { n.served.push(i); var u = "place" !== n.mapOptions.mode ? O(i[0]) : Promise.resolve([null, null]);
                            o.push(u), a.push(i) } return new Promise(function(e) { Promise.all(o).then(function(i) { var s = function(e) { var o = i[e],
                                        s = o[0],
                                        u = o[1],
                                        d = A(a[e][0], s, u, n);
                                    c(n, l) ? t = t.replace(X.gmap, function(e) { return '<span class="ejs-location">' + E(e) + "</span>" + d }) : (r.push({ text: d, index: a[e][0].index }), t = t.replace(X.gmap, function(e) { return '<span class="ejs-location">' + E(e) + "</span>" })) }; for (var u in o) s(u);
                                e([t, r]) }) }) },
                    ue = function(e, t) { if (!t.plugins.marked) throw new ReferenceError("marked.js is not loaded."); var n = t.plugins.marked,
                            r = new n.Renderer; return r.link = function(e, n, r) { return e.indexOf("&lt;/a") === -1 ? e : e.match(/&gt;(.+)&lt;\/a/gi) ? (n || (n = ""), '<a href="' + RegExp.$1 + '" rel=' + t.linkOptions.rel + '" target="' + t.linkOptions.target + '" title="' + n + '">' + r + "</a>") : void 0 }, r.image = function(e, t, n) { return e.match(/&gt;(.+)&lt;\/a/gi) ? (t || (t = ""), '<div class="ejs-image ejs-embed"><div class="ne-image-wrapper"><img src="' + RegExp.$1 + '" title="' + t + '" alt="' + n + '"/></div></div>') : '<div class="ejs-image ejs-embed"><div class="ne-image-wrapper"><img src="' + e + '" title="' + t + '" alt="' + n + '"/></div></div>' }, r.paragraph = function(e) { return "<p> " + e + " </p>" }, n.Lexer.rules.gfm.heading = n.Lexer.rules.normal.heading, n.Lexer.rules.tables.heading = n.Lexer.rules.normal.heading, t.markedOptions.renderer = r, t.markedOptions.highlight = !1, n(e, t.markedOptions) },
                    de = function(e, t) { return e = e.replace(X.inlineCode, function(e, t, n) { return "<code>" + n + "</code>" }), e.replace(X.highlightCode, function(e, n, r, i) { var o = i;
                            o = P(o), o = N(o), o = o.replace(/:\/\//g, "~P"); var a, s = r.split("\n")[0],
                                l = t.plugins.highlightjs; return s ? a = l.highlightAuto(o, [s]) : (a = l.highlightAuto(o), s = a.language), I(a, s) }) },
                    fe = function(e, t, n, r) { var i = this;
                        this.input = e, this.output = t, this.options = n, this.embeds = r, this.regex = X.gist, this.service = "gist", "string" != typeof this.options.input && this.options.input.addEventListener("rendered", function() { i.load() }) };
                fe.prototype.template = function(e) { return '<div class="ejs-gist" data-src="' + e + '"></div>' }, fe.prototype.load = function() { for (var e = this.options.input.getElementsByClassName("ejs-gist"), t = 0; t < e.length; t++) { var n = document.createElement("iframe");
                        n.setAttribute("width", "100%"), n.id = "ejs-gist-" + t; var r = e[t];
                        r.innerHTML = "", r.appendChild(n); var i = e[t].getAttribute("data-src");
                        i = i.indexOf("http") === -1 ? "https://" + i : i; var o = '<html><base target="_parent"/><body onload="parent.document.getElementById(\'ejs-gist-' + t + '\').style.height=parseInt(document.body.scrollHeight)+20+\'px\'"><script type="text/javascript" src="' + i + '.js"></script></body></html>',
                            a = n.document;
                        n.contentDocument ? a = n.contentDocument : n.contentWindow && (a = n.contentWindow.document), a.open(), a.writeln(o), a.close() } }, fe.prototype.process = function() { return C(this) };
                var he = function(e, t, n, r) { var i = { input: e, output: t, options: n, embeds: r, regex: X.youtube, service: "youtube" }; return new Promise(function(e) { return j(i, z).then(function(t) { return e(t) }) }) },
                    pe = function(e, t, n, r) { var i = { input: e, output: t, options: n, embeds: r, regex: X.vimeo, service: "vimeo" }; return new Promise(function(e) { return j(i, H).then(function(t) { return e(t) }) }) },
                    me = function(e, t, n, r) { var i = { input: e, output: t, options: n, embeds: r, regex: X.slideShare, service: "slideshare", template: function(e) { return this.options.template.slideShare(e, this.options) } }; return new Promise(function(e) { return j(i, W).then(function(t) { return e(t) }) }) },
                    ge = function(e, t, n, r) { var i = { input: e, output: t, options: n, embeds: r, service: "opengraph", regex: f(), excludeRegex: new RegExp([".mp4|.mp3|.gif|.pdf|.doc|.ppt|.docx|.jpg|.jpeg|.ogg"].concat(n.openGraphExclude).join("|"), "gi"), template: function(e) { return this.options.template.openGraph(e, this.options) } }; return new Promise(function(e) { return j(i, q).then(function(t) { return e(t) }) }) },
                    ve = function(e, t, n, r) { var i = { input: e, output: t, options: n, embeds: r, service: "github", regex: X.github }; return new Promise(function(e) { return j(i, K).then(function(t) { return e(t) }) }) },
                    ye = function(e, t) { var n = X.mentions; return e.replace(n, function(e, n, r) { var i = r.split("@")[1]; return n + t.mentionsUrl(i) }) },
                    be = function(e, t) { var n = X.hashtag; return e.replace(n, function(e, n, r) { var i = r.split("#")[1]; return n + t.hashtagUrl(i) }) },
                    xe = {},
                    we = { marked: !1, markedOptions: {}, link: !0, linkOptions: { target: "self", exclude: ["pdf"], rel: "" }, emoji: !0, customEmoji: [], fontIcons: !0, customFontIcons: [], highlightCode: !1, mentions: !1, hashtag: !1, videoJS: !1, videojsOptions: { fluid: !0, preload: "metadata" }, plyr: !1, plyrOptions: {}, locationEmbed: !0, mapOptions: { mode: "place" }, tweetsEmbed: !1, tweetOptions: { maxWidth: 550, hideMedia: !1, hideThread: !1, align: "none", lang: "en" }, singleEmbed: !1, openGraphEndpoint: null, openGraphExclude: [], videoEmbed: !0, videoHeight: null, videoWidth: null, videoDetails: !0, audioEmbed: !0, imageEmbed: !0, excludeEmbed: [], inlineEmbed: [], inlineText: !0, codeEmbedHeight: 500, vineOptions: { maxWidth: null, type: "postcard", responsive: !0, width: 350, height: 460 }, plugins: { marked: window.marked, videojs: window.videojs, plyr: window.plyr, highlightjs: window.hljs, prismjs: window.Prism, twitter: window.twttr }, googleAuthKey: "", soundCloudOptions: { height: 160, themeColor: "f50000", autoPlay: !1, hideRelated: !1, showComments: !0, showUser: !0, showReposts: !1, visual: !1, download: !1 }, videoClickClass: "ejs-video-thumb", customVideoClickHandler: !1, mentionsUrl: function() {}, hashtagUrl: function() {}, beforeEmbedJSApply: function() {}, afterEmbedJSApply: function() {}, onVideoShow: function() {}, onTweetsLoad: function() {}, videojsCallback: function() {}, onOpenGraphFetch: function() {}, onOpenGraphFail: function() {}, videoClickHandler: function() {}, served: [] },
                    ke = [],
                    Ce = [],
                    Se = [],
                    _e = function(e, t) { var n = d(we),
                            i = d(xe),
                            o = r(n, i); if (this.options = r(o, e), this.options.template = r(Y, t), "string" != typeof this.options.input && "object" != typeof this.options.input) throw ReferenceError("You need to pass an element or the string that needs to be processed");
                        this.input = "object" == typeof this.options.input ? this.options.input.innerHTML : this.options.input };
                return _e.prototype.process = function() { var e = this,
                        t = this.input; if ("" === t) return Promise.resolve(""); var n = p(this.options),
                        r = [],
                        i = t; return this.options.beforeEmbedJSApply(), new Promise(function(o) { n.link && (i = ee(t, n)); var s = n.openGraphEndpoint ? ge(t, i, n, r) : Promise.resolve([i, r]);
                        s.then(function(e) { var r = e[0],
                                i = e[1];
                            n.highlightCode && (r = de(r, n)), n.marked && (r = ue(r, n)), n.emoji && (r = J(r, n)), n.fontIcons && (r = Q(r, n)), n.mentions && (r = ye(r, n)), n.hashtag && (r = be(r, n)); var o;
                            o = S(t, r, i, n, X.ideone, "ideone"), r = o[0], i = o[1]; var a;
                            a = S(t, r, i, n, X.plunker, "plunker"), r = a[0], i = a[1]; var s;
                            s = S(t, r, i, n, X.jsbin, "jsbin"), r = s[0], i = s[1]; var c;
                            c = S(t, r, i, n, X.codepen, "codepen"), r = c[0], i = c[1]; var u;
                            u = S(t, r, i, n, X.jsfiddle, "jsfiddle"), r = u[0], i = u[1]; var d;
                            d = S(t, r, i, n, X.ted, "ted"), r = d[0], i = d[1]; var f;
                            f = S(t, r, i, n, X.dailymotion, "dailymotion"), r = f[0], i = f[1]; var h;
                            h = S(t, r, i, n, X.ustream, "ustream"), r = h[0], i = h[1]; var p;
                            p = S(t, r, i, n, X.liveleak, "liveleak"), r = p[0], i = p[1]; var m;
                            m = S(t, r, i, n, X.basicVideo, "video", n.videoEmbed), r = m[0], i = m[1]; var g;
                            g = S(t, r, i, n, X.vine, "vine"), r = g[0], i = g[1]; var v;
                            v = S(t, r, i, n, X.soundCloud, "soundcloud"), r = v[0], i = v[1]; var y;
                            y = S(t, r, i, n, X.spotify, "spotify"), r = y[0], i = y[1]; var b;
                            b = S(t, r, i, n, X.basicAudio, "audio", n.audioEmbed), r = b[0], i = b[1]; var x;
                            x = S(t, r, i, n, X.flickr, "flickr"), r = x[0], i = x[1]; var w;
                            w = S(t, r, i, n, X.instagram, "instagram"), r = w[0], i = w[1]; var k;
                            k = S(t, r, i, n, X.basicImage, "image", n.imageEmbed), r = k[0], i = k[1]; var C; if (C = S(t, r, i, n, X.facebook, "facebook"), r = C[0], i = C[1], l(n, "gist")) { var _;
                                _ = new fe(t, r, n, i).process(), r = _[0], i = _[1] } return l(n, "youtube") ? he(t, r, n, i) : Promise.resolve([r, i]) }).then(function(e) { var r = e[0],
                                i = e[1]; return l(n, "vimeo") ? pe(t, r, n, i) : Promise.resolve([r, i]) }).then(function(e) { var r = e[0],
                                i = e[1]; return l(n, "github") ? ve(t, r, n, i) : Promise.resolve([r, i]) }).then(function(e) { var r = e[0],
                                i = e[1]; return n.locationEmbed && l(n, "gmap") ? ce(t, r, n, i) : Promise.resolve([r, i]) }).then(function(e) { var r = e[0],
                                i = e[1]; return l(n, "slideshare") ? me(t, r, n, i) : Promise.resolve([r, i]) }).then(function(r) { var i = r[0],
                                o = r[1]; return n.tweetsEmbed && l(n, "twitter") ? (e.twitter = new se(t, i, n, o), e.twitter.process()) : Promise.resolve([i, o]) }).then(function(t) { var r = t[0],
                                i = t[1];
                            e.data = { input: n.input, output: r, options: n, inputString: e.input, services: n.served, template: n.template }, o(a(r, i)) }) }) }, _e.prototype.render = function() { var e = this; if ("string" == typeof this.options.input) throw new Error("You cannot call render method for a string"); if (!this.options.input) throw new Error("You didn't pass an element while creating this instance. render() method can't work without an input element"); return new Promise(function(t) { e.process().then(function(n) { e.options.input.innerHTML = n, e.options.input.className += " embed-js-applied", e.applyListeners(), t(e.data) }) }) }, _e.prototype.applyListeners = function() { x(this.options), ie(this.options), b(this.options); var e = new Event("rendered");
                    this.options.input.dispatchEvent(e), this.options.afterEmbedJSApply() }, _e.prototype.update = function(e, t) { if (e && (this.options = r(this.options, e)), t && (this.options.template = t), !this.options.input || "string" != typeof this.options.input && "object" != typeof this.options.input) throw ReferenceError("You need to pass an element or the string that needs to be processed");
                    this.input = "object" == typeof this.options.input ? this.options.input.innerHTML : this.options.input }, _e.prototype.text = function(e) { var t = this;
                    this.process().then(function(n) { return e(n, t.input) }) }, _e.prototype.destroy = function() { if ("object" != typeof this.options.input) throw new Error("destroy() method only works if an element had been passed in the options object");
                    oe("ejs-video-thumb"), this.options.tweetsEmbed && this.options.input.removeEventListener("rendered", this.twitter.load(), !1), this.options.input.innerHTML = this.input }, _e.setOptions = function(e) { xe = r(we, e) }, _e.applyEmbedJS = function(e, t, n) { void 0 === t && (t = {}), void 0 === n && (n = Y); for (var r = document.querySelectorAll(e), i = 0; i < r.length; i++) t.input = r[i], ke[i] = new _e(t, n), Se[i] = ke[i].render(); return new Promise(function(e) { Promise.all(Se).then(function(t) { e(t) }) }) }, _e.destroyEmbedJS = function() { for (var e = 0; e < ke.length; e++) ke[e].destroy() }, _e.destroyAll = function() { for (var e = 0; e < Ce.length; e++) Ce[e].destroy() }, _e.Template = function() { return Y }, _e
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    22: [function(e, t, n) { n.read = function(e, t, n, r, i) { var o, a, s = 8 * i - r - 1,
                l = (1 << s) - 1,
                c = l >> 1,
                u = -7,
                d = n ? i - 1 : 0,
                f = n ? -1 : 1,
                h = e[t + d]; for (d += f, o = h & (1 << -u) - 1, h >>= -u, u += s; u > 0; o = 256 * o + e[t + d], d += f, u -= 8); for (a = o & (1 << -u) - 1, o >>= -u, u += r; u > 0; a = 256 * a + e[t + d], d += f, u -= 8); if (0 === o) o = 1 - c;
            else { if (o === l) return a ? NaN : (h ? -1 : 1) * (1 / 0);
                a += Math.pow(2, r), o -= c } return (h ? -1 : 1) * a * Math.pow(2, o - r) }, n.write = function(e, t, n, r, i, o) { var a, s, l, c = 8 * o - i - 1,
                u = (1 << c) - 1,
                d = u >> 1,
                f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                h = r ? 0 : o - 1,
                p = r ? 1 : -1,
                m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0; for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = u) : (a = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), t += a + d >= 1 ? f / l : f * Math.pow(2, 1 - d), t * l >= 2 && (a++, l /= 2), a + d >= u ? (s = 0, a = u) : a + d >= 1 ? (s = (t * l - 1) * Math.pow(2, i), a += d) : (s = t * Math.pow(2, d - 1) * Math.pow(2, i), a = 0)); i >= 8; e[n + h] = 255 & s, h += p, s /= 256, i -= 8); for (a = a << i | s, c += i; c > 0; e[n + h] = 255 & a, h += p, a /= 256, c -= 8);
            e[n + h - p] |= 128 * m } }, {}],
    23: [function(e, t, n) { var r = e("./_getNative"),
            i = e("./_root"),
            o = r(i, "DataView");
        t.exports = o }, { "./_getNative": 95, "./_root": 132 }],
    24: [function(e, t, n) {
        function r(e) { var t = -1,
                n = null == e ? 0 : e.length; for (this.clear(); ++t < n;) { var r = e[t];
                this.set(r[0], r[1]) } } var i = e("./_hashClear"),
            o = e("./_hashDelete"),
            a = e("./_hashGet"),
            s = e("./_hashHas"),
            l = e("./_hashSet");
        r.prototype.clear = i, r.prototype["delete"] = o, r.prototype.get = a, r.prototype.has = s, r.prototype.set = l, t.exports = r }, { "./_hashClear": 101, "./_hashDelete": 102, "./_hashGet": 103, "./_hashHas": 104, "./_hashSet": 105 }],
    25: [function(e, t, n) {
        function r(e) { var t = -1,
                n = null == e ? 0 : e.length; for (this.clear(); ++t < n;) { var r = e[t];
                this.set(r[0], r[1]) } } var i = e("./_listCacheClear"),
            o = e("./_listCacheDelete"),
            a = e("./_listCacheGet"),
            s = e("./_listCacheHas"),
            l = e("./_listCacheSet");
        r.prototype.clear = i, r.prototype["delete"] = o, r.prototype.get = a, r.prototype.has = s, r.prototype.set = l, t.exports = r }, { "./_listCacheClear": 113, "./_listCacheDelete": 114, "./_listCacheGet": 115, "./_listCacheHas": 116, "./_listCacheSet": 117 }],
    26: [function(e, t, n) { var r = e("./_getNative"),
            i = e("./_root"),
            o = r(i, "Map");
        t.exports = o }, { "./_getNative": 95, "./_root": 132 }],
    27: [function(e, t, n) {
        function r(e) { var t = -1,
                n = null == e ? 0 : e.length; for (this.clear(); ++t < n;) { var r = e[t];
                this.set(r[0], r[1]) } } var i = e("./_mapCacheClear"),
            o = e("./_mapCacheDelete"),
            a = e("./_mapCacheGet"),
            s = e("./_mapCacheHas"),
            l = e("./_mapCacheSet");
        r.prototype.clear = i, r.prototype["delete"] = o, r.prototype.get = a, r.prototype.has = s, r.prototype.set = l, t.exports = r }, { "./_mapCacheClear": 118, "./_mapCacheDelete": 119, "./_mapCacheGet": 120, "./_mapCacheHas": 121, "./_mapCacheSet": 122 }],
    28: [function(e, t, n) { var r = e("./_getNative"),
            i = e("./_root"),
            o = r(i, "Promise");
        t.exports = o }, { "./_getNative": 95, "./_root": 132 }],
    29: [function(e, t, n) { var r = e("./_getNative"),
            i = e("./_root"),
            o = r(i, "Set");
        t.exports = o }, { "./_getNative": 95, "./_root": 132 }],
    30: [function(e, t, n) {
        function r(e) { var t = -1,
                n = null == e ? 0 : e.length; for (this.__data__ = new i; ++t < n;) this.add(e[t]) } var i = e("./_MapCache"),
            o = e("./_setCacheAdd"),
            a = e("./_setCacheHas");
        r.prototype.add = r.prototype.push = o, r.prototype.has = a, t.exports = r }, { "./_MapCache": 27, "./_setCacheAdd": 133, "./_setCacheHas": 134 }],
    31: [function(e, t, n) {
        function r(e) { var t = this.__data__ = new i(e);
            this.size = t.size } var i = e("./_ListCache"),
            o = e("./_stackClear"),
            a = e("./_stackDelete"),
            s = e("./_stackGet"),
            l = e("./_stackHas"),
            c = e("./_stackSet");
        r.prototype.clear = o, r.prototype["delete"] = a, r.prototype.get = s, r.prototype.has = l, r.prototype.set = c, t.exports = r }, { "./_ListCache": 25, "./_stackClear": 138, "./_stackDelete": 139, "./_stackGet": 140, "./_stackHas": 141, "./_stackSet": 142 }],
    32: [function(e, t, n) { var r = e("./_root"),
            i = r.Symbol;
        t.exports = i }, { "./_root": 132 }],
    33: [function(e, t, n) { var r = e("./_root"),
            i = r.Uint8Array;
        t.exports = i }, { "./_root": 132 }],
    34: [function(e, t, n) { var r = e("./_getNative"),
            i = e("./_root"),
            o = r(i, "WeakMap");
        t.exports = o }, { "./_getNative": 95, "./_root": 132 }],
    35: [function(e, t, n) {
        function r(e, t, n) { switch (n.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, n[0]);
                case 2:
                    return e.call(t, n[0], n[1]);
                case 3:
                    return e.call(t, n[0], n[1], n[2]) } return e.apply(t, n) } t.exports = r }, {}],
    36: [function(e, t, n) {
        function r(e, t, n, r) { for (var i = -1, o = null == e ? 0 : e.length; ++i < o;) { var a = e[i];
                t(r, a, n(a), e) } return r } t.exports = r }, {}],
    37: [function(e, t, n) {
        function r(e, t) { for (var n = -1, r = null == e ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;); return e } t.exports = r }, {}],
    38: [function(e, t, n) {
        function r(e, t) { for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r;) { var a = e[n];
                t(a, n, e) && (o[i++] = a) } return o } t.exports = r }, {}],
    39: [function(e, t, n) {
        function r(e, t) { var n = null == e ? 0 : e.length; return !!n && i(e, t, 0) > -1 } var i = e("./_baseIndexOf");
        t.exports = r }, { "./_baseIndexOf": 58 }],
    40: [function(e, t, n) {
        function r(e, t, n) { for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                if (n(t, e[r])) return !0; return !1 } t.exports = r }, {}],
    41: [function(e, t, n) {
        function r(e, t) { var n = a(e),
                r = !n && o(e),
                u = !n && !r && s(e),
                f = !n && !r && !u && c(e),
                h = n || r || u || f,
                p = h ? i(e.length, String) : [],
                m = p.length; for (var g in e) !t && !d.call(e, g) || h && ("length" == g || u && ("offset" == g || "parent" == g) || f && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || l(g, m)) || p.push(g); return p } var i = e("./_baseTimes"),
            o = e("./isArguments"),
            a = e("./isArray"),
            s = e("./isBuffer"),
            l = e("./_isIndex"),
            c = e("./isTypedArray"),
            u = Object.prototype,
            d = u.hasOwnProperty;
        t.exports = r }, { "./_baseTimes": 74, "./_isIndex": 107, "./isArguments": 159, "./isArray": 160, "./isBuffer": 163, "./isTypedArray": 169 }],
    42: [function(e, t, n) {
        function r(e, t) { for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e); return i } t.exports = r }, {}],
    43: [function(e, t, n) {
        function r(e, t) { for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n]; return e } t.exports = r }, {}],
    44: [function(e, t, n) {
        function r(e, t) { for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                if (t(e[n], n, e)) return !0; return !1 } t.exports = r }, {}],
    45: [function(e, t, n) {
        function r(e, t) { for (var n = e.length; n--;)
                if (i(e[n][0], t)) return n; return -1 } var i = e("./eq");
        t.exports = r }, { "./eq": 149 }],
    46: [function(e, t, n) {
        function r(e, t, n, r) { return i(e, function(e, i, o) { t(r, e, n(e), o) }), r } var i = e("./_baseEach");
        t.exports = r }, { "./_baseEach": 48 }],
    47: [function(e, t, n) {
        function r(e, t, n) { "__proto__" == t && i ? i(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : e[t] = n } var i = e("./_defineProperty");
        t.exports = r }, { "./_defineProperty": 87 }],
    48: [function(e, t, n) { var r = e("./_baseForOwn"),
            i = e("./_createBaseEach"),
            o = i(r);
        t.exports = o }, { "./_baseForOwn": 53, "./_createBaseEach": 83 }],
    49: [function(e, t, n) {
        function r(e, t) { var n = []; return i(e, function(e, r, i) { t(e, r, i) && n.push(e) }), n } var i = e("./_baseEach");
        t.exports = r }, { "./_baseEach": 48 }],
    50: [function(e, t, n) {
        function r(e, t, n, r) { for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
                if (t(e[o], o, e)) return o; return -1 } t.exports = r }, {}],
    51: [function(e, t, n) {
        function r(e, t, n, a, s) { var l = -1,
                c = e.length; for (n || (n = o), s || (s = []); ++l < c;) { var u = e[l];
                t > 0 && n(u) ? t > 1 ? r(u, t - 1, n, a, s) : i(s, u) : a || (s[s.length] = u) } return s } var i = e("./_arrayPush"),
            o = e("./_isFlattenable");
        t.exports = r }, { "./_arrayPush": 43, "./_isFlattenable": 106 }],
    52: [function(e, t, n) { var r = e("./_createBaseFor"),
            i = r();
        t.exports = i }, { "./_createBaseFor": 84 }],
    53: [function(e, t, n) {
        function r(e, t) { return e && i(e, t, o) } var i = e("./_baseFor"),
            o = e("./keys");
        t.exports = r }, { "./_baseFor": 52, "./keys": 170 }],
    54: [function(e, t, n) {
        function r(e, t) { t = i(t, e); for (var n = 0, r = t.length; null != e && n < r;) e = e[o(t[n++])]; return n && n == r ? e : void 0 } var i = e("./_castPath"),
            o = e("./_toKey");
        t.exports = r }, { "./_castPath": 80, "./_toKey": 145 }],
    55: [function(e, t, n) {
        function r(e, t, n) { var r = t(e); return o(e) ? r : i(r, n(e)) } var i = e("./_arrayPush"),
            o = e("./isArray");
        t.exports = r }, { "./_arrayPush": 43, "./isArray": 160 }],
    56: [function(e, t, n) {
        function r(e) { return null == e ? void 0 === e ? l : s : c && c in Object(e) ? o(e) : a(e) } var i = e("./_Symbol"),
            o = e("./_getRawTag"),
            a = e("./_objectToString"),
            s = "[object Null]",
            l = "[object Undefined]",
            c = i ? i.toStringTag : void 0;
        t.exports = r }, { "./_Symbol": 32, "./_getRawTag": 96, "./_objectToString": 129 }],
    57: [function(e, t, n) {
        function r(e, t) { return null != e && t in Object(e) } t.exports = r }, {}],
    58: [function(e, t, n) {
        function r(e, t, n) { return t === t ? a(e, t, n) : i(e, o, n) } var i = e("./_baseFindIndex"),
            o = e("./_baseIsNaN"),
            a = e("./_strictIndexOf");
        t.exports = r }, { "./_baseFindIndex": 50, "./_baseIsNaN": 63, "./_strictIndexOf": 143 }],
    59: [function(e, t, n) {
        function r(e) { return o(e) && i(e) == a } var i = e("./_baseGetTag"),
            o = e("./isObjectLike"),
            a = "[object Arguments]";
        t.exports = r }, { "./_baseGetTag": 56, "./isObjectLike": 167 }],
    60: [function(e, t, n) {
        function r(e, t, n, a, s) { return e === t || (null == e || null == t || !o(e) && !o(t) ? e !== e && t !== t : i(e, t, n, a, r, s)) } var i = e("./_baseIsEqualDeep"),
            o = e("./isObjectLike");
        t.exports = r }, { "./_baseIsEqualDeep": 61, "./isObjectLike": 167 }],
    61: [function(e, t, n) {
        function r(e, t, n, r, g, y) { var b = c(e),
                x = c(t),
                w = b ? p : l(e),
                k = x ? p : l(t);
            w = w == h ? m : w, k = k == h ? m : k; var C = w == m,
                S = k == m,
                _ = w == k; if (_ && u(e)) { if (!u(t)) return !1;
                b = !0, C = !1 } if (_ && !C) return y || (y = new i), b || d(e) ? o(e, t, n, r, g, y) : a(e, t, w, n, r, g, y); if (!(n & f)) { var L = C && v.call(e, "__wrapped__"),
                    T = S && v.call(t, "__wrapped__"); if (L || T) { var M = L ? e.value() : e,
                        j = T ? t.value() : t; return y || (y = new i), g(M, j, n, r, y) } } return !!_ && (y || (y = new i), s(e, t, n, r, g, y)) } var i = e("./_Stack"),
            o = e("./_equalArrays"),
            a = e("./_equalByTag"),
            s = e("./_equalObjects"),
            l = e("./_getTag"),
            c = e("./isArray"),
            u = e("./isBuffer"),
            d = e("./isTypedArray"),
            f = 1,
            h = "[object Arguments]",
            p = "[object Array]",
            m = "[object Object]",
            g = Object.prototype,
            v = g.hasOwnProperty;
        t.exports = r }, { "./_Stack": 31, "./_equalArrays": 88, "./_equalByTag": 89, "./_equalObjects": 90, "./_getTag": 98, "./isArray": 160, "./isBuffer": 163, "./isTypedArray": 169 }],
    62: [function(e, t, n) {
        function r(e, t, n, r) { var l = n.length,
                c = l,
                u = !r; if (null == e) return !c; for (e = Object(e); l--;) { var d = n[l]; if (u && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) return !1 } for (; ++l < c;) { d = n[l]; var f = d[0],
                    h = e[f],
                    p = d[1]; if (u && d[2]) { if (void 0 === h && !(f in e)) return !1 } else { var m = new i; if (r) var g = r(h, p, f, e, t, m); if (!(void 0 === g ? o(p, h, a | s, r, m) : g)) return !1 } } return !0 } var i = e("./_Stack"),
            o = e("./_baseIsEqual"),
            a = 1,
            s = 2;
        t.exports = r }, { "./_Stack": 31, "./_baseIsEqual": 60 }],
    63: [function(e, t, n) {
        function r(e) { return e !== e } t.exports = r
    }, {}],
    64: [function(e, t, n) {
        function r(e) { if (!a(e) || o(e)) return !1; var t = i(e) ? p : c; return t.test(s(e)) } var i = e("./isFunction"),
            o = e("./_isMasked"),
            a = e("./isObject"),
            s = e("./_toSource"),
            l = /[\\^$.*+?()[\]{}|]/g,
            c = /^\[object .+?Constructor\]$/,
            u = Function.prototype,
            d = Object.prototype,
            f = u.toString,
            h = d.hasOwnProperty,
            p = RegExp("^" + f.call(h).replace(l, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        t.exports = r }, { "./_isMasked": 110, "./_toSource": 146, "./isFunction": 164, "./isObject": 166 }],
    65: [function(e, t, n) {
        function r(e) { return a(e) && o(e.length) && !!A[i(e)] } var i = e("./_baseGetTag"),
            o = e("./isLength"),
            a = e("./isObjectLike"),
            s = "[object Arguments]",
            l = "[object Array]",
            c = "[object Boolean]",
            u = "[object Date]",
            d = "[object Error]",
            f = "[object Function]",
            h = "[object Map]",
            p = "[object Number]",
            m = "[object Object]",
            g = "[object RegExp]",
            v = "[object Set]",
            y = "[object String]",
            b = "[object WeakMap]",
            x = "[object ArrayBuffer]",
            w = "[object DataView]",
            k = "[object Float32Array]",
            C = "[object Float64Array]",
            S = "[object Int8Array]",
            _ = "[object Int16Array]",
            L = "[object Int32Array]",
            T = "[object Uint8Array]",
            M = "[object Uint8ClampedArray]",
            j = "[object Uint16Array]",
            O = "[object Uint32Array]",
            A = {};
        A[k] = A[C] = A[S] = A[_] = A[L] = A[T] = A[M] = A[j] = A[O] = !0, A[s] = A[l] = A[x] = A[c] = A[w] = A[u] = A[d] = A[f] = A[h] = A[p] = A[m] = A[g] = A[v] = A[y] = A[b] = !1, t.exports = r }, { "./_baseGetTag": 56, "./isLength": 165, "./isObjectLike": 167 }],
    66: [function(e, t, n) {
        function r(e) { return "function" == typeof e ? e : null == e ? a : "object" == typeof e ? s(e) ? o(e[0], e[1]) : i(e) : l(e) } var i = e("./_baseMatches"),
            o = e("./_baseMatchesProperty"),
            a = e("./identity"),
            s = e("./isArray"),
            l = e("./property");
        t.exports = r }, { "./_baseMatches": 68, "./_baseMatchesProperty": 69, "./identity": 158, "./isArray": 160, "./property": 174 }],
    67: [function(e, t, n) {
        function r(e) { if (!i(e)) return o(e); var t = []; for (var n in Object(e)) s.call(e, n) && "constructor" != n && t.push(n); return t } var i = e("./_isPrototype"),
            o = e("./_nativeKeys"),
            a = Object.prototype,
            s = a.hasOwnProperty;
        t.exports = r }, { "./_isPrototype": 111, "./_nativeKeys": 127 }],
    68: [function(e, t, n) {
        function r(e) { var t = o(e); return 1 == t.length && t[0][2] ? a(t[0][0], t[0][1]) : function(n) { return n === e || i(n, e, t) } } var i = e("./_baseIsMatch"),
            o = e("./_getMatchData"),
            a = e("./_matchesStrictComparable");
        t.exports = r }, { "./_baseIsMatch": 62, "./_getMatchData": 94, "./_matchesStrictComparable": 124 }],
    69: [function(e, t, n) {
        function r(e, t) { return s(e) && l(t) ? c(u(e), t) : function(n) { var r = o(n, e); return void 0 === r && r === t ? a(n, e) : i(t, r, d | f) } } var i = e("./_baseIsEqual"),
            o = e("./get"),
            a = e("./hasIn"),
            s = e("./_isKey"),
            l = e("./_isStrictComparable"),
            c = e("./_matchesStrictComparable"),
            u = e("./_toKey"),
            d = 1,
            f = 2;
        t.exports = r }, { "./_baseIsEqual": 60, "./_isKey": 108, "./_isStrictComparable": 112, "./_matchesStrictComparable": 124, "./_toKey": 145, "./get": 155, "./hasIn": 157 }],
    70: [function(e, t, n) {
        function r(e) { return function(t) { return null == t ? void 0 : t[e] } } t.exports = r }, {}],
    71: [function(e, t, n) {
        function r(e) { return function(t) { return i(t, e) } } var i = e("./_baseGet");
        t.exports = r }, { "./_baseGet": 54 }],
    72: [function(e, t, n) {
        function r(e, t) { return a(o(e, t, i), e + "") } var i = e("./identity"),
            o = e("./_overRest"),
            a = e("./_setToString");
        t.exports = r }, { "./_overRest": 131, "./_setToString": 136, "./identity": 158 }],
    73: [function(e, t, n) { var r = e("./constant"),
            i = e("./_defineProperty"),
            o = e("./identity"),
            a = i ? function(e, t) { return i(e, "toString", { configurable: !0, enumerable: !1, value: r(t), writable: !0 }) } : o;
        t.exports = a }, { "./_defineProperty": 87, "./constant": 147, "./identity": 158 }],
    74: [function(e, t, n) {
        function r(e, t) { for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n); return r } t.exports = r }, {}],
    75: [function(e, t, n) {
        function r(e) { if ("string" == typeof e) return e; if (a(e)) return o(e, r) + ""; if (s(e)) return u ? u.call(e) : ""; var t = e + ""; return "0" == t && 1 / e == -l ? "-0" : t } var i = e("./_Symbol"),
            o = e("./_arrayMap"),
            a = e("./isArray"),
            s = e("./isSymbol"),
            l = 1 / 0,
            c = i ? i.prototype : void 0,
            u = c ? c.toString : void 0;
        t.exports = r }, { "./_Symbol": 32, "./_arrayMap": 42, "./isArray": 160, "./isSymbol": 168 }],
    76: [function(e, t, n) {
        function r(e) { return function(t) { return e(t) } } t.exports = r }, {}],
    77: [function(e, t, n) {
        function r(e, t, n) { var r = -1,
                d = o,
                f = e.length,
                h = !0,
                p = [],
                m = p; if (n) h = !1, d = a;
            else if (f >= u) { var g = t ? null : l(e); if (g) return c(g);
                h = !1, d = s, m = new i } else m = t ? [] : p;
            e: for (; ++r < f;) { var v = e[r],
                    y = t ? t(v) : v; if (v = n || 0 !== v ? v : 0, h && y === y) { for (var b = m.length; b--;)
                        if (m[b] === y) continue e;
                    t && m.push(y), p.push(v) } else d(m, y, n) || (m !== p && m.push(y), p.push(v)) }
            return p } var i = e("./_SetCache"),
            o = e("./_arrayIncludes"),
            a = e("./_arrayIncludesWith"),
            s = e("./_cacheHas"),
            l = e("./_createSet"),
            c = e("./_setToArray"),
            u = 200;
        t.exports = r }, { "./_SetCache": 30, "./_arrayIncludes": 39, "./_arrayIncludesWith": 40, "./_cacheHas": 78, "./_createSet": 86, "./_setToArray": 135 }],
    78: [function(e, t, n) {
        function r(e, t) { return e.has(t) } t.exports = r }, {}],
    79: [function(e, t, n) {
        function r(e) { return "function" == typeof e ? e : i } var i = e("./identity");
        t.exports = r }, { "./identity": 158 }],
    80: [function(e, t, n) {
        function r(e, t) { return i(e) ? e : o(e, t) ? [e] : a(s(e)) } var i = e("./isArray"),
            o = e("./_isKey"),
            a = e("./_stringToPath"),
            s = e("./toString");
        t.exports = r }, { "./_isKey": 108, "./_stringToPath": 144, "./isArray": 160, "./toString": 180 }],
    81: [function(e, t, n) { var r = e("./_root"),
            i = r["__core-js_shared__"];
        t.exports = i }, { "./_root": 132 }],
    82: [function(e, t, n) {
        function r(e, t) { return function(n, r) { var l = s(n) ? i : o,
                    c = t ? t() : {}; return l(n, e, a(r, 2), c) } } var i = e("./_arrayAggregator"),
            o = e("./_baseAggregator"),
            a = e("./_baseIteratee"),
            s = e("./isArray");
        t.exports = r }, { "./_arrayAggregator": 36, "./_baseAggregator": 46, "./_baseIteratee": 66, "./isArray": 160 }],
    83: [function(e, t, n) {
        function r(e, t) { return function(n, r) { if (null == n) return n; if (!i(n)) return e(n, r); for (var o = n.length, a = t ? o : -1, s = Object(n);
                    (t ? a-- : ++a < o) && r(s[a], a, s) !== !1;); return n } } var i = e("./isArrayLike");
        t.exports = r }, { "./isArrayLike": 161 }],
    84: [function(e, t, n) {
        function r(e) { return function(t, n, r) { for (var i = -1, o = Object(t), a = r(t), s = a.length; s--;) { var l = a[e ? s : ++i]; if (n(o[l], l, o) === !1) break } return t } } t.exports = r }, {}],
    85: [function(e, t, n) {
        function r(e) { return function(t, n, r) { var s = Object(t); if (!o(t)) { var l = i(n, 3);
                    t = a(t), n = function(e) { return l(s[e], e, s) } } var c = e(t, n, r); return c > -1 ? s[l ? t[c] : c] : void 0 } } var i = e("./_baseIteratee"),
            o = e("./isArrayLike"),
            a = e("./keys");
        t.exports = r }, { "./_baseIteratee": 66, "./isArrayLike": 161, "./keys": 170 }],
    86: [function(e, t, n) { var r = e("./_Set"),
            i = e("./noop"),
            o = e("./_setToArray"),
            a = 1 / 0,
            s = r && 1 / o(new r([, -0]))[1] == a ? function(e) { return new r(e) } : i;
        t.exports = s }, { "./_Set": 29, "./_setToArray": 135, "./noop": 172 }],
    87: [function(e, t, n) { var r = e("./_getNative"),
            i = function() { try { var e = r(Object, "defineProperty"); return e({}, "", {}), e } catch (t) {} }();
        t.exports = i }, { "./_getNative": 95 }],
    88: [function(e, t, n) {
        function r(e, t, n, r, c, u) { var d = n & s,
                f = e.length,
                h = t.length; if (f != h && !(d && h > f)) return !1; var p = u.get(e); if (p && u.get(t)) return p == t; var m = -1,
                g = !0,
                v = n & l ? new i : void 0; for (u.set(e, t), u.set(t, e); ++m < f;) { var y = e[m],
                    b = t[m]; if (r) var x = d ? r(b, y, m, t, e, u) : r(y, b, m, e, t, u); if (void 0 !== x) { if (x) continue;
                    g = !1; break } if (v) { if (!o(t, function(e, t) { if (!a(v, t) && (y === e || c(y, e, n, r, u))) return v.push(t) })) { g = !1; break } } else if (y !== b && !c(y, b, n, r, u)) { g = !1; break } } return u["delete"](e), u["delete"](t), g } var i = e("./_SetCache"),
            o = e("./_arraySome"),
            a = e("./_cacheHas"),
            s = 1,
            l = 2;
        t.exports = r }, { "./_SetCache": 30, "./_arraySome": 44, "./_cacheHas": 78 }],
    89: [function(e, t, n) {
        function r(e, t, n, r, i, C, _) { switch (n) {
                case k:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case w:
                    return !(e.byteLength != t.byteLength || !C(new o(e), new o(t)));
                case f:
                case h:
                case g:
                    return a(+e, +t);
                case p:
                    return e.name == t.name && e.message == t.message;
                case v:
                case b:
                    return e == t + "";
                case m:
                    var L = l;
                case y:
                    var T = r & u; if (L || (L = c), e.size != t.size && !T) return !1; var M = _.get(e); if (M) return M == t;
                    r |= d, _.set(e, t); var j = s(L(e), L(t), r, i, C, _); return _["delete"](e), j;
                case x:
                    if (S) return S.call(e) == S.call(t) } return !1 } var i = e("./_Symbol"),
            o = e("./_Uint8Array"),
            a = e("./eq"),
            s = e("./_equalArrays"),
            l = e("./_mapToArray"),
            c = e("./_setToArray"),
            u = 1,
            d = 2,
            f = "[object Boolean]",
            h = "[object Date]",
            p = "[object Error]",
            m = "[object Map]",
            g = "[object Number]",
            v = "[object RegExp]",
            y = "[object Set]",
            b = "[object String]",
            x = "[object Symbol]",
            w = "[object ArrayBuffer]",
            k = "[object DataView]",
            C = i ? i.prototype : void 0,
            S = C ? C.valueOf : void 0;
        t.exports = r }, { "./_Symbol": 32, "./_Uint8Array": 33, "./_equalArrays": 88, "./_mapToArray": 123, "./_setToArray": 135, "./eq": 149 }],
    90: [function(e, t, n) {
        function r(e, t, n, r, a, l) { var c = n & o,
                u = i(e),
                d = u.length,
                f = i(t),
                h = f.length; if (d != h && !c) return !1; for (var p = d; p--;) { var m = u[p]; if (!(c ? m in t : s.call(t, m))) return !1 } var g = l.get(e); if (g && l.get(t)) return g == t; var v = !0;
            l.set(e, t), l.set(t, e); for (var y = c; ++p < d;) { m = u[p]; var b = e[m],
                    x = t[m]; if (r) var w = c ? r(x, b, m, t, e, l) : r(b, x, m, e, t, l); if (!(void 0 === w ? b === x || a(b, x, n, r, l) : w)) { v = !1; break } y || (y = "constructor" == m) } if (v && !y) { var k = e.constructor,
                    C = t.constructor;
                k != C && "constructor" in e && "constructor" in t && !("function" == typeof k && k instanceof k && "function" == typeof C && C instanceof C) && (v = !1) } return l["delete"](e), l["delete"](t), v } var i = e("./_getAllKeys"),
            o = 1,
            a = Object.prototype,
            s = a.hasOwnProperty;
        t.exports = r }, { "./_getAllKeys": 92 }],
    91: [function(e, t, n) {
        (function(e) { var n = "object" == typeof e && e && e.Object === Object && e;
            t.exports = n }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, {}],
    92: [function(e, t, n) {
        function r(e) { return i(e, a, o) } var i = e("./_baseGetAllKeys"),
            o = e("./_getSymbols"),
            a = e("./keys");
        t.exports = r }, { "./_baseGetAllKeys": 55, "./_getSymbols": 97, "./keys": 170 }],
    93: [function(e, t, n) {
        function r(e, t) { var n = e.__data__; return i(t) ? n["string" == typeof t ? "string" : "hash"] : n.map } var i = e("./_isKeyable");
        t.exports = r }, { "./_isKeyable": 109 }],
    94: [function(e, t, n) {
        function r(e) { for (var t = o(e), n = t.length; n--;) { var r = t[n],
                    a = e[r];
                t[n] = [r, a, i(a)] } return t } var i = e("./_isStrictComparable"),
            o = e("./keys");
        t.exports = r }, { "./_isStrictComparable": 112, "./keys": 170 }],
    95: [function(e, t, n) {
        function r(e, t) { var n = o(e, t); return i(n) ? n : void 0 } var i = e("./_baseIsNative"),
            o = e("./_getValue");
        t.exports = r }, { "./_baseIsNative": 64, "./_getValue": 99 }],
    96: [function(e, t, n) {
        function r(e) { var t = a.call(e, l),
                n = e[l]; try { e[l] = void 0; var r = !0 } catch (i) {} var o = s.call(e); return r && (t ? e[l] = n : delete e[l]), o } var i = e("./_Symbol"),
            o = Object.prototype,
            a = o.hasOwnProperty,
            s = o.toString,
            l = i ? i.toStringTag : void 0;
        t.exports = r }, { "./_Symbol": 32 }],
    97: [function(e, t, n) { var r = e("./_arrayFilter"),
            i = e("./stubArray"),
            o = Object.prototype,
            a = o.propertyIsEnumerable,
            s = Object.getOwnPropertySymbols,
            l = s ? function(e) { return null == e ? [] : (e = Object(e), r(s(e), function(t) { return a.call(e, t) })) } : i;
        t.exports = l }, { "./_arrayFilter": 38, "./stubArray": 175 }],
    98: [function(e, t, n) { var r = e("./_DataView"),
            i = e("./_Map"),
            o = e("./_Promise"),
            a = e("./_Set"),
            s = e("./_WeakMap"),
            l = e("./_baseGetTag"),
            c = e("./_toSource"),
            u = "[object Map]",
            d = "[object Object]",
            f = "[object Promise]",
            h = "[object Set]",
            p = "[object WeakMap]",
            m = "[object DataView]",
            g = c(r),
            v = c(i),
            y = c(o),
            b = c(a),
            x = c(s),
            w = l;
        (r && w(new r(new ArrayBuffer(1))) != m || i && w(new i) != u || o && w(o.resolve()) != f || a && w(new a) != h || s && w(new s) != p) && (w = function(e) { var t = l(e),
                n = t == d ? e.constructor : void 0,
                r = n ? c(n) : ""; if (r) switch (r) {
                case g:
                    return m;
                case v:
                    return u;
                case y:
                    return f;
                case b:
                    return h;
                case x:
                    return p }
            return t }), t.exports = w }, { "./_DataView": 23, "./_Map": 26, "./_Promise": 28, "./_Set": 29, "./_WeakMap": 34, "./_baseGetTag": 56, "./_toSource": 146 }],
    99: [function(e, t, n) {
        function r(e, t) { return null == e ? void 0 : e[t] } t.exports = r }, {}],
    100: [function(e, t, n) {
        function r(e, t, n) { t = i(t, e); for (var r = -1, u = t.length, d = !1; ++r < u;) { var f = c(t[r]); if (!(d = null != e && n(e, f))) break;
                e = e[f] } return d || ++r != u ? d : (u = null == e ? 0 : e.length, !!u && l(u) && s(f, u) && (a(e) || o(e))) } var i = e("./_castPath"),
            o = e("./isArguments"),
            a = e("./isArray"),
            s = e("./_isIndex"),
            l = e("./isLength"),
            c = e("./_toKey");
        t.exports = r }, { "./_castPath": 80, "./_isIndex": 107, "./_toKey": 145, "./isArguments": 159, "./isArray": 160, "./isLength": 165 }],
    101: [function(e, t, n) {
        function r() { this.__data__ = i ? i(null) : {}, this.size = 0 } var i = e("./_nativeCreate");
        t.exports = r }, { "./_nativeCreate": 126 }],
    102: [function(e, t, n) {
        function r(e) { var t = this.has(e) && delete this.__data__[e]; return this.size -= t ? 1 : 0, t } t.exports = r }, {}],
    103: [function(e, t, n) {
        function r(e) { var t = this.__data__; if (i) { var n = t[e]; return n === o ? void 0 : n } return s.call(t, e) ? t[e] : void 0 } var i = e("./_nativeCreate"),
            o = "__lodash_hash_undefined__",
            a = Object.prototype,
            s = a.hasOwnProperty;
        t.exports = r }, { "./_nativeCreate": 126 }],
    104: [function(e, t, n) {
        function r(e) { var t = this.__data__; return i ? void 0 !== t[e] : a.call(t, e) } var i = e("./_nativeCreate"),
            o = Object.prototype,
            a = o.hasOwnProperty;
        t.exports = r }, { "./_nativeCreate": 126 }],
    105: [function(e, t, n) {
        function r(e, t) { var n = this.__data__; return this.size += this.has(e) ? 0 : 1, n[e] = i && void 0 === t ? o : t, this } var i = e("./_nativeCreate"),
            o = "__lodash_hash_undefined__";
        t.exports = r }, { "./_nativeCreate": 126 }],
    106: [function(e, t, n) {
        function r(e) { return a(e) || o(e) || !!(s && e && e[s]) } var i = e("./_Symbol"),
            o = e("./isArguments"),
            a = e("./isArray"),
            s = i ? i.isConcatSpreadable : void 0;
        t.exports = r }, { "./_Symbol": 32, "./isArguments": 159, "./isArray": 160 }],
    107: [function(e, t, n) {
        function r(e, t) { return t = null == t ? i : t, !!t && ("number" == typeof e || o.test(e)) && e > -1 && e % 1 == 0 && e < t } var i = 9007199254740991,
            o = /^(?:0|[1-9]\d*)$/;
        t.exports = r }, {}],
    108: [function(e, t, n) {
        function r(e, t) { if (i(e)) return !1; var n = typeof e; return !("number" != n && "symbol" != n && "boolean" != n && null != e && !o(e)) || (s.test(e) || !a.test(e) || null != t && e in Object(t)) } var i = e("./isArray"),
            o = e("./isSymbol"),
            a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            s = /^\w*$/;
        t.exports = r }, { "./isArray": 160, "./isSymbol": 168 }],
    109: [function(e, t, n) {
        function r(e) { var t = typeof e; return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e } t.exports = r }, {}],
    110: [function(e, t, n) {
        function r(e) { return !!o && o in e } var i = e("./_coreJsData"),
            o = function() { var e = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || ""); return e ? "Symbol(src)_1." + e : "" }();
        t.exports = r }, { "./_coreJsData": 81 }],
    111: [function(e, t, n) {
        function r(e) { var t = e && e.constructor,
                n = "function" == typeof t && t.prototype || i; return e === n } var i = Object.prototype;
        t.exports = r }, {}],
    112: [function(e, t, n) {
        function r(e) { return e === e && !i(e) } var i = e("./isObject");
        t.exports = r }, { "./isObject": 166 }],
    113: [function(e, t, n) {
        function r() { this.__data__ = [], this.size = 0 } t.exports = r }, {}],
    114: [function(e, t, n) {
        function r(e) { var t = this.__data__,
                n = i(t, e); if (n < 0) return !1; var r = t.length - 1; return n == r ? t.pop() : a.call(t, n, 1), --this.size, !0 } var i = e("./_assocIndexOf"),
            o = Array.prototype,
            a = o.splice;
        t.exports = r }, { "./_assocIndexOf": 45 }],
    115: [function(e, t, n) {
        function r(e) { var t = this.__data__,
                n = i(t, e); return n < 0 ? void 0 : t[n][1] } var i = e("./_assocIndexOf");
        t.exports = r }, { "./_assocIndexOf": 45 }],
    116: [function(e, t, n) {
        function r(e) { return i(this.__data__, e) > -1 } var i = e("./_assocIndexOf");
        t.exports = r }, { "./_assocIndexOf": 45 }],
    117: [function(e, t, n) {
        function r(e, t) { var n = this.__data__,
                r = i(n, e); return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this } var i = e("./_assocIndexOf");
        t.exports = r }, { "./_assocIndexOf": 45 }],
    118: [function(e, t, n) {
        function r() { this.size = 0, this.__data__ = { hash: new i, map: new(a || o), string: new i } } var i = e("./_Hash"),
            o = e("./_ListCache"),
            a = e("./_Map");
        t.exports = r }, { "./_Hash": 24, "./_ListCache": 25, "./_Map": 26 }],
    119: [function(e, t, n) {
        function r(e) { var t = i(this, e)["delete"](e); return this.size -= t ? 1 : 0, t } var i = e("./_getMapData");
        t.exports = r }, { "./_getMapData": 93 }],
    120: [function(e, t, n) {
        function r(e) { return i(this, e).get(e) } var i = e("./_getMapData");
        t.exports = r }, { "./_getMapData": 93 }],
    121: [function(e, t, n) {
        function r(e) { return i(this, e).has(e) } var i = e("./_getMapData");
        t.exports = r }, { "./_getMapData": 93 }],
    122: [function(e, t, n) {
        function r(e, t) { var n = i(this, e),
                r = n.size; return n.set(e, t), this.size += n.size == r ? 0 : 1, this } var i = e("./_getMapData");
        t.exports = r }, { "./_getMapData": 93 }],
    123: [function(e, t, n) {
        function r(e) { var t = -1,
                n = Array(e.size); return e.forEach(function(e, r) { n[++t] = [r, e] }), n } t.exports = r }, {}],
    124: [function(e, t, n) {
        function r(e, t) { return function(n) { return null != n && (n[e] === t && (void 0 !== t || e in Object(n))) } } t.exports = r }, {}],
    125: [function(e, t, n) {
        function r(e) { var t = i(e, function(e) { return n.size === o && n.clear(), e }),
                n = t.cache; return t } var i = e("./memoize"),
            o = 500;
        t.exports = r }, { "./memoize": 171 }],
    126: [function(e, t, n) { var r = e("./_getNative"),
            i = r(Object, "create");
        t.exports = i }, { "./_getNative": 95 }],
    127: [function(e, t, n) { var r = e("./_overArg"),
            i = r(Object.keys, Object);
        t.exports = i }, { "./_overArg": 130 }],
    128: [function(e, t, n) { var r = e("./_freeGlobal"),
            i = "object" == typeof n && n && !n.nodeType && n,
            o = i && "object" == typeof t && t && !t.nodeType && t,
            a = o && o.exports === i,
            s = a && r.process,
            l = function() { try { return s && s.binding && s.binding("util") } catch (e) {} }();
        t.exports = l }, { "./_freeGlobal": 91 }],
    129: [function(e, t, n) {
        function r(e) { return o.call(e) } var i = Object.prototype,
            o = i.toString;
        t.exports = r }, {}],
    130: [function(e, t, n) {
        function r(e, t) { return function(n) { return e(t(n)) } } t.exports = r }, {}],
    131: [function(e, t, n) {
        function r(e, t, n) { return t = o(void 0 === t ? e.length - 1 : t, 0),
                function() { for (var r = arguments, a = -1, s = o(r.length - t, 0), l = Array(s); ++a < s;) l[a] = r[t + a];
                    a = -1; for (var c = Array(t + 1); ++a < t;) c[a] = r[a]; return c[t] = n(l), i(e, this, c) } } var i = e("./_apply"),
            o = Math.max;
        t.exports = r }, { "./_apply": 35 }],
    132: [function(e, t, n) { var r = e("./_freeGlobal"),
            i = "object" == typeof self && self && self.Object === Object && self,
            o = r || i || Function("return this")();
        t.exports = o }, { "./_freeGlobal": 91 }],
    133: [function(e, t, n) {
        function r(e) { return this.__data__.set(e, i), this } var i = "__lodash_hash_undefined__";
        t.exports = r }, {}],
    134: [function(e, t, n) {
        function r(e) { return this.__data__.has(e) } t.exports = r }, {}],
    135: [function(e, t, n) {
        function r(e) { var t = -1,
                n = Array(e.size); return e.forEach(function(e) { n[++t] = e }), n } t.exports = r }, {}],
    136: [function(e, t, n) { var r = e("./_baseSetToString"),
            i = e("./_shortOut"),
            o = i(r);
        t.exports = o }, { "./_baseSetToString": 73, "./_shortOut": 137 }],
    137: [function(e, t, n) {
        function r(e) { var t = 0,
                n = 0; return function() { var r = a(),
                    s = o - (r - n); if (n = r, s > 0) { if (++t >= i) return arguments[0] } else t = 0; return e.apply(void 0, arguments) } } var i = 800,
            o = 16,
            a = Date.now;
        t.exports = r }, {}],
    138: [function(e, t, n) {
        function r() { this.__data__ = new i, this.size = 0 } var i = e("./_ListCache");
        t.exports = r }, { "./_ListCache": 25 }],
    139: [function(e, t, n) {
        function r(e) { var t = this.__data__,
                n = t["delete"](e); return this.size = t.size, n } t.exports = r }, {}],
    140: [function(e, t, n) {
        function r(e) { return this.__data__.get(e) } t.exports = r }, {}],
    141: [function(e, t, n) {
        function r(e) { return this.__data__.has(e) } t.exports = r }, {}],
    142: [function(e, t, n) {
        function r(e, t) { var n = this.__data__; if (n instanceof i) { var r = n.__data__; if (!o || r.length < s - 1) return r.push([e, t]), this.size = ++n.size, this;
                n = this.__data__ = new a(r) } return n.set(e, t), this.size = n.size, this } var i = e("./_ListCache"),
            o = e("./_Map"),
            a = e("./_MapCache"),
            s = 200;
        t.exports = r }, { "./_ListCache": 25, "./_Map": 26, "./_MapCache": 27 }],
    143: [function(e, t, n) {
        function r(e, t, n) { for (var r = n - 1, i = e.length; ++r < i;)
                if (e[r] === t) return r; return -1 } t.exports = r }, {}],
    144: [function(e, t, n) { var r = e("./_memoizeCapped"),
            i = /^\./,
            o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            a = /\\(\\)?/g,
            s = r(function(e) { var t = []; return i.test(e) && t.push(""), e.replace(o, function(e, n, r, i) { t.push(r ? i.replace(a, "$1") : n || e) }), t });
        t.exports = s }, { "./_memoizeCapped": 125 }],
    145: [function(e, t, n) {
        function r(e) { if ("string" == typeof e || i(e)) return e; var t = e + ""; return "0" == t && 1 / e == -o ? "-0" : t } var i = e("./isSymbol"),
            o = 1 / 0;
        t.exports = r }, { "./isSymbol": 168 }],
    146: [function(e, t, n) {
        function r(e) { if (null != e) { try { return o.call(e) } catch (t) {} try { return e + "" } catch (t) {} } return "" } var i = Function.prototype,
            o = i.toString;
        t.exports = r }, {}],
    147: [function(e, t, n) {
        function r(e) { return function() { return e } } t.exports = r }, {}],
    148: [function(e, t, n) {
        function r(e, t, n) {
            function r(t) { var n = y,
                    r = b; return y = b = void 0, S = t, w = e.apply(r, n) }

            function u(e) { return S = e, k = setTimeout(h, t), _ ? r(e) : w }

            function d(e) { var n = e - C,
                    r = e - S,
                    i = t - n; return L ? c(i, x - r) : i }

            function f(e) { var n = e - C,
                    r = e - S; return void 0 === C || n >= t || n < 0 || L && r >= x }

            function h() { var e = o(); return f(e) ? p(e) : void(k = setTimeout(h, d(e))) }

            function p(e) { return k = void 0, T && y ? r(e) : (y = b = void 0, w) }

            function m() { void 0 !== k && clearTimeout(k), S = 0, y = C = b = k = void 0 }

            function g() { return void 0 === k ? w : p(o()) }

            function v() { var e = o(),
                    n = f(e); if (y = arguments, b = this, C = e, n) { if (void 0 === k) return u(C); if (L) return k = setTimeout(h, t), r(C) } return void 0 === k && (k = setTimeout(h, t)), w } var y, b, x, w, k, C, S = 0,
                _ = !1,
                L = !1,
                T = !0; if ("function" != typeof e) throw new TypeError(s); return t = a(t) || 0, i(n) && (_ = !!n.leading, L = "maxWait" in n, x = L ? l(a(n.maxWait) || 0, t) : x, T = "trailing" in n ? !!n.trailing : T), v.cancel = m, v.flush = g, v } var i = e("./isObject"),
            o = e("./now"),
            a = e("./toNumber"),
            s = "Expected a function",
            l = Math.max,
            c = Math.min;
        t.exports = r }, { "./isObject": 166, "./now": 173, "./toNumber": 179 }],
    149: [function(e, t, n) {
        function r(e, t) { return e === t || e !== e && t !== t } t.exports = r }, {}],
    150: [function(e, t, n) {
        function r(e, t) { var n = s(e) ? i : o; return n(e, a(t, 3)) } var i = e("./_arrayFilter"),
            o = e("./_baseFilter"),
            a = e("./_baseIteratee"),
            s = e("./isArray");
        t.exports = r }, { "./_arrayFilter": 38, "./_baseFilter": 49, "./_baseIteratee": 66, "./isArray": 160 }],
    151: [function(e, t, n) { var r = e("./_createFind"),
            i = e("./findIndex"),
            o = r(i);
        t.exports = o }, { "./_createFind": 85, "./findIndex": 152 }],
    152: [function(e, t, n) {
        function r(e, t, n) { var r = null == e ? 0 : e.length; if (!r) return -1; var l = null == n ? 0 : a(n); return l < 0 && (l = s(r + l, 0)), i(e, o(t, 3), l) } var i = e("./_baseFindIndex"),
            o = e("./_baseIteratee"),
            a = e("./toInteger"),
            s = Math.max;
        t.exports = r }, { "./_baseFindIndex": 50, "./_baseIteratee": 66, "./toInteger": 178 }],
    153: [function(e, t, n) {
        function r(e) { var t = null == e ? 0 : e.length; return t ? i(e, o) : [] } var i = e("./_baseFlatten"),
            o = 1 / 0;
        t.exports = r }, { "./_baseFlatten": 51 }],
    154: [function(e, t, n) {
        function r(e, t) { var n = s(e) ? i : o; return n(e, a(t)) } var i = e("./_arrayEach"),
            o = e("./_baseEach"),
            a = e("./_castFunction"),
            s = e("./isArray");
        t.exports = r }, { "./_arrayEach": 37, "./_baseEach": 48, "./_castFunction": 79, "./isArray": 160 }],
    155: [function(e, t, n) {
        function r(e, t, n) { var r = null == e ? void 0 : i(e, t); return void 0 === r ? n : r } var i = e("./_baseGet");
        t.exports = r }, { "./_baseGet": 54 }],
    156: [function(e, t, n) { var r = e("./_baseAssignValue"),
            i = e("./_createAggregator"),
            o = Object.prototype,
            a = o.hasOwnProperty,
            s = i(function(e, t, n) { a.call(e, n) ? e[n].push(t) : r(e, n, [t]) });
        t.exports = s }, { "./_baseAssignValue": 47, "./_createAggregator": 82 }],
    157: [function(e, t, n) {
        function r(e, t) { return null != e && o(e, t, i) } var i = e("./_baseHasIn"),
            o = e("./_hasPath");
        t.exports = r }, { "./_baseHasIn": 57, "./_hasPath": 100 }],
    158: [function(e, t, n) {
        function r(e) { return e } t.exports = r }, {}],
    159: [function(e, t, n) { var r = e("./_baseIsArguments"),
            i = e("./isObjectLike"),
            o = Object.prototype,
            a = o.hasOwnProperty,
            s = o.propertyIsEnumerable,
            l = r(function() { return arguments }()) ? r : function(e) { return i(e) && a.call(e, "callee") && !s.call(e, "callee") };
        t.exports = l }, { "./_baseIsArguments": 59, "./isObjectLike": 167 }],
    160: [function(e, t, n) { var r = Array.isArray;
        t.exports = r }, {}],
    161: [function(e, t, n) {
        function r(e) { return null != e && o(e.length) && !i(e) } var i = e("./isFunction"),
            o = e("./isLength");
        t.exports = r }, { "./isFunction": 164, "./isLength": 165 }],
    162: [function(e, t, n) {
        function r(e) { return o(e) && i(e) } var i = e("./isArrayLike"),
            o = e("./isObjectLike");
        t.exports = r }, { "./isArrayLike": 161, "./isObjectLike": 167 }],
    163: [function(e, t, n) { var r = e("./_root"),
            i = e("./stubFalse"),
            o = "object" == typeof n && n && !n.nodeType && n,
            a = o && "object" == typeof t && t && !t.nodeType && t,
            s = a && a.exports === o,
            l = s ? r.Buffer : void 0,
            c = l ? l.isBuffer : void 0,
            u = c || i;
        t.exports = u }, { "./_root": 132, "./stubFalse": 176 }],
    164: [function(e, t, n) {
        function r(e) { if (!o(e)) return !1; var t = i(e); return t == s || t == l || t == a || t == c } var i = e("./_baseGetTag"),
            o = e("./isObject"),
            a = "[object AsyncFunction]",
            s = "[object Function]",
            l = "[object GeneratorFunction]",
            c = "[object Proxy]";
        t.exports = r }, { "./_baseGetTag": 56, "./isObject": 166 }],
    165: [function(e, t, n) {
        function r(e) { return "number" == typeof e && e > -1 && e % 1 == 0 && e <= i } var i = 9007199254740991;
        t.exports = r }, {}],
    166: [function(e, t, n) {
        function r(e) { var t = typeof e; return null != e && ("object" == t || "function" == t) } t.exports = r }, {}],
    167: [function(e, t, n) {
        function r(e) { return null != e && "object" == typeof e } t.exports = r }, {}],
    168: [function(e, t, n) {
        function r(e) { return "symbol" == typeof e || o(e) && i(e) == a } var i = e("./_baseGetTag"),
            o = e("./isObjectLike"),
            a = "[object Symbol]";
        t.exports = r }, { "./_baseGetTag": 56, "./isObjectLike": 167 }],
    169: [function(e, t, n) { var r = e("./_baseIsTypedArray"),
            i = e("./_baseUnary"),
            o = e("./_nodeUtil"),
            a = o && o.isTypedArray,
            s = a ? i(a) : r;
        t.exports = s }, { "./_baseIsTypedArray": 65, "./_baseUnary": 76, "./_nodeUtil": 128 }],
    170: [function(e, t, n) {
        function r(e) { return a(e) ? i(e) : o(e) } var i = e("./_arrayLikeKeys"),
            o = e("./_baseKeys"),
            a = e("./isArrayLike");
        t.exports = r }, { "./_arrayLikeKeys": 41, "./_baseKeys": 67, "./isArrayLike": 161 }],
    171: [function(e, t, n) {
        function r(e, t) { if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(o); var n = function() { var r = arguments,
                    i = t ? t.apply(this, r) : r[0],
                    o = n.cache; if (o.has(i)) return o.get(i); var a = e.apply(this, r); return n.cache = o.set(i, a) || o, a }; return n.cache = new(r.Cache || i), n } var i = e("./_MapCache"),
            o = "Expected a function";
        r.Cache = i, t.exports = r }, { "./_MapCache": 27 }],
    172: [function(e, t, n) {
        function r() {} t.exports = r }, {}],
    173: [function(e, t, n) { var r = e("./_root"),
            i = function() { return r.Date.now() };
        t.exports = i }, { "./_root": 132 }],
    174: [function(e, t, n) {
        function r(e) { return a(e) ? i(s(e)) : o(e) } var i = e("./_baseProperty"),
            o = e("./_basePropertyDeep"),
            a = e("./_isKey"),
            s = e("./_toKey");
        t.exports = r }, { "./_baseProperty": 70, "./_basePropertyDeep": 71, "./_isKey": 108, "./_toKey": 145 }],
    175: [function(e, t, n) {
        function r() { return [] } t.exports = r }, {}],
    176: [function(e, t, n) {
        function r() { return !1 } t.exports = r }, {}],
    177: [function(e, t, n) {
        function r(e) { if (!e) return 0 === e ? e : 0; if (e = i(e), e === o || e === -o) { var t = e < 0 ? -1 : 1; return t * a } return e === e ? e : 0 } var i = e("./toNumber"),
            o = 1 / 0,
            a = 1.7976931348623157e308;
        t.exports = r }, { "./toNumber": 179 }],
    178: [function(e, t, n) {
        function r(e) { var t = i(e),
                n = t % 1; return t === t ? n ? t - n : t : 0 } var i = e("./toFinite");
        t.exports = r }, { "./toFinite": 177 }],
    179: [function(e, t, n) {
        function r(e) { if ("number" == typeof e) return e; if (o(e)) return a; if (i(e)) { var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = i(t) ? t + "" : t } if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(s, ""); var n = c.test(e); return n || u.test(e) ? d(e.slice(2), n ? 2 : 8) : l.test(e) ? a : +e } var i = e("./isObject"),
            o = e("./isSymbol"),
            a = NaN,
            s = /^\s+|\s+$/g,
            l = /^[-+]0x[0-9a-f]+$/i,
            c = /^0b[01]+$/i,
            u = /^0o[0-7]+$/i,
            d = parseInt;
        t.exports = r }, { "./isObject": 166, "./isSymbol": 168 }],
    180: [function(e, t, n) {
        function r(e) { return null == e ? "" : i(e) } var i = e("./_baseToString");
        t.exports = r }, { "./_baseToString": 75 }],
    181: [function(e, t, n) { var r = e("./_baseFlatten"),
            i = e("./_baseRest"),
            o = e("./_baseUniq"),
            a = e("./isArrayLikeObject"),
            s = i(function(e) { return o(r(e, 1, a, !0)) });
        t.exports = s }, { "./_baseFlatten": 51, "./_baseRest": 72, "./_baseUniq": 77, "./isArrayLikeObject": 162 }],
    182: [function(e, t, n) {
        function r(e) { return e && e.length ? i(e) : [] } var i = e("./_baseUniq");
        t.exports = r }, { "./_baseUniq": 77 }],
    183: [function(e, t, n) {
        function r(e, t) { return e && e.length ? o(e, i(t, 2)) : [] } var i = e("./_baseIteratee"),
            o = e("./_baseUniq");
        t.exports = r }, { "./_baseIteratee": 66, "./_baseUniq": 77 }],
    184: [function(e, t, n) {
        (function(e) {
            (function() {
                function e(e) { this.tokens = [], this.tokens.links = {}, this.options = e || d.defaults, this.rules = f.normal, this.options.gfm && (this.options.tables ? this.rules = f.tables : this.rules = f.gfm) }

                function r(e, t) { if (this.options = t || d.defaults, this.links = e, this.rules = h.normal, this.renderer = this.options.renderer || new i, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
                    this.options.gfm ? this.options.breaks ? this.rules = h.breaks : this.rules = h.gfm : this.options.pedantic && (this.rules = h.pedantic) }

                function i(e) { this.options = e || {} }

                function o(e) { this.tokens = [], this.token = null, this.options = e || d.defaults, this.options.renderer = this.options.renderer || new i, this.renderer = this.options.renderer, this.renderer.options = this.options }

                function a(e, t) { return e.replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;") }

                function s(e) { return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, function(e, t) { return t = t.toLowerCase(), "colon" === t ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "" }) }

                function l(e, t) { return e = e.source, t = t || "",
                        function n(r, i) { return r ? (i = i.source || i, i = i.replace(/(^|[^\[])\^/g, "$1"), e = e.replace(r, i), n) : new RegExp(e, t) } }

                function c() {}

                function u(e) { for (var t, n, r = 1; r < arguments.length; r++) { t = arguments[r]; for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) } return e }

                function d(t, n, r) { if (r || "function" == typeof n) { r || (r = n, n = null), n = u({}, d.defaults, n || {}); var i, s, l = n.highlight,
                            c = 0; try { i = e.lex(t, n) } catch (f) { return r(f) } s = i.length; var h = function(e) { if (e) return n.highlight = l, r(e); var t; try { t = o.parse(i, n) } catch (a) { e = a } return n.highlight = l, e ? r(e) : r(null, t) }; if (!l || l.length < 3) return h(); if (delete n.highlight, !s) return h(); for (; c < i.length; c++) ! function(e) { return "code" !== e.type ? --s || h() : l(e.text, e.lang, function(t, n) { return t ? h(t) : null == n || n === e.text ? --s || h() : (e.text = n, e.escaped = !0, void(--s || h())) }) }(i[c]) } else try { return n && (n = u({}, d.defaults, n)), o.parse(e.lex(t, n), n) } catch (f) { if (f.message += "\nPlease report this to https://github.com/chjj/marked.", (n || d.defaults).silent) return "<p>An error occured:</p><pre>" + a(f.message + "", !0) + "</pre>"; throw f } }
                var f = { newline: /^\n+/, code: /^( {4}[^\n]+\n*)+/, fences: c, hr: /^( *[-*_]){3,} *(?:\n+|$)/, heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/, nptable: c, lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/, blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/, list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/, html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/, def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/, table: c, paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/, text: /^[^\n]+/ };
                f.bullet = /(?:[*+-]|\d+\.)/, f.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, f.item = l(f.item, "gm")(/bull/g, f.bullet)(), f.list = l(f.list)(/bull/g, f.bullet)("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + f.def.source + ")")(), f.blockquote = l(f.blockquote)("def", f.def)(), f._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b", f.html = l(f.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, f._tag)(), f.paragraph = l(f.paragraph)("hr", f.hr)("heading", f.heading)("lheading", f.lheading)("blockquote", f.blockquote)("tag", "<" + f._tag)("def", f.def)(), f.normal = u({}, f), f.gfm = u({}, f.normal, { fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/, paragraph: /^/, heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/ }), f.gfm.paragraph = l(f.paragraph)("(?!", "(?!" + f.gfm.fences.source.replace("\\1", "\\2") + "|" + f.list.source.replace("\\1", "\\3") + "|")(), f.tables = u({}, f.gfm, { nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/, table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/ }), e.rules = f, e.lex = function(t, n) { var r = new e(n); return r.lex(t) }, e.prototype.lex = function(e) { return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(e, !0) }, e.prototype.token = function(e, t, n) {
                    for (var r, i, o, a, s, l, c, u, d, e = e.replace(/^ +$/gm, ""); e;)
                        if ((o = this.rules.newline.exec(e)) && (e = e.substring(o[0].length), o[0].length > 1 && this.tokens.push({ type: "space" })), o = this.rules.code.exec(e)) e = e.substring(o[0].length), o = o[0].replace(/^ {4}/gm, ""), this.tokens.push({ type: "code", text: this.options.pedantic ? o : o.replace(/\n+$/, "") });
                        else if (o = this.rules.fences.exec(e)) e = e.substring(o[0].length), this.tokens.push({ type: "code", lang: o[2], text: o[3] || "" });
                    else if (o = this.rules.heading.exec(e)) e = e.substring(o[0].length), this.tokens.push({ type: "heading", depth: o[1].length, text: o[2] });
                    else if (t && (o = this.rules.nptable.exec(e))) {
                        for (e = e.substring(o[0].length), l = { type: "table", header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */), align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */), cells: o[3].replace(/\n$/, "").split("\n") }, u = 0; u < l.align.length; u++) /^ *-+: *$/.test(l.align[u]) ? l.align[u] = "right" : /^ *:-+: *$/.test(l.align[u]) ? l.align[u] = "center" : /^ *:-+ *$/.test(l.align[u]) ? l.align[u] = "left" : l.align[u] = null;
                        for (u = 0; u < l.cells.length; u++) l.cells[u] = l.cells[u].split(/ *\| */);
                        this.tokens.push(l)
                    } else if (o = this.rules.lheading.exec(e)) e = e.substring(o[0].length), this.tokens.push({ type: "heading", depth: "=" === o[2] ? 1 : 2, text: o[1] });
                    else if (o = this.rules.hr.exec(e)) e = e.substring(o[0].length), this.tokens.push({ type: "hr" });
                    else if (o = this.rules.blockquote.exec(e)) e = e.substring(o[0].length), this.tokens.push({ type: "blockquote_start" }), o = o[0].replace(/^ *> ?/gm, ""), this.token(o, t, !0), this.tokens.push({ type: "blockquote_end" });
                    else if (o = this.rules.list.exec(e)) { for (e = e.substring(o[0].length), a = o[2], this.tokens.push({ type: "list_start", ordered: a.length > 1 }), o = o[0].match(this.rules.item), r = !1, d = o.length, u = 0; u < d; u++) l = o[u], c = l.length, l = l.replace(/^ *([*+-]|\d+\.) +/, ""), ~l.indexOf("\n ") && (c -= l.length, l = this.options.pedantic ? l.replace(/^ {1,4}/gm, "") : l.replace(new RegExp("^ {1," + c + "}", "gm"), "")), this.options.smartLists && u !== d - 1 && (s = f.bullet.exec(o[u + 1])[0], a === s || a.length > 1 && s.length > 1 || (e = o.slice(u + 1).join("\n") + e, u = d - 1)), i = r || /\n\n(?!\s*$)/.test(l), u !== d - 1 && (r = "\n" === l.charAt(l.length - 1), i || (i = r)), this.tokens.push({ type: i ? "loose_item_start" : "list_item_start" }), this.token(l, !1, n), this.tokens.push({ type: "list_item_end" });
                        this.tokens.push({ type: "list_end" }) } else if (o = this.rules.html.exec(e)) e = e.substring(o[0].length), this.tokens.push({ type: this.options.sanitize ? "paragraph" : "html", pre: !this.options.sanitizer && ("pre" === o[1] || "script" === o[1] || "style" === o[1]), text: o[0] });
                    else if (!n && t && (o = this.rules.def.exec(e))) e = e.substring(o[0].length), this.tokens.links[o[1].toLowerCase()] = { href: o[2], title: o[3] };
                    else if (t && (o = this.rules.table.exec(e))) { for (e = e.substring(o[0].length), l = { type: "table", header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */), align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */), cells: o[3].replace(/(?: *\| *)?\n$/, "").split("\n") }, u = 0; u < l.align.length; u++) /^ *-+: *$/.test(l.align[u]) ? l.align[u] = "right" : /^ *:-+: *$/.test(l.align[u]) ? l.align[u] = "center" : /^ *:-+ *$/.test(l.align[u]) ? l.align[u] = "left" : l.align[u] = null; for (u = 0; u < l.cells.length; u++) l.cells[u] = l.cells[u].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
                        this.tokens.push(l) } else if (t && (o = this.rules.paragraph.exec(e))) e = e.substring(o[0].length), this.tokens.push({ type: "paragraph", text: "\n" === o[1].charAt(o[1].length - 1) ? o[1].slice(0, -1) : o[1] });
                    else if (o = this.rules.text.exec(e)) e = e.substring(o[0].length), this.tokens.push({ type: "text", text: o[0] });
                    else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
                    return this.tokens
                };
                var h = { escape: /^\\([\\`*{}\[\]()#+\-.!_>])/, autolink: /^<([^ >]+(@|:\/)[^ >]+)>/, url: c, tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/, link: /^!?\[(inside)\]\(href\)/, reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/, nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/, strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/, em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/, code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/, br: /^ {2,}\n(?!\s*$)/, del: c, text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/ };
                h._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/, h._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/, h.link = l(h.link)("inside", h._inside)("href", h._href)(), h.reflink = l(h.reflink)("inside", h._inside)(), h.normal = u({}, h), h.pedantic = u({}, h.normal, { strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/ }), h.gfm = u({}, h.normal, { escape: l(h.escape)("])", "~|])")(), url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, del: /^~~(?=\S)([\s\S]*?\S)~~/, text: l(h.text)("]|", "~]|")("|", "|https?://|")() }), h.breaks = u({}, h.gfm, { br: l(h.br)("{2,}", "*")(), text: l(h.gfm.text)("{2,}", "*")() }), r.rules = h, r.output = function(e, t, n) { var i = new r(t, n); return i.output(e) }, r.prototype.output = function(e) { for (var t, n, r, i, o = ""; e;)
                        if (i = this.rules.escape.exec(e)) e = e.substring(i[0].length), o += i[1];
                        else if (i = this.rules.autolink.exec(e)) e = e.substring(i[0].length), "@" === i[2] ? (n = ":" === i[1].charAt(6) ? this.mangle(i[1].substring(7)) : this.mangle(i[1]), r = this.mangle("mailto:") + n) : (n = a(i[1]), r = n), o += this.renderer.link(r, null, n);
                    else if (this.inLink || !(i = this.rules.url.exec(e))) { if (i = this.rules.tag.exec(e)) !this.inLink && /^<a /i.test(i[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(i[0]) && (this.inLink = !1), e = e.substring(i[0].length), o += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(i[0]) : a(i[0]) : i[0];
                        else if (i = this.rules.link.exec(e)) e = e.substring(i[0].length), this.inLink = !0, o += this.outputLink(i, { href: i[2], title: i[3] }), this.inLink = !1;
                        else if ((i = this.rules.reflink.exec(e)) || (i = this.rules.nolink.exec(e))) { if (e = e.substring(i[0].length), t = (i[2] || i[1]).replace(/\s+/g, " "), t = this.links[t.toLowerCase()], !t || !t.href) { o += i[0].charAt(0), e = i[0].substring(1) + e; continue } this.inLink = !0, o += this.outputLink(i, t), this.inLink = !1 } else if (i = this.rules.strong.exec(e)) e = e.substring(i[0].length), o += this.renderer.strong(this.output(i[2] || i[1]));
                        else if (i = this.rules.em.exec(e)) e = e.substring(i[0].length), o += this.renderer.em(this.output(i[2] || i[1]));
                        else if (i = this.rules.code.exec(e)) e = e.substring(i[0].length), o += this.renderer.codespan(a(i[2], !0));
                        else if (i = this.rules.br.exec(e)) e = e.substring(i[0].length), o += this.renderer.br();
                        else if (i = this.rules.del.exec(e)) e = e.substring(i[0].length), o += this.renderer.del(this.output(i[1]));
                        else if (i = this.rules.text.exec(e)) e = e.substring(i[0].length), o += this.renderer.text(a(this.smartypants(i[0])));
                        else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0)) } else e = e.substring(i[0].length), n = a(i[1]), r = n, o += this.renderer.link(r, null, n); return o }, r.prototype.outputLink = function(e, t) { var n = a(t.href),
                        r = t.title ? a(t.title) : null; return "!" !== e[0].charAt(0) ? this.renderer.link(n, r, this.output(e[1])) : this.renderer.image(n, r, a(e[1])) }, r.prototype.smartypants = function(e) { return this.options.smartypants ? e.replace(/---/g, "â€”").replace(/--/g, "â€“").replace(/(^|[-\u2014\/(\[{"\s])'/g, "$1â€˜").replace(/'/g, "â€™").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, "$1â€œ").replace(/"/g, "â€").replace(/\.{3}/g, "â€¦") : e }, r.prototype.mangle = function(e) { if (!this.options.mangle) return e; for (var t, n = "", r = e.length, i = 0; i < r; i++) t = e.charCodeAt(i), Math.random() > .5 && (t = "x" + t.toString(16)), n += "&#" + t + ";"; return n }, i.prototype.code = function(e, t, n) { if (this.options.highlight) { var r = this.options.highlight(e, t);
                        null != r && r !== e && (n = !0, e = r) } return t ? '<pre><code class="' + this.options.langPrefix + a(t, !0) + '">' + (n ? e : a(e, !0)) + "\n</code></pre>\n" : "<pre><code>" + (n ? e : a(e, !0)) + "\n</code></pre>" }, i.prototype.blockquote = function(e) { return "<blockquote>\n" + e + "</blockquote>\n" }, i.prototype.html = function(e) { return e }, i.prototype.heading = function(e, t, n) { return "<h" + t + ' id="' + this.options.headerPrefix + n.toLowerCase().replace(/[^\w]+/g, "-") + '">' + e + "</h" + t + ">\n" }, i.prototype.hr = function() { return this.options.xhtml ? "<hr/>\n" : "<hr>\n" }, i.prototype.list = function(e, t) { var n = t ? "ol" : "ul"; return "<" + n + ">\n" + e + "</" + n + ">\n" }, i.prototype.listitem = function(e) { return "<li>" + e + "</li>\n" }, i.prototype.paragraph = function(e) { return "<p>" + e + "</p>\n" }, i.prototype.table = function(e, t) { return "<table>\n<thead>\n" + e + "</thead>\n<tbody>\n" + t + "</tbody>\n</table>\n" }, i.prototype.tablerow = function(e) { return "<tr>\n" + e + "</tr>\n" }, i.prototype.tablecell = function(e, t) { var n = t.header ? "th" : "td",
                        r = t.align ? "<" + n + ' style="text-align:' + t.align + '">' : "<" + n + ">"; return r + e + "</" + n + ">\n" }, i.prototype.strong = function(e) { return "<strong>" + e + "</strong>" }, i.prototype.em = function(e) { return "<em>" + e + "</em>" }, i.prototype.codespan = function(e) { return "<code>" + e + "</code>" }, i.prototype.br = function() { return this.options.xhtml ? "<br/>" : "<br>" }, i.prototype.del = function(e) { return "<del>" + e + "</del>" }, i.prototype.link = function(e, t, n) { if (this.options.sanitize) { try { var r = decodeURIComponent(s(e)).replace(/[^\w:]/g, "").toLowerCase() } catch (i) { return "" } if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:")) return "" } var o = '<a href="' + e + '"'; return t && (o += ' title="' + t + '"'), o += ">" + n + "</a>" }, i.prototype.image = function(e, t, n) { var r = '<img src="' + e + '" alt="' + n + '"'; return t && (r += ' title="' + t + '"'), r += this.options.xhtml ? "/>" : ">" }, i.prototype.text = function(e) { return e }, o.parse = function(e, t, n) { var r = new o(t, n); return r.parse(e) }, o.prototype.parse = function(e) { this.inline = new r(e.links, this.options, this.renderer), this.tokens = e.reverse(); for (var t = ""; this.next();) t += this.tok(); return t }, o.prototype.next = function() { return this.token = this.tokens.pop() }, o.prototype.peek = function() { return this.tokens[this.tokens.length - 1] || 0 }, o.prototype.parseText = function() { for (var e = this.token.text;
                        "text" === this.peek().type;) e += "\n" + this.next().text; return this.inline.output(e) }, o.prototype.tok = function() { switch (this.token.type) {
                        case "space":
                            return "";
                        case "hr":
                            return this.renderer.hr();
                        case "heading":
                            return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
                        case "code":
                            return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
                        case "table":
                            var e, t, n, r, i, o = "",
                                a = ""; for (n = "", e = 0; e < this.token.header.length; e++) r = { header: !0, align: this.token.align[e] }, n += this.renderer.tablecell(this.inline.output(this.token.header[e]), { header: !0, align: this.token.align[e] }); for (o += this.renderer.tablerow(n), e = 0; e < this.token.cells.length; e++) { for (t = this.token.cells[e], n = "", i = 0; i < t.length; i++) n += this.renderer.tablecell(this.inline.output(t[i]), { header: !1, align: this.token.align[i] });
                                a += this.renderer.tablerow(n) } return this.renderer.table(o, a);
                        case "blockquote_start":
                            for (var a = "";
                                "blockquote_end" !== this.next().type;) a += this.tok(); return this.renderer.blockquote(a);
                        case "list_start":
                            for (var a = "", s = this.token.ordered;
                                "list_end" !== this.next().type;) a += this.tok(); return this.renderer.list(a, s);
                        case "list_item_start":
                            for (var a = "";
                                "list_item_end" !== this.next().type;) a += "text" === this.token.type ? this.parseText() : this.tok(); return this.renderer.listitem(a);
                        case "loose_item_start":
                            for (var a = "";
                                "list_item_end" !== this.next().type;) a += this.tok(); return this.renderer.listitem(a);
                        case "html":
                            var l = this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text); return this.renderer.html(l);
                        case "paragraph":
                            return this.renderer.paragraph(this.inline.output(this.token.text));
                        case "text":
                            return this.renderer.paragraph(this.parseText()) } }, c.exec = c, d.options = d.setOptions = function(e) { return u(d.defaults, e), d }, d.defaults = { gfm: !0, tables: !0, breaks: !1, pedantic: !1, sanitize: !1, sanitizer: null, mangle: !0, smartLists: !1, silent: !1, highlight: null, langPrefix: "lang-", smartypants: !1, headerPrefix: "", renderer: new i, xhtml: !1 }, d.Parser = o, d.parser = o.parse, d.Renderer = i, d.Lexer = e, d.lexer = e.lex, d.InlineLexer = r, d.inlineLexer = r.output, d.parse = d, "undefined" != typeof t && "object" == typeof n ? t.exports = d : "function" == typeof define && define.amd ? define(function() { return d }) : this.marked = d
            }).call(function() { return this || ("undefined" != typeof window ? window : e) }())
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    185: [function(e, t, n) { var r = e("codemirror");
        r.commands.tabAndIndentMarkdownList = function(e) { var t = e.listSelections(),
                n = t[0].head,
                r = e.getStateAfter(n.line),
                i = r.list !== !1; if (i) return void e.execCommand("indentMore"); if (e.options.indentWithTabs) e.execCommand("insertTab");
            else { var o = Array(e.options.tabSize + 1).join(" ");
                e.replaceSelection(o) } }, r.commands.shiftTabAndUnindentMarkdownList = function(e) { var t = e.listSelections(),
                n = t[0].head,
                r = e.getStateAfter(n.line),
                i = r.list !== !1; if (i) return void e.execCommand("indentLess"); if (e.options.indentWithTabs) e.execCommand("insertTab");
            else { var o = Array(e.options.tabSize + 1).join(" ");
                e.replaceSelection(o) } } }, { codemirror: 14 }],
    186: [function(e, t, n) {
        "use strict";

        function r(e) { return e = W ? e.replace("Ctrl", "Cmd") : e.replace("Cmd", "Ctrl") }

        function i(e, t, n) { e = e || {}; var r = document.createElement("a"); return t = void 0 == t || t, e.title && t && (r.title = a(e.title, e.action, n), W && (r.title = r.title.replace("Ctrl", "âŒ˜"), r.title = r.title.replace("Alt", "âŒ¥"))), r.tabIndex = -1, r.className = e.className, r }

        function o() { var e = document.createElement("i"); return e.className = "separator", e.innerHTML = "|", e }

        function a(e, t, n) { var i, o = e; return t && (i = G(t), n[i] && (o += " (" + r(n[i]) + ")")), o }

        function s(e, t) { t = t || e.getCursor("start"); var n = e.getTokenAt(t); if (!n.type) return {}; for (var r, i, o = n.type.split(" "), a = {}, s = 0; s < o.length; s++) r = o[s], "strong" === r ? a.bold = !0 : "variable-2" === r ? (i = e.getLine(t.line), /^\s*\d+\.\s/.test(i) ? a["ordered-list"] = !0 : a["unordered-list"] = !0) : "atom" === r ? a.quote = !0 : "em" === r ? a.italic = !0 : "quote" === r ? a.quote = !0 : "strikethrough" === r ? a.strikethrough = !0 : "comment" === r ? a.code = !0 : "link" === r ? a.link = !0 : "tag" === r ? a.image = !0 : r.match(/^header(\-[1-6])?$/) && (a[r.replace("header", "heading")] = !0); return a }

        function l(e) { var t = e.codemirror;
            t.setOption("fullScreen", !t.getOption("fullScreen")), t.getOption("fullScreen") ? (K = document.body.style.overflow, document.body.style.overflow = "hidden") : document.body.style.overflow = K; var n = t.getWrapperElement(); /fullscreen/.test(n.previousSibling.className) ? n.previousSibling.className = n.previousSibling.className.replace(/\s*fullscreen\b/, "") : n.previousSibling.className += " fullscreen"; var r = e.toolbarElements.fullscreen; /active/.test(r.className) ? r.className = r.className.replace(/\s*active\s*/g, "") : r.className += " active"; var i = t.getWrapperElement().nextSibling; /editor-preview-active-side/.test(i.className) && M(e) }

        function c(e) { N(e, "bold", e.options.blockStyles.bold) }

        function u(e) { N(e, "italic", e.options.blockStyles.italic) }

        function d(e) { N(e, "strikethrough", "~~") }

        function f(e) {
            function t(e) { if ("object" != typeof e) throw "fencing_line() takes a 'line' object (not a line number, or line text).  Got: " + typeof e + ": " + e; return e.styles && e.styles[2] && e.styles[2].indexOf("formatting-code-block") !== -1 }

            function n(e) { return e.state.base.base || e.state.base }

            function r(e, r, i, o, a) { i = i || e.getLineHandle(r), o = o || e.getTokenAt({ line: r, ch: 1 }), a = a || !!i.text && e.getTokenAt({ line: r, ch: i.text.length - 1 }); var s = o.type ? o.type.split(" ") : []; return a && n(a).indentedCode ? "indented" : s.indexOf("comment") !== -1 && (n(o).fencedChars || n(a).fencedChars || t(i) ? "fenced" : "single") }

            function i(e, t, n, r) { var i = t.line + 1,
                    o = n.line + 1,
                    a = t.line !== n.line,
                    s = r + "\n",
                    l = "\n" + r;
                a && o++, a && 0 === n.ch && (l = r + "\n", o--), O(e, !1, [s, l]), e.setSelection({ line: i, ch: 0 }, { line: o, ch: 0 }) } var o, a, s, l = e.options.blockStyles.code,
                c = e.codemirror,
                u = c.getCursor("start"),
                d = c.getCursor("end"),
                f = c.getTokenAt({ line: u.line, ch: u.ch || 1 }),
                h = c.getLineHandle(u.line),
                p = r(c, u.line, h, f); if ("single" === p) { var m = h.text.slice(0, u.ch).replace("`", ""),
                    g = h.text.slice(u.ch).replace("`", "");
                c.replaceRange(m + g, { line: u.line, ch: 0 }, { line: u.line, ch: 99999999999999 }), u.ch--, u !== d && d.ch--, c.setSelection(u, d), c.focus() } else if ("fenced" === p)
                if (u.line !== d.line || u.ch !== d.ch) { for (o = u.line; o >= 0 && (h = c.getLineHandle(o), !t(h)); o--); var v, y, b, x, w = c.getTokenAt({ line: o, ch: 1 }),
                        k = n(w).fencedChars;
                    t(c.getLineHandle(u.line)) ? (v = "", y = u.line) : t(c.getLineHandle(u.line - 1)) ? (v = "", y = u.line - 1) : (v = k + "\n", y = u.line), t(c.getLineHandle(d.line)) ? (b = "", x = d.line, 0 === d.ch && (x += 1)) : 0 !== d.ch && t(c.getLineHandle(d.line + 1)) ? (b = "", x = d.line + 1) : (b = k + "\n", x = d.line + 1), 0 === d.ch && (x -= 1), c.operation(function() { c.replaceRange(b, { line: x, ch: 0 }, { line: x + (b ? 0 : 1), ch: 0 }), c.replaceRange(v, { line: y, ch: 0 }, { line: y + (v ? 0 : 1), ch: 0 }) }), c.setSelection({ line: y + (v ? 1 : 0), ch: 0 }, { line: x + (v ? 1 : -1), ch: 0 }), c.focus() } else { var C = u.line; if (t(c.getLineHandle(u.line)) && ("fenced" === r(c, u.line + 1) ? (o = u.line, C = u.line + 1) : (a = u.line, C = u.line - 1)), void 0 === o)
                        for (o = C; o >= 0 && (h = c.getLineHandle(o), !t(h)); o--); if (void 0 === a)
                        for (s = c.lineCount(), a = C; a < s && (h = c.getLineHandle(a), !t(h)); a++);
                    c.operation(function() { c.replaceRange("", { line: o, ch: 0 }, { line: o + 1, ch: 0 }), c.replaceRange("", { line: a - 1, ch: 0 }, { line: a, ch: 0 }) }), c.focus() } else if ("indented" === p) { if (u.line !== d.line || u.ch !== d.ch) o = u.line, a = d.line, 0 === d.ch && a--;
                else { for (o = u.line; o >= 0; o--)
                        if (h = c.getLineHandle(o), !h.text.match(/^\s*$/) && "indented" !== r(c, o, h)) { o += 1; break }
                    for (s = c.lineCount(), a = u.line; a < s; a++)
                        if (h = c.getLineHandle(a), !h.text.match(/^\s*$/) && "indented" !== r(c, a, h)) { a -= 1; break } } var S = c.getLineHandle(a + 1),
                    _ = S && c.getTokenAt({ line: a + 1, ch: S.text.length - 1 }),
                    L = _ && n(_).indentedCode;
                L && c.replaceRange("\n", { line: a + 1, ch: 0 }); for (var T = o; T <= a; T++) c.indentLine(T, "subtract");
                c.focus() } else { var M = u.line === d.line && u.ch === d.ch && 0 === u.ch,
                    j = u.line !== d.line;
                M || j ? i(c, u, d, l) : O(c, !1, ["`", "`"]) } }

        function h(e) { var t = e.codemirror;
            E(t, "quote") }

        function p(e) { var t = e.codemirror;
            A(t, "smaller") }

        function m(e) { var t = e.codemirror;
            A(t, "bigger") }

        function g(e) { var t = e.codemirror;
            A(t, void 0, 1) }

        function v(e) { var t = e.codemirror;
            A(t, void 0, 2) }

        function y(e) { var t = e.codemirror;
            A(t, void 0, 3) }

        function b(e) { var t = e.codemirror;
            E(t, "unordered-list") }

        function x(e) { var t = e.codemirror;
            E(t, "ordered-list") }

        function w(e) { var t = e.codemirror;
            P(t) }

        function k(e) { var t = e.codemirror,
                n = s(t),
                r = e.options,
                i = "http://"; return !(r.promptURLs && (i = prompt(r.promptTexts.link), !i)) && void O(t, n.link, r.insertTexts.link, i) }

        function C(e) { var t = e.codemirror,
                n = s(t),
                r = e.options,
                i = "http://"; return !(r.promptURLs && (i = prompt(r.promptTexts.image), !i)) && void O(t, n.image, r.insertTexts.image, i) }

        function S(e) { var t = e.codemirror,
                n = s(t),
                r = e.options;
            O(t, n.table, r.insertTexts.table) }

        function _(e) { var t = e.codemirror,
                n = s(t),
                r = e.options;
            O(t, n.image, r.insertTexts.horizontalRule) }

        function L(e) { var t = e.codemirror;
            t.undo(), t.focus() }

        function T(e) { var t = e.codemirror;
            t.redo(), t.focus() }

        function M(e) { var t = e.codemirror,
                n = t.getWrapperElement(),
                r = n.nextSibling,
                i = e.toolbarElements["side-by-side"],
                o = !1; /editor-preview-active-side/.test(r.className) ? (r.className = r.className.replace(/\s*editor-preview-active-side\s*/g, ""), i.className = i.className.replace(/\s*active\s*/g, ""), n.className = n.className.replace(/\s*CodeMirror-sided\s*/g, " ")) : (setTimeout(function() { t.getOption("fullScreen") || l(e), r.className += " editor-preview-active-side" }, 1), i.className += " active", n.className += " CodeMirror-sided", o = !0); var a = n.lastChild; if (/editor-preview-active/.test(a.className)) { a.className = a.className.replace(/\s*editor-preview-active\s*/g, ""); var s = e.toolbarElements.preview,
                    c = n.previousSibling;
                s.className = s.className.replace(/\s*active\s*/g, ""), c.className = c.className.replace(/\s*disabled-for-preview*/g, "") } var u = function() { r.innerHTML = e.options.previewRender(e.value(), r) };
            t.sideBySideRenderingFunction || (t.sideBySideRenderingFunction = u), o ? (r.innerHTML = e.options.previewRender(e.value(), r), t.on("update", t.sideBySideRenderingFunction)) : t.off("update", t.sideBySideRenderingFunction), t.refresh() }

        function j(e) { var t = e.codemirror,
                n = t.getWrapperElement(),
                r = n.previousSibling,
                i = !!e.options.toolbar && e.toolbarElements.preview,
                o = n.lastChild;
            o && /editor-preview/.test(o.className) || (o = document.createElement("div"), o.className = "editor-preview", n.appendChild(o)), /editor-preview-active/.test(o.className) ? (o.className = o.className.replace(/\s*editor-preview-active\s*/g, ""), i && (i.className = i.className.replace(/\s*active\s*/g, ""), r.className = r.className.replace(/\s*disabled-for-preview*/g, ""))) : (setTimeout(function() { o.className += " editor-preview-active" }, 1), i && (i.className += " active", r.className += " disabled-for-preview")), o.innerHTML = e.options.previewRender(e.value(), o); var a = t.getWrapperElement().nextSibling; /editor-preview-active-side/.test(a.className) && M(e) }

        function O(e, t, n, r) { if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) { var i, o = n[0],
                    a = n[1],
                    s = e.getCursor("start"),
                    l = e.getCursor("end");
                r && (a = a.replace("#url#", r)), t ? (i = e.getLine(s.line), o = i.slice(0, s.ch), a = i.slice(s.ch), e.replaceRange(o + a, { line: s.line, ch: 0 })) : (i = e.getSelection(), e.replaceSelection(o + i + a), s.ch += o.length, s !== l && (l.ch += o.length)), e.setSelection(s, l), e.focus() } }

        function A(e, t, n) { if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) { for (var r = e.getCursor("start"), i = e.getCursor("end"), o = r.line; o <= i.line; o++) ! function(r) { var i = e.getLine(r),
                        o = i.search(/[^#]/);
                    i = void 0 !== t ? o <= 0 ? "bigger" == t ? "###### " + i : "# " + i : 6 == o && "smaller" == t ? i.substr(7) : 1 == o && "bigger" == t ? i.substr(2) : "bigger" == t ? i.substr(1) : "#" + i : 1 == n ? o <= 0 ? "# " + i : o == n ? i.substr(o + 1) : "# " + i.substr(o + 1) : 2 == n ? o <= 0 ? "## " + i : o == n ? i.substr(o + 1) : "## " + i.substr(o + 1) : o <= 0 ? "### " + i : o == n ? i.substr(o + 1) : "### " + i.substr(o + 1), e.replaceRange(i, { line: r, ch: 0 }, { line: r, ch: 99999999999999 }) }(o);
                e.focus() } }

        function E(e, t) { if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) { for (var n = s(e), r = e.getCursor("start"), i = e.getCursor("end"), o = { quote: /^(\s*)\>\s+/, "unordered-list": /^(\s*)(\*|\-|\+)\s+/, "ordered-list": /^(\s*)\d+\.\s+/ }, a = { quote: "> ", "unordered-list": "* ", "ordered-list": "1. " }, l = r.line; l <= i.line; l++) ! function(r) { var i = e.getLine(r);
                    i = n[t] ? i.replace(o[t], "$1") : a[t] + i, e.replaceRange(i, { line: r, ch: 0 }, { line: r, ch: 99999999999999 }) }(l);
                e.focus() } }

        function N(e, t, n, r) { if (!/editor-preview-active/.test(e.codemirror.getWrapperElement().lastChild.className)) { r = "undefined" == typeof r ? n : r; var i, o = e.codemirror,
                    a = s(o),
                    l = n,
                    c = r,
                    u = o.getCursor("start"),
                    d = o.getCursor("end");
                a[t] ? (i = o.getLine(u.line), l = i.slice(0, u.ch), c = i.slice(u.ch), "bold" == t ? (l = l.replace(/(\*\*|__)(?![\s\S]*(\*\*|__))/, ""), c = c.replace(/(\*\*|__)/, "")) : "italic" == t ? (l = l.replace(/(\*|_)(?![\s\S]*(\*|_))/, ""), c = c.replace(/(\*|_)/, "")) : "strikethrough" == t && (l = l.replace(/(\*\*|~~)(?![\s\S]*(\*\*|~~))/, ""), c = c.replace(/(\*\*|~~)/, "")), o.replaceRange(l + c, { line: u.line, ch: 0 }, { line: u.line, ch: 99999999999999 }), "bold" == t || "strikethrough" == t ? (u.ch -= 2, u !== d && (d.ch -= 2)) : "italic" == t && (u.ch -= 1, u !== d && (d.ch -= 1))) : (i = o.getSelection(), "bold" == t ? (i = i.split("**").join(""), i = i.split("__").join("")) : "italic" == t ? (i = i.split("*").join(""), i = i.split("_").join("")) : "strikethrough" == t && (i = i.split("~~").join("")), o.replaceSelection(l + i + c), u.ch += n.length, d.ch = u.ch + i.length), o.setSelection(u, d), o.focus() } }

        function P(e) { if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className))
                for (var t, n = e.getCursor("start"), r = e.getCursor("end"), i = n.line; i <= r.line; i++) t = e.getLine(i), t = t.replace(/^[ ]*([# ]+|\*|\-|[> ]+|[0-9]+(.|\)))[ ]*/, ""), e.replaceRange(t, { line: i, ch: 0 }, { line: i, ch: 99999999999999 }) }

        function I(e, t) { for (var n in t) t.hasOwnProperty(n) && (t[n] instanceof Array ? e[n] = t[n].concat(e[n] instanceof Array ? e[n] : []) : null !== t[n] && "object" == typeof t[n] && t[n].constructor === Object ? e[n] = I(e[n] || {}, t[n]) : e[n] = t[n]); return e }

        function D(e) { for (var t = 1; t < arguments.length; t++) e = I(e, arguments[t]); return e }

        function F(e) { var t = /[a-zA-Z0-9_\u0392-\u03c9\u0410-\u04F9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g,
                n = e.match(t),
                r = 0; if (null === n) return r; for (var i = 0; i < n.length; i++) r += n[i].charCodeAt(0) >= 19968 ? n[i].length : 1; return r }

        function z(e) { e = e || {}, e.parent = this; var t = !0; if (e.autoDownloadFontAwesome === !1 && (t = !1), e.autoDownloadFontAwesome !== !0)
                for (var n = document.styleSheets, r = 0; r < n.length; r++) n[r].href && n[r].href.indexOf("//maxcdn.bootstrapcdn.com/font-awesome/") > -1 && (t = !1); if (t) { var i = document.createElement("link");
                i.rel = "stylesheet", i.href = "https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css", document.getElementsByTagName("head")[0].appendChild(i) } if (e.element) this.element = e.element;
            else if (null === e.element) return void console.log("SimpleMDE: Error. No element was found."); if (void 0 === e.toolbar) { e.toolbar = []; for (var o in Y) Y.hasOwnProperty(o) && (o.indexOf("separator-") != -1 && e.toolbar.push("|"), (Y[o]["default"] === !0 || e.showIcons && e.showIcons.constructor === Array && e.showIcons.indexOf(o) != -1) && e.toolbar.push(o)) } e.hasOwnProperty("status") || (e.status = ["autosave", "lines", "words", "cursor"]), e.previewRender || (e.previewRender = function(e) { return this.parent.markdown(e) }), e.parsingConfig = D({ highlightFormatting: !0 }, e.parsingConfig || {}), e.insertTexts = D({}, X, e.insertTexts || {}), e.promptTexts = J, e.blockStyles = D({}, Z, e.blockStyles || {}), e.shortcuts = D({}, q, e.shortcuts || {}), void 0 != e.autosave && void 0 != e.autosave.unique_id && "" != e.autosave.unique_id && (e.autosave.uniqueId = e.autosave.unique_id), this.options = e, this.render(), !e.initialValue || this.options.autosave && this.options.autosave.foundSavedValue === !0 || this.value(e.initialValue) }

        function R() { if ("object" != typeof localStorage) return !1; try { localStorage.setItem("smde_localStorage", 1), localStorage.removeItem("smde_localStorage") } catch (e) { return !1 } return !0 }
        var B = e("codemirror");
        e("codemirror/addon/edit/continuelist.js"), e("./codemirror/tablist"), e("codemirror/addon/display/fullscreen.js"), e("codemirror/mode/markdown/markdown.js"), e("codemirror/addon/mode/overlay.js"), e("codemirror/addon/display/placeholder.js"), e("codemirror/addon/selection/mark-selection.js"), e("codemirror/mode/gfm/gfm.js"), e("codemirror/mode/xml/xml.js");
        var H = e("codemirror-spell-checker"),
            $ = e("marked"),
            W = /Mac/.test(navigator.platform),
            U = { toggleBold: c, toggleItalic: u, drawLink: k, toggleHeadingSmaller: p, toggleHeadingBigger: m, drawImage: C, toggleBlockquote: h, toggleOrderedList: x, toggleUnorderedList: b, toggleCodeBlock: f, togglePreview: j, toggleStrikethrough: d, toggleHeading1: g, toggleHeading2: v, toggleHeading3: y, cleanBlock: w, drawTable: S, drawHorizontalRule: _, undo: L, redo: T, toggleSideBySide: M, toggleFullScreen: l },
            q = { toggleBold: "Cmd-B", toggleItalic: "Cmd-I", drawLink: "Cmd-K", toggleHeadingSmaller: "Cmd-H", toggleHeadingBigger: "Shift-Cmd-H", cleanBlock: "Cmd-E", drawImage: "Cmd-Alt-I", toggleBlockquote: "Cmd-'", toggleOrderedList: "Cmd-Alt-L", toggleUnorderedList: "Cmd-L", toggleCodeBlock: "Cmd-Alt-C", togglePreview: "Cmd-P", toggleSideBySide: "F9", toggleFullScreen: "F11" },
            G = function(e) { for (var t in U)
                    if (U[t] === e) return t; return null },
            V = function() { var e = !1; return function(t) {
                    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0) }(navigator.userAgent || navigator.vendor || window.opera), e },
            K = "",
            Y = { bold: { name: "bold", action: c, className: "fa fa-bold", title: "Bold", "default": !0 }, italic: { name: "italic", action: u, className: "fa fa-italic", title: "Italic", "default": !0 }, strikethrough: { name: "strikethrough", action: d, className: "fa fa-strikethrough", title: "Strikethrough" }, heading: { name: "heading", action: p, className: "fa fa-header", title: "Heading", "default": !0 }, "heading-smaller": { name: "heading-smaller", action: p, className: "fa fa-header fa-header-x fa-header-smaller", title: "Smaller Heading" }, "heading-bigger": { name: "heading-bigger", action: m, className: "fa fa-header fa-header-x fa-header-bigger", title: "Bigger Heading" }, "heading-1": { name: "heading-1", action: g, className: "fa fa-header fa-header-x fa-header-1", title: "Big Heading" }, "heading-2": { name: "heading-2", action: v, className: "fa fa-header fa-header-x fa-header-2", title: "Medium Heading" }, "heading-3": { name: "heading-3", action: y, className: "fa fa-header fa-header-x fa-header-3", title: "Small Heading" }, "separator-1": { name: "separator-1" }, code: { name: "code", action: f, className: "fa fa-code", title: "Code" }, quote: { name: "quote", action: h, className: "fa fa-quote-left", title: "Quote", "default": !0 }, "unordered-list": { name: "unordered-list", action: b, className: "fa fa-list-ul", title: "Generic List", "default": !0 }, "ordered-list": { name: "ordered-list", action: x, className: "fa fa-list-ol", title: "Numbered List", "default": !0 }, "clean-block": { name: "clean-block", action: w, className: "fa fa-eraser fa-clean-block", title: "Clean block" }, "separator-2": { name: "separator-2" }, link: { name: "link", action: k, className: "fa fa-link", title: "Create Link", "default": !0 }, image: { name: "image", action: C, className: "fa fa-picture-o", title: "Insert Image", "default": !0 }, table: { name: "table", action: S, className: "fa fa-table", title: "Insert Table" }, "horizontal-rule": { name: "horizontal-rule", action: _, className: "fa fa-minus", title: "Insert Horizontal Line" }, "separator-3": { name: "separator-3" }, preview: { name: "preview", action: j, className: "fa fa-eye no-disable", title: "Toggle Preview", "default": !0 }, "side-by-side": { name: "side-by-side", action: M, className: "fa fa-columns no-disable no-mobile", title: "Toggle Side by Side", "default": !0 }, fullscreen: { name: "fullscreen", action: l, className: "fa fa-arrows-alt no-disable no-mobile", title: "Toggle Fullscreen", "default": !0 }, "separator-4": { name: "separator-4" }, guide: { name: "guide", action: "https://simplemde.com/markdown-guide", className: "fa fa-question-circle", title: "Markdown Guide", "default": !0 }, "separator-5": { name: "separator-5" }, undo: { name: "undo", action: L, className: "fa fa-undo no-disable", title: "Undo" }, redo: { name: "redo", action: T, className: "fa fa-repeat no-disable", title: "Redo" } },
            X = { link: ["[", "](#url#)"], image: ["![](", "#url#)"], table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text     | Text     |\n\n"], horizontalRule: ["", "\n\n-----\n\n"] },
            J = { link: "URL for the link:", image: "URL of the image:" },
            Z = { bold: "**", code: "```", italic: "*" };
        z.prototype.markdown = function(e) { if ($) { var t = {}; return this.options && this.options.renderingConfig && this.options.renderingConfig.singleLineBreaks === !1 ? t.breaks = !1 : t.breaks = !0, this.options && this.options.renderingConfig && this.options.renderingConfig.codeSyntaxHighlighting === !0 && window.hljs && (t.highlight = function(e) { return window.hljs.highlightAuto(e).value }), $.setOptions(t), $(e) } }, z.prototype.render = function(e) {
            if (e || (e = this.element || document.getElementsByTagName("textarea")[0]), !this._rendered || this._rendered !== e) {
                this.element = e;
                var t = this.options,
                    n = this,
                    i = {};
                for (var o in t.shortcuts) null !== t.shortcuts[o] && null !== U[o] && ! function(e) { i[r(t.shortcuts[e])] = function() { U[e](n) } }(o);
                i.Enter = "newlineAndIndentContinueMarkdownList", i.Tab = "tabAndIndentMarkdownList", i["Shift-Tab"] = "shiftTabAndUnindentMarkdownList", i.Esc = function(e) { e.getOption("fullScreen") && l(n) }, document.addEventListener("keydown", function(e) { e = e || window.event, 27 == e.keyCode && n.codemirror.getOption("fullScreen") && l(n) }, !1);
                var a, s;
                if (t.spellChecker !== !1 ? (a = "spell-checker", s = t.parsingConfig, s.name = "gfm", s.gitHubSpice = !1, H({ codeMirrorInstance: B })) : (a = t.parsingConfig, a.name = "gfm", a.gitHubSpice = !1), this.codemirror = B.fromTextArea(e, { mode: a, backdrop: s, theme: "paper", tabSize: void 0 != t.tabSize ? t.tabSize : 2, indentUnit: void 0 != t.tabSize ? t.tabSize : 2, indentWithTabs: t.indentWithTabs !== !1, lineNumbers: !1, autofocus: t.autofocus === !0, extraKeys: i, lineWrapping: t.lineWrapping !== !1, allowDropFileTypes: ["text/plain"], placeholder: t.placeholder || e.getAttribute("placeholder") || "", styleSelectedText: void 0 == t.styleSelectedText || t.styleSelectedText }), t.forceSync === !0) { var c = this.codemirror;
                    c.on("change", function() { c.save() }) } this.gui = {}, t.toolbar !== !1 && (this.gui.toolbar = this.createToolbar()), t.status !== !1 && (this.gui.statusbar = this.createStatusbar()), void 0 != t.autosave && t.autosave.enabled === !0 && this.autosave(),
                    this.gui.sideBySide = this.createSideBySide(), this._rendered = this.element;
                var u = this.codemirror;
                setTimeout(function() { u.refresh() }.bind(u), 0)
            }
        }, z.prototype.autosave = function() { if (R()) { var e = this; if (void 0 == this.options.autosave.uniqueId || "" == this.options.autosave.uniqueId) return void console.log("SimpleMDE: You must set a uniqueId to use the autosave feature");
                null != e.element.form && void 0 != e.element.form && e.element.form.addEventListener("submit", function() { localStorage.removeItem("smde_" + e.options.autosave.uniqueId) }), this.options.autosave.loaded !== !0 && ("string" == typeof localStorage.getItem("smde_" + this.options.autosave.uniqueId) && "" != localStorage.getItem("smde_" + this.options.autosave.uniqueId) && (this.codemirror.setValue(localStorage.getItem("smde_" + this.options.autosave.uniqueId)), this.options.autosave.foundSavedValue = !0), this.options.autosave.loaded = !0), localStorage.setItem("smde_" + this.options.autosave.uniqueId, e.value()); var t = document.getElementById("autosaved"); if (null != t && void 0 != t && "" != t) { var n = new Date,
                        r = n.getHours(),
                        i = n.getMinutes(),
                        o = "am",
                        a = r;
                    a >= 12 && (a = r - 12, o = "pm"), 0 == a && (a = 12), i = i < 10 ? "0" + i : i, t.innerHTML = "Autosaved: " + a + ":" + i + " " + o } this.autosaveTimeoutId = setTimeout(function() { e.autosave() }, this.options.autosave.delay || 1e4) } else console.log("SimpleMDE: localStorage not available, cannot autosave") }, z.prototype.clearAutosavedValue = function() { if (R()) { if (void 0 == this.options.autosave || void 0 == this.options.autosave.uniqueId || "" == this.options.autosave.uniqueId) return void console.log("SimpleMDE: You must set a uniqueId to clear the autosave value");
                localStorage.removeItem("smde_" + this.options.autosave.uniqueId) } else console.log("SimpleMDE: localStorage not available, cannot autosave") }, z.prototype.createSideBySide = function() { var e = this.codemirror,
                t = e.getWrapperElement(),
                n = t.nextSibling;
            n && /editor-preview-side/.test(n.className) || (n = document.createElement("div"), n.className = "editor-preview-side", t.parentNode.insertBefore(n, t.nextSibling)); var r = !1,
                i = !1; return e.on("scroll", function(e) { if (r) return void(r = !1);
                i = !0; var t = e.getScrollInfo().height - e.getScrollInfo().clientHeight,
                    o = parseFloat(e.getScrollInfo().top) / t,
                    a = (n.scrollHeight - n.clientHeight) * o;
                n.scrollTop = a }), n.onscroll = function() { if (i) return void(i = !1);
                r = !0; var t = n.scrollHeight - n.clientHeight,
                    o = parseFloat(n.scrollTop) / t,
                    a = (e.getScrollInfo().height - e.getScrollInfo().clientHeight) * o;
                e.scrollTo(0, a) }, n }, z.prototype.createToolbar = function(e) { if (e = e || this.options.toolbar, e && 0 !== e.length) { var t; for (t = 0; t < e.length; t++) void 0 != Y[e[t]] && (e[t] = Y[e[t]]); var n = document.createElement("div");
                n.className = "editor-toolbar"; var r = this,
                    a = {}; for (r.toolbar = e, t = 0; t < e.length; t++)
                    if (("guide" != e[t].name || r.options.toolbarGuideIcon !== !1) && !(r.options.hideIcons && r.options.hideIcons.indexOf(e[t].name) != -1 || ("fullscreen" == e[t].name || "side-by-side" == e[t].name) && V())) { if ("|" === e[t]) { for (var l = !1, c = t + 1; c < e.length; c++) "|" === e[c] || r.options.hideIcons && r.options.hideIcons.indexOf(e[c].name) != -1 || (l = !0); if (!l) continue }! function(e) { var t;
                            t = "|" === e ? o() : i(e, r.options.toolbarTips, r.options.shortcuts), e.action && ("function" == typeof e.action ? t.onclick = function(t) { t.preventDefault(), e.action(r) } : "string" == typeof e.action && (t.href = e.action, t.target = "_blank")), a[e.name || e] = t, n.appendChild(t) }(e[t]) }
                r.toolbarElements = a; var u = this.codemirror;
                u.on("cursorActivity", function() { var e = s(u); for (var t in a) ! function(t) { var n = a[t];
                        e[t] ? n.className += " active" : "fullscreen" != t && "side-by-side" != t && (n.className = n.className.replace(/\s*active\s*/g, "")) }(t) }); var d = u.getWrapperElement(); return d.parentNode.insertBefore(n, d), n } }, z.prototype.createStatusbar = function(e) { e = e || this.options.status; var t = this.options,
                n = this.codemirror; if (e && 0 !== e.length) { var r, i, o, a = []; for (r = 0; r < e.length; r++)
                    if (i = void 0, o = void 0, "object" == typeof e[r]) a.push({ className: e[r].className, defaultValue: e[r].defaultValue, onUpdate: e[r].onUpdate });
                    else { var s = e[r]; "words" === s ? (o = function(e) { e.innerHTML = F(n.getValue()) }, i = function(e) { e.innerHTML = F(n.getValue()) }) : "lines" === s ? (o = function(e) { e.innerHTML = n.lineCount() }, i = function(e) { e.innerHTML = n.lineCount() }) : "cursor" === s ? (o = function(e) { e.innerHTML = "0:0" }, i = function(e) { var t = n.getCursor();
                            e.innerHTML = t.line + ":" + t.ch }) : "autosave" === s && (o = function(e) { void 0 != t.autosave && t.autosave.enabled === !0 && e.setAttribute("id", "autosaved") }), a.push({ className: s, defaultValue: o, onUpdate: i }) }
                var l = document.createElement("div"); for (l.className = "editor-statusbar", r = 0; r < a.length; r++) { var c = a[r],
                        u = document.createElement("span");
                    u.className = c.className, "function" == typeof c.defaultValue && c.defaultValue(u), "function" == typeof c.onUpdate && this.codemirror.on("update", function(e, t) { return function() { t.onUpdate(e) } }(u, c)), l.appendChild(u) } var d = this.codemirror.getWrapperElement(); return d.parentNode.insertBefore(l, d.nextSibling), l } }, z.prototype.value = function(e) { return void 0 === e ? this.codemirror.getValue() : (this.codemirror.getDoc().setValue(e), this) }, z.toggleBold = c, z.toggleItalic = u, z.toggleStrikethrough = d, z.toggleBlockquote = h, z.toggleHeadingSmaller = p, z.toggleHeadingBigger = m, z.toggleHeading1 = g, z.toggleHeading2 = v, z.toggleHeading3 = y, z.toggleCodeBlock = f, z.toggleUnorderedList = b, z.toggleOrderedList = x, z.cleanBlock = w, z.drawLink = k, z.drawImage = C, z.drawTable = S, z.drawHorizontalRule = _, z.undo = L, z.redo = T, z.togglePreview = j, z.toggleSideBySide = M, z.toggleFullScreen = l, z.prototype.toggleBold = function() { c(this) }, z.prototype.toggleItalic = function() { u(this) }, z.prototype.toggleStrikethrough = function() { d(this) }, z.prototype.toggleBlockquote = function() { h(this) }, z.prototype.toggleHeadingSmaller = function() { p(this) }, z.prototype.toggleHeadingBigger = function() { m(this) }, z.prototype.toggleHeading1 = function() { g(this) }, z.prototype.toggleHeading2 = function() { v(this) }, z.prototype.toggleHeading3 = function() { y(this) }, z.prototype.toggleCodeBlock = function() { f(this) }, z.prototype.toggleUnorderedList = function() { b(this) }, z.prototype.toggleOrderedList = function() { x(this) }, z.prototype.cleanBlock = function() { w(this) }, z.prototype.drawLink = function() { k(this) }, z.prototype.drawImage = function() { C(this) }, z.prototype.drawTable = function() { S(this) }, z.prototype.drawHorizontalRule = function() { _(this) }, z.prototype.undo = function() { L(this) }, z.prototype.redo = function() { T(this) }, z.prototype.togglePreview = function() { j(this) }, z.prototype.toggleSideBySide = function() { M(this) }, z.prototype.toggleFullScreen = function() { l(this) }, z.prototype.isPreviewActive = function() { var e = this.codemirror,
                t = e.getWrapperElement(),
                n = t.lastChild; return /editor-preview-active/.test(n.className) }, z.prototype.isSideBySideActive = function() { var e = this.codemirror,
                t = e.getWrapperElement(),
                n = t.nextSibling; return /editor-preview-active-side/.test(n.className) }, z.prototype.isFullscreenActive = function() { var e = this.codemirror; return e.getOption("fullScreen") }, z.prototype.getState = function() { var e = this.codemirror; return s(e) }, z.prototype.toTextArea = function() { var e = this.codemirror,
                t = e.getWrapperElement();
            t.parentNode && (this.gui.toolbar && t.parentNode.removeChild(this.gui.toolbar), this.gui.statusbar && t.parentNode.removeChild(this.gui.statusbar), this.gui.sideBySide && t.parentNode.removeChild(this.gui.sideBySide)), e.toTextArea(), this.autosaveTimeoutId && (clearTimeout(this.autosaveTimeoutId), this.autosaveTimeoutId = void 0, this.clearAutosavedValue()) }, t.exports = z
    }, { "./codemirror/tablist": 185, codemirror: 14, "codemirror-spell-checker": 5, "codemirror/addon/display/fullscreen.js": 6, "codemirror/addon/display/placeholder.js": 7, "codemirror/addon/edit/continuelist.js": 8, "codemirror/addon/mode/overlay.js": 10, "codemirror/addon/selection/mark-selection.js": 12, "codemirror/mode/gfm/gfm.js": 16, "codemirror/mode/markdown/markdown.js": 18, "codemirror/mode/xml/xml.js": 20, marked: 184 }],
    187: [function(e, t, n) {
        (function(n, r) { var i;! function() { "use strict";
                i = function(e, t, n, i) {
                    function o(e, t) { var n = p._readFile(e, null, i.asyncLoad);
                        i.asyncLoad ? n.then(function(e) { t(e) }) : t(n) }

                    function a(e) { t = e, n && l() }

                    function s(e) { n = e, t && l() }

                    function l() { for (p.rules = p._parseAFF(t), p.compoundRuleCodes = {}, u = 0, f = p.compoundRules.length; u < f; u++) { var e = p.compoundRules[u]; for (d = 0, h = e.length; d < h; d++) p.compoundRuleCodes[e[d]] = [] } "ONLYINCOMPOUND" in p.flags && (p.compoundRuleCodes[p.flags.ONLYINCOMPOUND] = []), p.dictionaryTable = p._parseDIC(n); for (u in p.compoundRuleCodes) 0 === p.compoundRuleCodes[u].length && delete p.compoundRuleCodes[u]; for (u = 0, f = p.compoundRules.length; u < f; u++) { var r = p.compoundRules[u],
                                o = ""; for (d = 0, h = r.length; d < h; d++) { var a = r[d];
                                o += a in p.compoundRuleCodes ? "(" + p.compoundRuleCodes[a].join("|") + ")" : a } p.compoundRules[u] = new RegExp(o, "i") } p.loaded = !0, i.asyncLoad && i.loadedCallback && i.loadedCallback(p) } i = i || {}, this.dictionary = null, this.rules = {}, this.dictionaryTable = {}, this.compoundRules = [], this.compoundRuleCodes = {}, this.replacementTable = [], this.flags = i.flags || {}, this.memoized = {}, this.loaded = !1; var c, u, d, f, h, p = this; return e && (p.dictionary = e, t && n ? l() : "undefined" != typeof window && "chrome" in window && "extension" in window.chrome && "getURL" in window.chrome.extension ? (c = i.dictionaryPath ? i.dictionaryPath : "typo/dictionaries", t || o(chrome.extension.getURL(c + "/" + e + "/" + e + ".aff"), a), n || o(chrome.extension.getURL(c + "/" + e + "/" + e + ".dic"), s)) : (c = i.dictionaryPath ? i.dictionaryPath : "undefined" != typeof r ? r + "/dictionaries" : "./dictionaries", t || o(c + "/" + e + "/" + e + ".aff", a), n || o(c + "/" + e + "/" + e + ".dic", s))), this }, i.prototype = { load: function(e) { for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]); return this }, _readFile: function(t, r, i) { if (r = r || "utf8", "undefined" != typeof XMLHttpRequest) { var o, a = new XMLHttpRequest; return a.open("GET", t, i), i && (o = new Promise(function(e, t) { a.onload = function() { 200 === a.status ? e(a.responseText) : t(a.statusText) }, a.onerror = function() { t(a.statusText) } })), a.overrideMimeType && a.overrideMimeType("text/plain; charset=" + r), a.send(null), i ? o : a.responseText } if ("undefined" != typeof e) { var s = e("fs"); try { if (s.existsSync(t)) { var l = s.statSync(t),
                                        c = s.openSync(t, "r"),
                                        u = new n(l.size); return s.readSync(c, u, 0, u.length, null), u.toString(r, 0, u.length) } console.log("Path " + t + " does not exist.") } catch (d) { return console.log(d), "" } } }, _parseAFF: function(e) { var t, n, r, i, o, a, s, l, c = {};
                        e = this._removeAffixComments(e); var u = e.split("\n"); for (o = 0, s = u.length; o < s; o++) { t = u[o]; var d = t.split(/\s+/),
                                f = d[0]; if ("PFX" == f || "SFX" == f) { var h = d[1],
                                    p = d[2];
                                r = parseInt(d[3], 10); var m = []; for (a = o + 1, l = o + 1 + r; a < l; a++) { n = u[a], i = n.split(/\s+/); var g = i[2],
                                        v = i[3].split("/"),
                                        y = v[0]; "0" === y && (y = ""); var b = this.parseRuleCodes(v[1]),
                                        x = i[4],
                                        w = {};
                                    w.add = y, b.length > 0 && (w.continuationClasses = b), "." !== x && ("SFX" === f ? w.match = new RegExp(x + "$") : w.match = new RegExp("^" + x)), "0" != g && ("SFX" === f ? w.remove = new RegExp(g + "$") : w.remove = g), m.push(w) } c[h] = { type: f, combineable: "Y" == p, entries: m }, o += r } else if ("COMPOUNDRULE" === f) { for (r = parseInt(d[1], 10), a = o + 1, l = o + 1 + r; a < l; a++) t = u[a], i = t.split(/\s+/), this.compoundRules.push(i[1]);
                                o += r } else "REP" === f ? (i = t.split(/\s+/), 3 === i.length && this.replacementTable.push([i[1], i[2]])) : this.flags[f] = d[1] } return c }, _removeAffixComments: function(e) { return e = e.replace(/^\s*#.*$/gm, ""), e = e.replace(/^\s\s*/m, "").replace(/\s\s*$/m, ""), e = e.replace(/\n{2,}/g, "\n"), e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, "") }, _parseDIC: function(e) {
                        function t(e, t) { r.hasOwnProperty(e) || (r[e] = null), t.length > 0 && (null === r[e] && (r[e] = []), r[e].push(t)) } e = this._removeDicComments(e); for (var n = e.split("\n"), r = {}, i = 1, o = n.length; i < o; i++) { var a = n[i],
                                s = a.split("/", 2),
                                l = s[0]; if (s.length > 1) { var c = this.parseRuleCodes(s[1]); "NEEDAFFIX" in this.flags && c.indexOf(this.flags.NEEDAFFIX) != -1 || t(l, c); for (var u = 0, d = c.length; u < d; u++) { var f = c[u],
                                        h = this.rules[f]; if (h)
                                        for (var p = this._applyRule(l, h), m = 0, g = p.length; m < g; m++) { var v = p[m]; if (t(v, []), h.combineable)
                                                for (var y = u + 1; y < d; y++) { var b = c[y],
                                                        x = this.rules[b]; if (x && x.combineable && h.type != x.type)
                                                        for (var w = this._applyRule(v, x), k = 0, C = w.length; k < C; k++) { var S = w[k];
                                                            t(S, []) } } } f in this.compoundRuleCodes && this.compoundRuleCodes[f].push(l) } } else t(l.trim(), []) } return r }, _removeDicComments: function(e) { return e = e.replace(/^\t.*$/gm, "") }, parseRuleCodes: function(e) { if (!e) return []; if (!("FLAG" in this.flags)) return e.split(""); if ("long" === this.flags.FLAG) { for (var t = [], n = 0, r = e.length; n < r; n += 2) t.push(e.substr(n, 2)); return t } return "num" === this.flags.FLAG ? e.split(",") : void 0 }, _applyRule: function(e, t) { for (var n = t.entries, r = [], i = 0, o = n.length; i < o; i++) { var a = n[i]; if (!a.match || e.match(a.match)) { var s = e; if (a.remove && (s = s.replace(a.remove, "")), "SFX" === t.type ? s += a.add : s = a.add + s, r.push(s), "continuationClasses" in a)
                                    for (var l = 0, c = a.continuationClasses.length; l < c; l++) { var u = this.rules[a.continuationClasses[l]];
                                        u && (r = r.concat(this._applyRule(s, u))) } } } return r }, check: function(e) { if (!this.loaded) throw "Dictionary not loaded."; var t = e.replace(/^\s\s*/, "").replace(/\s\s*$/, ""); if (this.checkExact(t)) return !0; if (t.toUpperCase() === t) { var n = t[0] + t.substring(1).toLowerCase(); if (this.hasFlag(n, "KEEPCASE")) return !1; if (this.checkExact(n)) return !0 } var r = t.toLowerCase(); if (r !== t) { if (this.hasFlag(r, "KEEPCASE")) return !1; if (this.checkExact(r)) return !0 } return !1 }, checkExact: function(e) { if (!this.loaded) throw "Dictionary not loaded."; var t, n, r = this.dictionaryTable[e]; if ("undefined" == typeof r) { if ("COMPOUNDMIN" in this.flags && e.length >= this.flags.COMPOUNDMIN)
                                for (t = 0, n = this.compoundRules.length; t < n; t++)
                                    if (e.match(this.compoundRules[t])) return !0 } else { if (null === r) return !0; if ("object" == typeof r)
                                for (t = 0, n = r.length; t < n; t++)
                                    if (!this.hasFlag(e, "ONLYINCOMPOUND", r[t])) return !0 } return !1 }, hasFlag: function(e, t, n) { if (!this.loaded) throw "Dictionary not loaded."; return !!(t in this.flags && ("undefined" == typeof n && (n = Array.prototype.concat.apply([], this.dictionaryTable[e])), n && n.indexOf(this.flags[t]) !== -1)) }, alphabet: "", suggest: function(e, t) {
                        function n(e) { var t, n, r, i, o, a, s = []; for (t = 0, i = e.length; t < i; t++) { var l = e[t]; for (n = 0, o = l.length + 1; n < o; n++) { var c = [l.substring(0, n), l.substring(n)]; if (c[1] && s.push(c[0] + c[1].substring(1)), c[1].length > 1 && c[1][1] !== c[1][0] && s.push(c[0] + c[1][1] + c[1][0] + c[1].substring(2)), c[1])
                                        for (r = 0, a = u.alphabet.length; r < a; r++) u.alphabet[r] != c[1].substring(0, 1) && s.push(c[0] + u.alphabet[r] + c[1].substring(1)); if (c[1])
                                        for (r = 0, a = u.alphabet.length; r < a; r++) s.push(c[0] + u.alphabet[r] + c[1]) } } return s }

                        function r(e) { for (var t = [], n = 0, r = e.length; n < r; n++) u.check(e[n]) && t.push(e[n]); return t }

                        function i(e) {
                            function i(e, t) { return e[1] < t[1] ? -1 : 1 } var o, a, s = n([e]),
                                l = n(s),
                                c = r(s.concat(l)),
                                d = {}; for (o = 0, a = c.length; o < a; o++) c[o] in d ? d[c[o]] += 1 : d[c[o]] = 1; var f = []; for (o in d) d.hasOwnProperty(o) && f.push([o, d[o]]);
                            f.sort(i).reverse(); var h = [],
                                p = "lowercase"; for (e.toUpperCase() === e ? p = "uppercase" : e.substr(0, 1).toUpperCase() + e.substr(1).toLowerCase() === e && (p = "capitalized"), o = 0, a = Math.min(t, f.length); o < a; o++) "uppercase" === p ? f[o][0] = f[o][0].toUpperCase() : "capitalized" === p && (f[o][0] = f[o][0].substr(0, 1).toUpperCase() + f[o][0].substr(1)), u.hasFlag(f[o][0], "NOSUGGEST") || h.push(f[o][0]); return h } if (!this.loaded) throw "Dictionary not loaded."; if (t = t || 5, this.memoized.hasOwnProperty(e)) { var o = this.memoized[e].limit; if (t <= o || this.memoized[e].suggestions.length < o) return this.memoized[e].suggestions.slice(0, t) } if (this.check(e)) return []; for (var a = 0, s = this.replacementTable.length; a < s; a++) { var l = this.replacementTable[a]; if (e.indexOf(l[0]) !== -1) { var c = e.replace(l[0], l[1]); if (this.check(c)) return [c] } } var u = this; return u.alphabet = "abcdefghijklmnopqrstuvwxyz", this.memoized[e] = { suggestions: i(e), limit: t }, this.memoized[e].suggestions } } }(), "undefined" != typeof t && (t.exports = i) }).call(this, e("buffer").Buffer, "/node_modules/typo-js") }, { buffer: 3, fs: 2 }],
    188: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(n, "__esModule", { value: !0 }); var o = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            a = e("./ajax"),
            s = r(a),
            l = e("./forms"),
            c = r(l),
            u = e("./highlight"),
            d = r(u),
            f = $(".comment__form, .comment__edit"),
            h = function() {
                function e(t) { i(this, e), this.element = t } return o(e, [{ key: "collapseComment", value: function(e) { $(e.target).hasClass("collapse-comment") && this.collapse() } }, { key: "collapse", value: function() { this.collapsible.slideToggle(), this.element.toggleClass("collapsed") } }, { key: "hideComment", value: function() { this.children.hide(), this.collapseButton.addClass("collapsed") } }, { key: "toggleNegativeComment", value: function(e) { e.preventDefault(); var t = $(e.target),
                            n = t.next();
                        t.parent();
                        n.hasClass("hidden-negative-comment") && (n.removeClass("hidden-negative-comment"), n.hide().slideDown(), t.hide()) } }, { key: "showEditForm", value: function(e) { e.preventDefault(); var t = this.editForm;
                        t.hasClass("hidden") ? (this.element.hasClass("collapsed") && this.collapse(), f.addClass("hidden"), this.commentText.addClass("hidden"), t.removeClass("hidden"), t.find('[name="text"]').focus(), t.find('[type="submit"]').removeAttr("disabled")) : (t.addClass("hidden"), this.commentText.removeClass("hidden")) } }, { key: "showReplyForm", value: function(e) { e.preventDefault(), e.stopPropagation(); var t = this.replyForm;
                        t.hasClass("hidden") ? (f.addClass("hidden"), this.commentText.removeClass("hidden"), t.removeClass("hidden"), t.find('[name="text"]').focus(), t.find('[type="submit"]').removeAttr("disabled")) : t.addClass("hidden") } }, { key: "edit", value: function(e) { var t = this;
                        e.preventDefault(), e.stopPropagation(); var n = new c["default"](this.editForm);
                        s["default"].postFormData(n.url, n.getFormData()).done(function(e) { t.commentText.html(e.text), t.commentText.removeClass("hidden"), (0, d["default"])(t.commentText), n.element.addClass("hidden"), n.removeOldMessages() }).fail(function(e) { n.showMessages(e.responseJSON) }) } }, { key: "remove", value: function(e) { e.preventDefault(), e.stopPropagation(); var t = new c["default"]($(e.target)),
                            n = t.element.closest(".comments__list");
                        s["default"].postFormData(t.url, t.getFormData()).done(function(t) { n.length ? n.html(t) : ($(e.target).parent().after("<p>[Comment deleted]</p>"), $(e.target).parent().remove()) }).fail(function(e) {}) } }, { key: "collapsible", get: function() { return this.element.find(".collapsible").first() } }, { key: "commentText", get: function() { return this.element.find(".comment__text").first() } }, { key: "replyForm", get: function() { return this.element.find(".comment__form").first() } }, { key: "editButton", get: function() { return this.element.find(".btn-edit").first() } }, { key: "replyButton", get: function() { return this.element.find(".btn-reply").first() } }, { key: "editForm", get: function() { return this.element.find(".comment__edit").first() } }, { key: "deleteForm", get: function() { return this.element.find(".comment__delete").first() } }, { key: "collapseButton", get: function() { return this.element.find(".collapse-comment").first() } }, { key: "negativeCommentToggler", get: function() { return this.element.find(".toggle-negative-comment").first() } }, { key: "children", get: function() { return this.element.find(".comment__children").first() } }]), e }();
        n["default"] = h }, { "./ajax": 194, "./forms": 204, "./highlight": 205 }],
    189: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(n, "__esModule", { value: !0 }); var o = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            a = e("lodash/debounce"),
            s = r(a),
            l = e("./ajax"),
            c = r(l),
            u = e("./forms"),
            d = r(u),
            f = e("./Comment"),
            h = r(f),
            p = e("./LocalStorageManager"),
            m = r(p),
            g = new m["default"]("collapsedComments"),
            v = function() {
                function e(t) { i(this, e), this.element = t, this.element.get(0).addEventListener("click", this.onClick.bind(this), !0), this.element.on("submit", ".comment__edit", this.handleEditedComment.bind(this)), this.element.on("submit", ".comment__delete", this.handleCommentRemoval.bind(this)), this.element.on("click", ".btn-edit", this.handleEdit.bind(this)), this.element.on("click", ".btn-reply", this.handleReply.bind(this)), this.element.on("click", ".btn-cancel", this.handleCancel.bind(this)), this.element.on("click", ".toggle-negative-comment", this.handleNegativeComment.bind(this)), this.element.on("click", ".collapse-comment", (0, s["default"])(this.handleCommentCollapse.bind(this), 200, { leading: !0, trailing: !1 })) } return o(e, [{ key: "init", value: function() { var e = g.getResource();
                        g.setResource(e), g.has(this.id) && this.hideComment() } }, { key: "onClick", value: function(e) { var t = $(e.target).closest(".comment__container").first();
                        this.comment = new h["default"](t) } }, { key: "handleReply", value: function(e) { this.comment.showReplyForm(e) } }, { key: "handleEdit", value: function(e) { this.comment.showEditForm(e) } }, { key: "handleEditedComment", value: function(e) { this.comment.edit(e) } }, { key: "handleEditedComment", value: function(e) { this.comment.edit(e) } }, { key: "handleCommentRemoval", value: function(e) { this.comment.remove(e) } }, { key: "handleNegativeComment", value: function(e) { this.comment.toggleNegativeComment(e) } }, { key: "handleCommentCollapse", value: function(e) { this.comment.collapseComment(e) } }, { key: "handleCancel", value: function(e) { e.preventDefault(), e.stopPropagation(); var t = $(e.target).closest("form").first();
                        t.addClass("hidden"), t.hasClass("comment__edit") && t.siblings(".comment__text").removeClass("hidden") } }, { key: "addComment", value: function(e) { e.preventDefault(), e.stopPropagation(); var t = new d["default"]($(e.target).closest("form").first()),
                            n = this.element.find(".comments__list"),
                            r = t.element.hasClass("comment__form--main");
                        r ? t.element.find('input[name="parent_id"]').remove() : n = this.comment.element.find(".comment__children").first(), c["default"].postFormData(t.url, t.getFormData()).done(function(e) { t.textarea.val(""), t.submitButton.removeAttr("disabled"), n.prepend(e), t.removeOldMessages(), r || t.element.addClass("hidden") }).fail(function(e) { t.showMessages(e.responseJSON) }) } }]), e }();
        n["default"] = v }, { "./Comment": 188, "./LocalStorageManager": 191, "./ajax": 194, "./forms": 204, "lodash/debounce": 148 }],
    190: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(n, "__esModule", { value: !0 }); var o = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            a = e("./tabs"),
            s = e("./html-layouts"),
            l = e("./ajax"),
            c = r(l),
            u = function() {
                function e() { i(this, e) } return o(e, null, [{ key: "getImages", value: function(e) { var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            r = n || $(".image-panel.active"),
                            i = 40,
                            o = (0, a.getActivePanelType)(r),
                            s = "/admin/images/" + o + "?page=" + e + "&perPage=" + i;
                        c["default"].get(s).done(function(e) { $('.nav-tabs a[href="#' + r.attr("id") + '"]').tab("show"), r.html(e), t.addOverlay() }) } }, { key: "addOverlay", value: function() { $(".image-section").each(function() { var e = $(this).find(".image-panel"),
                                t = e.find(".image.small"),
                                n = $(this).data("delete");
                            n ? t.each(function() { var e = $(this);
                                e.before((0, s.deleteButtonFor)(e)) }) : t.each(function() { var e = $(this);
                                e.before((0, s.overlayFor)(e)) }) }) } }]), e }();
        n["default"] = u }, { "./ajax": 194, "./html-layouts": 206, "./tabs": 222 }],
    191: [function(e, t, n) { "use strict";

        function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(n, "__esModule", { value: !0 }); var i = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            o = function() {
                function e(t) { r(this, e), this.resourceName = t, this.resource = [] } return i(e, [{ key: "setResource", value: function(e) { this.resource = e } }, { key: "add", value: function(e) { var t = this.getResource();
                        this.setResource(t); var n = this.getIndex(e);
                        n === -1 && this.resource.push(e), this.pushResource() } }, { key: "remove", value: function(e) { var t = this.getResource();
                        this.setResource(t); var n = this.getIndex(e);
                        n !== -1 && this.resource.splice(n, 1), this.pushResource() } }, { key: "has", value: function(e) { return this.getIndex(e) !== -1 } }, { key: "getIndex", value: function(e) { return this.setResource(this.getResource()), this.resource.length > 0 ? this.resource.indexOf(e) : -1 } }, { key: "getResource", value: function() { var e = localStorage.getItem(this.resourceName); return e ? JSON.parse(e) : [] } }, { key: "pushResource", value: function() { localStorage.setItem(this.resourceName, JSON.stringify(this.resource)) } }]), e }();
        n["default"] = o }, {}],
    192: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(n, "__esModule", { value: !0 }); var o = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            a = e("typo-js"),
            s = r(a),
            l = "https://cdn.rawgit.com/kofifus/Typo.js/312bf158a814dda6eac3bd991e3a133c84472fc8/typo/dictionaries/en_US/en_US.aff",
            c = "https://cdn.rawgit.com/kofifus/Typo.js/312bf158a814dda6eac3bd991e3a133c84472fc8/typo/dictionaries/en_US/en_US.dic",
            u = function() {
                function e(t) { var n = this;
                    i(this, e), this.cm = t.cm, this.customWords = t.customWords, this.enabled = t.enabled; var r = this.initDictionaries(l, c);
                    r.then(function(e) { return n.init(e) }) } return o(e, [{ key: "initDictionaries", value: function(e, t) { return new Promise(function(n, r) { var i = new XMLHttpRequest;
                            i.open("GET", e, !0), i.onload = function() { if (4 === i.readyState && 200 === i.status) { var e = new XMLHttpRequest;
                                    e.open("GET", t, !0), e.onload = function() { 4 === e.readyState && 200 === e.status ? n(new s["default"]("en_US", i.responseText, e.responseText, { platform: "any" })) : r() }, e.send(null) } else r() }, i.send(null) }) } }, { key: "init", value: function(e) { var t = '!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~ ',
                            n = this.customWords;
                        this.overlay = { token: function(r) { var i = r.peek(),
                                    o = ""; if (t.includes(i)) return r.next(), null; for (; null != (i = r.peek()) && !t.includes(i);) o += i, r.next(); return /[a-z]/i.test(o) ? n.indexOf(o.toLowerCase()) !== -1 ? null : e && !e.check(o) ? "spell-error" : null : null } }, this.enabled ? this.start() : this.stop() } }, { key: "start", value: function() { this.enabled = !0, this.cm.addOverlay(this.overlay) } }, { key: "stop", value: function() { this.enabled = !1, this.cm.removeOverlay(this.overlay) } }, { key: "toggle", value: function() { this.enabled ? this.stop() : this.start() } }]), e }();
        n["default"] = u }, { "typo-js": 187 }],
    193: [function(e, t, n) { "use strict";

        function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(n, "__esModule", { value: !0 }); var i = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            o = function() {
                function e() { r(this, e) } return i(e, null, [{ key: "resize", value: function(e, t) { if (e.val().length) { var n = $(e).height();
                            e.height("auto"); var r = parseInt($(e).css("padding"), 10),
                                i = $(e).prop("scrollHeight"); if (i) { var o = i - 2 * r;
                                e.height(o), $(e).offset().top - t + o > $(window).height() - 100 ? $(window).scrollTop(t + o - n) : $(window).scrollTop(t) } } } }]), e }();
        n["default"] = o }, {}],
    194: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(n, "__esModule", { value: !0 }); var o = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            a = e("./modals/Modal");
        r(a);
        $.ajaxSetup({ contentType: "application/json", dataType: "json", headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") } }), $(document).ajaxError(function(e, t, n) { 500 === t.status && toastr.error('errors') }); var s = function() {
            function e() { i(this, e) } return o(e, null, [{ key: "get", value: function(e) { return $.ajax({ url: e }) } }, { key: "post", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JSON.stringify({}); return $.ajax({ url: e, method: "POST", data: t }) } }, { key: "patch", value: function(e, t) { return $.ajax({ url: e, method: "PATCH", data: t }) } }, { key: "put", value: function(e, t) { return $.ajax({ url: e, method: "PUT", data: t }) } }, { key: "delete", value: function(e) { return $.ajax({ url: e, method: "DELETE" }) } }, { key: "postFormData", value: function(e, t) { return $.ajax({ url: e, data: t, method: "POST", contentType: !1, processData: !1 }) } }]), e }();
        n["default"] = s }, { "./modals/Modal": 212 }],
    195: [function(e, t, n) { "use strict";

        function r() { $(".article-recommended-link").click(function(e) { i("Recommended", "Click", o(this.href)) }), $(".article-related-link").click(function(e) { i("Related", "Click", o(this.href)) }), $(".article-sidebar-link").click(function(e) { i("Sidebar", "Click", o(this.href)) }) }

        function i() { var e = ["_trackEvent"];
            e.push.apply(e, arguments), _gaq && _gaq.push(e) }

        function o(e) { return e.split(".com/").pop() } Object.defineProperty(n, "__esModule", { value: !0 }), n["default"] = r }, {}],
    196: [function(e, t, n) { "use strict";

        function r() { var e = document.createElement("fake"),
                t = { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", animation: "animationend" }; for (var n in t)
                if (void 0 !== e.style[n]) return t[n] } Object.defineProperty(n, "__esModule", { value: !0 }), n["default"] = r }, {}],
    197: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } } var i = e("./username"),
            o = r(i),
            a = e("./comments"),
            s = r(a),
            l = e("./landing"),
            c = r(l),
            u = e("./textarea"),
            d = r(u),
            f = e("./pagination"),
            h = r(f),
            p = e("./verification"),
            m = r(p),
            g = e("./bootstrap-studio"),
            v = r(g),
            y = e("./articleAds"),
            b = r(y),
            x = e("./articles-show"),
            w = r(x),
            k = e("./profiles"),
            C = r(k),
            S = e("./posts"),
            _ = r(S),
            L = e("./search"),
            T = r(L),
            M = e("./sticky-sidebar"),
            j = r(M),
            O = e("./editor"),
            A = r(O),
            E = e("./navigation"),
            N = (r(E), e("./temp")),
            P = r(N),
            I = e("./highlight"),
            D = r(I),
            F = e("./embedding"),
            z = e("./notifications/NotificationContainer"),
            R = r(z),
            B = e("./modals/ConfirmationModal"),
            H = r(B),
            W = e("./modals/FlagContentModal"),
            U = r(W),
            q = e("./modals/FormModal"),
            G = r(q),
            V = e("./analytics-events"),
            K = r(V);
        Object.except = function(e, t) { return Object.filter(t, function(t) { return e.indexOf(t) === -1 }) }, Object.filter = function(e, t) { return Object.keys(e).filter(function(e) { return t(e) }).reduce(function(t, n) { return t[n] = e[n], t }, {}) }, $(function() {
            function e() { var e = $(this);
                e.val() && e.addClass("filled") }

            function t(e) { "form-article" !== $(this).attr("id") && $(this).find('[type="submit"]').attr("disabled", !0) }

            function n() { $('[data-toggle="form"]').each(function() { var e = $(this),
                        t = $(e.data("target"));
                    new P["default"](t, e) }) } var r = $("textarea:not(.no-resize)"),
                i = $(".email-verification"),
                a = $(".page--article-show").length,
                l = $(".page--profile").length,
                u = ($(".header--main"), $("#confirm-delete")),
                f = $("#flag-modal"),
                p = $("#embeddable"),
                g = $(".notifications__container"); if (toastr.options = { closeButton: !0, debug: !1, newestOnTop: !1, progressBar: !1, positionClass: "toast-bottom-full-width", preventDuplicates: !1, onclick: null, showDuration: "300", hideDuration: "1000", timeOut: "5000", extendedTimeOut: "1000", showEasing: "swing", hideEasing: "linear", showMethod: "slideDown", hideMethod: "fadeOut" }, (0, A["default"])(), $('input[type="text"], textarea').each(e), $('input[type="text"], textarea').on("blur", e), $(document).on("submit", "form", t), (0, D["default"])($("body")), u.length) { new H["default"](u) } if (f.length) { new U["default"](f) } if (g.length) { new R["default"](g) } if ((0, _["default"])(), n(), (0, T["default"])(), (0, j["default"])(), (0, h["default"])(), i.length && (0, m["default"])(), (0, c["default"])(), l) { new G["default"]($("#change-password"));
                (0, C["default"])() } a && ((0, w["default"])(), (0, b["default"])(), (0, v["default"])()), r.length && (0, d["default"])(r), (0, s["default"])(), (0, o["default"])(), p.length && (0, F.embedLinks)(p), (0, K["default"])() }) }, {
        "./analytics-events": 195,
        "./articleAds": 198,
        "./articles-show": 199,
        "./bootstrap-studio": 200,
        "./comments": 201,
        "./editor": 202,
        "./embedding": 203,
        "./highlight": 205,
        "./landing": 208,
        "./modals/ConfirmationModal": 209,
        "./modals/FlagContentModal": 210,
        "./modals/FormModal": 211,
        "./navigation": 213,
        "./notifications/NotificationContainer": 215,
        "./pagination": 216,
        "./posts": 217,
        "./profiles": 218,
        "./search": 219,
        "./sticky-sidebar": 220,
        "./temp": 223,
        "./textarea": 224,
        "./username": 225,
        "./verification": 226
    }],
    198: [function(e, t, n) { "use strict";

        function r() { a = $(".article--big"); var e = a.length;
            e && i() }

        function i() { var e = a.find("h2, hr"),
                t = a.find("hr"),
                n = !0;
            a.find(".quiz").length && (n = !1), n && (t.length > 3 ? t.eq(1).before(s) : e.length > 3 && e.eq(1).before(s), setTimeout(function() { $("ins.adsbygoogle").length && 0 == $("ins.adsbygoogle").children().length && o("Environment", "User", "Adblocker Active") }, 2e3)) }

        function o() { var e = ["_trackEvent"];
            e.push.apply(e, arguments), _gaq && _gaq.push(e) } Object.defineProperty(n, "__esModule", { value: !0 }); var a, s = '\n  <div class="ad-container adsbygoogle hidden-xs hidden-sm">\n    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>\n    <!-- Article Leaderboard -->\n    <ins class="adsbygoogle"\n        style="display:inline-block;width:728px;height:90px"\n        data-ad-client="ca-pub-4243460155472587"\n        data-ad-slot="4363865357"></ins>\n    <script>\n    (adsbygoogle = window.adsbygoogle || []).push({});\n    </script>\n  </div>\n';
        n["default"] = r }, {}],
    199: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function i() { a = $(".article__share"), s = a.length, l = $(".article__share-toggle"), c = !1, u = $(".article__title").length ? $(".article__title").offset().top : null, o.call($(window)), s && $(window).on("scroll", (0, f["default"])(o)) }

        function o() { $(this).scrollTop() >= u ? c || (a.addClass("is-visible"), c = !0) : (a.removeClass("is-visible"), c = !1) } Object.defineProperty(n, "__esModule", { value: !0 }); var a, s, l, c, u, d = e("lodash/debounce"),
            f = r(d);
        n["default"] = i }, { "lodash/debounce": 148 }],
    200: [function(e, t, n) { "use strict";

        function r() { a = $(".webappstudio-animation"), a.length && (o = $(window), s = 0, l = a.find(".animation"), o.on("scroll", i).scroll()) }

        function i() { s = a.offset().top, o.scrollTop() + o.height() > s ? l.addClass("active") : l.removeClass("active"), o.scrollTop() > s + a.outerHeight() && l.removeClass("active") } Object.defineProperty(n, "__esModule", { value: !0 }); var o, a, s, l;
        n["default"] = r }, {}],
    201: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function i() { var e = $(".comments__container"); if (e.length) { new u["default"](e);
                $(document).on("click", 'a[href*="#comment-"]:not([href="#"])', o), $(document).on("click", ".dropdown--sort-comments a", a) } }

        function o() { if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) { var e = $(this.hash); if (e.length) { var t = $(window).scrollTop(),
                        n = e.offset().top;
                    $("html, body").animate({ scrollTop: n }, n - t) } } }

        function a(e) { e.preventDefault(); var t = $(this).attr("href"),
                n = $(this).html();
            $(".dropdown--sort-comments").find(".dropdown-toggle").html("\n    " + n + '\n    <span class="caret"></span>\n  '), l["default"].get(t).done(function(e) { $(".comments__list-wrapper").html(e) }) } Object.defineProperty(n, "__esModule", { value: !0 }); var s = e("./ajax"),
            l = r(s),
            c = e("./CommentsContainer"),
            u = r(c);
        e("codemirror/keymap/sublime.js"), n["default"] = i }, { "./CommentsContainer": 189, "./ajax": 194, "codemirror/keymap/sublime.js": 13 }],
    202: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function o() { var e = $(".simplemde-text-article"),
                t = $(".simplemde-text"),
                n = $(".simplemde-text-post");
            e.length && a(e), n.length && c.call(n), t.length && (t.on("invalid", function(e) { e.preventDefault() }), $(document).on("focus", ".simplemde-text", c)), $(document).on("click", ".toggle-spell-check", function() { $(this).toggleClass("enabled") }), $(document).on("click", ".image__insert--illustration .fa-stack", l) }

        function a(e) {
            function t(e) { e.preventDefault(); var t = n.editor.codemirror,
                    r = $(this).find('[name="src"]').val() || "",
                    i = $(this).find('[name="alt"]').val() || "",
                    o = '\n<figure class="full-width">\n\t<a href="#" target="_blank">\n\t\t<img src="' + r + '" alt="' + i + '">\n\t</a>\n\t<figcaption></figcaption>\n</figure>\n',
                    a = t.getCursor("start"),
                    s = t.getCursor("end");
                t.replaceSelection(o), a !== s && (s.ch += o.length), t.setSelection(a, s), t.focus(), $("#illustration-image-list").modal("hide") } var n = new k({ editor: { element: e[0], promptURLs: !0 }, spellCheck: !1, toolbar: ["heading", "bold", "italic", "strikethrough", "|", "quote", "unordered-list", "ordered-list", "|", "code", "link", { name: "image", action: h["default"].insertImage, className: "fa fa-image", title: "Insert Image" }, "|"], type: "article" });
            $(document).on("submit", "#insert-illustration", t) }

        function s() { $("#illustration-image-list").modal("show") }

        function l() { var e = $("#illustration-preview"),
                t = $(this).data("image"),
                n = $(this).data("name");
            e.show(), e.find(".image").css("background-image", "url(" + t + ")"), e.find('[name="src"]').val(t), e.find("h4").text(n) }

        function c() { $(this).siblings("label").hide();
            new k({ editor: { element: $(this)[0] }, spellCheck: !0, toolbar: ["bold", "italic", "strikethrough", "|", "quote", "unordered-list", "ordered-list", "|", "code", "link", "image", "|"], type: "comment" }) } Object.defineProperty(n, "__esModule", { value: !0 }); var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
            d = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }();
        n["default"] = o; var f = e("simplemde"),
            h = r(f),
            p = e("./ajax"),
            m = r(p),
            g = e("./highlight"),
            v = r(g),
            y = e("lodash/union"),
            b = r(y),
            x = e("./SpellChecker"),
            w = r(x);
        h["default"].insertImage = function() { s() }; var k = function() {
            function e(t) { i(this, e), this.defaultOptions = { autofocus: !0, forceSync: !0, spellChecker: !1, customWords: ["api", "async", "tutorialzine", "java", "javascript", "json", "css", "html", "php", "github", "mdn", "bitbucket", "http", "https", "jpg", "png", "jpeg", "youtube", "href", "blog", "mozilla", "google", "plugin", "autoplay", "jsx", "js", "mp4", "eslint", "rgb", "cmyk", "svg", "uglify", "minifier", "regex", "dev", "vue", "vscode", "reactjs", "performant", "api", "app", "gcc", "xcode", "doctype", "viewport", "localhost", "timeline", "facebook", "dom", "io", "src", "ui", "ux", "tooltip", "jquery"], previewRender: this.renderPreview.bind(this) }, this.customToolbarOptions = [{ name: "spell-check", action: this.toggleSpellCheck.bind(this), className: "fa fa-exclamation-circle toggle-spell-check" + (t.spellCheck ? " enabled" : ""), title: "Toggle Spell Check" }, { name: "preview", action: h["default"].togglePreview, className: "fa fa-eye no-disable btn-preview", title: "Toggle Preview" }], this.defaultOptions.toolbar = (0, b["default"])(t.toolbar, this.customToolbarOptions), this.editor = new h["default"](Object.assign({}, this.defaultOptions, t.editor)), this.spellChecker = new w["default"]({ cm: this.editor.codemirror, customWords: this.defaultOptions.customWords, enabled: t.spellCheck }), this.contentType = t.type, this.editor.codemirror.setOption("theme", "mdn-like"), this.editor.codemirror.setOption("keyMap", "sublime") } return d(e, [{ key: "compareToolbarOprions", value: function(e, t) { return this.getOptionName(e) === this.getOptionName(t) } }, { key: "getOptionName", value: function(e) { return "string" == typeof e ? e : "object" === ("undefined" == typeof e ? "undefined" : u(e)) ? e.name : "" } }, { key: "renderPreview", value: function(e, t) { var n = this,
                        r = $(t); return setTimeout(function() { n.editor.isPreviewActive() && e.length ? m["default"].post("/markup/preview", JSON.stringify({ text: e, type: n.contentType })).done(function(e) { r.html(e), (0, v["default"])(r) }).fail(function(e) { n.editor.togglePreview() }) : r.html("Nothing to preview.") }, 0), "Loading..." } }, { key: "toggleSpellCheck", value: function(e) { this.spellChecker.toggle() } }]), e }() }, { "./SpellChecker": 192, "./ajax": 194, "./highlight": 205, "lodash/union": 181, simplemde: 186 }],
    203: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function i(e) { var t = new a["default"]({ input: e[0], googleAuthKey: "AIzaSyBOvOR4dTzcco62j9Dp9CNKc2HZ2_Bj0GQ", tweetsEmbed: !0, videoDetails: !1, inlineEmbed: "all", videoWidth: 600, videoHeight: 400, afterEmbedJSApply: function() { var t = e.find(".ejs-instagram iframe"),
                        n = t.contents().find("body").height();
                    t.attr("height", n).attr("scrolling", "no").css({ "box-sizing": "content-box" }) } });
            t.render() } Object.defineProperty(n, "__esModule", { value: !0 }), n.embedLinks = i; var o = e("embed-js"),
            a = r(o) }, { "embed-js": 21 }],
    204: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(n, "__esModule", { value: !0 }); var o = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            a = e("lodash/forEach"),
            s = r(a),
            l = function() {
                function e(t) { i(this, e), this.element = t } return o(e, [{ key: "jsonData", value: function() { return JSON.stringify(this.data) } }, { key: "getFormData", value: function() { var e = new FormData,
                            t = this.element.serializeArray(); return $.each(t, function(t, n) { e.append(n.name, n.value) }), e } }, { key: "disableSubmit", value: function() { this.submitButton.attr("disabled", !0) } }, { key: "enableSubmit", value: function() { this.submitButton.attr("disabled", !1) } }, { key: "formatMessageKeys", value: function(e) { var t = {}; return (0, s["default"])(e, function(e, n) { var r = n.split(".").reduce(function(e, t) { return e.length ? e + "[" + t + "]" : t }, "");
                            t[r] = e }), t } }, { key: "showMessages", value: function(e) { var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        this.removeOldMessages(); var n = this,
                            r = this.formatMessageKeys(e);
                        (0, s["default"])(r, function(e, r) { var i = n.element.find('[name="' + r + '"]').first(),
                                o = i.closest(".form-group");
                            t ? o.addClass("has-error") : o.removeClass("has-error"), o.append(n.newMessage(e)) }), n.element.find('[type="submit"]').removeAttr("disabled") } }, { key: "newMessage", value: function(e) { var t = []; return e.map(function(e) { t.push('\n        <span class="help-block">\n            <strong>' + e + "</strong>\n        </span>\n      ") }), $(t.join("")) } }, { key: "removeOldMessages", value: function() { this.element.find(".help-block").remove(), this.element.find(".has-error").removeClass("has-error") } }, { key: "url", get: function() { return this.element.attr("action") } }, { key: "method", get: function() { return this.element.find('input[name="_method"]').val().toLowerCase() } }, { key: "data", get: function() { var e = {},
                            t = this.element.serializeArray(); return $.each(t, function(t, n) { e[n.name] = n.value }), e } }, { key: "textarea", get: function() { return this.element.find("textarea") } }, { key: "submitButton", get: function() { return this.element.find('[type="submit"]') } }]), e }();
        n["default"] = l }, { "lodash/forEach": 154 }],
    205: [function(e, t, n) { "use strict";

        function r(e) { e.find("pre").each(function(e, t) { if (void 0 === $(t).data("popout")) { var n = $(t).data("type");
                    n && "plain" !== n && $(t).addClass(n), hljs.highlightBlock(t) } }) } Object.defineProperty(n, "__esModule", { value: !0 }), e("codemirror/mode/javascript/javascript.js"), e("codemirror/mode/css/css.js"), n["default"] = r }, { "codemirror/mode/css/css.js": 15, "codemirror/mode/javascript/javascript.js": 17 }],
    206: [function(e, t, n) { "use strict";

        function r(e) { var t = e.data(),
                n = t.id; return '\n    <a class="btn-delete-resource" data-toggle="modal" data-target="#confirm-delete" data-question="delete this image">\n        Ã—\n        <form class="form-delete image"\n              action="/admin/images/' + n + '"\n              method="POST">\n\n            <input type="hidden" name="_token" value="' + $('meta[name="csrf-token"]').attr("content") + '">\n            <input type="hidden" name="_method" value="DELETE">\n        </form>\n    </a>\n  ' }

        function i(e) { var t = e.data(),
                n = t.type,
                r = t.name,
                i = t.image,
                o = t.id; return '\n    <div class="image__overlay">\n        <div class="image__insert image__insert--' + n + '">\n          <span class="fa-stack fa-lg" data-image="' + i + '" data-id="' + o + '" data-name="' + r + '">\n              <i class="icon-arrow-up"></i>\n          </span>\n        </div>\n    </div>\n    ' } Object.defineProperty(n, "__esModule", { value: !0 }), n.deleteButtonFor = r, n.overlayFor = i }, {}],
    207: [function(e, t, n) { "use strict";

        function r(e, t) { var n = Object.assign({}, l, t || {}); return i(e, n) }

        function i(e, t) { var n, r, i = o(e);
            i = Math.abs(i); var l, c, u, d = t.languages[t.language] || s[t.language],
                f = {}; for (n = 0, r = t.units.length; n < r; n++) { if (l = t.units[n], c = t.unitMeasures[l], n + 1 === r) u = i / c;
                else if (u = Math.floor(i / c), !u) continue;
                f = { unitCount: u, unitName: l, unitIndex: n }; break } return a(f.unitCount, t.units[f.unitIndex], d, t) }

        function o(e) { var t = e.match(/(\d+)-(\d+)-(\d+) (\d+):(\d+):(\d+)/),
                n = new Date(t[1], parseInt(t[2], 10) - 1, t[3], t[4], t[5], t[6]),
                r = new Date,
                i = new Date(r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate(), r.getUTCHours(), r.getUTCMinutes(), r.getUTCSeconds()); return i.getTime() - n.getTime() }

        function a(e, t, n, r) { return e + r.spacer + n[t](e) } Object.defineProperty(n, "__esModule", { value: !0 }); var s = { en: { y: function(e) { return "year" + (1 !== e ? "s" : "") }, mo: function(e) { return "month" + (1 !== e ? "s" : "") }, w: function(e) { return "week" + (1 !== e ? "s" : "") }, d: function(e) { return "day" + (1 !== e ? "s" : "") }, h: function(e) { return "hour" + (1 !== e ? "s" : "") }, m: function(e) { return "minute" + (1 !== e ? "s" : "") }, s: function(e) { return "second" + (1 !== e ? "s" : "") }, ms: function(e) { return "millisecond" + (1 !== e ? "s" : "") }, decimal: "." } },
            l = { language: "en", delimiter: ", ", spacer: " ", conjunction: "", serialComma: !0, units: ["y", "mo", "w", "d", "h", "m", "s"], languages: {}, round: !1, unitMeasures: { y: 315576e5, mo: 26298e5, w: 6048e5, d: 864e5, h: 36e5, m: 6e4, s: 1e3, ms: 1 } };
        n["default"] = r }, {}],
    208: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function i() { l = (0, d["default"])(), c = $("#article-animation"), c.length && a() }

        function o() { return c.find(".article-mockup-container") }

        function a() { c.addClass("animated").one(l, function() { c.removeClass("animated").off(l), s() }) }

        function s() { var e = o();
            e.first().detach().appendTo(c), setTimeout(function() { a() }, 2e3) } Object.defineProperty(n, "__esModule", { value: !0 }); var l, c, u = e("./animations"),
            d = r(u);
        n["default"] = i }, { "./animations": 196 }],
    209: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

        function a(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(n, "__esModule", { value: !0 }); var s = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            l = function f(e, t, n) { null === e && (e = Function.prototype); var r = Object.getOwnPropertyDescriptor(e, t); if (void 0 === r) { var i = Object.getPrototypeOf(e); return null === i ? void 0 : f(i, t, n) } if ("value" in r) return r.value; var o = r.get; if (void 0 !== o) return o.call(n) },
            c = e("./Modal"),
            u = r(c),
            d = (e("../tabs"), function(e) {
                function t(e) { i(this, t); var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); return n.confirmButton = n.element.find(".btn-ok"), n.questionElem = n.element.find("#confirmation-question"), n.element.on("show.bs.modal", n.onShow.bind(n)), n.confirmButton.on("click", n.onSubmit.bind(n)), n } return a(t, e), s(t, [{ key: "onShow", value: function(e) { this.form = $(e.relatedTarget).find("form").length ? $(e.relatedTarget).find("form").first() : $(e.relatedTarget).closest("form").first(); var t = $(e.relatedTarget).data("question");
                        this.questionElem.text(t ? "Are you sure you want to " + t + "?" : "Are you sure?") } }, { key: "onSubmit", value: function(e) { e.preventDefault(), this.form.submit(), l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "close", this).call(this) } }]), t }(u["default"]));
        n["default"] = d }, { "../tabs": 222, "./Modal": 212 }],
    210: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

        function a(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(n, "__esModule", { value: !0 }); var s = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            l = e("./Modal"),
            c = r(l),
            u = e("../forms"),
            d = r(u),
            f = e("../ajax"),
            h = r(f),
            p = function(e) {
                function t(e) { i(this, t); var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)),
                        r = e.find("form.add-flag"),
                        a = e.find("form.remove-flag"); return n.element.on("show.bs.modal", n.onShow.bind(n)), n.addFlagForm = new d["default"](r), n.removeFlagForm = new d["default"](a), n.addFlagForm.element.on("submit", n.addFlag.bind(n)), n.removeFlagForm.element.on("submit", n.removeFlag.bind(n)), n } return a(t, e), s(t, [{ key: "onShow", value: function(e) { var t = $(e.relatedTarget),
                            n = t.data(),
                            r = n.id,
                            i = n.type,
                            o = "/forum/" + i + "s/" + r + "/flag",
                            a = this.element.find('[type="submit"]');
                        t.hasClass("active") ? (this.element.find(".modal-content.add-flag").hide(), this.element.find(".modal-content.remove-flag").show()) : (this.element.find(".modal-content.remove-flag").hide(), this.element.find(".modal-content.add-flag").show()), this.addFlagForm.element.attr("action", o), this.removeFlagForm.element.attr("action", o), a.attr("disabled", !1), this.target = t } }, { key: "addFlag", value: function(e) { var t = this;
                        e.preventDefault(); var n = this.target;
                        h["default"].postFormData(this.addFlagForm.url, this.addFlagForm.getFormData()).done(function() { n.addClass("active"), n.find("span").html("Reported"), t.addFlagForm.removeOldMessages(), $("#flag-modal").modal("hide") }).fail(function(e) { t.addFlagForm.showMessages(e.responseJSON), 401 === e.status }) } }, { key: "removeFlag", value: function(e) { var t = this;
                        e.preventDefault(); var n = this.target;
                        h["default"]["delete"](this.removeFlagForm.url).done(function() { n.removeClass("active"), n.find("span").html("Report"), t.removeFlagForm.removeOldMessages(), $("#flag-modal").modal("hide") }).fail(function(e) { t.removeFlagForm.showMessages(e.responseJSON), 401 === e.status }) } }]), t }(c["default"]);
        n["default"] = p }, { "../ajax": 194, "../forms": 204, "./Modal": 212 }],
    211: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

        function a(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(n, "__esModule", { value: !0 }); var s = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            l = e("./Modal"),
            c = r(l),
            u = e("../ajax"),
            d = r(u),
            f = e("../forms"),
            h = r(f),
            p = function(e) {
                function t(e) { i(this, t); var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); return n.form = new h["default"](e.find("form")), n.form.element.on("submit", n.submitForm.bind(n)), n } return a(t, e), s(t, [{ key: "submitForm", value: function(e) { var t = this;
                        e.preventDefault(), d["default"][this.form.method](this.form.url, this.form.jsonData()).done(function() { t.form.removeOldMessages(), t.close() }).fail(function(e) { t.form.showMessages(e.responseJSON) }) } }]), t }(c["default"]);
        n["default"] = p }, { "../ajax": 194, "../forms": 204, "./Modal": 212 }],
    212: [function(e, t, n) { "use strict";

        function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(n, "__esModule", { value: !0 }); var i = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            o = function() {
                function e(t) { r(this, e), this.element = t, this.element.on("hide.bs.modal", this.onHide.bind(this)) } return i(e, [{ key: "onHide", value: function() { var e = this.element.find("form");
                        e && e.find('input:not([type="submit"], [type="hidden"]), textarea, select').each(function() { $(this).val("") }) } }, { key: "open", value: function() { this.element.modal("show") } }, { key: "close", value: function() { this.element.modal("hide") } }]), e }();
        n["default"] = o }, {}],
    213: [function(e, t, n) { "use strict";

        function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(n, "__esModule", { value: !0 }); var i = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            o = function() {
                function e(t) { r(this, e), this.mainHeader = t, this.shareButtons = $(".article__share--bottom"), this.headerHeight = t.height(), this.trigger = $(".nav-trigger"), this.wrapper = $(".nav--main"), this.container = this.mainHeader.find(".container-fluid").first(), this.left = this.wrapper.children(".nav__items--left"), this.right = this.wrapper.children(".nav__items--right"), this.pageContent = $(".main-content"), this.trigger.on("click"), this.initScrollingVars(), this.initEventHandlers(), this.autoHideHeader() } return i(e, [{ key: "initScrollingVars", value: function() { this.isScrolling = !1, this.previousTop = 0, this.currentTop = 0, this.scrollDelta = 10, this.scrollOffset = 150 } }, { key: "initEventHandlers", value: function() { var e = $(window);
                        this.mainHeader.on("click", ".nav-trigger", this.triggerNav.bind(this)), e.on("scroll", this.onScroll.bind(this)), e.on("resize", this.setHeaderHeight.bind(this)) } }, { key: "triggerNav", value: function(e) { e.preventDefault(), this.mainHeader.toggleClass("nav-open"), this.openMenu() } }, { key: "openMenu", value: function(e) { this.mainHeader.add(this.wrapper).add(this.pageContent).toggleClass("nav--visible"), $("body").toggleClass("nav--visible") } }, { key: "onScroll", value: function() { this.isScrolling || (this.isScrolling = !0, window.requestAnimationFrame ? requestAnimationFrame(this.autoHideHeader.bind(this)) : setTimeout(this.autoHideHeader, 250)) } }, { key: "setHeaderHeight", value: function() { this.headerHeight = this.mainHeader.height() } }, { key: "autoHideHeader", value: function() { var e = $(window).scrollTop();
                        this.checkSimpleNavigation(e), this.previousTop = e, this.isScrolling = !1 } }, { key: "checkSimpleNavigation", value: function(e) { this.previousTop > e ? (this.previousTop - e > this.scrollDelta && (this.mainHeader.removeClass("is-hidden"), this.shareButtons.removeClass("is-hidden")), e <= this.headerHeight && (this.mainHeader.removeClass("is-hidden"), this.shareButtons.removeClass("is-hidden"), this.mainHeader.removeClass("white"))) : e > this.scrollOffset && (this.mainHeader.addClass("white"), e - this.previousTop > this.scrollDelta && (this.mainHeader.addClass("is-hidden"), this.shareButtons.addClass("is-hidden"))) } }]), e }();
        n["default"] = new o($(".header--main")) }, {}],
    214: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(n, "__esModule", { value: !0 }); var o = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            a = e("lodash/debounce"),
            s = (r(a), e("lodash/find")),
            l = (r(s), e("lodash/forEach")),
            c = r(l),
            u = e("lodash/groupBy"),
            d = (r(u), e("lodash/uniqBy")),
            f = r(d),
            h = e("lodash/filter"),
            p = (r(h), e("lodash/flattenDeep")),
            m = (r(p), e("../humanizer")),
            g = r(m),
            v = function() {
                function e(t) { i(this, e), this.data = t, this.initContainers(), this.element.on("click", ".notification__text .show-others", this.showCollapsedNotificatons.bind(this)) } return o(e, [{ key: "initContainers", value: function() { this.element = $("<li/>").addClass("notification"), this.wrappingLink = $("<a/>").addClass("notification__wrapper"), this.left = $("<div/>").addClass("notification__left"), this.right = $("<div/>").addClass("notification__right"), this.icon = $("<span/>").addClass("notification__type " + this.data.type), this.date = $("<time/>").addClass("notification__date").attr("datetime", this.data.created_at).html((0, g["default"])(this.data.created_at) + " ago"), this.text = $("<div/>").addClass("notification__text"), this.otherLinks = $("<div/>").addClass("notification__others").hide() } }, { key: "compose", value: function() { var e = this.element; return this.composeText(), this.left.append(this.icon), this.right.append(this.text, this.date, this.otherLinks), this.wrappingLink.append(this.left, this.right), e.append(this.wrappingLink), e.data("ids", this.data.id), e.addClass(this.data.seen ? "" : "new"), e } }, { key: "composeText", value: function() { "award" === this.data.type ? (this.text.append(this.data.meta.title), this.wrappingLink.attr("href", this.data.meta.reference_url)) : this.getUserLinks() } }, { key: "composeMessage", value: function(e) { var t = this.data,
                            n = t.type,
                            r = t.meta,
                            i = t.target,
                            o = $("<div/>").addClass("notification__text"),
                            a = void 0,
                            s = void 0; switch (n) {
                            case "comment":
                                a = this.createLink('"' + i.post.title + '"', r.reference_url), s = e + " commented on " + a; break;
                            case "reply":
                                a = this.createLink("comment", r.reference_url), s = e + " replied to your " + a; break;
                            case "post":
                                a = this.createLink(i.category.name, r.reference_url), s = e + " posted a new discussion in " + a } return o.append(s), o } }, { key: "getUserLinks", value: function() { var e = this,
                            t = this.data.meta.users,
                            n = (0, f["default"])(t, "username"),
                            r = t.length,
                            i = r > 1,
                            o = "";
                        i ? (o = this.getMultipleUserLinks(n, r), (0, c["default"])(t, function(t) { var n = e.createLink(t.pretty_name, t.href),
                                r = e.composeMessage(n);
                            e.otherLinks.append(r) })) : o = this.createLink(n[0].pretty_name, n[0].href), this.right.append(this.composeMessage(o)) } }, { key: "getMultipleUserLinks", value: function(e, t) { var n = this,
                            r = $("<a/>").attr("href", "#").addClass("show-others"),
                            i = [],
                            o = [],
                            a = 2,
                            s = 0,
                            l = "",
                            u = " and "; return (0, c["default"])(e, function(e) { i.push(n.createLink(e.pretty_name, e.href)) }), a = Math.min(e.length, a), o = i.splice(0, a), s = t - a, s && (l = s + " other", l += s > 1 ? "s" : "", u = ", "), r.append(l), o.join(u) + " and " + r[0].outerHTML } }, { key: "createLink", value: function(e, t) { var n = (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], $("<a/>")); return n.attr("href", t).html(e), n[0].outerHTML } }, { key: "showCollapsedNotificatons", value: function(e) { e.preventDefault(), e.stopPropagation(), this.otherLinks.slideToggle() } }]), e }();
        n["default"] = v }, { "../humanizer": 207, "lodash/debounce": 148, "lodash/filter": 150, "lodash/find": 151, "lodash/flattenDeep": 153, "lodash/forEach": 154, "lodash/groupBy": 156, "lodash/uniqBy": 183 }],
    215: [function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(n, "__esModule", { value: !0 });
        var o = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            a = e("lodash/debounce"),
            s = r(a),
            l = e("lodash/find"),
            c = r(l),
            u = e("lodash/forEach"),
            d = r(u),
            f = e("lodash/groupBy"),
            h = r(f),
            p = e("lodash/uniq"),
            m = (r(p), e("lodash/filter")),
            g = (r(m), e("lodash/flattenDeep")),
            v = (r(g), e("../humanizer")),
            y = r(v),
            b = e("../ajax"),
            x = r(b),
            w = e("./Notification"),
            k = r(w),
            C = function() {
                function e(t) { i(this, e), this.element = t, this.notificationList = t.find("ul"), this.notificationToggle = $("#notification__toggle"), this.notificationCounter = $(".notification__counter"), this.notificationMessage = $(".notification__message"), this.pageContent = $(".main-content"), this.mainHeader = $(".header--main"), this.dropdown = $(".dropdown-menu.notification-dropdown"), this.loader = t.find(".loader"), this.sameNotificationIndex = -1, this.groupedNotifications = {}, this.collapsedNotifications = {}, this.shouldGetNewNotifications = !0, this.notificationToggle.data("open", "false"), this.notificationToggle.on("click", this.onNotficationToggleClick.bind(this)), $(document).on("click", this.notificationToggler.bind(this)), $("body").on("notifications:open", this.humanizeTime.bind(this)), $(window).resize((0, s["default"])(this.notificationToggler.bind(this), 500, { leading: !1, trailing: !0 })), this.notificationToggle.length && setTimeout(this.poll.bind(this), 1e3) }
                return o(e, [{ key: "humanizeTime", value: function() { this.dropdown.find(".notification__date").each(function() { var e = (0, y["default"])($(this).attr("datetime"));
                            $(this).html(e + " ago") }) } }, { key: "notificationToggler", value: function() { this.notificationsVisible() && this.closeNotifications() } }, { key: "openDrawer", value: function() { $(window).width() < 768 && (this.mainHeader.add(this.dropdown).add(this.pageContent).addClass("notifications-visible"), $("body").addClass("notifications-visible")) } }, { key: "initializeArrays", value: function() { return { seen: [], "new": [] } } }, { key: "onNotficationToggleClick", value: function() { this.notificationsVisible() ? this.closeNotifications() : (this.notificationToggle.data("open", "true"), this.openDrawer(), this.getNewNotifications(), $("body").trigger("notifications:open")) } }, { key: "notificationsVisible", value: function() { return "true" === this.notificationToggle.data("open") } }, { key: "closeNotifications", value: function() { this.notificationToggle.data("open", "false"), this.notificationToggle.closest("li").removeClass("open"), this.mainHeader.add(this.dropdown).add(this.pageContent).removeClass("notifications-visible"), $("body").removeClass("notifications-visible") } }, { key: "getNotificationList", value: function() { return this.element.find(".notification") } }, { key: "notificationsLoaded", value: function() { return this.getNotificationList().length > 0 } }, { key: "getNewNotifications", value: function() { var e = this;!this.shouldGetNewNotifications && this.notificationsLoaded() || (this.loader.show(), x["default"].get("/notifications/new").done(function(t) { e.updateNotifications(t) })) } }, { key: "setCurrentNotification", value: function(e) { this.currentNotification = e } }, { key: "empty", value: function(e) { return 0 === e.length } }, { key: "updateNotifications", value: function(e) { var t = e.notifications,
                            n = 0; if (this.getNotificationList().remove(), this.empty(t)) this.loader.hide(), this.notificationMessage.show();
                        else { this.collapsedNotifications = this.initializeArrays(), this.groupNotificationsByStatus(t); var r = this;
                            (0, d["default"])(this.groupedNotifications, function(e, t) {
                                (0, d["default"])(e, function(e) { r.collapseNotifications(e, t) }) }), this.addNotifications(this.collapsedNotifications["new"]), this.addNotifications(this.collapsedNotifications.seen), this.loader.hide(), this.notificationMessage.hide(), this.element.addClass("full"), this.updateCounter(n) } } }, { key: "groupNotificationsByStatus", value: function(e) { this.groupedNotifications = (0, h["default"])(e, function(e) { return e.seen ? "seen" : "new" }) } }, {
                    key: "collapseNotifications",
                    value: function(e, t) {
                        var n = this.collapsedNotifications[t],
                            r = !1;
                        if (this.setCurrentNotification(e), this.shouldCollapse(e.type) && !this.empty(n)) { var i = (0, c["default"])(n, this.sameNotification.bind(this));
                            i && (r = !0) } r ? this.addIdAndUsernameTo(i) : (this.castValuesAsArray(e), n.push(e))
                    }
                }, { key: "sameNotification", value: function(e) { return e.type === this.currentNotification.type && e.meta.reference_id === this.currentNotification.meta.reference_id } }, { key: "addIdAndUsernameTo", value: function(e) { e.ids.push(this.currentNotification.id), e.meta.users.push(this.currentNotification.meta.user) } }, { key: "castValuesAsArray", value: function(e) { e.ids = [e.id], e.meta.users = [e.meta.user] } }, { key: "shouldCollapse", value: function(e) { return "comment" === e || "reply" === e } }, { key: "addNotifications", value: function(e) { var t = this;
                        (0, d["default"])(e, function(e) { t.notificationList.append(t.createNew(e, e.type)) }) } }, { key: "createNew", value: function(e, t) { var n = new k["default"](e); return n.compose() } }, { key: "updateCounter", value: function(e) { this.shouldGetNewNotifications = e > 0, e > 0 ? (this.notificationCounter.html(e), this.notificationCounter.show()) : this.notificationCounter.hide() } }, { key: "poll", value: function() { var e = this;
                        x["default"].get("/notifications/unseen").done(function(t) { e.updateCounter(t.count), setTimeout(e.poll.bind(e), 3e4) }) } }]), e
            }();
        n["default"] = C
    }, { "../ajax": 194, "../humanizer": 207, "./Notification": 214, "lodash/debounce": 148, "lodash/filter": 150, "lodash/find": 151, "lodash/flattenDeep": 153, "lodash/forEach": 154, "lodash/groupBy": 156, "lodash/uniq": 182 }],
    216: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function i() { $(document).on("click", ".image-panel .pagination a", o) }

        function o(e) { e.preventDefault(); var t = $(this).closest(".image-panel");
            l["default"].getImages(this.href.split("page=")[1], t), console.log("next page"), e.preventDefault() } Object.defineProperty(n, "__esModule", { value: !0 }); var a = e("./ajax"),
            s = (r(a), e("./ImageManager")),
            l = r(s);
        n["default"] = i }, { "./ImageManager": 190, "./ajax": 194 }],
    217: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function i() { $(document).on("click", ".btn-delete", function(e) { return e.preventDefault() }), $(document).on("click", ".ratings__form--votes button", s), $(document).on("change", ".post-subscribe input", (0, y["default"])(o, 1e3, { leading: !0, trailing: !0 })), $(document).on("change", 'input[name="pin"]', (0, y["default"])(a, 1e3, { leading: !0, trailing: !0 })) }

        function o(e) { var t = new g["default"]($(this).closest("form"));
            p["default"].postFormData(t.url, t.getFormData()).done(function(e) { toastr.success(e.message) }).fail(function(e) { toastr.error("Oops! Something went wrong.") }) }

        function a(e) { var t = new g["default"]($(this).closest("form"));
            t.element.submit() }

        function s() { var e, t, n = $(this),
                r = l(n),
                e = n.hasClass("votes--up") ? n : n.siblings().first(),
                i = n.data(),
                o = i.id,
                a = i.type,
                s = "/forum/" + a + "s/" + o + "/vote",
                h = 1; "comment" === a && (n.hasClass("votes--up") ? (e = n, t = n.siblings(".votes--down").first()) : (e = n.siblings(".votes--up").first(), t = n, h = -1)); var m = JSON.stringify({ vote: h });
            p["default"].post(s, m).done(function(i) { if (r.toggleClass("active"), "comment" === a) { var o = u(n);
                    o.removeClass("positive negative"), i.vote > 0 ? t.removeClass("active") : e.removeClass("active"), e.hasClass("active") ? o.addClass("positive") : t.hasClass("active") && o.addClass("negative") } c(r, i.points) }).fail(function(e) { 401 === e.status ? f(n) : d(e, n) }) }

        function l(e) { var t = e.data(),
                n = e.attr("class").trim().split(/\s+/).join("."),
                r = "." + n; return Object.keys(t).map(function(e) { r += "[data-" + e + "=" + t[e] + "]" }), $(r) }

        function c(e, t) { var n = u(e);
            n.text(t) }

        function u(e) { return e.closest(".comment__rating, .ratings__form").find(".votes-text") }

        function d(e, t) { var n = $.parseJSON(e.responseText).message,
                r = t.closest(".comment__rating"),
                i = r.find(".help-block");
            i.html(n), i.fadeIn(), setTimeout(function() { i.fadeOut() }, 3e3) }

        function f(e) { var t = e.closest(".comment__rating"),
                n = t.find(".help-block");
            n.html("Please log in to vote."), n.fadeIn(), setTimeout(function() { n.fadeOut() }, 3e3) } Object.defineProperty(n, "__esModule", { value: !0 }); var h = e("./ajax"),
            p = r(h),
            m = e("./forms"),
            g = r(m),
            v = e("lodash/debounce"),
            y = r(v);
        n["default"] = i }, { "./ajax": 194, "./forms": 204, "lodash/debounce": 148 }],
    218: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function i() { $(document).on("click", 'input[name="subscribed"]', (0, f["default"])(o, 500, { leading: !1, trailing: !0 })), $(document).on("click", 'input[name="post_subscriptions"]', (0, f["default"])(a, 500, { leading: !1, trailing: !0 })), s() }

        function o() { var e = $(this).is(":checked");
            u["default"].patch("/subscriptions/newsletter", JSON.stringify({ subscribed: e })) }

        function a() { var e = $(this).is(":checked");
            u["default"].patch("/subscriptions/post", JSON.stringify({ post_subscriptions: e })) }

        function s() { var e = l();
            e = l(), $('.nav-tabs a[href="' + e + '"]').tab("show"), setTimeout(function() { window.scrollTo(0, 0) }, 1), $(window).on("hashchange", function(t) { e = l(), $('.nav-tabs a[href="' + e + '"]').tab("show") }) }

        function l() { return document.location.hash } Object.defineProperty(n, "__esModule", { value: !0 }); var c = e("./ajax"),
            u = r(c),
            d = e("lodash/debounce"),
            f = r(d);
        n["default"] = i }, { "./ajax": 194, "lodash/debounce": 148 }],
    219: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function i() { b = $(".main-search"), x = $(".main-content"), w = $(".search-trigger"), k = $(".cover-layer"), C = $(".search-suggestions"), $(".selected-value").text($(".selected-value").parent().siblings("select").children("option:selected").text()), m["default"].mainHeader.length && (s(), $(window).on("resize", a)), w.on("click", c), b.on("click", ".close", function(e) { e.preventDefault(), l() }), k.on("click", l), $(document).keyup(function(e) { "27" == e.which && l() }), $(document).on("submit", ".form__search", u), $(document).on("input", '[name="query"]', (0, v["default"])(d, 500, { leading: !1, trailing: !0 })), $(".search form").on("change", "select", function() { $(this).closest("form").find(".selected-value").text($(this).children("option:selected").text()) }) }

        function o() { var e = window.getComputedStyle(m["default"].mainHeader.get(0), "::before").getPropertyValue("content").replace(/"/g, "").replace(/'/g, ""); return e }

        function a() { y || (y = !0, window.requestAnimationFrame ? window.requestAnimationFrame(s) : setTimeout(s, 300)) }

        function s() { var e = o(),
                t = m["default"].right.find(".account .dropdown-menu"); "desktop" == e ? (m["default"].wrapper.detach().appendTo(m["default"].container).find(".serch-wrapper").remove(), m["default"].left.find(".dropdown-item").detach().removeClass("nav__item").appendTo(t), $("#login, #register").detach().appendTo(m["default"].right), $(".notification-dropdown.dropdown-menu").removeClass("mobile").detach().insertAfter("#notification__toggle")) : "mobile" == e && 0 != m["default"].mainHeader.find(".nav--main").length && (m["default"].wrapper.detach().insertAfter(".main-content"), t.length ? t.children().detach().addClass("nav__item").prependTo(m["default"].left) : $("#login, #register").detach().appendTo(m["default"].left), m["default"].right.detach().appendTo(m["default"].container), $(".notification-dropdown.dropdown-menu").detach().insertAfter(".nav--main")), y = !1 }

        function l() { $('#search input[name="query"]').val(""), $("body").removeClass("search--visible"), w.removeClass("search-form-visible"), m["default"].mainHeader.removeClass("search-form-visible"), b.removeClass("is-visible"), k.removeClass("search-form-visible"), C.hide() }

        function c(e) { e.preventDefault(), w.hasClass("search-form-visible") ? b.find("form").submit() : ($("body").addClass("search--visible"), m["default"].mainHeader.addClass("search-form-visible"), w.addClass("search-form-visible"), k.addClass("search-form-visible"), b.addClass("is-visible").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() { b.find('input[type="search"]').focus().end().off("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend") })) }

        function u(e) { var t = $('input[name="query"]').val();
            t.length || e.preventDefault() }

        function d() { var e = $('[name="query"]').val(),
                t = $(".form__search").serialize();
            t += "&type=all", e.length > 0 ? h["default"].get("/search?" + t).done(function(e) { C.show(), C.html(e) }) : C.hide() } Object.defineProperty(n, "__esModule", { value: !0 }); var f = e("./ajax"),
            h = r(f),
            p = e("./navigation"),
            m = r(p),
            g = e("lodash/debounce"),
            v = r(g),
            y = !1,
            b = void 0,
            x = void 0,
            w = void 0,
            k = void 0,
            C = void 0;
        n["default"] = i }, { "./ajax": 194, "./navigation": 213, "lodash/debounce": 148 }],
    220: [function(e, t, n) { "use strict";

        function r() { S = $(".sticky"), _ = S.parent(), L = S.find(".sticky-content"), T = w.scrollTop(), M = $(".content-top"), o() && (i(), L.css("width", S.width()), w.scroll(s), w.resize(a)) }

        function i() { j = L.height(), A = M.height(), O = c(M), E = w.height(), u(h(A) && h(E) ? A : j) }

        function o() { return S.length > 0 }

        function a() { i() }

        function s() { if (!h(A)) return f(), void u(j); if (C = l(), h(E)) O < C ? (S.addClass("fixed"), p() && x()) : f();
            else { if (C > T) g();
                else { if (v(), k) return;
                    k = !0 } y() } T = l() }

        function l() { return w.scrollTop() }

        function c(e) { return e.offset().top }

        function u(e) { S.parent().css("height", e) }

        function d() { var e = c(L) - c(M),
                t = e > 0 && !p() ? e : "";
            S.css("top", t) }

        function f() { d(), S.attr("class", "sticky") }

        function h(e) { return j < e }

        function p() { var e = c(L) + j,
                t = c(M) + A; return t < e }

        function m() { return c(L) + j < C + E }

        function g() { S.hasClass("top") && (f(), T = l()) }

        function v() { S.hasClass("bottom") ? f() : (C <= c(L) && S.addClass("fixed top"), O > c(L) && f()), T = l() }

        function y() { m() ? b() : f(), p() && x() }

        function b() { S.addClass("fixed bottom") }

        function x() { u(A), f(), S.addClass("bottom") } Object.defineProperty(n, "__esModule", { value: !0 }); var w = $(window),
            k = !1,
            C = void 0,
            S = void 0,
            _ = void 0,
            L = void 0,
            T = void 0,
            M = void 0,
            j = void 0,
            O = void 0,
            A = void 0,
            E = void 0;
        n["default"] = r }, {}],
    221: [function(e, t, n) { "use strict";

        function r(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } $(function() { if ($(".swiper-container").length) { var e;
                new Swiper(".swiper-container", (e = { direction: "horizontal", loop: !0, pagination: ".swiper-pagination", nextButton: ".swiper-button-next", prevButton: ".swiper-button-prev" }, r(e, "loop", !1), r(e, "paginationClickable", !0), r(e, "onInit", function(e) { var t = $(e.slides[0]),
                        n = t.find(".carousel-caption").data("background");
                    t.addClass("animated"), $(e.bullets[e.realIndex]).addClass(n), $(".main-content").addClass(n) }), r(e, "onSlideChangeStart", function(e) { var t = $(e.slides[e.activeIndex]),
                        n = $(e.bullets[e.realIndex]),
                        r = t.find(".carousel-caption").data("background");
                    $(".main-content").removeClass().addClass("main-content " + r), $(e.slides).removeClass("animated"), t.addClass("animated"), n.addClass(r) }), e)) } }) }, {}],
    222: [function(e, t, n) { "use strict";

        function r(e) { var t = e.attr("id"); return t.substring(0, t.length - 1) } Object.defineProperty(n, "__esModule", { value: !0 }), n.getActivePanelType = r }, {}],
    223: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

        function a(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(n, "__esModule", { value: !0 }); var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
            l = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            c = e("./ajax"),
            u = r(c),
            d = e("./forms"),
            f = r(d),
            h = function(e) {
                function t(e, n) { i(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); return r.toggler = n, r.dismissFormElement = e.find('[data-dismiss="form"]'), r.relevantFields = r.getRelevantData(), r.firstInput = e.find('input:not([type="hidden"]), textarea').first(), r.showOnCancel = [], r.selector = "", r.init(), r.element.on("submit", r.onSubmit.bind(r)), r.toggler.on("click", r.showForm.bind(r)), r.dismissFormElement.on("click", r.hideForm.bind(r)), r } return a(t, e), l(t, [{ key: "init", value: function() { var e = this,
                            t = Object.keys(this.relevantFields).map(function(t) { return ".change-" + e.shorten(t) }).join(", ");
                        this.fieldsToChange = $(t), this.mainField = $(this.toggler.data("elem")), this.defaultField = $(this.toggler.data("default")), this.shouldShowDefault = !this.mainField.is(":visible") } }, { key: "getChangedValues", value: function(e) { var t = this; return Object.keys(e).map(function(n) { return "object" === s(e[n]) ? t.getChangedValues(e[n]) : ".change-" + n }).join(", ") } }, { key: "merge", value: function(e) { for (var t = {}, n = 0; n < e.length; n++)
                            for (var r in e[n]) t[r] = e[n][r]; return t } }, { key: "flatten", value: function(e, t, n) { var r = {},
                            i = t; if ("object" !== ("undefined" == typeof e ? "undefined" : s(e))) return r[i] = e, r; for (var o in e) { var a = this.flatten(e[o], o, i);
                            r = this.merge([r, a]) } return r } }, { key: "shorten", value: function(e) { return e.replace(/\]/g, "").split("[").pop() } }, { key: "onSubmit", value: function(e) { var t = this;
                        e.preventDefault(); var n = (this.dismissFormElement, this.defaultField),
                            r = this.mainField;
                        u["default"].postFormData(this.url, this.getFormData()).done(function(e) { var i = t.flatten(e.changed),
                                o = e.links;
                            t.shouldShowDefault = !Object.keys(i).map(function(e) { console.log(i,e);return i[e].length }).reduce(function(e, t) { return e + t }), t.shouldShowDefault ? (n.show(), r.hide()) : (n.hide(), r.show()), t.fieldsToChange.each(function() { var e = $(this),
                                    t = e.data("change"),
                                    n = i[t]; if (e.data("modify") && "href" === e.data("modify")) { var r = e.find("a");
                                    r.attr("href", "" + o[t] + n) } else { var a = e.find("[data-change=" + t + "]");
                                    a.length ? a.html(n) : e.html(n) } n ? e.show() : e.hide() }), t.removeOldMessages(), t.element.hide(), t.toggler.show() }).fail(function(e) { t.showMessages(e.responseJSON) }).always(function() { t.enableSubmit() }) } }, { key: "showForm", value: function(e) { e.preventDefault(), this.toggler.hide(), this.element.show(), this.mainField.hide(), this.defaultField.hide(), this.showOnCancel = [], this.shouldShowDefault ? this.showOnCancel.push(this.defaultField) : this.showOnCancel.push(this.mainField), this.firstInput.focus() } }, { key: "hideForm", value: function() { this.element.hide(), this.toggler.show(), this.showOnCancel.map(function(e) { e.show() }) } }, { key: "getRelevantData", value: function() { return Object.except(["_token", "_method"], this.data) } }, { key: "strip", value: function(e) { return e.replace(/^([^\[\]]+)(\[.*\])+/i, "$1") } }]), t }(f["default"]);
        n["default"] = h }, { "./ajax": 194, "./forms": 204 }],
    224: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function i(e) { $(document).on("input focus", "textarea:not(.no-resize)", o), $.each(e, o) }

        function o() { s["default"].resize($(this), $(window).scrollTop()) } Object.defineProperty(n, "__esModule", { value: !0 }); var a = e("./TextareaManager"),
            s = r(a);
        n["default"] = i }, { "./TextareaManager": 193 }],
    225: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function i() { var e = $(".form-username").length;
            e && $(document).on("input", '[name="username"]', (0, d["default"])(o, 500, { leading: !1, trailing: !0 })) }

        function o() { var e = new c["default"]($(this).closest("form"));
            s["default"].postFormData("/username/check", e.getFormData()).done(function(t) { e.showMessages(t, !1) }).fail(function(t) { e.showMessages(t.responseJSON) }) } Object.defineProperty(n, "__esModule", { value: !0 }); var a = e("./ajax"),
            s = r(a),
            l = e("./forms"),
            c = r(l),
            u = e("lodash/debounce"),
            d = r(u);
        n["default"] = i }, { "./ajax": 194, "./forms": 204, "lodash/debounce": 148 }],
    226: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function i() { $(document).on("click", ".email-verification", o) }

        function o(e) { e.preventDefault(); var t = ($(this), $(".alert").first()),
                n = t.find(".loader"),
                r = t.find(".message");
            r.html(""), t.addClass("loading"), t.slideDown(), n.show(), s["default"].get("/confirmation/send").done(function(e) { t.addClass("alert-success"), t.removeClass("loading"), r.html(e.message), n.hide() }) } Object.defineProperty(n, "__esModule", { value: !0 }); var a = e("./ajax"),
            s = r(a);
        n["default"] = i }, { "./ajax": 194 }]
}, {}, [197, 221]);