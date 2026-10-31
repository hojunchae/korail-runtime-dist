/**
 * Korail Web DynaPath Token & Virtual Routing Generator (Bundle aLmKblni3Ge3cedJosCZG0TFOsTcuB0T-v41 / _atk= Base12)
 * Pure JavaScript module: zero DOM/browser dependencies, runs on Node.js / Pyto JavaScriptCore.
 */

// Base64 polyfill for headless JSContext environments (e.g. iOS Pyto)
(function (global) {
  var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var polyAtob = function (input) {
    var str = String(input).replace(/=+$/, "");
    if (str.length % 4 === 1) throw new Error("Invalid base64 string");
    var output = "";
    for (var bc = 0, bs, buffer, idx = 0; (buffer = str.charAt(idx++));
         ~buffer && ((bs = bc % 4 ? bs * 64 + buffer : buffer), bc++ % 4) ?
         (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6)))) : 0) {
      buffer = b64.indexOf(buffer);
    }
    return output;
  };
  var polyBtoa = function (input) {
    var str = String(input), output = "";
    for (var block, charCode, idx = 0, map = b64;
         str.charAt(idx | 0) || ((map = "="), idx % 1);
         output += map.charAt(63 & (block >> (8 - (idx % 1) * 8)))) {
      charCode = str.charCodeAt((idx += 3 / 4));
      block = (block << 8) | charCode;
    }
    return output;
  };
  global.atob = global.atob || polyAtob;
  global.btoa = global.btoa || polyBtoa;
  if (typeof atob === "undefined") { try { atob = polyAtob; } catch (e) {} }
  if (typeof btoa === "undefined") { try { btoa = polyBtoa; } catch (e) {} }
})(typeof globalThis !== "undefined" ? globalThis : this);

let _va5d;
let _vbvu;

(function () {
    const a = Object.prototype.hasOwnProperty;
    const b = {
      __tdz__: true
    };
    const c = [[], [], [], [], [], [], [], [], []];
    const d = 32;
    function e(m) {
      if (m <= 8 && c[m].length > 0) {
        return c[m].pop();
      }
      return new Array(m);
    }
    function f(m) {
      const n = m.length;
      if (n <= 8 && c[n].length < d) {
        for (let o = 0; o < n; o++) {
          m[o] = undefined;
        }
        c[n].push(m);
      }
    }
    const g = [];
    const h = 128;
    function i() {
      const m = g.pop();
      if (m) {
        return m;
      }
      const n = Object.create(k.prototype);
      n.stack = new Array(256);
      n.stackSize = 256;
      n.tryStack = [];
      n.forInIterators = [];
      return n;
    }
    function j(m) {
      if (g.length < h) {
        if (m.tryStack.length) {
          m.tryStack.length = 0;
        }
        if (m.forInIterators.length) {
          m.forInIterators.length = 0;
        }
        m.env = null;
        m.bytecode = null;
        g.push(m);
      }
    }
    class k {
      constructor(m, n = {}, o = false) {
        const p = m.bytecode;
        this.bytecode = p instanceof Uint8Array ? p : new Uint8Array(p);
        this.constants = m.constants;
        this.functions = m.functions;
        this.stack = new Array(1024);
        this.sp = 0;
        this.stackSize = 1024;
        this.globalEnv = this.createGlobalEnv(n);
        this.env = this.globalEnv;
        this.inlineCaches = Object.create(null);
        this.tryStack = [];
        this.forInIterators = [];
        this.debug = o;
      }
      createGlobalEnv(m) {
        const n = Object.create(null);
        n.console = {
          log: (...p) => console.log(...p),
          error: (...p) => console.error(...p),
          warn: (...p) => console.warn(...p),
          info: (...p) => console.info(...p),
          debug: (...p) => (console.debug || console.log)(...p),
          trace: (...p) => console.trace(...p),
          dir: (...p) => console.dir(...p),
          table: (...p) => (console.table || console.log)(...p),
          clear: () => console.clear && console.clear(),
          time: p => console.time && console.time(p),
          timeEnd: p => console.timeEnd && console.timeEnd(p),
          count: p => console.count && console.count(p),
          countReset: p => console.countReset && console.countReset(p),
          group: (...p) => console.group && console.group(...p),
          groupCollapsed: (...p) => console.groupCollapsed && console.groupCollapsed(...p),
          groupEnd: () => console.groupEnd && console.groupEnd(),
          assert: (...p) => console.assert && console.assert(...p)
        };
        n.Math = Math;
        n.JSON = JSON;
        n.parseInt = parseInt;
        n.parseFloat = parseFloat;
        n.isNaN = isNaN;
        n.isFinite = isFinite;
        n.encodeURIComponent = encodeURIComponent;
        n.decodeURIComponent = decodeURIComponent;
        n.encodeURI = encodeURI;
        n.decodeURI = decodeURI;
        if (typeof btoa !== "undefined") {
          n.btoa = btoa;
          n.atob = atob;
        } else {
          n.btoa = function (p) {
            return Buffer.from(p, "binary").toString("base64");
          };
          n.atob = function (p) {
            return Buffer.from(p, "base64").toString("binary");
          };
        }
        if (typeof escape !== "undefined") {
          n.escape = escape;
        }
        if (typeof unescape !== "undefined") {
          n.unescape = unescape;
        }
        if (typeof setTimeout !== "undefined") {
          n.setTimeout = setTimeout;
        }
        if (typeof setInterval !== "undefined") {
          n.setInterval = setInterval;
        }
        if (typeof clearTimeout !== "undefined") {
          n.clearTimeout = clearTimeout;
        }
        if (typeof clearInterval !== "undefined") {
          n.clearInterval = clearInterval;
        }
        n.Array = Array;
        n.Object = Object;
        n.String = String;
        n.Number = Number;
        n.Boolean = Boolean;
        n.Function = Function;
        n.Date = Date;
        n.RegExp = RegExp;
        n.Error = Error;
        n.TypeError = TypeError;
        n.ReferenceError = ReferenceError;
        n.SyntaxError = SyntaxError;
        n.RangeError = RangeError;
        n.URIError = URIError;
        n.Map = Map;
        n.Set = Set;
        n.WeakMap = WeakMap;
        n.WeakSet = WeakSet;
        n.Promise = Promise;
        n.Symbol = Symbol;
        n.ArrayBuffer = ArrayBuffer;
        n.DataView = DataView;
        n.Int8Array = Int8Array;
        n.Uint8Array = Uint8Array;
        n.Uint8ClampedArray = Uint8ClampedArray;
        n.Int16Array = Int16Array;
        n.Uint16Array = Uint16Array;
        n.Int32Array = Int32Array;
        n.Uint32Array = Uint32Array;
        n.Float32Array = Float32Array;
        n.Float64Array = Float64Array;
        if (typeof BigInt64Array !== "undefined") {
          n.BigInt64Array = BigInt64Array;
        }
        if (typeof BigUint64Array !== "undefined") {
          n.BigUint64Array = BigUint64Array;
        }
        if (typeof TextEncoder !== "undefined") {
          n.TextEncoder = TextEncoder;
        }
        if (typeof TextDecoder !== "undefined") {
          n.TextDecoder = TextDecoder;
        }
        if (typeof URL !== "undefined") {
          n.URL = URL;
        }
        if (typeof URLSearchParams !== "undefined") {
          n.URLSearchParams = URLSearchParams;
        }
        if (typeof XMLHttpRequest !== "undefined") {
          n.XMLHttpRequest = XMLHttpRequest;
        }
        if (typeof Blob !== "undefined") {
          n.Blob = Blob;
        }
        if (typeof File !== "undefined") {
          n.File = File;
        }
        if (typeof FileReader !== "undefined") {
          n.FileReader = FileReader;
        }
        if (typeof FormData !== "undefined") {
          n.FormData = FormData;
        }
        if (typeof fetch !== "undefined") {
          n.fetch = fetch;
        }
        if (typeof Request !== "undefined") {
          n.Request = Request;
        }
        if (typeof Response !== "undefined") {
          n.Response = Response;
        }
        if (typeof Headers !== "undefined") {
          n.Headers = Headers;
        }
        const o = typeof window !== "undefined" && typeof document !== "undefined";
        if (o) {
          n.global = window;
          n.window = window;
          n.self = self;
          n.document = document;
          n.location = location;
          n.navigator = navigator;
          if (typeof eval !== "undefined") {
            n.eval = eval;
          }
          if (typeof indexedDB !== "undefined") {
            n.indexedDB = indexedDB;
          }
          if (typeof crypto !== "undefined") {
            n.crypto = crypto;
          }
          if (typeof msCrypto !== "undefined") {
            n.msCrypto = msCrypto;
          } else if (typeof crypto !== "undefined") {
            n.msCrypto = crypto;
          }
          if (typeof CSS !== "undefined") {
            n.CSS = CSS;
          }
          if (typeof HTMLInputElement !== "undefined") {
            n.HTMLInputElement = HTMLInputElement;
          }
          if (typeof HTMLElement !== "undefined") {
            n.HTMLElement = HTMLElement;
          }
          if (typeof Element !== "undefined") {
            n.Element = Element;
          }
          if (typeof Node !== "undefined") {
            n.Node = Node;
          }
          if (typeof Event !== "undefined") {
            n.Event = Event;
          }
          if (typeof MouseEvent !== "undefined") {
            n.MouseEvent = MouseEvent;
          }
          if (typeof KeyboardEvent !== "undefined") {
            n.KeyboardEvent = KeyboardEvent;
          }
          if (typeof CustomEvent !== "undefined") {
            n.CustomEvent = CustomEvent;
          }
          if (typeof XMLHttpRequest !== "undefined") {
            n.XMLHttpRequest = XMLHttpRequest;
          }
          if (typeof FormData !== "undefined") {
            n.FormData = FormData;
          }
          if (typeof Blob !== "undefined") {
            n.Blob = Blob;
          }
          if (typeof File !== "undefined") {
            n.File = File;
          }
          if (typeof FileReader !== "undefined") {
            n.FileReader = FileReader;
          }
          if (typeof URL !== "undefined") {
            n.URL = URL;
          }
          if (typeof URLSearchParams !== "undefined") {
            n.URLSearchParams = URLSearchParams;
          }
          if (typeof Image !== "undefined") {
            n.Image = Image;
          }
          if (typeof Audio !== "undefined") {
            n.Audio = Audio;
          }
          if (typeof Worker !== "undefined") {
            n.Worker = Worker;
          }
          if (typeof WebSocket !== "undefined") {
            n.WebSocket = WebSocket;
          }
          if (typeof MutationObserver !== "undefined") {
            n.MutationObserver = MutationObserver;
          }
          if (typeof IntersectionObserver !== "undefined") {
            n.IntersectionObserver = IntersectionObserver;
          }
          if (typeof ResizeObserver !== "undefined") {
            n.ResizeObserver = ResizeObserver;
          }
          if (typeof PerformanceObserver !== "undefined") {
            n.PerformanceObserver = PerformanceObserver;
          }
          if (typeof fetch !== "undefined") {
            n.fetch = fetch;
          }
          if (typeof Request !== "undefined") {
            n.Request = Request;
          }
          if (typeof Response !== "undefined") {
            n.Response = Response;
          }
          if (typeof Headers !== "undefined") {
            n.Headers = Headers;
          }
          if (typeof AbortController !== "undefined") {
            n.AbortController = AbortController;
          }
          if (typeof TextEncoder !== "undefined") {
            n.TextEncoder = TextEncoder;
          }
          if (typeof TextDecoder !== "undefined") {
            n.TextDecoder = TextDecoder;
          }
          if (typeof DOMParser !== "undefined") {
            n.DOMParser = DOMParser;
          }
          if (typeof XMLSerializer !== "undefined") {
            n.XMLSerializer = XMLSerializer;
          }
          if (typeof performance !== "undefined") {
            n.performance = performance;
          }
          if (typeof screen !== "undefined") {
            n.screen = screen;
          }
          if (typeof history !== "undefined") {
            n.history = history;
          }
          if (typeof localStorage !== "undefined") {
            n.localStorage = localStorage;
          }
          if (typeof sessionStorage !== "undefined") {
            n.sessionStorage = sessionStorage;
          }
          if (typeof TouchEvent !== "undefined") {
            n.TouchEvent = TouchEvent;
          }
          if (typeof PointerEvent !== "undefined") {
            n.PointerEvent = PointerEvent;
          }
          if (typeof WheelEvent !== "undefined") {
            n.WheelEvent = WheelEvent;
          }
          if (typeof FocusEvent !== "undefined") {
            n.FocusEvent = FocusEvent;
          }
          if (typeof InputEvent !== "undefined") {
            n.InputEvent = InputEvent;
          }
          if (typeof AnimationEvent !== "undefined") {
            n.AnimationEvent = AnimationEvent;
          }
          if (typeof TransitionEvent !== "undefined") {
            n.TransitionEvent = TransitionEvent;
          }
          if (typeof ClipboardEvent !== "undefined") {
            n.ClipboardEvent = ClipboardEvent;
          }
          if (typeof DragEvent !== "undefined") {
            n.DragEvent = DragEvent;
          }
          if (typeof ErrorEvent !== "undefined") {
            n.ErrorEvent = ErrorEvent;
          }
          if (typeof MessageEvent !== "undefined") {
            n.MessageEvent = MessageEvent;
          }
          if (typeof StorageEvent !== "undefined") {
            n.StorageEvent = StorageEvent;
          }
          if (typeof PopStateEvent !== "undefined") {
            n.PopStateEvent = PopStateEvent;
          }
          if (typeof HashChangeEvent !== "undefined") {
            n.HashChangeEvent = HashChangeEvent;
          }
          if (typeof BeforeUnloadEvent !== "undefined") {
            n.BeforeUnloadEvent = BeforeUnloadEvent;
          }
          if (typeof PageTransitionEvent !== "undefined") {
            n.PageTransitionEvent = PageTransitionEvent;
          }
          if (typeof ProgressEvent !== "undefined") {
            n.ProgressEvent = ProgressEvent;
          }
          if (typeof SecurityPolicyViolationEvent !== "undefined") {
            n.SecurityPolicyViolationEvent = SecurityPolicyViolationEvent;
          }
          if (typeof UIEvent !== "undefined") {
            n.UIEvent = UIEvent;
          }
          if (typeof Document !== "undefined") {
            n.Document = Document;
          }
          if (typeof DocumentFragment !== "undefined") {
            n.DocumentFragment = DocumentFragment;
          }
          if (typeof Range !== "undefined") {
            n.Range = Range;
          }
          if (typeof Selection !== "undefined") {
            n.Selection = Selection;
          }
          if (typeof TreeWalker !== "undefined") {
            n.TreeWalker = TreeWalker;
          }
          if (typeof NodeIterator !== "undefined") {
            n.NodeIterator = NodeIterator;
          }
          if (typeof NodeList !== "undefined") {
            n.NodeList = NodeList;
          }
          if (typeof HTMLCollection !== "undefined") {
            n.HTMLCollection = HTMLCollection;
          }
          if (typeof NamedNodeMap !== "undefined") {
            n.NamedNodeMap = NamedNodeMap;
          }
          if (typeof Attr !== "undefined") {
            n.Attr = Attr;
          }
          if (typeof Text !== "undefined") {
            n.Text = Text;
          }
          if (typeof Comment !== "undefined") {
            n.Comment = Comment;
          }
          if (typeof CDATASection !== "undefined") {
            n.CDATASection = CDATASection;
          }
          if (typeof ProcessingInstruction !== "undefined") {
            n.ProcessingInstruction = ProcessingInstruction;
          }
          if (typeof CanvasRenderingContext2D !== "undefined") {
            n.CanvasRenderingContext2D = CanvasRenderingContext2D;
          }
          if (typeof WebGLRenderingContext !== "undefined") {
            n.WebGLRenderingContext = WebGLRenderingContext;
          }
          if (typeof WebGL2RenderingContext !== "undefined") {
            n.WebGL2RenderingContext = WebGL2RenderingContext;
          }
          if (typeof ImageData !== "undefined") {
            n.ImageData = ImageData;
          }
          if (typeof ImageBitmap !== "undefined") {
            n.ImageBitmap = ImageBitmap;
          }
          if (typeof Path2D !== "undefined") {
            n.Path2D = Path2D;
          }
          if (typeof OffscreenCanvas !== "undefined") {
            n.OffscreenCanvas = OffscreenCanvas;
          }
          if (typeof MediaStream !== "undefined") {
            n.MediaStream = MediaStream;
          }
          if (typeof MediaRecorder !== "undefined") {
            n.MediaRecorder = MediaRecorder;
          }
          if (typeof MediaSource !== "undefined") {
            n.MediaSource = MediaSource;
          }
          if (typeof SourceBuffer !== "undefined") {
            n.SourceBuffer = SourceBuffer;
          }
          if (typeof AudioContext !== "undefined") {
            n.AudioContext = AudioContext;
          }
          if (typeof webkitAudioContext !== "undefined") {
            n.webkitAudioContext = webkitAudioContext;
          }
          if (typeof structuredClone !== "undefined") {
            n.structuredClone = structuredClone;
          }
          if (typeof queueMicrotask !== "undefined") {
            n.queueMicrotask = queueMicrotask;
          }
          if (typeof requestAnimationFrame !== "undefined") {
            n.requestAnimationFrame = requestAnimationFrame;
          }
          if (typeof cancelAnimationFrame !== "undefined") {
            n.cancelAnimationFrame = cancelAnimationFrame;
          }
          if (typeof requestIdleCallback !== "undefined") {
            n.requestIdleCallback = requestIdleCallback;
          }
          if (typeof cancelIdleCallback !== "undefined") {
            n.cancelIdleCallback = cancelIdleCallback;
          }
          if (typeof getComputedStyle !== "undefined") {
            n.getComputedStyle = getComputedStyle;
          }
          if (typeof matchMedia !== "undefined") {
            n.matchMedia = matchMedia;
          }
          if (typeof devicePixelRatio !== "undefined") {
            n.devicePixelRatio = devicePixelRatio;
          }
          if (typeof innerWidth !== "undefined") {
            n.innerWidth = innerWidth;
          }
          if (typeof innerHeight !== "undefined") {
            n.innerHeight = innerHeight;
          }
          if (typeof outerWidth !== "undefined") {
            n.outerWidth = outerWidth;
          }
          if (typeof outerHeight !== "undefined") {
            n.outerHeight = outerHeight;
          }
          if (typeof pageXOffset !== "undefined") {
            n.pageXOffset = pageXOffset;
          }
          if (typeof pageYOffset !== "undefined") {
            n.pageYOffset = pageYOffset;
          }
          if (typeof scrollX !== "undefined") {
            n.scrollX = scrollX;
          }
          if (typeof scrollY !== "undefined") {
            n.scrollY = scrollY;
          }
          if (typeof Geolocation !== "undefined") {
            n.Geolocation = Geolocation;
          }
          if (typeof Notification !== "undefined") {
            n.Notification = Notification;
          }
          if (typeof ServiceWorker !== "undefined") {
            n.ServiceWorker = ServiceWorker;
          }
          if (typeof ServiceWorkerRegistration !== "undefined") {
            n.ServiceWorkerRegistration = ServiceWorkerRegistration;
          }
          if (typeof ServiceWorkerContainer !== "undefined") {
            n.ServiceWorkerContainer = ServiceWorkerContainer;
          }
          if (typeof BroadcastChannel !== "undefined") {
            n.BroadcastChannel = BroadcastChannel;
          }
          if (typeof Clipboard !== "undefined") {
            n.Clipboard = Clipboard;
          }
          if (typeof ClipboardItem !== "undefined") {
            n.ClipboardItem = ClipboardItem;
          }
        } else {
          n.global = n;
          n.window = n;
          n.self = n;
          n.document = {
            title: "",
            location: {
              href: "http://localhost/",
              hostname: "localhost",
              protocol: "http:",
              pathname: "/",
              search: "",
              hash: "",
              indexOf: function (p) {
                return this.href.indexOf(p);
              }
            },
            getElementById: function (p) {
              return null;
            },
            getElementsByClassName: function (p) {
              return [];
            },
            getElementsByTagName: function (p) {
              return [];
            },
            querySelector: function (p) {
              return null;
            },
            querySelectorAll: function (p) {
              return [];
            },
            createElement: function (p) {
              return {
                tagName: p.toUpperCase(),
                style: {},
                className: "",
                id: "",
                innerHTML: "",
                textContent: "",
                appendChild: function () {},
                removeChild: function () {},
                remove: function () {},
                setAttribute: function () {},
                getAttribute: function () {
                  return null;
                },
                addEventListener: function () {},
                removeEventListener: function () {}
              };
            },
            createTextNode: function (p) {
              return {
                nodeValue: p,
                textContent: p
              };
            },
            write: function () {},
            writeln: function () {},
            focus: function () {},
            hasFocus: function () {
              return false;
            },
            addEventListener: function () {},
            removeEventListener: function () {},
            body: null,
            head: null,
            documentElement: null
          };
          n.location = n.document.location;
          n.navigator = {
            userAgent: "Mozilla/5.0 (VM)",
            platform: "VM"
          };
          n.indexedDB = {
            open: function (p, q) {
              return {
                onerror: null,
                onsuccess: null,
                onupgradeneeded: null
              };
            }
          };
          if (typeof crypto !== "undefined") {
            n.crypto = crypto;
            n.msCrypto = crypto;
          } else {
            n.crypto = {
              subtle: {
                generateKey: function (p, q, r) {
                  return {
                    then: function (s) {
                      const t = {
                        type: "secret",
                        algorithm: p
                      };
                      if (s) {
                        s(t);
                      }
                      return this;
                    },
                    catch: function (s) {
                      return this;
                    }
                  };
                },
                encrypt: function (p, q, r) {
                  return {
                    then: function (s) {
                      if (s) {
                        s(new Uint8Array([1, 2, 3]));
                      }
                      return this;
                    },
                    catch: function (s) {
                      return this;
                    }
                  };
                },
                decrypt: function (p, q, r) {
                  return {
                    then: function (s) {
                      if (s) {
                        s(new Uint8Array([1, 2, 3]));
                      }
                      return this;
                    },
                    catch: function (s) {
                      return this;
                    }
                  };
                }
              },
              webkitSubtle: null
            };
            n.msCrypto = n.crypto;
          }
          if (typeof eval !== "undefined") {
            n.eval = eval;
          }
          n.addEventListener = function (p, q, r) {};
          n.removeEventListener = function (p, q, r) {};
        }
        Object.assign(n, m);
        n.__parent__ = null;
        return n;
      }
      push(m) {
        this.stack[this.sp++] = m;
      }
      pop() {
        return this.stack[--this.sp];
      }
      peek() {
        return this.stack[this.sp - 1];
      }
      runBytecode(m, n) {
        const o = this.constants;
        const p = this.functions;
        let q = this.stack;
        let r = this.stackSize;
        let s = this.sp;
        let t = n;
        let u = this.env;
        const w = this.globalEnv;
        const x = this.tryStack;
        const y = this.forInIterators;
        const z = this.debug;
        const A = this;
        const B = this.inlineCaches;
        const C = () => {
          const M = r * 2;
          const N = new Array(M);
          for (let O = 0; O < s; O++) {
            N[O] = q[O];
          }
          q = N;
          r = M;
          A.stack = q;
          A.stackSize = r;
        };
        const D = Object.create(null);
        const E = 3;
        const F = Object.create(null);
        const G = (M, N) => {
          if (N in D) {
            return D[N];
          }
          const O = o[M];
          F[N] = (F[N] || 0) + 1;
          if (F[N] >= E) {
            D[N] = O;
          }
          return O;
        };
        const H = M => {
          if (a.call(u, M)) {
            return u[M];
          }
          let N = u.__parent__;
          while (N) {
            if (a.call(N, M)) {
              return N[M];
            }
            N = N.__parent__;
          }
          if (a.call(w, M)) {
            return w[M];
          }
          return undefined;
        };
        const I = M => {
          if (a.call(u, M)) {
            return u;
          }
          let N = u.__parent__;
          while (N) {
            if (a.call(N, M)) {
              return N;
            }
            N = N.__parent__;
          }
          if (a.call(w, M)) {
            return w;
          }
          return u;
        };
        const J = (M, N) => {
          if (a.call(u, M)) {
            if (u.__const__ && u.__const__[M] && u[M] !== b) {
              throw new TypeError("Assignment to constant variable.");
            }
            u[M] = N;
            return;
          }
          let O = u.__parent__;
          while (O) {
            if (a.call(O, M)) {
              if (O.__const__ && O.__const__[M] && O[M] !== b) {
                throw new TypeError("Assignment to constant variable.");
              }
              O[M] = N;
              return;
            }
            O = O.__parent__;
          }
          if (a.call(w, M)) {
            w[M] = N;
            return;
          }
          u[M] = N;
        };
        const K = 4;
        const L = (M, N, O) => {
          if (N == null) {
            return undefined;
          }
          let P = B[M];
          if (!P) {
            P = {
              entries: [],
              megamorphic: false
            };
            B[M] = P;
          }
          if (P.megamorphic) {
            return N[O];
          }
          const Q = Object.getPrototypeOf(N);
          const R = P.entries;
          const S = R.length;
          for (let U = 0; U < S; U++) {
            const V = R[U];
            if (V.proto === Q && V.key === O) {
              return N[O];
            }
          }
          const T = N[O];
          if (S < K) {
            R.push({
              proto: Q,
              key: O
            });
          } else {
            P.megamorphic = true;
            P.entries = null;
          }
          return T;
        };
        cD: while (true) {
          try {
            while (t < m.length) {
              if (s > r - 32) {
                C();
              }
              const M = m[t++];
              switch (M) {
                case 226:
                case 47:
                case 138:
                  {
                    const N = m[t++] << 8 | m[t++];
                    q[s++] = o[N];
                    continue;
                  }
                case 170:
                case 184:
                case 141:
                  {
                    const O = t - 1;
                    const P = m[t++] << 8 | m[t++];
                    const Q = G(P, O);
                    const R = H(Q);
                    if (R === b) {
                      throw new ReferenceError("Cannot access '" + Q + "' before initialization");
                    }
                    q[s++] = R;
                    continue;
                  }
                case 169:
                case 108:
                case 202:
                  {
                    const S = t - 1;
                    const T = m[t++] << 8 | m[t++];
                    J(G(T, S), q[s - 1]);
                    continue;
                  }
                case 6:
                case 219:
                case 65:
                  {
                    const U = t - 1;
                    const V = m[t++] << 8 | m[t++];
                    const W = G(V, U);
                    let X = u;
                    while (X.__block__) {
                      X = X.__parent__;
                    }
                    if (!a.call(X, W)) {
                      X[W] = undefined;
                    }
                    continue;
                  }
                case 33:
                case 220:
                  u = {
                    __parent__: u,
                    __block__: true
                  };
                  continue;
                case 247:
                case 60:
                  u = u.__parent__;
                  continue;
                case 224:
                case 142:
                  {
                    const Y = m[t++] << 8 | m[t++];
                    u[o[Y]] = b;
                    continue;
                  }
                case 228:
                case 196:
                  {
                    const Z = m[t++] << 8 | m[t++];
                    const a0 = o[Z];
                    u[a0] = b;
                    (u.__const__ ||= Object.create(null))[a0] = true;
                    continue;
                  }
                case 225:
                case 95:
                  {
                    const a1 = q[--s];
                    const a2 = q[--s];
                    const a3 = {};
                    if (a2 != null) {
                      const a4 = Object.keys(a2);
                      for (let a5 = 0; a5 < a4.length; a5++) {
                        const a6 = a4[a5];
                        if (a1.indexOf(a6) === -1) {
                          a3[a6] = a2[a6];
                        }
                      }
                    }
                    q[s++] = a3;
                    continue;
                  }
                case 234:
                case 57:
                  {
                    const a7 = q[--s];
                    const a8 = q[--s];
                    if (typeof a8 !== "function") {
                      throw new TypeError(a8 + " is not a constructor");
                    }
                    let a9;
                    if (a8._isVMFunc) {
                      const aa = a8.prototype;
                      a9 = Object.create(aa && typeof aa === "object" ? aa : Object.prototype);
                      const ab = a8._executeVMFunc(a9, a7);
                      if (ab !== undefined && typeof ab === "object" && ab !== null) {
                        a9 = ab;
                      }
                    } else {
                      a9 = Reflect.construct(a8, a7);
                    }
                    q[s++] = a9;
                    continue;
                  }
                case 34:
                case 21:
                case 28:
                  q[s++] = undefined;
                  continue;
                case 3:
                case 56:
                case 188:
                  q[s++] = null;
                  continue;
                case 83:
                case 70:
                case 69:
                  q[s++] = true;
                  continue;
                case 164:
                case 64:
                case 124:
                  q[s++] = false;
                  continue;
                case 38:
                case 24:
                case 63:
                  s--;
                  continue;
                case 208:
                case 117:
                case 251:
                  q[s] = q[s - 1];
                  s++;
                  continue;
                case 167:
                case 14:
                case 183:
                  {
                    q[s] = q[s - 2];
                    q[s + 1] = q[s - 1];
                    s += 2;
                    continue;
                  }
                case 171:
                case 217:
                case 159:
                  {
                    const ac = q[--s];
                    q[s - 1] = q[s - 1] + ac;
                    continue;
                  }
                case 245:
                case 136:
                case 143:
                  {
                    const ad = q[--s];
                    q[s - 1] = q[s - 1] - ad;
                    continue;
                  }
                case 112:
                case 44:
                case 186:
                  {
                    const ae = q[--s];
                    q[s - 1] = q[s - 1] * ae;
                    continue;
                  }
                case 84:
                case 207:
                case 12:
                  {
                    const af = q[--s];
                    q[s - 1] = q[s - 1] / af;
                    continue;
                  }
                case 48:
                case 120:
                case 148:
                  {
                    const ag = q[--s];
                    q[s - 1] = q[s - 1] % ag;
                    continue;
                  }
                case 8:
                case 31:
                case 189:
                  {
                    const ah = q[--s];
                    q[s - 1] = q[s - 1] ** ah;
                    continue;
                  }
                case 5:
                case 154:
                case 197:
                  q[s - 1] = -q[s - 1];
                  continue;
                case 146:
                case 45:
                case 15:
                  q[s - 1] = Number(q[s - 1]);
                  continue;
                case 230:
                case 41:
                case 11:
                  {
                    const ai = q[--s];
                    q[s - 1] = q[s - 1] == ai;
                    continue;
                  }
                case 174:
                case 200:
                case 119:
                  {
                    const aj = q[--s];
                    q[s - 1] = q[s - 1] != aj;
                    continue;
                  }
                case 237:
                case 203:
                case 43:
                  {
                    const ak = q[--s];
                    q[s - 1] = q[s - 1] === ak;
                    continue;
                  }
                case 17:
                case 210:
                case 195:
                  {
                    const al = q[--s];
                    q[s - 1] = q[s - 1] !== al;
                    continue;
                  }
                case 147:
                case 111:
                case 75:
                  {
                    const am = q[--s];
                    q[s - 1] = q[s - 1] < am;
                    continue;
                  }
                case 160:
                case 93:
                case 67:
                  {
                    const an = q[--s];
                    q[s - 1] = q[s - 1] <= an;
                    continue;
                  }
                case 128:
                case 102:
                case 30:
                  {
                    const ao = q[--s];
                    q[s - 1] = q[s - 1] > ao;
                    continue;
                  }
                case 50:
                case 27:
                case 76:
                  {
                    const ap = q[--s];
                    q[s - 1] = q[s - 1] >= ap;
                    continue;
                  }
                case 113:
                case 72:
                case 252:
                  q[s - 1] = !q[s - 1];
                  continue;
                case 7:
                case 191:
                case 26:
                  {
                    const aq = q[--s];
                    q[s - 1] = q[s - 1] & aq;
                    continue;
                  }
                case 16:
                case 101:
                case 25:
                  {
                    const ar = q[--s];
                    q[s - 1] = q[s - 1] | ar;
                    continue;
                  }
                case 145:
                case 90:
                case 42:
                  {
                    const as = q[--s];
                    q[s - 1] = q[s - 1] ^ as;
                    continue;
                  }
                case 2:
                case 103:
                case 91:
                  q[s - 1] = ~q[s - 1];
                  continue;
                case 37:
                case 78:
                case 13:
                  {
                    const at = q[--s];
                    q[s - 1] = q[s - 1] << at;
                    continue;
                  }
                case 255:
                case 104:
                case 20:
                  {
                    const au = q[--s];
                    q[s - 1] = q[s - 1] >> au;
                    continue;
                  }
                case 131:
                case 23:
                case 106:
                  {
                    const av = q[--s];
                    q[s - 1] = q[s - 1] >>> av;
                    continue;
                  }
                case 49:
                case 149:
                case 62:
                  t = m[t] << 8 | m[t + 1];
                  continue;
                case 249:
                case 68:
                case 162:
                  {
                    const aw = m[t++] << 8 | m[t++];
                    if (!q[--s]) {
                      t = aw;
                    }
                    continue;
                  }
                case 229:
                case 253:
                case 185:
                  {
                    const ax = m[t++] << 8 | m[t++];
                    if (q[--s]) {
                      t = ax;
                    }
                    continue;
                  }
                case 241:
                case 199:
                  {
                    const ay = m[t++] << 8 | m[t++];
                    const az = o[ay];
                    const aA = I(az);
                    const aB = aA[az] + 1;
                    aA[az] = aB;
                    q[s++] = aB;
                    continue;
                  }
                case 192:
                case 123:
                  {
                    const aC = m[t++] << 8 | m[t++];
                    const aD = o[aC];
                    const aE = I(aD);
                    const aF = aE[aD] - 1;
                    aE[aD] = aF;
                    q[s++] = aF;
                    continue;
                  }
                case 178:
                case 71:
                  {
                    const aG = m[t++] << 8 | m[t++];
                    const aH = m[t++] << 8 | m[t++];
                    const aI = o[aG];
                    const aJ = o[aH];
                    q[s++] = H(aI) + aJ;
                    continue;
                  }
                case 181:
                case 92:
                  {
                    const aK = m[t++] << 8 | m[t++];
                    const aL = q[--s];
                    const aM = q[--s];
                    if (aM < aL) {
                      t = aK;
                    }
                    continue;
                  }
                case 246:
                case 126:
                case 137:
                  {
                    const aN = m[t++] << 8 | m[t++];
                    const aO = p[aN];
                    const aP = u;
                    const aQ = o;
                    const aR = p;
                    const aS = w;
                    const aT = z;
                    if (!aO._compiledBytecode) {
                      aO._compiledBytecode = aO.bytecode instanceof Uint8Array ? aO.bytecode : new Uint8Array(aO.bytecode);
                    }
                    const aU = function (aW, aX) {
                      const aY = {
                        __parent__: aP
                      };
                      if (aO.name && aO.name !== "<anonymous>") {
                        aY[aO.name] = aV;
                      }
                      const aZ = aO.params;
                      const b0 = aO.defaults;
                      const b1 = aZ.length;
                      for (let b4 = 0; b4 < b1; b4++) {
                        let b5 = aX[b4];
                        if (b5 === undefined && b0 && b0[b4]) {
                          const b6 = b0[b4];
                          if (b6.type === "Literal") {
                            b5 = b6.value;
                          }
                        }
                        aY[aZ[b4]] = b5;
                      }
                      if (aO.rest) {
                        aY[aO.rest] = aX.slice(b1);
                      }
                      if (aO.usesArguments) {
                        aY.arguments = aX.slice(0, aX.length);
                      }
                      aY._this = aO.isArrow ? aP._this : aW;
                      const b2 = i();
                      b2.bytecode = aO._compiledBytecode;
                      b2.constants = aQ;
                      b2.functions = aR;
                      b2.sp = 0;
                      b2.globalEnv = aS;
                      b2.env = aY;
                      b2.inlineCaches = aO._inlineCaches ||= Object.create(null);
                      b2.debug = aT;
                      const b3 = b2.runBytecode(aO._compiledBytecode, 0);
                      j(b2);
                      return b3;
                    };
                    const aV = function (...aW) {
                      return aU(this, aW);
                    };
                    aV.call = function (aW, ...aX) {
                      return aU(aW, aX);
                    };
                    aV.apply = function (aW, aX) {
                      return aU(aW, aX || []);
                    };
                    aV.bind = function (aW, ...aX) {
                      return function (...aY) {
                        return aU(aW, aX.concat(aY));
                      };
                    };
                    if (!aO.isArrow) {
                      aV.prototype = {
                        constructor: aV
                      };
                    }
                    if (aO.length !== undefined) {
                      try {
                        Object.defineProperty(aV, "length", {
                          value: aO.length,
                          configurable: true
                        });
                      } catch (aW) {}
                    }
                    if (aO.name && aO.name !== "<anonymous>") {
                      try {
                        Object.defineProperty(aV, "name", {
                          value: aO.name,
                          configurable: true
                        });
                      } catch (aX) {}
                    }
                    aV._isVMFunc = true;
                    aV._funcDef = aO;
                    aV._closure = aP;
                    aV._executeVMFunc = aU;
                    aV._vmConstants = aQ;
                    aV._vmFunctions = aR;
                    aV._veic = aS;
                    aV._vmDebug = aT;
                    q[s++] = aV;
                    continue;
                  }
                case 4:
                case 153:
                case 109:
                  {
                    const aY = m[t++] << 8 | m[t++];
                    const aZ = e(aY);
                    for (let b3 = aY - 1; b3 >= 0; b3--) {
                      aZ[b3] = q[--s];
                    }
                    const b0 = q[--s];
                    const b1 = q[--s];
                    if (typeof b0 !== "function") {
                      f(aZ);
                      throw new TypeError("Value is not a function (type: " + typeof b0 + ")");
                    }
                    const b2 = b0._isVMFunc ? b0._executeVMFunc(b1, aZ) : b0.apply(b1, aZ);
                    f(aZ);
                    q[s++] = b2;
                    continue;
                  }
                case 133:
                case 94:
                case 140:
                  A.sp = s;
                  A.env = u;
                  return q[--s];
                case 9:
                case 213:
                case 107:
                  q[s++] = {};
                  continue;
                case 132:
                case 10:
                case 105:
                  q[s++] = [];
                  continue;
                case 244:
                case 118:
                case 19:
                  {
                    const b4 = q[--s];
                    const b5 = q[--s];
                    if (b5 != null) {
                      q[s++] = L(t - 1, b5, b4);
                    } else {
                      q[s++] = undefined;
                    }
                    continue;
                  }
                case 165:
                case 209:
                case 205:
                  {
                    const b6 = q[--s];
                    const b7 = q[--s];
                    const b8 = q[--s];
                    if (b8) {
                      b8[b7] = b6;
                    }
                    q[s++] = b6;
                    continue;
                  }
                case 130:
                case 40:
                case 156:
                  {
                    const b9 = q[--s];
                    const ba = q[--s];
                    let bb = undefined;
                    if (ba != null) {
                      try {
                        bb = ba[b9];
                      } catch (bc) {
                        if (!(bc instanceof TypeError) || b9 !== "caller" && b9 !== "callee" && b9 !== "arguments") {
                          throw bc;
                        }
                      }
                    }
                    q[s++] = bb;
                    continue;
                  }
                case 177:
                case 151:
                case 139:
                  {
                    const bd = q[--s];
                    const be = q[--s];
                    const bf = q[--s];
                    if (bf != null && typeof bf !== "string") {
                      bf[be] = bd;
                    }
                    q[s++] = bd;
                    continue;
                  }
                case 250:
                case 248:
                case 22:
                  q[s - 1] = typeof q[s - 1];
                  continue;
                case 51:
                case 222:
                case 134:
                  {
                    const bg = q[--s];
                    q[s - 1] = q[s - 1] instanceof bg;
                    continue;
                  }
                case 54:
                case 99:
                case 190:
                  {
                    const bh = q[--s];
                    q[s - 1] = q[s - 1] in bh;
                    continue;
                  }
                case 173:
                case 212:
                case 61:
                  {
                    const bi = q[--s];
                    const bj = q[--s];
                    q[s++] = delete bj[bi];
                    continue;
                  }
                case 182:
                case 74:
                case 201:
                  {
                    const bk = q[--s];
                    y.push({
                      keys: bk ? Object.keys(bk) : [],
                      index: 0
                    });
                    continue;
                  }
                case 114:
                case 221:
                case 79:
                  {
                    const bl = m[t++] << 8 | m[t++];
                    const bm = y[y.length - 1];
                    if (bm.index >= bm.keys.length) {
                      y.pop();
                      t = bl;
                    } else {
                      q[s++] = bm.keys[bm.index++];
                    }
                    continue;
                  }
                case 96:
                case 135:
                  {
                    const bn = m[t++] << 8 | m[t++];
                    x.push({
                      catchAddr: bn,
                      env: u,
                      sp: s
                    });
                    continue;
                  }
                case 52:
                case 193:
                  x.pop();
                  continue;
                case 55:
                case 121:
                  throw q[--s];
                case 168:
                case 89:
                  q[s++] = u._this || undefined;
                  continue;
                case 238:
                case 194:
                  {
                    const bo = m[t++] << 8 | m[t++];
                    const bp = e(bo);
                    for (let bs = bo - 1; bs >= 0; bs--) {
                      bp[bs] = q[--s];
                    }
                    const bq = q[--s];
                    if (typeof bq !== "function") {
                      f(bp);
                      throw new TypeError(bq + " is not a constructor");
                    }
                    let br;
                    if (bq._isVMFunc) {
                      const bt = bq.prototype;
                      br = Object.create(bt && typeof bt === "object" ? bt : Object.prototype);
                      const bu = bq._executeVMFunc(br, bp);
                      if (bu !== undefined && typeof bu === "object" && bu !== null) {
                        br = bu;
                      }
                    } else if (typeof Reflect !== "undefined" && Reflect.construct) {
                      br = Reflect.construct(bq, bp);
                    } else {
                      br = new (Function.prototype.bind.apply(bq, [null].concat(bp)))();
                    }
                    f(bp);
                    q[s++] = br;
                    continue;
                  }
                case 180:
                case 254:
                  {
                    const bv = q[--s];
                    const bw = q[--s];
                    const bx = q[--s];
                    Object.defineProperty(bx, bw, bv);
                    q[s++] = bx;
                    continue;
                  }
                case 98:
                case 157:
                  {
                    let by = q[--s];
                    const bz = q[s - 1];
                    if (!Array.isArray(by) && by != null && typeof by[Symbol.iterator] === "function") {
                      by = Array.from(by);
                    }
                    if (Array.isArray(by)) {
                      bz.push(...by);
                    }
                    continue;
                  }
                case 176:
                case 110:
                  {
                    const bA = q[--s];
                    const bB = q[s - 1];
                    bB.prototype = Object.create(bA.prototype);
                    bB.prototype.constructor = bB;
                    Object.setPrototypeOf(bB, bA);
                    continue;
                  }
                case 35:
                case 242:
                  {
                    const bC = q[--s];
                    const bD = q[s - 1];
                    if (bC && typeof bC === "object") {
                      Object.assign(bD, bC);
                    }
                    continue;
                  }
                case 85:
                case 198:
                  {
                    const bE = q[--s];
                    q[s - 1].push(bE);
                    continue;
                  }
                case 161:
                case 122:
                  {
                    let bF = q[--s];
                    const bG = q[s - 1];
                    if (!Array.isArray(bF) && bF != null && typeof bF[Symbol.iterator] === "function") {
                      bF = Array.from(bF);
                    }
                    if (Array.isArray(bF)) {
                      bG.push(...bF);
                    }
                    continue;
                  }
                case 81:
                case 155:
                  {
                    const bH = q[--s];
                    const bI = q[--s];
                    const bJ = q[--s];
                    if (typeof bI === "function") {
                      q[s++] = bI._isVMFunc && bI._executeVMFunc ? bI._executeVMFunc(bJ, bH) : bI.apply(bJ, bH);
                    } else {
                      throw new TypeError(bI + " is not a function");
                    }
                    continue;
                  }
                case 232:
                case 115:
                  {
                    const bK = q[--s];
                    if (Array.isArray(bK)) {
                      q[s++] = bK;
                    } else if (bK && typeof bK[Symbol.iterator] === "function") {
                      q[s++] = Array.from(bK);
                    } else if (bK && typeof bK.forEach === "function") {
                      const bL = [];
                      bK.forEach(bM => bL.push(bM));
                      q[s++] = bL;
                    } else {
                      try {
                        q[s++] = Array.from(bK);
                      } catch (bM) {
                        q[s++] = bK ? [bK] : [];
                      }
                    }
                    continue;
                  }
                case 53:
                case 150:
                  A.sp = s;
                  if (s > 0) {
                    return q[--s];
                  } else {
                    return undefined;
                  }
                case 240:
                case 187:
                  continue;
                case 227:
                case 77:
                  debugger;
                  continue;
                case 66:
                case 73:
                  {
                    const bN = m[t++] << 8 | m[t++];
                    const bO = o[bN];
                    const bP = H(bO);
                    const bQ = bP + 1;
                    J(bO, bQ);
                    q[s++] = bQ;
                    continue;
                  }
                case 172:
                case 218:
                  {
                    const bR = m[t++] << 8 | m[t++];
                    const bS = o[bR];
                    const bT = H(bS);
                    const bU = bT - 1;
                    J(bS, bU);
                    q[s++] = bU;
                    continue;
                  }
                case 231:
                case 215:
                  {
                    const bV = m[t++] << 8 | m[t++];
                    const bW = o[bV];
                    const bX = H(bW);
                    J(bW, bX + 1);
                    q[s++] = bX;
                    continue;
                  }
                case 97:
                case 18:
                  {
                    const bY = m[t++] << 8 | m[t++];
                    const bZ = o[bY];
                    const c0 = H(bZ);
                    J(bZ, c0 - 1);
                    q[s++] = c0;
                    continue;
                  }
                case 129:
                case 204:
                  {
                    const c1 = m[t++] << 8 | m[t++];
                    const c2 = o[c1];
                    q[s++] = w[c2];
                    continue;
                  }
                case 236:
                case 100:
                  q[s++] = o[0];
                  continue;
                case 175:
                case 214:
                  q[s++] = o[1];
                  continue;
                case 1:
                case 152:
                  q[s++] = o[2];
                  continue;
                case 36:
                case 58:
                  q[s++] = o[3];
                  continue;
                case 86:
                case 87:
                  q[s++] = m[t++] - 128;
                  continue;
                case 239:
                case 125:
                  q[s++] = 0;
                  continue;
                case 32:
                case 59:
                  q[s++] = 1;
                  continue;
                case 80:
                case 116:
                case 163:
                  {
                    const c3 = m[t++] << 8 | m[t++];
                    const c4 = m[t++] << 8 | m[t++];
                    const c5 = H(o[c3]);
                    const c6 = o[c4];
                    if (c5 != null) {
                      q[s++] = L(t - 5, c5, c6);
                    } else {
                      q[s++] = undefined;
                    }
                    continue;
                  }
                case 166:
                case 206:
                case 46:
                  {
                    const c7 = m[t++] << 8 | m[t++];
                    const c8 = m[t++] << 8 | m[t++];
                    const c9 = q[--s];
                    const ca = H(o[c7]);
                    if (ca != null) {
                      ca[o[c8]] = c9;
                    }
                    q[s++] = c9;
                    continue;
                  }
                case 144:
                case 216:
                  {
                    const cb = m[t++];
                    const cc = e(cb);
                    for (let cg = cb - 1; cg >= 0; cg--) {
                      cc[cg] = q[--s];
                    }
                    const cd = q[--s];
                    const ce = q[--s];
                    if (typeof cd !== "function") {
                      f(cc);
                      throw new TypeError("Method is not a function");
                    }
                    const cf = cd._isVMFunc ? cd._executeVMFunc(ce, cc) : cd.apply(ce, cc);
                    f(cc);
                    q[s++] = cf;
                    continue;
                  }
                case 179:
                case 29:
                  {
                    const ch = m[t++] << 8 | m[t++];
                    const ci = m[t++] << 8 | m[t++];
                    const cj = H(o[ch]);
                    const ck = H(o[ci]);
                    q[s++] = cj != null ? cj[ck] : undefined;
                    continue;
                  }
                case 82:
                case 223:
                  {
                    const cl = m[t++] << 8 | m[t++];
                    const cm = m[t++] << 8 | m[t++];
                    q[s++] = H(o[cl]) < o[cm];
                    continue;
                  }
                case 235:
                case 158:
                  {
                    const cn = m[t++] << 8 | m[t++];
                    const co = m[t++] << 8 | m[t++];
                    q[s++] = H(o[cn]) < H(o[co]);
                    continue;
                  }
                case 233:
                case 211:
                  {
                    const cp = q[--s];
                    const cq = q[--s];
                    if (typeof cp !== "function") {
                      throw new TypeError("Value is not a function");
                    }
                    const cr = cp._isVMFunc ? cp._executeVMFunc(cq, []) : cp.call(cq);
                    q[s++] = cr;
                    continue;
                  }
                case 243:
                case 127:
                  {
                    const cs = q[--s];
                    const ct = q[--s];
                    const cu = q[--s];
                    if (typeof ct !== "function") {
                      throw new TypeError("Value is not a function");
                    }
                    const cv = ct._isVMFunc ? ct._executeVMFunc(cu, [cs]) : ct.call(cu, cs);
                    q[s++] = cv;
                    continue;
                  }
                case 39:
                case 88:
                  {
                    const cw = q[--s];
                    const cx = q[--s];
                    const cy = q[--s];
                    const cz = q[--s];
                    if (typeof cy !== "function") {
                      throw new TypeError("Value is not a function");
                    }
                    const cA = cy._isVMFunc ? cy._executeVMFunc(cz, [cx, cw]) : cy.call(cz, cx, cw);
                    q[s++] = cA;
                    continue;
                  }
                default:
                  throw new Error("Unknown opcode: 0x" + M.toString(16) + " at ip=" + (t - 1));
              }
            }
            A.sp = s;
            A.env = u;
            if (s > 0) {
              return q[s - 1];
            } else {
              return undefined;
            }
          } catch (cB) {
            if (x.length > 0) {
              const cC = x.pop();
              t = cC.catchAddr;
              u = cC.env;
              s = cC.sp;
              q[s++] = cB;
              A.sp = s;
              continue cD;
            }
            A.sp = s;
            A.env = u;
            throw cB;
          }
        }
      }
      run() {
        return this.runBytecode(this.bytecode, 0);
      }
      step() {
        const m = this.run();
        return m;
      }
    }
    function l(m, n, o) {
      return Math.imul(m + 1 ^ n, o) >>> 0 & 255;
    }
    _vbvu = function (m, q, t, v) {
      var w;
      var x = "";
      for (w = 0; w < m.length; w++) {
        x += String.fromCharCode(m.charCodeAt(w) ^ l(w, t, v));
      }
      var y = JSON.parse(x, function (H, I) {
        if (I && typeof I === "object" && I.__type__ === "RegExp") {
          return new RegExp(I.source, I.flags);
        } else {
          return I;
        }
      });
      var z = atob(q);
      var A = z.length;
      var B = new Uint8Array(A);
      for (w = 0; w < A; w++) {
        B[w] = z.charCodeAt(w) ^ l(w, t, v);
      }
      var C = 2;
      var D = B[0] | B[1] << 8;
      var E = [];
      var F;
      var G;
      for (F = 0; F < D; F++) {
        G = B[C] | B[C + 1] << 8 | B[C + 2] << 16;
        C += 3;
        E.push(B.subarray(C, C + G));
        C += G;
      }
      if (y.bytecode && y.bytecode.__vmb__ != null) {
        y.bytecode = E[y.bytecode.__vmb__];
      }
      y.functions.forEach(function (H) {
        if (H.bytecode && H.bytecode.__vmb__ != null) {
          H.bytecode = E[H.bytecode.__vmb__];
        }
      });
      return y;
    };
    _va5d = function (m, n) {
      return new k(m, n || {}, false).run();
    };
  })();

// VM bytecodes and caches
var Xm;
var Xf;
var Xe;
var Xt;
var XC;

var XL = _vbvu("O}Äp$¡ÚBLëcaÕÒ¢t&É\b»ü\"çÝy5²ZR¡¹÷h(ÌKOæÃõe51äÒCñ6Å=Jë\"®WÅ³ì!f?Q­ú¶ÞÇu²#pQï-ªËqy·%b»FÀÚ{åé>'\nU/±öOüý\n«Ùn6ÂsÓá&ÿhmºÛ\rI¢5rãGV¯Ýj¡9NwÎå\"SëÁßM;5©þçZRÃq¶,½ÊkÉ.×fE39¡æ¿-zc\t^GÈõ2£­Ñoò*K×ù74¥âÆn\rZûKi¾§\xA0Õ1vÏZ}+?YîBóia¦Öí:[³ÉµòcýÖ/\"]ê¹Î÷de¢ÓAA_¾Í»n<g\xA0Ð§8Öy¦}yãÙÑ³ô!ké§@²ÍÕ{¯3p_á6\\îBÍñ¹F:ÔNðÚ{ÿ½tc=G¢øA¹Jæ¿`^Ñ=í¦(ñ,þÛlIÐÌÎ;lõ=XÒ¢ Ø)2®å\"SçL5¸ð F0îDñkªày×LÜp5ðè§¿-\"Üx_P8õ|ø¼Y\"ðÚ$SËù}J*ê¬n'ÐyT·A&÷§öÕa×u+9Á:rWàÇTó\"-ÿ1Èã4¥SP\0ã­c²Ýa8Sä@Ú§s0¬Ë^Æ¡Ãõe51äÄPñoÞl'»wNïÒ]³âe+qê«dý", "Nl+pCVDywrW9JyEbGAyS0KSAk+8P7zJkbJe3unOc+gxHflEWoO7N1R2ztHogFt9SxO7Ce+AP43r5Z9FhqcD4rfGufjLrFIJ0ysgul08bseaGj9dPCqv1VBOH64tIcqkvFDcNz0UuQJXdFGGx8ahVxn+A9lhUKRIPx1Fu2keT2xub3y0C9o4313ymmLOYz53F3zoc+UEdnaXhpmE687l6jMcdRqd7AxeFs8cPhVrjJXZclGb7YIrB6gwnz97TJrUtdWvJSYEwPSXs7a4QrAnKj1UXI2mKK3N2g9cNMPcIwWKUvnDjsM+pKinyRDF51WC9EZ5urNtkkoQ42D63fzWKPRtfpxp/e9U+w/eVMxhCftek16dGO54dJW1jPEGRONz2IZ3GKIQR4s+XX/uE2mOrbuvvLSj48KnPjLYKg6jPq7Uk5EnJEU2tdaFwCOQjLEocEgXWJzGNCR6mV58SZ3OlfCvEVgswWla63Cf/qSjY4D2F2dlZgVwK/jlYviB7cdpPP+BTWVr7Q0NTp83GgDh/PyROYtZATwODmce8wQlFVY3xaGB5C5FiVGglDlcv+18tpm+3b+qL9XQUQoUDKFKJp3S3bVFAa+D1PZMkEXEI7E0fIFa49KFyTyfozlHn8zs7u78t4o8LV/dcht3TeI9bpf9a/NkhPb2F4UYB1J3xWuzA1aYn4UQ5wNMnb8L6Q6XKvDTGVsDqIcdsp0l+WMbVDVVs6SlBDN0F582O8CtMqk9P90NiAgtTVqO3zfaXpm+C9B515hAPFW1sNwGR2XXAHVEE8ExQSfLk2LWeN8NrQTY7P4efH1uVAuNynp74InnfhJdhf1swmAVNZFwhURjlGME9Joim1EIP94GbgXrDC6uuT61uf5DHL+wWKO4ID8uVBARpqfEIgFWhTCihQ2kq/FdAtifrtKc+Izd/FaJTpaZsVeZJiL0CtbFn7z5Ygj7x5E9w+ABpbuislPyBjIzwTdanAGmeNIsVcrhDMVYu6v/mL3ctaw+QfnT3fAvoPXrov3keCX6ZwvBX98fRNmWsbKYcEHnulvglQrFTQaYL+g3ef8fdO2Lh4rZHzEk4Yyd96nNDE+BNzjh/Ov5PGfWirdr9ZozJwEh1ksERoNsACx0jC7o5x7NK5Wt4ngDFc/IdOz/Pa4hb4sJYCzHmew/APcT5cs3dresGIfq+YT8X6k08SiXnPyLzCj2npCwxw0DF/0/dhCxr+YOtFxIuoTM2stL/aEZZG0xqR8chnhHjBeU5Gh8ZTq3tSAwZ1OFowN4pLRLmCOUxArMU364/q3imna8pTgEAYSXbgFoew2LzcdE/b8xp+sM6mFypmbUA9GmUQCs/YSAMKoWAoLx4UBMQDzQSMrhv0cL9iQhumDD7ihdGz1u2vzv4JSax4euI9EINGF8fg3DRANVR0z/XkmPirSbvfwVYCxjPjPqqkngZGufsIMzJV7aCOQTnZCD+fj/XZMXwITirvrKvyGVtSD+F1b4/qAswHglFsAdgjt4daZ08r7YOJF/paUw3mB7Ck5qCqiYiTV37AhWJd0dR2OUSZSQPtnG7B7KK0zHmwSfcNnTQO+ypt7FiGTbHIagS42DSRCIikngG0uojNzsUXfqaAmygTEnYzuD1dU8WERJhytDo/IZzAGFNWjnTnZ1w83TAlPj15ZJe", 60373, 42937);
var XZ = _vbvu("*¤Ù1\t×Í»1®(`3×»iÇ \rôAJ4ü\bÐoÛÿ(öVHuG\rüõjIÔ=áB,ü¤3¼ÑÞ~½ä¤þÛUÓ'8Ò7f]Èx*l0iBoüºÎEb.pÚ8kÆ.Þ¶c/6Ùõø¼bý¶ØÇóbB¦bH3±}y¨ÝU3èw)ç~¼/Ó·m£nD¡ ¾å:èÓ¢È@:çÃÎÛ|û\"a¢`Iþ+(dQ^P\fø²ù¾[ø¾4áîÕíÊ¯QÂmmÇ·øþ%ø¬T´\be½íÔ^ËQ~;îu+Ü>kàÚ$×)Ô", "U4a0SH3M53Ry3hcJ1Q4Z4aHSjq3TAjfRQS5jp6apk/Gx5wcC3RARCcxt/gA285/P8qnn5KE=", 53804, 10293);
var Xi = _vbvu("sÊ>ê/4ÖlBÅ-[lüZq§æÛ?µÒìSç÷»_üT\\ïwÍ&·X¸kñ:,:Ê­Jå¾kEA3\f~0Ô\\z\0¨M:O,É¢=ê mÀ: î'M·Ö\xA0)pþ,É\xA0\b»Uª\\ê²XâNëÿiX³Q³{£¿W«ÚôrÛÅgç\b?mî;nØ69xî~Á;Ïjò}/ö5º\ràP'Û4 üNâÊ½°@à÷ÞkÉL×6½Bq©oN®û\\ªH\xA0«8KùK`¡hòx\xA0A=ÞrzÍ(ÄxÄMÒ", "+FGnR54DTFvzCWNWVq47mYriZuI4hdz3+pnwmkw9ldVWq9ufftdBO5GWxcOz", 35435, 63145);
var XU = _vbvu("WkvÄ¨\rì@$À=Óç9ÄJ4@ÿD£I}Ðt×»mG¾²A`îÅ×Ó C-_¢|_6\\¡Õ´1®ÄC#dÝ¦îL#'ùüN\fe~Ñ½â{ÚJÀÍtXlW©Ø½hCdK§ôp[h^ñÞv]&áÁ¯=ûS¹o¾fÔ±õx*Ù«X³b3~¹äKwÚÉífMrâÁÖî5\\êÙêØ6\nEòÑäÝ3vúi|Ç­ÿ\foÆ^Ô¡P´@#,ý¬¿N?xÜûRN´Ë¦;\bwèÃðÈ<G*¿êÚ\"w]°êtWIýJqÛiÈ´[²mÀdÑµéuØ}¬²øk=yùTiG­øbAmîÅâjYlX¾Ý.6ðöÑ3­çO+Ò!çv}ßîH»n,?Î£+ó[9Ú9È#iN¤Ï¢dùþÂiL8bÌßøÆ:f^·å)­@,bÉ²@½sÊ9Þ\xA0ú#2vë\tµg\nîöM*³Ï¦Ï#\nmüÙÌÜ*EOãÕ7:ô9zÞíJã[/-£\rãG.mÉýºóK?=¾ÔDY£¨6\fbP¡Í\xA0Ë-aO´Û\xA0L_k@±ÓÅ?\0{îB=-«ïW$+ÓçúN8lâç%±UsÞ5Ú÷+G.K³õÎ!aøªú\rq[\xA0l8¼õÐtñNÛe¢YïFóG4'µ\tõVs\"yÛµä^#7Å9fòýâ6mPêßàÚ0\nÂûÝ3zâÇº)Ùºüq?vÉ¤\fó[gÜ}Ýµ\tú=q1Ä°\0öU&ÔÑ×!\niâÁöÎ6E$¥ìÜ(]\f½äÔ (q[².+í\0áO*#åéG2FÓ±äøFq©=µáSH£ïj,|ïÅ:$ï¶sVöË°9yåU$zÃóL¯3tÜç\\õI53â¹õU$cË÷LyE¦Ã²Ä=\"vS­ª pJ¿ÓÑ;sEºÕ¢zéúO<±É¶\täL3'½õI:}1Åñð@6fKzC±àhCiB±Çª,\t8bÌßüÊ qX¼´1×ë5ÐF \\ûãX³UiÄuÝ´½z¡eÒéCñ@,ÃÞ®hu^ºÁ¾Ï7d\täùß;\nLI­Ñ®ß'tô\"HØ½ú\fy`Î´\r©7wÝ«è¿`Ø3Ç¤æwY«çÊ>}þãË;\0{f¡", "KUnlD7A7boAiQcGuqOZZIzx6pCqO3X7SNFFYF7kXdmtgKcr30a1M7gQhOciIptqSS4WqcqC9pVwUNVAkB39WyVMxKk2nnaNpZIM7yugA01F8n7jnABjL/HSWsITXFb7bv0OGDVz4jqPJYQmfyOmREVxyTJ9Y/ZI7GmGeK1SAlgvSyWuJMEAkA6nnZIcm7+YURvZ6j2v//g0M0X2pOHnjU4y44G8flc7x0yNPQMIlyOMRuVTyIC5PCF6xXFEnn9ZFt9lgz36VEV9pAa9KaIuMW+izusrWFQ7RrOp413aNEAlm6ZwiUHqkI9G3AKrFZQii3PrEqj7OHzMi8ZJsWHy/iyV27A+6O26BSEHoIenFcZH2We0Hxt1mKzReeBehxiHpGEXK97bsTnl568L9kKNGYGHz2uS4Zl5vHl3S676zVt9mQypb1oCu3pwLIlkFp6a7YCE6VtOIvrDMkS+HMhWrjVRLsi/PR46wt8sCOpKQL7tPXyWH4OfJOzs1Ep5y9YKhrNPSjyMaao6k207vfspZqoNUeoVvXd6MT71yjQdNY+v3i8dvGofO8AmhVt8IMil2nLbQfzkuR/ORYZh3DxPOpJllqtVWlaND/rmi3/vBJ1Lps7rVDZ0t3vQFGNdvGDYx7EIHr1/gDjld4YTS4WURI+NBmqVPfT7qLzuSrX5TKIvi8eoX50ke9u5B+CGwSGaBsVn1lcDEbfxwULm9uMn7axdc5e+wdOdjHzl654cdRmGeiMJyoKdxczSaApuYr070XYg/9/AWVQlkmzphUAW8jfjSfl57t77P+ZEoAHy/trC52CyX0PdejERBqUvI/6CjyXhOfuDclHlUUAoicvWAhqzoFyUwUOoDpzqAhwpt86O809CfU+X+Bx7RZRo4TdYyJqlWgH0tyBDag8c=", 7509, 59231);
var Xu = _vbvu("\xA0hÛÉkë7§ì$*#7«p¼7Äþc[Èxö8ÚDíãÝTæAÇe*[Ä<~çßÁcöoU`óÔIwï+¦\b±a\t¥ÚØNÛ}\"CïaÄ`à\bd³í¼£?jsdHàñ9:Ó8¡ 4²SÖÎwè^Bþ~Fÿ`ÇÉ{óÎ¿'b<Ò5¬D÷7ü;v26³áDùþiTâOxá_ÎüX\0@îo[\\ýËÂtïÆ6ô8ïò3ÜBàB³g Yµ/6ØCªçPãêj7zþ\n¦QÃç!Hº£eÆDº'Ê%Õß+¶u»$?ª¯Kû/ÎðgÑ{çä\b£¡BÿªRÏt*MÄ2.ªJÁy¡&Á4¥\0ßo¨Ã*¢Q\b±f¶3ÙÈX¸3n²!{ò9$ªûÙP¿±SÝx(Q4&ÐRý¾1KÅÂ:ÍHgÂ-ªSË(èVþb®nÊgç©kzô<ãpô|¸^ÉvtÌg?}Îþi]£Ü5®W¢%A©kª#1ð#äRÞvå¬Í:¨ÒBçmôb5|GîÅ¾¿s}ç\fLíRÈúdú}\tN®9ÜÃ^ü>§_\\ä$O6º¥R²vÖ³3YÊe§và\bþâµæn3j0?¤^Ì5ÏÄLzØ©G(÷ÕÒ1¯PA±8S7¡ ÒÑùh2]üaÑwò\fÅl«ùõò[Ë{e%;ûégÅÂ&ÍlfñzýPÄ(¯ók§*&ª×¿:Ýyø<µË¬c­WÙ|m\"", "30q2sB8H/eZVwiRElxNt8etPl/VWng0vY9JL8qcWug27K+Ra/2/FwjOg/qF35HOzvlapoRdYYNRCPyEbqPZhWHTO+YPSzj7fvAJ09FpGtMNeMwkCd8bnNKFFITujVo/lpefZ0mlRBkBzt9XEHSaVNgt7Q+BN6IybFNTZWMa8perwMVUwnhZb8dNdCagXA+CiJtpJ+K8W2ud8J2i4L7A6ZjuiT5o0F11Y5JIpiP+/UHZLsn6qAIunVMsUniAHfrO20Kh5SImPBaQbHa9CV85ipiPh5YDneNXiwh8B8PiIWVLS61mmvy5GhPQO0c8vLxUdyvpgDM83tU8DeMNVR7GPbNA1c7AVqCbkX2gxJUfkdXJ38MnKzZ4J5zVQjsttFolUYCqY7ZNu3Pvooh7nG+ZaRBA6qSoPbifUQ6pgGI8ZzKwTrP/wTkQ9NFkCYHDRRqfqvlAJEkmjnf6jE75gTVbEJvtmknI+jpAEeUhRSeGkL3OUUr8+YwYtHg7yYA9FjJ5Hc1VMmZ8GQnyFwEpiF4ntw9PaRj20vI2OW1LSQ62WEVAZEhkZx+5VybMwBfcE3tXNkmrjIJ7Bdf7DP3ESB3hnoZsC03DNGsJ0f4L58E9sNTOEGo91mjLNuzutlPjKfEUMw+pIicrknYTMXVvIJ115HJrcT9jPPyeUBe0xEke3A1PlSsA9H4R35Fe0Z6rv6QLe6vljwCUmDf5M0kUrh5mtnHEqka/nTiYOM60JLs/mWrPQmKg2t37+ocmyNTCbe2Wlo4rxSF/cDdfsunF5SJYcvDqCEapv07bWoxyp9edeSIzppSqllq4VImtaUUdVJpMT8Bbp71eYHBXKWGFYSja0R4tjOTCHMddk086kLQ==", 14164, 4719);

// Core functions
function km(Cf) {
      var CZ = {
        _vffqy2fg0: Array,
        _vffqy2fg1: Math,
        _vffqy2fg2: kv,
        _vffqy2fg3: km
      };
      return (Xm ||= _va5d(XL, CZ))(Cf);
    }
function kv(Cf) {
      var Co = 0;
      var CE = 0;
      var CW = 0;
      var CR = 0;
      var Ch = Cf.length;
      var Cp = [];
      var CA = 0;
      Cp.length = Ch;
      for (CE = 0; CE < Ch; ++CE) {
        Co = Cf[CE];
        if (Co < 128) {
          Cp[CA++] = Co;
        } else if (Co < 192) {
          CR <<= 6;
          CR |= Co & 63;
          if (--CW == 0) {
            if (CR > 65535) {
              Cp[CA++] = (CR - 65536) / 1024 | 55296;
              Cp[CA++] = CR & 1023 | 56320;
            } else {
              Cp[CA++] = CR;
            }
          }
        } else if (Co < 224) {
          CW = 1;
          CR = Co & 31;
        } else if (Co < 240) {
          CW = 2;
          CR = Co & 15;
        } else if (Co < 245) {
          CW = 3;
          CR = Co & 7;
        } else {}
      }
      Cp.length = CA;
      return String.fromCharCode.apply(null, Cp);
    }
function xO(Cf) {
      var CR = Cf.toString();
      var Co = CR.length;
      var CW = Number(CR.substr(0, Co - 2));
      var Ch = Number(CR.substr(Co - 2, 1));
      var CE = Number(CR.substr(Co - 1));
      return [CW * CE * Ch, Ch];
    }
function PX(Cf) {
      var CZ = 0;
      var Cy = 0;
      var Co = Cf.length;
      var CE;
      for (; Cy < Co; Cy++) {
        CE = Cf.charCodeAt(Cy);
        if (CE < 58) {
          CE = CE - 48;
        } else if (CE < 91) {
          CE = CE - 29;
        } else {
          CE = CE - 87;
        }
        CZ += CE * Math.pow(62, Co - Cy - 1);
      }
      return CZ;
    }
function P1(Cf) {
      var CZ = {
        _vfurgc9k0: ng,
        _vfurgc9k1: B6,
        _vfurgc9k2: ko,
        _vfurgc9k3: P1
      };
      return (Xf ||= _va5d(XZ, CZ))(Cf);
    }
function PJ(Cf) {
      var CZ = {
        _vfhn5txv0: B6,
        _vfhn5txv1: ko,
        _vfhn5txv2: PJ
      };
      return (Xe ||= _va5d(Xi, CZ))(Cf);
    }
function Bc(Cf, CZ, Cy, Co) {
      return Bs(nH(nv(PA(Cf, Co), CZ), Cy));
    }
function Bs(Cf) {
      function Cy(Cp) {
        var CA = [];
        var Ce;
        var Ci = 0;
        for (Ci = 0; Ci < Cp.length; ++Ci) {
          Ce = Cp.charCodeAt(Ci);
          if (Ce < 48) {
            return [];
          } else if (Ce <= 57) {
            CA[Ci] = Ce - 48;
          } else if (Ce <= 90) {
            CA[Ci] = Ce - 65 + 10;
          } else if (Ce <= 122) {
            CA[Ci] = Ce - 97 + 36;
          } else if (Ce == 1025) {
            CA[Ci] = 68;
          } else if (Ce == 1105) {
            CA[Ci] = 101;
          } else if (Ce < 1040) {
            return [];
          } else if (Ce < 1046) {
            CA[Ci] = 62 + Ce - 1040;
          } else if (Ce < 1078) {
            CA[Ci] = 62 + Ce - 1040 + 1;
          } else if (Ce < 1104) {
            CA[Ci] = 62 + Ce - 1040 + 2;
          } else {
            return [];
          }
        }
        return CA;
      }
      var Co = "";
      var CE = Cy(Cf);
      var CW = 0;
      var CR = 0;
      function Ch(Cp) {
        Cp += 26;
        if (Cp < 10) {
          return 48 + Cp;
        }
        Cp -= 10;
        if (Cp < 26) {
          return 65 + Cp;
        }
        Cp -= 26;
        return 97 + Cp;
      }
      for (CW = 0; CW < CE.length; ++CW) {
        CR = CE[CW];
        Co += String.fromCharCode(Ch(CR % 12));
        Co += String.fromCharCode(Ch(Math.floor(CR / 12)));
      }
      return Co;
    }
function Bd(Cf) {
      return ng(3) + B6(ko(-93, true, [Cf.si, Cf.bg, Cf.hl1, Cf.k8, Cf.g2, Cf.u5, Cf.ui, Cf.jh9].join("")));
    }
function nM() {
      return (Bb[0] - Bb[0] % ((1000 + Bb[1]) * 86400)).toString();
    }
function nH(Cf) {
      function CZ(Cp) {
        Cp += 2;
        if (Cp < 10) {
          return 48 + Cp;
        }
        Cp -= 10;
        if (Cp < 26) {
          return 65 + Cp;
        }
        Cp -= 26;
        if (Cp < 26) {
          return 97 + Cp;
        }
        Cp -= 26;
        if (Cp < 6) {
          return 1040 + Cp;
        }
        if (Cp == 6) {
          return 1025;
        }
        if (Cp < 33) {
          return 1040 + Cp - 1;
        }
        Cp -= 33;
        if (Cp < 6) {
          return 1072 + Cp;
        }
        if (Cp == 6) {
          return 1105;
        }
        return 1072 + Cp - 1;
      }
      var Cy = 0;
      var Co = 0;
      var CE = "";
      var CW = 0;
      var CR = "";
      for (Cy = 0; Cy < Cf.length; ++Cy) {
        CW *= 256;
        CW += Cf[Cy];
        if (Cy % 5 == 4) {
          for (Co = 5; Co >= 0; --Co) {
            CR = String.fromCharCode(CZ(CW % 102)) + CR;
            CW = Math.floor(CW / 102);
          }
          CE += CR;
          CR = "";
          CW = 0;
        }
      }
      var Ch = Cf.length % 5;
      if (Ch != 0) {
        for (Co = Ch; Co >= 0; --Co) {
          CR = String.fromCharCode(CZ(CW % 102)) + CR;
          CW = Math.floor(CW / 102);
        }
        CE += CR;
      }
      return CE;
    }
function nv(Cf, CZ, Cy) {
      var Co = {
        _vf81fxy50: nX,
        _vf81fxy51: k6,
        _vf81fxy52: Date,
        _vf81fxy53: Math,
        _vf81fxy54: kk,
        _vf81fxy55: nv
      };
      return (Xt ||= _va5d(XU, Co))(Cf, CZ, Cy);
    }
function nX(Cf, CZ) {
      var Cy = 0;
      var Co = 0;
      for (; Co < 4; ++Co) {
        Cy <<= 8;
        Cy |= Cf[CZ + Co];
      }
      return Cy;
    }
function k6(Cf, CZ, Cy) {
      var Co = 3;
      for (; Co >= 0; --Co) {
        Cf[CZ++] = Cy >> Co * 8 & 255;
      }
      return Cf;
    }
function kk(Cf) {
      Cf = typeof Cf === "undefined" ? "undefined" : Cf;
      var Co = 0;
      var CE = 0;
      var CW = 0;
      var CR = Cf.length;
      if (typeof Cf === "string") {
        Cf = B8(Cf);
      }
      for (; Co < CR; ++Co) {
        CW <<= 8;
        CW |= Cf[Co];
        if (Co % 4 == 3) {
          CE ^= CW;
        }
      }
      if (CR % 4) {
        CW <<= (4 - CR % 4) * 8;
        CE ^= CW;
      }
      return CE;
    }
function PA(Cf) {
      var CZ = kf(Cf);
      if (CZ < 0 || Bm(Cf) <= CZ) {
        return B8(Cf);
      } else {
        var CE = new P4();
        var CW = 0;
        var CR;
        var Ch;
        var Cp;
        CE.push(8, 4);
        for (CW = 0; CW < Cf.length; ++CW) {
          Cp = Cf.charCodeAt(CW);
          if (Cp < 127) {
            CE.push(Cp, 7);
          } else if (Cp >= 44032) {
            CR = Cp - 44032;
            Ch = CR >> 9;
            if (Ch >= 9) {
              Ch += 5;
            }
            CE.push(Ch, 7);
            CE.push(CR & 511, 9);
          } else {
            CE.push(27, 7);
            CE.push(Cp - 12593, 6);
          }
        }
        if (CE.end_index % 8 == 1) {
          CE.push(127, 7);
        }
        return CE.buffer;
      }
    }
function kf(Cf) {
      var CZ = 4;
      var Cy = 0;
      var Co = 0;
      for (; Cy < Cf.length; ++Cy) {
        Co = Cf.charCodeAt(Cy);
        if (Co >= 9 && Co <= 13) {
          CZ += 7;
        } else if (Co >= 32 && Co <= 126) {
          CZ += 7;
        } else if (Co >= 44032 && Co <= 55203) {
          CZ += 16;
        } else if (Co >= 12593 && Co <= 12643) {
          CZ += 13;
        } else {
          return -1;
        }
      }
      return Math.floor((CZ + 7) / 8);
    }
function Bm(Cf) {
      var CZ = 0;
      var Cy = 0;
      var Co = 0;
      for (; Cy < Cf.length; ++Cy) {
        Co = Cf.charCodeAt(Cy);
        if (Co < 128) {
          CZ += 1;
        } else if (Co < 2048) {
          CZ += 2;
        } else {
          CZ += 3;
        }
      }
      return CZ;
    }
function B8(Cf) {
      var CZ = 0;
      var Cy = 0;
      var Co = 0;
      var CE = [];
      for (; CZ < Cf.length; CZ++) {
        Co = Cf.charCodeAt(CZ);
        if (Co < 128) {
          CE[Cy++] = Co;
        } else if (Co < 2048) {
          CE[Cy++] = Co >> 6 & 31 | 192;
          CE[Cy++] = Co >> 0 & 63 | 128;
        } else if (Co < 65536) {
          CE[Cy++] = Co >> 12 & 15 | 224;
          CE[Cy++] = Co >> 6 & 63 | 128;
          CE[Cy++] = Co >> 0 & 63 | 128;
        } else {
          return CE;
        }
      }
      return CE;
    }
function P4() {
      this.end_index = 0;
      this.buffer = [];
      function CZ(Cy) {
        return (1 << Cy) - 1;
      }
      this.push = function (Cy, Co) {
        var CE = 0;
        Cy &= CZ(Co);
        for (var CW = 8 - this.end_index % 8; Co > 0; CW = 8) {
          if (CW == 8) {
            this.buffer[this.buffer.length] = 0;
          }
          CE = CW - Co;
          if (CE >= 0) {
            Cy <<= CE;
            this.buffer[this.buffer.length - 1] |= Cy;
            this.end_index += CW - CE;
            return this.end_index;
          }
          if (CW > 0) {
            this.buffer[this.buffer.length - 1] |= Cy >> Co - CW;
            this.end_index += CW;
            Cy &= CZ(Co - CW);
            Co -= CW;
          }
        }
        return this.end_index;
      };
    }
function kP(Cf) {
      var CZ = {
        _vfgm7ca20: Math,
        _vfgm7ca21: String,
        _vfgm7ca22: kP
      };
      return (XC ||= _va5d(Xu, CZ))(Cf);
    }
function B6(Cf, CZ, Cy, Co) {
      return kP(Cf, CZ, Cy, Co);
    }
function ko(Cf, CZ, Cy) {
      var Co = Cf;
      var CE;
      var CW;
      for (CE = 0; CE < Cy.length; CE++) {
        CW = Cy.charCodeAt(CE);
        Co = (Co << 5) - Co + CW;
        Co |= 0;
      }
      if (CZ) {
        return Co.toString().split("").reverse().join("");
      } else {
        return Co.toString();
      }
    }
function ng(Cf) {
      var CE = "";
      var CW = "KLMNOPABCDVWXYEFZGHIJQRSTUthequickbrownfoxjumpsoverlazydog02571816394";
      var Co = CW.length;
      for (var CR = 0; CR < Cf; CR++) {
        CE += CW.charAt(Math.floor(Math.random() * Co));
      }
      return CE;
    }

function nM_dyn(Bb) {
  return (Bb[0] - Bb[0] % ((1000 + Bb[1]) * 86400)).toString();
}

function wc_uuid() {
  var SK = Date.now();
  var SU = 0;
  return "xxxxyxxx-xxxx-xxxy-xxxx-xyxxxxxxxyxx".replace(/[xy]/g, function (SD) {
    var Sb = Math.random() * 16;
    if (SK > 0) {
      Sb = (SK + Sb) % 16 | 0;
      SK = Math.floor(SK / 16);
    } else {
      Sb = (SU + Sb) % 16 | 0;
      SU = Math.floor(SU / 16);
    }
    return (SD === "x" ? Sb : Sb & 3 | 8).toString(16);
  });
}
function wI_uuid() {
  return wc_uuid().slice(-12);
}

function generateWebDynaPathToken(params) {
  if (!params || !params.seed) {
    throw new Error("seed (c1o2 string from /dynaPath.do) is required");
  }

  const seed = params.seed;
  const targetUrl = params.url || "/classes/com.korail.mobile.certification.TicketReservation";

  // 1. Decode seed to get session hash and keys
  const parts = km(seed).split("|");
  if (parts.length < 4) {
    throw new Error("Invalid seed format: failed to decode c1o2");
  }
  const sessionHash = parts[0];
  const kV = parts[1];
  const seedKey = parts[2];
  const config = JSON.parse(parts[3] || "{}");

  // Derive timestamp key
  const Bb = xO(PX(seedKey));
  const timeKey = nM_dyn(Bb);

  // 2. Determine routing prefix
  let prefix = params.prefix;
  if (!prefix) {
    if (targetUrl.includes("ScheduleView") || targetUrl.includes("schedule")) {
      prefix = "web_s";
    } else {
      prefix = "web_r";
    }
  }

  // 3. Build telemetry object CZ
  const profile = params.profile || {};
  const width = profile.screenWidth || 412;
  const height = profile.screenHeight || 915;
  const innerW = profile.innerWidth || 412;
  const innerH = profile.innerHeight || 780;
  const dpr = profile.devicePixelRatio || 2.625;

  const now = Date.now();
  const seedTime = (Bb && Bb[0]) ? Bb[0] : now;
  const netDelta = Math.max(80, Math.min(2500, now - seedTime));
  const dwellTime = Math.floor(Math.random() * 1500) + 2000;
  const initLatency = Math.floor(Math.random() * 80) + 100;

  // xg array for aLmK (50 elements) matching deob_almk specification
  const xg = [
    1392,                                // [0]
    91,                                  // [1] Pq(0) -> 0 + 91
    7,                                   // [2] nZ(1) -> 1 + 6 (mobile=1)
    netDelta + 10,                       // [3] Bg - Bb[0] + 10
    dwellTime - 5,                       // [4] Dwell time
    33,                                  // [5]
    1395,                                // [6]
    7,                                   // [7] Pointer capability
    6,                                   // [8] n2() -> 3 + 1 (coarse) + 1 (TouchEvent) + 1 (ontouchstart) = 6
    6,                                   // [9]
    dwellTime - 395,                     // [10] nd(dwellTime) -> dwellTime - 395
    0,                                   // [11] nK(0) -> 0 + 0
    innerH - 415,                        // [12] Viewport height
    4,
    14,                                  // [14] Object.defineProperty native
    9, 20,
    13,                                  // [17] kS() + 8 -> maxTouchPoints(5) + 8 = 13
    width - 612,                         // [18] Screen width
    25,                                  // [19] xs(0) -> 0 + 25
    6845,                                // [20] DynaPath constant
    49,
    6,                                   // [22] xd() + 5 -> hasFocus(1) + 5 = 6
    dwellTime - 217,                     // [23] PY(CW + 37) -> CW - 217
    5, 4, 21, 3374, 6,
    130944 + 65,                         // [29] nj(CU()) -> 130944 + 65 (Browser env bitmask)
    innerW - 678,                        // [30] Viewport width
    (seedTime + dwellTime) - 1753402118857, // [31] Dynamic epoch offset (server sync)
    5, 2,
    height - 143,                        // [34] Screen height
    -9, 15, 41, 12,
    20,                                  // [39] kd() -> deviceMemory(8) + 12 = 20
    9,                                   // [40] nl() -> 9 (WebKit/Chrome)
    Math.round(dpr * 100) + 1,           // [41] Screen DPI scale factor
    1, 36,
    10,                                  // [44] xd() + 9 -> hasFocus(1) + 9 = 10
    78, 10, 8, 6,
    12                                   // [49] nx() -> 12 + 0 = 12 (window environment)
  ];

  const sessionId = profile.sessionId || wI_uuid();

  const CZ = {
    g2: "https:www.korail.com",
    oa4: "",
    pcs: sessionId,
    f3: (profile.vendor || "Google Inc.") + "|" + (profile.platform || "Linux armv8l"),
    jh9: profile.webglRenderer || "ANGLE (ARM, Mali-G78 MP14, OpenGL ES 3.2)",
    xu0: "0",
    cc: "",
    f: [79, 37],
    kl6: [73, 59, 48],
    si: "",
    xey: targetUrl,
    u4p: "",
    qq: "",
    ui: "",
    k8: "",
    bg: "",
    abj: [],
    hl1: "",
    u: "",
    p0: "",
    xf: "",
    xmy: xg,
    r0h: "{}"
  };

  // Compute xf signature (in aLmK WAF, XHR uses DB=1 -> Bd)
  CZ.xf = Bd(CZ);

  const Co = JSON.stringify(CZ);
  const requestHash = P1(Co);
  const atkToken = Bc(Co, timeKey);

  const path = "/" + prefix + "/" + sessionHash + "/" + requestHash;
  const fullUrl = "https://www.korail.com" + path + "?_atk=" + atkToken;

  return {
    prefix: prefix,
    sessionHash: sessionHash,
    requestHash: requestHash,
    atkToken: atkToken,
    wycToken: atkToken,
    dxToken: atkToken,
    tjToken: atkToken,
    tokenParam: "_atk",
    path: path,
    fullUrl: fullUrl,
    timeKey: timeKey,
    kV: kV,
    config: config
  };
}

/**
 * Dynamically detects active bundle URL from /dynaPath.do loader script text
 */
function detectBundleFromScript(scriptText) {
  let targetBundleUrl = null;
  const mockWindow = {
    XMLHttpRequest: function() {
      return {
        open: function(method, url) {
          targetBundleUrl = url;
        },
        send: function() {}
      };
    }
  };
  try {
    const fn = new Function('window', scriptText);
    fn(mockWindow);
  } catch (e) {}
  return targetBundleUrl;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    generateWebDynaPathToken: generateWebDynaPathToken,
    detectBundleFromScript: detectBundleFromScript,
    km: km,
    P1: P1,
    PJ: PJ,
    Bc: Bc,
    Bs: Bs,
    Bd: Bd
  };
}

// CLI execution handler (when executed directly via Node.js subprocess)
if (typeof process !== "undefined" && process.argv && require.main === module) {
  const args = process.argv.slice(2);
  let seed = "";
  let url = "/classes/com.korail.mobile.certification.TicketReservation";
  let prefix = null;
  let detectScript = null;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--seed" && args[i + 1]) {
      seed = args[i + 1];
      i++;
    } else if (args[i] === "--url" && args[i + 1]) {
      url = args[i + 1];
      i++;
    } else if (args[i] === "--prefix" && args[i + 1]) {
      prefix = args[i + 1];
      i++;
    } else if (args[i] === "--detect-bundle" && args[i + 1]) {
      detectScript = args[i + 1];
      i++;
    }
  }

  if (detectScript) {
    const detected = detectBundleFromScript(detectScript);
    console.log(JSON.stringify({ bundleUrl: detected }));
    process.exit(0);
  }

  if (!seed) {
    console.error("Error: --seed argument is required");
    process.exit(1);
  }

  try {
    const res = generateWebDynaPathToken({ seed: seed, url: url, prefix: prefix });
    console.log(JSON.stringify(res));
  } catch (err) {
    console.error("DynaPath Error:", err.message);
    process.exit(1);
  }
}
