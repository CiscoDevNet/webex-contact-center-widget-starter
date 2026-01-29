var Fr = Object.defineProperty;
var Hr = (le, Se, Ae) =>
  Se in le
    ? Fr(le, Se, { enumerable: !0, configurable: !0, writable: !0, value: Ae })
    : (le[Se] = Ae);
var me = (le, Se, Ae) => Hr(le, typeof Se != "symbol" ? Se + "" : Se, Ae);
(function () {
  "use strict";
  function le() {}
  function Se(pt) {
    return pt();
  }
  function Ae() {
    return Object.create(null);
  }
  function hn(pt) {
    pt.forEach(Se);
  }
  function Vn(pt) {
    return typeof pt == "function";
  }
  function Ii(pt, et) {
    return pt != pt
      ? et == et
      : pt !== et || (pt && typeof pt == "object") || typeof pt == "function";
  }
  function Ai(pt) {
    return Object.keys(pt).length === 0;
  }
  function qn(pt, et, R) {
    pt.insertBefore(et, R || null);
  }
  function wn(pt) {
    pt.parentNode && pt.parentNode.removeChild(pt);
  }
  function $n(pt) {
    return document.createElement(pt);
  }
  function Ri(pt, et, R) {
    R == null
      ? pt.removeAttribute(et)
      : pt.getAttribute(et) !== R && pt.setAttribute(et, R);
  }
  function Ni(pt) {
    return Array.from(pt.childNodes);
  }
  function Di(pt) {
    const et = {};
    return (
      pt.childNodes.forEach((R) => {
        et[R.slot || "default"] = !0;
      }),
      et
    );
  }
  let Xe;
  function Qe(pt) {
    Xe = pt;
  }
  function Mi() {
    if (!Xe)
      throw new Error("Function called outside component initialization");
    return Xe;
  }
  function _i(pt) {
    Mi().$$.on_mount.push(pt);
  }
  const Pe = [],
    Un = [];
  let Ve = [];
  const Fn = [],
    ji = Promise.resolve();
  let Sn = !1;
  function Pi() {
    Sn || ((Sn = !0), ji.then($e));
  }
  function En(pt) {
    Ve.push(pt);
  }
  const kn = new Set();
  let qe = 0;
  function $e() {
    if (qe !== 0) return;
    const pt = Xe;
    do {
      try {
        for (; qe < Pe.length; ) {
          const et = Pe[qe];
          qe++, Qe(et), Vi(et.$$);
        }
      } catch (et) {
        throw ((Pe.length = 0), (qe = 0), et);
      }
      for (Qe(null), Pe.length = 0, qe = 0; Un.length; ) Un.pop()();
      for (let et = 0; et < Ve.length; et += 1) {
        const R = Ve[et];
        kn.has(R) || (kn.add(R), R());
      }
      Ve.length = 0;
    } while (Pe.length);
    for (; Fn.length; ) Fn.pop()();
    (Sn = !1), kn.clear(), Qe(pt);
  }
  function Vi(pt) {
    if (pt.fragment !== null) {
      pt.update(), hn(pt.before_update);
      const et = pt.dirty;
      (pt.dirty = [-1]),
        pt.fragment && pt.fragment.p(pt.ctx, et),
        pt.after_update.forEach(En);
    }
  }
  function qi(pt) {
    const et = [],
      R = [];
    Ve.forEach(($) => (pt.indexOf($) === -1 ? et.push($) : R.push($))),
      R.forEach(($) => $()),
      (Ve = et);
  }
  const $i = new Set();
  function Ui(pt, et) {
    pt && pt.i && ($i.delete(pt), pt.i(et));
  }
  function Fi(pt, et, R) {
    const { fragment: $, after_update: y } = pt.$$;
    $ && $.m(et, R),
      En(() => {
        const l = pt.$$.on_mount.map(Se).filter(Vn);
        pt.$$.on_destroy ? pt.$$.on_destroy.push(...l) : hn(l),
          (pt.$$.on_mount = []);
      }),
      y.forEach(En);
  }
  function Hi(pt, et) {
    const R = pt.$$;
    R.fragment !== null &&
      (qi(R.after_update),
      hn(R.on_destroy),
      R.fragment && R.fragment.d(et),
      (R.on_destroy = R.fragment = null),
      (R.ctx = []));
  }
  function zi(pt, et) {
    pt.$$.dirty[0] === -1 && (Pe.push(pt), Pi(), pt.$$.dirty.fill(0)),
      (pt.$$.dirty[(et / 31) | 0] |= 1 << et % 31);
  }
  function Bi(pt, et, R, $, y, l, f = null, p = [-1]) {
    const C = Xe;
    Qe(pt);
    const N = (pt.$$ = {
      fragment: null,
      ctx: [],
      props: l,
      update: le,
      not_equal: y,
      bound: Ae(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(et.context || (C ? C.$$.context : [])),
      callbacks: Ae(),
      dirty: p,
      skip_bound: !1,
      root: et.target || C.$$.root,
    });
    f && f(N.root);
    let A = !1;
    if (
      ((N.ctx = R
        ? R(pt, et.props || {}, (j, B, ...v) => {
            const U = v.length ? v[0] : B;
            return (
              N.ctx &&
                y(N.ctx[j], (N.ctx[j] = U)) &&
                (!N.skip_bound && N.bound[j] && N.bound[j](U), A && zi(pt, j)),
              B
            );
          })
        : []),
      N.update(),
      (A = !0),
      hn(N.before_update),
      (N.fragment = $ ? $(N.ctx) : !1),
      et.target)
    ) {
      if (et.hydrate) {
        const j = Ni(et.target);
        N.fragment && N.fragment.l(j), j.forEach(wn);
      } else N.fragment && N.fragment.c();
      et.intro && Ui(pt.$$.fragment), Fi(pt, et.target, et.anchor), $e();
    }
    Qe(C);
  }
  let Hn;
  typeof HTMLElement == "function" &&
    (Hn = class extends HTMLElement {
      constructor(et, R, $) {
        super();
        me(this, "$$ctor");
        me(this, "$$s");
        me(this, "$$c");
        me(this, "$$cn", !1);
        me(this, "$$d", {});
        me(this, "$$r", !1);
        me(this, "$$p_d", {});
        me(this, "$$l", {});
        me(this, "$$l_u", new Map());
        (this.$$ctor = et),
          (this.$$s = R),
          $ && this.attachShadow({ mode: "open" });
      }
      addEventListener(et, R, $) {
        if (
          ((this.$$l[et] = this.$$l[et] || []), this.$$l[et].push(R), this.$$c)
        ) {
          const y = this.$$c.$on(et, R);
          this.$$l_u.set(R, y);
        }
        super.addEventListener(et, R, $);
      }
      removeEventListener(et, R, $) {
        if ((super.removeEventListener(et, R, $), this.$$c)) {
          const y = this.$$l_u.get(R);
          y && (y(), this.$$l_u.delete(R));
        }
      }
      async connectedCallback() {
        if (((this.$$cn = !0), !this.$$c)) {
          let et = function (l) {
            return () => {
              let f;
              return {
                c: function () {
                  (f = $n("slot")), l !== "default" && Ri(f, "name", l);
                },
                m: function (N, A) {
                  qn(N, f, A);
                },
                d: function (N) {
                  N && wn(f);
                },
              };
            };
          };
          if ((await Promise.resolve(), !this.$$cn || this.$$c)) return;
          const R = {},
            $ = Di(this);
          for (const l of this.$$s) l in $ && (R[l] = [et(l)]);
          for (const l of this.attributes) {
            const f = this.$$g_p(l.name);
            f in this.$$d ||
              (this.$$d[f] = gn(f, l.value, this.$$p_d, "toProp"));
          }
          for (const l in this.$$p_d)
            !(l in this.$$d) &&
              this[l] !== void 0 &&
              ((this.$$d[l] = this[l]), delete this[l]);
          this.$$c = new this.$$ctor({
            target: this.shadowRoot || this,
            props: { ...this.$$d, $$slots: R, $$scope: { ctx: [] } },
          });
          const y = () => {
            this.$$r = !0;
            for (const l in this.$$p_d)
              if (
                ((this.$$d[l] = this.$$c.$$.ctx[this.$$c.$$.props[l]]),
                this.$$p_d[l].reflect)
              ) {
                const f = gn(l, this.$$d[l], this.$$p_d, "toAttribute");
                f == null
                  ? this.removeAttribute(this.$$p_d[l].attribute || l)
                  : this.setAttribute(this.$$p_d[l].attribute || l, f);
              }
            this.$$r = !1;
          };
          this.$$c.$$.after_update.push(y), y();
          for (const l in this.$$l)
            for (const f of this.$$l[l]) {
              const p = this.$$c.$on(l, f);
              this.$$l_u.set(f, p);
            }
          this.$$l = {};
        }
      }
      attributeChangedCallback(et, R, $) {
        var y;
        this.$$r ||
          ((et = this.$$g_p(et)),
          (this.$$d[et] = gn(et, $, this.$$p_d, "toProp")),
          (y = this.$$c) == null || y.$set({ [et]: this.$$d[et] }));
      }
      disconnectedCallback() {
        (this.$$cn = !1),
          Promise.resolve().then(() => {
            !this.$$cn &&
              this.$$c &&
              (this.$$c.$destroy(), (this.$$c = void 0));
          });
      }
      $$g_p(et) {
        return (
          Object.keys(this.$$p_d).find(
            (R) =>
              this.$$p_d[R].attribute === et ||
              (!this.$$p_d[R].attribute && R.toLowerCase() === et)
          ) || et
        );
      }
    });
  function gn(pt, et, R, $) {
    var l;
    const y = (l = R[pt]) == null ? void 0 : l.type;
    if (
      ((et = y === "Boolean" && typeof et != "boolean" ? et != null : et),
      !$ || !R[pt])
    )
      return et;
    if ($ === "toAttribute")
      switch (y) {
        case "Object":
        case "Array":
          return et == null ? null : JSON.stringify(et);
        case "Boolean":
          return et ? "" : null;
        case "Number":
          return et ?? null;
        default:
          return et;
      }
    else
      switch (y) {
        case "Object":
        case "Array":
          return et && JSON.parse(et);
        case "Boolean":
          return et;
        case "Number":
          return et != null ? +et : et;
        default:
          return et;
      }
  }
  function Ji(pt, et, R, $, y, l) {
    let f = class extends Hn {
      constructor() {
        super(pt, R, y), (this.$$p_d = et);
      }
      static get observedAttributes() {
        return Object.keys(et).map((p) => (et[p].attribute || p).toLowerCase());
      }
    };
    return (
      Object.keys(et).forEach((p) => {
        Object.defineProperty(f.prototype, p, {
          get() {
            return this.$$c && p in this.$$c ? this.$$c[p] : this.$$d[p];
          },
          set(C) {
            var N;
            (C = gn(p, C, et)),
              (this.$$d[p] = C),
              (N = this.$$c) == null || N.$set({ [p]: C });
          },
        });
      }),
      $.forEach((p) => {
        Object.defineProperty(f.prototype, p, {
          get() {
            var C;
            return (C = this.$$c) == null ? void 0 : C[p];
          },
        });
      }),
      (pt.element = f),
      f
    );
  }
  class Zi {
    constructor() {
      me(this, "$$");
      me(this, "$$set");
    }
    $destroy() {
      Hi(this, 1), (this.$destroy = le);
    }
    $on(et, R) {
      if (!Vn(R)) return le;
      const $ = this.$$.callbacks[et] || (this.$$.callbacks[et] = []);
      return (
        $.push(R),
        () => {
          const y = $.indexOf(R);
          y !== -1 && $.splice(y, 1);
        }
      );
    }
    $set(et) {
      this.$$set &&
        !Ai(et) &&
        ((this.$$.skip_bound = !0), this.$$set(et), (this.$$.skip_bound = !1));
    }
  }
  const Wi = "4";
  typeof window < "u" &&
    (window.__svelte || (window.__svelte = { v: new Set() })).v.add(Wi);
  var zn = { exports: {} };
  (function (pt, et) {
    (function (R, $) {
      pt.exports = $();
    })(window, function () {
      return (function (R) {
        var $ = {};
        function y(l) {
          if ($[l]) return $[l].exports;
          var f = ($[l] = { i: l, l: !1, exports: {} });
          return R[l].call(f.exports, f, f.exports, y), (f.l = !0), f.exports;
        }
        return (
          (y.m = R),
          (y.c = $),
          (y.d = function (l, f, p) {
            y.o(l, f) ||
              Object.defineProperty(l, f, { enumerable: !0, get: p });
          }),
          (y.r = function (l) {
            typeof Symbol < "u" &&
              Symbol.toStringTag &&
              Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(l, "__esModule", { value: !0 });
          }),
          (y.t = function (l, f) {
            if (
              (1 & f && (l = y(l)),
              8 & f || (4 & f && typeof l == "object" && l && l.__esModule))
            )
              return l;
            var p = Object.create(null);
            if (
              (y.r(p),
              Object.defineProperty(p, "default", { enumerable: !0, value: l }),
              2 & f && typeof l != "string")
            )
              for (var C in l)
                y.d(
                  p,
                  C,
                  function (N) {
                    return l[N];
                  }.bind(null, C)
                );
            return p;
          }),
          (y.n = function (l) {
            var f =
              l && l.__esModule
                ? function () {
                    return l.default;
                  }
                : function () {
                    return l;
                  };
            return y.d(f, "a", f), f;
          }),
          (y.o = function (l, f) {
            return Object.prototype.hasOwnProperty.call(l, f);
          }),
          (y.p = "/"),
          y((y.s = 67))
        );
      })([
        function (R, $, y) {
          R.exports = (function (l) {
            var f = {};
            function p(C) {
              if (f[C]) return f[C].exports;
              var N = (f[C] = { i: C, l: !1, exports: {} });
              return (
                l[C].call(N.exports, N, N.exports, p), (N.l = !0), N.exports
              );
            }
            return (
              (p.m = l),
              (p.c = f),
              (p.d = function (C, N, A) {
                p.o(C, N) ||
                  Object.defineProperty(C, N, { enumerable: !0, get: A });
              }),
              (p.r = function (C) {
                typeof Symbol < "u" &&
                  Symbol.toStringTag &&
                  Object.defineProperty(C, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(C, "__esModule", { value: !0 });
              }),
              (p.t = function (C, N) {
                if (
                  (1 & N && (C = p(C)),
                  8 & N || (4 & N && typeof C == "object" && C && C.__esModule))
                )
                  return C;
                var A = Object.create(null);
                if (
                  (p.r(A),
                  Object.defineProperty(A, "default", {
                    enumerable: !0,
                    value: C,
                  }),
                  2 & N && typeof C != "string")
                )
                  for (var j in C)
                    p.d(
                      A,
                      j,
                      function (B) {
                        return C[B];
                      }.bind(null, j)
                    );
                return A;
              }),
              (p.n = function (C) {
                var N =
                  C && C.__esModule
                    ? function () {
                        return C.default;
                      }
                    : function () {
                        return C;
                      };
                return p.d(N, "a", N), N;
              }),
              (p.o = function (C, N) {
                return Object.prototype.hasOwnProperty.call(C, N);
              }),
              (p.p = "/"),
              p((p.s = 8))
            );
          })([
            function (l, f) {
              l.exports = y(6);
            },
            function (l, f) {
              l.exports = y(41);
            },
            function (l, f) {
              l.exports = y(11);
            },
            function (l, f) {
              l.exports = y(44);
            },
            function (l, f) {
              l.exports = y(68);
            },
            function (l, f) {
              l.exports = y(69);
            },
            function (l, f) {
              l.exports = y(64);
            },
            function (l, f) {
              l.exports = y(66);
            },
            function (l, f, p) {
              p.r(f),
                p.d(f, "BrowserNotification", function () {
                  return ot;
                }),
                p.d(f, "createBrowserNotifications", function () {
                  return X;
                }),
                p.d(f, "Decorator", function () {
                  return it;
                }),
                p.d(f, "Err", function () {
                  return Z;
                }),
                p.d(f, "Evt", function () {
                  return F;
                }),
                p.d(f, "createHttp", function () {
                  return jt;
                }),
                p.d(f, "I18N", function () {
                  return z;
                }),
                p.d(f, "createLogger", function () {
                  return U;
                }),
                p.d(f, "Logger", function () {
                  return v;
                }),
                p.d(f, "createNotifications", function () {
                  return rt;
                }),
                p.d(f, "Notifications", function () {
                  return yt;
                }),
                p.d(f, "Signal", function () {
                  return Rt;
                }),
                p.d(f, "clearInterval", function () {
                  return Ht;
                }),
                p.d(f, "clearTimeout", function () {
                  return Wt;
                }),
                p.d(f, "setInterval", function () {
                  return re;
                }),
                p.d(f, "setTimeout", function () {
                  return b;
                });
              var C = p(0),
                N = p.n(C),
                A = p(1);
              class j {
                constructor(i) {
                  this.maskKeys = i;
                }
                tryJSONParse(i) {
                  try {
                    return JSON.parse(i);
                  } catch {
                    return;
                  }
                }
                copiedObj(i) {
                  try {
                    return JSON.parse(JSON.stringify(i));
                  } catch {
                    return i;
                  }
                }
                maskObjectProperty(i) {
                  const s = i;
                  Object.keys(i).forEach((h) => {
                    typeof i[h] == "object" && i[h] !== null
                      ? this.maskObjectProperty(i[h])
                      : (s[h] = "*********");
                  });
                }
                maskLogData(i) {
                  Object.keys(i).forEach((s) => {
                    typeof i[s] == "object" && i[s] !== null
                      ? this.maskKeys[s]
                        ? this.maskObjectProperty(i[s])
                        : this.maskLogData(i[s])
                      : ((this.maskKeys[s] && typeof i[s] == "string") ||
                          (s === "value" && this.maskKeys[i.name])) &&
                        (i[s] = "*********");
                  });
                }
                maskPIIInformation(i) {
                  const s = i[i.length - 1],
                    h =
                      typeof s == "string"
                        ? this.tryJSONParse(s)
                        : this.copiedObj(s);
                  h &&
                    typeof h == "object" &&
                    (this.maskLogData(h), i.splice(i.length - 1, 1, h));
                }
              }
              const B = (...u) =>
                u.map((i) => (typeof i == "string" ? i : JSON.stringify(i)));
              var v;
              function U(u, i) {
                const s = new v.Service(u, i);
                return v.POOL.addLogger(s), s;
              }
              (function (u) {
                (u.MAX_LOGS_SIZE = 1048576),
                  (u.LS_LOGS_KEY = "uuip-client-logs");
                const i = /[\u0100-\uFFFF]/g;
                let s;
                (function (k) {
                  (k[(k.Trace = 1)] = "Trace"),
                    (k[(k.Debug = 2)] = "Debug"),
                    (k[(k.Warn = 3)] = "Warn"),
                    (k[(k.Error = 4)] = "Error"),
                    (k[(k.Fatal = 5)] = "Fatal");
                })((s = u.Level || (u.Level = {}))),
                  (u.Service = class {
                    constructor(k, d) {
                      (this.loggerEmitter = N()()),
                        (this.prefix = k),
                        (this.maskKeys = d);
                    }
                    log(k, ...d) {
                      this.maskKeys &&
                        typeof this.maskKeys == "object" &&
                        ((x, _) => {
                          new j(_).maskPIIInformation(x);
                        })(d, this.maskKeys);
                      const L = B(this.prefix ? ["" + this.prefix, ...d] : d),
                        S = Date.now(),
                        E = A.DateTime.fromMillis(S).toFormat(
                          "yyyy-LL-dd HH:mm:ss:SSS"
                        );
                      switch (k) {
                        case u.Level.Trace:
                          console.info(E, ...L);
                          break;
                        case u.Level.Debug:
                          console.log(E, ...L);
                          break;
                        case u.Level.Warn:
                          console.warn(E, ...L);
                          break;
                        case u.Level.Error:
                        case u.Level.Fatal:
                          console.error(E, ...L);
                          break;
                        default:
                          console.log(...L);
                      }
                      const T = {
                        pfx: this.prefix,
                        msgs: [...d],
                        ts: S,
                        lvl: k,
                      };
                      this.emit("add", T);
                    }
                    info(...k) {
                      this.log(s.Trace, ...k);
                    }
                    debug(...k) {
                      this.log(s.Debug, ...k);
                    }
                    warn(...k) {
                      this.log(s.Warn, ...k);
                    }
                    error(...k) {
                      this.log(s.Error, ...k);
                    }
                    emit(k, ...d) {
                      this.loggerEmitter.emit(k, ...d);
                    }
                    addEventListener(k, d) {
                      return (
                        this.loggerEmitter.on(k, d),
                        () => {
                          this.removeEventListener(k, d);
                        }
                      );
                    }
                    removeEventListener(k, d) {
                      this.loggerEmitter.off(k, d);
                    }
                  });
                class h {
                  constructor() {
                    (this.loggers = new Map()),
                      (this.logsCollection = []),
                      (this.logsCollectionString = ""),
                      (this.prefixedLogsCollections = {}),
                      (this.logRecordsSerializedLength = 0),
                      (this.onLoggerAddRecord = (d) => {
                        this.addLogRecord(d), this.save();
                      }),
                      this.restore();
                  }
                  static getSerializedJsonLogRecordBytesSize(d = "") {
                    const L = d.length;
                    if (L) {
                      const S = d.replace(i, "").length;
                      return 1 * S + 2 * (L - S);
                    }
                    return L;
                  }
                  get serializedJsonLogsBytesSize() {
                    const d =
                      this.logsCollectionString.split("<uuip-eol>").length;
                    return 2 + this.logRecordsSerializedLength + 1 * (d - 1);
                  }
                  save() {
                    window.sessionStorage.setItem(
                      u.LS_LOGS_KEY,
                      this.logsCollectionString
                    );
                  }
                  restore() {
                    try {
                      const d =
                        window.sessionStorage.getItem(u.LS_LOGS_KEY) || "";
                      (this.logsCollectionString = d),
                        (this.logRecordsSerializedLength +=
                          h.getSerializedJsonLogRecordBytesSize(
                            this.logsCollectionString
                          )),
                        this.restorePreFixedLogs();
                    } catch (d) {
                      console.warn(
                        "Logger failed read logs from sessionStorage: ",
                        d
                      );
                    }
                  }
                  getLogObjectFromString() {
                    try {
                      return this.logsCollectionString !== ""
                        ? JSON.parse(
                            `[${this.logsCollectionString
                              .split("<uuip-eol>")
                              .join(",")}]`
                          )
                        : [];
                    } catch {
                      console.log("Error parsing local storage data");
                    }
                  }
                  restorePreFixedLogs() {
                    const d = this.getLogObjectFromString();
                    d &&
                      Array.isArray(d) &&
                      d.length > 0 &&
                      d.forEach((L) => {
                        this.addPreFixedLogs(L), this.removeOversized();
                      });
                  }
                  addPreFixedLogs(d) {
                    (this.prefixedLogsCollections[d.pfx] =
                      this.prefixedLogsCollections[d.pfx] || new Set()),
                      this.prefixedLogsCollections[d.pfx].add(d);
                  }
                  removeOversized() {
                    for (
                      ;
                      this.serializedJsonLogsBytesSize > u.MAX_LOGS_SIZE &&
                      this.logsCollectionString !== "";

                    )
                      this.removeLogRecord();
                  }
                  removeTextFromString(d, L, S) {
                    return `${d.slice(0, L)}${d.slice(S + L)}`;
                  }
                  addLogRecord(d) {
                    try {
                      const L = JSON.stringify(d),
                        S = this.logsCollectionString;
                      this.logsCollectionString =
                        S == null
                          ? void 0
                          : S.concat(
                              `${S.trim() !== "" ? "<uuip-eol>" : ""}${L}`
                            );
                    } catch (L) {
                      const S = JSON.stringify(d);
                      (this.logsCollectionString = S),
                        console.warn(
                          "Logger failed read logs from sessionStorage: ",
                          L
                        );
                    }
                    (this.logRecordsSerializedLength +=
                      h.getSerializedJsonLogRecordBytesSize(JSON.stringify(d))),
                      this.addPreFixedLogs(d),
                      this.removeOversized();
                  }
                  removeLogRecord() {
                    if (this.logsCollectionString !== "") {
                      const d = this.logsCollectionString.indexOf("<uuip-eol>");
                      if (d !== -1) {
                        const L = this.logsCollectionString.substring(0, d),
                          S = d + 10,
                          E = this.removeTextFromString(
                            this.logsCollectionString,
                            0,
                            S
                          );
                        (this.logsCollectionString = E),
                          (this.logRecordsSerializedLength -=
                            h.getSerializedJsonLogRecordBytesSize(L));
                        try {
                          const T = JSON.parse(L);
                          this.prefixedLogsCollections[T.pfx] &&
                            this.prefixedLogsCollections[T.pfx].forEach((x) => {
                              x.ts === T.ts &&
                                this.prefixedLogsCollections[T.pfx].delete(x);
                            });
                        } catch (T) {
                          console.warn(
                            "Logger failed to read/parse the first logs from sessionStorage: ",
                            T
                          );
                        }
                      }
                    }
                  }
                  removePreFixedLogs(d) {
                    const L = this.getLogObjectFromString();
                    d.forEach((S) => {
                      const E = L.findIndex((T) => T.pfx === S.pfx);
                      E !== -1 &&
                        (L.splice(E, 1),
                        (this.logRecordsSerializedLength -=
                          h.getSerializedJsonLogRecordBytesSize(
                            JSON.stringify(S)
                          )),
                        this.prefixedLogsCollections[S.pfx] &&
                          this.prefixedLogsCollections[S.pfx].has(S) &&
                          this.prefixedLogsCollections[S.pfx].delete(S));
                    }),
                      (this.logsCollectionString = L.map((S) =>
                        JSON.stringify(S)
                      ).join("<uuip-eol>"));
                  }
                  static getLogRecordReadable(d) {
                    if (d.ts)
                      return {
                        prefix: d.pfx,
                        messages: d.msgs,
                        timestamp: A.DateTime.fromMillis(d.ts).toFormat(
                          "yyyy-LL-dd HH:mm:ss:SSS"
                        ),
                        level: s[d.lvl],
                      };
                  }
                  static getLogsReadableJson(d) {
                    const L = (S) => S.map((E) => h.getLogRecordReadable(E));
                    return JSON.stringify(
                      Array.isArray(d)
                        ? L(d)
                        : Object.keys(d).reduce(
                            (S, E) => ((S[E] = L(d[E])), S),
                            {}
                          ),
                      null,
                      2
                    );
                  }
                  static getLogsReadableText(d) {
                    const L = (S) =>
                      S.reduce((E, T) => {
                        const x = h.getLogRecordReadable(T);
                        return (
                          x &&
                            (E +=
                              x.timestamp +
                              " " +
                              x.prefix +
                              " " +
                              x.level +
                              " " +
                              B(x.messages).join(" ") +
                              ` \r
`),
                          E
                        );
                      }, "");
                    return Array.isArray(d)
                      ? L(d)
                      : Object.keys(d).reduce(
                          (S, E) => (S += `[SERVICE "${E}" LOGS]: `) + L(d[E]),
                          ""
                        );
                  }
                  static getLogsUrl(d) {
                    return (
                      "data:text/plain;charset=utf-8," + encodeURIComponent(d)
                    );
                  }
                  static browserDownload(d, L) {
                    try {
                      if (document && document.createElement) {
                        const S = document.createElement("a");
                        S.setAttribute("href", d),
                          S.setAttribute("download", L),
                          (S.style.display = "none"),
                          document.body.appendChild(S),
                          S.click(),
                          document.body.removeChild(S);
                      } else
                        console.warn(
                          "Browser is not supported to download logs"
                        );
                    } catch {}
                  }
                  addLogger(d) {
                    this.loggers.set(d.prefix, d),
                      d.removeEventListener("add", this.onLoggerAddRecord),
                      d.addEventListener("add", this.onLoggerAddRecord);
                  }
                  getAllLogsJsonUrl() {
                    return h.getLogsUrl(
                      h.getLogsReadableJson(this.getLogObjectFromString())
                    );
                  }
                  getAllPrefixedLogsJsonUrl() {
                    return h.getLogsUrl(
                      h.getLogsReadableJson(
                        this.getAllPrefixedLogsCollections()
                      )
                    );
                  }
                  getPrefixedLogsJsonUrl(d) {
                    return h.getLogsUrl(
                      h.getLogsReadableJson(this.getPrefixedLogsCollection(d))
                    );
                  }
                  getAllLogsTextUrl() {
                    return h.getLogsUrl(
                      h.getLogsReadableText(this.getLogObjectFromString())
                    );
                  }
                  getPrefixedLogsTextUrl(d) {
                    return h.getLogsUrl(
                      h.getLogsReadableText(this.getPrefixedLogsCollection(d))
                    );
                  }
                  browserDownloadAllLogsJson() {
                    h.browserDownload(
                      this.getAllLogsJsonUrl(),
                      new Date() + "_all_logs.json"
                    );
                  }
                  browserDownloadAllPrefixedLogsJson() {
                    h.browserDownload(
                      this.getAllPrefixedLogsJsonUrl(),
                      new Date() + "_all_prefixed_logs.json"
                    );
                  }
                  browserDownloadPrefixedLogsJson(d) {
                    h.browserDownload(
                      this.getPrefixedLogsJsonUrl(d),
                      `${new Date()}_${d}_logs.json`
                    );
                  }
                  browserDownloadAllLogsText() {
                    h.browserDownload(
                      this.getAllLogsTextUrl(),
                      new Date() + "_all_logs.log"
                    );
                  }
                  browserDownloadPrefixedLogsText(d) {
                    h.browserDownload(
                      this.getPrefixedLogsTextUrl(d),
                      `${new Date()}_${d}_logs.log`
                    );
                  }
                  cleanupAllLogs() {
                    (this.logsCollection.length = 0),
                      (this.logRecordsSerializedLength = 0),
                      (this.logsCollectionString = ""),
                      Object.keys(this.prefixedLogsCollections).forEach(
                        (d) => (this.prefixedLogsCollections[d] = new Set())
                      ),
                      this.save();
                  }
                  cleanupPrefixedLogs(d) {
                    const L = this.getPrefixedLogsCollection(d);
                    this.removePreFixedLogs(L),
                      (this.prefixedLogsCollections[d] = new Set()),
                      this.save();
                  }
                  getAllPrefixedLogsCollections() {
                    return Object.keys(this.prefixedLogsCollections).reduce(
                      (d, L) => ((d[L] = this.getPrefixedLogsCollection(L)), d),
                      {}
                    );
                  }
                  getPrefixedLogsCollection(d) {
                    return Array.from(
                      this.prefixedLogsCollections[d] || new Set()
                    );
                  }
                }
                (u.ServicesPool = h), (u.POOL = new u.ServicesPool());
              })(v || (v = {}));
              const J = U("unified-ui-platform-sdk");
              var ot, Z;
              function X(u) {
                return new ot.Service(u);
              }
              function I(u, i) {
                if (
                  ((u.descriptor =
                    u.descriptor ||
                    Object.getOwnPropertyDescriptor(u.target, u.key)),
                  typeof u.descriptor.value != "function")
                )
                  return (
                    console.warn(u.key, "Decorator must be used on function"),
                    u.descriptor
                  );
                const s = u.descriptor.value,
                  h = u.target.constructor.name;
                return (
                  (u.descriptor.value = function () {
                    const k = [];
                    for (let d = 0; d < arguments.length; d++)
                      k[d] = arguments[d];
                    return i.call(this, s, k, h);
                  }),
                  u.descriptor
                );
              }
              (function (u) {
                class i {
                  static get isBrowserNotificationPromiseSupported() {
                    try {
                      window.Notification.requestPermission().then();
                    } catch {
                      return !1;
                    }
                    return !0;
                  }
                  constructor(h) {
                    this.defaultOptions = h || {};
                  }
                  get isBrowserNotificationSupported() {
                    return "Notification" in window;
                  }
                  get isBrowserNotificationIconSupported() {
                    return (
                      this.isBrowserNotificationSupported &&
                      "icon" in window.Notification.prototype
                    );
                  }
                  get isBrowserNotificationImageSupported() {
                    return (
                      this.isBrowserNotificationSupported &&
                      "image" in window.Notification.prototype
                    );
                  }
                  get isBrowserNotificationBadgeSupported() {
                    return (
                      this.isBrowserNotificationSupported &&
                      "badge" in window.Notification.prototype
                    );
                  }
                  get isPermissionGranted() {
                    return window.Notification.permission === "granted";
                  }
                  get isPermissionDenied() {
                    return window.Notification.permission === "denied";
                  }
                  get isPermissionUnknown() {
                    return (
                      !this.isPermissionGranted && !this.isPermissionDenied
                    );
                  }
                  requestNotificationUserPermission() {
                    return (function (h, k, d, L) {
                      return new (d || (d = Promise))(function (S, E) {
                        function T(H) {
                          try {
                            _(L.next(H));
                          } catch (W) {
                            E(W);
                          }
                        }
                        function x(H) {
                          try {
                            _(L.throw(H));
                          } catch (W) {
                            E(W);
                          }
                        }
                        function _(H) {
                          var W;
                          H.done
                            ? S(H.value)
                            : ((W = H.value),
                              W instanceof d
                                ? W
                                : new d(function (tt) {
                                    tt(W);
                                  })).then(T, x);
                        }
                        _((L = L.apply(h, [])).next());
                      });
                    })(this, void 0, void 0, function* () {
                      this.isBrowserNotificationSupported
                        ? i.isBrowserNotificationPromiseSupported
                          ? yield window.Notification.requestPermission()
                          : yield new Promise((h) =>
                              window.Notification.requestPermission((k) => h(k))
                            )
                        : J.warn("Browser notification is not supported...");
                    });
                  }
                  fire(h, k) {
                    return new window.Notification(
                      h,
                      Object.assign(
                        Object.assign({}, this.defaultOptions),
                        k || {}
                      )
                    );
                  }
                }
                u.Service = i;
              })(ot || (ot = {})),
                (function (u) {
                  class i extends Error {
                    constructor(k, d) {
                      super(),
                        (this.isErr = "yes"),
                        (this.id = k),
                        (this.stack = new Error().stack),
                        typeof d == "string"
                          ? (this.message = d)
                          : d instanceof Error
                          ? ((this.message = d.message), (this.name = d.name))
                          : (this.message = "");
                    }
                  }
                  u.Message = i;
                  class s extends Error {
                    constructor(k, d) {
                      super(),
                        (this.isErr = "yes"),
                        (this.id = k),
                        (this.stack = new Error().stack),
                        (this.details = d);
                    }
                  }
                  u.Details = s;
                })(Z || (Z = {}));
              var it,
                dt,
                st = function (u, i, s, h) {
                  return new (s || (s = Promise))(function (k, d) {
                    function L(T) {
                      try {
                        E(h.next(T));
                      } catch (x) {
                        d(x);
                      }
                    }
                    function S(T) {
                      try {
                        E(h.throw(T));
                      } catch (x) {
                        d(x);
                      }
                    }
                    function E(T) {
                      var x;
                      T.done
                        ? k(T.value)
                        : ((x = T.value),
                          x instanceof s
                            ? x
                            : new s(function (_) {
                                _(x);
                              })).then(L, S);
                    }
                    E((h = h.apply(u, [])).next());
                  });
                };
              ((dt = it || (it = {})).Debounce = function (u = 250) {
                return function (i, s, h) {
                  let k;
                  return I(
                    { target: i, key: s, descriptor: h },
                    function (d, L) {
                      clearTimeout(k),
                        (k = window.setTimeout(() => {
                          clearTimeout(k), d.apply(this, L);
                        }, u));
                    }
                  );
                };
              }),
                (dt.Evt = function () {
                  return (u, i) => {
                    const s = {
                      get() {
                        return new F(this, i !== void 0 ? i : u.key);
                      },
                      enumerable: !0,
                      configurable: !0,
                    };
                    return i !== void 0
                      ? Object.defineProperty(u, i, s)
                      : {
                          kind: "method",
                          placement: "prototype",
                          key: u.key,
                          descriptor: s,
                        };
                  };
                }),
                (dt.Exec = function (u, i = !0) {
                  return function (s, h, k) {
                    return I(
                      { target: s, key: h, descriptor: k },
                      function (d, L) {
                        return (function (S, E, T, x) {
                          return new (T || (T = Promise))(function (_, H) {
                            function W(Dt) {
                              try {
                                St(x.next(Dt));
                              } catch (Pt) {
                                H(Pt);
                              }
                            }
                            function tt(Dt) {
                              try {
                                St(x.throw(Dt));
                              } catch (Pt) {
                                H(Pt);
                              }
                            }
                            function St(Dt) {
                              var Pt;
                              Dt.done
                                ? _(Dt.value)
                                : ((Pt = Dt.value),
                                  Pt instanceof T
                                    ? Pt
                                    : new T(function (oe) {
                                        oe(Pt);
                                      })).then(W, tt);
                            }
                            St((x = x.apply(S, [])).next());
                          });
                        })(this, void 0, void 0, function* () {
                          const S = "_" + h + "_exec_flag";
                          if (i && this[S])
                            return void console.log(
                              "PREVENTING DOUBLE EXECUTION"
                            );
                          const E = (x) => {
                            if (((this[S] = x), typeof u == "function"))
                              u.call(this, { isExec: x, ctx: this });
                            else {
                              const _ = u;
                              x
                                ? _.before && _.before.call(this, this)
                                : _.after && _.after.call(this, this);
                            }
                          };
                          E(!0);
                          const T = d.apply(this, L);
                          return (
                            T instanceof Promise
                              ? T.then(() => E(!1)).catch(() => E(!1))
                              : (console.warn(
                                  "Must be async function to use [@Executing] decorator"
                                ),
                                E(!1)),
                            T
                          );
                        });
                      }
                    );
                  };
                }),
                (dt.Handle = function (u) {
                  return function (i, s, h) {
                    return I(
                      { target: i, key: s, descriptor: h },
                      function (k, d, L) {
                        return st(this, void 0, void 0, function* () {
                          const S = this,
                            E = (T) =>
                              st(this, void 0, void 0, function* () {
                                (T.id &&
                                  typeof T.id == "string" &&
                                  T.isErr === "yes") ||
                                  (typeof T == "string" || T instanceof Error
                                    ? (T = new Z.Message("system", T))
                                    : (console.warn(
                                        "Err must be 'string' or 'new Error()' instance"
                                      ),
                                      (T = new Z.Message("system", ""))));
                                const x = T;
                                x.ctx = S;
                                const _ = `Error] ${L}.${s} [${x.id}]: ${x.message}`;
                                if (typeof u == "function") {
                                  const H = u;
                                  console.log("[Handled" + _);
                                  const W = H.call(S, x);
                                  W instanceof Promise && (yield W);
                                } else {
                                  const H = u;
                                  if (H[x.id]) {
                                    console.log("[Handled" + _);
                                    const W = H[x.id].call(S, x);
                                    W instanceof Promise && (yield W);
                                  } else if (H.handle) {
                                    console.log("[Handled" + _);
                                    const W = H.handle.call(S, x);
                                    W instanceof Promise && (yield W);
                                  } else console.warn("[Unhandled " + _);
                                  if (H.fallback) {
                                    const W = H.fallback.call(S, x);
                                    W instanceof Promise && (yield W);
                                  }
                                }
                              });
                          try {
                            const T = k.apply(S, d);
                            return T instanceof Promise
                              ? new Promise((x) => {
                                  T.then(x).catch((_) =>
                                    st(this, void 0, void 0, function* () {
                                      yield E(_), x(void 0);
                                    })
                                  );
                                })
                              : T;
                          } catch (T) {
                            return void (yield E(T));
                          }
                        });
                      }
                    );
                  };
                }),
                (dt.Once = function () {
                  return function (u, i, s) {
                    return I(
                      { target: u, key: i, descriptor: s },
                      function (h, k) {
                        const d = "_" + i + "_once_flag";
                        if (!this[d]) return (this[d] = !0), h.call(this, k);
                      }
                    );
                  };
                }),
                (dt.Throttle = function (u = 1e3 / 60) {
                  return function (i, s, h) {
                    let k,
                      d = Date.now();
                    return I(
                      { target: i, key: s, descriptor: h },
                      function (L, S) {
                        const E = (...T) => {
                          const x = Date.now();
                          window.clearTimeout(k),
                            !d || x - d >= u
                              ? ((d = x), L.apply(this, T))
                              : (k = window.setTimeout(
                                  () => E(...T),
                                  u - (x - d)
                                ));
                        };
                        E(...S);
                      }
                    );
                  };
                });
              class F {
                constructor(i, s) {
                  (this.target = i), (this.eventName = s);
                }
                emit(i, s = { bubbles: !0, composed: !0, cancelable: !1 }) {
                  this.target.dispatchEvent(
                    new CustomEvent(
                      this.eventName,
                      Object.assign({ detail: i }, s)
                    )
                  );
                }
              }
              var bt = p(3),
                wt = p.n(bt),
                Lt = p(4);
              function jt(u) {
                const i = wt.a.create();
                return (
                  (i.accessToken = u),
                  i.interceptors.request.use((s) => {
                    if (
                      (!s.headers.Authorization &&
                        i.accessToken &&
                        (s.headers.Authorization = "Bearer " + i.accessToken),
                      !s.headers.TrackingID)
                    ) {
                      const h = Object(Lt.v1)();
                      s.headers.TrackingID = `uuip_${h}_1.0:1.0`;
                    }
                    return (
                      s.headers["Content-Type"] ||
                        (s.headers["Content-Type"] = "application/json"),
                      s
                    );
                  }),
                  i
                );
              }
              var z,
                Y,
                V = p(5),
                g = p.n(V),
                D = p(6),
                w = p.n(D),
                at = p(7),
                lt = p.n(at);
              ((Y = z || (z = {})).createService = (u) => {
                const i = g.a.createInstance();
                {
                  const s = u && u.backend ? u.backend : new w.a();
                  i.use(s);
                }
                {
                  const s =
                    u && u.languageDetector ? u.languageDetector : new lt.a();
                  i.use(s);
                }
                return (
                  u &&
                    u.logger &&
                    i.use({
                      log: "log" in u.logger ? u.logger.log : u.logger.info,
                      warn: u.logger.warn,
                      error: u.logger.error,
                      type: "logger",
                    }),
                  i
                );
              }),
                (Y.mergeServiceInitOptions = (...u) =>
                  Object.assign.call(null, {}, ...u)),
                (Y.createMixin = (u) => {
                  const i = "i18n" in u ? u.i18n : Y.createService(),
                    s = "i18nInitOptions" in u ? u.i18nInitOptions : null;
                  s ||
                    J.info(
                      "i18n mixin instance waiting service initialization outside..."
                    );
                  let h = !1;
                  return (k) =>
                    class extends k {
                      constructor() {
                        super(...arguments),
                          (this.onI18NInitialized = (d) =>
                            this.requestUpdate()),
                          (this.onI18NLanguageChanged = (d) =>
                            this.requestUpdate());
                      }
                      connectedCallback() {
                        super.connectedCallback && super.connectedCallback(),
                          i.on("initialized", this.onI18NInitialized),
                          i.on("languageChanged", this.onI18NLanguageChanged),
                          i.isInitialized ||
                            h ||
                            !s ||
                            ((h = !0), i.init(s).finally(() => (h = !1)));
                      }
                      disconnectedCallback() {
                        i.off("initialized", this.onI18NInitialized),
                          i.off("languageChanged", this.onI18NLanguageChanged),
                          super.disconnectedCallback &&
                            super.disconnectedCallback();
                      }
                      t(...d) {
                        return i.t(...d);
                      }
                    };
                });
              var yt,
                Rt,
                G = p(2),
                K = p.n(G);
              function rt(u = {}) {
                const i = new yt.Service();
                return i.updateConfig(u), i;
              }
              (function (u) {
                let i, s;
                (function (S) {
                  let E, T, x;
                  (function (_) {
                    (_.Info = "info"),
                      (_.Warn = "warn"),
                      (_.Error = "error"),
                      (_.Success = "success"),
                      (_.Chat = "chat"),
                      (_.Default = "default");
                  })((E = S.Type || (S.Type = {}))),
                    (S.TYPES = Object.values(E)),
                    (function (_) {
                      (_.Silent = "silent"),
                        (_.AutoDismiss = "autodismiss"),
                        (_.Acknowledge = "acknowledge");
                    })((T = S.Mode || (S.Mode = {}))),
                    (S.MODES = Object.values(T)),
                    (function (_) {
                      (_.Added = "added"),
                        (_.Pended = "pended"),
                        (_.Activated = "activated"),
                        (_.Deactivated = "deactivated"),
                        (_.Removed = "removed");
                    })((x = S.Status || (S.Status = {}))),
                    (S.StatusWeight = {
                      [x.Added]: 0,
                      [x.Pended]: 1,
                      [x.Activated]: 2,
                      [x.Deactivated]: 3,
                      [x.Removed]: 4,
                    }),
                    (S.STATUSES = Object.values(x)),
                    (function (_) {
                      _.User = "user_add";
                    })(S.AddEventReason || (S.AddEventReason = {})),
                    (function (_) {
                      (_.ServiceAutoPropagate =
                        "service_auto_propagate_pending"),
                        (_.ServiceAutoDismiss = "service_autodismiss_pending"),
                        (_.UserSilent = "user_silent_pending");
                    })(S.PendingEventReason || (S.PendingEventReason = {})),
                    (function (_) {
                      _.ServiceAutoPropagate =
                        "service_auto_propagate_activate";
                    })(S.ActivateEventReason || (S.ActivateEventReason = {})),
                    (function (_) {
                      (_.UserNegative = "user_negative_deactivate"),
                        (_.UserPositive = "user_positive_deactivate"),
                        (_.UserNeutral = "user_neutral_deactivate");
                    })(
                      S.DeactivateEventReason || (S.DeactivateEventReason = {})
                    ),
                    (function (_) {
                      _.User = "user_remove";
                    })(S.RemoveEventReason || (S.RemoveEventReason = {}));
                })((i = u.ItemMeta || (u.ItemMeta = {}))),
                  (function (S) {
                    (S.STATUS_EVENTS = [
                      "add",
                      "pending",
                      "activate",
                      "deactivate",
                      "remove",
                    ]),
                      (S.STATUS_EVENT_MAP = {
                        add: i.Status.Added,
                        pending: i.Status.Pended,
                        activate: i.Status.Activated,
                        deactivate: i.Status.Deactivated,
                        remove: i.Status.Removed,
                      }),
                      (S.DISABLED_ITEM_MODE = {
                        [i.Mode.Silent]: !1,
                        [i.Mode.AutoDismiss]: !1,
                        [i.Mode.Acknowledge]: !1,
                      }),
                      (S.ACTIVATED_ITEM_MODE_LIMIT = {
                        [i.Mode.Silent]: 0,
                        [i.Mode.AutoDismiss]: 10,
                        [i.Mode.Acknowledge]: 1,
                      }),
                      (S.AUTO_DISMISS_TIMEOUT = 5e3);
                  })((s = u.ServiceMeta || (u.ServiceMeta = {})));
                class h {
                  constructor() {
                    this.hubEmitter = N()();
                  }
                  emit(E, ...T) {
                    this.hubEmitter.emit(E, ...T);
                  }
                  addEventListener(E, T) {
                    this.hubEmitter.on(E, T);
                  }
                  addOnceEventListener(E, T) {
                    this.hubEmitter.once(E, T);
                  }
                  removeEventListener(E, T) {
                    this.hubEmitter.off(E, T);
                  }
                  removeAllEventListeners() {
                    K()(this.hubEmitter);
                  }
                }
                u.Item = class {
                  get status() {
                    return this._status;
                  }
                  get reason() {
                    return this._reason;
                  }
                  get mode() {
                    return this._mode;
                  }
                  validateAuxOptions(S) {
                    let E = {};
                    return (
                      S &&
                        S.AUTO_DISMISS_TIMEOUT !== void 0 &&
                        this.mode === i.Mode.AutoDismiss &&
                        (E = Object.assign(Object.assign({}, E), {
                          AUTO_DISMISS_TIMEOUT: S.AUTO_DISMISS_TIMEOUT,
                        })),
                      E
                    );
                  }
                  constructor(S, E) {
                    (this._serviceHubSubscriptions = []),
                      (this._itemEmitter = N()());
                    const {
                      type: T,
                      mode: x,
                      title: _,
                      data: H,
                      timestamp: W,
                    } = S.data;
                    (this.type = T),
                      (this.title = _),
                      (this.data = H),
                      (this._mode = x),
                      (this.timestamp = W || new Date().toISOString()),
                      (this.datetime = A.DateTime.fromISO(
                        this.timestamp
                      ).toLocaleString(A.DateTime.DATETIME_SHORT_WITH_SECONDS)),
                      (this.options = Object.freeze(
                        this.validateAuxOptions(S.options || {})
                      )),
                      E &&
                        ((this._serviceHubAdapter = E),
                        (this._status = i.Status.Added),
                        (this._reason = i.AddEventReason.User),
                        this.bindItemHubListeners());
                  }
                  bindItemHubListeners() {
                    if (this._serviceHubAdapter) {
                      {
                        const S = (T, x, _) => {
                          this.timestamp in T &&
                            ((this._status = x),
                            (this._reason = _),
                            x === i.Status.Removed &&
                              (this.unbindItemHubListeners(),
                              this.removeAllEventListeners()),
                            this.emit("statusUpdate", x, _));
                        };
                        this._serviceHubAdapter.addEventListener(
                          "statusServiceUpdateResponse",
                          S
                        );
                        const E = () => {
                          var T;
                          (T = this._serviceHubAdapter) === null ||
                            T === void 0 ||
                            T.removeEventListener(
                              "statusServiceUpdateResponse",
                              S
                            );
                        };
                        this._serviceHubSubscriptions.push(E);
                      }
                      {
                        const S = (T, x) => {
                          this.timestamp in T &&
                            ((this._mode = x), this.emit("modeUpdate", x));
                        };
                        this._serviceHubAdapter.addEventListener(
                          "modeStatusUpdateResponse",
                          S
                        );
                        const E = () => {
                          var T;
                          (T = this._serviceHubAdapter) === null ||
                            T === void 0 ||
                            T.removeEventListener(
                              "modeStatusUpdateResponse",
                              S
                            );
                        };
                        this._serviceHubSubscriptions.push(E);
                      }
                    }
                  }
                  unbindItemHubListeners() {
                    this._serviceHubSubscriptions &&
                      (this._serviceHubSubscriptions.forEach((S) => S()),
                      (this._serviceHubSubscriptions.length = 0));
                  }
                  deactivate(S) {
                    this._status &&
                    i.StatusWeight[this._status] <
                      i.StatusWeight[i.Status.Deactivated]
                      ? this._serviceHubAdapter
                        ? this._serviceHubAdapter.emit(
                            "statusServiceUpdateRequest",
                            this,
                            i.Status.Deactivated,
                            S
                          )
                        : J.warn(
                            "Service hub adapter is not initialized for this notification item instance: ",
                            this
                          )
                      : J.warn(
                          `Notification should have "${i.Status.Pended}" or "${i.Status.Activated}" status to be able change status to "${i.Status.Deactivated}".Current notification status is "${this._status}". Ignoring this change`
                        );
                  }
                  pending() {
                    this._status === i.Status.Activated ||
                    this.mode !== i.Mode.Silent
                      ? this._serviceHubAdapter
                        ? this._serviceHubAdapter.emit(
                            "statusServiceUpdateRequest",
                            this,
                            i.Status.Pended,
                            i.PendingEventReason.UserSilent
                          )
                        : J.warn(
                            "Service hub adapter is not initialized for this notification item instance: ",
                            this
                          )
                      : J.warn(
                          `Notification should have "${i.Status.Activated}" status or not "${i.Mode.Silent}" mode, to be able change status to "${i.Status.Pended}" and mode to "${i.Mode.Silent}".Current notification status is "${this._status}" and mode is "${this.mode}". Ignoring this change`
                        );
                  }
                  emit(S, ...E) {
                    this._itemEmitter.emit(S, ...E);
                  }
                  addEventListener(S, E) {
                    this._itemEmitter.on(S, E);
                  }
                  addOnceEventListener(S, E) {
                    this._itemEmitter.once(S, E);
                  }
                  removeEventListener(S, E) {
                    this._itemEmitter.off(S, E);
                  }
                  removeAllEventListeners() {
                    K()(this._itemEmitter);
                  }
                };
                const k = (S, E, T = () => 0) => [...S, ...E].sort(T),
                  d = (S, E) =>
                    S.reduce(
                      (T, x) => (E.indexOf(x) === -1 && T.push(x), T),
                      []
                    );
                class L {
                  constructor() {
                    (this.emitter = N()()),
                      (this.map = {}),
                      (this.status = L.createStatus()),
                      (this.serviceConfig = {
                        DISABLED_ITEM_MODE: Object.assign(
                          {},
                          s.DISABLED_ITEM_MODE
                        ),
                        ACTIVATED_ITEM_MODE_LIMIT: Object.assign(
                          {},
                          s.ACTIVATED_ITEM_MODE_LIMIT
                        ),
                        AUTO_DISMISS_TIMEOUT: s.AUTO_DISMISS_TIMEOUT,
                      }),
                      (this.activeAutoDismissTimeoutRefs = {}),
                      (this.serviceHubAdapter = new h()),
                      this.bindServiceHubEvents();
                  }
                  static mergeConfig(E, ...T) {
                    if (!T.length) return E;
                    const x = T.shift(),
                      _ = (H) => H && typeof H == "object" && !Array.isArray(H);
                    if (_(E) && _(x))
                      for (const H in x)
                        _(x[H])
                          ? (E[H] || Object.assign(E, { [H]: {} }),
                            this.mergeConfig(E[H], x[H]))
                          : Object.assign(E, { [H]: x[H] });
                    return this.mergeConfig(E, ...T);
                  }
                  static createStatus() {
                    return {
                      [i.Status.Added]: this.createStatusHolderCollection(),
                      [i.Status.Pended]: this.createStatusHolderCollection(),
                      [i.Status.Activated]: this.createStatusHolderCollection(),
                      [i.Status.Deactivated]:
                        this.createStatusHolderCollection(),
                      [i.Status.Removed]: this.createStatusHolderCollection(),
                    };
                  }
                  static createStatusHolderCollection() {
                    return Object.assign(
                      [],
                      Object.assign(
                        Object.assign(
                          { ids: [] },
                          this.createStatusHolderSubCollections(i.MODES)
                        ),
                        this.createStatusHolderSubCollections(i.TYPES)
                      )
                    );
                  }
                  static createStatusHolderSubCollections(E) {
                    return Object.assign(
                      {},
                      E.reduce((T, x) => ((T[x] = []), T), {})
                    );
                  }
                  updateNotificationsCollections() {
                    const E = L.createStatus();
                    this.status.added.ids.forEach((T) => {
                      const x = this.map[T];
                      i.STATUSES.forEach((_) => {
                        this.status[_].ids.indexOf(x.timestamp) !== -1 &&
                          (E[_].push(x),
                          E[_].ids.push(T),
                          E[_][x.mode].push(x),
                          E[_][x.type].push(x));
                      });
                    }),
                      (this.status = E);
                  }
                  setAutoDismiss(E, T = () => {}) {
                    this.prepareUpdateNotifications(E).forEach((x) => {
                      var _;
                      if (x.mode === i.Mode.AutoDismiss) {
                        const H = () => T(x);
                        this.activeAutoDismissTimeoutRefs[x.timestamp] =
                          window.setTimeout(
                            H,
                            (_ = x.options.AUTO_DISMISS_TIMEOUT) !== null &&
                              _ !== void 0
                              ? _
                              : this.serviceConfig.AUTO_DISMISS_TIMEOUT
                          );
                      }
                    });
                  }
                  removeAutoDismiss(E, T = () => {}) {
                    this.prepareUpdateNotifications(E).forEach((x) => {
                      x.timestamp in this.activeAutoDismissTimeoutRefs &&
                        (T(x),
                        window.clearTimeout(
                          this.activeAutoDismissTimeoutRefs[x.timestamp]
                        ),
                        delete this.activeAutoDismissTimeoutRefs[x.timestamp]);
                    });
                  }
                  update(E, T, x) {
                    const _ = Array.isArray(x) ? x : [x];
                    if (_.length) {
                      const H = _.map((W) => W.timestamp);
                      switch (E) {
                        case "add":
                          _.forEach((W) => (this.map[W.timestamp] = W)),
                            (this.status.added.ids = k(
                              this.status.added.ids,
                              H,
                              L.sortTimestampsFn
                            ));
                          break;
                        case "pending":
                          (this.status.pended.ids = k(
                            this.status.pended.ids,
                            H,
                            L.sortTimestampsFn
                          )),
                            (this.status.activated.ids = d(
                              this.status.activated.ids,
                              H
                            )),
                            (this.status.deactivated.ids = d(
                              this.status.deactivated.ids,
                              H
                            ));
                          break;
                        case "activate":
                          (this.status.pended.ids = d(
                            this.status.pended.ids,
                            H
                          )),
                            (this.status.activated.ids = k(
                              this.status.activated.ids,
                              H,
                              L.sortTimestampsFn
                            )),
                            (this.status.deactivated.ids = d(
                              this.status.deactivated.ids,
                              H
                            ));
                          break;
                        case "deactivate":
                          (this.status.pended.ids = d(
                            this.status.pended.ids,
                            H
                          )),
                            (this.status.activated.ids = d(
                              this.status.activated.ids,
                              H
                            )),
                            (this.status.deactivated.ids = k(
                              this.status.deactivated.ids,
                              H,
                              L.sortTimestampsFn
                            ));
                          break;
                        case "remove":
                          (this.status.pended.ids = d(
                            this.status.pended.ids,
                            H
                          )),
                            (this.status.activated.ids = d(
                              this.status.activated.ids,
                              H
                            )),
                            (this.status.deactivated.ids = d(
                              this.status.deactivated.ids,
                              H
                            )),
                            (this.status.added.ids = d(
                              this.status.added.ids,
                              H
                            )),
                            (this.status.removed.ids = k(
                              this.status.removed.ids,
                              H,
                              L.sortTimestampsFn
                            )),
                            H.forEach((W) => delete this.map[W]);
                      }
                      this.updateNotificationsCollections(),
                        this.emit(E, _, T),
                        this.propagate(E, T, _);
                    }
                  }
                  propagate(E, T, x) {
                    const _ = Array.isArray(x) ? x : [x];
                    if (_.length)
                      switch (E) {
                        case "add":
                          this.update(
                            "pending",
                            i.PendingEventReason.ServiceAutoPropagate,
                            _
                          );
                          break;
                        case "pending":
                          _.forEach((H) => {
                            this.removeAutoDismiss(H);
                          }),
                            this.update(
                              "activate",
                              i.ActivateEventReason.ServiceAutoPropagate,
                              this.prepareActiveCandidatesNotifications(
                                this.status.pended
                              )
                            );
                          break;
                        case "activate":
                          _.forEach((H) => {
                            this.setAutoDismiss(H, (W) => {
                              W.mode === i.Mode.AutoDismiss &&
                                this.serviceHubAdapter.emit(
                                  "statusServiceUpdateRequest",
                                  W,
                                  i.Status.Pended,
                                  i.PendingEventReason.ServiceAutoDismiss
                                );
                            });
                          });
                          break;
                        case "deactivate":
                          _.forEach((H) => {
                            this.removeAutoDismiss(H);
                          }),
                            this.update(
                              "activate",
                              i.ActivateEventReason.ServiceAutoPropagate,
                              this.prepareActiveCandidatesNotifications(
                                this.status.pended
                              )
                            );
                          break;
                        case "remove":
                          this.update(
                            "deactivate",
                            i.DeactivateEventReason.UserNegative,
                            _
                          );
                      }
                  }
                  prepareAddNotifications(E) {
                    const T = Object.keys(this.serviceConfig.DISABLED_ITEM_MODE)
                      .reduce(
                        (x, _) => (
                          this.serviceConfig.DISABLED_ITEM_MODE[_] || x.push(_),
                          x
                        ),
                        []
                      )
                      .map((x) => `"${x}"`)
                      .join(", ");
                    return (Array.isArray(E) ? E : [E])
                      .filter(
                        (x) =>
                          !this.serviceConfig.DISABLED_ITEM_MODE[x.data.mode] ||
                          (J.error(
                            `Trying to .add(...) notification mode "${
                              x.data.mode
                            }" that is disabled in this notifications service instance by configuration.Current configuration is: "${JSON.stringify(
                              this.config
                            )}"Only ${T} allowed. Ignoring .add(${JSON.stringify(
                              x
                            )}) notification...`
                          ),
                          !1)
                      )
                      .map((x) => new u.Item(x, this.serviceHubAdapter));
                  }
                  prepareUpdateNotifications(E) {
                    return (Array.isArray(E) ? E : [E]).reduce(
                      (T, x) => (
                        x.timestamp in this.map
                          ? T.push(x)
                          : J.error(
                              "Trying to handle untracked notification. Call .add(...) first...",
                              JSON.stringify(x)
                            ),
                        T
                      ),
                      []
                    );
                  }
                  prepareActiveCandidatesNotifications(E) {
                    const T = (Array.isArray(E) ? E : [E]).reduce(
                      (x, _) => (
                        this.status.activated[_.mode].length +
                          x[_.mode].length <
                          this.serviceConfig.ACTIVATED_ITEM_MODE_LIMIT[
                            _.mode
                          ] && x[_.mode].push(_),
                        x
                      ),
                      L.createStatusHolderSubCollections(i.MODES)
                    );
                    return Object.values(T).reduce((x, _) => x.concat(_), []);
                  }
                  static sortByTimestampsFn(E, T) {
                    return L.sortTimestampsFn(E.timestamp, T.timestamp);
                  }
                  get added() {
                    return this.status.added;
                  }
                  get pended() {
                    return this.status.pended;
                  }
                  get activated() {
                    return this.status.activated;
                  }
                  get deactivated() {
                    return this.status.deactivated;
                  }
                  getNotificationStatus(E) {
                    return Object.keys(this.status)
                      .filter((T) => T !== i.Status.Added)
                      .find(
                        (T) => this.status[T].ids.indexOf(E.timestamp) !== -1
                      );
                  }
                  get config() {
                    return Object.freeze(this.serviceConfig);
                  }
                  static validateUpdateConfig(E) {
                    const T = E;
                    if (
                      T.ACTIVATED_ITEM_MODE_LIMIT &&
                      T.ACTIVATED_ITEM_MODE_LIMIT.acknowledge >
                        s.ACTIVATED_ITEM_MODE_LIMIT.acknowledge
                    )
                      throw new Error(`
          Max ${i.Mode.Acknowledge} limit is ${s.ACTIVATED_ITEM_MODE_LIMIT.acknowledge}
        `);
                    if (T.DISABLED_ITEM_MODE) {
                      if (
                        !Object.keys(T.DISABLED_ITEM_MODE).reduce(
                          (x, _) => (T.DISABLED_ITEM_MODE[_] && x++, x),
                          0
                        )
                      )
                        throw new Error(
                          "At least one notifications mode should be allowed in service instance"
                        );
                      Object.keys(T.ACTIVATED_ITEM_MODE_LIMIT).forEach((x) => {
                        x in T.DISABLED_ITEM_MODE &&
                          T.DISABLED_ITEM_MODE[x] &&
                          J.warn(
                            `Changing configuration limit count for mode "${x}" won't have any effect, because this mode is disabled in notifications service instance`
                          );
                      }),
                        "AUTO_DISMISS_TIMEOUT" in T &&
                          T.DISABLED_ITEM_MODE[i.Mode.AutoDismiss] &&
                          J.warn(
                            `Changing "AUTO_DISMISS_TIMEOUT" configuration option won't have any effect,because "${i.Mode.AutoDismiss}" mode is disabled in notifications service instance`
                          );
                    }
                    return !0;
                  }
                  updateConfig(E) {
                    L.validateUpdateConfig(E) &&
                      ((this.serviceConfig = L.mergeConfig(
                        {},
                        this.serviceConfig,
                        E
                      )),
                      J.info(
                        "Updated notifications service configuration: ",
                        this.config
                      ));
                  }
                  add(E) {
                    const T = this.prepareAddNotifications(E);
                    return this.update("add", i.AddEventReason.User, T), T;
                  }
                  pending(E) {
                    const T = this.prepareUpdateNotifications(E);
                    return (
                      this.serviceHubAdapter.emit(
                        "statusServiceUpdateRequest",
                        T,
                        i.Status.Pended,
                        i.PendingEventReason.UserSilent
                      ),
                      T
                    );
                  }
                  deactivate(E, T) {
                    const x = this.prepareUpdateNotifications(E);
                    return (
                      this.serviceHubAdapter.emit(
                        "statusServiceUpdateRequest",
                        x,
                        i.Status.Deactivated,
                        T
                      ),
                      x
                    );
                  }
                  remove(E) {
                    const T = this.prepareUpdateNotifications(E);
                    return (
                      this.serviceHubAdapter.emit(
                        "statusServiceUpdateRequest",
                        T,
                        i.Status.Removed,
                        i.RemoveEventReason.User
                      ),
                      T
                    );
                  }
                  pendingAllActivated() {
                    return this.pending(this.status.activated);
                  }
                  pendingAll() {
                    return this.pending([
                      ...this.status.pended,
                      ...this.status.activated,
                    ]);
                  }
                  deactivateAllActivated(E) {
                    return this.deactivate(this.status.activated, E);
                  }
                  deactivateAll(E) {
                    return this.deactivate(
                      [...this.status.pended, ...this.status.activated],
                      E
                    );
                  }
                  removeAllDeactivated() {
                    return this.remove(this.status.deactivated);
                  }
                  removeAll() {
                    return this.remove(this.status.added);
                  }
                  addEventListener(E, T) {
                    this.emitter.on(E, T);
                  }
                  removeEventListener(E, T) {
                    this.emitter.off(E, T);
                  }
                  addOnceEventListener(E, T) {
                    this.emitter.once(E, T);
                  }
                  removeAllEventListeners() {
                    K()(this.emitter);
                  }
                  emit(E, ...T) {
                    this.emitter.emit(E, ...T);
                  }
                  bindServiceHubEvents() {
                    this.serviceHubAdapter.addEventListener(
                      "statusServiceUpdateRequest",
                      (E, T, x) => {
                        const _ = Array.isArray(E) ? E : [E],
                          H = _.reduce(
                            (W, tt) => (
                              (W[tt.timestamp] =
                                this.getNotificationStatus(tt)),
                              W
                            ),
                            {}
                          );
                        {
                          const W = _.filter(
                            (tt) =>
                              (H[tt.timestamp] === i.Status.Activated ||
                                tt.mode !== i.Mode.Silent) &&
                              T === i.Status.Pended
                          );
                          {
                            const tt = W.filter(
                              (St) => St.mode !== i.Mode.Silent
                            );
                            tt.length &&
                              this.serviceHubAdapter.emit(
                                "modeStatusUpdateResponse",
                                tt.reduce(
                                  (St, Dt) => ((St[Dt.timestamp] = Dt), St),
                                  {}
                                ),
                                i.Mode.Silent
                              );
                          }
                          W.length && this.update("pending", x, W);
                        }
                        {
                          const W = _.filter((tt) => {
                            const St = H[tt.timestamp];
                            return (
                              (St === i.Status.Pended ||
                                St === i.Status.Activated) &&
                              T === i.Status.Deactivated
                            );
                          });
                          W.length && this.update("deactivate", x, W);
                        }
                        _.filter((W) => {
                          const tt = H[W.timestamp];
                          return (
                            (tt === i.Status.Pended ||
                              tt === i.Status.Activated ||
                              tt === i.Status.Deactivated) &&
                            T === i.Status.Removed
                          );
                        }).length && this.update("remove", x, E);
                      }
                    ),
                      s.STATUS_EVENTS.forEach((E) => {
                        this.addEventListener(E, (T, x) => {
                          const _ = s.STATUS_EVENT_MAP[E],
                            H = T.reduce(
                              (W, tt) => ((W[tt.timestamp] = tt), W),
                              {}
                            );
                          this.serviceHubAdapter.emit(
                            "statusServiceUpdateResponse",
                            H,
                            _,
                            x
                          );
                        });
                      });
                  }
                }
                (L.sortTimestampsFn = (S, E) => (S > E ? 1 : S < E ? -1 : 0)),
                  (u.Service = L);
              })(yt || (yt = {})),
                (function (u) {
                  class i {
                    constructor() {
                      (this.listeners = []),
                        (this.listenersOnce = []),
                        (this.listen = (k) => (
                          this.listeners.push(k),
                          { stopListen: () => this.stopListen(k) }
                        )),
                        (this.listenOnce = (k) => (
                          this.listenersOnce.push(k),
                          { stopListenOnce: () => this.stopListenOnce(k) }
                        )),
                        (this.stopListen = (k) => {
                          const d = this.listeners.indexOf(k, 0);
                          return d > -1 && (this.listeners.splice(d, 1), !0);
                        }),
                        (this.stopListenOnce = (k) => {
                          const d = this.listenersOnce.indexOf(k, 0);
                          return (
                            d > -1 && (this.listenersOnce.splice(d, 1), !0)
                          );
                        }),
                        (this.stopListenAll = () => {
                          (this.listeners = []), (this.listenersOnce = []);
                        }),
                        (this.send = (k) => {
                          this.listeners.forEach((d) => d(k)),
                            this.listenersOnce.forEach((d) => d(k)),
                            (this.listenersOnce = []);
                        });
                    }
                  }
                  class s {
                    constructor() {
                      (this.listeners = []),
                        (this.listenersOnce = []),
                        (this.listen = (k) => (
                          this.listeners.push(k),
                          { stopListen: () => this.stopListen(k) }
                        )),
                        (this.listenOnce = (k) => (
                          this.listenersOnce.push(k),
                          { stopListenOnce: () => this.stopListenOnce(k) }
                        )),
                        (this.stopListen = (k) => {
                          const d = this.listeners.indexOf(k, 0);
                          return d > -1 && (this.listeners.splice(d, 1), !0);
                        }),
                        (this.stopListenOnce = (k) => {
                          const d = this.listenersOnce.indexOf(k, 0);
                          return (
                            d > -1 && (this.listenersOnce.splice(d, 1), !0)
                          );
                        }),
                        (this.stopListenAll = () => {
                          (this.listeners = []), (this.listenersOnce = []);
                        }),
                        (this.send = () => {
                          this.listeners.forEach((k) => k()),
                            this.listenersOnce.forEach((k) => k()),
                            (this.listenersOnce = []);
                        });
                    }
                  }
                  u.create = new (class {
                    withData() {
                      const h = new i();
                      return {
                        signal: h,
                        send: h.send,
                        stopListenAll: h.stopListenAll,
                      };
                    }
                    empty() {
                      const h = new s();
                      return {
                        signal: h,
                        send: h.send,
                        stopListenAll: h.stopListenAll,
                      };
                    }
                  })();
                })(Rt || (Rt = {}));
              let Q = null;
              const Ft =
                  Number.MAX_SAFE_INTEGER === void 0
                    ? 9007199254740991
                    : Number.MAX_SAFE_INTEGER,
                zt = () => {
                  if (Q !== null) return Q;
                  const u = new Blob(
                      [
                        `(()=>{"use strict";
const e=new Map,t=new Map,r=(e,t)=>
{let r,o;const i=performance.now();r=i,o=e-Math.max(0,i-t);
    return{expected:r+o,remainingDelay:o}},
    o=(e,t,r,i)=>{const s=performance.now();
        s>r?postMessage({id:null,method:"call",params:{timerId:t,timerType:i}}):e.set(t,setTimeout(o,r-s,e,t,r,i))};
        addEventListener("message",(i=>{let{data:s}=i;try{if("clear"===s.method){const{id:r,params:{timerId:o,timerType:i}}=s;
        if("interval"===i)
        (t=>{const r=e.get(t);
        if(void 0===r)
        throw new Error('There is no interval scheduled with the given id "'.concat(t,'".'));
        clearTimeout(r),e.delete(t)})(o),postMessage({error:null,id:r});
        else{if("timeout"!==i)
        throw new Error('The given type "'.concat(i,'" is not supported'));
        (e=>{const r=t.get(e);if(void 0===r)
        throw new Error('There is no timeout scheduled with the given id "'.concat(e,'".'));
        clearTimeout(r),t.delete(e)})(o),postMessage({error:null,id:r})}}
        else{if("set"!==s.method)
        throw new Error('The given method "'.concat(s.method,'" is not supported'));
        {const{params:{delay:i,now:n,timerId:a,timerType:d}}=s;
        if("interval"===d)
        ((t,i,s)=>{const{expected:n,remainingDelay:a}=r(t,s);
        e.set(i,setTimeout(o,a,e,i,n,"interval"))})(i,a,n);
        else{if("timeout"!==d)
        throw new Error('The given type "'.concat(d,'" is not supported'));
        ((e,i,s)=>{const{expected:n,remainingDelay:a}=r(e,s);
        t.set(i,setTimeout(o,a,t,i,n,"timeout"))})(i,a,n)}}}}catch(e){postMessage({error:{message:e.message},id:s.id,result:null})}}))})();`,
                      ],
                      { type: "application/javascript; charset=utf-8" }
                    ),
                    i = URL.createObjectURL(u);
                  return (
                    J.info("Worker url established", i),
                    (Q = ((s) => {
                      const h = new Map([[0, () => {}]]),
                        k = new Map([[0, () => {}]]),
                        d = new Map(),
                        L = new Worker(s);
                      J.info("worker created ", L);
                      const S = new WeakMap();
                      var E;
                      const T = ((x, _) => (H) => {
                        const W = _.get(H);
                        let tt =
                          W === void 0 ? H.size : W < 1073741824 ? W + 1 : 0;
                        if (!H.has(tt)) return x(H, tt);
                        if (H.size < 536870912) {
                          for (; H.has(tt); )
                            tt = Math.floor(1073741824 * Math.random());
                          return x(H, tt);
                        }
                        if (H.size > Ft)
                          throw new Error(
                            "Congratulations, you created a collection of unique numbers which uses all available integers!"
                          );
                        for (; H.has(tt); ) tt = Math.floor(Math.random() * Ft);
                        return x(H, tt);
                      })(((E = S), (x, _) => (E.set(x, _), _)), S);
                      return (
                        L.addEventListener("message", ({ data: x }) => {
                          if (
                            (_ = x).method !== void 0 &&
                            _.method === "call"
                          ) {
                            const {
                              params: { timerId: H, timerType: W },
                            } = x;
                            if (W === "interval") {
                              const tt = h.get(H);
                              if (typeof tt == "number") {
                                const St = d.get(tt);
                                if (
                                  St === void 0 ||
                                  St.timerId !== H ||
                                  St.timerType !== W
                                )
                                  throw new Error(
                                    "The timer is in an undefined state."
                                  );
                              } else {
                                if (tt === void 0)
                                  throw new Error(
                                    "The timer is in an undefined state."
                                  );
                                tt();
                              }
                            } else if (W === "timeout") {
                              const tt = k.get(H);
                              if (typeof tt == "number") {
                                const St = d.get(tt);
                                if (
                                  St === void 0 ||
                                  St.timerId !== H ||
                                  St.timerType !== W
                                )
                                  throw new Error(
                                    "The timer is in an undefined state."
                                  );
                              } else {
                                if (tt === void 0)
                                  throw new Error(
                                    "The timer is in an undefined state."
                                  );
                                tt(), k.delete(H);
                              }
                            }
                          } else if (
                            ((H) =>
                              H.error === null && typeof H.id == "number")(x)
                          ) {
                            const { id: H } = x,
                              W = d.get(H);
                            if (W === void 0)
                              throw new Error(
                                "The timer is in an undefined state."
                              );
                            const { timerId: tt, timerType: St } = W;
                            d.delete(H),
                              St === "interval" ? h.delete(tt) : k.delete(tt);
                          }
                          var _;
                        }),
                        {
                          clearInterval: (x) => {
                            const _ = T(d);
                            d.set(_, { timerId: x, timerType: "interval" }),
                              h.set(x, _),
                              L.postMessage({
                                id: _,
                                method: "clear",
                                params: { timerId: x, timerType: "interval" },
                              });
                          },
                          clearTimeout: (x) => {
                            const _ = T(d);
                            d.set(_, { timerId: x, timerType: "timeout" }),
                              k.set(x, _),
                              L.postMessage({
                                id: _,
                                method: "clear",
                                params: { timerId: x, timerType: "timeout" },
                              });
                          },
                          setInterval: (x, _) => {
                            const H = T(h);
                            return (
                              h.set(H, () => {
                                x(),
                                  typeof h.get(H) == "function" &&
                                    L.postMessage({
                                      id: null,
                                      method: "set",
                                      params: {
                                        delay: _,
                                        now: performance.now(),
                                        timerId: H,
                                        timerType: "interval",
                                      },
                                    });
                              }),
                              L.postMessage({
                                id: null,
                                method: "set",
                                params: {
                                  delay: _,
                                  now: performance.now(),
                                  timerId: H,
                                  timerType: "interval",
                                },
                              }),
                              H
                            );
                          },
                          setTimeout: (x, _) => {
                            const H = T(k);
                            return (
                              k.set(H, x),
                              L.postMessage({
                                id: null,
                                method: "set",
                                params: {
                                  delay: _,
                                  now: performance.now(),
                                  timerId: H,
                                  timerType: "timeout",
                                },
                              }),
                              H
                            );
                          },
                        }
                      );
                    })(i)),
                    Q.setTimeout(() => URL.revokeObjectURL(i), 0),
                    Q
                  );
                },
                Ht = (u) => zt().clearInterval(u),
                Wt = (u) => zt().clearTimeout(u),
                re = (u, i) => zt().setInterval(u, i),
                b = (u, i) => zt().setTimeout(u, i);
            },
          ]);
        },
        function (R, $, y) {
          var l = y(13),
            f = Object.prototype.toString;
          function p(v) {
            return f.call(v) === "[object Array]";
          }
          function C(v) {
            return v === void 0;
          }
          function N(v) {
            return v !== null && typeof v == "object";
          }
          function A(v) {
            if (f.call(v) !== "[object Object]") return !1;
            var U = Object.getPrototypeOf(v);
            return U === null || U === Object.prototype;
          }
          function j(v) {
            return f.call(v) === "[object Function]";
          }
          function B(v, U) {
            if (v != null)
              if ((typeof v != "object" && (v = [v]), p(v)))
                for (var J = 0, ot = v.length; J < ot; J++)
                  U.call(null, v[J], J, v);
              else
                for (var Z in v)
                  Object.prototype.hasOwnProperty.call(v, Z) &&
                    U.call(null, v[Z], Z, v);
          }
          R.exports = {
            isArray: p,
            isArrayBuffer: function (v) {
              return f.call(v) === "[object ArrayBuffer]";
            },
            isBuffer: function (v) {
              return (
                v !== null &&
                !C(v) &&
                v.constructor !== null &&
                !C(v.constructor) &&
                typeof v.constructor.isBuffer == "function" &&
                v.constructor.isBuffer(v)
              );
            },
            isFormData: function (v) {
              return typeof FormData < "u" && v instanceof FormData;
            },
            isArrayBufferView: function (v) {
              return typeof ArrayBuffer < "u" && ArrayBuffer.isView
                ? ArrayBuffer.isView(v)
                : v && v.buffer && v.buffer instanceof ArrayBuffer;
            },
            isString: function (v) {
              return typeof v == "string";
            },
            isNumber: function (v) {
              return typeof v == "number";
            },
            isObject: N,
            isPlainObject: A,
            isUndefined: C,
            isDate: function (v) {
              return f.call(v) === "[object Date]";
            },
            isFile: function (v) {
              return f.call(v) === "[object File]";
            },
            isBlob: function (v) {
              return f.call(v) === "[object Blob]";
            },
            isFunction: j,
            isStream: function (v) {
              return N(v) && j(v.pipe);
            },
            isURLSearchParams: function (v) {
              return (
                typeof URLSearchParams < "u" && v instanceof URLSearchParams
              );
            },
            isStandardBrowserEnv: function () {
              return (
                (typeof navigator > "u" ||
                  (navigator.product !== "ReactNative" &&
                    navigator.product !== "NativeScript" &&
                    navigator.product !== "NS")) &&
                typeof window < "u" &&
                typeof document < "u"
              );
            },
            forEach: B,
            merge: function v() {
              var U = {};
              function J(X, I) {
                A(U[I]) && A(X)
                  ? (U[I] = v(U[I], X))
                  : A(X)
                  ? (U[I] = v({}, X))
                  : p(X)
                  ? (U[I] = X.slice())
                  : (U[I] = X);
              }
              for (var ot = 0, Z = arguments.length; ot < Z; ot++)
                B(arguments[ot], J);
              return U;
            },
            extend: function (v, U, J) {
              return (
                B(U, function (ot, Z) {
                  v[Z] = J && typeof ot == "function" ? l(ot, J) : ot;
                }),
                v
              );
            },
            trim: function (v) {
              return v.trim ? v.trim() : v.replace(/^\s+|\s+$/g, "");
            },
            stripBOM: function (v) {
              return v.charCodeAt(0) === 65279 && (v = v.slice(1)), v;
            },
          };
        },
        function (R, $, y) {
          function l(f) {
            return (l =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (p) {
                    return typeof p;
                  }
                : function (p) {
                    return p &&
                      typeof Symbol == "function" &&
                      p.constructor === Symbol &&
                      p !== Symbol.prototype
                      ? "symbol"
                      : typeof p;
                  })(f);
          }
          y.d($, "a", function () {
            return l;
          });
        },
        function (R, $, y) {
          function l(f, p) {
            if (!(f instanceof p))
              throw new TypeError("Cannot call a class as a function");
          }
          y.d($, "a", function () {
            return l;
          });
        },
        function (R, $, y) {
          y.d($, "a", function () {
            return p;
          });
          var l = y(8);
          function f(C, N) {
            for (var A = 0; A < N.length; A++) {
              var j = N[A];
              (j.enumerable = j.enumerable || !1),
                (j.configurable = !0),
                "value" in j && (j.writable = !0),
                Object.defineProperty(C, Object(l.a)(j.key), j);
            }
          }
          function p(C, N, A) {
            return (
              N && f(C.prototype, N),
              A && f(C, A),
              Object.defineProperty(C, "prototype", { writable: !1 }),
              C
            );
          }
        },
        function (R, $, y) {
          function l(B) {
            return (l =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (v) {
                    return typeof v;
                  }
                : function (v) {
                    return v &&
                      typeof Symbol == "function" &&
                      v.constructor === Symbol &&
                      v !== Symbol.prototype
                      ? "symbol"
                      : typeof v;
                  })(B);
          }
          y.d($, "a", function () {
            return N;
          }),
            y.d($, "b", function () {
              return A;
            }),
            y.d($, "c", function () {
              return j;
            });
          var f = [],
            p = f.forEach,
            C = f.slice;
          function N(B) {
            return (
              p.call(C.call(arguments, 1), function (v) {
                if (v) for (var U in v) B[U] === void 0 && (B[U] = v[U]);
              }),
              B
            );
          }
          function A() {
            return (
              typeof XMLHttpRequest == "function" ||
              (typeof XMLHttpRequest > "u"
                ? "undefined"
                : l(XMLHttpRequest)) === "object"
            );
          }
          function j(B) {
            return (function (v) {
              return !!v && typeof v.then == "function";
            })(B)
              ? B
              : Promise.resolve(B);
          }
        },
        function (R, $, y) {
          var l,
            f,
            p,
            C,
            N,
            A,
            j,
            B = y(23),
            v = y(40),
            U = Function.prototype.apply,
            J = Function.prototype.call,
            ot = Object.create,
            Z = Object.defineProperty,
            X = Object.defineProperties,
            I = Object.prototype.hasOwnProperty,
            it = { configurable: !0, enumerable: !1, writable: !0 };
          (f = function (dt, st) {
            var F, bt;
            return (
              v(st),
              (bt = this),
              l.call(
                this,
                dt,
                (F = function () {
                  p.call(bt, dt, F), U.call(st, this, arguments);
                })
              ),
              (F.__eeOnceListener__ = st),
              this
            );
          }),
            (N = {
              on: (l = function (dt, st) {
                var F;
                return (
                  v(st),
                  I.call(this, "__ee__")
                    ? (F = this.__ee__)
                    : ((F = it.value = ot(null)),
                      Z(this, "__ee__", it),
                      (it.value = null)),
                  F[dt]
                    ? typeof F[dt] == "object"
                      ? F[dt].push(st)
                      : (F[dt] = [F[dt], st])
                    : (F[dt] = st),
                  this
                );
              }),
              once: f,
              off: (p = function (dt, st) {
                var F, bt, wt, Lt;
                if ((v(st), !I.call(this, "__ee__"))) return this;
                if (!(F = this.__ee__)[dt]) return this;
                if (typeof (bt = F[dt]) == "object")
                  for (Lt = 0; (wt = bt[Lt]); ++Lt)
                    (wt !== st && wt.__eeOnceListener__ !== st) ||
                      (bt.length === 2
                        ? (F[dt] = bt[Lt ? 0 : 1])
                        : bt.splice(Lt, 1));
                else
                  (bt !== st && bt.__eeOnceListener__ !== st) || delete F[dt];
                return this;
              }),
              emit: (C = function (dt) {
                var st, F, bt, wt, Lt;
                if (I.call(this, "__ee__") && (wt = this.__ee__[dt]))
                  if (typeof wt == "object") {
                    for (
                      F = arguments.length, Lt = new Array(F - 1), st = 1;
                      st < F;
                      ++st
                    )
                      Lt[st - 1] = arguments[st];
                    for (wt = wt.slice(), st = 0; (bt = wt[st]); ++st)
                      U.call(bt, this, Lt);
                  } else
                    switch (arguments.length) {
                      case 1:
                        J.call(wt, this);
                        break;
                      case 2:
                        J.call(wt, this, arguments[1]);
                        break;
                      case 3:
                        J.call(wt, this, arguments[1], arguments[2]);
                        break;
                      default:
                        for (
                          F = arguments.length, Lt = new Array(F - 1), st = 1;
                          st < F;
                          ++st
                        )
                          Lt[st - 1] = arguments[st];
                        U.call(wt, this, Lt);
                    }
              }),
            }),
            (A = { on: B(l), once: B(f), off: B(p), emit: B(C) }),
            (j = X({}, A)),
            (R.exports = $ =
              function (dt) {
                return dt == null ? ot(j) : X(Object(dt), A);
              }),
            ($.methods = N);
        },
        function (R, $, y) {
          var l = y(34)();
          R.exports = function (f) {
            return f !== l && f !== null;
          };
        },
        function (R, $, y) {
          y.d($, "a", function () {
            return f;
          });
          var l = y(2);
          function f(p) {
            var C = (function (N, A) {
              if (Object(l.a)(N) !== "object" || N === null) return N;
              var j = N[Symbol.toPrimitive];
              if (j !== void 0) {
                var B = j.call(N, A || "default");
                if (Object(l.a)(B) !== "object") return B;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return (A === "string" ? String : Number)(N);
            })(p, "string");
            return Object(l.a)(C) === "symbol" ? C : String(C);
          }
        },
        function (R, $, y) {
          (function (l) {
            var f;
            if (
              (typeof fetch == "function" &&
                (f =
                  l !== void 0 && l.fetch
                    ? l.fetch
                    : typeof window < "u" && window.fetch
                    ? window.fetch
                    : fetch),
              typeof window > "u" || window.document === void 0)
            ) {
              var p = f || y(65);
              p.default && (p = p.default),
                ($.default = p),
                (R.exports = $.default);
            }
          }).call(this, y(21));
        },
        function (R, $, y) {
          (function (l) {
            var f = y(1),
              p = y(51),
              C = y(15),
              N = { "Content-Type": "application/x-www-form-urlencoded" };
            function A(v, U) {
              !f.isUndefined(v) &&
                f.isUndefined(v["Content-Type"]) &&
                (v["Content-Type"] = U);
            }
            var j,
              B = {
                transitional: {
                  silentJSONParsing: !0,
                  forcedJSONParsing: !0,
                  clarifyTimeoutError: !1,
                },
                adapter:
                  ((typeof XMLHttpRequest < "u" ||
                    (l !== void 0 &&
                      Object.prototype.toString.call(l) ===
                        "[object process]")) &&
                    (j = y(16)),
                  j),
                transformRequest: [
                  function (v, U) {
                    return (
                      p(U, "Accept"),
                      p(U, "Content-Type"),
                      f.isFormData(v) ||
                      f.isArrayBuffer(v) ||
                      f.isBuffer(v) ||
                      f.isStream(v) ||
                      f.isFile(v) ||
                      f.isBlob(v)
                        ? v
                        : f.isArrayBufferView(v)
                        ? v.buffer
                        : f.isURLSearchParams(v)
                        ? (A(
                            U,
                            "application/x-www-form-urlencoded;charset=utf-8"
                          ),
                          v.toString())
                        : f.isObject(v) ||
                          (U && U["Content-Type"] === "application/json")
                        ? (A(U, "application/json"),
                          (function (J, ot, Z) {
                            if (f.isString(J))
                              try {
                                return (ot || JSON.parse)(J), f.trim(J);
                              } catch (X) {
                                if (X.name !== "SyntaxError") throw X;
                              }
                            return (0, JSON.stringify)(J);
                          })(v))
                        : v
                    );
                  },
                ],
                transformResponse: [
                  function (v) {
                    var U = this.transitional,
                      J = U && U.silentJSONParsing,
                      ot = U && U.forcedJSONParsing,
                      Z = !J && this.responseType === "json";
                    if (Z || (ot && f.isString(v) && v.length))
                      try {
                        return JSON.parse(v);
                      } catch (X) {
                        if (Z)
                          throw X.name === "SyntaxError"
                            ? C(X, this, "E_JSON_PARSE")
                            : X;
                      }
                    return v;
                  },
                ],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                validateStatus: function (v) {
                  return v >= 200 && v < 300;
                },
              };
            (B.headers = {
              common: { Accept: "application/json, text/plain, */*" },
            }),
              f.forEach(["delete", "get", "head"], function (v) {
                B.headers[v] = {};
              }),
              f.forEach(["post", "put", "patch"], function (v) {
                B.headers[v] = f.merge(N);
              }),
              (R.exports = B);
          }).call(this, y(50));
        },
        function (R, $, y) {
          var l = y(42),
            f = Object.prototype.hasOwnProperty;
          R.exports = function (p) {
            var C,
              N = arguments[1];
            if ((l(p), N === void 0)) f.call(p, "__ee__") && delete p.__ee__;
            else {
              if (!(C = f.call(p, "__ee__") && p.__ee__)) return;
              C[N] && delete C[N];
            }
          };
        },
        function (R, $, y) {
          R.exports = function (l) {
            return l != null;
          };
        },
        function (R, $, y) {
          R.exports = function (l, f) {
            return function () {
              for (
                var p = new Array(arguments.length), C = 0;
                C < p.length;
                C++
              )
                p[C] = arguments[C];
              return l.apply(f, p);
            };
          };
        },
        function (R, $, y) {
          var l = y(1);
          function f(p) {
            return encodeURIComponent(p)
              .replace(/%3A/gi, ":")
              .replace(/%24/g, "$")
              .replace(/%2C/gi, ",")
              .replace(/%20/g, "+")
              .replace(/%5B/gi, "[")
              .replace(/%5D/gi, "]");
          }
          R.exports = function (p, C, N) {
            if (!C) return p;
            var A;
            if (N) A = N(C);
            else if (l.isURLSearchParams(C)) A = C.toString();
            else {
              var j = [];
              l.forEach(C, function (v, U) {
                v != null &&
                  (l.isArray(v) ? (U += "[]") : (v = [v]),
                  l.forEach(v, function (J) {
                    l.isDate(J)
                      ? (J = J.toISOString())
                      : l.isObject(J) && (J = JSON.stringify(J)),
                      j.push(f(U) + "=" + f(J));
                  }));
              }),
                (A = j.join("&"));
            }
            if (A) {
              var B = p.indexOf("#");
              B !== -1 && (p = p.slice(0, B)),
                (p += (p.indexOf("?") === -1 ? "?" : "&") + A);
            }
            return p;
          };
        },
        function (R, $, y) {
          R.exports = function (l, f, p, C, N) {
            return (
              (l.config = f),
              p && (l.code = p),
              (l.request = C),
              (l.response = N),
              (l.isAxiosError = !0),
              (l.toJSON = function () {
                return {
                  message: this.message,
                  name: this.name,
                  description: this.description,
                  number: this.number,
                  fileName: this.fileName,
                  lineNumber: this.lineNumber,
                  columnNumber: this.columnNumber,
                  stack: this.stack,
                  config: this.config,
                  code: this.code,
                };
              }),
              l
            );
          };
        },
        function (R, $, y) {
          var l = y(1),
            f = y(52),
            p = y(53),
            C = y(14),
            N = y(54),
            A = y(57),
            j = y(58),
            B = y(17);
          R.exports = function (v) {
            return new Promise(function (U, J) {
              var ot = v.data,
                Z = v.headers,
                X = v.responseType;
              l.isFormData(ot) && delete Z["Content-Type"];
              var I = new XMLHttpRequest();
              if (v.auth) {
                var it = v.auth.username || "",
                  dt = v.auth.password
                    ? unescape(encodeURIComponent(v.auth.password))
                    : "";
                Z.Authorization = "Basic " + btoa(it + ":" + dt);
              }
              var st = N(v.baseURL, v.url);
              function F() {
                if (I) {
                  var wt =
                      "getAllResponseHeaders" in I
                        ? A(I.getAllResponseHeaders())
                        : null,
                    Lt = {
                      data:
                        X && X !== "text" && X !== "json"
                          ? I.response
                          : I.responseText,
                      status: I.status,
                      statusText: I.statusText,
                      headers: wt,
                      config: v,
                      request: I,
                    };
                  f(U, J, Lt), (I = null);
                }
              }
              if (
                (I.open(
                  v.method.toUpperCase(),
                  C(st, v.params, v.paramsSerializer),
                  !0
                ),
                (I.timeout = v.timeout),
                "onloadend" in I
                  ? (I.onloadend = F)
                  : (I.onreadystatechange = function () {
                      I &&
                        I.readyState === 4 &&
                        (I.status !== 0 ||
                          (I.responseURL &&
                            I.responseURL.indexOf("file:") === 0)) &&
                        setTimeout(F);
                    }),
                (I.onabort = function () {
                  I &&
                    (J(B("Request aborted", v, "ECONNABORTED", I)), (I = null));
                }),
                (I.onerror = function () {
                  J(B("Network Error", v, null, I)), (I = null);
                }),
                (I.ontimeout = function () {
                  var wt = "timeout of " + v.timeout + "ms exceeded";
                  v.timeoutErrorMessage && (wt = v.timeoutErrorMessage),
                    J(
                      B(
                        wt,
                        v,
                        v.transitional && v.transitional.clarifyTimeoutError
                          ? "ETIMEDOUT"
                          : "ECONNABORTED",
                        I
                      )
                    ),
                    (I = null);
                }),
                l.isStandardBrowserEnv())
              ) {
                var bt =
                  (v.withCredentials || j(st)) && v.xsrfCookieName
                    ? p.read(v.xsrfCookieName)
                    : void 0;
                bt && (Z[v.xsrfHeaderName] = bt);
              }
              "setRequestHeader" in I &&
                l.forEach(Z, function (wt, Lt) {
                  ot === void 0 && Lt.toLowerCase() === "content-type"
                    ? delete Z[Lt]
                    : I.setRequestHeader(Lt, wt);
                }),
                l.isUndefined(v.withCredentials) ||
                  (I.withCredentials = !!v.withCredentials),
                X && X !== "json" && (I.responseType = v.responseType),
                typeof v.onDownloadProgress == "function" &&
                  I.addEventListener("progress", v.onDownloadProgress),
                typeof v.onUploadProgress == "function" &&
                  I.upload &&
                  I.upload.addEventListener("progress", v.onUploadProgress),
                v.cancelToken &&
                  v.cancelToken.promise.then(function (wt) {
                    I && (I.abort(), J(wt), (I = null));
                  }),
                ot || (ot = null),
                I.send(ot);
            });
          };
        },
        function (R, $, y) {
          var l = y(15);
          R.exports = function (f, p, C, N, A) {
            var j = new Error(f);
            return l(j, p, C, N, A);
          };
        },
        function (R, $, y) {
          R.exports = function (l) {
            return !(!l || !l.__CANCEL__);
          };
        },
        function (R, $, y) {
          var l = y(1);
          R.exports = function (f, p) {
            p = p || {};
            var C = {},
              N = ["url", "method", "data"],
              A = ["headers", "auth", "proxy", "params"],
              j = [
                "baseURL",
                "transformRequest",
                "transformResponse",
                "paramsSerializer",
                "timeout",
                "timeoutMessage",
                "withCredentials",
                "adapter",
                "responseType",
                "xsrfCookieName",
                "xsrfHeaderName",
                "onUploadProgress",
                "onDownloadProgress",
                "decompress",
                "maxContentLength",
                "maxBodyLength",
                "maxRedirects",
                "transport",
                "httpAgent",
                "httpsAgent",
                "cancelToken",
                "socketPath",
                "responseEncoding",
              ],
              B = ["validateStatus"];
            function v(Z, X) {
              return l.isPlainObject(Z) && l.isPlainObject(X)
                ? l.merge(Z, X)
                : l.isPlainObject(X)
                ? l.merge({}, X)
                : l.isArray(X)
                ? X.slice()
                : X;
            }
            function U(Z) {
              l.isUndefined(p[Z])
                ? l.isUndefined(f[Z]) || (C[Z] = v(void 0, f[Z]))
                : (C[Z] = v(f[Z], p[Z]));
            }
            l.forEach(N, function (Z) {
              l.isUndefined(p[Z]) || (C[Z] = v(void 0, p[Z]));
            }),
              l.forEach(A, U),
              l.forEach(j, function (Z) {
                l.isUndefined(p[Z])
                  ? l.isUndefined(f[Z]) || (C[Z] = v(void 0, f[Z]))
                  : (C[Z] = v(void 0, p[Z]));
              }),
              l.forEach(B, function (Z) {
                Z in p
                  ? (C[Z] = v(f[Z], p[Z]))
                  : Z in f && (C[Z] = v(void 0, f[Z]));
              });
            var J = N.concat(A).concat(j).concat(B),
              ot = Object.keys(f)
                .concat(Object.keys(p))
                .filter(function (Z) {
                  return J.indexOf(Z) === -1;
                });
            return l.forEach(ot, U), C;
          };
        },
        function (R, $, y) {
          function l(f) {
            this.message = f;
          }
          (l.prototype.toString = function () {
            return "Cancel" + (this.message ? ": " + this.message : "");
          }),
            (l.prototype.__CANCEL__ = !0),
            (R.exports = l);
        },
        function (R, $) {
          var y;
          y = (function () {
            return this;
          })();
          try {
            y = y || new Function("return this")();
          } catch {
            typeof window == "object" && (y = window);
          }
          R.exports = y;
        },
        function (R, $, y) {
          (function (l) {
            var f,
              p,
              C,
              N = y(5),
              A = y(9),
              j = y.n(A);
            function B(ot) {
              return (B =
                typeof Symbol == "function" &&
                typeof Symbol.iterator == "symbol"
                  ? function (Z) {
                      return typeof Z;
                    }
                  : function (Z) {
                      return Z &&
                        typeof Symbol == "function" &&
                        Z.constructor === Symbol &&
                        Z !== Symbol.prototype
                        ? "symbol"
                        : typeof Z;
                    })(ot);
            }
            typeof fetch == "function" &&
              (f =
                l !== void 0 && l.fetch
                  ? l.fetch
                  : typeof window < "u" && window.fetch
                  ? window.fetch
                  : fetch),
              Object(N.b)() &&
                (l !== void 0 && l.XMLHttpRequest
                  ? (p = l.XMLHttpRequest)
                  : typeof window < "u" &&
                    window.XMLHttpRequest &&
                    (p = window.XMLHttpRequest)),
              typeof ActiveXObject == "function" &&
                (l !== void 0 && l.ActiveXObject
                  ? (C = l.ActiveXObject)
                  : typeof window < "u" &&
                    window.ActiveXObject &&
                    (C = window.ActiveXObject)),
              f || !A || p || C || (f = j.a || A),
              typeof f != "function" && (f = void 0);
            var v = function (ot, Z) {
                if (Z && B(Z) === "object") {
                  var X = "";
                  for (var I in Z)
                    X +=
                      "&" +
                      encodeURIComponent(I) +
                      "=" +
                      encodeURIComponent(Z[I]);
                  if (!X) return ot;
                  ot = ot + (ot.indexOf("?") !== -1 ? "&" : "?") + X.slice(1);
                }
                return ot;
              },
              U = function (ot, Z, X) {
                f(ot, Z)
                  .then(function (I) {
                    if (!I.ok)
                      return X(I.statusText || "Error", { status: I.status });
                    I.text()
                      .then(function (it) {
                        X(null, { status: I.status, data: it });
                      })
                      .catch(X);
                  })
                  .catch(X);
              },
              J = !1;
            $.a = function (ot, Z, X, I) {
              return (
                typeof X == "function" && ((I = X), (X = void 0)),
                (I = I || function () {}),
                f
                  ? (function (it, dt, st, F) {
                      it.queryStringParams &&
                        (dt = v(dt, it.queryStringParams));
                      var bt = Object(N.a)(
                        {},
                        typeof it.customHeaders == "function"
                          ? it.customHeaders()
                          : it.customHeaders
                      );
                      st && (bt["Content-Type"] = "application/json");
                      var wt =
                          typeof it.requestOptions == "function"
                            ? it.requestOptions(st)
                            : it.requestOptions,
                        Lt = Object(N.a)(
                          {
                            method: st ? "POST" : "GET",
                            body: st ? it.stringify(st) : void 0,
                            headers: bt,
                          },
                          J ? {} : wt
                        );
                      try {
                        U(dt, Lt, F);
                      } catch (jt) {
                        if (
                          !wt ||
                          Object.keys(wt).length === 0 ||
                          !jt.message ||
                          jt.message.indexOf("not implemented") < 0
                        )
                          return F(jt);
                        try {
                          Object.keys(wt).forEach(function (z) {
                            delete Lt[z];
                          }),
                            U(dt, Lt, F),
                            (J = !0);
                        } catch (z) {
                          F(z);
                        }
                      }
                    })(ot, Z, X, I)
                  : Object(N.b)() || typeof ActiveXObject == "function"
                  ? (function (it, dt, st, F) {
                      st && B(st) === "object" && (st = v("", st).slice(1)),
                        it.queryStringParams &&
                          (dt = v(dt, it.queryStringParams));
                      try {
                        var bt;
                        (bt = p ? new p() : new C("MSXML2.XMLHTTP.3.0")).open(
                          st ? "POST" : "GET",
                          dt,
                          1
                        ),
                          it.crossDomain ||
                            bt.setRequestHeader(
                              "X-Requested-With",
                              "XMLHttpRequest"
                            ),
                          (bt.withCredentials = !!it.withCredentials),
                          st &&
                            bt.setRequestHeader(
                              "Content-Type",
                              "application/x-www-form-urlencoded"
                            ),
                          bt.overrideMimeType &&
                            bt.overrideMimeType("application/json");
                        var wt = it.customHeaders;
                        if ((wt = typeof wt == "function" ? wt() : wt))
                          for (var Lt in wt) bt.setRequestHeader(Lt, wt[Lt]);
                        (bt.onreadystatechange = function () {
                          bt.readyState > 3 &&
                            F(bt.status >= 400 ? bt.statusText : null, {
                              status: bt.status,
                              data: bt.responseText,
                            });
                        }),
                          bt.send(st);
                      } catch (jt) {
                        console && console.log(jt);
                      }
                    })(ot, Z, X, I)
                  : void I(
                      new Error("No fetch and no xhr implementation found!")
                    )
              );
            };
          }).call(this, y(21));
        },
        function (R, $, y) {
          var l = y(12),
            f = y(24),
            p = y(28),
            C = y(36),
            N = y(37);
          (R.exports = function (A, j) {
            var B, v, U, J, ot;
            return (
              arguments.length < 2 || typeof A != "string"
                ? ((J = j), (j = A), (A = null))
                : (J = arguments[2]),
              l(A)
                ? ((B = N.call(A, "c")),
                  (v = N.call(A, "e")),
                  (U = N.call(A, "w")))
                : ((B = U = !0), (v = !1)),
              (ot = { value: j, configurable: B, enumerable: v, writable: U }),
              J ? p(C(J), ot) : ot
            );
          }).gs = function (A, j, B) {
            var v, U, J, ot;
            return (
              typeof A != "string"
                ? ((J = B), (B = j), (j = A), (A = null))
                : (J = arguments[3]),
              l(j)
                ? f(j)
                  ? l(B)
                    ? f(B) || ((J = B), (B = void 0))
                    : (B = void 0)
                  : ((J = j), (j = B = void 0))
                : (j = void 0),
              l(A)
                ? ((v = N.call(A, "c")), (U = N.call(A, "e")))
                : ((v = !0), (U = !1)),
              (ot = { get: j, set: B, configurable: v, enumerable: U }),
              J ? p(C(J), ot) : ot
            );
          };
        },
        function (R, $, y) {
          var l = y(25),
            f = /^\s*class[\s{/}]/,
            p = Function.prototype.toString;
          R.exports = function (C) {
            return !!l(C) && !f.test(p.call(C));
          };
        },
        function (R, $, y) {
          var l = y(26);
          R.exports = function (f) {
            if (typeof f != "function" || !hasOwnProperty.call(f, "length"))
              return !1;
            try {
              if (
                typeof f.length != "number" ||
                typeof f.call != "function" ||
                typeof f.apply != "function"
              )
                return !1;
            } catch {
              return !1;
            }
            return !l(f);
          };
        },
        function (R, $, y) {
          var l = y(27);
          R.exports = function (f) {
            if (!l(f)) return !1;
            try {
              return !!f.constructor && f.constructor.prototype === f;
            } catch {
              return !1;
            }
          };
        },
        function (R, $, y) {
          var l = y(12),
            f = { object: !0, function: !0, undefined: !0 };
          R.exports = function (p) {
            return !!l(p) && hasOwnProperty.call(f, typeof p);
          };
        },
        function (R, $, y) {
          R.exports = y(29)() ? Object.assign : y(30);
        },
        function (R, $, y) {
          R.exports = function () {
            var l,
              f = Object.assign;
            return (
              typeof f == "function" &&
              (f((l = { foo: "raz" }), { bar: "dwa" }, { trzy: "trzy" }),
              l.foo + l.bar + l.trzy === "razdwatrzy")
            );
          };
        },
        function (R, $, y) {
          var l = y(31),
            f = y(35),
            p = Math.max;
          R.exports = function (C, N) {
            var A,
              j,
              B,
              v = p(arguments.length, 2);
            for (
              C = Object(f(C)),
                B = function (U) {
                  try {
                    C[U] = N[U];
                  } catch (J) {
                    A || (A = J);
                  }
                },
                j = 1;
              j < v;
              ++j
            )
              l((N = arguments[j])).forEach(B);
            if (A !== void 0) throw A;
            return C;
          };
        },
        function (R, $, y) {
          R.exports = y(32)() ? Object.keys : y(33);
        },
        function (R, $, y) {
          R.exports = function () {
            try {
              return Object.keys("primitive"), !0;
            } catch {
              return !1;
            }
          };
        },
        function (R, $, y) {
          var l = y(7),
            f = Object.keys;
          R.exports = function (p) {
            return f(l(p) ? Object(p) : p);
          };
        },
        function (R, $, y) {
          R.exports = function () {};
        },
        function (R, $, y) {
          var l = y(7);
          R.exports = function (f) {
            if (!l(f)) throw new TypeError("Cannot use null or undefined");
            return f;
          };
        },
        function (R, $, y) {
          var l = y(7),
            f = Array.prototype.forEach,
            p = Object.create,
            C = function (N, A) {
              var j;
              for (j in N) A[j] = N[j];
            };
          R.exports = function (N) {
            var A = p(null);
            return (
              f.call(arguments, function (j) {
                l(j) && C(Object(j), A);
              }),
              A
            );
          };
        },
        function (R, $, y) {
          R.exports = y(38)() ? String.prototype.contains : y(39);
        },
        function (R, $, y) {
          var l = "razdwatrzy";
          R.exports = function () {
            return (
              typeof l.contains == "function" &&
              l.contains("dwa") === !0 &&
              l.contains("foo") === !1
            );
          };
        },
        function (R, $, y) {
          var l = String.prototype.indexOf;
          R.exports = function (f) {
            return l.call(this, f, arguments[1]) > -1;
          };
        },
        function (R, $, y) {
          R.exports = function (l) {
            if (typeof l != "function")
              throw new TypeError(l + " is not a function");
            return l;
          };
        },
        function (R, $, y) {
          function l(e, r) {
            for (var t = 0; t < r.length; t++) {
              var n = r[t];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          function f(e, r, t) {
            return r && l(e.prototype, r), t && l(e, t), e;
          }
          function p(e, r) {
            (e.prototype = Object.create(r.prototype)),
              (e.prototype.constructor = e),
              (e.__proto__ = r);
          }
          function C(e) {
            return (C = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
                })(e);
          }
          function N(e, r) {
            return (N =
              Object.setPrototypeOf ||
              function (t, n) {
                return (t.__proto__ = n), t;
              })(e, r);
          }
          function A() {
            if (
              typeof Reflect > "u" ||
              !Reflect.construct ||
              Reflect.construct.sham
            )
              return !1;
            if (typeof Proxy == "function") return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch {
              return !1;
            }
          }
          function j(e, r, t) {
            return (j = A()
              ? Reflect.construct
              : function (n, o, m) {
                  var O = [null];
                  O.push.apply(O, o);
                  var M = new (Function.bind.apply(n, O))();
                  return m && N(M, m.prototype), M;
                }).apply(null, arguments);
          }
          function B(e) {
            var r = typeof Map == "function" ? new Map() : void 0;
            return (B = function (t) {
              if (
                t === null ||
                ((n = t),
                Function.toString.call(n).indexOf("[native code]") === -1)
              )
                return t;
              var n;
              if (typeof t != "function")
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (r !== void 0) {
                if (r.has(t)) return r.get(t);
                r.set(t, o);
              }
              function o() {
                return j(t, arguments, C(this).constructor);
              }
              return (
                (o.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: o,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                N(o, t)
              );
            })(e);
          }
          function v(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
            return n;
          }
          function U(e) {
            var r = 0;
            if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
              if (
                Array.isArray(e) ||
                (e = (function (t, n) {
                  if (t) {
                    if (typeof t == "string") return v(t, n);
                    var o = Object.prototype.toString.call(t).slice(8, -1);
                    return (
                      o === "Object" &&
                        t.constructor &&
                        (o = t.constructor.name),
                      o === "Map" || o === "Set"
                        ? Array.from(o)
                        : o === "Arguments" ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                        ? v(t, n)
                        : void 0
                    );
                  }
                })(e))
              )
                return function () {
                  return r >= e.length
                    ? { done: !0 }
                    : { done: !1, value: e[r++] };
                };
              throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            return (r = e[Symbol.iterator]()).next.bind(r);
          }
          Object.defineProperty($, "__esModule", { value: !0 });
          var J = (function (e) {
              function r() {
                return e.apply(this, arguments) || this;
              }
              return p(r, e), r;
            })(B(Error)),
            ot = (function (e) {
              function r(t) {
                return (
                  e.call(this, "Invalid DateTime: " + t.toMessage()) || this
                );
              }
              return p(r, e), r;
            })(J),
            Z = (function (e) {
              function r(t) {
                return (
                  e.call(this, "Invalid Interval: " + t.toMessage()) || this
                );
              }
              return p(r, e), r;
            })(J),
            X = (function (e) {
              function r(t) {
                return (
                  e.call(this, "Invalid Duration: " + t.toMessage()) || this
                );
              }
              return p(r, e), r;
            })(J),
            I = (function (e) {
              function r() {
                return e.apply(this, arguments) || this;
              }
              return p(r, e), r;
            })(J),
            it = (function (e) {
              function r(t) {
                return e.call(this, "Invalid unit " + t) || this;
              }
              return p(r, e), r;
            })(J),
            dt = (function (e) {
              function r() {
                return e.apply(this, arguments) || this;
              }
              return p(r, e), r;
            })(J),
            st = (function (e) {
              function r() {
                return e.call(this, "Zone is an abstract class") || this;
              }
              return p(r, e), r;
            })(J),
            F = "numeric",
            bt = "short",
            wt = "long",
            Lt = { year: F, month: F, day: F },
            jt = { year: F, month: bt, day: F },
            z = { year: F, month: bt, day: F, weekday: bt },
            Y = { year: F, month: wt, day: F },
            V = { year: F, month: wt, day: F, weekday: wt },
            g = { hour: F, minute: F },
            D = { hour: F, minute: F, second: F },
            w = { hour: F, minute: F, second: F, timeZoneName: bt },
            at = { hour: F, minute: F, second: F, timeZoneName: wt },
            lt = { hour: F, minute: F, hour12: !1 },
            yt = { hour: F, minute: F, second: F, hour12: !1 },
            Rt = {
              hour: F,
              minute: F,
              second: F,
              hour12: !1,
              timeZoneName: bt,
            },
            G = { hour: F, minute: F, second: F, hour12: !1, timeZoneName: wt },
            K = { year: F, month: F, day: F, hour: F, minute: F },
            rt = { year: F, month: F, day: F, hour: F, minute: F, second: F },
            Q = { year: F, month: bt, day: F, hour: F, minute: F },
            Ft = { year: F, month: bt, day: F, hour: F, minute: F, second: F },
            zt = {
              year: F,
              month: bt,
              day: F,
              weekday: bt,
              hour: F,
              minute: F,
            },
            Ht = {
              year: F,
              month: wt,
              day: F,
              hour: F,
              minute: F,
              timeZoneName: bt,
            },
            Wt = {
              year: F,
              month: wt,
              day: F,
              hour: F,
              minute: F,
              second: F,
              timeZoneName: bt,
            },
            re = {
              year: F,
              month: wt,
              day: F,
              weekday: wt,
              hour: F,
              minute: F,
              timeZoneName: wt,
            },
            b = {
              year: F,
              month: wt,
              day: F,
              weekday: wt,
              hour: F,
              minute: F,
              second: F,
              timeZoneName: wt,
            };
          function u(e) {
            return e === void 0;
          }
          function i(e) {
            return typeof e == "number";
          }
          function s(e) {
            return typeof e == "number" && e % 1 == 0;
          }
          function h() {
            try {
              return typeof Intl < "u" && Intl.DateTimeFormat;
            } catch {
              return !1;
            }
          }
          function k() {
            return !u(Intl.DateTimeFormat.prototype.formatToParts);
          }
          function d() {
            try {
              return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
            } catch {
              return !1;
            }
          }
          function L(e, r, t) {
            if (e.length !== 0)
              return e.reduce(function (n, o) {
                var m = [r(o), o];
                return n && t(n[0], m[0]) === n[0] ? n : m;
              }, null)[1];
          }
          function S(e, r) {
            return r.reduce(function (t, n) {
              return (t[n] = e[n]), t;
            }, {});
          }
          function E(e, r) {
            return Object.prototype.hasOwnProperty.call(e, r);
          }
          function T(e, r, t) {
            return s(e) && e >= r && e <= t;
          }
          function x(e, r) {
            r === void 0 && (r = 2);
            var t = e < 0 ? "-" : "",
              n = t ? -1 * e : e;
            return (
              "" +
              t +
              (n.toString().length < r
                ? ("0".repeat(r) + n).slice(-r)
                : n.toString())
            );
          }
          function _(e) {
            return u(e) || e === null || e === "" ? void 0 : parseInt(e, 10);
          }
          function H(e) {
            if (!u(e) && e !== null && e !== "") {
              var r = 1e3 * parseFloat("0." + e);
              return Math.floor(r);
            }
          }
          function W(e, r, t) {
            t === void 0 && (t = !1);
            var n = Math.pow(10, r);
            return (t ? Math.trunc : Math.round)(e * n) / n;
          }
          function tt(e) {
            return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
          }
          function St(e) {
            return tt(e) ? 366 : 365;
          }
          function Dt(e, r) {
            var t =
              (function (n, o) {
                return n - o * Math.floor(n / o);
              })(r - 1, 12) + 1;
            return t === 2
              ? tt(e + (r - t) / 12)
                ? 29
                : 28
              : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t - 1];
          }
          function Pt(e) {
            var r = Date.UTC(
              e.year,
              e.month - 1,
              e.day,
              e.hour,
              e.minute,
              e.second,
              e.millisecond
            );
            return (
              e.year < 100 &&
                e.year >= 0 &&
                (r = new Date(r)).setUTCFullYear(r.getUTCFullYear() - 1900),
              +r
            );
          }
          function oe(e) {
            var r =
                (e +
                  Math.floor(e / 4) -
                  Math.floor(e / 100) +
                  Math.floor(e / 400)) %
                7,
              t = e - 1,
              n =
                (t +
                  Math.floor(t / 4) -
                  Math.floor(t / 100) +
                  Math.floor(t / 400)) %
                7;
            return r === 4 || n === 3 ? 53 : 52;
          }
          function te(e) {
            return e > 99 ? e : e > 60 ? 1900 + e : 2e3 + e;
          }
          function de(e, r, t, n) {
            n === void 0 && (n = null);
            var o = new Date(e),
              m = {
                hour12: !1,
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              };
            n && (m.timeZone = n);
            var O = Object.assign({ timeZoneName: r }, m),
              M = h();
            if (M && k()) {
              var q = new Intl.DateTimeFormat(t, O)
                .formatToParts(o)
                .find(function (nt) {
                  return nt.type.toLowerCase() === "timezonename";
                });
              return q ? q.value : null;
            }
            if (M) {
              var ut = new Intl.DateTimeFormat(t, m).format(o);
              return new Intl.DateTimeFormat(t, O)
                .format(o)
                .substring(ut.length)
                .replace(/^[, \u200e]+/, "");
            }
            return null;
          }
          function se(e, r) {
            var t = parseInt(e, 10);
            Number.isNaN(t) && (t = 0);
            var n = parseInt(r, 10) || 0;
            return 60 * t + (t < 0 || Object.is(t, -0) ? -n : n);
          }
          function Re(e) {
            var r = Number(e);
            if (typeof e == "boolean" || e === "" || Number.isNaN(r))
              throw new dt("Invalid unit value " + e);
            return r;
          }
          function ue(e, r, t) {
            var n = {};
            for (var o in e)
              if (E(e, o)) {
                if (t.indexOf(o) >= 0) continue;
                var m = e[o];
                if (m == null) continue;
                n[r(o)] = Re(m);
              }
            return n;
          }
          function Le(e, r) {
            var t = Math.trunc(Math.abs(e / 60)),
              n = Math.trunc(Math.abs(e % 60)),
              o = e >= 0 ? "+" : "-";
            switch (r) {
              case "short":
                return "" + o + x(t, 2) + ":" + x(n, 2);
              case "narrow":
                return "" + o + t + (n > 0 ? ":" + n : "");
              case "techie":
                return "" + o + x(t, 2) + x(n, 2);
              default:
                throw new RangeError(
                  "Value format " + r + " is out of range for property format"
                );
            }
          }
          function ae(e) {
            return S(e, ["hour", "minute", "second", "millisecond"]);
          }
          var Ne =
            /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;
          function qt(e) {
            return JSON.stringify(e, Object.keys(e).sort());
          }
          var Oe = [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            vt = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            a = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
          function c(e) {
            switch (e) {
              case "narrow":
                return [].concat(a);
              case "short":
                return [].concat(vt);
              case "long":
                return [].concat(Oe);
              case "numeric":
                return [
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                  "11",
                  "12",
                ];
              case "2-digit":
                return [
                  "01",
                  "02",
                  "03",
                  "04",
                  "05",
                  "06",
                  "07",
                  "08",
                  "09",
                  "10",
                  "11",
                  "12",
                ];
              default:
                return null;
            }
          }
          var P = [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            mt = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            ft = ["M", "T", "W", "T", "F", "S", "S"];
          function xt(e) {
            switch (e) {
              case "narrow":
                return [].concat(ft);
              case "short":
                return [].concat(mt);
              case "long":
                return [].concat(P);
              case "numeric":
                return ["1", "2", "3", "4", "5", "6", "7"];
              default:
                return null;
            }
          }
          var Tt = ["AM", "PM"],
            Ot = ["Before Christ", "Anno Domini"],
            ht = ["BC", "AD"],
            ct = ["B", "A"];
          function Nt(e) {
            switch (e) {
              case "narrow":
                return [].concat(ct);
              case "short":
                return [].concat(ht);
              case "long":
                return [].concat(Ot);
              default:
                return null;
            }
          }
          function Jt(e, r) {
            for (var t, n = "", o = U(e); !(t = o()).done; ) {
              var m = t.value;
              m.literal ? (n += m.val) : (n += r(m.val));
            }
            return n;
          }
          var pe = {
              D: Lt,
              DD: jt,
              DDD: Y,
              DDDD: V,
              t: g,
              tt: D,
              ttt: w,
              tttt: at,
              T: lt,
              TT: yt,
              TTT: Rt,
              TTTT: G,
              f: K,
              ff: Q,
              fff: Ht,
              ffff: re,
              F: rt,
              FF: Ft,
              FFF: Wt,
              FFFF: b,
            },
            Kt = (function () {
              function e(t, n) {
                (this.opts = n), (this.loc = t), (this.systemLoc = null);
              }
              (e.create = function (t, n) {
                return n === void 0 && (n = {}), new e(t, n);
              }),
                (e.parseFormat = function (t) {
                  for (
                    var n = null, o = "", m = !1, O = [], M = 0;
                    M < t.length;
                    M++
                  ) {
                    var q = t.charAt(M);
                    q === "'"
                      ? (o.length > 0 && O.push({ literal: m, val: o }),
                        (n = null),
                        (o = ""),
                        (m = !m))
                      : m || q === n
                      ? (o += q)
                      : (o.length > 0 && O.push({ literal: !1, val: o }),
                        (o = q),
                        (n = q));
                  }
                  return o.length > 0 && O.push({ literal: m, val: o }), O;
                }),
                (e.macroTokenToFormatOpts = function (t) {
                  return pe[t];
                });
              var r = e.prototype;
              return (
                (r.formatWithSystemDefault = function (t, n) {
                  return (
                    this.systemLoc === null &&
                      (this.systemLoc = this.loc.redefaultToSystem()),
                    this.systemLoc
                      .dtFormatter(t, Object.assign({}, this.opts, n))
                      .format()
                  );
                }),
                (r.formatDateTime = function (t, n) {
                  return (
                    n === void 0 && (n = {}),
                    this.loc
                      .dtFormatter(t, Object.assign({}, this.opts, n))
                      .format()
                  );
                }),
                (r.formatDateTimeParts = function (t, n) {
                  return (
                    n === void 0 && (n = {}),
                    this.loc
                      .dtFormatter(t, Object.assign({}, this.opts, n))
                      .formatToParts()
                  );
                }),
                (r.resolvedOptions = function (t, n) {
                  return (
                    n === void 0 && (n = {}),
                    this.loc
                      .dtFormatter(t, Object.assign({}, this.opts, n))
                      .resolvedOptions()
                  );
                }),
                (r.num = function (t, n) {
                  if ((n === void 0 && (n = 0), this.opts.forceSimple))
                    return x(t, n);
                  var o = Object.assign({}, this.opts);
                  return (
                    n > 0 && (o.padTo = n),
                    this.loc.numberFormatter(o).format(t)
                  );
                }),
                (r.formatDateTimeFromString = function (t, n) {
                  var o = this,
                    m = this.loc.listingMode() === "en",
                    O =
                      this.loc.outputCalendar &&
                      this.loc.outputCalendar !== "gregory" &&
                      k(),
                    M = function (Ct, It) {
                      return o.loc.extract(t, Ct, It);
                    },
                    q = function (Ct) {
                      return t.isOffsetFixed && t.offset === 0 && Ct.allowZ
                        ? "Z"
                        : t.isValid
                        ? t.zone.formatOffset(t.ts, Ct.format)
                        : "";
                    },
                    ut = function () {
                      return m
                        ? (function (Ct) {
                            return Tt[Ct.hour < 12 ? 0 : 1];
                          })(t)
                        : M({ hour: "numeric", hour12: !0 }, "dayperiod");
                    },
                    nt = function (Ct, It) {
                      return m
                        ? (function (Mt, kt) {
                            return c(kt)[Mt.month - 1];
                          })(t, Ct)
                        : M(
                            It ? { month: Ct } : { month: Ct, day: "numeric" },
                            "month"
                          );
                    },
                    gt = function (Ct, It) {
                      return m
                        ? (function (Mt, kt) {
                            return xt(kt)[Mt.weekday - 1];
                          })(t, Ct)
                        : M(
                            It
                              ? { weekday: Ct }
                              : { weekday: Ct, month: "long", day: "numeric" },
                            "weekday"
                          );
                    },
                    Et = function (Ct) {
                      return m
                        ? (function (It, Mt) {
                            return Nt(Mt)[It.year < 0 ? 0 : 1];
                          })(t, Ct)
                        : M({ era: Ct }, "era");
                    };
                  return Jt(e.parseFormat(n), function (Ct) {
                    switch (Ct) {
                      case "S":
                        return o.num(t.millisecond);
                      case "u":
                      case "SSS":
                        return o.num(t.millisecond, 3);
                      case "s":
                        return o.num(t.second);
                      case "ss":
                        return o.num(t.second, 2);
                      case "m":
                        return o.num(t.minute);
                      case "mm":
                        return o.num(t.minute, 2);
                      case "h":
                        return o.num(t.hour % 12 == 0 ? 12 : t.hour % 12);
                      case "hh":
                        return o.num(t.hour % 12 == 0 ? 12 : t.hour % 12, 2);
                      case "H":
                        return o.num(t.hour);
                      case "HH":
                        return o.num(t.hour, 2);
                      case "Z":
                        return q({ format: "narrow", allowZ: o.opts.allowZ });
                      case "ZZ":
                        return q({ format: "short", allowZ: o.opts.allowZ });
                      case "ZZZ":
                        return q({ format: "techie", allowZ: o.opts.allowZ });
                      case "ZZZZ":
                        return t.zone.offsetName(t.ts, {
                          format: "short",
                          locale: o.loc.locale,
                        });
                      case "ZZZZZ":
                        return t.zone.offsetName(t.ts, {
                          format: "long",
                          locale: o.loc.locale,
                        });
                      case "z":
                        return t.zoneName;
                      case "a":
                        return ut();
                      case "d":
                        return O ? M({ day: "numeric" }, "day") : o.num(t.day);
                      case "dd":
                        return O
                          ? M({ day: "2-digit" }, "day")
                          : o.num(t.day, 2);
                      case "c":
                        return o.num(t.weekday);
                      case "ccc":
                        return gt("short", !0);
                      case "cccc":
                        return gt("long", !0);
                      case "ccccc":
                        return gt("narrow", !0);
                      case "E":
                        return o.num(t.weekday);
                      case "EEE":
                        return gt("short", !1);
                      case "EEEE":
                        return gt("long", !1);
                      case "EEEEE":
                        return gt("narrow", !1);
                      case "L":
                        return O
                          ? M({ month: "numeric", day: "numeric" }, "month")
                          : o.num(t.month);
                      case "LL":
                        return O
                          ? M({ month: "2-digit", day: "numeric" }, "month")
                          : o.num(t.month, 2);
                      case "LLL":
                        return nt("short", !0);
                      case "LLLL":
                        return nt("long", !0);
                      case "LLLLL":
                        return nt("narrow", !0);
                      case "M":
                        return O
                          ? M({ month: "numeric" }, "month")
                          : o.num(t.month);
                      case "MM":
                        return O
                          ? M({ month: "2-digit" }, "month")
                          : o.num(t.month, 2);
                      case "MMM":
                        return nt("short", !1);
                      case "MMMM":
                        return nt("long", !1);
                      case "MMMMM":
                        return nt("narrow", !1);
                      case "y":
                        return O
                          ? M({ year: "numeric" }, "year")
                          : o.num(t.year);
                      case "yy":
                        return O
                          ? M({ year: "2-digit" }, "year")
                          : o.num(t.year.toString().slice(-2), 2);
                      case "yyyy":
                        return O
                          ? M({ year: "numeric" }, "year")
                          : o.num(t.year, 4);
                      case "yyyyyy":
                        return O
                          ? M({ year: "numeric" }, "year")
                          : o.num(t.year, 6);
                      case "G":
                        return Et("short");
                      case "GG":
                        return Et("long");
                      case "GGGGG":
                        return Et("narrow");
                      case "kk":
                        return o.num(t.weekYear.toString().slice(-2), 2);
                      case "kkkk":
                        return o.num(t.weekYear, 4);
                      case "W":
                        return o.num(t.weekNumber);
                      case "WW":
                        return o.num(t.weekNumber, 2);
                      case "o":
                        return o.num(t.ordinal);
                      case "ooo":
                        return o.num(t.ordinal, 3);
                      case "q":
                        return o.num(t.quarter);
                      case "qq":
                        return o.num(t.quarter, 2);
                      case "X":
                        return o.num(Math.floor(t.ts / 1e3));
                      case "x":
                        return o.num(t.ts);
                      default:
                        return (function (It) {
                          var Mt = e.macroTokenToFormatOpts(It);
                          return Mt ? o.formatWithSystemDefault(t, Mt) : It;
                        })(Ct);
                    }
                  });
                }),
                (r.formatDurationFromString = function (t, n) {
                  var o,
                    m = this,
                    O = function (nt) {
                      switch (nt[0]) {
                        case "S":
                          return "millisecond";
                        case "s":
                          return "second";
                        case "m":
                          return "minute";
                        case "h":
                          return "hour";
                        case "d":
                          return "day";
                        case "M":
                          return "month";
                        case "y":
                          return "year";
                        default:
                          return null;
                      }
                    },
                    M = e.parseFormat(n),
                    q = M.reduce(function (nt, gt) {
                      var Et = gt.literal,
                        Ct = gt.val;
                      return Et ? nt : nt.concat(Ct);
                    }, []),
                    ut = t.shiftTo.apply(
                      t,
                      q.map(O).filter(function (nt) {
                        return nt;
                      })
                    );
                  return Jt(
                    M,
                    ((o = ut),
                    function (nt) {
                      var gt = O(nt);
                      return gt ? m.num(o.get(gt), nt.length) : nt;
                    })
                  );
                }),
                e
              );
            })(),
            ce = (function () {
              function e(r, t) {
                (this.reason = r), (this.explanation = t);
              }
              return (
                (e.prototype.toMessage = function () {
                  return this.explanation
                    ? this.reason + ": " + this.explanation
                    : this.reason;
                }),
                e
              );
            })(),
            Ie = (function () {
              function e() {}
              var r = e.prototype;
              return (
                (r.offsetName = function (t, n) {
                  throw new st();
                }),
                (r.formatOffset = function (t, n) {
                  throw new st();
                }),
                (r.offset = function (t) {
                  throw new st();
                }),
                (r.equals = function (t) {
                  throw new st();
                }),
                f(e, [
                  {
                    key: "type",
                    get: function () {
                      throw new st();
                    },
                  },
                  {
                    key: "name",
                    get: function () {
                      throw new st();
                    },
                  },
                  {
                    key: "universal",
                    get: function () {
                      throw new st();
                    },
                  },
                  {
                    key: "isValid",
                    get: function () {
                      throw new st();
                    },
                  },
                ]),
                e
              );
            })(),
            tn = null,
            mn = (function (e) {
              function r() {
                return e.apply(this, arguments) || this;
              }
              p(r, e);
              var t = r.prototype;
              return (
                (t.offsetName = function (n, o) {
                  return de(n, o.format, o.locale);
                }),
                (t.formatOffset = function (n, o) {
                  return Le(this.offset(n), o);
                }),
                (t.offset = function (n) {
                  return -new Date(n).getTimezoneOffset();
                }),
                (t.equals = function (n) {
                  return n.type === "local";
                }),
                f(
                  r,
                  [
                    {
                      key: "type",
                      get: function () {
                        return "local";
                      },
                    },
                    {
                      key: "name",
                      get: function () {
                        return h()
                          ? new Intl.DateTimeFormat().resolvedOptions().timeZone
                          : "local";
                      },
                    },
                    {
                      key: "universal",
                      get: function () {
                        return !1;
                      },
                    },
                    {
                      key: "isValid",
                      get: function () {
                        return !0;
                      },
                    },
                  ],
                  [
                    {
                      key: "instance",
                      get: function () {
                        return tn === null && (tn = new r()), tn;
                      },
                    },
                  ]
                ),
                r
              );
            })(Ie),
            On = RegExp("^" + Ne.source + "$"),
            Ue = {},
            Cn = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 },
            Fe = {},
            fe = (function (e) {
              function r(n) {
                var o;
                return (
                  ((o = e.call(this) || this).zoneName = n),
                  (o.valid = r.isValidZone(n)),
                  o
                );
              }
              p(r, e),
                (r.create = function (n) {
                  return Fe[n] || (Fe[n] = new r(n)), Fe[n];
                }),
                (r.resetCache = function () {
                  (Fe = {}), (Ue = {});
                }),
                (r.isValidSpecifier = function (n) {
                  return !(!n || !n.match(On));
                }),
                (r.isValidZone = function (n) {
                  try {
                    return (
                      new Intl.DateTimeFormat("en-US", {
                        timeZone: n,
                      }).format(),
                      !0
                    );
                  } catch {
                    return !1;
                  }
                }),
                (r.parseGMTOffset = function (n) {
                  if (n) {
                    var o = n.match(/^Etc\/GMT(0|[+-]\d{1,2})$/i);
                    if (o) return -60 * parseInt(o[1]);
                  }
                  return null;
                });
              var t = r.prototype;
              return (
                (t.offsetName = function (n, o) {
                  return de(n, o.format, o.locale, this.name);
                }),
                (t.formatOffset = function (n, o) {
                  return Le(this.offset(n), o);
                }),
                (t.offset = function (n) {
                  var o = new Date(n);
                  if (isNaN(o)) return NaN;
                  var m,
                    O =
                      ((m = this.name),
                      Ue[m] ||
                        (Ue[m] = new Intl.DateTimeFormat("en-US", {
                          hour12: !1,
                          timeZone: m,
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                          second: "2-digit",
                        })),
                      Ue[m]),
                    M = O.formatToParts
                      ? (function (It, Mt) {
                          for (
                            var kt = It.formatToParts(Mt), _t = [], At = 0;
                            At < kt.length;
                            At++
                          ) {
                            var Bt = kt[At],
                              Ut = Bt.type,
                              Qt = Bt.value,
                              ie = Cn[Ut];
                            u(ie) || (_t[ie] = parseInt(Qt, 10));
                          }
                          return _t;
                        })(O, o)
                      : (function (It, Mt) {
                          var kt = It.format(Mt).replace(/\u200E/g, ""),
                            _t = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(
                              kt
                            ),
                            At = _t[1],
                            Bt = _t[2];
                          return [_t[3], At, Bt, _t[4], _t[5], _t[6]];
                        })(O, o),
                    q = M[0],
                    ut = M[1],
                    nt = M[2],
                    gt = M[3],
                    Et = +o,
                    Ct = Et % 1e3;
                  return (
                    (Pt({
                      year: q,
                      month: ut,
                      day: nt,
                      hour: gt === 24 ? 0 : gt,
                      minute: M[4],
                      second: M[5],
                      millisecond: 0,
                    }) -
                      (Et -= Ct >= 0 ? Ct : 1e3 + Ct)) /
                    6e4
                  );
                }),
                (t.equals = function (n) {
                  return n.type === "iana" && n.name === this.name;
                }),
                f(r, [
                  {
                    key: "type",
                    get: function () {
                      return "iana";
                    },
                  },
                  {
                    key: "name",
                    get: function () {
                      return this.zoneName;
                    },
                  },
                  {
                    key: "universal",
                    get: function () {
                      return !1;
                    },
                  },
                  {
                    key: "isValid",
                    get: function () {
                      return this.valid;
                    },
                  },
                ]),
                r
              );
            })(Ie),
            en = null,
            ee = (function (e) {
              function r(n) {
                var o;
                return ((o = e.call(this) || this).fixed = n), o;
              }
              p(r, e),
                (r.instance = function (n) {
                  return n === 0 ? r.utcInstance : new r(n);
                }),
                (r.parseSpecifier = function (n) {
                  if (n) {
                    var o = n.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
                    if (o) return new r(se(o[1], o[2]));
                  }
                  return null;
                }),
                f(r, null, [
                  {
                    key: "utcInstance",
                    get: function () {
                      return en === null && (en = new r(0)), en;
                    },
                  },
                ]);
              var t = r.prototype;
              return (
                (t.offsetName = function () {
                  return this.name;
                }),
                (t.formatOffset = function (n, o) {
                  return Le(this.fixed, o);
                }),
                (t.offset = function () {
                  return this.fixed;
                }),
                (t.equals = function (n) {
                  return n.type === "fixed" && n.fixed === this.fixed;
                }),
                f(r, [
                  {
                    key: "type",
                    get: function () {
                      return "fixed";
                    },
                  },
                  {
                    key: "name",
                    get: function () {
                      return this.fixed === 0
                        ? "UTC"
                        : "UTC" + Le(this.fixed, "narrow");
                    },
                  },
                  {
                    key: "universal",
                    get: function () {
                      return !0;
                    },
                  },
                  {
                    key: "isValid",
                    get: function () {
                      return !0;
                    },
                  },
                ]),
                r
              );
            })(Ie),
            He = (function (e) {
              function r(n) {
                var o;
                return ((o = e.call(this) || this).zoneName = n), o;
              }
              p(r, e);
              var t = r.prototype;
              return (
                (t.offsetName = function () {
                  return null;
                }),
                (t.formatOffset = function () {
                  return "";
                }),
                (t.offset = function () {
                  return NaN;
                }),
                (t.equals = function () {
                  return !1;
                }),
                f(r, [
                  {
                    key: "type",
                    get: function () {
                      return "invalid";
                    },
                  },
                  {
                    key: "name",
                    get: function () {
                      return this.zoneName;
                    },
                  },
                  {
                    key: "universal",
                    get: function () {
                      return !1;
                    },
                  },
                  {
                    key: "isValid",
                    get: function () {
                      return !1;
                    },
                  },
                ]),
                r
              );
            })(Ie);
          function Ce(e, r) {
            var t;
            if (u(e) || e === null) return r;
            if (e instanceof Ie) return e;
            if (typeof e == "string") {
              var n = e.toLowerCase();
              return n === "local"
                ? r
                : n === "utc" || n === "gmt"
                ? ee.utcInstance
                : (t = fe.parseGMTOffset(e)) != null
                ? ee.instance(t)
                : fe.isValidSpecifier(n)
                ? fe.create(e)
                : ee.parseSpecifier(n) || new He(e);
            }
            return i(e)
              ? ee.instance(e)
              : typeof e == "object" && e.offset && typeof e.offset == "number"
              ? e
              : new He(e);
          }
          var nn = function () {
              return Date.now();
            },
            rn = null,
            ve = null,
            pn = null,
            ze = null,
            Bn = !1,
            Zt = (function () {
              function e() {}
              return (
                (e.resetCaches = function () {
                  Xt.resetCache(), fe.resetCache();
                }),
                f(e, null, [
                  {
                    key: "now",
                    get: function () {
                      return nn;
                    },
                    set: function (r) {
                      nn = r;
                    },
                  },
                  {
                    key: "defaultZoneName",
                    get: function () {
                      return e.defaultZone.name;
                    },
                    set: function (r) {
                      rn = r ? Ce(r) : null;
                    },
                  },
                  {
                    key: "defaultZone",
                    get: function () {
                      return rn || mn.instance;
                    },
                  },
                  {
                    key: "defaultLocale",
                    get: function () {
                      return ve;
                    },
                    set: function (r) {
                      ve = r;
                    },
                  },
                  {
                    key: "defaultNumberingSystem",
                    get: function () {
                      return pn;
                    },
                    set: function (r) {
                      pn = r;
                    },
                  },
                  {
                    key: "defaultOutputCalendar",
                    get: function () {
                      return ze;
                    },
                    set: function (r) {
                      ze = r;
                    },
                  },
                  {
                    key: "throwOnInvalid",
                    get: function () {
                      return Bn;
                    },
                    set: function (r) {
                      Bn = r;
                    },
                  },
                ]),
                e
              );
            })(),
            xn = {};
          function Tn(e, r) {
            r === void 0 && (r = {});
            var t = JSON.stringify([e, r]),
              n = xn[t];
            return n || ((n = new Intl.DateTimeFormat(e, r)), (xn[t] = n)), n;
          }
          var Ln = {},
            In = {};
          function Xi(e, r) {
            r === void 0 && (r = {});
            var t = r,
              n =
                (t.base,
                (function (O, M) {
                  if (O == null) return {};
                  var q,
                    ut,
                    nt = {},
                    gt = Object.keys(O);
                  for (ut = 0; ut < gt.length; ut++)
                    (q = gt[ut]), M.indexOf(q) >= 0 || (nt[q] = O[q]);
                  return nt;
                })(t, ["base"])),
              o = JSON.stringify([e, n]),
              m = In[o];
            return (
              m || ((m = new Intl.RelativeTimeFormat(e, r)), (In[o] = m)), m
            );
          }
          var on = null;
          function vn(e, r, t, n, o) {
            var m = e.listingMode(t);
            return m === "error" ? null : m === "en" ? n(r) : o(r);
          }
          var Qi = (function () {
              function e(r, t, n) {
                if (
                  ((this.padTo = n.padTo || 0),
                  (this.floor = n.floor || !1),
                  !t && h())
                ) {
                  var o = { useGrouping: !1 };
                  n.padTo > 0 && (o.minimumIntegerDigits = n.padTo),
                    (this.inf = (function (m, O) {
                      O === void 0 && (O = {});
                      var M = JSON.stringify([m, O]),
                        q = Ln[M];
                      return (
                        q || ((q = new Intl.NumberFormat(m, O)), (Ln[M] = q)), q
                      );
                    })(r, o));
                }
              }
              return (
                (e.prototype.format = function (r) {
                  if (this.inf) {
                    var t = this.floor ? Math.floor(r) : r;
                    return this.inf.format(t);
                  }
                  return x(this.floor ? Math.floor(r) : W(r, 3), this.padTo);
                }),
                e
              );
            })(),
            tr = (function () {
              function e(t, n, o) {
                var m;
                if (
                  ((this.opts = o),
                  (this.hasIntl = h()),
                  t.zone.universal && this.hasIntl)
                ) {
                  var O = (t.offset / 60) * -1,
                    M = O >= 0 ? "Etc/GMT+" + O : "Etc/GMT" + O,
                    q = fe.isValidZone(M);
                  t.offset !== 0 && q
                    ? ((m = M), (this.dt = t))
                    : ((m = "UTC"),
                      o.timeZoneName
                        ? (this.dt = t)
                        : (this.dt =
                            t.offset === 0
                              ? t
                              : Gt.fromMillis(t.ts + 60 * t.offset * 1e3)));
                } else
                  t.zone.type === "local"
                    ? (this.dt = t)
                    : ((this.dt = t), (m = t.zone.name));
                if (this.hasIntl) {
                  var ut = Object.assign({}, this.opts);
                  m && (ut.timeZone = m), (this.dtf = Tn(n, ut));
                }
              }
              var r = e.prototype;
              return (
                (r.format = function () {
                  if (this.hasIntl) return this.dtf.format(this.dt.toJSDate());
                  var t = (function (o) {
                      switch (
                        qt(
                          S(o, [
                            "weekday",
                            "era",
                            "year",
                            "month",
                            "day",
                            "hour",
                            "minute",
                            "second",
                            "timeZoneName",
                            "hour12",
                          ])
                        )
                      ) {
                        case qt(Lt):
                          return "M/d/yyyy";
                        case qt(jt):
                          return "LLL d, yyyy";
                        case qt(z):
                          return "EEE, LLL d, yyyy";
                        case qt(Y):
                          return "LLLL d, yyyy";
                        case qt(V):
                          return "EEEE, LLLL d, yyyy";
                        case qt(g):
                          return "h:mm a";
                        case qt(D):
                          return "h:mm:ss a";
                        case qt(w):
                        case qt(at):
                          return "h:mm a";
                        case qt(lt):
                          return "HH:mm";
                        case qt(yt):
                          return "HH:mm:ss";
                        case qt(Rt):
                        case qt(G):
                          return "HH:mm";
                        case qt(K):
                          return "M/d/yyyy, h:mm a";
                        case qt(Q):
                          return "LLL d, yyyy, h:mm a";
                        case qt(Ht):
                          return "LLLL d, yyyy, h:mm a";
                        case qt(re):
                          return "EEEE, LLLL d, yyyy, h:mm a";
                        case qt(rt):
                          return "M/d/yyyy, h:mm:ss a";
                        case qt(Ft):
                          return "LLL d, yyyy, h:mm:ss a";
                        case qt(zt):
                          return "EEE, d LLL yyyy, h:mm a";
                        case qt(Wt):
                          return "LLLL d, yyyy, h:mm:ss a";
                        case qt(b):
                          return "EEEE, LLLL d, yyyy, h:mm:ss a";
                        default:
                          return "EEEE, LLLL d, yyyy, h:mm a";
                      }
                    })(this.opts),
                    n = Xt.create("en-US");
                  return Kt.create(n).formatDateTimeFromString(this.dt, t);
                }),
                (r.formatToParts = function () {
                  return this.hasIntl && k()
                    ? this.dtf.formatToParts(this.dt.toJSDate())
                    : [];
                }),
                (r.resolvedOptions = function () {
                  return this.hasIntl
                    ? this.dtf.resolvedOptions()
                    : {
                        locale: "en-US",
                        numberingSystem: "latn",
                        outputCalendar: "gregory",
                      };
                }),
                e
              );
            })(),
            er = (function () {
              function e(t, n, o) {
                (this.opts = Object.assign({ style: "long" }, o)),
                  !n && d() && (this.rtf = Xi(t, o));
              }
              var r = e.prototype;
              return (
                (r.format = function (t, n) {
                  return this.rtf
                    ? this.rtf.format(t, n)
                    : (function (o, m, O, M) {
                        O === void 0 && (O = "always"),
                          M === void 0 && (M = !1);
                        var q = {
                            years: ["year", "yr."],
                            quarters: ["quarter", "qtr."],
                            months: ["month", "mo."],
                            weeks: ["week", "wk."],
                            days: ["day", "day", "days"],
                            hours: ["hour", "hr."],
                            minutes: ["minute", "min."],
                            seconds: ["second", "sec."],
                          },
                          ut =
                            ["hours", "minutes", "seconds"].indexOf(o) === -1;
                        if (O === "auto" && ut) {
                          var nt = o === "days";
                          switch (m) {
                            case 1:
                              return nt ? "tomorrow" : "next " + q[o][0];
                            case -1:
                              return nt ? "yesterday" : "last " + q[o][0];
                            case 0:
                              return nt ? "today" : "this " + q[o][0];
                          }
                        }
                        var gt = Object.is(m, -0) || m < 0,
                          Et = Math.abs(m),
                          Ct = Et === 1,
                          It = q[o],
                          Mt = M
                            ? Ct
                              ? It[1]
                              : It[2] || It[1]
                            : Ct
                            ? q[o][0]
                            : o;
                        return gt
                          ? Et + " " + Mt + " ago"
                          : "in " + Et + " " + Mt;
                      })(n, t, this.opts.numeric, this.opts.style !== "long");
                }),
                (r.formatToParts = function (t, n) {
                  return this.rtf ? this.rtf.formatToParts(t, n) : [];
                }),
                e
              );
            })(),
            Xt = (function () {
              function e(t, n, o, m) {
                var O = (function (nt) {
                    var gt = nt.indexOf("-u-");
                    if (gt === -1) return [nt];
                    var Et,
                      Ct = nt.substring(0, gt);
                    try {
                      Et = Tn(nt).resolvedOptions();
                    } catch {
                      Et = Tn(Ct).resolvedOptions();
                    }
                    var It = Et;
                    return [Ct, It.numberingSystem, It.calendar];
                  })(t),
                  M = O[0],
                  q = O[1],
                  ut = O[2];
                (this.locale = M),
                  (this.numberingSystem = n || q || null),
                  (this.outputCalendar = o || ut || null),
                  (this.intl = (function (nt, gt, Et) {
                    return h()
                      ? ((Et || gt) &&
                          ((nt += "-u"),
                          Et && (nt += "-ca-" + Et),
                          gt && (nt += "-nu-" + gt)),
                        nt)
                      : [];
                  })(this.locale, this.numberingSystem, this.outputCalendar)),
                  (this.weekdaysCache = { format: {}, standalone: {} }),
                  (this.monthsCache = { format: {}, standalone: {} }),
                  (this.meridiemCache = null),
                  (this.eraCache = {}),
                  (this.specifiedLocale = m),
                  (this.fastNumbersCached = null);
              }
              (e.fromOpts = function (t) {
                return e.create(
                  t.locale,
                  t.numberingSystem,
                  t.outputCalendar,
                  t.defaultToEN
                );
              }),
                (e.create = function (t, n, o, m) {
                  m === void 0 && (m = !1);
                  var O = t || Zt.defaultLocale;
                  return new e(
                    O ||
                      (m
                        ? "en-US"
                        : (function () {
                            if (on) return on;
                            if (h()) {
                              var M =
                                new Intl.DateTimeFormat().resolvedOptions()
                                  .locale;
                              return (on = M && M !== "und" ? M : "en-US");
                            }
                            return (on = "en-US");
                          })()),
                    n || Zt.defaultNumberingSystem,
                    o || Zt.defaultOutputCalendar,
                    O
                  );
                }),
                (e.resetCache = function () {
                  (on = null), (xn = {}), (Ln = {}), (In = {});
                }),
                (e.fromObject = function (t) {
                  var n = t === void 0 ? {} : t,
                    o = n.locale,
                    m = n.numberingSystem,
                    O = n.outputCalendar;
                  return e.create(o, m, O);
                });
              var r = e.prototype;
              return (
                (r.listingMode = function (t) {
                  t === void 0 && (t = !0);
                  var n = h() && k(),
                    o = this.isEnglish(),
                    m = !(
                      (this.numberingSystem !== null &&
                        this.numberingSystem !== "latn") ||
                      (this.outputCalendar !== null &&
                        this.outputCalendar !== "gregory")
                    );
                  return n || (o && m) || t
                    ? !n || (o && m)
                      ? "en"
                      : "intl"
                    : "error";
                }),
                (r.clone = function (t) {
                  return t && Object.getOwnPropertyNames(t).length !== 0
                    ? e.create(
                        t.locale || this.specifiedLocale,
                        t.numberingSystem || this.numberingSystem,
                        t.outputCalendar || this.outputCalendar,
                        t.defaultToEN || !1
                      )
                    : this;
                }),
                (r.redefaultToEN = function (t) {
                  return (
                    t === void 0 && (t = {}),
                    this.clone(Object.assign({}, t, { defaultToEN: !0 }))
                  );
                }),
                (r.redefaultToSystem = function (t) {
                  return (
                    t === void 0 && (t = {}),
                    this.clone(Object.assign({}, t, { defaultToEN: !1 }))
                  );
                }),
                (r.months = function (t, n, o) {
                  var m = this;
                  return (
                    n === void 0 && (n = !1),
                    o === void 0 && (o = !0),
                    vn(this, t, o, c, function () {
                      var O = n ? { month: t, day: "numeric" } : { month: t },
                        M = n ? "format" : "standalone";
                      return (
                        m.monthsCache[M][t] ||
                          (m.monthsCache[M][t] = (function (q) {
                            for (var ut = [], nt = 1; nt <= 12; nt++) {
                              var gt = Gt.utc(2016, nt, 1);
                              ut.push(q(gt));
                            }
                            return ut;
                          })(function (q) {
                            return m.extract(q, O, "month");
                          })),
                        m.monthsCache[M][t]
                      );
                    })
                  );
                }),
                (r.weekdays = function (t, n, o) {
                  var m = this;
                  return (
                    n === void 0 && (n = !1),
                    o === void 0 && (o = !0),
                    vn(this, t, o, xt, function () {
                      var O = n
                          ? {
                              weekday: t,
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          : { weekday: t },
                        M = n ? "format" : "standalone";
                      return (
                        m.weekdaysCache[M][t] ||
                          (m.weekdaysCache[M][t] = (function (q) {
                            for (var ut = [], nt = 1; nt <= 7; nt++) {
                              var gt = Gt.utc(2016, 11, 13 + nt);
                              ut.push(q(gt));
                            }
                            return ut;
                          })(function (q) {
                            return m.extract(q, O, "weekday");
                          })),
                        m.weekdaysCache[M][t]
                      );
                    })
                  );
                }),
                (r.meridiems = function (t) {
                  var n = this;
                  return (
                    t === void 0 && (t = !0),
                    vn(
                      this,
                      void 0,
                      t,
                      function () {
                        return Tt;
                      },
                      function () {
                        if (!n.meridiemCache) {
                          var o = { hour: "numeric", hour12: !0 };
                          n.meridiemCache = [
                            Gt.utc(2016, 11, 13, 9),
                            Gt.utc(2016, 11, 13, 19),
                          ].map(function (m) {
                            return n.extract(m, o, "dayperiod");
                          });
                        }
                        return n.meridiemCache;
                      }
                    )
                  );
                }),
                (r.eras = function (t, n) {
                  var o = this;
                  return (
                    n === void 0 && (n = !0),
                    vn(this, t, n, Nt, function () {
                      var m = { era: t };
                      return (
                        o.eraCache[t] ||
                          (o.eraCache[t] = [
                            Gt.utc(-40, 1, 1),
                            Gt.utc(2017, 1, 1),
                          ].map(function (O) {
                            return o.extract(O, m, "era");
                          })),
                        o.eraCache[t]
                      );
                    })
                  );
                }),
                (r.extract = function (t, n, o) {
                  var m = this.dtFormatter(t, n)
                    .formatToParts()
                    .find(function (O) {
                      return O.type.toLowerCase() === o;
                    });
                  return m ? m.value : null;
                }),
                (r.numberFormatter = function (t) {
                  return (
                    t === void 0 && (t = {}),
                    new Qi(this.intl, t.forceSimple || this.fastNumbers, t)
                  );
                }),
                (r.dtFormatter = function (t, n) {
                  return n === void 0 && (n = {}), new tr(t, this.intl, n);
                }),
                (r.relFormatter = function (t) {
                  return (
                    t === void 0 && (t = {}),
                    new er(this.intl, this.isEnglish(), t)
                  );
                }),
                (r.isEnglish = function () {
                  return (
                    this.locale === "en" ||
                    this.locale.toLowerCase() === "en-us" ||
                    (h() &&
                      new Intl.DateTimeFormat(this.intl)
                        .resolvedOptions()
                        .locale.startsWith("en-us"))
                  );
                }),
                (r.equals = function (t) {
                  return (
                    this.locale === t.locale &&
                    this.numberingSystem === t.numberingSystem &&
                    this.outputCalendar === t.outputCalendar
                  );
                }),
                f(e, [
                  {
                    key: "fastNumbers",
                    get: function () {
                      var t;
                      return (
                        this.fastNumbersCached == null &&
                          (this.fastNumbersCached =
                            (!(t = this).numberingSystem ||
                              t.numberingSystem === "latn") &&
                            (t.numberingSystem === "latn" ||
                              !t.locale ||
                              t.locale.startsWith("en") ||
                              (h() &&
                                new Intl.DateTimeFormat(
                                  t.intl
                                ).resolvedOptions().numberingSystem ===
                                  "latn"))),
                        this.fastNumbersCached
                      );
                    },
                  },
                ]),
                e
              );
            })();
          function Be() {
            for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
              r[t] = arguments[t];
            var n = r.reduce(function (o, m) {
              return o + m.source;
            }, "");
            return RegExp("^" + n + "$");
          }
          function De() {
            for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
              r[t] = arguments[t];
            return function (n) {
              return r
                .reduce(
                  function (o, m) {
                    var O = o[0],
                      M = o[1],
                      q = o[2],
                      ut = m(n, q),
                      nt = ut[0],
                      gt = ut[1],
                      Et = ut[2];
                    return [Object.assign(O, nt), M || gt, Et];
                  },
                  [{}, null, 1]
                )
                .slice(0, 2);
            };
          }
          function Je(e) {
            if (e == null) return [null, null];
            for (
              var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1;
              n < r;
              n++
            )
              t[n - 1] = arguments[n];
            for (var o = 0, m = t; o < m.length; o++) {
              var O = m[o],
                M = O[0],
                q = O[1],
                ut = M.exec(e);
              if (ut) return q(ut);
            }
            return [null, null];
          }
          function Jn() {
            for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
              r[t] = arguments[t];
            return function (n, o) {
              var m,
                O = {};
              for (m = 0; m < r.length; m++) O[r[m]] = _(n[o + m]);
              return [O, null, o + m];
            };
          }
          var Zn = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
            An = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
            Wn = RegExp("" + An.source + Zn.source + "?"),
            Rn = RegExp("(?:T" + Wn.source + ")?"),
            nr = Jn("weekYear", "weekNumber", "weekDay"),
            ir = Jn("year", "ordinal"),
            Gn = RegExp(
              An.source + " ?(?:" + Zn.source + "|(" + Ne.source + "))?"
            ),
            rr = RegExp("(?: " + Gn.source + ")?");
          function Ze(e, r, t) {
            var n = e[r];
            return u(n) ? t : _(n);
          }
          function Yn(e, r) {
            return [
              { year: Ze(e, r), month: Ze(e, r + 1, 1), day: Ze(e, r + 2, 1) },
              null,
              r + 3,
            ];
          }
          function Me(e, r) {
            return [
              {
                hours: Ze(e, r, 0),
                minutes: Ze(e, r + 1, 0),
                seconds: Ze(e, r + 2, 0),
                milliseconds: H(e[r + 3]),
              },
              null,
              r + 4,
            ];
          }
          function We(e, r) {
            var t = !e[r] && !e[r + 1],
              n = se(e[r + 1], e[r + 2]);
            return [{}, t ? null : ee.instance(n), r + 3];
          }
          function Kn(e, r) {
            return [{}, e[r] ? fe.create(e[r]) : null, r + 1];
          }
          var or = RegExp("^T?" + An.source + "$"),
            sr =
              /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
          function ar(e) {
            var r = e[0],
              t = e[1],
              n = e[2],
              o = e[3],
              m = e[4],
              O = e[5],
              M = e[6],
              q = e[7],
              ut = e[8],
              nt = r[0] === "-",
              gt = q && q[0] === "-",
              Et = function (Ct, It) {
                return (
                  It === void 0 && (It = !1),
                  Ct !== void 0 && (It || (Ct && nt)) ? -Ct : Ct
                );
              };
            return [
              {
                years: Et(_(t)),
                months: Et(_(n)),
                weeks: Et(_(o)),
                days: Et(_(m)),
                hours: Et(_(O)),
                minutes: Et(_(M)),
                seconds: Et(_(q), q === "-0"),
                milliseconds: Et(H(ut), gt),
              },
            ];
          }
          var ur = {
            GMT: 0,
            EDT: -240,
            EST: -300,
            CDT: -300,
            CST: -360,
            MDT: -360,
            MST: -420,
            PDT: -420,
            PST: -480,
          };
          function Nn(e, r, t, n, o, m, O) {
            var M = {
              year: r.length === 2 ? te(_(r)) : _(r),
              month: vt.indexOf(t) + 1,
              day: _(n),
              hour: _(o),
              minute: _(m),
            };
            return (
              O && (M.second = _(O)),
              e &&
                (M.weekday =
                  e.length > 3 ? P.indexOf(e) + 1 : mt.indexOf(e) + 1),
              M
            );
          }
          var cr =
            /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
          function lr(e) {
            var r,
              t = e[1],
              n = e[2],
              o = e[3],
              m = e[4],
              O = e[5],
              M = e[6],
              q = e[7],
              ut = e[8],
              nt = e[9],
              gt = e[10],
              Et = e[11],
              Ct = Nn(t, m, o, n, O, M, q);
            return (r = ut ? ur[ut] : nt ? 0 : se(gt, Et)), [Ct, new ee(r)];
          }
          var dr =
              /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
            fr =
              /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
            hr =
              /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
          function Xn(e) {
            var r = e[1],
              t = e[2],
              n = e[3];
            return [Nn(r, e[4], n, t, e[5], e[6], e[7]), ee.utcInstance];
          }
          function gr(e) {
            var r = e[1],
              t = e[2],
              n = e[3],
              o = e[4],
              m = e[5],
              O = e[6];
            return [Nn(r, e[7], t, n, o, m, O), ee.utcInstance];
          }
          var mr = Be(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, Rn),
            pr = Be(/(\d{4})-?W(\d\d)(?:-?(\d))?/, Rn),
            vr = Be(/(\d{4})-?(\d{3})/, Rn),
            yr = Be(Wn),
            br = De(Yn, Me, We),
            wr = De(nr, Me, We),
            Sr = De(ir, Me, We),
            Er = De(Me, We),
            kr = De(Me),
            Or = Be(/(\d{4})-(\d\d)-(\d\d)/, rr),
            Cr = Be(Gn),
            xr = De(Yn, Me, We, Kn),
            Tr = De(Me, We, Kn),
            Qn = {
              weeks: {
                days: 7,
                hours: 168,
                minutes: 10080,
                seconds: 604800,
                milliseconds: 6048e5,
              },
              days: {
                hours: 24,
                minutes: 1440,
                seconds: 86400,
                milliseconds: 864e5,
              },
              hours: { minutes: 60, seconds: 3600, milliseconds: 36e5 },
              minutes: { seconds: 60, milliseconds: 6e4 },
              seconds: { milliseconds: 1e3 },
            },
            Lr = Object.assign(
              {
                years: {
                  quarters: 4,
                  months: 12,
                  weeks: 52,
                  days: 365,
                  hours: 8760,
                  minutes: 525600,
                  seconds: 31536e3,
                  milliseconds: 31536e6,
                },
                quarters: {
                  months: 3,
                  weeks: 13,
                  days: 91,
                  hours: 2184,
                  minutes: 131040,
                  seconds: 7862400,
                  milliseconds: 78624e5,
                },
                months: {
                  weeks: 4,
                  days: 30,
                  hours: 720,
                  minutes: 43200,
                  seconds: 2592e3,
                  milliseconds: 2592e6,
                },
              },
              Qn
            ),
            Ir = Object.assign(
              {
                years: {
                  quarters: 4,
                  months: 12,
                  weeks: 52.1775,
                  days: 365.2425,
                  hours: 8765.82,
                  minutes: 525949.2,
                  seconds: 525949.2 * 60,
                  milliseconds: 525949.2 * 60 * 1e3,
                },
                quarters: {
                  months: 3,
                  weeks: 13.044375,
                  days: 91.310625,
                  hours: 2191.455,
                  minutes: 131487.3,
                  seconds: (525949.2 * 60) / 4,
                  milliseconds: 7889237999999999e-6,
                },
                months: {
                  weeks: 30.436875 / 7,
                  days: 30.436875,
                  hours: 730.485,
                  minutes: 43829.1,
                  seconds: 2629746,
                  milliseconds: 2629746e3,
                },
              },
              Qn
            ),
            Ge = [
              "years",
              "quarters",
              "months",
              "weeks",
              "days",
              "hours",
              "minutes",
              "seconds",
              "milliseconds",
            ],
            Ar = Ge.slice(0).reverse();
          function _e(e, r, t) {
            t === void 0 && (t = !1);
            var n = {
              values: t
                ? r.values
                : Object.assign({}, e.values, r.values || {}),
              loc: e.loc.clone(r.loc),
              conversionAccuracy: r.conversionAccuracy || e.conversionAccuracy,
            };
            return new ne(n);
          }
          function ti(e, r, t, n, o) {
            var m = e[o][t],
              O = r[t] / m,
              M =
                Math.sign(O) !== Math.sign(n[o]) &&
                n[o] !== 0 &&
                Math.abs(O) <= 1
                  ? (function (q) {
                      return q < 0 ? Math.floor(q) : Math.ceil(q);
                    })(O)
                  : Math.trunc(O);
            (n[o] += M), (r[t] -= M * m);
          }
          var ne = (function () {
            function e(t) {
              var n = t.conversionAccuracy === "longterm" || !1;
              (this.values = t.values),
                (this.loc = t.loc || Xt.create()),
                (this.conversionAccuracy = n ? "longterm" : "casual"),
                (this.invalid = t.invalid || null),
                (this.matrix = n ? Ir : Lr),
                (this.isLuxonDuration = !0);
            }
            (e.fromMillis = function (t, n) {
              return e.fromObject(Object.assign({ milliseconds: t }, n));
            }),
              (e.fromObject = function (t) {
                if (t == null || typeof t != "object")
                  throw new dt(
                    "Duration.fromObject: argument expected to be an object, got " +
                      (t === null ? "null" : typeof t)
                  );
                return new e({
                  values: ue(t, e.normalizeUnit, [
                    "locale",
                    "numberingSystem",
                    "conversionAccuracy",
                    "zone",
                  ]),
                  loc: Xt.fromObject(t),
                  conversionAccuracy: t.conversionAccuracy,
                });
              }),
              (e.fromISO = function (t, n) {
                var o = (function (O) {
                  return Je(O, [sr, ar]);
                })(t)[0];
                if (o) {
                  var m = Object.assign(o, n);
                  return e.fromObject(m);
                }
                return e.invalid(
                  "unparsable",
                  'the input "' + t + `" can't be parsed as ISO 8601`
                );
              }),
              (e.fromISOTime = function (t, n) {
                var o = (function (O) {
                  return Je(O, [or, kr]);
                })(t)[0];
                if (o) {
                  var m = Object.assign(o, n);
                  return e.fromObject(m);
                }
                return e.invalid(
                  "unparsable",
                  'the input "' + t + `" can't be parsed as ISO 8601`
                );
              }),
              (e.invalid = function (t, n) {
                if ((n === void 0 && (n = null), !t))
                  throw new dt(
                    "need to specify a reason the Duration is invalid"
                  );
                var o = t instanceof ce ? t : new ce(t, n);
                if (Zt.throwOnInvalid) throw new X(o);
                return new e({ invalid: o });
              }),
              (e.normalizeUnit = function (t) {
                var n = {
                  year: "years",
                  years: "years",
                  quarter: "quarters",
                  quarters: "quarters",
                  month: "months",
                  months: "months",
                  week: "weeks",
                  weeks: "weeks",
                  day: "days",
                  days: "days",
                  hour: "hours",
                  hours: "hours",
                  minute: "minutes",
                  minutes: "minutes",
                  second: "seconds",
                  seconds: "seconds",
                  millisecond: "milliseconds",
                  milliseconds: "milliseconds",
                }[t && t.toLowerCase()];
                if (!n) throw new it(t);
                return n;
              }),
              (e.isDuration = function (t) {
                return (t && t.isLuxonDuration) || !1;
              });
            var r = e.prototype;
            return (
              (r.toFormat = function (t, n) {
                n === void 0 && (n = {});
                var o = Object.assign({}, n, {
                  floor: n.round !== !1 && n.floor !== !1,
                });
                return this.isValid
                  ? Kt.create(this.loc, o).formatDurationFromString(this, t)
                  : "Invalid Duration";
              }),
              (r.toObject = function (t) {
                if ((t === void 0 && (t = {}), !this.isValid)) return {};
                var n = Object.assign({}, this.values);
                return (
                  t.includeConfig &&
                    ((n.conversionAccuracy = this.conversionAccuracy),
                    (n.numberingSystem = this.loc.numberingSystem),
                    (n.locale = this.loc.locale)),
                  n
                );
              }),
              (r.toISO = function () {
                if (!this.isValid) return null;
                var t = "P";
                return (
                  this.years !== 0 && (t += this.years + "Y"),
                  (this.months === 0 && this.quarters === 0) ||
                    (t += this.months + 3 * this.quarters + "M"),
                  this.weeks !== 0 && (t += this.weeks + "W"),
                  this.days !== 0 && (t += this.days + "D"),
                  (this.hours === 0 &&
                    this.minutes === 0 &&
                    this.seconds === 0 &&
                    this.milliseconds === 0) ||
                    (t += "T"),
                  this.hours !== 0 && (t += this.hours + "H"),
                  this.minutes !== 0 && (t += this.minutes + "M"),
                  (this.seconds === 0 && this.milliseconds === 0) ||
                    (t += W(this.seconds + this.milliseconds / 1e3, 3) + "S"),
                  t === "P" && (t += "T0S"),
                  t
                );
              }),
              (r.toISOTime = function (t) {
                if ((t === void 0 && (t = {}), !this.isValid)) return null;
                var n = this.toMillis();
                if (n < 0 || n >= 864e5) return null;
                t = Object.assign(
                  {
                    suppressMilliseconds: !1,
                    suppressSeconds: !1,
                    includePrefix: !1,
                    format: "extended",
                  },
                  t
                );
                var o = this.shiftTo(
                    "hours",
                    "minutes",
                    "seconds",
                    "milliseconds"
                  ),
                  m = t.format === "basic" ? "hhmm" : "hh:mm";
                (t.suppressSeconds &&
                  o.seconds === 0 &&
                  o.milliseconds === 0) ||
                  ((m += t.format === "basic" ? "ss" : ":ss"),
                  (t.suppressMilliseconds && o.milliseconds === 0) ||
                    (m += ".SSS"));
                var O = o.toFormat(m);
                return t.includePrefix && (O = "T" + O), O;
              }),
              (r.toJSON = function () {
                return this.toISO();
              }),
              (r.toString = function () {
                return this.toISO();
              }),
              (r.toMillis = function () {
                return this.as("milliseconds");
              }),
              (r.valueOf = function () {
                return this.toMillis();
              }),
              (r.plus = function (t) {
                if (!this.isValid) return this;
                for (var n, o = je(t), m = {}, O = U(Ge); !(n = O()).done; ) {
                  var M = n.value;
                  (E(o.values, M) || E(this.values, M)) &&
                    (m[M] = o.get(M) + this.get(M));
                }
                return _e(this, { values: m }, !0);
              }),
              (r.minus = function (t) {
                if (!this.isValid) return this;
                var n = je(t);
                return this.plus(n.negate());
              }),
              (r.mapUnits = function (t) {
                if (!this.isValid) return this;
                for (
                  var n = {}, o = 0, m = Object.keys(this.values);
                  o < m.length;
                  o++
                ) {
                  var O = m[o];
                  n[O] = Re(t(this.values[O], O));
                }
                return _e(this, { values: n }, !0);
              }),
              (r.get = function (t) {
                return this[e.normalizeUnit(t)];
              }),
              (r.set = function (t) {
                return this.isValid
                  ? _e(this, {
                      values: Object.assign(
                        this.values,
                        ue(t, e.normalizeUnit, [])
                      ),
                    })
                  : this;
              }),
              (r.reconfigure = function (t) {
                var n = t === void 0 ? {} : t,
                  o = n.locale,
                  m = n.numberingSystem,
                  O = n.conversionAccuracy,
                  M = {
                    loc: this.loc.clone({ locale: o, numberingSystem: m }),
                  };
                return O && (M.conversionAccuracy = O), _e(this, M);
              }),
              (r.as = function (t) {
                return this.isValid ? this.shiftTo(t).get(t) : NaN;
              }),
              (r.normalize = function () {
                if (!this.isValid) return this;
                var t = this.toObject();
                return (
                  (function (n, o) {
                    Ar.reduce(function (m, O) {
                      return u(o[O]) ? m : (m && ti(n, o, m, o, O), O);
                    }, null);
                  })(this.matrix, t),
                  _e(this, { values: t }, !0)
                );
              }),
              (r.shiftTo = function () {
                for (
                  var t = arguments.length, n = new Array(t), o = 0;
                  o < t;
                  o++
                )
                  n[o] = arguments[o];
                if (!this.isValid) return this;
                if (n.length === 0) return this;
                n = n.map(function (_t) {
                  return e.normalizeUnit(_t);
                });
                for (
                  var m, O, M = {}, q = {}, ut = this.toObject(), nt = U(Ge);
                  !(O = nt()).done;

                ) {
                  var gt = O.value;
                  if (n.indexOf(gt) >= 0) {
                    m = gt;
                    var Et = 0;
                    for (var Ct in q)
                      (Et += this.matrix[Ct][gt] * q[Ct]), (q[Ct] = 0);
                    i(ut[gt]) && (Et += ut[gt]);
                    var It = Math.trunc(Et);
                    for (var Mt in ((M[gt] = It), (q[gt] = Et - It), ut))
                      Ge.indexOf(Mt) > Ge.indexOf(gt) &&
                        ti(this.matrix, ut, Mt, M, gt);
                  } else i(ut[gt]) && (q[gt] = ut[gt]);
                }
                for (var kt in q)
                  q[kt] !== 0 &&
                    (M[m] += kt === m ? q[kt] : q[kt] / this.matrix[m][kt]);
                return _e(this, { values: M }, !0).normalize();
              }),
              (r.negate = function () {
                if (!this.isValid) return this;
                for (
                  var t = {}, n = 0, o = Object.keys(this.values);
                  n < o.length;
                  n++
                ) {
                  var m = o[n];
                  t[m] = -this.values[m];
                }
                return _e(this, { values: t }, !0);
              }),
              (r.equals = function (t) {
                if (!this.isValid || !t.isValid || !this.loc.equals(t.loc))
                  return !1;
                for (var n, o = U(Ge); !(n = o()).done; ) {
                  var m = n.value;
                  if (
                    ((O = this.values[m]),
                    (M = t.values[m]),
                    !(O === void 0 || O === 0
                      ? M === void 0 || M === 0
                      : O === M))
                  )
                    return !1;
                }
                var O, M;
                return !0;
              }),
              f(e, [
                {
                  key: "locale",
                  get: function () {
                    return this.isValid ? this.loc.locale : null;
                  },
                },
                {
                  key: "numberingSystem",
                  get: function () {
                    return this.isValid ? this.loc.numberingSystem : null;
                  },
                },
                {
                  key: "years",
                  get: function () {
                    return this.isValid ? this.values.years || 0 : NaN;
                  },
                },
                {
                  key: "quarters",
                  get: function () {
                    return this.isValid ? this.values.quarters || 0 : NaN;
                  },
                },
                {
                  key: "months",
                  get: function () {
                    return this.isValid ? this.values.months || 0 : NaN;
                  },
                },
                {
                  key: "weeks",
                  get: function () {
                    return this.isValid ? this.values.weeks || 0 : NaN;
                  },
                },
                {
                  key: "days",
                  get: function () {
                    return this.isValid ? this.values.days || 0 : NaN;
                  },
                },
                {
                  key: "hours",
                  get: function () {
                    return this.isValid ? this.values.hours || 0 : NaN;
                  },
                },
                {
                  key: "minutes",
                  get: function () {
                    return this.isValid ? this.values.minutes || 0 : NaN;
                  },
                },
                {
                  key: "seconds",
                  get: function () {
                    return this.isValid ? this.values.seconds || 0 : NaN;
                  },
                },
                {
                  key: "milliseconds",
                  get: function () {
                    return this.isValid ? this.values.milliseconds || 0 : NaN;
                  },
                },
                {
                  key: "isValid",
                  get: function () {
                    return this.invalid === null;
                  },
                },
                {
                  key: "invalidReason",
                  get: function () {
                    return this.invalid ? this.invalid.reason : null;
                  },
                },
                {
                  key: "invalidExplanation",
                  get: function () {
                    return this.invalid ? this.invalid.explanation : null;
                  },
                },
              ]),
              e
            );
          })();
          function je(e) {
            if (i(e)) return ne.fromMillis(e);
            if (ne.isDuration(e)) return e;
            if (typeof e == "object") return ne.fromObject(e);
            throw new dt(
              "Unknown duration argument " + e + " of type " + typeof e
            );
          }
          var sn = "Invalid Interval";
          function Rr(e, r) {
            return e && e.isValid
              ? r && r.isValid
                ? r < e
                  ? an.invalid(
                      "end before start",
                      "The end of an interval must be after its start, but you had start=" +
                        e.toISO() +
                        " and end=" +
                        r.toISO()
                    )
                  : null
                : an.invalid("missing or invalid end")
              : an.invalid("missing or invalid start");
          }
          var an = (function () {
              function e(t) {
                (this.s = t.start),
                  (this.e = t.end),
                  (this.invalid = t.invalid || null),
                  (this.isLuxonInterval = !0);
              }
              (e.invalid = function (t, n) {
                if ((n === void 0 && (n = null), !t))
                  throw new dt(
                    "need to specify a reason the Interval is invalid"
                  );
                var o = t instanceof ce ? t : new ce(t, n);
                if (Zt.throwOnInvalid) throw new Z(o);
                return new e({ invalid: o });
              }),
                (e.fromDateTimes = function (t, n) {
                  var o = dn(t),
                    m = dn(n),
                    O = Rr(o, m);
                  return O ?? new e({ start: o, end: m });
                }),
                (e.after = function (t, n) {
                  var o = je(n),
                    m = dn(t);
                  return e.fromDateTimes(m, m.plus(o));
                }),
                (e.before = function (t, n) {
                  var o = je(n),
                    m = dn(t);
                  return e.fromDateTimes(m.minus(o), m);
                }),
                (e.fromISO = function (t, n) {
                  var o = (t || "").split("/", 2),
                    m = o[0],
                    O = o[1];
                  if (m && O) {
                    var M, q, ut, nt;
                    try {
                      q = (M = Gt.fromISO(m, n)).isValid;
                    } catch {
                      q = !1;
                    }
                    try {
                      nt = (ut = Gt.fromISO(O, n)).isValid;
                    } catch {
                      nt = !1;
                    }
                    if (q && nt) return e.fromDateTimes(M, ut);
                    if (q) {
                      var gt = ne.fromISO(O, n);
                      if (gt.isValid) return e.after(M, gt);
                    } else if (nt) {
                      var Et = ne.fromISO(m, n);
                      if (Et.isValid) return e.before(ut, Et);
                    }
                  }
                  return e.invalid(
                    "unparsable",
                    'the input "' + t + `" can't be parsed as ISO 8601`
                  );
                }),
                (e.isInterval = function (t) {
                  return (t && t.isLuxonInterval) || !1;
                });
              var r = e.prototype;
              return (
                (r.length = function (t) {
                  return (
                    t === void 0 && (t = "milliseconds"),
                    this.isValid ? this.toDuration.apply(this, [t]).get(t) : NaN
                  );
                }),
                (r.count = function (t) {
                  if ((t === void 0 && (t = "milliseconds"), !this.isValid))
                    return NaN;
                  var n = this.start.startOf(t),
                    o = this.end.startOf(t);
                  return Math.floor(o.diff(n, t).get(t)) + 1;
                }),
                (r.hasSame = function (t) {
                  return (
                    !!this.isValid &&
                    (this.isEmpty() || this.e.minus(1).hasSame(this.s, t))
                  );
                }),
                (r.isEmpty = function () {
                  return this.s.valueOf() === this.e.valueOf();
                }),
                (r.isAfter = function (t) {
                  return !!this.isValid && this.s > t;
                }),
                (r.isBefore = function (t) {
                  return !!this.isValid && this.e <= t;
                }),
                (r.contains = function (t) {
                  return !!this.isValid && this.s <= t && this.e > t;
                }),
                (r.set = function (t) {
                  var n = t === void 0 ? {} : t,
                    o = n.start,
                    m = n.end;
                  return this.isValid
                    ? e.fromDateTimes(o || this.s, m || this.e)
                    : this;
                }),
                (r.splitAt = function () {
                  var t = this;
                  if (!this.isValid) return [];
                  for (
                    var n = arguments.length, o = new Array(n), m = 0;
                    m < n;
                    m++
                  )
                    o[m] = arguments[m];
                  for (
                    var O = o
                        .map(dn)
                        .filter(function (Et) {
                          return t.contains(Et);
                        })
                        .sort(),
                      M = [],
                      q = this.s,
                      ut = 0;
                    q < this.e;

                  ) {
                    var nt = O[ut] || this.e,
                      gt = +nt > +this.e ? this.e : nt;
                    M.push(e.fromDateTimes(q, gt)), (q = gt), (ut += 1);
                  }
                  return M;
                }),
                (r.splitBy = function (t) {
                  var n = je(t);
                  if (!this.isValid || !n.isValid || n.as("milliseconds") === 0)
                    return [];
                  for (var o, m = this.s, O = 1, M = []; m < this.e; ) {
                    var q = this.start.plus(
                      n.mapUnits(function (ut) {
                        return ut * O;
                      })
                    );
                    (o = +q > +this.e ? this.e : q),
                      M.push(e.fromDateTimes(m, o)),
                      (m = o),
                      (O += 1);
                  }
                  return M;
                }),
                (r.divideEqually = function (t) {
                  return this.isValid
                    ? this.splitBy(this.length() / t).slice(0, t)
                    : [];
                }),
                (r.overlaps = function (t) {
                  return this.e > t.s && this.s < t.e;
                }),
                (r.abutsStart = function (t) {
                  return !!this.isValid && +this.e == +t.s;
                }),
                (r.abutsEnd = function (t) {
                  return !!this.isValid && +t.e == +this.s;
                }),
                (r.engulfs = function (t) {
                  return !!this.isValid && this.s <= t.s && this.e >= t.e;
                }),
                (r.equals = function (t) {
                  return (
                    !(!this.isValid || !t.isValid) &&
                    this.s.equals(t.s) &&
                    this.e.equals(t.e)
                  );
                }),
                (r.intersection = function (t) {
                  if (!this.isValid) return this;
                  var n = this.s > t.s ? this.s : t.s,
                    o = this.e < t.e ? this.e : t.e;
                  return n >= o ? null : e.fromDateTimes(n, o);
                }),
                (r.union = function (t) {
                  if (!this.isValid) return this;
                  var n = this.s < t.s ? this.s : t.s,
                    o = this.e > t.e ? this.e : t.e;
                  return e.fromDateTimes(n, o);
                }),
                (e.merge = function (t) {
                  var n = t
                      .sort(function (O, M) {
                        return O.s - M.s;
                      })
                      .reduce(
                        function (O, M) {
                          var q = O[0],
                            ut = O[1];
                          return ut
                            ? ut.overlaps(M) || ut.abutsStart(M)
                              ? [q, ut.union(M)]
                              : [q.concat([ut]), M]
                            : [q, M];
                        },
                        [[], null]
                      ),
                    o = n[0],
                    m = n[1];
                  return m && o.push(m), o;
                }),
                (e.xor = function (t) {
                  for (
                    var n,
                      o,
                      m = null,
                      O = 0,
                      M = [],
                      q = t.map(function (gt) {
                        return [
                          { time: gt.s, type: "s" },
                          { time: gt.e, type: "e" },
                        ];
                      }),
                      ut = U(
                        (n = Array.prototype).concat
                          .apply(n, q)
                          .sort(function (gt, Et) {
                            return gt.time - Et.time;
                          })
                      );
                    !(o = ut()).done;

                  ) {
                    var nt = o.value;
                    (O += nt.type === "s" ? 1 : -1) === 1
                      ? (m = nt.time)
                      : (m &&
                          +m != +nt.time &&
                          M.push(e.fromDateTimes(m, nt.time)),
                        (m = null));
                  }
                  return e.merge(M);
                }),
                (r.difference = function () {
                  for (
                    var t = this, n = arguments.length, o = new Array(n), m = 0;
                    m < n;
                    m++
                  )
                    o[m] = arguments[m];
                  return e
                    .xor([this].concat(o))
                    .map(function (O) {
                      return t.intersection(O);
                    })
                    .filter(function (O) {
                      return O && !O.isEmpty();
                    });
                }),
                (r.toString = function () {
                  return this.isValid
                    ? "[" + this.s.toISO() + " – " + this.e.toISO() + ")"
                    : sn;
                }),
                (r.toISO = function (t) {
                  return this.isValid
                    ? this.s.toISO(t) + "/" + this.e.toISO(t)
                    : sn;
                }),
                (r.toISODate = function () {
                  return this.isValid
                    ? this.s.toISODate() + "/" + this.e.toISODate()
                    : sn;
                }),
                (r.toISOTime = function (t) {
                  return this.isValid
                    ? this.s.toISOTime(t) + "/" + this.e.toISOTime(t)
                    : sn;
                }),
                (r.toFormat = function (t, n) {
                  var o = (n === void 0 ? {} : n).separator,
                    m = o === void 0 ? " – " : o;
                  return this.isValid
                    ? "" + this.s.toFormat(t) + m + this.e.toFormat(t)
                    : sn;
                }),
                (r.toDuration = function (t, n) {
                  return this.isValid
                    ? this.e.diff(this.s, t, n)
                    : ne.invalid(this.invalidReason);
                }),
                (r.mapEndpoints = function (t) {
                  return e.fromDateTimes(t(this.s), t(this.e));
                }),
                f(e, [
                  {
                    key: "start",
                    get: function () {
                      return this.isValid ? this.s : null;
                    },
                  },
                  {
                    key: "end",
                    get: function () {
                      return this.isValid ? this.e : null;
                    },
                  },
                  {
                    key: "isValid",
                    get: function () {
                      return this.invalidReason === null;
                    },
                  },
                  {
                    key: "invalidReason",
                    get: function () {
                      return this.invalid ? this.invalid.reason : null;
                    },
                  },
                  {
                    key: "invalidExplanation",
                    get: function () {
                      return this.invalid ? this.invalid.explanation : null;
                    },
                  },
                ]),
                e
              );
            })(),
            un = (function () {
              function e() {}
              return (
                (e.hasDST = function (r) {
                  r === void 0 && (r = Zt.defaultZone);
                  var t = Gt.now().setZone(r).set({ month: 12 });
                  return (
                    !r.universal && t.offset !== t.set({ month: 6 }).offset
                  );
                }),
                (e.isValidIANAZone = function (r) {
                  return fe.isValidSpecifier(r) && fe.isValidZone(r);
                }),
                (e.normalizeZone = function (r) {
                  return Ce(r, Zt.defaultZone);
                }),
                (e.months = function (r, t) {
                  r === void 0 && (r = "long");
                  var n = t === void 0 ? {} : t,
                    o = n.locale,
                    m = o === void 0 ? null : o,
                    O = n.numberingSystem,
                    M = O === void 0 ? null : O,
                    q = n.locObj,
                    ut = q === void 0 ? null : q,
                    nt = n.outputCalendar,
                    gt = nt === void 0 ? "gregory" : nt;
                  return (ut || Xt.create(m, M, gt)).months(r);
                }),
                (e.monthsFormat = function (r, t) {
                  r === void 0 && (r = "long");
                  var n = t === void 0 ? {} : t,
                    o = n.locale,
                    m = o === void 0 ? null : o,
                    O = n.numberingSystem,
                    M = O === void 0 ? null : O,
                    q = n.locObj,
                    ut = q === void 0 ? null : q,
                    nt = n.outputCalendar,
                    gt = nt === void 0 ? "gregory" : nt;
                  return (ut || Xt.create(m, M, gt)).months(r, !0);
                }),
                (e.weekdays = function (r, t) {
                  r === void 0 && (r = "long");
                  var n = t === void 0 ? {} : t,
                    o = n.locale,
                    m = o === void 0 ? null : o,
                    O = n.numberingSystem,
                    M = O === void 0 ? null : O,
                    q = n.locObj;
                  return (
                    (q === void 0 ? null : q) || Xt.create(m, M, null)
                  ).weekdays(r);
                }),
                (e.weekdaysFormat = function (r, t) {
                  r === void 0 && (r = "long");
                  var n = t === void 0 ? {} : t,
                    o = n.locale,
                    m = o === void 0 ? null : o,
                    O = n.numberingSystem,
                    M = O === void 0 ? null : O,
                    q = n.locObj;
                  return (
                    (q === void 0 ? null : q) || Xt.create(m, M, null)
                  ).weekdays(r, !0);
                }),
                (e.meridiems = function (r) {
                  var t = (r === void 0 ? {} : r).locale,
                    n = t === void 0 ? null : t;
                  return Xt.create(n).meridiems();
                }),
                (e.eras = function (r, t) {
                  r === void 0 && (r = "short");
                  var n = (t === void 0 ? {} : t).locale,
                    o = n === void 0 ? null : n;
                  return Xt.create(o, null, "gregory").eras(r);
                }),
                (e.features = function () {
                  var r = !1,
                    t = !1,
                    n = !1,
                    o = !1;
                  if (h()) {
                    (r = !0), (t = k()), (o = d());
                    try {
                      n =
                        new Intl.DateTimeFormat("en", {
                          timeZone: "America/New_York",
                        }).resolvedOptions().timeZone === "America/New_York";
                    } catch {
                      n = !1;
                    }
                  }
                  return { intl: r, intlTokens: t, zones: n, relative: o };
                }),
                e
              );
            })();
          function ei(e, r) {
            var t = function (o) {
                return o
                  .toUTC(0, { keepLocalTime: !0 })
                  .startOf("day")
                  .valueOf();
              },
              n = t(r) - t(e);
            return Math.floor(ne.fromMillis(n).as("days"));
          }
          function Nr(e, r, t, n) {
            var o = (function (It, Mt, kt) {
                for (
                  var _t,
                    At,
                    Bt = {},
                    Ut = 0,
                    Qt = [
                      [
                        "years",
                        function (ge, we) {
                          return we.year - ge.year;
                        },
                      ],
                      [
                        "quarters",
                        function (ge, we) {
                          return we.quarter - ge.quarter;
                        },
                      ],
                      [
                        "months",
                        function (ge, we) {
                          return we.month - ge.month + 12 * (we.year - ge.year);
                        },
                      ],
                      [
                        "weeks",
                        function (ge, we) {
                          var Ke = ei(ge, we);
                          return (Ke - (Ke % 7)) / 7;
                        },
                      ],
                      ["days", ei],
                    ];
                  Ut < Qt.length;
                  Ut++
                ) {
                  var ie = Qt[Ut],
                    Yt = ie[0],
                    Vt = ie[1];
                  if (kt.indexOf(Yt) >= 0) {
                    var ke;
                    _t = Yt;
                    var xe,
                      Te = Vt(It, Mt);
                    (At = It.plus((((ke = {})[Yt] = Te), ke))) > Mt
                      ? ((It = It.plus((((xe = {})[Yt] = Te - 1), xe))),
                        (Te -= 1))
                      : (It = At),
                      (Bt[Yt] = Te);
                  }
                }
                return [It, Bt, At, _t];
              })(e, r, t),
              m = o[0],
              O = o[1],
              M = o[2],
              q = o[3],
              ut = r - m,
              nt = t.filter(function (It) {
                return (
                  ["hours", "minutes", "seconds", "milliseconds"].indexOf(It) >=
                  0
                );
              });
            if (nt.length === 0) {
              var gt;
              M < r && (M = m.plus((((gt = {})[q] = 1), gt))),
                M !== m && (O[q] = (O[q] || 0) + ut / (M - m));
            }
            var Et,
              Ct = ne.fromObject(Object.assign(O, n));
            return nt.length > 0
              ? (Et = ne.fromMillis(ut, n)).shiftTo.apply(Et, nt).plus(Ct)
              : Ct;
          }
          var Dn = {
              arab: "[٠-٩]",
              arabext: "[۰-۹]",
              bali: "[᭐-᭙]",
              beng: "[০-৯]",
              deva: "[०-९]",
              fullwide: "[０-９]",
              gujr: "[૦-૯]",
              hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
              khmr: "[០-៩]",
              knda: "[೦-೯]",
              laoo: "[໐-໙]",
              limb: "[᥆-᥏]",
              mlym: "[൦-൯]",
              mong: "[᠐-᠙]",
              mymr: "[၀-၉]",
              orya: "[୦-୯]",
              tamldec: "[௦-௯]",
              telu: "[౦-౯]",
              thai: "[๐-๙]",
              tibt: "[༠-༩]",
              latn: "\\d",
            },
            ni = {
              arab: [1632, 1641],
              arabext: [1776, 1785],
              bali: [6992, 7001],
              beng: [2534, 2543],
              deva: [2406, 2415],
              fullwide: [65296, 65303],
              gujr: [2790, 2799],
              khmr: [6112, 6121],
              knda: [3302, 3311],
              laoo: [3792, 3801],
              limb: [6470, 6479],
              mlym: [3430, 3439],
              mong: [6160, 6169],
              mymr: [4160, 4169],
              orya: [2918, 2927],
              tamldec: [3046, 3055],
              telu: [3174, 3183],
              thai: [3664, 3673],
              tibt: [3872, 3881],
            },
            Dr = Dn.hanidec.replace(/[\[|\]]/g, "").split("");
          function ye(e, r) {
            var t = e.numberingSystem;
            return (
              r === void 0 && (r = ""), new RegExp("" + Dn[t || "latn"] + r)
            );
          }
          function $t(e, r) {
            return (
              r === void 0 &&
                (r = function (t) {
                  return t;
                }),
              {
                regex: e,
                deser: function (t) {
                  var n = t[0];
                  return r(
                    (function (o) {
                      var m = parseInt(o, 10);
                      if (isNaN(m)) {
                        m = "";
                        for (var O = 0; O < o.length; O++) {
                          var M = o.charCodeAt(O);
                          if (o[O].search(Dn.hanidec) !== -1)
                            m += Dr.indexOf(o[O]);
                          else
                            for (var q in ni) {
                              var ut = ni[q],
                                nt = ut[0],
                                gt = ut[1];
                              M >= nt && M <= gt && (m += M - nt);
                            }
                        }
                        return parseInt(m, 10);
                      }
                      return m;
                    })(n)
                  );
                },
              }
            );
          }
          var ii = "( | )",
            ri = new RegExp(ii, "g");
          function Mr(e) {
            return e.replace(/\./g, "\\.?").replace(ri, ii);
          }
          function oi(e) {
            return e.replace(/\./g, "").replace(ri, " ").toLowerCase();
          }
          function be(e, r) {
            return e === null
              ? null
              : {
                  regex: RegExp(e.map(Mr).join("|")),
                  deser: function (t) {
                    var n = t[0];
                    return (
                      e.findIndex(function (o) {
                        return oi(n) === oi(o);
                      }) + r
                    );
                  },
                };
          }
          function si(e, r) {
            return {
              regex: e,
              deser: function (t) {
                return se(t[1], t[2]);
              },
              groups: r,
            };
          }
          function ai(e) {
            return {
              regex: e,
              deser: function (r) {
                return r[0];
              },
            };
          }
          var _r = {
              year: { "2-digit": "yy", numeric: "yyyyy" },
              month: {
                numeric: "M",
                "2-digit": "MM",
                short: "MMM",
                long: "MMMM",
              },
              day: { numeric: "d", "2-digit": "dd" },
              weekday: { short: "EEE", long: "EEEE" },
              dayperiod: "a",
              dayPeriod: "a",
              hour: { numeric: "h", "2-digit": "hh" },
              minute: { numeric: "m", "2-digit": "mm" },
              second: { numeric: "s", "2-digit": "ss" },
            },
            Mn = null;
          function jr(e, r) {
            if (e.literal) return e;
            var t = Kt.macroTokenToFormatOpts(e.val);
            if (!t) return e;
            var n = Kt.create(r, t)
              .formatDateTimeParts(
                (Mn || (Mn = Gt.fromMillis(1555555555555)), Mn)
              )
              .map(function (o) {
                return (function (m, O, M) {
                  var q = m.type,
                    ut = m.value;
                  if (q === "literal") return { literal: !0, val: ut };
                  var nt = M[q],
                    gt = _r[q];
                  return (
                    typeof gt == "object" && (gt = gt[nt]),
                    gt ? { literal: !1, val: gt } : void 0
                  );
                })(o, 0, t);
              });
            return n.includes(void 0) ? e : n;
          }
          function ui(e, r, t) {
            var n = (function (kt, _t) {
                var At;
                return (At = Array.prototype).concat.apply(
                  At,
                  kt.map(function (Bt) {
                    return jr(Bt, _t);
                  })
                );
              })(Kt.parseFormat(t), e),
              o = n.map(function (kt) {
                return (
                  (_t = kt),
                  (Bt = ye((At = e))),
                  (Ut = ye(At, "{2}")),
                  (Qt = ye(At, "{3}")),
                  (ie = ye(At, "{4}")),
                  (Yt = ye(At, "{6}")),
                  (Vt = ye(At, "{1,2}")),
                  (ke = ye(At, "{1,3}")),
                  (xe = ye(At, "{1,6}")),
                  (Te = ye(At, "{1,9}")),
                  (ge = ye(At, "{2,4}")),
                  (we = ye(At, "{4,6}")),
                  (Ke = function (fn) {
                    return {
                      regex: RegExp(
                        ((Li = fn.val),
                        Li.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"))
                      ),
                      deser: function (Ur) {
                        return Ur[0];
                      },
                      literal: !0,
                    };
                    var Li;
                  }),
                  ((Ti = (function (fn) {
                    if (_t.literal) return Ke(fn);
                    switch (fn.val) {
                      case "G":
                        return be(At.eras("short", !1), 0);
                      case "GG":
                        return be(At.eras("long", !1), 0);
                      case "y":
                        return $t(xe);
                      case "yy":
                        return $t(ge, te);
                      case "yyyy":
                        return $t(ie);
                      case "yyyyy":
                        return $t(we);
                      case "yyyyyy":
                        return $t(Yt);
                      case "M":
                        return $t(Vt);
                      case "MM":
                        return $t(Ut);
                      case "MMM":
                        return be(At.months("short", !0, !1), 1);
                      case "MMMM":
                        return be(At.months("long", !0, !1), 1);
                      case "L":
                        return $t(Vt);
                      case "LL":
                        return $t(Ut);
                      case "LLL":
                        return be(At.months("short", !1, !1), 1);
                      case "LLLL":
                        return be(At.months("long", !1, !1), 1);
                      case "d":
                        return $t(Vt);
                      case "dd":
                        return $t(Ut);
                      case "o":
                        return $t(ke);
                      case "ooo":
                        return $t(Qt);
                      case "HH":
                        return $t(Ut);
                      case "H":
                        return $t(Vt);
                      case "hh":
                        return $t(Ut);
                      case "h":
                        return $t(Vt);
                      case "mm":
                        return $t(Ut);
                      case "m":
                      case "q":
                        return $t(Vt);
                      case "qq":
                        return $t(Ut);
                      case "s":
                        return $t(Vt);
                      case "ss":
                        return $t(Ut);
                      case "S":
                        return $t(ke);
                      case "SSS":
                        return $t(Qt);
                      case "u":
                        return ai(Te);
                      case "a":
                        return be(At.meridiems(), 0);
                      case "kkkk":
                        return $t(ie);
                      case "kk":
                        return $t(ge, te);
                      case "W":
                        return $t(Vt);
                      case "WW":
                        return $t(Ut);
                      case "E":
                      case "c":
                        return $t(Bt);
                      case "EEE":
                        return be(At.weekdays("short", !1, !1), 1);
                      case "EEEE":
                        return be(At.weekdays("long", !1, !1), 1);
                      case "ccc":
                        return be(At.weekdays("short", !0, !1), 1);
                      case "cccc":
                        return be(At.weekdays("long", !0, !1), 1);
                      case "Z":
                      case "ZZ":
                        return si(
                          new RegExp(
                            "([+-]" + Vt.source + ")(?::(" + Ut.source + "))?"
                          ),
                          2
                        );
                      case "ZZZ":
                        return si(
                          new RegExp(
                            "([+-]" + Vt.source + ")(" + Ut.source + ")?"
                          ),
                          2
                        );
                      case "z":
                        return ai(/[a-z_+-/]{1,256}?/i);
                      default:
                        return Ke(fn);
                    }
                  })(_t) || {
                    invalidReason:
                      "missing Intl.DateTimeFormat.formatToParts support",
                  }).token = _t),
                  Ti
                );
                var _t, At, Bt, Ut, Qt, ie, Yt, Vt, ke, xe, Te, ge, we, Ke, Ti;
              }),
              m = o.find(function (kt) {
                return kt.invalidReason;
              });
            if (m)
              return { input: r, tokens: n, invalidReason: m.invalidReason };
            var O = (function (kt) {
                return [
                  "^" +
                    kt
                      .map(function (_t) {
                        return _t.regex;
                      })
                      .reduce(function (_t, At) {
                        return _t + "(" + At.source + ")";
                      }, "") +
                    "$",
                  kt,
                ];
              })(o),
              M = O[0],
              q = O[1],
              ut = RegExp(M, "i"),
              nt = (function (kt, _t, At) {
                var Bt = kt.match(_t);
                if (Bt) {
                  var Ut = {},
                    Qt = 1;
                  for (var ie in At)
                    if (E(At, ie)) {
                      var Yt = At[ie],
                        Vt = Yt.groups ? Yt.groups + 1 : 1;
                      !Yt.literal &&
                        Yt.token &&
                        (Ut[Yt.token.val[0]] = Yt.deser(Bt.slice(Qt, Qt + Vt))),
                        (Qt += Vt);
                    }
                  return [Bt, Ut];
                }
                return [Bt, {}];
              })(r, ut, q),
              gt = nt[0],
              Et = nt[1],
              Ct = Et
                ? (function (kt) {
                    var _t;
                    return (
                      (_t = u(kt.Z)
                        ? u(kt.z)
                          ? null
                          : fe.create(kt.z)
                        : new ee(kt.Z)),
                      u(kt.q) || (kt.M = 3 * (kt.q - 1) + 1),
                      u(kt.h) ||
                        (kt.h < 12 && kt.a === 1
                          ? (kt.h += 12)
                          : kt.h === 12 && kt.a === 0 && (kt.h = 0)),
                      kt.G === 0 && kt.y && (kt.y = -kt.y),
                      u(kt.u) || (kt.S = H(kt.u)),
                      [
                        Object.keys(kt).reduce(function (At, Bt) {
                          var Ut = (function (Qt) {
                            switch (Qt) {
                              case "S":
                                return "millisecond";
                              case "s":
                                return "second";
                              case "m":
                                return "minute";
                              case "h":
                              case "H":
                                return "hour";
                              case "d":
                                return "day";
                              case "o":
                                return "ordinal";
                              case "L":
                              case "M":
                                return "month";
                              case "y":
                                return "year";
                              case "E":
                              case "c":
                                return "weekday";
                              case "W":
                                return "weekNumber";
                              case "k":
                                return "weekYear";
                              case "q":
                                return "quarter";
                              default:
                                return null;
                            }
                          })(Bt);
                          return Ut && (At[Ut] = kt[Bt]), At;
                        }, {}),
                        _t,
                      ]
                    );
                  })(Et)
                : [null, null],
              It = Ct[0],
              Mt = Ct[1];
            if (E(Et, "a") && E(Et, "H"))
              throw new I(
                "Can't include meridiem when specifying 24-hour format"
              );
            return {
              input: r,
              tokens: n,
              regex: ut,
              rawMatches: gt,
              matches: Et,
              result: It,
              zone: Mt,
            };
          }
          var ci = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
            li = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
          function he(e, r) {
            return new ce(
              "unit out of range",
              "you specified " +
                r +
                " (of type " +
                typeof r +
                ") as a " +
                e +
                ", which is invalid"
            );
          }
          function di(e, r, t) {
            var n = new Date(Date.UTC(e, r - 1, t)).getUTCDay();
            return n === 0 ? 7 : n;
          }
          function fi(e, r, t) {
            return t + (tt(e) ? li : ci)[r - 1];
          }
          function hi(e, r) {
            var t = tt(e) ? li : ci,
              n = t.findIndex(function (o) {
                return o < r;
              });
            return { month: n + 1, day: r - t[n] };
          }
          function _n(e) {
            var r,
              t = e.year,
              n = e.month,
              o = e.day,
              m = fi(t, n, o),
              O = di(t, n, o),
              M = Math.floor((m - O + 10) / 7);
            return (
              M < 1
                ? (M = oe((r = t - 1)))
                : M > oe(t)
                ? ((r = t + 1), (M = 1))
                : (r = t),
              Object.assign({ weekYear: r, weekNumber: M, weekday: O }, ae(e))
            );
          }
          function gi(e) {
            var r,
              t = e.weekYear,
              n = e.weekNumber,
              o = e.weekday,
              m = di(t, 1, 4),
              O = St(t),
              M = 7 * n + o - m - 3;
            M < 1
              ? (M += St((r = t - 1)))
              : M > O
              ? ((r = t + 1), (M -= St(t)))
              : (r = t);
            var q = hi(r, M),
              ut = q.month,
              nt = q.day;
            return Object.assign({ year: r, month: ut, day: nt }, ae(e));
          }
          function jn(e) {
            var r = e.year,
              t = fi(r, e.month, e.day);
            return Object.assign({ year: r, ordinal: t }, ae(e));
          }
          function mi(e) {
            var r = e.year,
              t = hi(r, e.ordinal),
              n = t.month,
              o = t.day;
            return Object.assign({ year: r, month: n, day: o }, ae(e));
          }
          function pi(e) {
            var r = s(e.year),
              t = T(e.month, 1, 12),
              n = T(e.day, 1, Dt(e.year, e.month));
            return r
              ? t
                ? !n && he("day", e.day)
                : he("month", e.month)
              : he("year", e.year);
          }
          function vi(e) {
            var r = e.hour,
              t = e.minute,
              n = e.second,
              o = e.millisecond,
              m = T(r, 0, 23) || (r === 24 && t === 0 && n === 0 && o === 0),
              O = T(t, 0, 59),
              M = T(n, 0, 59),
              q = T(o, 0, 999);
            return m
              ? O
                ? M
                  ? !q && he("millisecond", o)
                  : he("second", n)
                : he("minute", t)
              : he("hour", r);
          }
          function yn(e) {
            return new ce(
              "unsupported zone",
              'the zone "' + e.name + '" is not supported'
            );
          }
          function Pn(e) {
            return e.weekData === null && (e.weekData = _n(e.c)), e.weekData;
          }
          function cn(e, r) {
            var t = {
              ts: e.ts,
              zone: e.zone,
              c: e.c,
              o: e.o,
              loc: e.loc,
              invalid: e.invalid,
            };
            return new Gt(Object.assign({}, t, r, { old: t }));
          }
          function yi(e, r, t) {
            var n = e - 60 * r * 1e3,
              o = t.offset(n);
            if (r === o) return [n, r];
            n -= 60 * (o - r) * 1e3;
            var m = t.offset(n);
            return o === m
              ? [n, o]
              : [e - 60 * Math.min(o, m) * 1e3, Math.max(o, m)];
          }
          function bi(e, r) {
            var t = new Date((e += 60 * r * 1e3));
            return {
              year: t.getUTCFullYear(),
              month: t.getUTCMonth() + 1,
              day: t.getUTCDate(),
              hour: t.getUTCHours(),
              minute: t.getUTCMinutes(),
              second: t.getUTCSeconds(),
              millisecond: t.getUTCMilliseconds(),
            };
          }
          function bn(e, r, t) {
            return yi(Pt(e), r, t);
          }
          function wi(e, r) {
            var t = e.o,
              n = e.c.year + Math.trunc(r.years),
              o = e.c.month + Math.trunc(r.months) + 3 * Math.trunc(r.quarters),
              m = Object.assign({}, e.c, {
                year: n,
                month: o,
                day:
                  Math.min(e.c.day, Dt(n, o)) +
                  Math.trunc(r.days) +
                  7 * Math.trunc(r.weeks),
              }),
              O = ne
                .fromObject({
                  years: r.years - Math.trunc(r.years),
                  quarters: r.quarters - Math.trunc(r.quarters),
                  months: r.months - Math.trunc(r.months),
                  weeks: r.weeks - Math.trunc(r.weeks),
                  days: r.days - Math.trunc(r.days),
                  hours: r.hours,
                  minutes: r.minutes,
                  seconds: r.seconds,
                  milliseconds: r.milliseconds,
                })
                .as("milliseconds"),
              M = yi(Pt(m), t, e.zone),
              q = M[0],
              ut = M[1];
            return (
              O !== 0 && ((q += O), (ut = e.zone.offset(q))), { ts: q, o: ut }
            );
          }
          function ln(e, r, t, n, o) {
            var m = t.setZone,
              O = t.zone;
            if (e && Object.keys(e).length !== 0) {
              var M = r || O,
                q = Gt.fromObject(
                  Object.assign(e, t, { zone: M, setZone: void 0 })
                );
              return m ? q : q.setZone(O);
            }
            return Gt.invalid(
              new ce(
                "unparsable",
                'the input "' + o + `" can't be parsed as ` + n
              )
            );
          }
          function Ye(e, r, t) {
            return (
              t === void 0 && (t = !0),
              e.isValid
                ? Kt.create(Xt.create("en-US"), {
                    allowZ: t,
                    forceSimple: !0,
                  }).formatDateTimeFromString(e, r)
                : null
            );
          }
          function Si(e, r) {
            var t = r.suppressSeconds,
              n = t !== void 0 && t,
              o = r.suppressMilliseconds,
              m = o !== void 0 && o,
              O = r.includeOffset,
              M = r.includePrefix,
              q = M !== void 0 && M,
              ut = r.includeZone,
              nt = ut !== void 0 && ut,
              gt = r.spaceZone,
              Et = gt !== void 0 && gt,
              Ct = r.format,
              It = Ct === void 0 ? "extended" : Ct,
              Mt = It === "basic" ? "HHmm" : "HH:mm";
            (n && e.second === 0 && e.millisecond === 0) ||
              ((Mt += It === "basic" ? "ss" : ":ss"),
              (m && e.millisecond === 0) || (Mt += ".SSS")),
              (nt || O) && Et && (Mt += " "),
              nt ? (Mt += "z") : O && (Mt += It === "basic" ? "ZZZ" : "ZZ");
            var kt = Ye(e, Mt);
            return q && (kt = "T" + kt), kt;
          }
          var Ei = {
              month: 1,
              day: 1,
              hour: 0,
              minute: 0,
              second: 0,
              millisecond: 0,
            },
            Pr = {
              weekNumber: 1,
              weekday: 1,
              hour: 0,
              minute: 0,
              second: 0,
              millisecond: 0,
            },
            Vr = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
            ki = [
              "year",
              "month",
              "day",
              "hour",
              "minute",
              "second",
              "millisecond",
            ],
            qr = [
              "weekYear",
              "weekNumber",
              "weekday",
              "hour",
              "minute",
              "second",
              "millisecond",
            ],
            $r = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
          function Oi(e) {
            var r = {
              year: "year",
              years: "year",
              month: "month",
              months: "month",
              day: "day",
              days: "day",
              hour: "hour",
              hours: "hour",
              minute: "minute",
              minutes: "minute",
              quarter: "quarter",
              quarters: "quarter",
              second: "second",
              seconds: "second",
              millisecond: "millisecond",
              milliseconds: "millisecond",
              weekday: "weekday",
              weekdays: "weekday",
              weeknumber: "weekNumber",
              weeksnumber: "weekNumber",
              weeknumbers: "weekNumber",
              weekyear: "weekYear",
              weekyears: "weekYear",
              ordinal: "ordinal",
            }[e.toLowerCase()];
            if (!r) throw new it(e);
            return r;
          }
          function Ci(e, r) {
            for (var t, n = U(ki); !(t = n()).done; ) {
              var o = t.value;
              u(e[o]) && (e[o] = Ei[o]);
            }
            var m = pi(e) || vi(e);
            if (m) return Gt.invalid(m);
            var O = Zt.now(),
              M = bn(e, r.offset(O), r),
              q = M[0],
              ut = M[1];
            return new Gt({ ts: q, zone: r, o: ut });
          }
          function xi(e, r, t) {
            var n = !!u(t.round) || t.round,
              o = function (nt, gt) {
                return (
                  (nt = W(nt, n || t.calendary ? 0 : 2, !0)),
                  r.loc.clone(t).relFormatter(t).format(nt, gt)
                );
              },
              m = function (nt) {
                return t.calendary
                  ? r.hasSame(e, nt)
                    ? 0
                    : r.startOf(nt).diff(e.startOf(nt), nt).get(nt)
                  : r.diff(e, nt).get(nt);
              };
            if (t.unit) return o(m(t.unit), t.unit);
            for (var O, M = U(t.units); !(O = M()).done; ) {
              var q = O.value,
                ut = m(q);
              if (Math.abs(ut) >= 1) return o(ut, q);
            }
            return o(e > r ? -0 : 0, t.units[t.units.length - 1]);
          }
          var Gt = (function () {
            function e(t) {
              var n = t.zone || Zt.defaultZone,
                o =
                  t.invalid ||
                  (Number.isNaN(t.ts) ? new ce("invalid input") : null) ||
                  (n.isValid ? null : yn(n));
              this.ts = u(t.ts) ? Zt.now() : t.ts;
              var m = null,
                O = null;
              if (!o)
                if (t.old && t.old.ts === this.ts && t.old.zone.equals(n)) {
                  var M = [t.old.c, t.old.o];
                  (m = M[0]), (O = M[1]);
                } else {
                  var q = n.offset(this.ts);
                  (m = bi(this.ts, q)),
                    (m = (o = Number.isNaN(m.year)
                      ? new ce("invalid input")
                      : null)
                      ? null
                      : m),
                    (O = o ? null : q);
                }
              (this._zone = n),
                (this.loc = t.loc || Xt.create()),
                (this.invalid = o),
                (this.weekData = null),
                (this.c = m),
                (this.o = O),
                (this.isLuxonDateTime = !0);
            }
            (e.now = function () {
              return new e({});
            }),
              (e.local = function (t, n, o, m, O, M, q) {
                return u(t)
                  ? e.now()
                  : Ci(
                      {
                        year: t,
                        month: n,
                        day: o,
                        hour: m,
                        minute: O,
                        second: M,
                        millisecond: q,
                      },
                      Zt.defaultZone
                    );
              }),
              (e.utc = function (t, n, o, m, O, M, q) {
                return u(t)
                  ? new e({ ts: Zt.now(), zone: ee.utcInstance })
                  : Ci(
                      {
                        year: t,
                        month: n,
                        day: o,
                        hour: m,
                        minute: O,
                        second: M,
                        millisecond: q,
                      },
                      ee.utcInstance
                    );
              }),
              (e.fromJSDate = function (t, n) {
                n === void 0 && (n = {});
                var o,
                  m =
                    ((o = t),
                    Object.prototype.toString.call(o) === "[object Date]"
                      ? t.valueOf()
                      : NaN);
                if (Number.isNaN(m)) return e.invalid("invalid input");
                var O = Ce(n.zone, Zt.defaultZone);
                return O.isValid
                  ? new e({ ts: m, zone: O, loc: Xt.fromObject(n) })
                  : e.invalid(yn(O));
              }),
              (e.fromMillis = function (t, n) {
                if ((n === void 0 && (n = {}), i(t)))
                  return t < -864e13 || t > 864e13
                    ? e.invalid("Timestamp out of range")
                    : new e({
                        ts: t,
                        zone: Ce(n.zone, Zt.defaultZone),
                        loc: Xt.fromObject(n),
                      });
                throw new dt(
                  "fromMillis requires a numerical input, but received a " +
                    typeof t +
                    " with value " +
                    t
                );
              }),
              (e.fromSeconds = function (t, n) {
                if ((n === void 0 && (n = {}), i(t)))
                  return new e({
                    ts: 1e3 * t,
                    zone: Ce(n.zone, Zt.defaultZone),
                    loc: Xt.fromObject(n),
                  });
                throw new dt("fromSeconds requires a numerical input");
              }),
              (e.fromObject = function (t) {
                var n = Ce(t.zone, Zt.defaultZone);
                if (!n.isValid) return e.invalid(yn(n));
                var o = Zt.now(),
                  m = n.offset(o),
                  O = ue(t, Oi, [
                    "zone",
                    "locale",
                    "outputCalendar",
                    "numberingSystem",
                  ]),
                  M = !u(O.ordinal),
                  q = !u(O.year),
                  ut = !u(O.month) || !u(O.day),
                  nt = q || ut,
                  gt = O.weekYear || O.weekNumber,
                  Et = Xt.fromObject(t);
                if ((nt || M) && gt)
                  throw new I(
                    "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
                  );
                if (ut && M)
                  throw new I("Can't mix ordinal dates with month/day");
                var Ct,
                  It,
                  Mt = gt || (O.weekday && !nt),
                  kt = bi(o, m);
                Mt
                  ? ((Ct = qr), (It = Pr), (kt = _n(kt)))
                  : M
                  ? ((Ct = $r), (It = Vr), (kt = jn(kt)))
                  : ((Ct = ki), (It = Ei));
                for (var _t, At = !1, Bt = U(Ct); !(_t = Bt()).done; ) {
                  var Ut = _t.value;
                  u(O[Ut]) ? (O[Ut] = At ? It[Ut] : kt[Ut]) : (At = !0);
                }
                var Qt =
                  (Mt
                    ? (function (Vt) {
                        var ke = s(Vt.weekYear),
                          xe = T(Vt.weekNumber, 1, oe(Vt.weekYear)),
                          Te = T(Vt.weekday, 1, 7);
                        return ke
                          ? xe
                            ? !Te && he("weekday", Vt.weekday)
                            : he("week", Vt.week)
                          : he("weekYear", Vt.weekYear);
                      })(O)
                    : M
                    ? (function (Vt) {
                        var ke = s(Vt.year),
                          xe = T(Vt.ordinal, 1, St(Vt.year));
                        return ke
                          ? !xe && he("ordinal", Vt.ordinal)
                          : he("year", Vt.year);
                      })(O)
                    : pi(O)) || vi(O);
                if (Qt) return e.invalid(Qt);
                var ie = bn(Mt ? gi(O) : M ? mi(O) : O, m, n),
                  Yt = new e({ ts: ie[0], zone: n, o: ie[1], loc: Et });
                return O.weekday && nt && t.weekday !== Yt.weekday
                  ? e.invalid(
                      "mismatched weekday",
                      "you can't specify both a weekday of " +
                        O.weekday +
                        " and a date of " +
                        Yt.toISO()
                    )
                  : Yt;
              }),
              (e.fromISO = function (t, n) {
                n === void 0 && (n = {});
                var o = (function (m) {
                  return Je(m, [mr, br], [pr, wr], [vr, Sr], [yr, Er]);
                })(t);
                return ln(o[0], o[1], n, "ISO 8601", t);
              }),
              (e.fromRFC2822 = function (t, n) {
                n === void 0 && (n = {});
                var o = (function (m) {
                  return Je(
                    (function (O) {
                      return O.replace(/\([^()]*\)|[\n\t]/g, " ")
                        .replace(/(\s\s+)/g, " ")
                        .trim();
                    })(m),
                    [cr, lr]
                  );
                })(t);
                return ln(o[0], o[1], n, "RFC 2822", t);
              }),
              (e.fromHTTP = function (t, n) {
                n === void 0 && (n = {});
                var o = (function (m) {
                  return Je(m, [dr, Xn], [fr, Xn], [hr, gr]);
                })(t);
                return ln(o[0], o[1], n, "HTTP", n);
              }),
              (e.fromFormat = function (t, n, o) {
                if ((o === void 0 && (o = {}), u(t) || u(n)))
                  throw new dt(
                    "fromFormat requires an input string and a format"
                  );
                var m = o,
                  O = m.locale,
                  M = O === void 0 ? null : O,
                  q = m.numberingSystem,
                  ut = q === void 0 ? null : q,
                  nt = (function (It, Mt, kt) {
                    var _t = ui(It, Mt, kt);
                    return [_t.result, _t.zone, _t.invalidReason];
                  })(
                    Xt.fromOpts({
                      locale: M,
                      numberingSystem: ut,
                      defaultToEN: !0,
                    }),
                    t,
                    n
                  ),
                  gt = nt[0],
                  Et = nt[1],
                  Ct = nt[2];
                return Ct ? e.invalid(Ct) : ln(gt, Et, o, "format " + n, t);
              }),
              (e.fromString = function (t, n, o) {
                return o === void 0 && (o = {}), e.fromFormat(t, n, o);
              }),
              (e.fromSQL = function (t, n) {
                n === void 0 && (n = {});
                var o = (function (m) {
                  return Je(m, [Or, xr], [Cr, Tr]);
                })(t);
                return ln(o[0], o[1], n, "SQL", t);
              }),
              (e.invalid = function (t, n) {
                if ((n === void 0 && (n = null), !t))
                  throw new dt(
                    "need to specify a reason the DateTime is invalid"
                  );
                var o = t instanceof ce ? t : new ce(t, n);
                if (Zt.throwOnInvalid) throw new ot(o);
                return new e({ invalid: o });
              }),
              (e.isDateTime = function (t) {
                return (t && t.isLuxonDateTime) || !1;
              });
            var r = e.prototype;
            return (
              (r.get = function (t) {
                return this[t];
              }),
              (r.resolvedLocaleOpts = function (t) {
                t === void 0 && (t = {});
                var n = Kt.create(this.loc.clone(t), t).resolvedOptions(this);
                return {
                  locale: n.locale,
                  numberingSystem: n.numberingSystem,
                  outputCalendar: n.calendar,
                };
              }),
              (r.toUTC = function (t, n) {
                return (
                  t === void 0 && (t = 0),
                  n === void 0 && (n = {}),
                  this.setZone(ee.instance(t), n)
                );
              }),
              (r.toLocal = function () {
                return this.setZone(Zt.defaultZone);
              }),
              (r.setZone = function (t, n) {
                var o = n === void 0 ? {} : n,
                  m = o.keepLocalTime,
                  O = m !== void 0 && m,
                  M = o.keepCalendarTime,
                  q = M !== void 0 && M;
                if ((t = Ce(t, Zt.defaultZone)).equals(this.zone)) return this;
                if (t.isValid) {
                  var ut = this.ts;
                  if (O || q) {
                    var nt = t.offset(this.ts);
                    ut = bn(this.toObject(), nt, t)[0];
                  }
                  return cn(this, { ts: ut, zone: t });
                }
                return e.invalid(yn(t));
              }),
              (r.reconfigure = function (t) {
                var n = t === void 0 ? {} : t,
                  o = n.locale,
                  m = n.numberingSystem,
                  O = n.outputCalendar;
                return cn(this, {
                  loc: this.loc.clone({
                    locale: o,
                    numberingSystem: m,
                    outputCalendar: O,
                  }),
                });
              }),
              (r.setLocale = function (t) {
                return this.reconfigure({ locale: t });
              }),
              (r.set = function (t) {
                if (!this.isValid) return this;
                var n,
                  o = ue(t, Oi, []),
                  m = !u(o.weekYear) || !u(o.weekNumber) || !u(o.weekday),
                  O = !u(o.ordinal),
                  M = !u(o.year),
                  q = !u(o.month) || !u(o.day),
                  ut = M || q,
                  nt = o.weekYear || o.weekNumber;
                if ((ut || O) && nt)
                  throw new I(
                    "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
                  );
                if (q && O)
                  throw new I("Can't mix ordinal dates with month/day");
                m
                  ? (n = gi(Object.assign(_n(this.c), o)))
                  : u(o.ordinal)
                  ? ((n = Object.assign(this.toObject(), o)),
                    u(o.day) && (n.day = Math.min(Dt(n.year, n.month), n.day)))
                  : (n = mi(Object.assign(jn(this.c), o)));
                var gt = bn(n, this.o, this.zone);
                return cn(this, { ts: gt[0], o: gt[1] });
              }),
              (r.plus = function (t) {
                return this.isValid ? cn(this, wi(this, je(t))) : this;
              }),
              (r.minus = function (t) {
                return this.isValid ? cn(this, wi(this, je(t).negate())) : this;
              }),
              (r.startOf = function (t) {
                if (!this.isValid) return this;
                var n = {},
                  o = ne.normalizeUnit(t);
                switch (o) {
                  case "years":
                    n.month = 1;
                  case "quarters":
                  case "months":
                    n.day = 1;
                  case "weeks":
                  case "days":
                    n.hour = 0;
                  case "hours":
                    n.minute = 0;
                  case "minutes":
                    n.second = 0;
                  case "seconds":
                    n.millisecond = 0;
                }
                if ((o === "weeks" && (n.weekday = 1), o === "quarters")) {
                  var m = Math.ceil(this.month / 3);
                  n.month = 3 * (m - 1) + 1;
                }
                return this.set(n);
              }),
              (r.endOf = function (t) {
                var n;
                return this.isValid
                  ? this.plus(((n = {}), (n[t] = 1), n))
                      .startOf(t)
                      .minus(1)
                  : this;
              }),
              (r.toFormat = function (t, n) {
                return (
                  n === void 0 && (n = {}),
                  this.isValid
                    ? Kt.create(
                        this.loc.redefaultToEN(n)
                      ).formatDateTimeFromString(this, t)
                    : "Invalid DateTime"
                );
              }),
              (r.toLocaleString = function (t) {
                return (
                  t === void 0 && (t = Lt),
                  this.isValid
                    ? Kt.create(this.loc.clone(t), t).formatDateTime(this)
                    : "Invalid DateTime"
                );
              }),
              (r.toLocaleParts = function (t) {
                return (
                  t === void 0 && (t = {}),
                  this.isValid
                    ? Kt.create(this.loc.clone(t), t).formatDateTimeParts(this)
                    : []
                );
              }),
              (r.toISO = function (t) {
                return (
                  t === void 0 && (t = {}),
                  this.isValid
                    ? this.toISODate(t) + "T" + this.toISOTime(t)
                    : null
                );
              }),
              (r.toISODate = function (t) {
                var n = (t === void 0 ? {} : t).format,
                  o =
                    (n === void 0 ? "extended" : n) === "basic"
                      ? "yyyyMMdd"
                      : "yyyy-MM-dd";
                return this.year > 9999 && (o = "+" + o), Ye(this, o);
              }),
              (r.toISOWeekDate = function () {
                return Ye(this, "kkkk-'W'WW-c");
              }),
              (r.toISOTime = function (t) {
                var n = t === void 0 ? {} : t,
                  o = n.suppressMilliseconds,
                  m = o !== void 0 && o,
                  O = n.suppressSeconds,
                  M = O !== void 0 && O,
                  q = n.includeOffset,
                  ut = q === void 0 || q,
                  nt = n.includePrefix,
                  gt = nt !== void 0 && nt,
                  Et = n.format;
                return Si(this, {
                  suppressSeconds: M,
                  suppressMilliseconds: m,
                  includeOffset: ut,
                  includePrefix: gt,
                  format: Et === void 0 ? "extended" : Et,
                });
              }),
              (r.toRFC2822 = function () {
                return Ye(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
              }),
              (r.toHTTP = function () {
                return Ye(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
              }),
              (r.toSQLDate = function () {
                return Ye(this, "yyyy-MM-dd");
              }),
              (r.toSQLTime = function (t) {
                var n = t === void 0 ? {} : t,
                  o = n.includeOffset,
                  m = o === void 0 || o,
                  O = n.includeZone;
                return Si(this, {
                  includeOffset: m,
                  includeZone: O !== void 0 && O,
                  spaceZone: !0,
                });
              }),
              (r.toSQL = function (t) {
                return (
                  t === void 0 && (t = {}),
                  this.isValid
                    ? this.toSQLDate() + " " + this.toSQLTime(t)
                    : null
                );
              }),
              (r.toString = function () {
                return this.isValid ? this.toISO() : "Invalid DateTime";
              }),
              (r.valueOf = function () {
                return this.toMillis();
              }),
              (r.toMillis = function () {
                return this.isValid ? this.ts : NaN;
              }),
              (r.toSeconds = function () {
                return this.isValid ? this.ts / 1e3 : NaN;
              }),
              (r.toJSON = function () {
                return this.toISO();
              }),
              (r.toBSON = function () {
                return this.toJSDate();
              }),
              (r.toObject = function (t) {
                if ((t === void 0 && (t = {}), !this.isValid)) return {};
                var n = Object.assign({}, this.c);
                return (
                  t.includeConfig &&
                    ((n.outputCalendar = this.outputCalendar),
                    (n.numberingSystem = this.loc.numberingSystem),
                    (n.locale = this.loc.locale)),
                  n
                );
              }),
              (r.toJSDate = function () {
                return new Date(this.isValid ? this.ts : NaN);
              }),
              (r.diff = function (t, n, o) {
                if (
                  (n === void 0 && (n = "milliseconds"),
                  o === void 0 && (o = {}),
                  !this.isValid || !t.isValid)
                )
                  return ne.invalid(
                    this.invalid || t.invalid,
                    "created by diffing an invalid DateTime"
                  );
                var m,
                  O = Object.assign(
                    {
                      locale: this.locale,
                      numberingSystem: this.numberingSystem,
                    },
                    o
                  ),
                  M = ((m = n), Array.isArray(m) ? m : [m]).map(
                    ne.normalizeUnit
                  ),
                  q = t.valueOf() > this.valueOf(),
                  ut = Nr(q ? this : t, q ? t : this, M, O);
                return q ? ut.negate() : ut;
              }),
              (r.diffNow = function (t, n) {
                return (
                  t === void 0 && (t = "milliseconds"),
                  n === void 0 && (n = {}),
                  this.diff(e.now(), t, n)
                );
              }),
              (r.until = function (t) {
                return this.isValid ? an.fromDateTimes(this, t) : this;
              }),
              (r.hasSame = function (t, n) {
                if (!this.isValid) return !1;
                var o = t.valueOf(),
                  m = this.setZone(t.zone, { keepLocalTime: !0 });
                return m.startOf(n) <= o && o <= m.endOf(n);
              }),
              (r.equals = function (t) {
                return (
                  this.isValid &&
                  t.isValid &&
                  this.valueOf() === t.valueOf() &&
                  this.zone.equals(t.zone) &&
                  this.loc.equals(t.loc)
                );
              }),
              (r.toRelative = function (t) {
                if ((t === void 0 && (t = {}), !this.isValid)) return null;
                var n = t.base || e.fromObject({ zone: this.zone }),
                  o = t.padding ? (this < n ? -t.padding : t.padding) : 0,
                  m = [
                    "years",
                    "months",
                    "days",
                    "hours",
                    "minutes",
                    "seconds",
                  ],
                  O = t.unit;
                return (
                  Array.isArray(t.unit) && ((m = t.unit), (O = void 0)),
                  xi(
                    n,
                    this.plus(o),
                    Object.assign(t, { numeric: "always", units: m, unit: O })
                  )
                );
              }),
              (r.toRelativeCalendar = function (t) {
                return (
                  t === void 0 && (t = {}),
                  this.isValid
                    ? xi(
                        t.base || e.fromObject({ zone: this.zone }),
                        this,
                        Object.assign(t, {
                          numeric: "auto",
                          units: ["years", "months", "days"],
                          calendary: !0,
                        })
                      )
                    : null
                );
              }),
              (e.min = function () {
                for (
                  var t = arguments.length, n = new Array(t), o = 0;
                  o < t;
                  o++
                )
                  n[o] = arguments[o];
                if (!n.every(e.isDateTime))
                  throw new dt("min requires all arguments be DateTimes");
                return L(
                  n,
                  function (m) {
                    return m.valueOf();
                  },
                  Math.min
                );
              }),
              (e.max = function () {
                for (
                  var t = arguments.length, n = new Array(t), o = 0;
                  o < t;
                  o++
                )
                  n[o] = arguments[o];
                if (!n.every(e.isDateTime))
                  throw new dt("max requires all arguments be DateTimes");
                return L(
                  n,
                  function (m) {
                    return m.valueOf();
                  },
                  Math.max
                );
              }),
              (e.fromFormatExplain = function (t, n, o) {
                o === void 0 && (o = {});
                var m = o,
                  O = m.locale,
                  M = O === void 0 ? null : O,
                  q = m.numberingSystem,
                  ut = q === void 0 ? null : q;
                return ui(
                  Xt.fromOpts({
                    locale: M,
                    numberingSystem: ut,
                    defaultToEN: !0,
                  }),
                  t,
                  n
                );
              }),
              (e.fromStringExplain = function (t, n, o) {
                return o === void 0 && (o = {}), e.fromFormatExplain(t, n, o);
              }),
              f(
                e,
                [
                  {
                    key: "isValid",
                    get: function () {
                      return this.invalid === null;
                    },
                  },
                  {
                    key: "invalidReason",
                    get: function () {
                      return this.invalid ? this.invalid.reason : null;
                    },
                  },
                  {
                    key: "invalidExplanation",
                    get: function () {
                      return this.invalid ? this.invalid.explanation : null;
                    },
                  },
                  {
                    key: "locale",
                    get: function () {
                      return this.isValid ? this.loc.locale : null;
                    },
                  },
                  {
                    key: "numberingSystem",
                    get: function () {
                      return this.isValid ? this.loc.numberingSystem : null;
                    },
                  },
                  {
                    key: "outputCalendar",
                    get: function () {
                      return this.isValid ? this.loc.outputCalendar : null;
                    },
                  },
                  {
                    key: "zone",
                    get: function () {
                      return this._zone;
                    },
                  },
                  {
                    key: "zoneName",
                    get: function () {
                      return this.isValid ? this.zone.name : null;
                    },
                  },
                  {
                    key: "year",
                    get: function () {
                      return this.isValid ? this.c.year : NaN;
                    },
                  },
                  {
                    key: "quarter",
                    get: function () {
                      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
                    },
                  },
                  {
                    key: "month",
                    get: function () {
                      return this.isValid ? this.c.month : NaN;
                    },
                  },
                  {
                    key: "day",
                    get: function () {
                      return this.isValid ? this.c.day : NaN;
                    },
                  },
                  {
                    key: "hour",
                    get: function () {
                      return this.isValid ? this.c.hour : NaN;
                    },
                  },
                  {
                    key: "minute",
                    get: function () {
                      return this.isValid ? this.c.minute : NaN;
                    },
                  },
                  {
                    key: "second",
                    get: function () {
                      return this.isValid ? this.c.second : NaN;
                    },
                  },
                  {
                    key: "millisecond",
                    get: function () {
                      return this.isValid ? this.c.millisecond : NaN;
                    },
                  },
                  {
                    key: "weekYear",
                    get: function () {
                      return this.isValid ? Pn(this).weekYear : NaN;
                    },
                  },
                  {
                    key: "weekNumber",
                    get: function () {
                      return this.isValid ? Pn(this).weekNumber : NaN;
                    },
                  },
                  {
                    key: "weekday",
                    get: function () {
                      return this.isValid ? Pn(this).weekday : NaN;
                    },
                  },
                  {
                    key: "ordinal",
                    get: function () {
                      return this.isValid ? jn(this.c).ordinal : NaN;
                    },
                  },
                  {
                    key: "monthShort",
                    get: function () {
                      return this.isValid
                        ? un.months("short", { locObj: this.loc })[
                            this.month - 1
                          ]
                        : null;
                    },
                  },
                  {
                    key: "monthLong",
                    get: function () {
                      return this.isValid
                        ? un.months("long", { locObj: this.loc })[
                            this.month - 1
                          ]
                        : null;
                    },
                  },
                  {
                    key: "weekdayShort",
                    get: function () {
                      return this.isValid
                        ? un.weekdays("short", { locObj: this.loc })[
                            this.weekday - 1
                          ]
                        : null;
                    },
                  },
                  {
                    key: "weekdayLong",
                    get: function () {
                      return this.isValid
                        ? un.weekdays("long", { locObj: this.loc })[
                            this.weekday - 1
                          ]
                        : null;
                    },
                  },
                  {
                    key: "offset",
                    get: function () {
                      return this.isValid ? +this.o : NaN;
                    },
                  },
                  {
                    key: "offsetNameShort",
                    get: function () {
                      return this.isValid
                        ? this.zone.offsetName(this.ts, {
                            format: "short",
                            locale: this.locale,
                          })
                        : null;
                    },
                  },
                  {
                    key: "offsetNameLong",
                    get: function () {
                      return this.isValid
                        ? this.zone.offsetName(this.ts, {
                            format: "long",
                            locale: this.locale,
                          })
                        : null;
                    },
                  },
                  {
                    key: "isOffsetFixed",
                    get: function () {
                      return this.isValid ? this.zone.universal : null;
                    },
                  },
                  {
                    key: "isInDST",
                    get: function () {
                      return (
                        !this.isOffsetFixed &&
                        (this.offset > this.set({ month: 1 }).offset ||
                          this.offset > this.set({ month: 5 }).offset)
                      );
                    },
                  },
                  {
                    key: "isInLeapYear",
                    get: function () {
                      return tt(this.year);
                    },
                  },
                  {
                    key: "daysInMonth",
                    get: function () {
                      return Dt(this.year, this.month);
                    },
                  },
                  {
                    key: "daysInYear",
                    get: function () {
                      return this.isValid ? St(this.year) : NaN;
                    },
                  },
                  {
                    key: "weeksInWeekYear",
                    get: function () {
                      return this.isValid ? oe(this.weekYear) : NaN;
                    },
                  },
                ],
                [
                  {
                    key: "DATE_SHORT",
                    get: function () {
                      return Lt;
                    },
                  },
                  {
                    key: "DATE_MED",
                    get: function () {
                      return jt;
                    },
                  },
                  {
                    key: "DATE_MED_WITH_WEEKDAY",
                    get: function () {
                      return z;
                    },
                  },
                  {
                    key: "DATE_FULL",
                    get: function () {
                      return Y;
                    },
                  },
                  {
                    key: "DATE_HUGE",
                    get: function () {
                      return V;
                    },
                  },
                  {
                    key: "TIME_SIMPLE",
                    get: function () {
                      return g;
                    },
                  },
                  {
                    key: "TIME_WITH_SECONDS",
                    get: function () {
                      return D;
                    },
                  },
                  {
                    key: "TIME_WITH_SHORT_OFFSET",
                    get: function () {
                      return w;
                    },
                  },
                  {
                    key: "TIME_WITH_LONG_OFFSET",
                    get: function () {
                      return at;
                    },
                  },
                  {
                    key: "TIME_24_SIMPLE",
                    get: function () {
                      return lt;
                    },
                  },
                  {
                    key: "TIME_24_WITH_SECONDS",
                    get: function () {
                      return yt;
                    },
                  },
                  {
                    key: "TIME_24_WITH_SHORT_OFFSET",
                    get: function () {
                      return Rt;
                    },
                  },
                  {
                    key: "TIME_24_WITH_LONG_OFFSET",
                    get: function () {
                      return G;
                    },
                  },
                  {
                    key: "DATETIME_SHORT",
                    get: function () {
                      return K;
                    },
                  },
                  {
                    key: "DATETIME_SHORT_WITH_SECONDS",
                    get: function () {
                      return rt;
                    },
                  },
                  {
                    key: "DATETIME_MED",
                    get: function () {
                      return Q;
                    },
                  },
                  {
                    key: "DATETIME_MED_WITH_SECONDS",
                    get: function () {
                      return Ft;
                    },
                  },
                  {
                    key: "DATETIME_MED_WITH_WEEKDAY",
                    get: function () {
                      return zt;
                    },
                  },
                  {
                    key: "DATETIME_FULL",
                    get: function () {
                      return Ht;
                    },
                  },
                  {
                    key: "DATETIME_FULL_WITH_SECONDS",
                    get: function () {
                      return Wt;
                    },
                  },
                  {
                    key: "DATETIME_HUGE",
                    get: function () {
                      return re;
                    },
                  },
                  {
                    key: "DATETIME_HUGE_WITH_SECONDS",
                    get: function () {
                      return b;
                    },
                  },
                ]
              ),
              e
            );
          })();
          function dn(e) {
            if (Gt.isDateTime(e)) return e;
            if (e && e.valueOf && i(e.valueOf())) return Gt.fromJSDate(e);
            if (e && typeof e == "object") return Gt.fromObject(e);
            throw new dt(
              "Unknown datetime argument: " + e + ", of type " + typeof e
            );
          }
          ($.DateTime = Gt),
            ($.Duration = ne),
            ($.FixedOffsetZone = ee),
            ($.IANAZone = fe),
            ($.Info = un),
            ($.Interval = an),
            ($.InvalidZone = He),
            ($.LocalZone = mn),
            ($.Settings = Zt),
            ($.VERSION = "1.28.1"),
            ($.Zone = Ie);
        },
        function (R, $, y) {
          var l = y(43);
          R.exports = function (f) {
            if (!l(f)) throw new TypeError(f + " is not an Object");
            return f;
          };
        },
        function (R, $, y) {
          var l = y(7),
            f = { function: !0, object: !0 };
          R.exports = function (p) {
            return (l(p) && f[typeof p]) || !1;
          };
        },
        function (R, $, y) {
          R.exports = y(45);
        },
        function (R, $, y) {
          var l = y(1),
            f = y(13),
            p = y(46),
            C = y(19);
          function N(j) {
            var B = new p(j),
              v = f(p.prototype.request, B);
            return l.extend(v, p.prototype, B), l.extend(v, B), v;
          }
          var A = N(y(10));
          (A.Axios = p),
            (A.create = function (j) {
              return N(C(A.defaults, j));
            }),
            (A.Cancel = y(20)),
            (A.CancelToken = y(61)),
            (A.isCancel = y(18)),
            (A.all = function (j) {
              return Promise.all(j);
            }),
            (A.spread = y(62)),
            (A.isAxiosError = y(63)),
            (R.exports = A),
            (R.exports.default = A);
        },
        function (R, $, y) {
          var l = y(1),
            f = y(14),
            p = y(47),
            C = y(48),
            N = y(19),
            A = y(59),
            j = A.validators;
          function B(v) {
            (this.defaults = v),
              (this.interceptors = { request: new p(), response: new p() });
          }
          (B.prototype.request = function (v) {
            typeof v == "string"
              ? ((v = arguments[1] || {}).url = arguments[0])
              : (v = v || {}),
              (v = N(this.defaults, v)).method
                ? (v.method = v.method.toLowerCase())
                : this.defaults.method
                ? (v.method = this.defaults.method.toLowerCase())
                : (v.method = "get");
            var U = v.transitional;
            U !== void 0 &&
              A.assertOptions(
                U,
                {
                  silentJSONParsing: j.transitional(j.boolean, "1.0.0"),
                  forcedJSONParsing: j.transitional(j.boolean, "1.0.0"),
                  clarifyTimeoutError: j.transitional(j.boolean, "1.0.0"),
                },
                !1
              );
            var J = [],
              ot = !0;
            this.interceptors.request.forEach(function (F) {
              (typeof F.runWhen == "function" && F.runWhen(v) === !1) ||
                ((ot = ot && F.synchronous),
                J.unshift(F.fulfilled, F.rejected));
            });
            var Z,
              X = [];
            if (
              (this.interceptors.response.forEach(function (F) {
                X.push(F.fulfilled, F.rejected);
              }),
              !ot)
            ) {
              var I = [C, void 0];
              for (
                Array.prototype.unshift.apply(I, J),
                  I = I.concat(X),
                  Z = Promise.resolve(v);
                I.length;

              )
                Z = Z.then(I.shift(), I.shift());
              return Z;
            }
            for (var it = v; J.length; ) {
              var dt = J.shift(),
                st = J.shift();
              try {
                it = dt(it);
              } catch (F) {
                st(F);
                break;
              }
            }
            try {
              Z = C(it);
            } catch (F) {
              return Promise.reject(F);
            }
            for (; X.length; ) Z = Z.then(X.shift(), X.shift());
            return Z;
          }),
            (B.prototype.getUri = function (v) {
              return (
                (v = N(this.defaults, v)),
                f(v.url, v.params, v.paramsSerializer).replace(/^\?/, "")
              );
            }),
            l.forEach(["delete", "get", "head", "options"], function (v) {
              B.prototype[v] = function (U, J) {
                return this.request(
                  N(J || {}, { method: v, url: U, data: (J || {}).data })
                );
              };
            }),
            l.forEach(["post", "put", "patch"], function (v) {
              B.prototype[v] = function (U, J, ot) {
                return this.request(
                  N(ot || {}, { method: v, url: U, data: J })
                );
              };
            }),
            (R.exports = B);
        },
        function (R, $, y) {
          var l = y(1);
          function f() {
            this.handlers = [];
          }
          (f.prototype.use = function (p, C, N) {
            return (
              this.handlers.push({
                fulfilled: p,
                rejected: C,
                synchronous: !!N && N.synchronous,
                runWhen: N ? N.runWhen : null,
              }),
              this.handlers.length - 1
            );
          }),
            (f.prototype.eject = function (p) {
              this.handlers[p] && (this.handlers[p] = null);
            }),
            (f.prototype.forEach = function (p) {
              l.forEach(this.handlers, function (C) {
                C !== null && p(C);
              });
            }),
            (R.exports = f);
        },
        function (R, $, y) {
          var l = y(1),
            f = y(49),
            p = y(18),
            C = y(10);
          function N(A) {
            A.cancelToken && A.cancelToken.throwIfRequested();
          }
          R.exports = function (A) {
            return (
              N(A),
              (A.headers = A.headers || {}),
              (A.data = f.call(A, A.data, A.headers, A.transformRequest)),
              (A.headers = l.merge(
                A.headers.common || {},
                A.headers[A.method] || {},
                A.headers
              )),
              l.forEach(
                ["delete", "get", "head", "post", "put", "patch", "common"],
                function (j) {
                  delete A.headers[j];
                }
              ),
              (A.adapter || C.adapter)(A).then(
                function (j) {
                  return (
                    N(A),
                    (j.data = f.call(
                      A,
                      j.data,
                      j.headers,
                      A.transformResponse
                    )),
                    j
                  );
                },
                function (j) {
                  return (
                    p(j) ||
                      (N(A),
                      j &&
                        j.response &&
                        (j.response.data = f.call(
                          A,
                          j.response.data,
                          j.response.headers,
                          A.transformResponse
                        ))),
                    Promise.reject(j)
                  );
                }
              )
            );
          };
        },
        function (R, $, y) {
          var l = y(1),
            f = y(10);
          R.exports = function (p, C, N) {
            var A = this || f;
            return (
              l.forEach(N, function (j) {
                p = j.call(A, p, C);
              }),
              p
            );
          };
        },
        function (R, $) {
          var y,
            l,
            f = (R.exports = {});
          function p() {
            throw new Error("setTimeout has not been defined");
          }
          function C() {
            throw new Error("clearTimeout has not been defined");
          }
          function N(X) {
            if (y === setTimeout) return setTimeout(X, 0);
            if ((y === p || !y) && setTimeout)
              return (y = setTimeout), setTimeout(X, 0);
            try {
              return y(X, 0);
            } catch {
              try {
                return y.call(null, X, 0);
              } catch {
                return y.call(this, X, 0);
              }
            }
          }
          (function () {
            try {
              y = typeof setTimeout == "function" ? setTimeout : p;
            } catch {
              y = p;
            }
            try {
              l = typeof clearTimeout == "function" ? clearTimeout : C;
            } catch {
              l = C;
            }
          })();
          var A,
            j = [],
            B = !1,
            v = -1;
          function U() {
            B &&
              A &&
              ((B = !1),
              A.length ? (j = A.concat(j)) : (v = -1),
              j.length && J());
          }
          function J() {
            if (!B) {
              var X = N(U);
              B = !0;
              for (var I = j.length; I; ) {
                for (A = j, j = []; ++v < I; ) A && A[v].run();
                (v = -1), (I = j.length);
              }
              (A = null),
                (B = !1),
                (function (it) {
                  if (l === clearTimeout) return clearTimeout(it);
                  if ((l === C || !l) && clearTimeout)
                    return (l = clearTimeout), clearTimeout(it);
                  try {
                    l(it);
                  } catch {
                    try {
                      return l.call(null, it);
                    } catch {
                      return l.call(this, it);
                    }
                  }
                })(X);
            }
          }
          function ot(X, I) {
            (this.fun = X), (this.array = I);
          }
          function Z() {}
          (f.nextTick = function (X) {
            var I = new Array(arguments.length - 1);
            if (arguments.length > 1)
              for (var it = 1; it < arguments.length; it++)
                I[it - 1] = arguments[it];
            j.push(new ot(X, I)), j.length !== 1 || B || N(J);
          }),
            (ot.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (f.title = "browser"),
            (f.browser = !0),
            (f.env = {}),
            (f.argv = []),
            (f.version = ""),
            (f.versions = {}),
            (f.on = Z),
            (f.addListener = Z),
            (f.once = Z),
            (f.off = Z),
            (f.removeListener = Z),
            (f.removeAllListeners = Z),
            (f.emit = Z),
            (f.prependListener = Z),
            (f.prependOnceListener = Z),
            (f.listeners = function (X) {
              return [];
            }),
            (f.binding = function (X) {
              throw new Error("process.binding is not supported");
            }),
            (f.cwd = function () {
              return "/";
            }),
            (f.chdir = function (X) {
              throw new Error("process.chdir is not supported");
            }),
            (f.umask = function () {
              return 0;
            });
        },
        function (R, $, y) {
          var l = y(1);
          R.exports = function (f, p) {
            l.forEach(f, function (C, N) {
              N !== p &&
                N.toUpperCase() === p.toUpperCase() &&
                ((f[p] = C), delete f[N]);
            });
          };
        },
        function (R, $, y) {
          var l = y(17);
          R.exports = function (f, p, C) {
            var N = C.config.validateStatus;
            C.status && N && !N(C.status)
              ? p(
                  l(
                    "Request failed with status code " + C.status,
                    C.config,
                    null,
                    C.request,
                    C
                  )
                )
              : f(C);
          };
        },
        function (R, $, y) {
          var l = y(1);
          R.exports = l.isStandardBrowserEnv()
            ? {
                write: function (f, p, C, N, A, j) {
                  var B = [];
                  B.push(f + "=" + encodeURIComponent(p)),
                    l.isNumber(C) &&
                      B.push("expires=" + new Date(C).toGMTString()),
                    l.isString(N) && B.push("path=" + N),
                    l.isString(A) && B.push("domain=" + A),
                    j === !0 && B.push("secure"),
                    (document.cookie = B.join("; "));
                },
                read: function (f) {
                  var p = document.cookie.match(
                    new RegExp("(^|;\\s*)(" + f + ")=([^;]*)")
                  );
                  return p ? decodeURIComponent(p[3]) : null;
                },
                remove: function (f) {
                  this.write(f, "", Date.now() - 864e5);
                },
              }
            : {
                write: function () {},
                read: function () {
                  return null;
                },
                remove: function () {},
              };
        },
        function (R, $, y) {
          var l = y(55),
            f = y(56);
          R.exports = function (p, C) {
            return p && !l(C) ? f(p, C) : C;
          };
        },
        function (R, $, y) {
          R.exports = function (l) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(l);
          };
        },
        function (R, $, y) {
          R.exports = function (l, f) {
            return f ? l.replace(/\/+$/, "") + "/" + f.replace(/^\/+/, "") : l;
          };
        },
        function (R, $, y) {
          var l = y(1),
            f = [
              "age",
              "authorization",
              "content-length",
              "content-type",
              "etag",
              "expires",
              "from",
              "host",
              "if-modified-since",
              "if-unmodified-since",
              "last-modified",
              "location",
              "max-forwards",
              "proxy-authorization",
              "referer",
              "retry-after",
              "user-agent",
            ];
          R.exports = function (p) {
            var C,
              N,
              A,
              j = {};
            return (
              p &&
                l.forEach(
                  p.split(`
`),
                  function (B) {
                    if (
                      ((A = B.indexOf(":")),
                      (C = l.trim(B.substr(0, A)).toLowerCase()),
                      (N = l.trim(B.substr(A + 1))),
                      C)
                    ) {
                      if (j[C] && f.indexOf(C) >= 0) return;
                      j[C] =
                        C === "set-cookie"
                          ? (j[C] ? j[C] : []).concat([N])
                          : j[C]
                          ? j[C] + ", " + N
                          : N;
                    }
                  }
                ),
              j
            );
          };
        },
        function (R, $, y) {
          var l = y(1);
          R.exports = l.isStandardBrowserEnv()
            ? (function () {
                var f,
                  p = /(msie|trident)/i.test(navigator.userAgent),
                  C = document.createElement("a");
                function N(A) {
                  var j = A;
                  return (
                    p && (C.setAttribute("href", j), (j = C.href)),
                    C.setAttribute("href", j),
                    {
                      href: C.href,
                      protocol: C.protocol ? C.protocol.replace(/:$/, "") : "",
                      host: C.host,
                      search: C.search ? C.search.replace(/^\?/, "") : "",
                      hash: C.hash ? C.hash.replace(/^#/, "") : "",
                      hostname: C.hostname,
                      port: C.port,
                      pathname:
                        C.pathname.charAt(0) === "/"
                          ? C.pathname
                          : "/" + C.pathname,
                    }
                  );
                }
                return (
                  (f = N(window.location.href)),
                  function (A) {
                    var j = l.isString(A) ? N(A) : A;
                    return j.protocol === f.protocol && j.host === f.host;
                  }
                );
              })()
            : function () {
                return !0;
              };
        },
        function (R, $, y) {
          var l = y(60),
            f = {};
          [
            "object",
            "boolean",
            "number",
            "function",
            "string",
            "symbol",
          ].forEach(function (A, j) {
            f[A] = function (B) {
              return typeof B === A || "a" + (j < 1 ? "n " : " ") + A;
            };
          });
          var p = {},
            C = l.version.split(".");
          function N(A, j) {
            for (
              var B = j ? j.split(".") : C, v = A.split("."), U = 0;
              U < 3;
              U++
            ) {
              if (B[U] > v[U]) return !0;
              if (B[U] < v[U]) return !1;
            }
            return !1;
          }
          (f.transitional = function (A, j, B) {
            var v = j && N(j);
            function U(J, ot) {
              return (
                "[Axios v" +
                l.version +
                "] Transitional option '" +
                J +
                "'" +
                ot +
                (B ? ". " + B : "")
              );
            }
            return function (J, ot, Z) {
              if (A === !1) throw new Error(U(ot, " has been removed in " + j));
              return (
                v &&
                  !p[ot] &&
                  ((p[ot] = !0),
                  console.warn(
                    U(
                      ot,
                      " has been deprecated since v" +
                        j +
                        " and will be removed in the near future"
                    )
                  )),
                !A || A(J, ot, Z)
              );
            };
          }),
            (R.exports = {
              isOlderVersion: N,
              assertOptions: function (A, j, B) {
                if (typeof A != "object")
                  throw new TypeError("options must be an object");
                for (var v = Object.keys(A), U = v.length; U-- > 0; ) {
                  var J = v[U],
                    ot = j[J];
                  if (ot) {
                    var Z = A[J],
                      X = Z === void 0 || ot(Z, J, A);
                    if (X !== !0)
                      throw new TypeError("option " + J + " must be " + X);
                  } else if (B !== !0) throw Error("Unknown option " + J);
                }
              },
              validators: f,
            });
        },
        function (R) {
          R.exports = JSON.parse(
            '{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}'
          );
        },
        function (R, $, y) {
          var l = y(20);
          function f(p) {
            if (typeof p != "function")
              throw new TypeError("executor must be a function.");
            var C;
            this.promise = new Promise(function (A) {
              C = A;
            });
            var N = this;
            p(function (A) {
              N.reason || ((N.reason = new l(A)), C(N.reason));
            });
          }
          (f.prototype.throwIfRequested = function () {
            if (this.reason) throw this.reason;
          }),
            (f.source = function () {
              var p;
              return {
                token: new f(function (C) {
                  p = C;
                }),
                cancel: p,
              };
            }),
            (R.exports = f);
        },
        function (R, $, y) {
          R.exports = function (l) {
            return function (f) {
              return l.apply(null, f);
            };
          };
        },
        function (R, $, y) {
          R.exports = function (l) {
            return typeof l == "object" && l.isAxiosError === !0;
          };
        },
        function (R, $, y) {
          y.r($);
          var l = y(5),
            f = y(22);
          function p(j, B) {
            if (!(j instanceof B))
              throw new TypeError("Cannot call a class as a function");
          }
          function C(j, B) {
            for (var v = 0; v < B.length; v++) {
              var U = B[v];
              (U.enumerable = U.enumerable || !1),
                (U.configurable = !0),
                "value" in U && (U.writable = !0),
                Object.defineProperty(j, U.key, U);
            }
          }
          var N = function () {
              return {
                loadPath: "/locales/{{lng}}/{{ns}}.json",
                addPath: "/locales/add/{{lng}}/{{ns}}",
                allowMultiLoading: !1,
                parse: function (j) {
                  return JSON.parse(j);
                },
                stringify: JSON.stringify,
                parsePayload: function (j, B, v) {
                  return (function (U, J, ot) {
                    return (
                      J in U
                        ? Object.defineProperty(U, J, {
                            value: ot,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (U[J] = ot),
                      U
                    );
                  })({}, B, v || "");
                },
                request: f.a,
                reloadInterval: typeof window > "u" && 36e5,
                customHeaders: {},
                queryStringParams: {},
                crossDomain: !1,
                withCredentials: !1,
                overrideMimeType: !1,
                requestOptions: {
                  mode: "cors",
                  credentials: "same-origin",
                  cache: "default",
                },
              };
            },
            A = (function () {
              function j(U) {
                var J =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {},
                  ot =
                    arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : {};
                p(this, j),
                  (this.services = U),
                  (this.options = J),
                  (this.allOptions = ot),
                  (this.type = "backend"),
                  this.init(U, J, ot);
              }
              var B, v;
              return (
                (B = j),
                (v = [
                  {
                    key: "init",
                    value: function (U) {
                      var J = this,
                        ot =
                          arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : {},
                        Z =
                          arguments.length > 2 && arguments[2] !== void 0
                            ? arguments[2]
                            : {};
                      (this.services = U),
                        (this.options = Object(l.a)(
                          ot,
                          this.options || {},
                          N()
                        )),
                        (this.allOptions = Z),
                        this.services &&
                          this.options.reloadInterval &&
                          setInterval(function () {
                            return J.reload();
                          }, this.options.reloadInterval);
                    },
                  },
                  {
                    key: "readMulti",
                    value: function (U, J, ot) {
                      this._readAny(U, U, J, J, ot);
                    },
                  },
                  {
                    key: "read",
                    value: function (U, J, ot) {
                      this._readAny([U], U, [J], J, ot);
                    },
                  },
                  {
                    key: "_readAny",
                    value: function (U, J, ot, Z, X) {
                      var I = this,
                        it = this.options.loadPath;
                      typeof this.options.loadPath == "function" &&
                        (it = this.options.loadPath(U, ot)),
                        (it = Object(l.c)(it)).then(function (dt) {
                          if (!dt) return X(null, {});
                          var st = I.services.interpolator.interpolate(dt, {
                            lng: U.join("+"),
                            ns: ot.join("+"),
                          });
                          I.loadUrl(st, X, J, Z);
                        });
                    },
                  },
                  {
                    key: "loadUrl",
                    value: function (U, J, ot, Z) {
                      var X = this;
                      this.options.request(
                        this.options,
                        U,
                        void 0,
                        function (I, it) {
                          if (
                            it &&
                            ((it.status >= 500 && it.status < 600) ||
                              !it.status)
                          )
                            return J(
                              "failed loading " +
                                U +
                                "; status code: " +
                                it.status,
                              !0
                            );
                          if (it && it.status >= 400 && it.status < 500)
                            return J(
                              "failed loading " +
                                U +
                                "; status code: " +
                                it.status,
                              !1
                            );
                          if (
                            !it &&
                            I &&
                            I.message &&
                            I.message.indexOf("Failed to fetch") > -1
                          )
                            return J(
                              "failed loading " + U + ": " + I.message,
                              !0
                            );
                          if (I) return J(I, !1);
                          var dt, st;
                          try {
                            dt =
                              typeof it.data == "string"
                                ? X.options.parse(it.data, ot, Z)
                                : it.data;
                          } catch {
                            st = "failed parsing " + U + " to json";
                          }
                          if (st) return J(st, !1);
                          J(null, dt);
                        }
                      );
                    },
                  },
                  {
                    key: "create",
                    value: function (U, J, ot, Z, X) {
                      var I = this;
                      if (this.options.addPath) {
                        typeof U == "string" && (U = [U]);
                        var it = this.options.parsePayload(J, ot, Z),
                          dt = 0,
                          st = [],
                          F = [];
                        U.forEach(function (bt) {
                          var wt = I.options.addPath;
                          typeof I.options.addPath == "function" &&
                            (wt = I.options.addPath(bt, J));
                          var Lt = I.services.interpolator.interpolate(wt, {
                            lng: bt,
                            ns: J,
                          });
                          I.options.request(
                            I.options,
                            Lt,
                            it,
                            function (jt, z) {
                              (dt += 1),
                                st.push(jt),
                                F.push(z),
                                dt === U.length && X && X(st, F);
                            }
                          );
                        });
                      }
                    },
                  },
                  {
                    key: "reload",
                    value: function () {
                      var U = this,
                        J = this.services,
                        ot = J.backendConnector,
                        Z = J.languageUtils,
                        X = J.logger,
                        I = ot.language;
                      if (!I || I.toLowerCase() !== "cimode") {
                        var it = [],
                          dt = function (st) {
                            Z.toResolveHierarchy(st).forEach(function (F) {
                              it.indexOf(F) < 0 && it.push(F);
                            });
                          };
                        dt(I),
                          this.allOptions.preload &&
                            this.allOptions.preload.forEach(function (st) {
                              return dt(st);
                            }),
                          it.forEach(function (st) {
                            U.allOptions.ns.forEach(function (F) {
                              ot.read(
                                st,
                                F,
                                "read",
                                null,
                                null,
                                function (bt, wt) {
                                  bt &&
                                    X.warn(
                                      "loading namespace "
                                        .concat(F, " for language ")
                                        .concat(st, " failed"),
                                      bt
                                    ),
                                    !bt &&
                                      wt &&
                                      X.log(
                                        "loaded namespace "
                                          .concat(F, " for language ")
                                          .concat(st),
                                        wt
                                      ),
                                    ot.loaded(
                                      "".concat(st, "|").concat(F),
                                      bt,
                                      wt
                                    );
                                }
                              );
                            });
                          });
                      }
                    },
                  },
                ]) && C(B.prototype, v),
                Object.defineProperty(B, "prototype", { writable: !1 }),
                j
              );
            })();
          (A.type = "backend"), ($.default = A);
        },
        function (R, $) {
          var y = typeof self < "u" ? self : this,
            l = (function () {
              function p() {
                (this.fetch = !1), (this.DOMException = y.DOMException);
              }
              return (p.prototype = y), new p();
            })();
          (function (p) {
            (function (C) {
              var N = "URLSearchParams" in p,
                A = "Symbol" in p && "iterator" in Symbol,
                j =
                  "FileReader" in p &&
                  "Blob" in p &&
                  (function () {
                    try {
                      return new Blob(), !0;
                    } catch {
                      return !1;
                    }
                  })(),
                B = "FormData" in p,
                v = "ArrayBuffer" in p;
              if (v)
                var U = [
                    "[object Int8Array]",
                    "[object Uint8Array]",
                    "[object Uint8ClampedArray]",
                    "[object Int16Array]",
                    "[object Uint16Array]",
                    "[object Int32Array]",
                    "[object Uint32Array]",
                    "[object Float32Array]",
                    "[object Float64Array]",
                  ],
                  J =
                    ArrayBuffer.isView ||
                    function (g) {
                      return (
                        g && U.indexOf(Object.prototype.toString.call(g)) > -1
                      );
                    };
              function ot(g) {
                if (
                  (typeof g != "string" && (g = String(g)),
                  /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(g))
                )
                  throw new TypeError("Invalid character in header field name");
                return g.toLowerCase();
              }
              function Z(g) {
                return typeof g != "string" && (g = String(g)), g;
              }
              function X(g) {
                var D = {
                  next: function () {
                    var w = g.shift();
                    return { done: w === void 0, value: w };
                  },
                };
                return (
                  A &&
                    (D[Symbol.iterator] = function () {
                      return D;
                    }),
                  D
                );
              }
              function I(g) {
                (this.map = {}),
                  g instanceof I
                    ? g.forEach(function (D, w) {
                        this.append(w, D);
                      }, this)
                    : Array.isArray(g)
                    ? g.forEach(function (D) {
                        this.append(D[0], D[1]);
                      }, this)
                    : g &&
                      Object.getOwnPropertyNames(g).forEach(function (D) {
                        this.append(D, g[D]);
                      }, this);
              }
              function it(g) {
                if (g.bodyUsed)
                  return Promise.reject(new TypeError("Already read"));
                g.bodyUsed = !0;
              }
              function dt(g) {
                return new Promise(function (D, w) {
                  (g.onload = function () {
                    D(g.result);
                  }),
                    (g.onerror = function () {
                      w(g.error);
                    });
                });
              }
              function st(g) {
                var D = new FileReader(),
                  w = dt(D);
                return D.readAsArrayBuffer(g), w;
              }
              function F(g) {
                if (g.slice) return g.slice(0);
                var D = new Uint8Array(g.byteLength);
                return D.set(new Uint8Array(g)), D.buffer;
              }
              function bt() {
                return (
                  (this.bodyUsed = !1),
                  (this._initBody = function (g) {
                    var D;
                    (this._bodyInit = g),
                      g
                        ? typeof g == "string"
                          ? (this._bodyText = g)
                          : j && Blob.prototype.isPrototypeOf(g)
                          ? (this._bodyBlob = g)
                          : B && FormData.prototype.isPrototypeOf(g)
                          ? (this._bodyFormData = g)
                          : N && URLSearchParams.prototype.isPrototypeOf(g)
                          ? (this._bodyText = g.toString())
                          : v &&
                            j &&
                            (D = g) &&
                            DataView.prototype.isPrototypeOf(D)
                          ? ((this._bodyArrayBuffer = F(g.buffer)),
                            (this._bodyInit = new Blob([
                              this._bodyArrayBuffer,
                            ])))
                          : v &&
                            (ArrayBuffer.prototype.isPrototypeOf(g) || J(g))
                          ? (this._bodyArrayBuffer = F(g))
                          : (this._bodyText = g =
                              Object.prototype.toString.call(g))
                        : (this._bodyText = ""),
                      this.headers.get("content-type") ||
                        (typeof g == "string"
                          ? this.headers.set(
                              "content-type",
                              "text/plain;charset=UTF-8"
                            )
                          : this._bodyBlob && this._bodyBlob.type
                          ? this.headers.set(
                              "content-type",
                              this._bodyBlob.type
                            )
                          : N &&
                            URLSearchParams.prototype.isPrototypeOf(g) &&
                            this.headers.set(
                              "content-type",
                              "application/x-www-form-urlencoded;charset=UTF-8"
                            ));
                  }),
                  j &&
                    ((this.blob = function () {
                      var g = it(this);
                      if (g) return g;
                      if (this._bodyBlob)
                        return Promise.resolve(this._bodyBlob);
                      if (this._bodyArrayBuffer)
                        return Promise.resolve(
                          new Blob([this._bodyArrayBuffer])
                        );
                      if (this._bodyFormData)
                        throw new Error("could not read FormData body as blob");
                      return Promise.resolve(new Blob([this._bodyText]));
                    }),
                    (this.arrayBuffer = function () {
                      return this._bodyArrayBuffer
                        ? it(this) || Promise.resolve(this._bodyArrayBuffer)
                        : this.blob().then(st);
                    })),
                  (this.text = function () {
                    var g,
                      D,
                      w,
                      at = it(this);
                    if (at) return at;
                    if (this._bodyBlob)
                      return (
                        (g = this._bodyBlob),
                        (D = new FileReader()),
                        (w = dt(D)),
                        D.readAsText(g),
                        w
                      );
                    if (this._bodyArrayBuffer)
                      return Promise.resolve(
                        (function (lt) {
                          for (
                            var yt = new Uint8Array(lt),
                              Rt = new Array(yt.length),
                              G = 0;
                            G < yt.length;
                            G++
                          )
                            Rt[G] = String.fromCharCode(yt[G]);
                          return Rt.join("");
                        })(this._bodyArrayBuffer)
                      );
                    if (this._bodyFormData)
                      throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText);
                  }),
                  B &&
                    (this.formData = function () {
                      return this.text().then(jt);
                    }),
                  (this.json = function () {
                    return this.text().then(JSON.parse);
                  }),
                  this
                );
              }
              (I.prototype.append = function (g, D) {
                (g = ot(g)), (D = Z(D));
                var w = this.map[g];
                this.map[g] = w ? w + ", " + D : D;
              }),
                (I.prototype.delete = function (g) {
                  delete this.map[ot(g)];
                }),
                (I.prototype.get = function (g) {
                  return (g = ot(g)), this.has(g) ? this.map[g] : null;
                }),
                (I.prototype.has = function (g) {
                  return this.map.hasOwnProperty(ot(g));
                }),
                (I.prototype.set = function (g, D) {
                  this.map[ot(g)] = Z(D);
                }),
                (I.prototype.forEach = function (g, D) {
                  for (var w in this.map)
                    this.map.hasOwnProperty(w) &&
                      g.call(D, this.map[w], w, this);
                }),
                (I.prototype.keys = function () {
                  var g = [];
                  return (
                    this.forEach(function (D, w) {
                      g.push(w);
                    }),
                    X(g)
                  );
                }),
                (I.prototype.values = function () {
                  var g = [];
                  return (
                    this.forEach(function (D) {
                      g.push(D);
                    }),
                    X(g)
                  );
                }),
                (I.prototype.entries = function () {
                  var g = [];
                  return (
                    this.forEach(function (D, w) {
                      g.push([w, D]);
                    }),
                    X(g)
                  );
                }),
                A && (I.prototype[Symbol.iterator] = I.prototype.entries);
              var wt = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
              function Lt(g, D) {
                var w,
                  at,
                  lt = (D = D || {}).body;
                if (g instanceof Lt) {
                  if (g.bodyUsed) throw new TypeError("Already read");
                  (this.url = g.url),
                    (this.credentials = g.credentials),
                    D.headers || (this.headers = new I(g.headers)),
                    (this.method = g.method),
                    (this.mode = g.mode),
                    (this.signal = g.signal),
                    lt ||
                      g._bodyInit == null ||
                      ((lt = g._bodyInit), (g.bodyUsed = !0));
                } else this.url = String(g);
                if (
                  ((this.credentials =
                    D.credentials || this.credentials || "same-origin"),
                  (!D.headers && this.headers) ||
                    (this.headers = new I(D.headers)),
                  (this.method =
                    ((w = D.method || this.method || "GET"),
                    (at = w.toUpperCase()),
                    wt.indexOf(at) > -1 ? at : w)),
                  (this.mode = D.mode || this.mode || null),
                  (this.signal = D.signal || this.signal),
                  (this.referrer = null),
                  (this.method === "GET" || this.method === "HEAD") && lt)
                )
                  throw new TypeError(
                    "Body not allowed for GET or HEAD requests"
                  );
                this._initBody(lt);
              }
              function jt(g) {
                var D = new FormData();
                return (
                  g
                    .trim()
                    .split("&")
                    .forEach(function (w) {
                      if (w) {
                        var at = w.split("="),
                          lt = at.shift().replace(/\+/g, " "),
                          yt = at.join("=").replace(/\+/g, " ");
                        D.append(
                          decodeURIComponent(lt),
                          decodeURIComponent(yt)
                        );
                      }
                    }),
                  D
                );
              }
              function z(g, D) {
                D || (D = {}),
                  (this.type = "default"),
                  (this.status = D.status === void 0 ? 200 : D.status),
                  (this.ok = this.status >= 200 && this.status < 300),
                  (this.statusText = "statusText" in D ? D.statusText : "OK"),
                  (this.headers = new I(D.headers)),
                  (this.url = D.url || ""),
                  this._initBody(g);
              }
              (Lt.prototype.clone = function () {
                return new Lt(this, { body: this._bodyInit });
              }),
                bt.call(Lt.prototype),
                bt.call(z.prototype),
                (z.prototype.clone = function () {
                  return new z(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new I(this.headers),
                    url: this.url,
                  });
                }),
                (z.error = function () {
                  var g = new z(null, { status: 0, statusText: "" });
                  return (g.type = "error"), g;
                });
              var Y = [301, 302, 303, 307, 308];
              (z.redirect = function (g, D) {
                if (Y.indexOf(D) === -1)
                  throw new RangeError("Invalid status code");
                return new z(null, { status: D, headers: { location: g } });
              }),
                (C.DOMException = p.DOMException);
              try {
                new C.DOMException();
              } catch {
                (C.DOMException = function (D, w) {
                  (this.message = D), (this.name = w);
                  var at = Error(D);
                  this.stack = at.stack;
                }),
                  (C.DOMException.prototype = Object.create(Error.prototype)),
                  (C.DOMException.prototype.constructor = C.DOMException);
              }
              function V(g, D) {
                return new Promise(function (w, at) {
                  var lt = new Lt(g, D);
                  if (lt.signal && lt.signal.aborted)
                    return at(new C.DOMException("Aborted", "AbortError"));
                  var yt = new XMLHttpRequest();
                  function Rt() {
                    yt.abort();
                  }
                  (yt.onload = function () {
                    var G,
                      K,
                      rt = {
                        status: yt.status,
                        statusText: yt.statusText,
                        headers:
                          ((G = yt.getAllResponseHeaders() || ""),
                          (K = new I()),
                          G.replace(/\r?\n[\t ]+/g, " ")
                            .split(/\r?\n/)
                            .forEach(function (Ft) {
                              var zt = Ft.split(":"),
                                Ht = zt.shift().trim();
                              if (Ht) {
                                var Wt = zt.join(":").trim();
                                K.append(Ht, Wt);
                              }
                            }),
                          K),
                      };
                    rt.url =
                      "responseURL" in yt
                        ? yt.responseURL
                        : rt.headers.get("X-Request-URL");
                    var Q = "response" in yt ? yt.response : yt.responseText;
                    w(new z(Q, rt));
                  }),
                    (yt.onerror = function () {
                      at(new TypeError("Network request failed"));
                    }),
                    (yt.ontimeout = function () {
                      at(new TypeError("Network request failed"));
                    }),
                    (yt.onabort = function () {
                      at(new C.DOMException("Aborted", "AbortError"));
                    }),
                    yt.open(lt.method, lt.url, !0),
                    lt.credentials === "include"
                      ? (yt.withCredentials = !0)
                      : lt.credentials === "omit" && (yt.withCredentials = !1),
                    "responseType" in yt && j && (yt.responseType = "blob"),
                    lt.headers.forEach(function (G, K) {
                      yt.setRequestHeader(K, G);
                    }),
                    lt.signal &&
                      (lt.signal.addEventListener("abort", Rt),
                      (yt.onreadystatechange = function () {
                        yt.readyState === 4 &&
                          lt.signal.removeEventListener("abort", Rt);
                      })),
                    yt.send(lt._bodyInit === void 0 ? null : lt._bodyInit);
                });
              }
              (V.polyfill = !0),
                p.fetch ||
                  ((p.fetch = V),
                  (p.Headers = I),
                  (p.Request = Lt),
                  (p.Response = z)),
                (C.Headers = I),
                (C.Request = Lt),
                (C.Response = z),
                (C.fetch = V),
                Object.defineProperty(C, "__esModule", { value: !0 });
            })({});
          })(l),
            (l.fetch.ponyfill = !0),
            delete l.fetch.polyfill;
          var f = l;
          (($ = f.fetch).default = f.fetch),
            ($.fetch = f.fetch),
            ($.Headers = f.Headers),
            ($.Request = f.Request),
            ($.Response = f.Response),
            (R.exports = $);
        },
        function (R, $, y) {
          y.r($);
          var l = y(3),
            f = y(4),
            p = [],
            C = p.forEach,
            N = p.slice;
          function A(z) {
            return (
              C.call(N.call(arguments, 1), function (Y) {
                if (Y) for (var V in Y) z[V] === void 0 && (z[V] = Y[V]);
              }),
              z
            );
          }
          var j = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
            B = function (z, Y, V) {
              var g = V || {};
              g.path = g.path || "/";
              var D = z + "=" + encodeURIComponent(Y);
              if (g.maxAge > 0) {
                var w = g.maxAge - 0;
                if (isNaN(w)) throw new Error("maxAge should be a Number");
                D += "; Max-Age=" + Math.floor(w);
              }
              if (g.domain) {
                if (!j.test(g.domain))
                  throw new TypeError("option domain is invalid");
                D += "; Domain=" + g.domain;
              }
              if (g.path) {
                if (!j.test(g.path))
                  throw new TypeError("option path is invalid");
                D += "; Path=" + g.path;
              }
              if (g.expires) {
                if (typeof g.expires.toUTCString != "function")
                  throw new TypeError("option expires is invalid");
                D += "; Expires=" + g.expires.toUTCString();
              }
              if (
                (g.httpOnly && (D += "; HttpOnly"),
                g.secure && (D += "; Secure"),
                g.sameSite)
              )
                switch (
                  typeof g.sameSite == "string"
                    ? g.sameSite.toLowerCase()
                    : g.sameSite
                ) {
                  case !0:
                    D += "; SameSite=Strict";
                    break;
                  case "lax":
                    D += "; SameSite=Lax";
                    break;
                  case "strict":
                    D += "; SameSite=Strict";
                    break;
                  case "none":
                    D += "; SameSite=None";
                    break;
                  default:
                    throw new TypeError("option sameSite is invalid");
                }
              return D;
            },
            v = function (z, Y, V, g) {
              var D =
                arguments.length > 4 && arguments[4] !== void 0
                  ? arguments[4]
                  : { path: "/", sameSite: "strict" };
              V &&
                ((D.expires = new Date()),
                D.expires.setTime(D.expires.getTime() + 60 * V * 1e3)),
                g && (D.domain = g),
                (document.cookie = B(z, encodeURIComponent(Y), D));
            },
            U = function (z) {
              for (
                var Y = z + "=", V = document.cookie.split(";"), g = 0;
                g < V.length;
                g++
              ) {
                for (var D = V[g]; D.charAt(0) === " "; )
                  D = D.substring(1, D.length);
                if (D.indexOf(Y) === 0) return D.substring(Y.length, D.length);
              }
              return null;
            },
            J = {
              name: "cookie",
              lookup: function (z) {
                var Y;
                if (z.lookupCookie && typeof document < "u") {
                  var V = U(z.lookupCookie);
                  V && (Y = V);
                }
                return Y;
              },
              cacheUserLanguage: function (z, Y) {
                Y.lookupCookie &&
                  typeof document < "u" &&
                  v(
                    Y.lookupCookie,
                    z,
                    Y.cookieMinutes,
                    Y.cookieDomain,
                    Y.cookieOptions
                  );
              },
            },
            ot = {
              name: "querystring",
              lookup: function (z) {
                var Y;
                if (typeof window < "u")
                  for (
                    var V = window.location.search.substring(1).split("&"),
                      g = 0;
                    g < V.length;
                    g++
                  ) {
                    var D = V[g].indexOf("=");
                    D > 0 &&
                      V[g].substring(0, D) === z.lookupQuerystring &&
                      (Y = V[g].substring(D + 1));
                  }
                return Y;
              },
            },
            Z = null,
            X = function () {
              if (Z !== null) return Z;
              try {
                (Z = window !== "undefined" && window.localStorage !== null),
                  window.localStorage.setItem("i18next.translate.boo", "foo"),
                  window.localStorage.removeItem("i18next.translate.boo");
              } catch {
                Z = !1;
              }
              return Z;
            },
            I = {
              name: "localStorage",
              lookup: function (z) {
                var Y;
                if (z.lookupLocalStorage && X()) {
                  var V = window.localStorage.getItem(z.lookupLocalStorage);
                  V && (Y = V);
                }
                return Y;
              },
              cacheUserLanguage: function (z, Y) {
                Y.lookupLocalStorage &&
                  X() &&
                  window.localStorage.setItem(Y.lookupLocalStorage, z);
              },
            },
            it = null,
            dt = function () {
              if (it !== null) return it;
              try {
                (it = window !== "undefined" && window.sessionStorage !== null),
                  window.sessionStorage.setItem("i18next.translate.boo", "foo"),
                  window.sessionStorage.removeItem("i18next.translate.boo");
              } catch {
                it = !1;
              }
              return it;
            },
            st = {
              name: "sessionStorage",
              lookup: function (z) {
                var Y;
                if (z.lookupSessionStorage && dt()) {
                  var V = window.sessionStorage.getItem(z.lookupSessionStorage);
                  V && (Y = V);
                }
                return Y;
              },
              cacheUserLanguage: function (z, Y) {
                Y.lookupSessionStorage &&
                  dt() &&
                  window.sessionStorage.setItem(Y.lookupSessionStorage, z);
              },
            },
            F = {
              name: "navigator",
              lookup: function (z) {
                var Y = [];
                if (typeof navigator < "u") {
                  if (navigator.languages)
                    for (var V = 0; V < navigator.languages.length; V++)
                      Y.push(navigator.languages[V]);
                  navigator.userLanguage && Y.push(navigator.userLanguage),
                    navigator.language && Y.push(navigator.language);
                }
                return Y.length > 0 ? Y : void 0;
              },
            },
            bt = {
              name: "htmlTag",
              lookup: function (z) {
                var Y,
                  V =
                    z.htmlTag ||
                    (typeof document < "u" ? document.documentElement : null);
                return (
                  V &&
                    typeof V.getAttribute == "function" &&
                    (Y = V.getAttribute("lang")),
                  Y
                );
              },
            },
            wt = {
              name: "path",
              lookup: function (z) {
                var Y;
                if (typeof window < "u") {
                  var V = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
                  if (V instanceof Array)
                    if (typeof z.lookupFromPathIndex == "number") {
                      if (typeof V[z.lookupFromPathIndex] != "string") return;
                      Y = V[z.lookupFromPathIndex].replace("/", "");
                    } else Y = V[0].replace("/", "");
                }
                return Y;
              },
            },
            Lt = {
              name: "subdomain",
              lookup: function (z) {
                var Y;
                if (typeof window < "u") {
                  var V = window.location.href.match(
                    /(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi
                  );
                  V instanceof Array &&
                    (Y =
                      typeof z.lookupFromSubdomainIndex == "number"
                        ? V[z.lookupFromSubdomainIndex]
                            .replace("http://", "")
                            .replace("https://", "")
                            .replace(".", "")
                        : V[0]
                            .replace("http://", "")
                            .replace("https://", "")
                            .replace(".", ""));
                }
                return Y;
              },
            },
            jt = (function () {
              function z(Y) {
                var V =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
                Object(l.a)(this, z),
                  (this.type = "languageDetector"),
                  (this.detectors = {}),
                  this.init(Y, V);
              }
              return (
                Object(f.a)(z, [
                  {
                    key: "init",
                    value: function (Y) {
                      var V =
                          arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : {},
                        g =
                          arguments.length > 2 && arguments[2] !== void 0
                            ? arguments[2]
                            : {};
                      (this.services = Y),
                        (this.options = A(V, this.options || {}, {
                          order: [
                            "querystring",
                            "cookie",
                            "localStorage",
                            "sessionStorage",
                            "navigator",
                            "htmlTag",
                          ],
                          lookupQuerystring: "lng",
                          lookupCookie: "i18next",
                          lookupLocalStorage: "i18nextLng",
                          lookupSessionStorage: "i18nextLng",
                          caches: ["localStorage"],
                          excludeCacheFor: ["cimode"],
                        })),
                        this.options.lookupFromUrlIndex &&
                          (this.options.lookupFromPathIndex =
                            this.options.lookupFromUrlIndex),
                        (this.i18nOptions = g),
                        this.addDetector(J),
                        this.addDetector(ot),
                        this.addDetector(I),
                        this.addDetector(st),
                        this.addDetector(F),
                        this.addDetector(bt),
                        this.addDetector(wt),
                        this.addDetector(Lt);
                    },
                  },
                  {
                    key: "addDetector",
                    value: function (Y) {
                      this.detectors[Y.name] = Y;
                    },
                  },
                  {
                    key: "detect",
                    value: function (Y) {
                      var V = this;
                      Y || (Y = this.options.order);
                      var g = [];
                      return (
                        Y.forEach(function (D) {
                          if (V.detectors[D]) {
                            var w = V.detectors[D].lookup(V.options);
                            w && typeof w == "string" && (w = [w]),
                              w && (g = g.concat(w));
                          }
                        }),
                        this.services.languageUtils.getBestMatchFromCodes
                          ? g
                          : g.length > 0
                          ? g[0]
                          : null
                      );
                    },
                  },
                  {
                    key: "cacheUserLanguage",
                    value: function (Y, V) {
                      var g = this;
                      V || (V = this.options.caches),
                        V &&
                          ((this.options.excludeCacheFor &&
                            this.options.excludeCacheFor.indexOf(Y) > -1) ||
                            V.forEach(function (D) {
                              g.detectors[D] &&
                                g.detectors[D].cacheUserLanguage(Y, g.options);
                            }));
                    },
                  },
                ]),
                z
              );
            })();
          (jt.type = "languageDetector"), ($.default = jt);
        },
        function (R, $, y) {
          y.r($),
            y.d($, "Desktop", function () {
              return Oe;
            });
          var l = y(0);
          const f = Object(l.createLogger)("agentx-js-api"),
            p = (vt, a) => ({
              info: (...c) => vt.info(a, ...c),
              warn: (...c) => vt.warn(a, ...c),
              error: (...c) => vt.error(a, ...c),
            });
          class C {
            constructor(a) {
              this.logger = a.logger;
            }
            check(a) {
              return a
                ? !!a.isInited ||
                    (this.logger.error(
                      "SERVICE still not initialized... Await it's init(...) first."
                    ),
                    !1)
                : (this.logger.error("SERVICE is not defined..."), !1);
            }
          }
          const N = (vt) => new C(vt);
          var A = function (vt, a, c, P) {
            return new (c || (c = Promise))(function (mt, ft) {
              function xt(ht) {
                try {
                  Ot(P.next(ht));
                } catch (ct) {
                  ft(ct);
                }
              }
              function Tt(ht) {
                try {
                  Ot(P.throw(ht));
                } catch (ct) {
                  ft(ct);
                }
              }
              function Ot(ht) {
                var ct;
                ht.done
                  ? mt(ht.value)
                  : ((ct = ht.value),
                    ct instanceof c
                      ? ct
                      : new c(function (Nt) {
                          Nt(ct);
                        })).then(xt, Tt);
              }
              Ot((P = P.apply(vt, [])).next());
            });
          };
          const j = { rps: 120, tag: "jsapi" },
            B = { rps: 0, tag: "jsapi" },
            v = { tag: "jsapi" },
            U = (vt) =>
              vt.actionsChannels.createSource(
                "fireGeneralSilentNotification/Req",
                j
              ),
            J = (vt) =>
              vt.actionsChannels.createSource(
                "fireGeneralAutoDismissNotification/Req",
                B
              ),
            ot = (vt) =>
              vt.actionsChannels.createDestination(
                "fireGeneralAutoDismissNotification/Res",
                B
              ),
            Z = (vt) =>
              vt.actionsChannels.createSource(
                "fireGeneralAcknowledgeNotification/Req",
                B
              ),
            X = (vt) =>
              vt.actionsChannels.createDestination(
                "fireGeneralAcknowledgeNotification/Res",
                B
              ),
            I = (vt) => vt.actionsChannels.createSource("addCustomTask", j),
            it = (vt) => vt.actionsChannels.createSource("getToken/Req", B),
            dt = (vt) =>
              vt.actionsChannels.createDestination("getToken/Res", v),
            st = (vt) => vt.actionsChannels.createSource("getTaskMap/Req", B),
            F = (vt) =>
              vt.actionsChannels.createDestination("getTaskMap/Res", v),
            bt = (vt) =>
              vt.actionsChannels.createSource("getMediaTypeQueue/Req", B),
            wt = (vt) =>
              vt.actionsChannels.createDestination("getMediaTypeQueue/Res", v),
            Lt = (vt) => vt.actionsChannels.createSource("getIdleCodes/Req", B),
            jt = (vt) =>
              vt.actionsChannels.createDestination("getIdleCodes/Res", v),
            z = (vt) =>
              vt.actionsChannels.createSource("getWrapUpCodes/Req", B),
            Y = (vt) =>
              vt.actionsChannels.createDestination("getWrapUpCodes/Res", v);
          class V {
            constructor(a) {
              (this.lastReqTs = Date.now()),
                (this.lastReqN = 0),
                (this.toggleMiximizeRestore = (c) => {
                  var P;
                  if (c && c.target) {
                    const mt =
                      (P = this.getClosestElement(
                        c.target,
                        ".dynamic-widget-wrapper"
                      )) === null || P === void 0
                        ? void 0
                        : P.id;
                    if (mt) {
                      const ft = new CustomEvent("toggle-maximize-restore", {
                        detail: { widgetId: mt },
                      });
                      window.dispatchEvent(ft),
                        f.info(
                          "Dispatching toggle-maximize-restore event for widgetId:",
                          mt
                        );
                    }
                  }
                }),
                (this.toggleVoiceInteractionPanel = () => {
                  window.dispatchEvent(
                    new CustomEvent("toggle-voice-interaction-panel")
                  ),
                    f.info("Dispatching toggl-voice-interaction-panel");
                }),
                (this.toggleMuteUnmuteWebRtcCall = () => {
                  const c = new CustomEvent("ax-web-call-mute-unmute", {});
                  window.dispatchEvent(c),
                    f.info("Dispatching ax-web-call-mute-unmute event");
                }),
                (this.declineWebRtcCall = () => {
                  const c = new CustomEvent("ax-web-call-decline", {});
                  window.dispatchEvent(c),
                    f.info("Dispatching ax-web-call-decline event");
                }),
                (this.acceptWebRtcCall = () => {
                  const c = new CustomEvent("ax-web-call-answer", {});
                  window.dispatchEvent(c),
                    f.info("Dispatching ax-web-call-answer event");
                }),
                (this.logger = a.logger),
                (this.serviceChecker = a.serviceChecker);
            }
            checkService() {
              return this.serviceChecker.check(this.SERVICE);
            }
            getNextReqId() {
              const a = Date.now();
              return (
                this.lastReqTs !== a
                  ? ((this.lastReqTs = a), (this.lastReqN = 0))
                  : this.lastReqN++,
                `${this.lastReqTs}_${this.lastReqN}`
              );
            }
            init(a) {
              a && (this.SERVICE = a),
                this.checkService() &&
                  ((this.sourceActionsChannels = {
                    fireGeneralSilentNotification: U(this.SERVICE),
                    fireGeneralAutoDismissNotification: J(this.SERVICE),
                    fireGeneralAcknowledgeNotification: Z(this.SERVICE),
                    addCustomTask: I(this.SERVICE),
                    getToken: it(this.SERVICE),
                    getTaskMap: st(this.SERVICE),
                    getMediaTypeQueue: bt(this.SERVICE),
                    getIdleCodes: Lt(this.SERVICE),
                    getWrapUpCodes: z(this.SERVICE),
                  }),
                  (this.destinationActionsChannels = {
                    fireGeneralAutoDismissNotification: ot(this.SERVICE),
                    fireGeneralAcknowledgeNotification: X(this.SERVICE),
                    getToken: dt(this.SERVICE),
                    getTaskMap: F(this.SERVICE),
                    getMediaTypeQueue: wt(this.SERVICE),
                    getIdleCodes: jt(this.SERVICE),
                    getWrapUpCodes: Y(this.SERVICE),
                  }),
                  this.logger.info("Inited"));
            }
            cleanup() {
              (this.SERVICE = void 0), this.logger.info("Cleaned");
            }
            fireGeneralSilentNotification(...a) {
              this.checkService() &&
                this.sourceActionsChannels.fireGeneralSilentNotification.send(
                  ...a
                );
            }
            fireGeneralAutoDismissNotification(...a) {
              return A(this, void 0, void 0, function* () {
                if (this.checkService())
                  return yield new Promise((c) => {
                    const P = this.getNextReqId(),
                      mt = ({ args: [ft, xt, Tt, Ot] }) => {
                        Ot === P &&
                          ((Tt !== l.Notifications.ItemMeta.Mode.AutoDismiss &&
                            Tt !== l.Notifications.ItemMeta.Mode.Silent) ||
                            (ft ===
                              l.Notifications.ItemMeta.Status.Deactivated &&
                              (c([ft, xt, Tt]),
                              this.destinationActionsChannels.fireGeneralAutoDismissNotification.removeListener(
                                mt
                              ))));
                      };
                    this.destinationActionsChannels.fireGeneralAutoDismissNotification.addListener(
                      mt
                    ),
                      this.sourceActionsChannels.fireGeneralAutoDismissNotification.send(
                        ...a
                      );
                  });
              });
            }
            fireGeneralAcknowledgeNotification(...a) {
              return A(this, void 0, void 0, function* () {
                if (this.checkService())
                  return yield new Promise((c) => {
                    const P = this.getNextReqId(),
                      mt = ({ args: [ft, xt, Tt, Ot] }) => {
                        Ot === P &&
                          ((Tt !== l.Notifications.ItemMeta.Mode.Acknowledge &&
                            Tt !== l.Notifications.ItemMeta.Mode.Silent) ||
                            (ft ===
                              l.Notifications.ItemMeta.Status.Deactivated &&
                              (c([ft, xt, Tt]),
                              this.destinationActionsChannels.fireGeneralAcknowledgeNotification.removeListener(
                                mt
                              ))));
                      };
                    this.destinationActionsChannels.fireGeneralAcknowledgeNotification.addListener(
                      mt
                    ),
                      this.sourceActionsChannels.fireGeneralAcknowledgeNotification.send(
                        ...a
                      );
                  });
              });
            }
            addCustomTask(...a) {
              this.checkService() &&
                this.sourceActionsChannels.addCustomTask.send(...a);
            }
            getTaskMap() {
              return A(this, void 0, void 0, function* () {
                if (this.checkService())
                  return yield new Promise((a) => {
                    const c = this.getNextReqId(),
                      P = ({ args: [mt, ft] }) => {
                        ft === c &&
                          (a(mt),
                          this.destinationActionsChannels.getTaskMap.removeListener(
                            P
                          ));
                      };
                    this.destinationActionsChannels.getTaskMap.addListener(P),
                      this.sourceActionsChannels.getTaskMap.send(c);
                  });
              });
            }
            getMediaTypeQueue(a) {
              return A(this, void 0, void 0, function* () {
                if (this.checkService())
                  return yield new Promise((c) => {
                    const P = this.getNextReqId(),
                      mt = ({ args: [ft, xt] }) => {
                        xt === P &&
                          (c(ft),
                          this.destinationActionsChannels.getMediaTypeQueue.removeListener(
                            mt
                          ));
                      };
                    this.destinationActionsChannels.getMediaTypeQueue.addListener(
                      mt
                    ),
                      this.sourceActionsChannels.getMediaTypeQueue.send(a, P);
                  });
              });
            }
            getToken() {
              return A(this, void 0, void 0, function* () {
                if (this.checkService())
                  return yield new Promise((a) => {
                    const c = this.getNextReqId(),
                      P = ({ args: [mt, ft] }) => {
                        ft === c &&
                          (a(mt),
                          this.destinationActionsChannels.getToken.removeListener(
                            P
                          ));
                      };
                    this.destinationActionsChannels.getToken.addListener(P),
                      this.sourceActionsChannels.getToken.send(c);
                  });
              });
            }
            getIdleCodes() {
              return A(this, void 0, void 0, function* () {
                if (this.checkService())
                  return yield new Promise((a) => {
                    const c = this.getNextReqId(),
                      P = ({ args: [mt, ft] }) => {
                        ft === c &&
                          (a(mt),
                          this.destinationActionsChannels.getIdleCodes.removeListener(
                            P
                          ));
                      };
                    this.destinationActionsChannels.getIdleCodes.addListener(P),
                      this.sourceActionsChannels.getIdleCodes.send(c);
                  });
              });
            }
            getWrapUpCodes() {
              return A(this, void 0, void 0, function* () {
                if (this.checkService())
                  return yield new Promise((a) => {
                    const c = this.getNextReqId(),
                      P = ({ args: [mt, ft] }) => {
                        ft === c &&
                          (a(mt),
                          this.destinationActionsChannels.getWrapUpCodes.removeListener(
                            P
                          ));
                      };
                    this.destinationActionsChannels.getWrapUpCodes.addListener(
                      P
                    ),
                      this.sourceActionsChannels.getWrapUpCodes.send(c);
                  });
              });
            }
            getClosestElement(a, c) {
              return a && a !== document && a !== window
                ? a instanceof ShadowRoot
                  ? this.getClosestElement(a.host, c)
                  : a instanceof HTMLElement && a.matches(c)
                  ? a
                  : this.getClosestElement(a.parentNode, c)
                : null;
            }
          }
          const g = p(f, "[Actions JSAPI] =>");
          class D {
            constructor(a) {
              (this.isInited = !1),
                (this.listeners = new Map()),
                (this.listenersOnce = new Map()),
                (this.logger = a.logger);
            }
            init(a) {
              (this.aqmServiceEntity = a.aqmServiceEntity),
                (this.aqmServiceEntityString = a.aqmServiceEntityString),
                (this.isInited = !0);
            }
            cleanup() {
              this.removeAllEventListeners(),
                (this.aqmServiceEntity = void 0),
                (this.aqmServiceEntityString = void 0),
                (this.isInited = !1);
            }
            _addEventListener(a, c, P) {
              var mt, ft, xt;
              const Tt = P ? "listenersOnce" : "listeners";
              this[Tt].has(a) || this[Tt].set(a, new Map());
              const Ot = this[Tt].get(a),
                ht = P ? "listenOnce" : "listen",
                ct = (Nt) => {
                  let Jt = null;
                  return (
                    P &&
                      (Jt = this.aqmServiceEntity[a].listenOnce(() =>
                        this.removeOnceEventListener(a, c)
                      )),
                    () => {
                      var pe;
                      if (Nt) {
                        P
                          ? (Nt.stopListenOnce(), Jt && Jt.stopListenOnce())
                          : Nt.stopListen();
                        const Kt = [];
                        Kt.push(`UnBound "${a}"`),
                          P && Kt.push("Once"),
                          this.aqmServiceEntityString &&
                            Kt.push(`from "${this.aqmServiceEntityString}"`),
                          (pe = this.logger) === null ||
                            pe === void 0 ||
                            pe.info(Kt.join(" "));
                      }
                    }
                  );
                };
              if (this.aqmServiceEntity)
                if (
                  a in this.aqmServiceEntity &&
                  ht in this.aqmServiceEntity[a]
                ) {
                  const Nt = this.aqmServiceEntity[a][ht](c);
                  Ot.set(c, ct(Nt));
                  const Jt = [];
                  Jt.push(`Bound "${a}"`),
                    P && Jt.push("Once"),
                    this.aqmServiceEntityString &&
                      Jt.push(`to "${this.aqmServiceEntityString}"`),
                    (mt = this.logger) === null ||
                      mt === void 0 ||
                      mt.info(Jt.join(" "));
                } else
                  (ft = this.logger) === null ||
                    ft === void 0 ||
                    ft.warn(
                      `EventName "${a}" is not recognized, so won't be subscribed...`
                    );
              else
                (xt = this.logger) === null ||
                  xt === void 0 ||
                  xt.error(
                    `"${this.aqmServiceEntityString}" is not ready yet. .init(...) first...`
                  );
            }
            _removeEventListener(a, c, P) {
              const mt = P ? "listenersOnce" : "listeners";
              if (this[mt].has(a)) {
                const ft = this[mt].get(a);
                ft &&
                  (ft.has(c) && (ft.get(c)(), ft.delete(c)),
                  ft.size < 1 && this[mt].delete(a));
              }
            }
            addEventListener(a, c) {
              this._addEventListener(a, c, !1);
            }
            addOnceEventListener(a, c) {
              this._addEventListener(a, c, !0);
            }
            removeEventListener(a, c) {
              this._removeEventListener(a, c, !1);
            }
            removeOnceEventListener(a, c) {
              this._removeEventListener(a, c, !0);
            }
            removeAllEventListeners() {
              ["listeners", "listenersOnce"].forEach((a) => {
                this[a].forEach((c, P) => {
                  c.forEach((mt, ft) => mt()), c.clear();
                }),
                  this[a].clear();
              });
            }
          }
          const w = (vt) => new D(vt);
          var at = function (vt, a, c, P) {
            return new (c || (c = Promise))(function (mt, ft) {
              function xt(ht) {
                try {
                  Ot(P.next(ht));
                } catch (ct) {
                  ft(ct);
                }
              }
              function Tt(ht) {
                try {
                  Ot(P.throw(ht));
                } catch (ct) {
                  ft(ct);
                }
              }
              function Ot(ht) {
                var ct;
                ht.done
                  ? mt(ht.value)
                  : ((ct = ht.value),
                    ct instanceof c
                      ? ct
                      : new c(function (Nt) {
                          Nt(ct);
                        })).then(xt, Tt);
              }
              Ot((P = P.apply(vt, [])).next());
            });
          };
          class lt {
            constructor(a) {
              (this.logger = a.logger),
                (this.aqmEvents = a.aqmEvents),
                (this.serviceChecker = a.serviceChecker);
            }
            checkService() {
              return this.serviceChecker.check(this.SERVICE);
            }
            init(a) {
              a && (this.SERVICE = a),
                this.checkService() &&
                  (this.aqmEvents.init({
                    aqmServiceEntity: this.SERVICE.aqm.contact,
                    aqmServiceEntityString: "SERVICE.aqm.contact",
                  }),
                  this.logger.info("Inited"));
            }
            cleanup() {
              this.aqmEvents.cleanup(),
                (this.SERVICE = void 0),
                this.logger.info("Cleaned");
            }
            sendDtmf(a) {
              this.checkService() && this.SERVICE.webCalling.sendDTMF(a);
            }
            accept(a) {
              var c;
              return at(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (c = this.SERVICE) === null || c === void 0
                    ? void 0
                    : c.aqm.contact.accept(a);
              });
            }
            consultAccept(a) {
              var c;
              return at(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (c = this.SERVICE) === null || c === void 0
                    ? void 0
                    : c.aqm.contact.consultAccept(a);
              });
            }
            buddyAgents(a) {
              var c;
              return at(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (c = this.SERVICE) === null || c === void 0
                    ? void 0
                    : c.aqm.contact.buddyAgents(a);
              });
            }
            end(a) {
              var c;
              return at(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (c = this.SERVICE) === null || c === void 0
                    ? void 0
                    : c.aqm.contact.end(a);
              });
            }
            consultEnd(a) {
              var c;
              return at(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (c = this.SERVICE) === null || c === void 0
                    ? void 0
                    : c.aqm.contact.consultEnd(a);
              });
            }
            cancelCtq(a) {
              var c;
              return at(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (c = this.SERVICE) === null || c === void 0
                    ? void 0
                    : c.aqm.contact.cancelCtq(a);
              });
            }
            wrapup(a) {
              var c;
              return at(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (c = this.SERVICE) === null || c === void 0
                    ? void 0
                    : c.aqm.contact.wrapup(a);
              });
            }
            vteamTransfer(a) {
              var c;
              return at(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (c = this.SERVICE) === null || c === void 0
                    ? void 0
                    : c.aqm.contact.vteamTransfer(a);
              });
            }
            blindTransfer(a) {
              var c;
              return at(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (c = this.SERVICE) === null || c === void 0
                    ? void 0
                    : c.aqm.contact.blindTransfer(a);
              });
            }
            hold(a) {
              var c;
              return at(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (c = this.SERVICE) === null || c === void 0
                    ? void 0
                    : c.aqm.contact.hold(a);
              });
            }
            unHold(a) {
              var c;
              return at(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (c = this.SERVICE) === null || c === void 0
                    ? void 0
                    : c.aqm.contact.unHold(a);
              });
            }
            consult(a) {
              var c;
              return at(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (c = this.SERVICE) === null || c === void 0
                    ? void 0
                    : c.aqm.contact.consult(a);
              });
            }
            consultConference(a) {
              var c;
              return at(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (c = this.SERVICE) === null || c === void 0
                    ? void 0
                    : c.aqm.contact.consultConference(a);
              });
            }
            decline(a) {
              var c;
              return at(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (c = this.SERVICE) === null || c === void 0
                    ? void 0
                    : c.aqm.contact.decline(a);
              });
            }
            consultTransfer(a) {
              var c;
              return at(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (c = this.SERVICE) === null || c === void 0
                    ? void 0
                    : c.aqm.contact.consultTransfer(a);
              });
            }
            vteamList(a) {
              var c;
              return at(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (c = this.SERVICE) === null || c === void 0
                    ? void 0
                    : c.aqm.contact.vteamList(a);
              });
            }
            pauseRecording(a) {
              var c;
              return at(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (c = this.SERVICE) === null || c === void 0
                    ? void 0
                    : c.aqm.contact.pauseRecording(a);
              });
            }
            resumeRecording(a) {
              var c;
              return at(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (c = this.SERVICE) === null || c === void 0
                    ? void 0
                    : c.aqm.contact.resumeRecording(a);
              });
            }
            addEventListener(a, c) {
              this.checkService() && this.aqmEvents.addEventListener(a, c);
            }
            addOnceEventListener(a, c) {
              this.checkService() && this.aqmEvents.addOnceEventListener(a, c);
            }
            removeEventListener(a, c) {
              this.aqmEvents.removeEventListener(a, c);
            }
            removeOnceEventListener(a, c) {
              this.aqmEvents.removeOnceEventListener(a, c);
            }
            removeAllEventListeners() {
              this.aqmEvents.removeAllEventListeners();
            }
          }
          const yt = p(f, "[AgentContact JSAPI] =>"),
            Rt = p(yt, "[AqmServiceEvents: Contact] => ");
          var G = y(6),
            K = y.n(G),
            rt = y(11),
            Q = y.n(rt),
            Ft = function (vt, a, c, P) {
              return new (c || (c = Promise))(function (mt, ft) {
                function xt(ht) {
                  try {
                    Ot(P.next(ht));
                  } catch (ct) {
                    ft(ct);
                  }
                }
                function Tt(ht) {
                  try {
                    Ot(P.throw(ht));
                  } catch (ct) {
                    ft(ct);
                  }
                }
                function Ot(ht) {
                  var ct;
                  ht.done
                    ? mt(ht.value)
                    : ((ct = ht.value),
                      ct instanceof c
                        ? ct
                        : new c(function (Nt) {
                            Nt(ct);
                          })).then(xt, Tt);
                }
                Ot((P = P.apply(vt, [])).next());
              });
            };
          const zt = {
            agentName: void 0,
            agentProfileID: void 0,
            agentSessionId: void 0,
            idleCode: void 0,
            teamId: void 0,
            teamName: void 0,
            dn: void 0,
            status: void 0,
            subStatus: void 0,
            idleCodes: void 0,
            wrapupCodes: void 0,
            outDialRegex: void 0,
            isOutboundEnabledForTenant: void 0,
            isOutboundEnabledForAgent: void 0,
            isEndCallEnabled: void 0,
            isEndConsultEnabled: void 0,
            allowConsultToQueue: void 0,
            isAdhocDialingEnabled: void 0,
            isAgentAvailableAfterOutdial: void 0,
            isCampaignManagementEnabled: void 0,
            agentPersonalStatsEnabled: void 0,
          };
          class Ht {
            constructor(a) {
              (this.emitter = K()()),
                (this.listeners = new Set()),
                (this.teams = []),
                (this.idleCodes = {}),
                (this.latestData = Object.assign({}, zt)),
                (this.logger = a.logger),
                (this.serviceChecker = a.serviceChecker);
            }
            checkService() {
              return this.serviceChecker.check(this.SERVICE);
            }
            emit(a, ...c) {
              this.emitter.emit(a, ...c);
            }
            update(a) {
              const c = Object.keys(a).reduce((P, mt) => {
                const ft = a[mt],
                  xt = this.latestData[mt];
                return (
                  JSON.stringify(ft) !== JSON.stringify(xt) &&
                    P.push({ name: mt, value: ft, oldValue: xt }),
                  P
                );
              }, []);
              c.length &&
                (c.forEach((P) => (this.latestData[P.name] = P.value)),
                this.emit("updated", c));
            }
            static getOutdialRegex(a) {
              if (a && a.dialPlanEntity) {
                const c = a.dialPlanEntity.find((P) => P.name === "Any Format");
                if (c) return c.regex;
              }
              return "";
            }
            static findTeamName(a, c) {
              const P = a.find((mt) => mt.teamId === c);
              return (P == null ? void 0 : P.teamName) || "";
            }
            init(a) {
              return Ft(this, void 0, void 0, function* () {
                a && (this.SERVICE = a),
                  this.checkService() &&
                    (yield this.fetchLatestData(),
                    this.subscribeSelfDataEvents(),
                    this.logger.info("Inited"));
              });
            }
            cleanup() {
              this.unsubscribeSelfDataEvents(),
                this.removeAllEventListeners(),
                (this.SERVICE = void 0),
                this.update(Object.assign({}, zt)),
                this.logger.info("Cleaned");
            }
            fetchLatestData() {
              var a, c, P, mt, ft, xt;
              return Ft(this, void 0, void 0, function* () {
                const Tt =
                  !((a = this.SERVICE) === null || a === void 0) &&
                  a.conf.profile
                    ? (c = this.SERVICE) === null || c === void 0
                      ? void 0
                      : c.conf.profile
                    : yield (P = this.SERVICE) === null || P === void 0
                        ? void 0
                        : P.conf.fetchProfile();
                if (Tt) {
                  const {
                    teams: Ot,
                    agentName: ht,
                    agentProfileID: ct,
                    defaultDn: Nt,
                    agentSubStatus: Jt,
                    agentStatus: pe,
                    idleCodes: Kt,
                    wrapupCodes: ce,
                    dialPlan: Ie,
                    isOutboundEnabledForTenant: tn,
                    isOutboundEnabledForAgent: mn,
                    isAdhocDialingEnabled: On,
                    isEndCallEnabled: Ue,
                    isEndConsultEnabled: Cn,
                    allowConsultToQueue: Fe,
                    isAgentAvailableAfterOutdial: fe,
                    isCampaignManagementEnabled: en,
                    agentPersonalStatsEnabled: ee,
                  } = Tt;
                  let { idleCode: He } = Tt;
                  const Ce = Nt;
                  let nn = pe,
                    rn = Jt;
                  (this.teams = Ot),
                    Kt.forEach((ze) => {
                      this.idleCodes[ze.id] = { id: ze.id, name: ze.name };
                    });
                  const ve = yield (mt = this.SERVICE) === null || mt === void 0
                    ? void 0
                    : mt.aqm.agent.reload();
                  ve != null &&
                    ve.data &&
                    ((He =
                      ve.data.auxCodeId != "0"
                        ? this.idleCodes[ve.data.auxCodeId]
                        : void 0),
                    (nn =
                      (ft = ve == null ? void 0 : ve.data) === null ||
                      ft === void 0
                        ? void 0
                        : ft.status),
                    (rn =
                      (xt = ve == null ? void 0 : ve.data) === null ||
                      xt === void 0
                        ? void 0
                        : xt.subStatus));
                  const pn = Ht.getOutdialRegex(Ie);
                  this.update({
                    agentName: ht,
                    agentProfileID: ct,
                    dn: Ce,
                    status: nn,
                    subStatus: rn,
                    idleCode: He,
                    idleCodes: Kt,
                    wrapupCodes: ce,
                    outDialRegex: pn,
                    isOutboundEnabledForTenant: tn,
                    isOutboundEnabledForAgent: mn,
                    isAdhocDialingEnabled: On,
                    isEndCallEnabled: Ue,
                    isEndConsultEnabled: Cn,
                    allowConsultToQueue: Fe,
                    isAgentAvailableAfterOutdial: fe,
                    isCampaignManagementEnabled: en,
                    agentPersonalStatsEnabled: ee,
                  });
                }
              });
            }
            subscribeSelfDataEvents() {
              var a, c, P, mt;
              if (this.checkService()) {
                {
                  const ft =
                    (a = this.SERVICE) === null || a === void 0
                      ? void 0
                      : a.aqm.agent.eAgentReloginSuccess.listen(
                          ({
                            data: {
                              agentSessionId: xt = "",
                              teamId: Tt = "",
                              dn: Ot = "",
                              status: ht = "",
                              subStatus: ct = "",
                              auxCodeId: Nt = "",
                            },
                          }) => {
                            const Jt = Ht.findTeamName(this.teams, Tt);
                            this.update({
                              agentSessionId: xt,
                              teamId: Tt,
                              teamName: Jt,
                              dn: Ot,
                              status: ht,
                              subStatus: ct,
                              idleCode: this.idleCodes[Nt],
                            });
                          }
                        );
                  this.listeners.add(() =>
                    ft == null ? void 0 : ft.stopListen()
                  );
                }
                {
                  const ft =
                    (c = this.SERVICE) === null || c === void 0
                      ? void 0
                      : c.aqm.agent.eAgentStationLoginSuccess.listen(
                          ({
                            data: {
                              agentSessionId: xt = "",
                              teamId: Tt = "",
                              status: Ot = "",
                              subStatus: ht = "",
                              auxCodeId: ct = "",
                            },
                          }) => {
                            const Nt = Ht.findTeamName(this.teams, Tt);
                            this.update({
                              agentSessionId: xt,
                              teamId: Tt,
                              teamName: Nt,
                              status: Ot,
                              subStatus: ht,
                              idleCode: this.idleCodes[ct],
                            });
                          }
                        );
                  this.listeners.add(() =>
                    ft == null ? void 0 : ft.stopListen()
                  );
                }
                {
                  const ft =
                    (P = this.SERVICE) === null || P === void 0
                      ? void 0
                      : P.aqm.agent.eAgentStateChangeSuccess.listen(
                          ({
                            data: {
                              agentSessionId: xt = "",
                              status: Tt = "",
                              subStatus: Ot = "",
                              auxCodeId: ht = "",
                            },
                          }) => {
                            this.update({
                              agentSessionId: xt,
                              status: Tt,
                              subStatus: Ot,
                              idleCode: this.idleCodes[ht],
                            });
                          }
                        );
                  this.listeners.add(() =>
                    ft == null ? void 0 : ft.stopListen()
                  );
                }
                {
                  const ft =
                    (mt = this.SERVICE) === null || mt === void 0
                      ? void 0
                      : mt.aqm.agent.eAgentDNRegistered.listen(
                          ({ data: { dn: xt = "" } }) => {
                            this.update({ dn: xt });
                          }
                        );
                  this.listeners.add(() =>
                    ft == null ? void 0 : ft.stopListen()
                  );
                }
              }
            }
            unsubscribeSelfDataEvents() {
              this.listeners.forEach((a) => a()), this.listeners.clear();
            }
            stateChange(a) {
              var c;
              return Ft(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (c = this.SERVICE) === null || c === void 0
                    ? void 0
                    : c.aqm.agent.stateChange({ data: a });
              });
            }
            mockOutdialAniList() {
              var a;
              return Ft(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (a = this.SERVICE) === null || a === void 0
                    ? void 0
                    : a.aqm.agent.mockOutdialAniList({ p: null });
              });
            }
            fetchAddressBooks() {
              var a;
              return Ft(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (a = this.SERVICE) === null || a === void 0
                    ? void 0
                    : a.aqm.agent.fetchAddressBooks({ p: null });
              });
            }
            changeAgentState(a, c) {
              var P;
              return Ft(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (P = this.SERVICE) === null || P === void 0
                    ? void 0
                    : P.aqm.supervisor.changeAgentState({ orgId: a, data: c });
              });
            }
            fetchAgentIdleCodes(a, c) {
              var P;
              return Ft(this, void 0, void 0, function* () {
                if (this.checkService())
                  return yield (P = this.SERVICE) === null || P === void 0
                    ? void 0
                    : P.abs.fetchAgentIdleCodes({ orgId: a, agentId: c });
              });
            }
            fetchOrganizationIdleCodes(a) {
              var c;
              return Ft(this, void 0, void 0, function* () {
                if (this.checkService())
                  return yield (c = this.SERVICE) === null || c === void 0
                    ? void 0
                    : c.abs.fetchIdleCodes({ orgId: a, accessType: "ALL" });
              });
            }
            addEventListener(a, c) {
              this.checkService() && this.emitter.on(a, c);
            }
            removeEventListener(a, c) {
              this.checkService() && this.emitter.off(a, c);
            }
            removeAllEventListeners() {
              Q()(this.emitter);
            }
          }
          const Wt = p(f, "[AgentInfo JSAPI] =>");
          var re = function (vt, a, c, P) {
            return new (c || (c = Promise))(function (mt, ft) {
              function xt(ht) {
                try {
                  Ot(P.next(ht));
                } catch (ct) {
                  ft(ct);
                }
              }
              function Tt(ht) {
                try {
                  Ot(P.throw(ht));
                } catch (ct) {
                  ft(ct);
                }
              }
              function Ot(ht) {
                var ct;
                ht.done
                  ? mt(ht.value)
                  : ((ct = ht.value),
                    ct instanceof c
                      ? ct
                      : new c(function (Nt) {
                          Nt(ct);
                        })).then(xt, Tt);
              }
              Ot((P = P.apply(vt, [])).next());
            });
          };
          class b {
            constructor(a) {
              (this.initEventType = {}),
                (this.emitter = K()()),
                (this.logger = a.logger),
                (this.agentxSERVICE = a.SERVICE);
            }
            waitUntil(a) {
              return re(this, void 0, void 0, function* () {
                typeof a == "function" &&
                  (yield new Promise((c) => setTimeout(c, 1e3 / 30)),
                  !a() && (yield this.waitUntil(a)));
              });
            }
            checkService(a) {
              return re(this, void 0, void 0, function* () {
                a
                  ? (a.isInited ||
                      (this.logger.warn(
                        "SERVICE is not inited. Awaiting it's initAgentxServices(...)..."
                      ),
                      yield this.waitUntil(() => a.isInited)),
                    this.logger.info("SERVICE is inited. Continuing..."),
                    this.emit("inited"))
                  : this.logger.error("SERVICE is not defiend...");
              });
            }
            emit(a, ...c) {
              this.emitter.emit(a, ...c);
            }
            init(a) {
              return re(this, void 0, void 0, function* () {
                this.agentxSERVICE
                  ? yield this.checkService(this.agentxSERVICE)
                  : this.logger.error("SERVICE is not defined..."),
                  (this.initEventType.widgetName = a.widgetName),
                  (this.initEventType.widgetProvider = a.widgetProvider),
                  this.publishEvent("agentx-js-sdk-init");
              });
            }
            registerCrmConnector(a) {
              if (window.self !== window.top) {
                (this.initEventType.crmPlatform = a.crmPlatform),
                  (this.initEventType.crmConnectorProvider =
                    a.crmConnectorProvider || "Cisco"),
                  f.info(
                    `CRm Connector registered through JS SDK... [crmPlatform: ${this.initEventType.crmPlatform}, widgetProvider: ${this.initEventType.crmConnectorProvider}]  `
                  );
                const c = document.referrer;
                f.info("This Desktop is loaded inside an iframe.", c),
                  this.publishEvent("agentx-js-sdk-register-crm-connector");
              } else
                f.warn(
                  "This Desktop is not loaded inside an iframe. CRM Connector is not registered."
                );
            }
            publishEvent(a) {
              var c, P;
              const {
                  crmPlatform: mt,
                  crmConnectorProvider: ft,
                  widgetName: xt,
                  widgetProvider: Tt,
                } = this.initEventType,
                Ot = Object.assign(
                  {},
                  ...Object.entries(this.initEventType).map(([ht, ct]) =>
                    ct ? { [ht]: ct } : {}
                  )
                );
              this.logger.info("initEvent", Ot),
                f.info(
                  `Publishing js sdk init ${a} event : [widgetName: ${xt}, widgetProvider: ${Tt}, crmPlatform: ${mt}, crmConnectorProvider: ${ft}]`
                ),
                !((c = this.agentxSERVICE) === null || c === void 0) &&
                  c.mixpanel &&
                  (f.info(`tracking mixpanel for ${a} event `),
                  (P = this.agentxSERVICE) === null ||
                    P === void 0 ||
                    P.mixpanel.track(a, Object.assign({}, Ot)));
            }
            cleanup() {
              (this.agentxSERVICE = void 0),
                this.emit("cleaned"),
                this.logger.info("Cleaned");
            }
            get clientLocale() {
              return window.navigator.languages != null
                ? window.navigator.languages[0]
                : window.navigator.language;
            }
            addEventListener(a, c) {
              this.emitter.on(a, c);
            }
            removeEventListener(a, c) {
              this.emitter.off(a, c);
            }
          }
          const u = p(f, "[Config JSAPI] =>");
          var i = function (vt, a, c, P) {
            return new (c || (c = Promise))(function (mt, ft) {
              function xt(ht) {
                try {
                  Ot(P.next(ht));
                } catch (ct) {
                  ft(ct);
                }
              }
              function Tt(ht) {
                try {
                  Ot(P.throw(ht));
                } catch (ct) {
                  ft(ct);
                }
              }
              function Ot(ht) {
                var ct;
                ht.done
                  ? mt(ht.value)
                  : ((ct = ht.value),
                    ct instanceof c
                      ? ct
                      : new c(function (Nt) {
                          Nt(ct);
                        })).then(xt, Tt);
              }
              Ot((P = P.apply(vt, [])).next());
            });
          };
          class s {
            constructor(a) {
              (this.logger = a.logger),
                (this.aqmEvents = a.aqmEvents),
                (this.serviceChecker = a.serviceChecker);
            }
            checkService() {
              return this.serviceChecker.check(this.SERVICE);
            }
            init(a) {
              a && (this.SERVICE = a),
                this.checkService() &&
                  (this.aqmEvents.init({
                    aqmServiceEntity: this.SERVICE.aqm.dialer,
                    aqmServiceEntityString: "SERVICE.aqm.dialer",
                  }),
                  this.logger.info("Inited"));
            }
            cleanup() {
              this.aqmEvents.cleanup(),
                (this.SERVICE = void 0),
                this.logger.info("Cleaned");
            }
            startOutdial(a) {
              var c;
              return i(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (c = this.SERVICE) === null || c === void 0
                    ? void 0
                    : c.aqm.dialer.startOutdial(a);
              });
            }
            updateCadVariables(a) {
              var c;
              return i(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (c = this.SERVICE) === null || c === void 0
                    ? void 0
                    : c.aqm.dialer.updateCadVariables(a);
              });
            }
            addEventListener(a, c) {
              this.checkService() && this.aqmEvents.addEventListener(a, c);
            }
            addOnceEventListener(a, c) {
              this.checkService() && this.aqmEvents.addOnceEventListener(a, c);
            }
            removeEventListener(a, c) {
              this.aqmEvents.removeEventListener(a, c);
            }
            removeOnceEventListener(a, c) {
              this.aqmEvents.removeOnceEventListener(a, c);
            }
            removeAllEventListeners() {
              this.aqmEvents.removeAllEventListeners();
            }
          }
          const h = p(f, "[Dialer JSAPI] =>"),
            k = p(h, "[AqmServiceEvents: Dialer] =>");
          class d {
            constructor(a) {
              (this.logger = a.logger),
                (this.serviceChecker = a.serviceChecker);
            }
            checkService() {
              return this.serviceChecker.check(this.SERVICE);
            }
            init(a) {
              a && (this.SERVICE = a),
                this.checkService() && this.logger.info("Inited");
            }
            cleanup() {
              (this.SERVICE = void 0), this.logger.info("Cleaned");
            }
            createInstance(a) {
              return l.I18N.createService(a);
            }
            createMixin(a) {
              return l.I18N.createMixin(a);
            }
            get DEFAULT_INIT_OPTIONS() {
              var a;
              if (this.checkService())
                return (a = this.SERVICE) === null || a === void 0
                  ? void 0
                  : a.i18n.DEFAULT_INIT_OPTIONS;
            }
            getMergedInitOptions(...a) {
              return l.I18N.mergeServiceInitOptions(...a);
            }
          }
          const L = p(f, "[I18N JSAPI] =>");
          class S {
            constructor(a) {
              (this.clientLoggers = new Map()), (this.logger = a.logger);
            }
            createLogger(a) {
              const c = Object(l.createLogger)(a);
              return (
                this.clientLoggers.set(a, c),
                this.logger.info(`Client logger created: "${a}"`),
                c
              );
            }
            cleanupLogs(a) {
              this.clientLoggers.has(a) && l.Logger.POOL.cleanupPrefixedLogs(a);
            }
            browserDownloadLogsJson(a) {
              this.clientLoggers.has(a) &&
                l.Logger.POOL.browserDownloadPrefixedLogsJson(a);
            }
            browserDownloadLogsText(a) {
              this.clientLoggers.has(a) &&
                l.Logger.POOL.browserDownloadPrefixedLogsText(a);
            }
            getLogsCollection(a) {
              if (this.clientLoggers.has(a))
                return l.Logger.POOL.getPrefixedLogsCollection(a);
            }
            getLogsJsonUrl(a) {
              if (this.clientLoggers.has(a))
                return l.Logger.POOL.getPrefixedLogsJsonUrl(a);
            }
            getLogsTextUrl(a) {
              if (this.clientLoggers.has(a))
                return l.Logger.POOL.getPrefixedLogsTextUrl(a);
            }
          }
          const E = p(f, "[Logger JSAPI] =>");
          class T {
            constructor(a) {
              (this.logger = a.logger),
                (this.aqmEvents = a.aqmEvents),
                (this.serviceChecker = a.serviceChecker);
            }
            checkService() {
              return this.serviceChecker.check(this.SERVICE);
            }
            init(a) {
              a && (this.SERVICE = a),
                this.checkService() &&
                  (this.aqmEvents.init({
                    aqmServiceEntity: this.SERVICE.aqm.screenpop,
                    aqmServiceEntityString: "SERVICE.aqm.screenpop",
                  }),
                  this.logger.info("Inited"));
            }
            cleanup() {
              this.aqmEvents.cleanup(),
                (this.SERVICE = void 0),
                this.logger.info("Cleaned");
            }
            addEventListener(a, c) {
              this.checkService() && this.aqmEvents.addEventListener(a, c);
            }
            addOnceEventListener(a, c) {
              this.checkService() && this.aqmEvents.addOnceEventListener(a, c);
            }
            removeEventListener(a, c) {
              this.aqmEvents.removeEventListener(a, c);
            }
            removeOnceEventListener(a, c) {
              this.aqmEvents.removeOnceEventListener(a, c);
            }
            removeAllEventListeners() {
              this.aqmEvents.removeAllEventListeners();
            }
          }
          const x = p(f, "[ScreenPop JSAPI] =>"),
            _ = p(x, "[AqmServiceEvents: ScreenPop] =>");
          class H {
            constructor(a) {
              (this.logger = a.logger),
                (this.serviceChecker = a.serviceChecker);
            }
            checkService() {
              return this.serviceChecker.check(this.SERVICE);
            }
            init(a) {
              a && (this.SERVICE = a),
                this.checkService() && this.logger.info("Inited");
            }
            cleanup() {
              (this.SERVICE = void 0), this.logger.info("Cleaned");
            }
            listenKeyPress(...a) {
              var c;
              this.checkService() &&
                ((c = this.SERVICE) === null ||
                  c === void 0 ||
                  c.shortcut.event.listenKeyPress(...a));
            }
            listenKeyConflict(...a) {
              var c;
              this.checkService() &&
                ((c = this.SERVICE) === null ||
                  c === void 0 ||
                  c.shortcut.event.listenKeyConflict(...a));
            }
            listenConflictResolved(...a) {
              var c;
              this.checkService() &&
                ((c = this.SERVICE) === null ||
                  c === void 0 ||
                  c.shortcut.event.listenConflictResolved(...a));
            }
            register(...a) {
              var c;
              this.checkService() &&
                ((c = this.SERVICE) === null ||
                  c === void 0 ||
                  c.shortcut.register(...a));
            }
            unregisterKeys(...a) {
              var c;
              this.checkService() &&
                ((c = this.SERVICE) === null ||
                  c === void 0 ||
                  c.shortcut.unregisterKeys(...a));
            }
            getRegisteredKeys() {
              var a;
              if (this.checkService())
                return (a = this.SERVICE) === null || a === void 0
                  ? void 0
                  : a.shortcut.getRegisteredKeys();
            }
            get DEFAULT_SHORTCUT_KEYS() {
              var a;
              return (a = this.SERVICE) === null || a === void 0
                ? void 0
                : a.shortcut.DEFAULT_SHORTCUT_KEYS;
            }
            get MODIFIERS() {
              var a;
              return (a = this.SERVICE) === null || a === void 0
                ? void 0
                : a.shortcut.MODIFIERS;
            }
            get REGISTERED_KEYS() {
              var a;
              return (a = this.SERVICE) === null || a === void 0
                ? void 0
                : a.shortcut.REGISTERED_KEYS;
            }
          }
          const W = p(f, "[ShortcutKey JSAPI] =>");
          var tt = function (vt, a, c, P) {
            return new (c || (c = Promise))(function (mt, ft) {
              function xt(ht) {
                try {
                  Ot(P.next(ht));
                } catch (ct) {
                  ft(ct);
                }
              }
              function Tt(ht) {
                try {
                  Ot(P.throw(ht));
                } catch (ct) {
                  ft(ct);
                }
              }
              function Ot(ht) {
                var ct;
                ht.done
                  ? mt(ht.value)
                  : ((ct = ht.value),
                    ct instanceof c
                      ? ct
                      : new c(function (Nt) {
                          Nt(ct);
                        })).then(xt, Tt);
              }
              Ot((P = P.apply(vt, [])).next());
            });
          };
          class St {
            constructor(a) {
              (this.emitter = K()()), (this.logger = a.logger);
            }
            waitUntil(a) {
              return tt(this, void 0, void 0, function* () {
                typeof a == "function" &&
                  (yield new Promise((c) => setTimeout(c, 1e3 / 30)),
                  !a() && (yield this.waitUntil(a)));
              });
            }
            checkService() {
              var a, c, P, mt, ft;
              return tt(this, void 0, void 0, function* () {
                window.wxcc &&
                !((a = window.wxcc) === null || a === void 0) &&
                a.rtdwc
                  ? (!(
                      (P =
                        (c = window.wxcc) === null || c === void 0
                          ? void 0
                          : c.rtdwc) === null || P === void 0
                    ) &&
                      P.error &&
                      (this.logger.error(
                        "RTDWC initialization failed. Awaiting Websocket connection to establish",
                        (ft =
                          (mt = window.wxcc) === null || mt === void 0
                            ? void 0
                            : mt.rtdwc) === null || ft === void 0
                          ? void 0
                          : ft.error
                      ),
                      yield this.waitUntil(() => {
                        var xt, Tt;
                        return !(
                          !(
                            (Tt =
                              (xt = window.wxcc) === null || xt === void 0
                                ? void 0
                                : xt.rtdwc) === null || Tt === void 0
                          ) && Tt.error
                        );
                      })),
                    this.logger.info(
                      "Websocket connection established successfully. Continue to subscribe..."
                    ))
                  : this.logger.error("issue in loading rtdwc");
              });
            }
            init() {
              return tt(this, void 0, void 0, function* () {
                yield this.checkService(),
                  this.logger.info("rtdwc initialized");
              });
            }
            subscribe({ datasetName: a, update: c, error: P }) {
              var mt, ft;
              return tt(this, void 0, void 0, function* () {
                return (
                  yield this.checkService(),
                  yield (ft =
                    (mt = window.wxcc) === null || mt === void 0
                      ? void 0
                      : mt.rtdwc) === null || ft === void 0
                    ? void 0
                    : ft.subscribe({ datasetName: a, update: c, error: P })
                );
              });
            }
          }
          const Dt = p(f, "[RTDWC JSAPI] =>");
          var Pt = function (vt, a, c, P) {
            return new (c || (c = Promise))(function (mt, ft) {
              function xt(ht) {
                try {
                  Ot(P.next(ht));
                } catch (ct) {
                  ft(ct);
                }
              }
              function Tt(ht) {
                try {
                  Ot(P.throw(ht));
                } catch (ct) {
                  ft(ct);
                }
              }
              function Ot(ht) {
                var ct;
                ht.done
                  ? mt(ht.value)
                  : ((ct = ht.value),
                    ct instanceof c
                      ? ct
                      : new c(function (Nt) {
                          Nt(ct);
                        })).then(xt, Tt);
              }
              Ot((P = P.apply(vt, [])).next());
            });
          };
          class oe {
            constructor(a) {
              (this.logger = a.logger),
                (this.aqmEvents = a.aqmEvents),
                (this.serviceChecker = a.serviceChecker);
            }
            checkService() {
              return this.serviceChecker.check(this.SERVICE);
            }
            init(a) {
              a && (this.SERVICE = a),
                this.checkService() &&
                  (this.aqmEvents.init({
                    aqmServiceEntity: this.SERVICE.aqm.supervisor,
                    aqmServiceEntityString: "SERVICE.aqm.supervisor",
                  }),
                  this.logger.info("[JSAPI] Monitoring Inited"));
            }
            cleanup() {
              this.aqmEvents.cleanup(),
                (this.SERVICE = void 0),
                this.logger.info("Cleaned");
            }
            startMonitoring(a) {
              var c, P;
              return Pt(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (P =
                    (c = this.SERVICE) === null || c === void 0
                      ? void 0
                      : c.aqm.supervisor) === null || P === void 0
                    ? void 0
                    : P.startMonitoring(a);
              });
            }
            endMonitoring(a) {
              var c, P;
              return Pt(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (P =
                    (c = this.SERVICE) === null || c === void 0
                      ? void 0
                      : c.aqm.supervisor) === null || P === void 0
                    ? void 0
                    : P.endMonitoring(a);
              });
            }
            holdMonitoring(a) {
              var c, P;
              return Pt(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (P =
                    (c = this.SERVICE) === null || c === void 0
                      ? void 0
                      : c.aqm.supervisor) === null || P === void 0
                    ? void 0
                    : P.holdMonitoring(a);
              });
            }
            unHoldMonitoring(a) {
              var c, P;
              return Pt(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (P =
                    (c = this.SERVICE) === null || c === void 0
                      ? void 0
                      : c.aqm.supervisor) === null || P === void 0
                    ? void 0
                    : P.unHoldMonitoring(a);
              });
            }
            bargeIn(a) {
              var c, P;
              return Pt(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (P =
                    (c = this.SERVICE) === null || c === void 0
                      ? void 0
                      : c.aqm.supervisor) === null || P === void 0
                    ? void 0
                    : P.bargeIn(a);
              });
            }
            addEventListener(a, c) {
              this.checkService() && this.aqmEvents.addEventListener(a, c);
            }
            addOnceEventListener(a, c) {
              this.checkService() && this.aqmEvents.addOnceEventListener(a, c);
            }
            removeEventListener(a, c) {
              this.aqmEvents.removeEventListener(a, c);
            }
            removeOnceEventListener(a, c) {
              this.aqmEvents.removeOnceEventListener(a, c);
            }
            removeAllEventListeners() {
              this.aqmEvents.removeAllEventListeners();
            }
          }
          const te = p(f, "[Call Monitoring JSAPI] =>"),
            de = p(te, "[AqmServiceEvents: Call Monitoring] =>");
          var se = function (vt, a, c, P) {
            return new (c || (c = Promise))(function (mt, ft) {
              function xt(ht) {
                try {
                  Ot(P.next(ht));
                } catch (ct) {
                  ft(ct);
                }
              }
              function Tt(ht) {
                try {
                  Ot(P.throw(ht));
                } catch (ct) {
                  ft(ct);
                }
              }
              function Ot(ht) {
                var ct;
                ht.done
                  ? mt(ht.value)
                  : ((ct = ht.value),
                    ct instanceof c
                      ? ct
                      : new c(function (Nt) {
                          Nt(ct);
                        })).then(xt, Tt);
              }
              Ot((P = P.apply(vt, [])).next());
            });
          };
          class Re {
            constructor(a) {
              (this.logger = a.logger),
                (this.aqmEvents = a.aqmEvents),
                (this.serviceChecker = a.serviceChecker);
            }
            checkService() {
              return this.serviceChecker.check(this.SERVICE);
            }
            init(a) {
              a && (this.SERVICE = a),
                this.checkService() &&
                  (this.aqmEvents.init({
                    aqmServiceEntity: this.SERVICE.aqm.agent,
                    aqmServiceEntityString: "SERVICE.aqm.agent",
                  }),
                  this.logger.info("[JSAPI] Logout Inited"));
            }
            cleanup() {
              this.aqmEvents.cleanup(),
                (this.SERVICE = void 0),
                this.logger.info("Cleaned");
            }
            desktopLogout(a) {
              var c, P;
              return se(this, void 0, void 0, function* () {
                if (!this.checkService()) return;
                const mt = yield Oe.actions.getTaskMap();
                if ((mt == null ? void 0 : mt.size) !== 0)
                  throw new Error(
                    "You cannot sign out now because you have active conversations. Complete them and try again."
                  );
                return (P =
                  (c = this.SERVICE) === null || c === void 0
                    ? void 0
                    : c.aqm.agent) === null || P === void 0
                  ? void 0
                  : P.logout(a);
              });
            }
            addEventListener(a, c) {
              this.checkService() && this.aqmEvents.addEventListener(a, c);
            }
            addOnceEventListener(a, c) {
              this.checkService() && this.aqmEvents.addOnceEventListener(a, c);
            }
            removeEventListener(a, c) {
              this.aqmEvents.removeEventListener(a, c);
            }
            removeOnceEventListener(a, c) {
              this.aqmEvents.removeOnceEventListener(a, c);
            }
            removeAllEventListeners() {
              this.aqmEvents.removeAllEventListeners();
            }
          }
          const ue = p(f, "[Station Logout JSAPI] =>"),
            Le = p(ue, "[AqmServiceEvents: Call Monitoring] =>");
          var ae = function (vt, a, c, P) {
            return new (c || (c = Promise))(function (mt, ft) {
              function xt(ht) {
                try {
                  Ot(P.next(ht));
                } catch (ct) {
                  ft(ct);
                }
              }
              function Tt(ht) {
                try {
                  Ot(P.throw(ht));
                } catch (ct) {
                  ft(ct);
                }
              }
              function Ot(ht) {
                var ct;
                ht.done
                  ? mt(ht.value)
                  : ((ct = ht.value),
                    ct instanceof c
                      ? ct
                      : new c(function (Nt) {
                          Nt(ct);
                        })).then(xt, Tt);
              }
              Ot((P = P.apply(vt, [])).next());
            });
          };
          class Ne {
            constructor(a) {
              (this.logger = a.logger),
                (this.serviceChecker = a.serviceChecker);
            }
            checkService() {
              return this.serviceChecker.check(this.SERVICE);
            }
            init(a) {
              a && (this.SERVICE = a),
                this.checkService() && this.logger.info("[JSAPI] Initialized");
            }
            cleanup() {
              (this.SERVICE = void 0), this.logger.info("Cleaned");
            }
            fetchTasks(a) {
              var c, P;
              return ae(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (P =
                    (c = this.SERVICE) === null || c === void 0
                      ? void 0
                      : c.qmw) === null || P === void 0
                    ? void 0
                    : P.fetchTasks(a);
              });
            }
            fetchCapture(a) {
              var c, P;
              return ae(this, void 0, void 0, function* () {
                if (this.checkService())
                  return (P =
                    (c = this.SERVICE) === null || c === void 0
                      ? void 0
                      : c.qmw) === null || P === void 0
                    ? void 0
                    : P.fetchCapture(a);
              });
            }
          }
          const qt = p(f, "[PI JSAPI] =>"),
            Oe = (() => {
              AGENTX_SERVICE
                ? f.info('Found global "AGENTX_SERVICE"!')
                : f.error('Missed global "AGENTX_SERVICE"...');
              const vt =
                ((a = AGENTX_SERVICE), new b({ logger: u, SERVICE: a }));
              var a;
              const c = new S({ logger: E }),
                P = new H({ logger: W, serviceChecker: N({ logger: W }) }),
                mt = new V({ logger: g, serviceChecker: N({ logger: g }) }),
                ft = new Ht({ logger: Wt, serviceChecker: N({ logger: Wt }) }),
                xt = new lt({
                  logger: yt,
                  serviceChecker: N({ logger: yt }),
                  aqmEvents: w({ logger: Rt }),
                }),
                Tt = new s({
                  logger: h,
                  aqmEvents: w({ logger: k }),
                  serviceChecker: N({ logger: h }),
                }),
                Ot = new oe({
                  logger: te,
                  aqmEvents: w({ logger: de }),
                  serviceChecker: N({ logger: te }),
                }),
                ht = new T({
                  logger: x,
                  aqmEvents: w({ logger: _ }),
                  serviceChecker: N({ logger: x }),
                }),
                ct = new Re({
                  logger: ue,
                  aqmEvents: w({ logger: Le }),
                  serviceChecker: N({ logger: ue }),
                }),
                Nt = new d({ logger: L, serviceChecker: N({ logger: L }) }),
                Jt = new St({ logger: Dt });
              Jt.init();
              const pe = new Ne({
                logger: qt,
                serviceChecker: N({ logger: qt }),
              });
              return (
                vt.addEventListener("inited", () => {
                  xt.init(AGENTX_SERVICE),
                    ft.init(AGENTX_SERVICE),
                    Tt.init(AGENTX_SERVICE),
                    Ot.init(AGENTX_SERVICE),
                    ht.init(AGENTX_SERVICE),
                    ct.init(AGENTX_SERVICE),
                    pe.init(AGENTX_SERVICE),
                    P.init(AGENTX_SERVICE),
                    mt.init(AGENTX_SERVICE),
                    Nt.init(AGENTX_SERVICE);
                }),
                vt.addEventListener("cleaned", () => {
                  xt.cleanup(),
                    ft.cleanup(),
                    Tt.cleanup(),
                    Ot.cleanup(),
                    ht.cleanup(),
                    ct.cleanup(),
                    pe.cleanup(),
                    P.cleanup(),
                    Nt.cleanup(),
                    mt.cleanup();
                }),
                {
                  config: vt,
                  logger: c,
                  monitoring: Ot,
                  shortcutKey: P,
                  actions: mt,
                  agentContact: xt,
                  agentStateInfo: ft,
                  dialer: Tt,
                  screenpop: ht,
                  i18n: Nt,
                  rtdwc: Jt,
                  postInteractions: pe,
                  logout: ct,
                }
              );
            })();
        },
        function (R, $, y) {
          y.r($),
            y.d($, "v1", function () {
              return J;
            }),
            y.d($, "v3", function () {
              return F;
            }),
            y.d($, "v4", function () {
              return bt;
            }),
            y.d($, "v5", function () {
              return jt;
            });
          var l =
              (typeof crypto < "u" &&
                crypto.getRandomValues &&
                crypto.getRandomValues.bind(crypto)) ||
              (typeof msCrypto < "u" &&
                typeof msCrypto.getRandomValues == "function" &&
                msCrypto.getRandomValues.bind(msCrypto)),
            f = new Uint8Array(16);
          function p() {
            if (!l)
              throw new Error(
                "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
              );
            return l(f);
          }
          for (var C = [], N = 0; N < 256; ++N)
            C[N] = (N + 256).toString(16).substr(1);
          var A,
            j,
            B = function (z, Y) {
              var V = 0,
                g = C;
              return [
                g[z[V++]],
                g[z[V++]],
                g[z[V++]],
                g[z[V++]],
                "-",
                g[z[V++]],
                g[z[V++]],
                "-",
                g[z[V++]],
                g[z[V++]],
                "-",
                g[z[V++]],
                g[z[V++]],
                "-",
                g[z[V++]],
                g[z[V++]],
                g[z[V++]],
                g[z[V++]],
                g[z[V++]],
                g[z[V++]],
              ].join("");
            },
            v = 0,
            U = 0,
            J = function (z, Y, V) {
              var g = (Y && V) || 0,
                D = Y || [],
                w = (z = z || {}).node || A,
                at = z.clockseq !== void 0 ? z.clockseq : j;
              if (w == null || at == null) {
                var lt = z.random || (z.rng || p)();
                w == null &&
                  (w = A = [1 | lt[0], lt[1], lt[2], lt[3], lt[4], lt[5]]),
                  at == null && (at = j = 16383 & ((lt[6] << 8) | lt[7]));
              }
              var yt = z.msecs !== void 0 ? z.msecs : new Date().getTime(),
                Rt = z.nsecs !== void 0 ? z.nsecs : U + 1,
                G = yt - v + (Rt - U) / 1e4;
              if (
                (G < 0 && z.clockseq === void 0 && (at = (at + 1) & 16383),
                (G < 0 || yt > v) && z.nsecs === void 0 && (Rt = 0),
                Rt >= 1e4)
              )
                throw new Error(
                  "uuid.v1(): Can't create more than 10M uuids/sec"
                );
              (v = yt), (U = Rt), (j = at);
              var K =
                (1e4 * (268435455 & (yt += 122192928e5)) + Rt) % 4294967296;
              (D[g++] = (K >>> 24) & 255),
                (D[g++] = (K >>> 16) & 255),
                (D[g++] = (K >>> 8) & 255),
                (D[g++] = 255 & K);
              var rt = ((yt / 4294967296) * 1e4) & 268435455;
              (D[g++] = (rt >>> 8) & 255),
                (D[g++] = 255 & rt),
                (D[g++] = ((rt >>> 24) & 15) | 16),
                (D[g++] = (rt >>> 16) & 255),
                (D[g++] = (at >>> 8) | 128),
                (D[g++] = 255 & at);
              for (var Q = 0; Q < 6; ++Q) D[g + Q] = w[Q];
              return Y || B(D);
            },
            ot = function (z, Y, V) {
              var g = function (D, w, at, lt) {
                var yt = (at && lt) || 0;
                if (
                  (typeof D == "string" &&
                    (D = (function (K) {
                      K = unescape(encodeURIComponent(K));
                      for (
                        var rt = new Array(K.length), Q = 0;
                        Q < K.length;
                        Q++
                      )
                        rt[Q] = K.charCodeAt(Q);
                      return rt;
                    })(D)),
                  typeof w == "string" &&
                    (w = (function (K) {
                      var rt = [];
                      return (
                        K.replace(/[a-fA-F0-9]{2}/g, function (Q) {
                          rt.push(parseInt(Q, 16));
                        }),
                        rt
                      );
                    })(w)),
                  !Array.isArray(D))
                )
                  throw TypeError("value must be an array of bytes");
                if (!Array.isArray(w) || w.length !== 16)
                  throw TypeError(
                    "namespace must be uuid string or an Array of 16 byte values"
                  );
                var Rt = V(w.concat(D));
                if (
                  ((Rt[6] = (15 & Rt[6]) | Y), (Rt[8] = (63 & Rt[8]) | 128), at)
                )
                  for (var G = 0; G < 16; ++G) at[yt + G] = Rt[G];
                return at || B(Rt);
              };
              try {
                g.name = z;
              } catch {}
              return (
                (g.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"),
                (g.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"),
                g
              );
            };
          function Z(z, Y) {
            var V = (65535 & z) + (65535 & Y);
            return (((z >> 16) + (Y >> 16) + (V >> 16)) << 16) | (65535 & V);
          }
          function X(z, Y, V, g, D, w) {
            return Z(
              ((at = Z(Z(Y, z), Z(g, w))) << (lt = D)) | (at >>> (32 - lt)),
              V
            );
            var at, lt;
          }
          function I(z, Y, V, g, D, w, at) {
            return X((Y & V) | (~Y & g), z, Y, D, w, at);
          }
          function it(z, Y, V, g, D, w, at) {
            return X((Y & g) | (V & ~g), z, Y, D, w, at);
          }
          function dt(z, Y, V, g, D, w, at) {
            return X(Y ^ V ^ g, z, Y, D, w, at);
          }
          function st(z, Y, V, g, D, w, at) {
            return X(V ^ (Y | ~g), z, Y, D, w, at);
          }
          var F = ot("v3", 48, function (z) {
              if (typeof z == "string") {
                var Y = unescape(encodeURIComponent(z));
                z = new Array(Y.length);
                for (var V = 0; V < Y.length; V++) z[V] = Y.charCodeAt(V);
              }
              return (function (g) {
                var D,
                  w,
                  at,
                  lt = [],
                  yt = 32 * g.length;
                for (D = 0; D < yt; D += 8)
                  (w = (g[D >> 5] >>> D % 32) & 255),
                    (at = parseInt(
                      "0123456789abcdef".charAt((w >>> 4) & 15) +
                        "0123456789abcdef".charAt(15 & w),
                      16
                    )),
                    lt.push(at);
                return lt;
              })(
                (function (g, D) {
                  var w, at, lt, yt, Rt;
                  (g[D >> 5] |= 128 << D % 32),
                    (g[14 + (((D + 64) >>> 9) << 4)] = D);
                  var G = 1732584193,
                    K = -271733879,
                    rt = -1732584194,
                    Q = 271733878;
                  for (w = 0; w < g.length; w += 16)
                    (at = G),
                      (lt = K),
                      (yt = rt),
                      (Rt = Q),
                      (G = I(G, K, rt, Q, g[w], 7, -680876936)),
                      (Q = I(Q, G, K, rt, g[w + 1], 12, -389564586)),
                      (rt = I(rt, Q, G, K, g[w + 2], 17, 606105819)),
                      (K = I(K, rt, Q, G, g[w + 3], 22, -1044525330)),
                      (G = I(G, K, rt, Q, g[w + 4], 7, -176418897)),
                      (Q = I(Q, G, K, rt, g[w + 5], 12, 1200080426)),
                      (rt = I(rt, Q, G, K, g[w + 6], 17, -1473231341)),
                      (K = I(K, rt, Q, G, g[w + 7], 22, -45705983)),
                      (G = I(G, K, rt, Q, g[w + 8], 7, 1770035416)),
                      (Q = I(Q, G, K, rt, g[w + 9], 12, -1958414417)),
                      (rt = I(rt, Q, G, K, g[w + 10], 17, -42063)),
                      (K = I(K, rt, Q, G, g[w + 11], 22, -1990404162)),
                      (G = I(G, K, rt, Q, g[w + 12], 7, 1804603682)),
                      (Q = I(Q, G, K, rt, g[w + 13], 12, -40341101)),
                      (rt = I(rt, Q, G, K, g[w + 14], 17, -1502002290)),
                      (K = I(K, rt, Q, G, g[w + 15], 22, 1236535329)),
                      (G = it(G, K, rt, Q, g[w + 1], 5, -165796510)),
                      (Q = it(Q, G, K, rt, g[w + 6], 9, -1069501632)),
                      (rt = it(rt, Q, G, K, g[w + 11], 14, 643717713)),
                      (K = it(K, rt, Q, G, g[w], 20, -373897302)),
                      (G = it(G, K, rt, Q, g[w + 5], 5, -701558691)),
                      (Q = it(Q, G, K, rt, g[w + 10], 9, 38016083)),
                      (rt = it(rt, Q, G, K, g[w + 15], 14, -660478335)),
                      (K = it(K, rt, Q, G, g[w + 4], 20, -405537848)),
                      (G = it(G, K, rt, Q, g[w + 9], 5, 568446438)),
                      (Q = it(Q, G, K, rt, g[w + 14], 9, -1019803690)),
                      (rt = it(rt, Q, G, K, g[w + 3], 14, -187363961)),
                      (K = it(K, rt, Q, G, g[w + 8], 20, 1163531501)),
                      (G = it(G, K, rt, Q, g[w + 13], 5, -1444681467)),
                      (Q = it(Q, G, K, rt, g[w + 2], 9, -51403784)),
                      (rt = it(rt, Q, G, K, g[w + 7], 14, 1735328473)),
                      (K = it(K, rt, Q, G, g[w + 12], 20, -1926607734)),
                      (G = dt(G, K, rt, Q, g[w + 5], 4, -378558)),
                      (Q = dt(Q, G, K, rt, g[w + 8], 11, -2022574463)),
                      (rt = dt(rt, Q, G, K, g[w + 11], 16, 1839030562)),
                      (K = dt(K, rt, Q, G, g[w + 14], 23, -35309556)),
                      (G = dt(G, K, rt, Q, g[w + 1], 4, -1530992060)),
                      (Q = dt(Q, G, K, rt, g[w + 4], 11, 1272893353)),
                      (rt = dt(rt, Q, G, K, g[w + 7], 16, -155497632)),
                      (K = dt(K, rt, Q, G, g[w + 10], 23, -1094730640)),
                      (G = dt(G, K, rt, Q, g[w + 13], 4, 681279174)),
                      (Q = dt(Q, G, K, rt, g[w], 11, -358537222)),
                      (rt = dt(rt, Q, G, K, g[w + 3], 16, -722521979)),
                      (K = dt(K, rt, Q, G, g[w + 6], 23, 76029189)),
                      (G = dt(G, K, rt, Q, g[w + 9], 4, -640364487)),
                      (Q = dt(Q, G, K, rt, g[w + 12], 11, -421815835)),
                      (rt = dt(rt, Q, G, K, g[w + 15], 16, 530742520)),
                      (K = dt(K, rt, Q, G, g[w + 2], 23, -995338651)),
                      (G = st(G, K, rt, Q, g[w], 6, -198630844)),
                      (Q = st(Q, G, K, rt, g[w + 7], 10, 1126891415)),
                      (rt = st(rt, Q, G, K, g[w + 14], 15, -1416354905)),
                      (K = st(K, rt, Q, G, g[w + 5], 21, -57434055)),
                      (G = st(G, K, rt, Q, g[w + 12], 6, 1700485571)),
                      (Q = st(Q, G, K, rt, g[w + 3], 10, -1894986606)),
                      (rt = st(rt, Q, G, K, g[w + 10], 15, -1051523)),
                      (K = st(K, rt, Q, G, g[w + 1], 21, -2054922799)),
                      (G = st(G, K, rt, Q, g[w + 8], 6, 1873313359)),
                      (Q = st(Q, G, K, rt, g[w + 15], 10, -30611744)),
                      (rt = st(rt, Q, G, K, g[w + 6], 15, -1560198380)),
                      (K = st(K, rt, Q, G, g[w + 13], 21, 1309151649)),
                      (G = st(G, K, rt, Q, g[w + 4], 6, -145523070)),
                      (Q = st(Q, G, K, rt, g[w + 11], 10, -1120210379)),
                      (rt = st(rt, Q, G, K, g[w + 2], 15, 718787259)),
                      (K = st(K, rt, Q, G, g[w + 9], 21, -343485551)),
                      (G = Z(G, at)),
                      (K = Z(K, lt)),
                      (rt = Z(rt, yt)),
                      (Q = Z(Q, Rt));
                  return [G, K, rt, Q];
                })(
                  (function (g) {
                    var D,
                      w = [];
                    for (
                      w[(g.length >> 2) - 1] = void 0, D = 0;
                      D < w.length;
                      D += 1
                    )
                      w[D] = 0;
                    var at = 8 * g.length;
                    for (D = 0; D < at; D += 8)
                      w[D >> 5] |= (255 & g[D / 8]) << D % 32;
                    return w;
                  })(z),
                  8 * z.length
                )
              );
            }),
            bt = function (z, Y, V) {
              var g = (Y && V) || 0;
              typeof z == "string" &&
                ((Y = z === "binary" ? new Array(16) : null), (z = null));
              var D = (z = z || {}).random || (z.rng || p)();
              if (((D[6] = (15 & D[6]) | 64), (D[8] = (63 & D[8]) | 128), Y))
                for (var w = 0; w < 16; ++w) Y[g + w] = D[w];
              return Y || B(D);
            };
          function wt(z, Y, V, g) {
            switch (z) {
              case 0:
                return (Y & V) ^ (~Y & g);
              case 1:
                return Y ^ V ^ g;
              case 2:
                return (Y & V) ^ (Y & g) ^ (V & g);
              case 3:
                return Y ^ V ^ g;
            }
          }
          function Lt(z, Y) {
            return (z << Y) | (z >>> (32 - Y));
          }
          var jt = ot("v5", 80, function (z) {
            var Y = [1518500249, 1859775393, 2400959708, 3395469782],
              V = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
            if (typeof z == "string") {
              var g = unescape(encodeURIComponent(z));
              z = new Array(g.length);
              for (var D = 0; D < g.length; D++) z[D] = g.charCodeAt(D);
            }
            z.push(128);
            var w = z.length / 4 + 2,
              at = Math.ceil(w / 16),
              lt = new Array(at);
            for (D = 0; D < at; D++) {
              lt[D] = new Array(16);
              for (var yt = 0; yt < 16; yt++)
                lt[D][yt] =
                  (z[64 * D + 4 * yt] << 24) |
                  (z[64 * D + 4 * yt + 1] << 16) |
                  (z[64 * D + 4 * yt + 2] << 8) |
                  z[64 * D + 4 * yt + 3];
            }
            for (
              lt[at - 1][14] = (8 * (z.length - 1)) / Math.pow(2, 32),
                lt[at - 1][14] = Math.floor(lt[at - 1][14]),
                lt[at - 1][15] = (8 * (z.length - 1)) & 4294967295,
                D = 0;
              D < at;
              D++
            ) {
              for (var Rt = new Array(80), G = 0; G < 16; G++) Rt[G] = lt[D][G];
              for (G = 16; G < 80; G++)
                Rt[G] = Lt(Rt[G - 3] ^ Rt[G - 8] ^ Rt[G - 14] ^ Rt[G - 16], 1);
              var K = V[0],
                rt = V[1],
                Q = V[2],
                Ft = V[3],
                zt = V[4];
              for (G = 0; G < 80; G++) {
                var Ht = Math.floor(G / 20),
                  Wt =
                    (Lt(K, 5) + wt(Ht, rt, Q, Ft) + zt + Y[Ht] + Rt[G]) >>> 0;
                (zt = Ft), (Ft = Q), (Q = Lt(rt, 30) >>> 0), (rt = K), (K = Wt);
              }
              (V[0] = (V[0] + K) >>> 0),
                (V[1] = (V[1] + rt) >>> 0),
                (V[2] = (V[2] + Q) >>> 0),
                (V[3] = (V[3] + Ft) >>> 0),
                (V[4] = (V[4] + zt) >>> 0);
            }
            return [
              (V[0] >> 24) & 255,
              (V[0] >> 16) & 255,
              (V[0] >> 8) & 255,
              255 & V[0],
              (V[1] >> 24) & 255,
              (V[1] >> 16) & 255,
              (V[1] >> 8) & 255,
              255 & V[1],
              (V[2] >> 24) & 255,
              (V[2] >> 16) & 255,
              (V[2] >> 8) & 255,
              255 & V[2],
              (V[3] >> 24) & 255,
              (V[3] >> 16) & 255,
              (V[3] >> 8) & 255,
              255 & V[3],
              (V[4] >> 24) & 255,
              (V[4] >> 16) & 255,
              (V[4] >> 8) & 255,
              255 & V[4],
            ];
          });
        },
        function (R, $, y) {
          y.r($);
          var l = y(2),
            f = y(8);
          function p(b, u, i) {
            return (
              (u = Object(f.a)(u)) in b
                ? Object.defineProperty(b, u, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (b[u] = i),
              b
            );
          }
          function C(b) {
            for (var u = 1; u < arguments.length; u++) {
              var i = arguments[u] != null ? Object(arguments[u]) : {},
                s = Object.keys(i);
              typeof Object.getOwnPropertySymbols == "function" &&
                s.push.apply(
                  s,
                  Object.getOwnPropertySymbols(i).filter(function (h) {
                    return Object.getOwnPropertyDescriptor(i, h).enumerable;
                  })
                ),
                s.forEach(function (h) {
                  p(b, h, i[h]);
                });
            }
            return b;
          }
          var N = y(3),
            A = y(4);
          function j(b) {
            if (b === void 0)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return b;
          }
          function B(b, u) {
            if (u && (Object(l.a)(u) === "object" || typeof u == "function"))
              return u;
            if (u !== void 0)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return j(b);
          }
          function v(b) {
            return (v = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (u) {
                  return u.__proto__ || Object.getPrototypeOf(u);
                })(b);
          }
          function U(b, u) {
            return (U = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (i, s) {
                  return (i.__proto__ = s), i;
                })(b, u);
          }
          function J(b, u) {
            if (typeof u != "function" && u !== null)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (b.prototype = Object.create(u && u.prototype, {
              constructor: { value: b, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(b, "prototype", { writable: !1 }),
              u && U(b, u);
          }
          var ot = {
              type: "logger",
              log: function (b) {
                this.output("log", b);
              },
              warn: function (b) {
                this.output("warn", b);
              },
              error: function (b) {
                this.output("error", b);
              },
              output: function (b, u) {
                console && console[b] && console[b].apply(console, u);
              },
            },
            Z = new ((function () {
              function b(u) {
                var i =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
                Object(N.a)(this, b), this.init(u, i);
              }
              return (
                Object(A.a)(b, [
                  {
                    key: "init",
                    value: function (u) {
                      var i =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : {};
                      (this.prefix = i.prefix || "i18next:"),
                        (this.logger = u || ot),
                        (this.options = i),
                        (this.debug = i.debug);
                    },
                  },
                  {
                    key: "setDebug",
                    value: function (u) {
                      this.debug = u;
                    },
                  },
                  {
                    key: "log",
                    value: function () {
                      for (
                        var u = arguments.length, i = new Array(u), s = 0;
                        s < u;
                        s++
                      )
                        i[s] = arguments[s];
                      return this.forward(i, "log", "", !0);
                    },
                  },
                  {
                    key: "warn",
                    value: function () {
                      for (
                        var u = arguments.length, i = new Array(u), s = 0;
                        s < u;
                        s++
                      )
                        i[s] = arguments[s];
                      return this.forward(i, "warn", "", !0);
                    },
                  },
                  {
                    key: "error",
                    value: function () {
                      for (
                        var u = arguments.length, i = new Array(u), s = 0;
                        s < u;
                        s++
                      )
                        i[s] = arguments[s];
                      return this.forward(i, "error", "");
                    },
                  },
                  {
                    key: "deprecate",
                    value: function () {
                      for (
                        var u = arguments.length, i = new Array(u), s = 0;
                        s < u;
                        s++
                      )
                        i[s] = arguments[s];
                      return this.forward(
                        i,
                        "warn",
                        "WARNING DEPRECATED: ",
                        !0
                      );
                    },
                  },
                  {
                    key: "forward",
                    value: function (u, i, s, h) {
                      return h && !this.debug
                        ? null
                        : (typeof u[0] == "string" &&
                            (u[0] = ""
                              .concat(s)
                              .concat(this.prefix, " ")
                              .concat(u[0])),
                          this.logger[i](u));
                    },
                  },
                  {
                    key: "create",
                    value: function (u) {
                      return new b(
                        this.logger,
                        C(
                          {},
                          {
                            prefix: "".concat(this.prefix, ":").concat(u, ":"),
                          },
                          this.options
                        )
                      );
                    },
                  },
                ]),
                b
              );
            })())(),
            X = (function () {
              function b() {
                Object(N.a)(this, b), (this.observers = {});
              }
              return (
                Object(A.a)(b, [
                  {
                    key: "on",
                    value: function (u, i) {
                      var s = this;
                      return (
                        u.split(" ").forEach(function (h) {
                          (s.observers[h] = s.observers[h] || []),
                            s.observers[h].push(i);
                        }),
                        this
                      );
                    },
                  },
                  {
                    key: "off",
                    value: function (u, i) {
                      this.observers[u] &&
                        (i
                          ? (this.observers[u] = this.observers[u].filter(
                              function (s) {
                                return s !== i;
                              }
                            ))
                          : delete this.observers[u]);
                    },
                  },
                  {
                    key: "emit",
                    value: function (u) {
                      for (
                        var i = arguments.length,
                          s = new Array(i > 1 ? i - 1 : 0),
                          h = 1;
                        h < i;
                        h++
                      )
                        s[h - 1] = arguments[h];
                      if (this.observers[u]) {
                        var k = [].concat(this.observers[u]);
                        k.forEach(function (L) {
                          L.apply(void 0, s);
                        });
                      }
                      if (this.observers["*"]) {
                        var d = [].concat(this.observers["*"]);
                        d.forEach(function (L) {
                          L.apply(L, [u].concat(s));
                        });
                      }
                    },
                  },
                ]),
                b
              );
            })();
          function I() {
            var b,
              u,
              i = new Promise(function (s, h) {
                (b = s), (u = h);
              });
            return (i.resolve = b), (i.reject = u), i;
          }
          function it(b) {
            return b == null ? "" : "" + b;
          }
          function dt(b, u, i) {
            b.forEach(function (s) {
              u[s] && (i[s] = u[s]);
            });
          }
          function st(b, u, i) {
            function s(L) {
              return L && L.indexOf("###") > -1 ? L.replace(/###/g, ".") : L;
            }
            function h() {
              return !b || typeof b == "string";
            }
            for (
              var k = typeof u != "string" ? [].concat(u) : u.split(".");
              k.length > 1;

            ) {
              if (h()) return {};
              var d = s(k.shift());
              !b[d] && i && (b[d] = new i()),
                (b = Object.prototype.hasOwnProperty.call(b, d) ? b[d] : {});
            }
            return h() ? {} : { obj: b, k: s(k.shift()) };
          }
          function F(b, u, i) {
            var s = st(b, u, Object);
            s.obj[s.k] = i;
          }
          function bt(b, u) {
            var i = st(b, u),
              s = i.obj,
              h = i.k;
            if (s) return s[h];
          }
          function wt(b, u, i) {
            var s = bt(b, i);
            return s !== void 0 ? s : bt(u, i);
          }
          function Lt(b, u, i) {
            for (var s in u)
              s !== "__proto__" &&
                s !== "constructor" &&
                (s in b
                  ? typeof b[s] == "string" ||
                    b[s] instanceof String ||
                    typeof u[s] == "string" ||
                    u[s] instanceof String
                    ? i && (b[s] = u[s])
                    : Lt(b[s], u[s], i)
                  : (b[s] = u[s]));
            return b;
          }
          function jt(b) {
            return b.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
          }
          var z = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
          };
          function Y(b) {
            return typeof b == "string"
              ? b.replace(/[&<>"'\/]/g, function (u) {
                  return z[u];
                })
              : b;
          }
          var V =
              typeof window < "u" &&
              window.navigator &&
              window.navigator.userAgent &&
              window.navigator.userAgent.indexOf("MSIE") > -1,
            g = (function (b) {
              function u(i) {
                var s,
                  h =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : { ns: ["translation"], defaultNS: "translation" };
                return (
                  Object(N.a)(this, u),
                  (s = B(this, v(u).call(this))),
                  V && X.call(j(s)),
                  (s.data = i || {}),
                  (s.options = h),
                  s.options.keySeparator === void 0 &&
                    (s.options.keySeparator = "."),
                  s
                );
              }
              return (
                J(u, b),
                Object(A.a)(u, [
                  {
                    key: "addNamespaces",
                    value: function (i) {
                      this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
                    },
                  },
                  {
                    key: "removeNamespaces",
                    value: function (i) {
                      var s = this.options.ns.indexOf(i);
                      s > -1 && this.options.ns.splice(s, 1);
                    },
                  },
                  {
                    key: "getResource",
                    value: function (i, s, h) {
                      var k =
                          arguments.length > 3 && arguments[3] !== void 0
                            ? arguments[3]
                            : {},
                        d =
                          k.keySeparator !== void 0
                            ? k.keySeparator
                            : this.options.keySeparator,
                        L = [i, s];
                      return (
                        h && typeof h != "string" && (L = L.concat(h)),
                        h &&
                          typeof h == "string" &&
                          (L = L.concat(d ? h.split(d) : h)),
                        i.indexOf(".") > -1 && (L = i.split(".")),
                        bt(this.data, L)
                      );
                    },
                  },
                  {
                    key: "addResource",
                    value: function (i, s, h, k) {
                      var d =
                          arguments.length > 4 && arguments[4] !== void 0
                            ? arguments[4]
                            : { silent: !1 },
                        L = this.options.keySeparator;
                      L === void 0 && (L = ".");
                      var S = [i, s];
                      h && (S = S.concat(L ? h.split(L) : h)),
                        i.indexOf(".") > -1 &&
                          ((k = s), (s = (S = i.split("."))[1])),
                        this.addNamespaces(s),
                        F(this.data, S, k),
                        d.silent || this.emit("added", i, s, h, k);
                    },
                  },
                  {
                    key: "addResources",
                    value: function (i, s, h) {
                      var k =
                        arguments.length > 3 && arguments[3] !== void 0
                          ? arguments[3]
                          : { silent: !1 };
                      for (var d in h)
                        (typeof h[d] != "string" &&
                          Object.prototype.toString.apply(h[d]) !==
                            "[object Array]") ||
                          this.addResource(i, s, d, h[d], { silent: !0 });
                      k.silent || this.emit("added", i, s, h);
                    },
                  },
                  {
                    key: "addResourceBundle",
                    value: function (i, s, h, k, d) {
                      var L =
                          arguments.length > 5 && arguments[5] !== void 0
                            ? arguments[5]
                            : { silent: !1 },
                        S = [i, s];
                      i.indexOf(".") > -1 &&
                        ((k = h), (h = s), (s = (S = i.split("."))[1])),
                        this.addNamespaces(s);
                      var E = bt(this.data, S) || {};
                      k ? Lt(E, h, d) : (E = C({}, E, h)),
                        F(this.data, S, E),
                        L.silent || this.emit("added", i, s, h);
                    },
                  },
                  {
                    key: "removeResourceBundle",
                    value: function (i, s) {
                      this.hasResourceBundle(i, s) && delete this.data[i][s],
                        this.removeNamespaces(s),
                        this.emit("removed", i, s);
                    },
                  },
                  {
                    key: "hasResourceBundle",
                    value: function (i, s) {
                      return this.getResource(i, s) !== void 0;
                    },
                  },
                  {
                    key: "getResourceBundle",
                    value: function (i, s) {
                      return (
                        s || (s = this.options.defaultNS),
                        this.options.compatibilityAPI === "v1"
                          ? C({}, {}, this.getResource(i, s))
                          : this.getResource(i, s)
                      );
                    },
                  },
                  {
                    key: "getDataByLanguage",
                    value: function (i) {
                      return this.data[i];
                    },
                  },
                  {
                    key: "toJSON",
                    value: function () {
                      return this.data;
                    },
                  },
                ]),
                u
              );
            })(X),
            D = {
              processors: {},
              addPostProcessor: function (b) {
                this.processors[b.name] = b;
              },
              handle: function (b, u, i, s, h) {
                var k = this;
                return (
                  b.forEach(function (d) {
                    k.processors[d] &&
                      (u = k.processors[d].process(u, i, s, h));
                  }),
                  u
                );
              },
            },
            w = {},
            at = (function (b) {
              function u(i) {
                var s,
                  h =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {};
                return (
                  Object(N.a)(this, u),
                  (s = B(this, v(u).call(this))),
                  V && X.call(j(s)),
                  dt(
                    [
                      "resourceStore",
                      "languageUtils",
                      "pluralResolver",
                      "interpolator",
                      "backendConnector",
                      "i18nFormat",
                      "utils",
                    ],
                    i,
                    j(s)
                  ),
                  (s.options = h),
                  s.options.keySeparator === void 0 &&
                    (s.options.keySeparator = "."),
                  (s.logger = Z.create("translator")),
                  s
                );
              }
              return (
                J(u, b),
                Object(A.a)(
                  u,
                  [
                    {
                      key: "changeLanguage",
                      value: function (i) {
                        i && (this.language = i);
                      },
                    },
                    {
                      key: "exists",
                      value: function (i) {
                        var s =
                            arguments.length > 1 && arguments[1] !== void 0
                              ? arguments[1]
                              : { interpolation: {} },
                          h = this.resolve(i, s);
                        return h && h.res !== void 0;
                      },
                    },
                    {
                      key: "extractFromKey",
                      value: function (i, s) {
                        var h =
                          s.nsSeparator !== void 0
                            ? s.nsSeparator
                            : this.options.nsSeparator;
                        h === void 0 && (h = ":");
                        var k =
                            s.keySeparator !== void 0
                              ? s.keySeparator
                              : this.options.keySeparator,
                          d = s.ns || this.options.defaultNS;
                        if (h && i.indexOf(h) > -1) {
                          var L = i.match(this.interpolator.nestingRegexp);
                          if (L && L.length > 0)
                            return { key: i, namespaces: d };
                          var S = i.split(h);
                          (h !== k ||
                            (h === k && this.options.ns.indexOf(S[0]) > -1)) &&
                            (d = S.shift()),
                            (i = S.join(k));
                        }
                        return (
                          typeof d == "string" && (d = [d]),
                          { key: i, namespaces: d }
                        );
                      },
                    },
                    {
                      key: "translate",
                      value: function (i, s, h) {
                        var k = this;
                        if (
                          (Object(l.a)(s) !== "object" &&
                            this.options.overloadTranslationOptionHandler &&
                            (s =
                              this.options.overloadTranslationOptionHandler(
                                arguments
                              )),
                          s || (s = {}),
                          i == null)
                        )
                          return "";
                        Array.isArray(i) || (i = [String(i)]);
                        var d =
                            s.keySeparator !== void 0
                              ? s.keySeparator
                              : this.options.keySeparator,
                          L = this.extractFromKey(i[i.length - 1], s),
                          S = L.key,
                          E = L.namespaces,
                          T = E[E.length - 1],
                          x = s.lng || this.language,
                          _ =
                            s.appendNamespaceToCIMode ||
                            this.options.appendNamespaceToCIMode;
                        if (x && x.toLowerCase() === "cimode") {
                          if (_) {
                            var H = s.nsSeparator || this.options.nsSeparator;
                            return T + H + S;
                          }
                          return S;
                        }
                        var W = this.resolve(i, s),
                          tt = W && W.res,
                          St = (W && W.usedKey) || S,
                          Dt = (W && W.exactUsedKey) || S,
                          Pt = Object.prototype.toString.apply(tt),
                          oe = [
                            "[object Number]",
                            "[object Function]",
                            "[object RegExp]",
                          ],
                          te =
                            s.joinArrays !== void 0
                              ? s.joinArrays
                              : this.options.joinArrays,
                          de =
                            !this.i18nFormat || this.i18nFormat.handleAsObject,
                          se =
                            typeof tt != "string" &&
                            typeof tt != "boolean" &&
                            typeof tt != "number";
                        if (
                          de &&
                          tt &&
                          se &&
                          oe.indexOf(Pt) < 0 &&
                          (typeof te != "string" || Pt !== "[object Array]")
                        ) {
                          if (!s.returnObjects && !this.options.returnObjects)
                            return (
                              this.logger.warn(
                                "accessing an object - but returnObjects options is not enabled!"
                              ),
                              this.options.returnedObjectHandler
                                ? this.options.returnedObjectHandler(St, tt, s)
                                : "key '"
                                    .concat(S, " (")
                                    .concat(
                                      this.language,
                                      ")' returned an object instead of string."
                                    )
                            );
                          if (d) {
                            var Re = Pt === "[object Array]",
                              ue = Re ? [] : {},
                              Le = Re ? Dt : St;
                            for (var ae in tt)
                              if (
                                Object.prototype.hasOwnProperty.call(tt, ae)
                              ) {
                                var Ne = "".concat(Le).concat(d).concat(ae);
                                (ue[ae] = this.translate(
                                  Ne,
                                  C({}, s, { joinArrays: !1, ns: E })
                                )),
                                  ue[ae] === Ne && (ue[ae] = tt[ae]);
                              }
                            tt = ue;
                          }
                        } else if (
                          de &&
                          typeof te == "string" &&
                          Pt === "[object Array]"
                        )
                          (tt = tt.join(te)) &&
                            (tt = this.extendTranslation(tt, i, s, h));
                        else {
                          var qt = !1,
                            Oe = !1,
                            vt =
                              s.count !== void 0 && typeof s.count != "string",
                            a = u.hasDefaultValue(s),
                            c = vt
                              ? this.pluralResolver.getSuffix(x, s.count)
                              : "",
                            P = s["defaultValue".concat(c)] || s.defaultValue;
                          !this.isValidLookup(tt) && a && ((qt = !0), (tt = P)),
                            this.isValidLookup(tt) || ((Oe = !0), (tt = S));
                          var mt = a && P !== tt && this.options.updateMissing;
                          if (Oe || qt || mt) {
                            if (
                              (this.logger.log(
                                mt ? "updateKey" : "missingKey",
                                x,
                                T,
                                S,
                                mt ? P : tt
                              ),
                              d)
                            ) {
                              var ft = this.resolve(
                                S,
                                C({}, s, { keySeparator: !1 })
                              );
                              ft &&
                                ft.res &&
                                this.logger.warn(
                                  "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
                                );
                            }
                            var xt = [],
                              Tt = this.languageUtils.getFallbackCodes(
                                this.options.fallbackLng,
                                s.lng || this.language
                              );
                            if (
                              this.options.saveMissingTo === "fallback" &&
                              Tt &&
                              Tt[0]
                            )
                              for (var Ot = 0; Ot < Tt.length; Ot++)
                                xt.push(Tt[Ot]);
                            else
                              this.options.saveMissingTo === "all"
                                ? (xt = this.languageUtils.toResolveHierarchy(
                                    s.lng || this.language
                                  ))
                                : xt.push(s.lng || this.language);
                            var ht = function (ct, Nt, Jt) {
                              k.options.missingKeyHandler
                                ? k.options.missingKeyHandler(
                                    ct,
                                    T,
                                    Nt,
                                    mt ? Jt : tt,
                                    mt,
                                    s
                                  )
                                : k.backendConnector &&
                                  k.backendConnector.saveMissing &&
                                  k.backendConnector.saveMissing(
                                    ct,
                                    T,
                                    Nt,
                                    mt ? Jt : tt,
                                    mt,
                                    s
                                  ),
                                k.emit("missingKey", ct, T, Nt, tt);
                            };
                            this.options.saveMissing &&
                              (this.options.saveMissingPlurals && vt
                                ? xt.forEach(function (ct) {
                                    k.pluralResolver
                                      .getSuffixes(ct)
                                      .forEach(function (Nt) {
                                        ht(
                                          [ct],
                                          S + Nt,
                                          s["defaultValue".concat(Nt)] || P
                                        );
                                      });
                                  })
                                : ht(xt, S, P));
                          }
                          (tt = this.extendTranslation(tt, i, s, W, h)),
                            Oe &&
                              tt === S &&
                              this.options.appendNamespaceToMissingKey &&
                              (tt = "".concat(T, ":").concat(S)),
                            Oe &&
                              this.options.parseMissingKeyHandler &&
                              (tt = this.options.parseMissingKeyHandler(tt));
                        }
                        return tt;
                      },
                    },
                    {
                      key: "extendTranslation",
                      value: function (i, s, h, k, d) {
                        var L = this;
                        if (this.i18nFormat && this.i18nFormat.parse)
                          i = this.i18nFormat.parse(
                            i,
                            h,
                            k.usedLng,
                            k.usedNS,
                            k.usedKey,
                            { resolved: k }
                          );
                        else if (!h.skipInterpolation) {
                          h.interpolation &&
                            this.interpolator.init(
                              C({}, h, {
                                interpolation: C(
                                  {},
                                  this.options.interpolation,
                                  h.interpolation
                                ),
                              })
                            );
                          var S,
                            E =
                              (h.interpolation &&
                                h.interpolation.skipOnVariables) ||
                              this.options.interpolation.skipOnVariables;
                          if (E) {
                            var T = i.match(this.interpolator.nestingRegexp);
                            S = T && T.length;
                          }
                          var x =
                            h.replace && typeof h.replace != "string"
                              ? h.replace
                              : h;
                          if (
                            (this.options.interpolation.defaultVariables &&
                              (x = C(
                                {},
                                this.options.interpolation.defaultVariables,
                                x
                              )),
                            (i = this.interpolator.interpolate(
                              i,
                              x,
                              h.lng || this.language,
                              h
                            )),
                            E)
                          ) {
                            var _ = i.match(this.interpolator.nestingRegexp);
                            S < (_ && _.length) && (h.nest = !1);
                          }
                          h.nest !== !1 &&
                            (i = this.interpolator.nest(
                              i,
                              function () {
                                for (
                                  var tt = arguments.length,
                                    St = new Array(tt),
                                    Dt = 0;
                                  Dt < tt;
                                  Dt++
                                )
                                  St[Dt] = arguments[Dt];
                                return d && d[0] === St[0] && !h.context
                                  ? (L.logger.warn(
                                      "It seems you are nesting recursively key: "
                                        .concat(St[0], " in key: ")
                                        .concat(s[0])
                                    ),
                                    null)
                                  : L.translate.apply(L, St.concat([s]));
                              },
                              h
                            )),
                            h.interpolation && this.interpolator.reset();
                        }
                        var H = h.postProcess || this.options.postProcess,
                          W = typeof H == "string" ? [H] : H;
                        return (
                          i != null &&
                            W &&
                            W.length &&
                            h.applyPostProcessor !== !1 &&
                            (i = D.handle(
                              W,
                              i,
                              s,
                              this.options &&
                                this.options.postProcessPassResolved
                                ? C({ i18nResolved: k }, h)
                                : h,
                              this
                            )),
                          i
                        );
                      },
                    },
                    {
                      key: "resolve",
                      value: function (i) {
                        var s,
                          h,
                          k,
                          d,
                          L,
                          S = this,
                          E =
                            arguments.length > 1 && arguments[1] !== void 0
                              ? arguments[1]
                              : {};
                        return (
                          typeof i == "string" && (i = [i]),
                          i.forEach(function (T) {
                            if (!S.isValidLookup(s)) {
                              var x = S.extractFromKey(T, E),
                                _ = x.key;
                              h = _;
                              var H = x.namespaces;
                              S.options.fallbackNS &&
                                (H = H.concat(S.options.fallbackNS));
                              var W =
                                  E.count !== void 0 &&
                                  typeof E.count != "string",
                                tt =
                                  E.context !== void 0 &&
                                  typeof E.context == "string" &&
                                  E.context !== "",
                                St = E.lngs
                                  ? E.lngs
                                  : S.languageUtils.toResolveHierarchy(
                                      E.lng || S.language,
                                      E.fallbackLng
                                    );
                              H.forEach(function (Dt) {
                                S.isValidLookup(s) ||
                                  ((L = Dt),
                                  !w["".concat(St[0], "-").concat(Dt)] &&
                                    S.utils &&
                                    S.utils.hasLoadedNamespace &&
                                    !S.utils.hasLoadedNamespace(L) &&
                                    ((w["".concat(St[0], "-").concat(Dt)] = !0),
                                    S.logger.warn(
                                      'key "'
                                        .concat(h, '" for languages "')
                                        .concat(
                                          St.join(", "),
                                          `" won't get resolved as namespace "`
                                        )
                                        .concat(L, '" was not yet loaded'),
                                      "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                                    )),
                                  St.forEach(function (Pt) {
                                    if (!S.isValidLookup(s)) {
                                      d = Pt;
                                      var oe,
                                        te,
                                        de = _,
                                        se = [de];
                                      for (
                                        S.i18nFormat &&
                                        S.i18nFormat.addLookupKeys
                                          ? S.i18nFormat.addLookupKeys(
                                              se,
                                              _,
                                              Pt,
                                              Dt,
                                              E
                                            )
                                          : (W &&
                                              (oe = S.pluralResolver.getSuffix(
                                                Pt,
                                                E.count
                                              )),
                                            W && tt && se.push(de + oe),
                                            tt &&
                                              se.push(
                                                (de += ""
                                                  .concat(
                                                    S.options.contextSeparator
                                                  )
                                                  .concat(E.context))
                                              ),
                                            W && se.push((de += oe)));
                                        (te = se.pop());

                                      )
                                        S.isValidLookup(s) ||
                                          ((k = te),
                                          (s = S.getResource(Pt, Dt, te, E)));
                                    }
                                  }));
                              });
                            }
                          }),
                          {
                            res: s,
                            usedKey: h,
                            exactUsedKey: k,
                            usedLng: d,
                            usedNS: L,
                          }
                        );
                      },
                    },
                    {
                      key: "isValidLookup",
                      value: function (i) {
                        return !(
                          i === void 0 ||
                          (!this.options.returnNull && i === null) ||
                          (!this.options.returnEmptyString && i === "")
                        );
                      },
                    },
                    {
                      key: "getResource",
                      value: function (i, s, h) {
                        var k =
                          arguments.length > 3 && arguments[3] !== void 0
                            ? arguments[3]
                            : {};
                        return this.i18nFormat && this.i18nFormat.getResource
                          ? this.i18nFormat.getResource(i, s, h, k)
                          : this.resourceStore.getResource(i, s, h, k);
                      },
                    },
                  ],
                  [
                    {
                      key: "hasDefaultValue",
                      value: function (i) {
                        for (var s in i)
                          if (
                            Object.prototype.hasOwnProperty.call(i, s) &&
                            s.substring(0, 12) === "defaultValue" &&
                            i[s] !== void 0
                          )
                            return !0;
                        return !1;
                      },
                    },
                  ]
                ),
                u
              );
            })(X);
          function lt(b) {
            return b.charAt(0).toUpperCase() + b.slice(1);
          }
          var yt = (function () {
              function b(u) {
                Object(N.a)(this, b),
                  (this.options = u),
                  (this.whitelist = this.options.supportedLngs || !1),
                  (this.supportedLngs = this.options.supportedLngs || !1),
                  (this.logger = Z.create("languageUtils"));
              }
              return (
                Object(A.a)(b, [
                  {
                    key: "getScriptPartFromCode",
                    value: function (u) {
                      if (!u || u.indexOf("-") < 0) return null;
                      var i = u.split("-");
                      return i.length === 2
                        ? null
                        : (i.pop(),
                          i[i.length - 1].toLowerCase() === "x"
                            ? null
                            : this.formatLanguageCode(i.join("-")));
                    },
                  },
                  {
                    key: "getLanguagePartFromCode",
                    value: function (u) {
                      if (!u || u.indexOf("-") < 0) return u;
                      var i = u.split("-");
                      return this.formatLanguageCode(i[0]);
                    },
                  },
                  {
                    key: "formatLanguageCode",
                    value: function (u) {
                      if (typeof u == "string" && u.indexOf("-") > -1) {
                        var i = [
                            "hans",
                            "hant",
                            "latn",
                            "cyrl",
                            "cans",
                            "mong",
                            "arab",
                          ],
                          s = u.split("-");
                        return (
                          this.options.lowerCaseLng
                            ? (s = s.map(function (h) {
                                return h.toLowerCase();
                              }))
                            : s.length === 2
                            ? ((s[0] = s[0].toLowerCase()),
                              (s[1] = s[1].toUpperCase()),
                              i.indexOf(s[1].toLowerCase()) > -1 &&
                                (s[1] = lt(s[1].toLowerCase())))
                            : s.length === 3 &&
                              ((s[0] = s[0].toLowerCase()),
                              s[1].length === 2 && (s[1] = s[1].toUpperCase()),
                              s[0] !== "sgn" &&
                                s[2].length === 2 &&
                                (s[2] = s[2].toUpperCase()),
                              i.indexOf(s[1].toLowerCase()) > -1 &&
                                (s[1] = lt(s[1].toLowerCase())),
                              i.indexOf(s[2].toLowerCase()) > -1 &&
                                (s[2] = lt(s[2].toLowerCase()))),
                          s.join("-")
                        );
                      }
                      return this.options.cleanCode || this.options.lowerCaseLng
                        ? u.toLowerCase()
                        : u;
                    },
                  },
                  {
                    key: "isWhitelisted",
                    value: function (u) {
                      return (
                        this.logger.deprecate(
                          "languageUtils.isWhitelisted",
                          `function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it's usage asap.`
                        ),
                        this.isSupportedCode(u)
                      );
                    },
                  },
                  {
                    key: "isSupportedCode",
                    value: function (u) {
                      return (
                        (this.options.load === "languageOnly" ||
                          this.options.nonExplicitSupportedLngs) &&
                          (u = this.getLanguagePartFromCode(u)),
                        !this.supportedLngs ||
                          !this.supportedLngs.length ||
                          this.supportedLngs.indexOf(u) > -1
                      );
                    },
                  },
                  {
                    key: "getBestMatchFromCodes",
                    value: function (u) {
                      var i,
                        s = this;
                      return u
                        ? (u.forEach(function (h) {
                            if (!i) {
                              var k = s.formatLanguageCode(h);
                              (s.options.supportedLngs &&
                                !s.isSupportedCode(k)) ||
                                (i = k);
                            }
                          }),
                          !i &&
                            this.options.supportedLngs &&
                            u.forEach(function (h) {
                              if (!i) {
                                var k = s.getLanguagePartFromCode(h);
                                if (s.isSupportedCode(k)) return (i = k);
                                i = s.options.supportedLngs.find(function (d) {
                                  if (d.indexOf(k) === 0) return d;
                                });
                              }
                            }),
                          i ||
                            (i = this.getFallbackCodes(
                              this.options.fallbackLng
                            )[0]),
                          i)
                        : null;
                    },
                  },
                  {
                    key: "getFallbackCodes",
                    value: function (u, i) {
                      if (!u) return [];
                      if (
                        (typeof u == "function" && (u = u(i)),
                        typeof u == "string" && (u = [u]),
                        Object.prototype.toString.apply(u) === "[object Array]")
                      )
                        return u;
                      if (!i) return u.default || [];
                      var s = u[i];
                      return (
                        s || (s = u[this.getScriptPartFromCode(i)]),
                        s || (s = u[this.formatLanguageCode(i)]),
                        s || (s = u[this.getLanguagePartFromCode(i)]),
                        s || (s = u.default),
                        s || []
                      );
                    },
                  },
                  {
                    key: "toResolveHierarchy",
                    value: function (u, i) {
                      var s = this,
                        h = this.getFallbackCodes(
                          i || this.options.fallbackLng || [],
                          u
                        ),
                        k = [],
                        d = function (L) {
                          L &&
                            (s.isSupportedCode(L)
                              ? k.push(L)
                              : s.logger.warn(
                                  "rejecting language code not found in supportedLngs: ".concat(
                                    L
                                  )
                                ));
                        };
                      return (
                        typeof u == "string" && u.indexOf("-") > -1
                          ? (this.options.load !== "languageOnly" &&
                              d(this.formatLanguageCode(u)),
                            this.options.load !== "languageOnly" &&
                              this.options.load !== "currentOnly" &&
                              d(this.getScriptPartFromCode(u)),
                            this.options.load !== "currentOnly" &&
                              d(this.getLanguagePartFromCode(u)))
                          : typeof u == "string" &&
                            d(this.formatLanguageCode(u)),
                        h.forEach(function (L) {
                          k.indexOf(L) < 0 && d(s.formatLanguageCode(L));
                        }),
                        k
                      );
                    },
                  },
                ]),
                b
              );
            })(),
            Rt = [
              {
                lngs: [
                  "ach",
                  "ak",
                  "am",
                  "arn",
                  "br",
                  "fil",
                  "gun",
                  "ln",
                  "mfe",
                  "mg",
                  "mi",
                  "oc",
                  "pt",
                  "pt-BR",
                  "tg",
                  "tl",
                  "ti",
                  "tr",
                  "uz",
                  "wa",
                ],
                nr: [1, 2],
                fc: 1,
              },
              {
                lngs: [
                  "af",
                  "an",
                  "ast",
                  "az",
                  "bg",
                  "bn",
                  "ca",
                  "da",
                  "de",
                  "dev",
                  "el",
                  "en",
                  "eo",
                  "es",
                  "et",
                  "eu",
                  "fi",
                  "fo",
                  "fur",
                  "fy",
                  "gl",
                  "gu",
                  "ha",
                  "hi",
                  "hu",
                  "hy",
                  "ia",
                  "it",
                  "kn",
                  "ku",
                  "lb",
                  "mai",
                  "ml",
                  "mn",
                  "mr",
                  "nah",
                  "nap",
                  "nb",
                  "ne",
                  "nl",
                  "nn",
                  "no",
                  "nso",
                  "pa",
                  "pap",
                  "pms",
                  "ps",
                  "pt-PT",
                  "rm",
                  "sco",
                  "se",
                  "si",
                  "so",
                  "son",
                  "sq",
                  "sv",
                  "sw",
                  "ta",
                  "te",
                  "tk",
                  "ur",
                  "yo",
                ],
                nr: [1, 2],
                fc: 2,
              },
              {
                lngs: [
                  "ay",
                  "bo",
                  "cgg",
                  "fa",
                  "ht",
                  "id",
                  "ja",
                  "jbo",
                  "ka",
                  "kk",
                  "km",
                  "ko",
                  "ky",
                  "lo",
                  "ms",
                  "sah",
                  "su",
                  "th",
                  "tt",
                  "ug",
                  "vi",
                  "wo",
                  "zh",
                ],
                nr: [1],
                fc: 3,
              },
              {
                lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
                nr: [1, 2, 5],
                fc: 4,
              },
              { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
              { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
              { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
              { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
              { lngs: ["fr"], nr: [1, 2], fc: 9 },
              { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
              { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
              { lngs: ["is"], nr: [1, 2], fc: 12 },
              { lngs: ["jv"], nr: [0, 1], fc: 13 },
              { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
              { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
              { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
              { lngs: ["mk"], nr: [1, 2], fc: 17 },
              { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
              { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
              { lngs: ["or"], nr: [2, 1], fc: 2 },
              { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
              { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
              { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
            ],
            G = {
              1: function (b) {
                return +(b > 1);
              },
              2: function (b) {
                return +(b != 1);
              },
              3: function (b) {
                return 0;
              },
              4: function (b) {
                return b % 10 == 1 && b % 100 != 11
                  ? 0
                  : b % 10 >= 2 &&
                    b % 10 <= 4 &&
                    (b % 100 < 10 || b % 100 >= 20)
                  ? 1
                  : 2;
              },
              5: function (b) {
                return b == 0
                  ? 0
                  : b == 1
                  ? 1
                  : b == 2
                  ? 2
                  : b % 100 >= 3 && b % 100 <= 10
                  ? 3
                  : b % 100 >= 11
                  ? 4
                  : 5;
              },
              6: function (b) {
                return b == 1 ? 0 : b >= 2 && b <= 4 ? 1 : 2;
              },
              7: function (b) {
                return b == 1
                  ? 0
                  : b % 10 >= 2 &&
                    b % 10 <= 4 &&
                    (b % 100 < 10 || b % 100 >= 20)
                  ? 1
                  : 2;
              },
              8: function (b) {
                return b == 1 ? 0 : b == 2 ? 1 : b != 8 && b != 11 ? 2 : 3;
              },
              9: function (b) {
                return +(b >= 2);
              },
              10: function (b) {
                return b == 1 ? 0 : b == 2 ? 1 : b < 7 ? 2 : b < 11 ? 3 : 4;
              },
              11: function (b) {
                return b == 1 || b == 11
                  ? 0
                  : b == 2 || b == 12
                  ? 1
                  : b > 2 && b < 20
                  ? 2
                  : 3;
              },
              12: function (b) {
                return +(b % 10 != 1 || b % 100 == 11);
              },
              13: function (b) {
                return +(b !== 0);
              },
              14: function (b) {
                return b == 1 ? 0 : b == 2 ? 1 : b == 3 ? 2 : 3;
              },
              15: function (b) {
                return b % 10 == 1 && b % 100 != 11
                  ? 0
                  : b % 10 >= 2 && (b % 100 < 10 || b % 100 >= 20)
                  ? 1
                  : 2;
              },
              16: function (b) {
                return b % 10 == 1 && b % 100 != 11 ? 0 : b !== 0 ? 1 : 2;
              },
              17: function (b) {
                return b == 1 || (b % 10 == 1 && b % 100 != 11) ? 0 : 1;
              },
              18: function (b) {
                return b == 0 ? 0 : b == 1 ? 1 : 2;
              },
              19: function (b) {
                return b == 1
                  ? 0
                  : b == 0 || (b % 100 > 1 && b % 100 < 11)
                  ? 1
                  : b % 100 > 10 && b % 100 < 20
                  ? 2
                  : 3;
              },
              20: function (b) {
                return b == 1
                  ? 0
                  : b == 0 || (b % 100 > 0 && b % 100 < 20)
                  ? 1
                  : 2;
              },
              21: function (b) {
                return b % 100 == 1
                  ? 1
                  : b % 100 == 2
                  ? 2
                  : b % 100 == 3 || b % 100 == 4
                  ? 3
                  : 0;
              },
              22: function (b) {
                return b == 1
                  ? 0
                  : b == 2
                  ? 1
                  : (b < 0 || b > 10) && b % 10 == 0
                  ? 2
                  : 3;
              },
            };
          function K() {
            var b = {};
            return (
              Rt.forEach(function (u) {
                u.lngs.forEach(function (i) {
                  b[i] = { numbers: u.nr, plurals: G[u.fc] };
                });
              }),
              b
            );
          }
          var rt = (function () {
              function b(u) {
                var i =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
                Object(N.a)(this, b),
                  (this.languageUtils = u),
                  (this.options = i),
                  (this.logger = Z.create("pluralResolver")),
                  (this.rules = K());
              }
              return (
                Object(A.a)(b, [
                  {
                    key: "addRule",
                    value: function (u, i) {
                      this.rules[u] = i;
                    },
                  },
                  {
                    key: "getRule",
                    value: function (u) {
                      return (
                        this.rules[u] ||
                        this.rules[
                          this.languageUtils.getLanguagePartFromCode(u)
                        ]
                      );
                    },
                  },
                  {
                    key: "needsPlural",
                    value: function (u) {
                      var i = this.getRule(u);
                      return i && i.numbers.length > 1;
                    },
                  },
                  {
                    key: "getPluralFormsOfKey",
                    value: function (u, i) {
                      return this.getSuffixes(u).map(function (s) {
                        return i + s;
                      });
                    },
                  },
                  {
                    key: "getSuffixes",
                    value: function (u) {
                      var i = this,
                        s = this.getRule(u);
                      return s
                        ? s.numbers.map(function (h) {
                            return i.getSuffix(u, h);
                          })
                        : [];
                    },
                  },
                  {
                    key: "getSuffix",
                    value: function (u, i) {
                      var s = this,
                        h = this.getRule(u);
                      if (h) {
                        var k = h.noAbs ? h.plurals(i) : h.plurals(Math.abs(i)),
                          d = h.numbers[k];
                        this.options.simplifyPluralSuffix &&
                          h.numbers.length === 2 &&
                          h.numbers[0] === 1 &&
                          (d === 2 ? (d = "plural") : d === 1 && (d = ""));
                        var L = function () {
                          return s.options.prepend && d.toString()
                            ? s.options.prepend + d.toString()
                            : d.toString();
                        };
                        return this.options.compatibilityJSON === "v1"
                          ? d === 1
                            ? ""
                            : typeof d == "number"
                            ? "_plural_".concat(d.toString())
                            : L()
                          : this.options.compatibilityJSON === "v2" ||
                            (this.options.simplifyPluralSuffix &&
                              h.numbers.length === 2 &&
                              h.numbers[0] === 1)
                          ? L()
                          : this.options.prepend && k.toString()
                          ? this.options.prepend + k.toString()
                          : k.toString();
                      }
                      return (
                        this.logger.warn(
                          "no plural rule found for: ".concat(u)
                        ),
                        ""
                      );
                    },
                  },
                ]),
                b
              );
            })(),
            Q = (function () {
              function b() {
                var u =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {};
                Object(N.a)(this, b),
                  (this.logger = Z.create("interpolator")),
                  (this.options = u),
                  (this.format =
                    (u.interpolation && u.interpolation.format) ||
                    function (i) {
                      return i;
                    }),
                  this.init(u);
              }
              return (
                Object(A.a)(b, [
                  {
                    key: "init",
                    value: function () {
                      var u =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : {};
                      u.interpolation ||
                        (u.interpolation = { escapeValue: !0 });
                      var i = u.interpolation;
                      (this.escape = i.escape !== void 0 ? i.escape : Y),
                        (this.escapeValue =
                          i.escapeValue === void 0 || i.escapeValue),
                        (this.useRawValueToEscape =
                          i.useRawValueToEscape !== void 0 &&
                          i.useRawValueToEscape),
                        (this.prefix = i.prefix
                          ? jt(i.prefix)
                          : i.prefixEscaped || "{{"),
                        (this.suffix = i.suffix
                          ? jt(i.suffix)
                          : i.suffixEscaped || "}}"),
                        (this.formatSeparator = i.formatSeparator
                          ? i.formatSeparator
                          : i.formatSeparator || ","),
                        (this.unescapePrefix = i.unescapeSuffix
                          ? ""
                          : i.unescapePrefix || "-"),
                        (this.unescapeSuffix = this.unescapePrefix
                          ? ""
                          : i.unescapeSuffix || ""),
                        (this.nestingPrefix = i.nestingPrefix
                          ? jt(i.nestingPrefix)
                          : i.nestingPrefixEscaped || jt("$t(")),
                        (this.nestingSuffix = i.nestingSuffix
                          ? jt(i.nestingSuffix)
                          : i.nestingSuffixEscaped || jt(")")),
                        (this.nestingOptionsSeparator =
                          i.nestingOptionsSeparator
                            ? i.nestingOptionsSeparator
                            : i.nestingOptionsSeparator || ","),
                        (this.maxReplaces = i.maxReplaces
                          ? i.maxReplaces
                          : 1e3),
                        (this.alwaysFormat =
                          i.alwaysFormat !== void 0 && i.alwaysFormat),
                        this.resetRegExp();
                    },
                  },
                  {
                    key: "reset",
                    value: function () {
                      this.options && this.init(this.options);
                    },
                  },
                  {
                    key: "resetRegExp",
                    value: function () {
                      var u = ""
                        .concat(this.prefix, "(.+?)")
                        .concat(this.suffix);
                      this.regexp = new RegExp(u, "g");
                      var i = ""
                        .concat(this.prefix)
                        .concat(this.unescapePrefix, "(.+?)")
                        .concat(this.unescapeSuffix)
                        .concat(this.suffix);
                      this.regexpUnescape = new RegExp(i, "g");
                      var s = ""
                        .concat(this.nestingPrefix, "(.+?)")
                        .concat(this.nestingSuffix);
                      this.nestingRegexp = new RegExp(s, "g");
                    },
                  },
                  {
                    key: "interpolate",
                    value: function (u, i, s, h) {
                      var k,
                        d,
                        L,
                        S = this,
                        E =
                          (this.options &&
                            this.options.interpolation &&
                            this.options.interpolation.defaultVariables) ||
                          {};
                      function T(W) {
                        return W.replace(/\$/g, "$$$$");
                      }
                      var x = function (W) {
                        if (W.indexOf(S.formatSeparator) < 0) {
                          var tt = wt(i, E, W);
                          return S.alwaysFormat ? S.format(tt, void 0, s) : tt;
                        }
                        var St = W.split(S.formatSeparator),
                          Dt = St.shift().trim(),
                          Pt = St.join(S.formatSeparator).trim();
                        return S.format(wt(i, E, Dt), Pt, s, h);
                      };
                      this.resetRegExp();
                      var _ =
                          (h && h.missingInterpolationHandler) ||
                          this.options.missingInterpolationHandler,
                        H =
                          (h &&
                            h.interpolation &&
                            h.interpolation.skipOnVariables) ||
                          this.options.interpolation.skipOnVariables;
                      return (
                        [
                          {
                            regex: this.regexpUnescape,
                            safeValue: function (W) {
                              return T(W);
                            },
                          },
                          {
                            regex: this.regexp,
                            safeValue: function (W) {
                              return S.escapeValue ? T(S.escape(W)) : T(W);
                            },
                          },
                        ].forEach(function (W) {
                          for (L = 0; (k = W.regex.exec(u)); ) {
                            if ((d = x(k[1].trim())) === void 0)
                              if (typeof _ == "function") {
                                var tt = _(u, k, h);
                                d = typeof tt == "string" ? tt : "";
                              } else {
                                if (H) {
                                  d = k[0];
                                  continue;
                                }
                                S.logger.warn(
                                  "missed to pass in variable "
                                    .concat(k[1], " for interpolating ")
                                    .concat(u)
                                ),
                                  (d = "");
                              }
                            else
                              typeof d == "string" ||
                                S.useRawValueToEscape ||
                                (d = it(d));
                            if (
                              ((u = u.replace(k[0], W.safeValue(d))),
                              (W.regex.lastIndex = 0),
                              ++L >= S.maxReplaces)
                            )
                              break;
                          }
                        }),
                        u
                      );
                    },
                  },
                  {
                    key: "nest",
                    value: function (u, i) {
                      var s,
                        h,
                        k = this,
                        d =
                          arguments.length > 2 && arguments[2] !== void 0
                            ? arguments[2]
                            : {},
                        L = C({}, d);
                      function S(_, H) {
                        var W = this.nestingOptionsSeparator;
                        if (_.indexOf(W) < 0) return _;
                        var tt = _.split(new RegExp("".concat(W, "[ ]*{"))),
                          St = "{".concat(tt[1]);
                        (_ = tt[0]),
                          (St = (St = this.interpolate(St, L)).replace(
                            /'/g,
                            '"'
                          ));
                        try {
                          (L = JSON.parse(St)), H && (L = C({}, H, L));
                        } catch (Dt) {
                          return (
                            this.logger.warn(
                              "failed parsing options string in nesting for key ".concat(
                                _
                              ),
                              Dt
                            ),
                            "".concat(_).concat(W).concat(St)
                          );
                        }
                        return delete L.defaultValue, _;
                      }
                      for (
                        L.applyPostProcessor = !1, delete L.defaultValue;
                        (s = this.nestingRegexp.exec(u));

                      ) {
                        var E = [],
                          T = !1;
                        if (
                          s[0].includes(this.formatSeparator) &&
                          !/{.*}/.test(s[1])
                        ) {
                          var x = s[1]
                            .split(this.formatSeparator)
                            .map(function (_) {
                              return _.trim();
                            });
                          (s[1] = x.shift()), (E = x), (T = !0);
                        }
                        if (
                          (h = i(S.call(this, s[1].trim(), L), L)) &&
                          s[0] === u &&
                          typeof h != "string"
                        )
                          return h;
                        typeof h != "string" && (h = it(h)),
                          h ||
                            (this.logger.warn(
                              "missed to resolve "
                                .concat(s[1], " for nesting ")
                                .concat(u)
                            ),
                            (h = "")),
                          T &&
                            (h = E.reduce(function (_, H) {
                              return k.format(_, H, d.lng, d);
                            }, h.trim())),
                          (u = u.replace(s[0], h)),
                          (this.regexp.lastIndex = 0);
                      }
                      return u;
                    },
                  },
                ]),
                b
              );
            })(),
            Ft = (function (b) {
              function u(i, s, h) {
                var k,
                  d =
                    arguments.length > 3 && arguments[3] !== void 0
                      ? arguments[3]
                      : {};
                return (
                  Object(N.a)(this, u),
                  (k = B(this, v(u).call(this))),
                  V && X.call(j(k)),
                  (k.backend = i),
                  (k.store = s),
                  (k.services = h),
                  (k.languageUtils = h.languageUtils),
                  (k.options = d),
                  (k.logger = Z.create("backendConnector")),
                  (k.state = {}),
                  (k.queue = []),
                  k.backend &&
                    k.backend.init &&
                    k.backend.init(h, d.backend, d),
                  k
                );
              }
              return (
                J(u, b),
                Object(A.a)(u, [
                  {
                    key: "queueLoad",
                    value: function (i, s, h, k) {
                      var d = this,
                        L = [],
                        S = [],
                        E = [],
                        T = [];
                      return (
                        i.forEach(function (x) {
                          var _ = !0;
                          s.forEach(function (H) {
                            var W = "".concat(x, "|").concat(H);
                            !h.reload && d.store.hasResourceBundle(x, H)
                              ? (d.state[W] = 2)
                              : d.state[W] < 0 ||
                                (d.state[W] === 1
                                  ? S.indexOf(W) < 0 && S.push(W)
                                  : ((d.state[W] = 1),
                                    (_ = !1),
                                    S.indexOf(W) < 0 && S.push(W),
                                    L.indexOf(W) < 0 && L.push(W),
                                    T.indexOf(H) < 0 && T.push(H)));
                          }),
                            _ || E.push(x);
                        }),
                        (L.length || S.length) &&
                          this.queue.push({
                            pending: S,
                            loaded: {},
                            errors: [],
                            callback: k,
                          }),
                        {
                          toLoad: L,
                          pending: S,
                          toLoadLanguages: E,
                          toLoadNamespaces: T,
                        }
                      );
                    },
                  },
                  {
                    key: "loaded",
                    value: function (i, s, h) {
                      var k = i.split("|"),
                        d = k[0],
                        L = k[1];
                      s && this.emit("failedLoading", d, L, s),
                        h && this.store.addResourceBundle(d, L, h),
                        (this.state[i] = s ? -1 : 2);
                      var S = {};
                      this.queue.forEach(function (E) {
                        var T, x, _, H, W;
                        (T = E.loaded),
                          (x = L),
                          (_ = st(T, [d], Object)),
                          (H = _.obj),
                          (W = _.k),
                          (H[W] = H[W] || []),
                          H[W].push(x),
                          (function (tt, St) {
                            for (var Dt = tt.indexOf(St); Dt !== -1; )
                              tt.splice(Dt, 1), (Dt = tt.indexOf(St));
                          })(E.pending, i),
                          s && E.errors.push(s),
                          E.pending.length !== 0 ||
                            E.done ||
                            (Object.keys(E.loaded).forEach(function (tt) {
                              S[tt] || (S[tt] = []),
                                E.loaded[tt].length &&
                                  E.loaded[tt].forEach(function (St) {
                                    S[tt].indexOf(St) < 0 && S[tt].push(St);
                                  });
                            }),
                            (E.done = !0),
                            E.errors.length
                              ? E.callback(E.errors)
                              : E.callback());
                      }),
                        this.emit("loaded", S),
                        (this.queue = this.queue.filter(function (E) {
                          return !E.done;
                        }));
                    },
                  },
                  {
                    key: "read",
                    value: function (i, s, h) {
                      var k = this,
                        d =
                          arguments.length > 3 && arguments[3] !== void 0
                            ? arguments[3]
                            : 0,
                        L =
                          arguments.length > 4 && arguments[4] !== void 0
                            ? arguments[4]
                            : 350,
                        S = arguments.length > 5 ? arguments[5] : void 0;
                      return i.length
                        ? this.backend[h](i, s, function (E, T) {
                            E && T && d < 5
                              ? setTimeout(function () {
                                  k.read.call(k, i, s, h, d + 1, 2 * L, S);
                                }, L)
                              : S(E, T);
                          })
                        : S(null, {});
                    },
                  },
                  {
                    key: "prepareLoading",
                    value: function (i, s) {
                      var h = this,
                        k =
                          arguments.length > 2 && arguments[2] !== void 0
                            ? arguments[2]
                            : {},
                        d = arguments.length > 3 ? arguments[3] : void 0;
                      if (!this.backend)
                        return (
                          this.logger.warn(
                            "No backend was added via i18next.use. Will not load resources."
                          ),
                          d && d()
                        );
                      typeof i == "string" &&
                        (i = this.languageUtils.toResolveHierarchy(i)),
                        typeof s == "string" && (s = [s]);
                      var L = this.queueLoad(i, s, k, d);
                      if (!L.toLoad.length)
                        return L.pending.length || d(), null;
                      L.toLoad.forEach(function (S) {
                        h.loadOne(S);
                      });
                    },
                  },
                  {
                    key: "load",
                    value: function (i, s, h) {
                      this.prepareLoading(i, s, {}, h);
                    },
                  },
                  {
                    key: "reload",
                    value: function (i, s, h) {
                      this.prepareLoading(i, s, { reload: !0 }, h);
                    },
                  },
                  {
                    key: "loadOne",
                    value: function (i) {
                      var s = this,
                        h =
                          arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : "",
                        k = i.split("|"),
                        d = k[0],
                        L = k[1];
                      this.read(d, L, "read", void 0, void 0, function (S, E) {
                        S &&
                          s.logger.warn(
                            ""
                              .concat(h, "loading namespace ")
                              .concat(L, " for language ")
                              .concat(d, " failed"),
                            S
                          ),
                          !S &&
                            E &&
                            s.logger.log(
                              ""
                                .concat(h, "loaded namespace ")
                                .concat(L, " for language ")
                                .concat(d),
                              E
                            ),
                          s.loaded(i, S, E);
                      });
                    },
                  },
                  {
                    key: "saveMissing",
                    value: function (i, s, h, k, d) {
                      var L =
                        arguments.length > 5 && arguments[5] !== void 0
                          ? arguments[5]
                          : {};
                      this.services.utils &&
                      this.services.utils.hasLoadedNamespace &&
                      !this.services.utils.hasLoadedNamespace(s)
                        ? this.logger.warn(
                            'did not save key "'
                              .concat(h, '" as the namespace "')
                              .concat(s, '" was not yet loaded'),
                            "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                          )
                        : h != null &&
                          h !== "" &&
                          (this.backend &&
                            this.backend.create &&
                            this.backend.create(
                              i,
                              s,
                              h,
                              k,
                              null,
                              C({}, L, { isUpdate: d })
                            ),
                          i && i[0] && this.store.addResource(i[0], s, h, k));
                    },
                  },
                ]),
                u
              );
            })(X);
          function zt() {
            return {
              debug: !1,
              initImmediate: !0,
              ns: ["translation"],
              defaultNS: ["translation"],
              fallbackLng: ["dev"],
              fallbackNS: !1,
              whitelist: !1,
              nonExplicitWhitelist: !1,
              supportedLngs: !1,
              nonExplicitSupportedLngs: !1,
              load: "all",
              preload: !1,
              simplifyPluralSuffix: !0,
              keySeparator: ".",
              nsSeparator: ":",
              pluralSeparator: "_",
              contextSeparator: "_",
              partialBundledLanguages: !1,
              saveMissing: !1,
              updateMissing: !1,
              saveMissingTo: "fallback",
              saveMissingPlurals: !0,
              missingKeyHandler: !1,
              missingInterpolationHandler: !1,
              postProcess: !1,
              postProcessPassResolved: !1,
              returnNull: !0,
              returnEmptyString: !0,
              returnObjects: !1,
              joinArrays: !1,
              returnedObjectHandler: !1,
              parseMissingKeyHandler: !1,
              appendNamespaceToMissingKey: !1,
              appendNamespaceToCIMode: !1,
              overloadTranslationOptionHandler: function (b) {
                var u = {};
                if (
                  (Object(l.a)(b[1]) === "object" && (u = b[1]),
                  typeof b[1] == "string" && (u.defaultValue = b[1]),
                  typeof b[2] == "string" && (u.tDescription = b[2]),
                  Object(l.a)(b[2]) === "object" ||
                    Object(l.a)(b[3]) === "object")
                ) {
                  var i = b[3] || b[2];
                  Object.keys(i).forEach(function (s) {
                    u[s] = i[s];
                  });
                }
                return u;
              },
              interpolation: {
                escapeValue: !0,
                format: function (b, u, i, s) {
                  return b;
                },
                prefix: "{{",
                suffix: "}}",
                formatSeparator: ",",
                unescapePrefix: "-",
                nestingPrefix: "$t(",
                nestingSuffix: ")",
                nestingOptionsSeparator: ",",
                maxReplaces: 1e3,
                skipOnVariables: !1,
              },
            };
          }
          function Ht(b) {
            return (
              typeof b.ns == "string" && (b.ns = [b.ns]),
              typeof b.fallbackLng == "string" &&
                (b.fallbackLng = [b.fallbackLng]),
              typeof b.fallbackNS == "string" &&
                (b.fallbackNS = [b.fallbackNS]),
              b.whitelist &&
                (b.whitelist &&
                  b.whitelist.indexOf("cimode") < 0 &&
                  (b.whitelist = b.whitelist.concat(["cimode"])),
                (b.supportedLngs = b.whitelist)),
              b.nonExplicitWhitelist &&
                (b.nonExplicitSupportedLngs = b.nonExplicitWhitelist),
              b.supportedLngs &&
                b.supportedLngs.indexOf("cimode") < 0 &&
                (b.supportedLngs = b.supportedLngs.concat(["cimode"])),
              b
            );
          }
          function Wt() {}
          var re = new ((function (b) {
            function u() {
              var i,
                s =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {},
                h = arguments.length > 1 ? arguments[1] : void 0;
              if (
                (Object(N.a)(this, u),
                (i = B(this, v(u).call(this))),
                V && X.call(j(i)),
                (i.options = Ht(s)),
                (i.services = {}),
                (i.logger = Z),
                (i.modules = { external: [] }),
                h && !i.isInitialized && !s.isClone)
              ) {
                if (!i.options.initImmediate) return i.init(s, h), B(i, j(i));
                setTimeout(function () {
                  i.init(s, h);
                }, 0);
              }
              return i;
            }
            return (
              J(u, b),
              Object(A.a)(u, [
                {
                  key: "init",
                  value: function () {
                    var i = this,
                      s =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : {},
                      h = arguments.length > 1 ? arguments[1] : void 0;
                    function k(H) {
                      return H ? (typeof H == "function" ? new H() : H) : null;
                    }
                    if (
                      (typeof s == "function" && ((h = s), (s = {})),
                      s.whitelist &&
                        !s.supportedLngs &&
                        this.logger.deprecate(
                          "whitelist",
                          'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.'
                        ),
                      s.nonExplicitWhitelist &&
                        !s.nonExplicitSupportedLngs &&
                        this.logger.deprecate(
                          "whitelist",
                          'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.'
                        ),
                      (this.options = C({}, zt(), this.options, Ht(s))),
                      (this.format = this.options.interpolation.format),
                      h || (h = Wt),
                      !this.options.isClone)
                    ) {
                      this.modules.logger
                        ? Z.init(k(this.modules.logger), this.options)
                        : Z.init(null, this.options);
                      var d = new yt(this.options);
                      this.store = new g(this.options.resources, this.options);
                      var L = this.services;
                      (L.logger = Z),
                        (L.resourceStore = this.store),
                        (L.languageUtils = d),
                        (L.pluralResolver = new rt(d, {
                          prepend: this.options.pluralSeparator,
                          compatibilityJSON: this.options.compatibilityJSON,
                          simplifyPluralSuffix:
                            this.options.simplifyPluralSuffix,
                        })),
                        (L.interpolator = new Q(this.options)),
                        (L.utils = {
                          hasLoadedNamespace:
                            this.hasLoadedNamespace.bind(this),
                        }),
                        (L.backendConnector = new Ft(
                          k(this.modules.backend),
                          L.resourceStore,
                          L,
                          this.options
                        )),
                        L.backendConnector.on("*", function (H) {
                          for (
                            var W = arguments.length,
                              tt = new Array(W > 1 ? W - 1 : 0),
                              St = 1;
                            St < W;
                            St++
                          )
                            tt[St - 1] = arguments[St];
                          i.emit.apply(i, [H].concat(tt));
                        }),
                        this.modules.languageDetector &&
                          ((L.languageDetector = k(
                            this.modules.languageDetector
                          )),
                          L.languageDetector.init(
                            L,
                            this.options.detection,
                            this.options
                          )),
                        this.modules.i18nFormat &&
                          ((L.i18nFormat = k(this.modules.i18nFormat)),
                          L.i18nFormat.init && L.i18nFormat.init(this)),
                        (this.translator = new at(this.services, this.options)),
                        this.translator.on("*", function (H) {
                          for (
                            var W = arguments.length,
                              tt = new Array(W > 1 ? W - 1 : 0),
                              St = 1;
                            St < W;
                            St++
                          )
                            tt[St - 1] = arguments[St];
                          i.emit.apply(i, [H].concat(tt));
                        }),
                        this.modules.external.forEach(function (H) {
                          H.init && H.init(i);
                        });
                    }
                    if (
                      this.options.fallbackLng &&
                      !this.services.languageDetector &&
                      !this.options.lng
                    ) {
                      var S = this.services.languageUtils.getFallbackCodes(
                        this.options.fallbackLng
                      );
                      S.length > 0 &&
                        S[0] !== "dev" &&
                        (this.options.lng = S[0]);
                    }
                    this.services.languageDetector ||
                      this.options.lng ||
                      this.logger.warn(
                        "init: no languageDetector is used and no lng is defined"
                      );
                    var E = [
                      "getResource",
                      "hasResourceBundle",
                      "getResourceBundle",
                      "getDataByLanguage",
                    ];
                    E.forEach(function (H) {
                      i[H] = function () {
                        var W;
                        return (W = i.store)[H].apply(W, arguments);
                      };
                    });
                    var T = [
                      "addResource",
                      "addResources",
                      "addResourceBundle",
                      "removeResourceBundle",
                    ];
                    T.forEach(function (H) {
                      i[H] = function () {
                        var W;
                        return (W = i.store)[H].apply(W, arguments), i;
                      };
                    });
                    var x = I(),
                      _ = function () {
                        var H = function (W, tt) {
                          i.isInitialized &&
                            i.logger.warn(
                              "init: i18next is already initialized. You should call init just once!"
                            ),
                            (i.isInitialized = !0),
                            i.options.isClone ||
                              i.logger.log("initialized", i.options),
                            i.emit("initialized", i.options),
                            x.resolve(tt),
                            h(W, tt);
                        };
                        if (
                          i.languages &&
                          i.options.compatibilityAPI !== "v1" &&
                          !i.isInitialized
                        )
                          return H(null, i.t.bind(i));
                        i.changeLanguage(i.options.lng, H);
                      };
                    return (
                      this.options.resources || !this.options.initImmediate
                        ? _()
                        : setTimeout(_, 0),
                      x
                    );
                  },
                },
                {
                  key: "loadResources",
                  value: function (i) {
                    var s = this,
                      h =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : Wt,
                      k = h,
                      d = typeof i == "string" ? i : this.language;
                    if (
                      (typeof i == "function" && (k = i),
                      !this.options.resources ||
                        this.options.partialBundledLanguages)
                    ) {
                      if (d && d.toLowerCase() === "cimode") return k();
                      var L = [],
                        S = function (T) {
                          T &&
                            s.services.languageUtils
                              .toResolveHierarchy(T)
                              .forEach(function (x) {
                                L.indexOf(x) < 0 && L.push(x);
                              });
                        };
                      if (d) S(d);
                      else {
                        var E = this.services.languageUtils.getFallbackCodes(
                          this.options.fallbackLng
                        );
                        E.forEach(function (T) {
                          return S(T);
                        });
                      }
                      this.options.preload &&
                        this.options.preload.forEach(function (T) {
                          return S(T);
                        }),
                        this.services.backendConnector.load(
                          L,
                          this.options.ns,
                          k
                        );
                    } else k(null);
                  },
                },
                {
                  key: "reloadResources",
                  value: function (i, s, h) {
                    var k = I();
                    return (
                      i || (i = this.languages),
                      s || (s = this.options.ns),
                      h || (h = Wt),
                      this.services.backendConnector.reload(i, s, function (d) {
                        k.resolve(), h(d);
                      }),
                      k
                    );
                  },
                },
                {
                  key: "use",
                  value: function (i) {
                    if (!i)
                      throw new Error(
                        "You are passing an undefined module! Please check the object you are passing to i18next.use()"
                      );
                    if (!i.type)
                      throw new Error(
                        "You are passing a wrong module! Please check the object you are passing to i18next.use()"
                      );
                    return (
                      i.type === "backend" && (this.modules.backend = i),
                      (i.type === "logger" || (i.log && i.warn && i.error)) &&
                        (this.modules.logger = i),
                      i.type === "languageDetector" &&
                        (this.modules.languageDetector = i),
                      i.type === "i18nFormat" && (this.modules.i18nFormat = i),
                      i.type === "postProcessor" && D.addPostProcessor(i),
                      i.type === "3rdParty" && this.modules.external.push(i),
                      this
                    );
                  },
                },
                {
                  key: "changeLanguage",
                  value: function (i, s) {
                    var h = this;
                    this.isLanguageChangingTo = i;
                    var k = I();
                    this.emit("languageChanging", i);
                    var d = function (L) {
                      var S =
                        typeof L == "string"
                          ? L
                          : h.services.languageUtils.getBestMatchFromCodes(L);
                      S &&
                        (h.language ||
                          ((h.language = S),
                          (h.languages =
                            h.services.languageUtils.toResolveHierarchy(S))),
                        h.translator.language || h.translator.changeLanguage(S),
                        h.services.languageDetector &&
                          h.services.languageDetector.cacheUserLanguage(S)),
                        h.loadResources(S, function (E) {
                          (function (T, x) {
                            x
                              ? ((h.language = x),
                                (h.languages =
                                  h.services.languageUtils.toResolveHierarchy(
                                    x
                                  )),
                                h.translator.changeLanguage(x),
                                (h.isLanguageChangingTo = void 0),
                                h.emit("languageChanged", x),
                                h.logger.log("languageChanged", x))
                              : (h.isLanguageChangingTo = void 0),
                              k.resolve(function () {
                                return h.t.apply(h, arguments);
                              }),
                              s &&
                                s(T, function () {
                                  return h.t.apply(h, arguments);
                                });
                          })(E, S);
                        });
                    };
                    return (
                      i ||
                      !this.services.languageDetector ||
                      this.services.languageDetector.async
                        ? !i &&
                          this.services.languageDetector &&
                          this.services.languageDetector.async
                          ? this.services.languageDetector.detect(d)
                          : d(i)
                        : d(this.services.languageDetector.detect()),
                      k
                    );
                  },
                },
                {
                  key: "getFixedT",
                  value: function (i, s) {
                    var h = this,
                      k = function d(L, S) {
                        var E;
                        if (Object(l.a)(S) !== "object") {
                          for (
                            var T = arguments.length,
                              x = new Array(T > 2 ? T - 2 : 0),
                              _ = 2;
                            _ < T;
                            _++
                          )
                            x[_ - 2] = arguments[_];
                          E = h.options.overloadTranslationOptionHandler(
                            [L, S].concat(x)
                          );
                        } else E = C({}, S);
                        return (
                          (E.lng = E.lng || d.lng),
                          (E.lngs = E.lngs || d.lngs),
                          (E.ns = E.ns || d.ns),
                          h.t(L, E)
                        );
                      };
                    return (
                      typeof i == "string" ? (k.lng = i) : (k.lngs = i),
                      (k.ns = s),
                      k
                    );
                  },
                },
                {
                  key: "t",
                  value: function () {
                    var i;
                    return (
                      this.translator &&
                      (i = this.translator).translate.apply(i, arguments)
                    );
                  },
                },
                {
                  key: "exists",
                  value: function () {
                    var i;
                    return (
                      this.translator &&
                      (i = this.translator).exists.apply(i, arguments)
                    );
                  },
                },
                {
                  key: "setDefaultNamespace",
                  value: function (i) {
                    this.options.defaultNS = i;
                  },
                },
                {
                  key: "hasLoadedNamespace",
                  value: function (i) {
                    var s = this,
                      h =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : {};
                    if (!this.isInitialized)
                      return (
                        this.logger.warn(
                          "hasLoadedNamespace: i18next was not initialized",
                          this.languages
                        ),
                        !1
                      );
                    if (!this.languages || !this.languages.length)
                      return (
                        this.logger.warn(
                          "hasLoadedNamespace: i18n.languages were undefined or empty",
                          this.languages
                        ),
                        !1
                      );
                    var k = this.languages[0],
                      d = !!this.options && this.options.fallbackLng,
                      L = this.languages[this.languages.length - 1];
                    if (k.toLowerCase() === "cimode") return !0;
                    var S = function (T, x) {
                      var _ =
                        s.services.backendConnector.state[
                          "".concat(T, "|").concat(x)
                        ];
                      return _ === -1 || _ === 2;
                    };
                    if (h.precheck) {
                      var E = h.precheck(this, S);
                      if (E !== void 0) return E;
                    }
                    return (
                      !!this.hasResourceBundle(k, i) ||
                      !this.services.backendConnector.backend ||
                      !(!S(k, i) || (d && !S(L, i)))
                    );
                  },
                },
                {
                  key: "loadNamespaces",
                  value: function (i, s) {
                    var h = this,
                      k = I();
                    return this.options.ns
                      ? (typeof i == "string" && (i = [i]),
                        i.forEach(function (d) {
                          h.options.ns.indexOf(d) < 0 && h.options.ns.push(d);
                        }),
                        this.loadResources(function (d) {
                          k.resolve(), s && s(d);
                        }),
                        k)
                      : (s && s(), Promise.resolve());
                  },
                },
                {
                  key: "loadLanguages",
                  value: function (i, s) {
                    var h = I();
                    typeof i == "string" && (i = [i]);
                    var k = this.options.preload || [],
                      d = i.filter(function (L) {
                        return k.indexOf(L) < 0;
                      });
                    return d.length
                      ? ((this.options.preload = k.concat(d)),
                        this.loadResources(function (L) {
                          h.resolve(), s && s(L);
                        }),
                        h)
                      : (s && s(), Promise.resolve());
                  },
                },
                {
                  key: "dir",
                  value: function (i) {
                    return (
                      i ||
                        (i =
                          this.languages && this.languages.length > 0
                            ? this.languages[0]
                            : this.language),
                      i
                        ? [
                            "ar",
                            "shu",
                            "sqr",
                            "ssh",
                            "xaa",
                            "yhd",
                            "yud",
                            "aao",
                            "abh",
                            "abv",
                            "acm",
                            "acq",
                            "acw",
                            "acx",
                            "acy",
                            "adf",
                            "ads",
                            "aeb",
                            "aec",
                            "afb",
                            "ajp",
                            "apc",
                            "apd",
                            "arb",
                            "arq",
                            "ars",
                            "ary",
                            "arz",
                            "auz",
                            "avl",
                            "ayh",
                            "ayl",
                            "ayn",
                            "ayp",
                            "bbz",
                            "pga",
                            "he",
                            "iw",
                            "ps",
                            "pbt",
                            "pbu",
                            "pst",
                            "prp",
                            "prd",
                            "ug",
                            "ur",
                            "ydd",
                            "yds",
                            "yih",
                            "ji",
                            "yi",
                            "hbo",
                            "men",
                            "xmn",
                            "fa",
                            "jpr",
                            "peo",
                            "pes",
                            "prs",
                            "dv",
                            "sam",
                          ].indexOf(
                            this.services.languageUtils.getLanguagePartFromCode(
                              i
                            )
                          ) >= 0
                          ? "rtl"
                          : "ltr"
                        : "rtl"
                    );
                  },
                },
                {
                  key: "createInstance",
                  value: function () {
                    var i =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : {},
                      s = arguments.length > 1 ? arguments[1] : void 0;
                    return new u(i, s);
                  },
                },
                {
                  key: "cloneInstance",
                  value: function () {
                    var i = this,
                      s =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : {},
                      h =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : Wt,
                      k = C({}, this.options, s, { isClone: !0 }),
                      d = new u(k),
                      L = ["store", "services", "language"];
                    return (
                      L.forEach(function (S) {
                        d[S] = i[S];
                      }),
                      (d.services = C({}, this.services)),
                      (d.services.utils = {
                        hasLoadedNamespace: d.hasLoadedNamespace.bind(d),
                      }),
                      (d.translator = new at(d.services, d.options)),
                      d.translator.on("*", function (S) {
                        for (
                          var E = arguments.length,
                            T = new Array(E > 1 ? E - 1 : 0),
                            x = 1;
                          x < E;
                          x++
                        )
                          T[x - 1] = arguments[x];
                        d.emit.apply(d, [S].concat(T));
                      }),
                      d.init(k, h),
                      (d.translator.options = d.options),
                      (d.translator.backendConnector.services.utils = {
                        hasLoadedNamespace: d.hasLoadedNamespace.bind(d),
                      }),
                      d
                    );
                  },
                },
              ]),
              u
            );
          })(X))();
          $.default = re;
        },
      ]);
    });
  })(zn);
  var Ee = zn.exports;
  function Gi(pt) {
    let et;
    return {
      c() {
        et = $n("main");
      },
      m(R, $) {
        qn(R, et, $);
      },
      p: le,
      i: le,
      o: le,
      d(R) {
        R && wn(et);
      },
    };
  }
  function Yi(pt, et, R) {
    let { idleseconds: $ = "0" } = et,
      y = !1,
      l = 0,
      { readynoanswerseconds: f = "0" } = et,
      p = !1,
      C = 0,
      { idlestatustimestamp: N = null } = et,
      A = 0,
      { logonreadyseconds: j = "0" } = et,
      B = 0,
      v = !1,
      U = {},
      J = !1,
      ot = !0,
      Z = "",
      X = null;
    const I = Ee.Desktop.logger.createLogger("atea-wxcc-logout"),
      it = Object.freeze({
        LOGIN: 0,
        READY: 1,
        NOTREADYFROMREADY: 2,
        NOTREADYFROMNOTREADY: 3,
        RONA: 4,
        NOTREADYFROMRONA: 5,
      });
    _i(
      () => (
        I.info("the component has mounted"),
        I.info("idleseconds", $),
        (l = parseInt($)),
        I.info("idleSec", l),
        l > 0 && (y = !0),
        I.info("doIdleLogout", y),
        I.info("readynoanswerseconds", f),
        (C = parseInt(f)),
        I.info("ronaSec", C),
        C > 0 && (p = !0),
        I.info("doRonaAvailable", p),
        I.info("logonreadyseconds", j),
        (B = parseInt(j)),
        I.info("logonreadysec", B),
        B > 0 && (v = !0),
        I.info("doLogonReady", v),
        I.info("idlestatustimestamp", N),
        N &&
          ((A = new Date(N).getTime()), I.info("idleStatusTimestampUnix", A)),
        dt(),
        () => {
          I.info("the component is being destroyed"),
            Ee.Desktop.agentStateInfo.removeAllEventListeners(),
            jt(),
            X.terminate();
        }
      )
    );
    function dt() {
      I.info("init"),
        Ee.Desktop.config
          .init({ widgetName: "wxcc-logout", widgetProvider: "Atea Systems" })
          .then(() => {
            I.info("Desktop init"),
              st(),
              D(),
              Ee.Desktop.agentStateInfo.latestData &&
                (I.info("latestData", Ee.Desktop.agentStateInfo.latestData),
                (U = Ee.Desktop.agentStateInfo.latestData)),
              I.info("idlestatustimestamp2", N);
          });
    }
    function st() {
      I.info("startListener"),
        Ee.Desktop.agentStateInfo.addEventListener("updated", (w) => {
          I.info("agentStateInfo updated", w, "orgId", Z);
          let at = {};
          w.forEach((lt) => {
            (U[lt.name] = lt.value),
              lt.name === "subStatus" &&
                (at[lt.name] = {
                  value: lt == null ? void 0 : lt.value,
                  oldValue: lt == null ? void 0 : lt.oldValue,
                }),
              lt.name === "idleCode" &&
                (at[lt.name] = {
                  value: lt == null ? void 0 : lt.value,
                  oldValue: lt == null ? void 0 : lt.oldValue,
                });
          }),
            I.info("latestData", U),
            J || (g(), (J = !0)),
            ("subStatus" in at || "idleCode" in at) && F(at, ot),
            (ot = !1);
        });
    }
    function F(w, at) {
      I.info("processEvent", w, "firstEvent", at);
      const lt = z(w);
      if ((I.info("stateEvent", lt), lt >= 0))
        switch (lt) {
          case it.LOGIN:
            bt();
            break;
          case it.READY:
            jt();
            break;
          case it.LOGIN:
            wt(at);
            break;
          case it.RONA:
            Lt();
            break;
          case it.NOTREADYFROMREADY:
            wt(at);
            break;
          case it.NOTREADYFROMRONA:
            jt();
            break;
          case it.NOTREADYFROMNOTREADY:
            I.info("NOTREADYFROMNOTREADY, skipping");
            break;
        }
    }
    function bt() {
      v &&
        (I.info("startLogonReadyTimer", B),
        X.postMessage({
          timeout: B,
          callback: "logonReady",
          type: "setTimeout",
        }));
    }
    function wt(w) {
      if (y)
        if ((I.info("startIdleLogoutTimer", l, "firstEvent", w), w)) {
          const lt = new Date().getTime() - A;
          lt / 1e3 < l && lt / 1e3 > 10
            ? (I.info(
                "startIdleLogoutTimer",
                "setting shorter timer due to page refresh",
                l - lt / 1e3
              ),
              X.postMessage({
                timeout: l - lt / 1e3,
                callback: "idleLogout",
                type: "setTimeout",
              }))
            : lt / 1e3 < l
            ? X.postMessage({
                timeout: l,
                callback: "idleLogout",
                type: "setTimeout",
              })
            : X.postMessage({
                timeout: 0,
                callback: "idleLogout",
                type: "setTimeout",
              });
        } else
          X.postMessage({
            timeout: l,
            callback: "idleLogout",
            type: "setTimeout",
          });
    }
    function Lt() {
      p &&
        (I.info("startRonaAvailableTimer", C),
        X.postMessage({
          timeout: C,
          callback: "ronaAvailable",
          type: "setTimeout",
        }));
    }
    function jt() {
      I.info("cancelTimers"),
        p &&
          X.postMessage({
            timeout: 0,
            callback: "ronaAvailable",
            type: "clearTimeout",
          }),
        y &&
          X.postMessage({
            timeout: 0,
            callback: "idleLogout",
            type: "clearTimeout",
          });
    }
    function z(w) {
      var at,
        lt,
        yt,
        Rt,
        G,
        K,
        rt,
        Q,
        Ft,
        zt,
        Ht,
        Wt,
        re,
        b,
        u,
        i,
        s,
        h,
        k,
        d,
        L,
        S,
        E,
        T,
        x,
        _;
      return (
        I.info("getStateEvent", w),
        ((at = w == null ? void 0 : w.subStatus) == null
          ? void 0
          : at.value) === "Idle" &&
        ((lt = w == null ? void 0 : w.subStatus) == null
          ? void 0
          : lt.oldValue) === void 0 &&
        ((Rt =
          (yt = w == null ? void 0 : w.idleCode) == null ? void 0 : yt.value) ==
        null
          ? void 0
          : Rt.name) === "Logon"
          ? it.LOGIN
          : (((G = w == null ? void 0 : w.subStatus) == null
              ? void 0
              : G.value) === "Available" &&
              ((K = w == null ? void 0 : w.subStatus) == null
                ? void 0
                : K.oldValue) === "Idle") ||
            (((rt = w == null ? void 0 : w.subStatus) == null
              ? void 0
              : rt.value) === "Available" &&
              ((Q = w == null ? void 0 : w.subStatus) == null
                ? void 0
                : Q.oldValue) === void 0)
          ? it.READY
          : ((Ft = w == null ? void 0 : w.subStatus) == null
              ? void 0
              : Ft.value) === "Idle" &&
            ((zt = w == null ? void 0 : w.subStatus) == null
              ? void 0
              : zt.oldValue) === "Available" &&
            ((Wt =
              (Ht = w == null ? void 0 : w.idleCode) == null
                ? void 0
                : Ht.value) == null
              ? void 0
              : Wt.name) === "RONA"
          ? it.RONA
          : (I.info(
              "checkRONA",
              `idleCode.value.name: ${
                (b =
                  (re = w == null ? void 0 : w.idleCode) == null
                    ? void 0
                    : re.value) == null
                  ? void 0
                  : b.name
              }, idleCode.oldValue.name: ${
                (i =
                  (u = w == null ? void 0 : w.idleCode) == null
                    ? void 0
                    : u.oldValue) == null
                  ? void 0
                  : i.name
              }`
            ),
            ((h =
              (s = w == null ? void 0 : w.idleCode) == null
                ? void 0
                : s.value) == null
              ? void 0
              : h.name) !== void 0 &&
            ((d =
              (k = w == null ? void 0 : w.idleCode) == null
                ? void 0
                : k.value) == null
              ? void 0
              : d.name) !== "" &&
            ((S =
              (L = w == null ? void 0 : w.idleCode) == null
                ? void 0
                : L.oldValue) == null
              ? void 0
              : S.name) === "RONA"
              ? it.NOTREADYFROMRONA
              : ((E = w == null ? void 0 : w.subStatus) == null
                  ? void 0
                  : E.value) === "Idle" &&
                ((T = w == null ? void 0 : w.subStatus) == null
                  ? void 0
                  : T.oldValue) === "Available"
              ? it.NOTREADYFROMREADY
              : ((x = w == null ? void 0 : w.idleCode) == null
                  ? void 0
                  : x.value) !== "" &&
                ((_ = w == null ? void 0 : w.idleCode) == null
                  ? void 0
                  : _.oldValue) !== ""
              ? it.NOTREADYFROMNOTREADY
              : -1)
      );
    }
    function Y() {
      I.info("doLogout"),
        Ee.Desktop.logout
          .desktopLogout({ data: { logoutReason: "Inactivity Logout" } })
          .then((w) => {
            I.info("doLogout result", w);
          });
    }
    function V() {
      I.info("doAvailable"),
        Ee.Desktop.agentStateInfo
          .stateChange({ state: "Available", auxCodeIdArray: "0" })
          .then((w) => {
            I.info("doAvailable result", w);
          });
    }
    function g() {
      Ee.Desktop.agentContact
        .buddyAgents({
          data: { agentProfileId: U.agentProfileID, channelName: "telephony" },
        })
        .then((w) => {
          I.info("buddyAgents", w), (Z = w.data.orgId);
        });
    }
    function D() {
      I.info("initWebWorker");
      const w = `function (e) {
        console.log('WEBWORKER FUNC ', e.data)
        if (e.data.type === 'setTimeout') {
          timers[e.data.callback] = self.setTimeout(function () {
            self.postMessage(e.data.callback)
          }, parseInt(e.data.timeout, 10)*1000)
        }
        if (e.data.type === 'clearTimeout') {
          if(timers[e.data.callback]) {
            self.clearTimeout(timers[e.data.callback])
          }
        }
      }`;
      var at;
      try {
        at = new Blob(
          [
            `var timers = {};
        self.onmessage=${w}`,
          ],
          { type: "application/javascript" }
        );
      } catch {
        (window.BlobBuilder =
          window.BlobBuilder ||
          window.WebKitBlobBuilder ||
          window.MozBlobBuilder),
          (at = new window.BlobBuilder()),
          at.append(`self.onmessage=${w}`),
          (at = at.getBlob());
      }
      const lt = new Worker(window.URL.createObjectURL(at));
      (lt.onmessage = ({ data: yt }) => {
        yt === "ronaAvailable" &&
          (I.info("received webworker event ", yt), V()),
          yt === "logonReady" && (I.info("received webworker event ", yt), V()),
          yt === "idleLogout" && (I.info("received webworker event ", yt), Y());
      }),
        console.log("initialized webworker", lt),
        (X = lt);
    }
    return (
      (pt.$$set = (w) => {
        "idleseconds" in w && R(0, ($ = w.idleseconds)),
          "readynoanswerseconds" in w && R(1, (f = w.readynoanswerseconds)),
          "idlestatustimestamp" in w && R(2, (N = w.idlestatustimestamp)),
          "logonreadyseconds" in w && R(3, (j = w.logonreadyseconds));
      }),
      [$, f, N, j, I]
    );
  }
  class Ki extends Zi {
    constructor(et) {
      super(),
        Bi(this, et, Yi, Gi, Ii, {
          idleseconds: 0,
          readynoanswerseconds: 1,
          idlestatustimestamp: 2,
          logonreadyseconds: 3,
          logger: 4,
        });
    }
    get idleseconds() {
      return this.$$.ctx[0];
    }
    set idleseconds(et) {
      this.$$set({ idleseconds: et }), $e();
    }
    get readynoanswerseconds() {
      return this.$$.ctx[1];
    }
    set readynoanswerseconds(et) {
      this.$$set({ readynoanswerseconds: et }), $e();
    }
    get idlestatustimestamp() {
      return this.$$.ctx[2];
    }
    set idlestatustimestamp(et) {
      this.$$set({ idlestatustimestamp: et }), $e();
    }
    get logonreadyseconds() {
      return this.$$.ctx[3];
    }
    set logonreadyseconds(et) {
      this.$$set({ logonreadyseconds: et }), $e();
    }
    get logger() {
      return this.$$.ctx[4];
    }
  }
  customElements.define(
    "wxcc-logout",
    Ji(
      Ki,
      {
        idleseconds: {},
        readynoanswerseconds: {},
        idlestatustimestamp: {},
        logonreadyseconds: {},
      },
      [],
      ["logger"],
      !0
    )
  );
})();
