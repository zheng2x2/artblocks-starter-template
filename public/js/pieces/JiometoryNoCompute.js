"use strict";
var e = `varying vec2 vUv;
    void main() {
        vUv = vec2(0.5)+(position.xy)*0.5;
        gl_Position = vec4( position.xy, 0.0, 1.0 );
    }`;
window.conf = function(e) {
    // console.log('window.conf e ::: ', e) // nothing
    var t = {},
        i = document.createElement("a");
    i.href = e;
    var n = i.search.substring(1).split("&");
    for (let r = 0; r < n.length; r++) {
        var a = n[r].split("=");
        t[a[0]] = decodeURIComponent(a[1])
    }
    return t
}(window.location.search);
// console.log('window.conf result ::: ', window.conf) // "": "undefined"




console.log('canvas element added to doc body')
let t = document.createElement("canvas"); // 캔버스 생성 후
document.body.appendChild(t); // 캔버스추가
let i = t, // i: canvas Element
    n = null != window.conf.color ? parseInt(window.conf.color) : null; // n: null
var r = /HeadlessChrome/.test(window.navigator.userAgent); // r: false
let a = "true" == (r || window.conf.highdef) ? 1 : .5; // a: 0.5
window.conf.capture, window.conf.auto;


var o = {},
    s = [{
        n: "Watermelon",
        k: [2, "D83A56", 3, "FF616D", 2, "FFEAC9", 1, "66DE93", 1, "333333", 3, "222222"]
    }, {
        n: "Robot",
        k: [1, "761332", 10, "d1f7ff", 10, "05d9e8", 10, "005678", 10, "01012b"]
    }, {
        n: "Patchwork",
        k: [5, "fe6e27", 5, "fbf665", 5, "73fffe", 10, "6287f8", 10, "383e65"]
    }, {
        n: "Blue Chip",
        k: [20, "85edb9", 10, "3d898d", 10, "2f404d", 10, "000"]
    }, {
        n: "Mixture",
        k: [10, "e96d5e", 10, "ff9760", 10, "ffe69d", 5, "6a7e6a", 10, "393f5f"]
    }, {
        n: "Mono",
        k: [1, "f8f9fa", 2, "e9ecef", 3, "dee2e6", 4, "6c757d", 7, "495057", 8, "495057", 9, "343a40", 10, "212529"]
    }, {
        n: "Sunrise",
        k: [2, "a7321c", 3, "ffdc68", 2, "cc982a", 1, "928941", 2, "352504"]
    }, {
        n: "Tech Cream",
        k: [4, "e6a06f", 2, "9e9c71", 4, "5e8271", 3, "33454e", 5, "242739"]
    }, {
        n: "Arctic",
        k: [4, "193498", 1, "113CFC", 3, "1597E5", 5, "69DADB", 4, "ece1c3"]
    }, {
        n: "Purple",
        k: [3, "001848", 1, "301860", 1, "483078", 1, "604878", 3, "906090", 1, "ffffff"]
    }, {
        n: "NightFall",
        k: [56.4, "151e2b", 10.9, "263c49", 10.9, "99d5ed", 10.9, "6cc4b3", 9.9, "000000", 1, "a5acb1"]
    }, {
        n: "Mint",
        k: [5, "131515", 5, "2b2c28", 5, "339989", 10, "7de2d1", 1, "fffafb"]
    }, {
        n: "Lava",
        k: [5, "250902", 3, "38040e", 3, "800e13", 3, "ad2831", 1, "ffffff"]
    }, {
        n: "Freesia",
        k: [10, "331e36", 5, "41337a", 1, "6ea4bf", 1, "c2efeb", 1, "ecfee8"]
    }, {
        n: "Cream",
        k: [5, "413e4a", 5, "73626e", 5, "b38184", 5, "f0b49e", 5, "f7e4be"]
    }, {
        n: "Straw",
        k: [5, "452632", 5, "91204d", 5, "e4844a", 5, "e8bf56", 5, "e2f7ce"]
    }, {
        n: "Earth",
        k: [3, "3e4147", 1, "fffedf", 1, "dfba69", 1, "5a2e2e", 5, "2a2c31"]
    }, {
        n: "sunset",
        k: [2, "300030", 1, "480048", 3, "601848", 2, "c04848", 2, "f07241"]
    }]; // s
let l = 0;
for (; l < s.length;) { // s.length: 18
    s[l].data = [];
    let e = 0,
        t = s[l].k;
    for (; e < t.length;) s[l].data.push({
        c: t[e],
        co: "0x" + t[e + 1]
    }), e += 2;
    s[l].data.sort((e, t) => t.c - e.c), l++
} // s.[i].cols // s[i].data = [{c: 3, co: '0xFF616D'}, ...]
console.log('s1 ::: ', s);

var v = [];

for (let f = 0; f < s.length; f++) {
    var u = [],
        c = s[f].data;
    s[f].cols = [];
    
    for (let e = 0; e < c.length; e++) { // c.length: 6
        var d = 0;
        for (s[f].cols.push(c[e].co); d < c[e].c;) u.push(c[e].co), d++; /// ???? TODO
    }
    v.push(u);
} // s[f].cols
console.log('v :::', v); // '0x'+co 를 c의 숫자만큼 생성
console.log('s2 ::: ', s);

var m = ["SCIFI", "TURQUOISE", "GOLD", "META"],
    h = ["SQUARE", "CIRCLE"];
const E = function(e, t, i) {
        return Math.max(0, Math.min(1, (i - e) / (t - e)))
    },
    p = function(e, t, i) {
        return e * (1 - i) + t * i
    };
var g, 
    x = function(e) {
			return e * e
    },
    T = function() {
			return g ^= g << 13, 
					g ^= g >> 17, 
					((g ^= g << 5) < 0 ? 1 + ~g : g) % 1e3 / 1e3 // return
    };
const R = "None";

function b() {}! function(e) {
	console.log('function b - o') // 2
	o = e
}(function(e) {
	console.log('function b - e') // 1
	g = parseInt(e.hash.slice(0, 16), 16);
	var t = {
		projectNumber: 1024
	};
	t.SHADER_SEED = ~~(T() * t.projectNumber),
	t.CURRENT_MODE = ~~(T() * v.length),
	t.BACKGROUND = .18 < T(),
	t.SQUARE = .5 < T(),
	t.DIAMOND = !1, 
	t.CIRCLE = !1, 
	0 == t.SQUARE && (t.DIAMOND = .8 < T(), 
	t.CIRCLE = 0 == t.DIAMOND), 
	t.CUT = .5 < T(), 
	t.PULSATE = .7 < T(), 
	1 == t.PULSATE && (t.CUT = !1), 
	t.LUT = .87 < T(), 
	t.OFFSET = .2 < T(), 
	t.LUTS_TYPE = R;
	var i = .5 < (i = T()) ? .5 < T() ? 1 : 2 : null;
	t.TWOD = .96 < T(), 
	t.CURVE = 1 == i, 
	t.SUPER_CURVE = 2 == i, 
	t.VERTICAL = .8 < T(), 
	t.DOUBLE_DECK = .7 < T(), 
	t.GLITCH = .7 < T(), 
	t.SYMETRIC = .65 < T(), 
	t.TWOD && (t.GLITCH = !1, t.SYMETRIC = !1, t.DOUBLE_DECK = !1, t.VERTICAL = !1, t.CURVE = !0, t.CUT = !0, t.OFFSET = !0, t.PULSATE = !1), 
	t.HYPERGLITCH = !!t.GLITCH && .5 < T(), 
	t.CYBERGLITCH = !!t.HYPERGLITCH && .5 < T(), 
	t.DOUBLE_SYMETRIC = !1, t.SYMETRIC && (t.DOUBLE_SYMETRIC = .8 < T());
	var r = t.DIAMOND ? 100 : 180;
	r *= .9;
	var a = 14;
	t.DOUBLE_SYMETRIC && (t.VERTICAL = !1, r *= .8, a = 30), 
	t.SYMETRIC && (a = 25);
	var o = ~~(x(T()) * r) + 5 * a,
			l = ~~(x(T()) * r) + 4 * a,
			c = .05,
			e = .2;
	1 == t.DIAMOND && (c *= 2.35, e *= 2.35), 
	t.VERTICAL && (l = Math.min(l, 40), 
	t.DOUBLE_DECK && (l *= .75, l = Math.max(5, l))), 
	t.DOUBLE_SYMETRIC ? (l *= .75, o *= .75) : (l *= .9, o *= .9);
	i = .85;
	t.SYMETRIC && (i = .7);
	r = E(2 * a, 2 * r, o + l);
	c = p(e, c, r);
	r = Math.max(c, .095);
	c = Math.max(c, .095);
	return t.GHOST = .8 < T(), 
        t.WIREFRAME = .7 < T(),
        t.GRID = {
					x: ~~o,
					y: ~~(x(p(i, 1, T())) * l),
					spaceX: 0,
					spaceY: 0,
					sizeW: r,
					sizeH: c,
					width: o * r,
					height: l * c
        },
				t.WIREFRAME && (
					t.GRID.x = ~~(.5 * t.GRID.x), 
					t.GRID.y = ~~(.5 * t.GRID.y), 
					t.GRID.sizeW *= 2.5, 
					t.GRID.sizeH *= 2.5, 
					t.GRID.width *= 2.5, 
					t.GRID.height *= 2.5
				),
				t.GRID.width = ~~t.GRID.width, 
				t.GRID.height = ~~t.GRID.height, 
				t.TOTAL = t.GRID.x * t.GRID.y, 
				t.BRIDGE = .5 < T(), 
				t.GEOM_FLOOR_PATTERN = .5 < T(), 
				t.FLOOR_TYPE = "NOISE", 
				t.GEOM_FLOOR_PATTERN && (t.FLOOR_TYPE = h[~~(T() * h.length)]), 
				t.SPEED = parseFloat(p(.9, 2, T() * T()).toFixed(3)), 
				t.SPEED % 1 == 0 && (t.SPEED += .001), 
				null != n && (t.CURRENT_MODE = n, t.LUT = !1),
				"Sunrise" == v[t.CURRENT_MODE].n && (t.LUT = !1),
				t.COLOR_MODE = s[t.CURRENT_MODE].n, 
				t.GLITCH_TYPE = t.CYBERGLITCH ? "CyberGlitch" 
						: t.HYPERGLITCH ? "HyperGlitch" 
						: t.GLITCH ? "Glitch" 
						: R, t.CURVE_TYPE = t.CURVE ? "Curve" 
						: t.SUPER_CURVE ? "SuperCurve" 
						: R, t.SYMETRY_TYPE = t.DOUBLE_SYMETRIC ? "Double Symetric" 
						: t.SYMETRIC ? "Symetric" 
						: R, t.GEOMETRY_TYPE = t.CIRCLE ? "Circle" 
						: t.SQUARE ? "Square" 
						: t.DIAMOND ? "Diamond" : R, 1 == t.LUT && (t.LUTS_TYPE = m[~~(T() * m.length)], t.BACKGROUND = !0), 
				t // return t
}(tokenData)), 
b.prototype = {
	on: function(e, t, i) {
		var n = this.e || (this.e = {});
		return (n[e] || (n[e] = [])).push({
				fn: t,
				ctx: i
		}), this
	},
	emit: function(e) {
		for (var t = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[e] || []).slice(), n = 0, r = i.length;   n < r; n++) 
				i[n].fn.apply(i[n].ctx, t);
		return this
	}
};


var y = new b,
    S = new class {
        constructor() {
					console.log('new class S ')
					this._isP = !1, 
					this.n = Date.now(), 
					this.at = 0
        }
        play() {
					return new Promise((e, t) => {
							this._isP || (this.n = Date.now(), requestAnimationFrame(this.update.bind(this)), this._isP = !0), 
							e()
					})
        }
        pause() {
					return new Promise((e, t) => {
						0 != this._isP && (this._isP = !1), e()
					})
        }
        update() {
					var e = Date.now(),
							t = (e - this.n) / 1e3;
					this.n = e, 
					this.at += t, 
					y.emit("pre_update", t, this.at), 
					y.emit("update", t, this.at), 
					y.emit("post_update", t, this.at), 
					this._isP && requestAnimationFrame(this.update.bind(this))
        }
        resize(e = {}) {
					y.emit("resize", e.w, e.h), 0 == this._isP && this.update(!0)
        }
    },
    U = new class {
			constructor() {
				(window.ssh = this).timer = {
					value: r ? 10 : -.5
				}, 
				this.resY = {
					value: 0
				}, 
				this.aspect = {
					value: 1
				}, 
				y.on("update", e => {
					r || (this.timer.value += e)
				}), 
				y.on("resize", (e, t) => {
						this.resY.value = 2 * t, this.aspect.value = e / t
				})
			}
    };

console.log('new THREE.WebGLRenderer')
let C = new THREE.WebGLRenderer({
    canvas: i, // document.createElement("canvas")
    powerPreference: "high-performance",
    preserveDrawingBuffer: r, // /HeadlessChrome/.test(window.navigator.userAgent)
    premultipliedAlpha: !r
});
C.setClearColor(0),
C.setPixelRatio(2);

var I = 2 * Math.PI;
const _ = function(e, t) {
	console.log(" _ ::: ", e, t)
	this.object = e, 
	this.de = t, 
	this.enabled = !0, 
	this.target = new THREE.Vector3, 
	this.minDistance = 0, 
	this.maxDistance = 1 / 0, 
	this.minPolarAngle = 0, 
	this.maxPolarAngle = Math.PI, 
	this.minAzimuthAngle = -1 / 0, 
	this.maxAzimuthAngle = 1 / 0, 
	this.enableDamping = !1, 
	this.dampingFactor = .06, 
	this.zoomSpeed = .8, 
	this.rotateSpeed = 1, 
	this.enablePan = !0, 
	this.panSpeed = 1, 
	this.autoRotate = !1, 
	this.autoRotateSpeed = .4, 
	this.mouseButtons = {
		LEFT: THREE.MOUSE.ROTATE,
		MIDDLE: THREE.MOUSE.DOLLY,
		RIGHT: THREE.MOUSE.PAN
	}, this.touches = {
		ONE: THREE.TOUCH.ROTATE,
		TWO: THREE.TOUCH.DOLLY_PAN
	}, 
	this.update = function() {
		var n = new THREE.Vector3,
				r = (new THREE.Quaternion).setFromUnitVectors(e.up, new THREE.Vector3(0, 1, 0)),
				a = r.clone().invert();
		new THREE.Vector3, new THREE.Quaternion;
		var o = I; // 2 * Math.PI
		return function() {
			var e = s.object.position;
			n.copy(e).sub(s.target), 
			n.applyQuaternion(r), 
			v.setFromVector3(n), 
			s.autoRotate && c === l.NONE && x(I / 60 / 60 * s.autoRotateSpeed), 
			s.enableDamping ? (v.theta += f.theta * s.dampingFactor, v.phi += f.phi * s.dampingFactor) : (v.theta += f.theta, v.phi += f.phi);
			var t = s.minAzimuthAngle,
					i = s.maxAzimuthAngle;
			return isFinite(t) && isFinite(i) && (t < -Math.PI ? t += o : t > Math.PI && (t -= o), 
					i < -Math.PI ? i += o : i > Math.PI && (i -= o), 
					v.theta = 
						t <= i ? Math.max(t, Math.min(i, v.theta)) : 
						v.theta > (t + i) / 2 ? Math.max(t, v.theta) : Math.min(i, v.theta)), 
					v.phi = Math.max(s.minPolarAngle, Math.min(s.maxPolarAngle, v.phi)), 
					v.makeSafe(), 
					v.radius *= u, 
					v.radius = Math.max(s.minDistance, Math.min(s.maxDistance, v.radius)), 
					s.enableDamping ? s.target.addScaledVector(d, s.dampingFactor) : s.target.add(d), 
					n.setFromSpherical(v), 
					n.applyQuaternion(a), 
					e.copy(s.target).add(n), 
					s.object.lookAt(s.target), 
					s.enableDamping ? (e = 1 - s.dampingFactor, f.theta *= e, f.phi *= e, d.multiplyScalar(e)) 
													: (f.set(0, 0, 0), d.set(0, 0, 0)), 
					!(u = 1) //??? TODO
		}
	}();
	var s = this,
	l = {
		NONE: -1,
		ROTATE: 0,
		DOLLY: 1,
		PAN: 2,
		TOUCH_ROTATE: 3,
		TOUCH_PAN: 4,
		TOUCH_DOLLY_PAN: 5,
		TOUCH_DOLLY_ROTATE: 6
	},
	c = l.NONE,
	v = new THREE.Spherical,
	f = new THREE.Spherical,
	u = 1,
	d = new THREE.Vector3,
	n = new THREE.Vector2,
	r = new THREE.Vector2,
	a = new THREE.Vector2,
	i = new THREE.Vector2,
	o = new THREE.Vector2,
	m = new THREE.Vector2,
	h = new THREE.Vector2,
	E = new THREE.Vector2,
	p = new THREE.Vector2;

	function g() {
		return Math.pow(.95, s.zoomSpeed)
	}

	function x(e) {
		f.theta -= e
	}

	function T(e) {
		f.phi -= e
	}
	var R, b, y, 
	C = (R = new THREE.Vector3, function(e, t) {
		R.setFromMatrixColumn(t, 0), R.multiplyScalar(-e), d.add(R)
	}),
	S = (y = new THREE.Vector3, function(e, t) {
		y.setFromMatrixColumn(t, 1), y.multiplyScalar(e), d.add(y)
	}),
	U = (b = new THREE.Vector3, function(e, t) {
		var i = s.de,
				n = s.object.position;
		b.copy(n).sub(s.target);
		n = b.length();
		n *= Math.tan(s.object.fov / 2 * Math.PI / 180), C(2 * e * n / i.clientHeight, s.object.matrix), S(2 * t * n / i.clientHeight, s.object.matrix)
	});

	function D(e) {
		u /= e
	}

	function _(e) {
		u *= e
	}

	function w(e) {
		n.set(e.clientX, e.clientY)
	}

	function O(e) {
		i.set(e.clientX, e.clientY)
	}

	function H(e) {
		var t = e.touches;
		1 == t.length ? n.set(t[0].pageX, t[0].pageY) : (e = .5 * (t[0].pageX + t[1].pageX), t = .5 * (t[0].pageY + t[1].pageY), n.set(e, t))
	}

	function M(e) {
		var t = e.touches;
		1 == t.length ? i.set(t[0].pageX, t[0].pageY) : (e = .5 * (t[0].pageX + t[1].pageX), t = .5 * (t[0].pageY + t[1].pageY), i.set(e, t))
	}

	function A(e) {
		var t = e.touches,
				e = t[0].pageX - t[1].pageX,
				t = t[0].pageY - t[1].pageY,
				t = Math.sqrt(e * e + t * t);
		h.set(0, t)
	}

	function L(e) {
			var t = e.touches;
			1 == t.length ? r.set(t[0].pageX, t[0].pageY) : (e = .5 * (t[0].pageX + t[1].pageX), i = .5 * (t[0].pageY + t[1].pageY), r.set(e, i)), a.subVectors(r, n).multiplyScalar(s.rotateSpeed);
			var i = s.de;
			x(I * a.x / i.clientHeight), T(I * a.y / i.clientHeight), n.copy(r)
	}

	function P(e) {
		var t = e.touches;
		1 == t.length ? o.set(t[0].pageX, t[0].pageY) : (e = .5 * (t[0].pageX + t[1].pageX), t = .5 * (t[0].pageY + t[1].pageY), o.set(e, t)), 
		m.subVectors(o, i).multiplyScalar(s.panSpeed), 
		U(m.x, m.y), 
		i.copy(o)
	}

	function F(e) {
		var t = e.touches,
				e = t[0].pageX - t[1].pageX,
				t = t[0].pageY - t[1].pageY,
				t = Math.sqrt(e * e + t * t);
		E.set(0, t), p.set(0, Math.pow(E.y / h.y, s.zoomSpeed)), D(p.y), h.copy(E)
	}

	function G(e) {
		! function(t) {
			switch (c) {
				case l.ROTATE:
					! function() {
						r.set(t.clientX, t.clientY), a.subVectors(r, n).multiplyScalar(s.rotateSpeed);
						var e = s.de;
						x(I * a.x / e.clientHeight), T(I * a.y / e.clientHeight), n.copy(r), s.update()
					}();
					break;
				case l.DOLLY:
					E.set(t.clientX, t.clientY), p.subVectors(E, h), 0 < p.y ? D(g()) : p.y < 0 && _(g()), h.copy(E), s.update();
					break;
				case l.PAN:
					if (!1 === s.enablePan) return;
					o.set(t.clientX, t.clientY), 
					m.subVectors(o, i).multiplyScalar(s.panSpeed), 
					U(m.x, m.y), 
					i.copy(o), 
					s.update()
			}
		}(e)
	}

	function Y(e) {
		s.de.removeEventListener("pointermove", G), 
		s.de.removeEventListener("pointerup", Y), 
		c = l.NONE
	}
	s.de.addEventListener("contextmenu", e => { // prevent 우클릭
		event.preventDefault()
	}), 
	s.de.addEventListener("pointerdown", function(e) {
		"mouse" == e.pointerType && function(e) {
			var t;
			switch (e.button) {
				case 0:
					t = s.mouseButtons.LEFT;
					break;
				case 1:
					t = s.mouseButtons.MIDDLE;
					break;
				case 2:
					t = s.mouseButtons.RIGHT;
					break;
				default:
					t = -1
			}
			switch (t) {
				case THREE.MOUSE.DOLLY:
					h.set(e.clientX, e.clientY), c = l.DOLLY;
					break;
				case THREE.MOUSE.ROTATE:
					if (e.ctrlKey || e.metaKey || e.shiftKey) {
						if (!1 === s.enablePan) return;
						O(e), 
						c = l.PAN
					} else w(e), c = l.ROTATE;
					break;
				case THREE.MOUSE.PAN:
					if (e.ctrlKey || e.metaKey || e.shiftKey) 
						w(e), 
						c = l.ROTATE;
					else {
						if (!1 === s.enablePan) return;
						O(e), 
						c = l.PAN
					}
					break;
				default:
					c = l.NONE
				}
				c !== l.NONE && (s.de.addEventListener("pointermove", G), s.de.addEventListener("pointerup", Y))
		}(e)
	}),
	s.de.addEventListener("wheel", function(e) {
		c !== l.NONE && c !== l.ROTATE || ((e = e).preventDefault(), e.deltaY < 0 ? _(g()) : 0 < e.deltaY && D(g()), s.update())
	}), 
	s.de.addEventListener("touchstart", function(e) {
		switch (e.touches.length) {
			case 1:
				switch (s.touches.ONE) {
					case THREE.TOUCH.ROTATE:
						H(e), 
						c = l.TOUCH_ROTATE;
						break;
					case THREE.TOUCH.PAN:
						if (!1 === s.enablePan) return;
						M(e), 
						c = l.TOUCH_PAN;
						break;
					default:
						c = l.NONE
				}
				break;
			case 2:
				switch (s.touches.TWO) {
					case THREE.TOUCH.DOLLY_PAN:
						if (!1 === s.enablePan) return;
						A(t = e), 
						s.enablePan && M(t), 
						c = l.TOUCH_DOLLY_PAN;
						break;
					case THREE.TOUCH.DOLLY_ROTATE:
						A(t = e), s.enableRotate && H(t), c = l.TOUCH_DOLLY_ROTATE;
						break;
					default:
						c = l.NONE
				}
				break;
			default:
				c = l.NONE
		}
		var t
	}), 
	s.de.addEventListener("touchend", function(e) {
		c = l.NONE
	}), 
	s.de.addEventListener("touchmove", function(e) {
		switch (c) {
			case l.TOUCH_ROTATE:
				L(e), 
				s.update();
				break;
			case l.TOUCH_PAN:
				if (!1 === s.enablePan) return;
				P(e), 
				s.update();
				break;
			case l.TOUCH_DOLLY_PAN:
				if (!1 === s.enablePan) return;
				F(t = e), 
				s.enablePan && P(t), 
				s.update();
				break;
			case l.TOUCH_DOLLY_ROTATE:
					F(t = e), 
					L(t), 
					s.update();
					break;
			default:
					c = l.NONE
		}
		var t
	}),
	this.rotateLeft = x, 
	this.pan = U
};

(_.prototype = Object.create(THREE.EventDispatcher.prototype)).constructor = _;
class w extends THREE.PerspectiveCamera {
    constructor() {
        super(10, 1, .1, 500), y.on("resize", (e, t) => {
            this.aspect = e / t, this.updateProjectionMatrix()
        }), this.c = new _(this, i), window.cam = this, y.on("pre_update", this.c.update);
        let e = o.GRID.height * o.GRID.sizeH,
            t = Math.min(e, o.GRID.width * o.GRID.sizeW);
        o.DOUBLE_DECK && (t *= .5);
        let n = .5 * E(0, 2, t) + .5;
        var r;
        o.VERTICAL || o.DOUBLE_DECK, o.SYMETRIC ? (this.position.set(-59.296, 47.14, -35.529), this.c.target.set(1.205, -.503, -2.43), 1 == o.VERTICAL && (this.position.y -= 17)) : (this.position.set(-49.609, 33.0486, -58.484), 0 == o.VERTICAL ? (1 == o.CURVE && (this.position.y += 10), n *= .95) : 0 == o.DOUBLE_DECK && (this.position.y += .2 * e, this.c.target.y += .2 * e), this.position.multiplyScalar(n)), o.DOUBLE_SYMETRIC && (this.position.set(8.370954039722523, 27.472866755842347, -38.509831867814896), this.c.target.set(-.73, .185, 1.139), r = p(.3, .8, n), this.position.multiplyScalar(r), this.c.rotateLeft(-Math.PI + T() * Math.PI * 2)), o.DOUBLE_DECK && (this.c.target.y += .75, this.position.y += .75), o.CYBERGLITCH && this.position.multiplyScalar(.65), o.TWOD && (this.position.x *= .01, this.position.z *= .01, this.position.y = 50, this.c.rotateLeft(100 * T())), this.c.enablePan = !0, this.c.maxPolarAngle = .44 * Math.PI, this.c.maxDistance = 80, this.c.minDistance = 10, setTimeout(() => {
            o.SYMETRIC && this.c.pan(130 * -T(), 0), this.c.pan(0, 12), this.c.update(), this.c.update(), this.c.enablePan = !1, this.c.enableDamping = !0
        }, 1), this.c.update()
    }
}
var D = new w,
    O = new THREE.BufferGeometry;
O.setIndex([2, 1, 0]), 
O.setAttribute("position", new THREE.Float32BufferAttribute([-1, -1, 0, -1, 4, 0, 4, -1, 0], 3));
const M = [3, 5, 7, 9, 11];
var H = [],
    A = [];

class L {
	constructor(e) {
		this.scene = new THREE.Scene, 
		this.scene.autoUpdate = !1;
		let t = 0;
		var i = {
			format: THREE.RGBFormat,
			depthBuffer: !0,
			stencilBuffer: !0,
			generateMipmaps: !1
		};
		for (this.blurM = [], this.comp = this.getComp(5), t = 0; t < 5;) 
			r ?
					(H.push(new THREE.WebGLMultisampleRenderTarget(1, 1, i)), A.push(new THREE.WebGLMultisampleRenderTarget(1, 1, i))) 
					: (H.push(new THREE.WebGLRenderTarget(1, 1, i)), A.push(new THREE.WebGLRenderTarget(1, 1, i))),
			this.blurM.push(this.sp(M[t])), 
			this.comp.uniforms["bt" + (t + 1)].value = A[t].texture,
			t++;

		this.output = H[0],
		this.comp.uniforms.bloomStrength.value = +e.strength, 
		this.comp.uniforms.bloomRadius.value = 2 * e.radius, 
		this.quad = new THREE.Mesh(O, this.blurM[0]), 
		this.quad.frustumCulled = !1, // false
		this.quad.matrixAutoUpdate = !1, // false
		this.scene.add(this.quad)
	}
	setSize(e, t) {
		var i = e,
				n = t;
		let r = 0;
		for (; r < 5;) H[r].setSize(i, n), A[r].setSize(i, n), this.blurM[r].uniforms.invSize.value.set(1 / i, 1 / n), i /= 2.5, n /= 2.5, r++
	}
	render(e) {
		var t = C.autoClear;
		C.autoClear = !1;
		var i = e;
		let n = 0;
		for (; n < 5;) {
			this.quad.material = this.blurM[n];
			let e = this.blurM[n].uniforms;
			e.colorTexture.value = i.texture, 
				e.direction.value.set(1, 0), 
				C.setRenderTarget(H[n]), 
				C.render(this.scene, D), 
				e.colorTexture.value = H[n].texture, 
				e.direction.value.set(0, 1), 
				C.setRenderTarget(A[n]), 
				C.render(this.scene, D), 
				i = H[n], 
				n++
		}
		this.quad.material = this.comp, C.setRenderTarget(H[0]), C.render(this.scene, D), C.autoClear = t
	}
	sp(t) {
		return new THREE.ShaderMaterial({
			side: 0,
			defines: {
				KERNEL_RADIUS: t,
				SIGMA: t
			},
			depthTest: !1,
			depthWrite: !1,
			uniforms: {
				colorTexture: {
					value: null
				},
				invSize: {
					value: new THREE.Vector2(.5, .5)
				},
				direction: {
					value: new THREE.Vector2(.5, .5)
				}
			},
			vertexShader: e,
			fragmentShader: "#define GLSLIFY 1\nvarying vec2 vUv;uniform sampler2D colorTexture;uniform vec2 direction;uniform vec2 invSize;float gaussianPdf(in float d,in float sigma){float invSigmaQx2=.5/(sigma*sigma);return exp(-dot(d,d)*invSigmaQx2)*invSigmaQx2;}void main(){float fSigma=float(SIGMA);float weightSum=gaussianPdf(0.0,fSigma);vec3 diffuseSum=texture2D(colorTexture,vUv).rgb*weightSum;for(int i=1;i<KERNEL_RADIUS;i++){float x=float(i);float w=gaussianPdf(x,fSigma);vec2 uvOffset=direction*invSize*x;vec3 sample1=texture2D(colorTexture,vUv+uvOffset).rgb;vec3 sample2=texture2D(colorTexture,vUv-uvOffset).rgb;diffuseSum+=(sample1+sample2)*w;weightSum+=2.0*w;}gl_FragColor=vec4(diffuseSum/weightSum,1.0);}"
		})
	}
	getComp() {
		return new THREE.ShaderMaterial({
			side: 0,
			depthTest: !1,
			depthWrite: !1,
			defines: {
				B_F_0: "1.0",
				B_F_1: "0.8",
				B_F_2: "0.6",
				B_F_3: "0.4",
				B_F_4: "0.2"
			},
			uniforms: {
				bt1: {
					value: null
				},
				bt2: {
					value: null
				},
				bt3: {
					value: null
				},
				bt4: {
					value: null
				},
				bt5: {
					value: null
				},
				bloomStrength: {
					value: 1
				},
				bloomRadius: {
					value: 0
				}
			},
			vertexShader: "#define GLSLIFY 1\nvarying vec2 vUv;uniform float bloomRadius;float mbf(float f){float mf=1.2-f;return mix(f,mf,bloomRadius);}varying float FACTORS[5];void main(){FACTORS[0]=mbf(B_F_0);FACTORS[1]=mbf(B_F_1);FACTORS[2]=mbf(B_F_2);FACTORS[3]=mbf(B_F_3);FACTORS[4]=mbf(B_F_4);vUv=vec2(0.5)+(position.xy)*0.5;gl_Position=vec4(position.xy,0.0,1.0);}",
			fragmentShader: "#define GLSLIFY 1\nvarying vec2 vUv;uniform sampler2D bt1;uniform sampler2D bt2;uniform sampler2D bt3;uniform sampler2D bt4;uniform sampler2D bt5;varying float FACTORS[5];uniform float bloomStrength;void main(){vec4 total=FACTORS[0]*texture2D(bt1,vUv)+FACTORS[1]*texture2D(bt2,vUv)+FACTORS[2]*texture2D(bt3,vUv)+FACTORS[3]*texture2D(bt4,vUv)+FACTORS[4]*texture2D(bt5,vUv);gl_FragColor=bloomStrength*total;}"
		})
	}
}
var P = [],
    F = [];
v[o.CURRENT_MODE].forEach(e => {
    e = ~~e;
    P.push([(e >> 16 & 255) / 255, (e >> 8 & 255) / 255, (255 & e) / 255])
}), s[o.CURRENT_MODE].cols.forEach(e => {
    e = ~~e;
    F.push([(e >> 16 & 255) / 255, (e >> 8 & 255) / 255, (255 & e) / 255])
});

var G = !(.5 < T()),
    Y = T() * F.length * 2,
    z = 0,
    N = () => P[~~(T() * P.length)],
    B = () => {
			for (var e = P[~~(T() * P.length)]; .3 < e[1];) 
				e = P[~~(T() * P.length)];
			return e
    },
    W = () => {
			if (G ? z = F.length - 1 - z : (z = Y % (F.length - 1), Y += T() * F.length), G = !G, o.LUT) {
				let e = T();
				return G ? e *= .2 : e = .8 + .2 * e, [e, e, e]
			}
			return F[~~z]
    },
    V = [],
    k = 0,
    X = function(e) {
			let	i = !1;
			for (let t = 0; t < V.length; t++) 
				i = e[0] == V[t][0] || i;

			return !(50 < ++k) && i //false
    },
    K = () => {
			for (var e = W(); X(e);) e = B();
			return V.push(e), 
				{
					value: new THREE.Color(e[0], e[1], e[2])
				}
    },
    j = new(r ? THREE.WebGLMultisampleRenderTarget : THREE.WebGLRenderTarget)(2048, 4),
    q = new THREE.Scene,
    Q = new THREE.Mesh(O, new THREE.ShaderMaterial({
			uniforms: {
				color0: K(),
				color1: K(),
				color2: K(),
				color3: K()
			},
			vertexShader: e,
			fragmentShader: "#define GLSLIFY 1\nvarying vec2 vUv;\n#if defined(TURQUOISE)\n#define GRAD 2\n#else\n#define GRAD 4\n#endif\nuniform vec3 color0;uniform vec3 color1;uniform vec3 color2;uniform vec3 color3;vec3 gradientmap(vec4 c[GRAD],float l){vec3 r;for(int i=0;i<=GRAD;i++){if(i==GRAD){r=c[i-1].rgb;break;}else if(l<c[i].a){if(i==0){r=c[i].rgb;break;}else{r=mix(c[i-1].rgb,c[i].rgb,(l-c[i-1].a)/(c[i].a-c[i-1].a));break;}}}return r;}void main(){vec4 base=vec4(1.0);\n#ifdef LUT\n#ifdef PINK\nvec4 c[4];c[0]=vec4(0.0);c[1]=vec4(0.7098,0.1803,0.5686,0.23);c[2]=vec4(0.9333,0.5019,1.0,0.67);c[3]=vec4(1.0);\n#endif\n#ifdef TURQUOISE\nvec4 c[2];c[0]=vec4(0.2,0.05098,0.41176,0.0);c[1]=vec4(0.1882,0.7882,0.8,1.0);\n#endif\n#ifdef PSY\nvec4 c[3];c[0]=vec4(0.827,0.3098,1.0,0.0);c[1]=vec4(0.439,0.309,1.0,0.2);c[2]=vec4(0.980,0.8196,0.152,1.0);\n#endif\n#ifdef GOLD\nvec4 c[4];c[0]=vec4(0.0,0.0,0.0,0.0);c[1]=vec4(0.670,0.396,0.0,0.32);c[2]=vec4(0.949,0.635,0.113,0.48);c[3]=vec4(1.0,1.0,1.0,1.0);\n#endif\n#ifdef SCIFI\nvec4 c[4];c[0]=vec4(0.247,0.231,0.623,0.01);c[1]=vec4(0.4,0.262,0.905,0.25);c[2]=vec4(0.898,0.474,0.474,0.71);c[3]=vec4(0.964,0.843,0.419,0.99);\n#endif\n#ifdef META\nvec4 c[4];c[0]=vec4(1.0,1.0,1.0,0.00);c[1]=vec4(0.37647,0.28235,0.47058,0.33);c[2]=vec4(0.0,0.0941176,0.28235,0.66);c[3]=vec4(0.188235294,0.0941176,0.3764705,1.0);\n#endif\n#ifdef VERSE\nvec4 c[4];c[0]=vec4(0.066,0.235,0.988,0.00);c[1]=vec4(0.0980,0.203,0.596,0.33);c[2]=vec4(0.925,0.882,0.7647,0.66);c[3]=vec4(0.098,0.203,0.5960,1.0);\n#endif\n#else\nvec4 c[4];c[0]=vec4(color0,0.00);c[1]=vec4(color1,0.33);c[2]=vec4(color2,0.66);c[3]=vec4(color3,1.0);\n#endif\nbase.rgb=gradientmap(c,vUv.x).rgb;gl_FragColor=base;}"
    }));
let Z = Q.material.defines;
o.LUT && (Z.LUT = "", Z[o.LUTS_TYPE] = ""), 
q.add(Q), 
j._update = () => {
	C.setRenderTarget(j), C.render(q, D)
};
var J = j;

class $ {
	constructor() {
		this.kernels = new THREE.Scene, 
		this.kernels.autoUpdate = !1, 
		this.unrealBloomPass = new L({
			strength: .75 * Math.max(2, 1.5),
			radius: .2
		}), 
		this.unrealKernel = {
			pass: this.unrealBloomPass,
			output: this.unrealBloomPass.output
		}, 
		this.blendKernel = {
			material: new THREE.ShaderMaterial({
				uniforms: {
					timer: U.timer,
					tInput: {
						value: null
					},
					aspect: U.aspect,
					resY: U.resY,
					tInput2: {
						value: this.unrealKernel.output.texture
					},
					lut: {
						value: J
					}
				},
				vertexShader: e,
				fragmentShader: "#define GLSLIFY 1\nvarying vec2 vUv;uniform sampler2D tInput;uniform sampler2D tInput2;uniform sampler2D lut;uniform float gamma;uniform float resY;uniform float aspect;\n#define gc(color, gamma) pow( color, 1.0 / vec3(gamma))\nconst vec3 W=vec3(0.2125,0.7154,0.0721);float l(vec3 rgb){return dot(rgb,W);}float wgt(float x,float y){return max(sign(x-y),0.0);}vec2 wgt(vec2 x,vec2 y){return max(sign(x-y),0.0);}float datSeed=0.0;float rand(float o){float p=o*256.0;p=fract(p*.1031);p*=p+33.33;p*=p+p;return fract(p);}float rand(vec2 co){return fract(sin(dot(co,vec2(12.9898,78.233)))*43758.5453);}uniform float timer;vec3 bsc(vec3 a){vec3 br=a*1.05;vec3 i=vec3(dot(br,W));vec3 sc=mix(i,br,1.05);return mix(vec3(0.5),sc,1.05);}vec3 bsc2(vec3 a){vec3 br=a*0.96;vec3 i=vec3(dot(br,W));vec3 sc=mix(i,br,0.96);return mix(vec3(0.5),sc,0.96);}float scanline(vec2 u){return sin((u.y*2000.0-(rand(vUv.xy)*0.05)))*0.025;}void main(){vec2 vUv=vUv;vec2 originalUv=vUv;float isCyber=0.0;float aa=1.0;float s=0.025;float range=s*0.85;float div=200.0;\n#ifdef CYBERGLITCH\nisCyber=1.0;div=400.0;\n#endif\nfloat islut=0.0;float nX=0.0;float t=s*0.4781;float sss=(1.0-t);if(originalUv.x<t||originalUv.x>sss){aa=0.0;islut=1.0;nX=originalUv.x;}else{if(originalUv.y<range||originalUv.y>(1.0-range)){aa=0.0;islut=1.0;nX=originalUv.x;}else{\n#ifdef CYBERGLITCH\nfloat l=max(rand(SEED)*0.35,0.1);float l2=1.0-max(rand(SEED+43.0)*0.35,0.1);vUv.x=mix(vUv.x,l,wgt(l,vUv.x));vUv.x=mix(vUv.x,l2,wgt(vUv.x,l2));float l3=wgt(rand(SEED-430.0)*0.4,vUv.y);float l4=wgt(vUv.y+vUv.x,1.0-rand(SEED-200.0)*0.4);vUv.x=mix(vUv.x,originalUv.x,l3);vUv.x=mix(vUv.x,originalUv.x,l4);vUv=vec2(vUv.x+rand(SEED)*0.3,vUv.y);vUv=vec2(vUv.x,vUv.y);vUv.y=originalUv.y;\n#endif\n}}\n#ifdef GLITCH\n#ifdef HYPERGLITCH\nfloat rrr=wgt(0.95,rand(floor(vUv.x*200.0)));float rr=max(0.6,rand(floor((timer*0.01+vUv.y)*200.0)))*rrr;rr*=rr;rr=1.0-rr;float gg=min(0.6,rand(floor((vUv.y+vUv.x*aspect)*200.0)))*rrr;gg*=gg;float seeda=wgt(0.3,rand(floor(timer*0.2-SEED*2.0+vUv.x*20.0)));vUv.y=mix(vUv.y,rr,seeda*(aa)*wgt(vUv.y,rr));vUv.y=mix(vUv.y,gg,seeda*(aa)*wgt(gg,vUv.y));float res=max(1.0-aa,wgt(0.92,rand(floor((rand(SEED)+vUv.x*aspect+vUv.y)*40.0))));vUv.y=mix(vUv.y,originalUv.y,res);float cut=wgt(0.8,rand(floor(timer*0.2+SEED+vUv.x*400.0))*rand(floor(timer*0.2+SEED*2.0+vUv.x*20.0)));if(cut==0.0&&islut==0.0){vUv.x=vUv.x-0.05;if(vUv.x>1.0){vUv.x=1.05-vUv.x+0.05;}}if(aa==0.0){vUv.x=vUv.x+0.5;if(vUv.x>1.0){vUv.x=1.5-vUv.x+0.5;}}\n#else\nfloat mSeed=SEED+timer*0.2;float rr=rand(floor((vUv.x+vUv.y)*mSeed*0.2))*rand(floor(vUv.y*400.0+mSeed))*rand(floor(mSeed-vUv.y*100.0))*wgt(0.4,rand(floor(mSeed+vUv.y*20.0)));rr=rr*rr;rr=1.0-rr;float isInGlitch=0.0;isInGlitch=max(vUv.x>rr ? 1.0: 0.0,1.0-aa);mSeed=(SEED+timer*0.2+3.0);rr=rand(floor((vUv.x+vUv.y)*mSeed*0.2))*rand(floor(vUv.y*400.0+mSeed))*rand(floor(mSeed-vUv.y*100.0))*wgt(0.4,rand(floor(mSeed+vUv.y*20.0)));rr=rr*rr;isInGlitch=max(isInGlitch,max(vUv.x<rr ? 1.0 : 0.0,1.0-aa));aa=1.0-isInGlitch;if(aa==0.0){vUv.x=(vUv.x+0.5);if(vUv.x>1.0){vUv.x=1.5-vUv.x+0.5;}if(vUv.y>1.0){vUv.y=1.5-vUv.y+0.5;}}\n#endif\n#else\nif(aa==0.0){vUv.x=vUv.x+0.5;if(vUv.x>1.0){vUv.x=1.5-vUv.x+0.5;}}\n#endif\n#ifdef DOUBLE_SYMETRIC\nvUv=mix(vUv,1.0-vUv,wgt(vUv,vec2(0.5)));vUv*=2.0;\n#elif defined(SYMETRIC)\nvec2 dattemp=1.0-vUv;float sep=0.25;vUv.x-=sep;if(vUv.x<sep){vUv.x=dattemp.x-sep;}vUv.x=1.0-vUv.x;\n#endif\nfloat cc=1.0;if(originalUv.x>t&&originalUv.x<(1.0-t)&&((originalUv.y<range+0.005&&originalUv.y>range)||(originalUv.y>(1.0-range-0.005)&&originalUv.y<(1.0-range)))){\n#ifdef CYBERGLITCH\nvUv=vec2(rand(SEED)*0.5*i sCyber+sin(3.1415*mod(floor(timer*0.01+(originalUv.x+0.5)*div)/div,1.0)),originalUv.y);\n#else\nvUv=mod(vec2(floor((originalUv.x)*div)/div,originalUv.y+0.5+sin(timer*0.2+originalUv.x)*0.1),vec2(1.0));\n#endif\n}vec4 base=texture2D(tInput,vUv);\n#ifdef HYPERCOLOR\nbase.rgb=texture2D(lut,vec2(l(base.rgb),0.5)).rgb;\n#elif defined(LUT)\nbase.rgb=texture2D(lut,vec2(l(base.rgb),0.5)).rgb;\n#endif\nbase.rgb=bsc(base.rgb);vec4 blend=texture2D(tInput2,vUv);vec4 temp=(1.0-((1.0-base)*(1.0-blend)));temp.rgb*=0.98;if(islut==0.0){temp.rgb+=scanline(originalUv);temp.rgb+=rand(vUv.xy)*0.05;}gl_FragColor=temp;}",
				depthTest: !1,
				depthWrite: !1
			})
		};
		for (const e in o) 
			1 == o[e] && (this.blendKernel.material.defines[e] = "");
		this.blendKernel.material.defines.LUMA = o.LUMA, 
		r && (this.blendKernel.material.defines.HEADLESS = ""), 
		this.blendKernel.material.defines.SEED = o.SHADER_SEED + ".0", 
		this.blendKernel.mesh = new THREE.Mesh(O, this.blendKernel.material)
	}
	render(e, t) {
		J._update();
		var i = C.autoClear;
		C.autoClear = !1, this.unrealKernel.pass.render(t), this.compute(this.blendKernel, {
			input: e,
			toScreen: !0
		}), C.autoClear = i
	}
	compute(e, t = {}) {
		C.oldAutoClear = C.autoClear, 
		e.mesh.frustumCulled = !1, 
		e.mesh.matrixAutoUpdate = !1, 
		this.kernels.add(e.mesh), 
		t.input && (e.mesh.material.uniforms.tInput.value = t.input.texture), 
		1 == t.toScreen ? null != C.getRenderTarget() && C.setRenderTarget(null) 
			: null == t.output ? C.setRenderTarget(e.output) : C.setRenderTarget(t.output), 
		C.autoClear = !1, 
		C.render(this.kernels, D), 
		C.autoClear = C.oldAutoClear, 
		this.kernels.remove(e.mesh)
	}
	resize(e, t) {
		this.unrealKernel.pass.setSize(2 * e * a, 2 * t * a), 
		J._update()
	}
}
class ee {
	constructor() {
		var e = {
			stencilBuffer: !0,
			format: THREE.RGBFormat,
			depthBuffer: !0
		};
		this.target = new(r ? THREE.WebGLMultisampleRenderTarget : THREE.WebGLRenderTarget)(1, 1, e), this.occlusion = this.target.clone(), this.oldClearColor = new THREE.Color, this.quad = new $, y.on("resize", (e, t) => {
				this.target.setSize(~~(2 * e), ~~(2 * t)), this.occlusion.setSize(~~(2 * e), ~~(2 * t)), this.quad.resize(e, t)
		})
	}
	render(e) {
		C.setRenderTarget(this.target), 
		C.render(e, D), 
		y.emit("occlusion", !0), 
		C.getClearColor(this.oldClearColor), 
		C.setClearColor(0), 
		C.setRenderTarget(this.occlusion), 
		C.render(e, D), 
		y.emit("occlusion", !1), 
		C.setClearColor(this.oldClearColor), 
		this.quad.render(this.target, this.occlusion)
	}
}
let te = new THREE.MeshBasicMaterial({ color: 0 }),
		ie = {
			visibleOnDiffuse: !0,
			visibleOnOcclusion: !0
		};
class ne extends THREE.Mesh {
	constructor(e, t, i, n = {}) {
		null == i && (i = te);
		var r = Object.assign({}, ie),
				r = Object.assign(r, n);
		super(e, t);
		let a = i;
		a == te && null != t.occlusionMaterial && (a = t.occlusionMaterial), 
		this.originalmaterial = t, 
		this.fom = a, 
		this.fom.defines = Object.assign({}, this.originalmaterial.defines), 
		this.fom.defines.OCCLUSION = "1", 
		y.on("occlusion", this._onOcclusion.bind(this)), 
		this.dpv = null, 
		this._opv = null, 
		this.ro = r
	}
	_onOcclusion(e) {
		0 == this.ro.visibleOnOcclusion && (1 == e ? (this._opv = this.visible, this.visible = !1) : this.visible = this._opv), 
		0 == this.ro.visibleOnDiffuse && (1 == e ? this.visible = this.dpv || this.visible : (this.dpv = this.visible, this.visible = !1)), 
		this.material = e ? this.fom || occlusionmaterial : this.originalmaterial
	}
}
let re = new THREE.Scene;
const ae = 2048 * a;
class oe extends THREE.WebGLRenderTarget {
	constructor() {
		super(ae, ae), 
		re = new THREE.Scene;
		let e = new THREE.ShaderMaterial({
			uniforms: {
				NOISE_TILE: {
					value: Math.max(~~(7 * T()), 4)
				},
				TILES_GRID: {
					value: 2 * ~~p(1, 8, T()) + 30
				},
				BOX_SIZE: {
					value: .2 * T() + .7
				}
			},
			vertexShader: "#define GLSLIFY 1\nvarying vec2 vUv;varying vec2 vPosition;void main(){vUv=vec2(0.5)+(position.xy)*0.5;vPosition=position.xy;gl_Position=vec4(position.xy,0.0,1.0);}",
			fragmentShader: "#define GLSLIFY 1\nvarying vec2 vUv;uniform float NOISE_TILE;uniform float TILES_GRID;uniform float BOX_SIZE;float h(in vec2 p,in float s){p=mod(p,s);return fract(sin(dot(p,vec2(27.16898,38.90563)))*5151.5473453);}float rand(float p){p=fract(p*.1031);p*=p+33.33;p*=p+p;return fract(p);}float Noise(in vec2 p,in float scale){vec2 f;p*=scale;f=fract(p);p=floor(p);f=f*f*(3.0-2.0*f);float res=mix(mix(h(p,scale),h(p+vec2(1.0,0.0),scale),f.x),mix(h(p+vec2(0.0,1.0),scale),h(p+vec2(1.0,1.0),scale),f.x),f.y);return res;}float fBm(in vec2 p){p+=vec2(sin(5555.0*.7),cos(5555.0*.45))*(.1);float f=0.0;float scale=10.;p=mod(p,scale);float amp=0.6;for(int i=0;i<5;i++){f+=Noise(p,scale)*amp;amp*=.5;scale*=2.;}return min(f,1.0);}float box(vec2 _st,vec2 s,float se){s=vec2(0.5)-s*0.5;vec2 aa=vec2(se*0.5);vec2 uv=smoothstep(s,s+aa,_st);uv*=smoothstep(s,s+aa,vec2(1.0)-_st);return uv.x*uv.y;}float circle(in vec2 _st,in float r){vec2 dist=_st-vec2(0.5);return 1.-smoothstep(r-(r*0.01),r+(r*0.01),dot(dist,dist)*4.0);}float wgt(float x,float y){return max(sign(x-y),0.0);}void main(){vec2 uv=vUv*NOISE_TILE;\n#ifdef GEOM_FLOOR_PATTERN\nfloat bri=fBm(uv);\n#else\nfloat bri=fBm(uv+(SEED*0.2+0.3)*fBm(uv*0.5));\n#endif\nvec2 grid=fract(vUv*TILES_GRID);\n#ifdef CIRCLE\nfloat u=circle(grid,BOX_SIZE);u-=circle(grid,BOX_SIZE*0.7);\n#else\n#ifdef SQUARE\nfloat u=box(grid,vec2(BOX_SIZE),0.01);u-=box(grid,vec2(BOX_SIZE*0.8),0.01);\n#endif\n#endif\n#ifdef GEOM_FLOOR_PATTERN\ngl_FragColor=vec4(bri*u,u*bri,u*bri,1.0);\n#else\ngl_FragColor=vec4(bri,bri,bri,1.0);\n#endif\n}",
			defines: []
		});
		this.mesh = new THREE.Mesh(O, e), 
		o.GEOM_FLOOR_PATTERN && (e.defines.GEOM_FLOOR_PATTERN = ""), 
		e.defines.SEED = Math.max(o.SHADER_SEED / o.projectNumber, .2), 
		e.defines[o.FLOOR_TYPE] = "", 
		re.add(this.mesh), 
		C.setRenderTarget(this), 
		C.render(re, D)
	}
}
var se = new oe;
let le = new THREE.Scene,
    ce = new THREE.ShaderMaterial({
        vertexShader: "#define GLSLIFY 1\nvarying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position,1.0);}",
        fragmentShader: "#define GLSLIFY 1\nuniform sampler2D tInput;uniform vec2 direction;varying vec2 vUv;\n#define A0 0.1633\n#define A1 0.1531\n#define A2 0.12245\n#define A3 0.0918\n#define A4 0.051\nvoid main(){vec2 uv=vUv;vec2 v_uv_0=uv;vec2 delta=direction;vec2 v_uv_1=uv-delta;vec2 v_uv_2=uv+delta;delta+=direction;vec2 v_uv_3=uv-delta;vec2 v_uv_4=uv+delta;delta+=direction;vec2 v_uv_5=uv-delta;vec2 v_uv_6=uv+delta;delta+=direction;vec2 v_uv_7=uv-delta;vec2 v_uv_8=uv+delta;vec4 center=texture2D(tInput,v_uv_0);vec3 color=center.rgb*A0;color+=texture2D(tInput,v_uv_1).rgb*A1;color+=texture2D(tInput,v_uv_2).rgb*A1;color+=texture2D(tInput,v_uv_3).rgb*A2;color+=texture2D(tInput,v_uv_4).rgb*A2;color+=texture2D(tInput,v_uv_5).rgb*A3;color+=texture2D(tInput,v_uv_6).rgb*A3;color+=texture2D(tInput,v_uv_7).rgb*A4;color+=texture2D(tInput,v_uv_8).rgb*A4;gl_FragColor=vec4(color,center.a);}",
        uniforms: {
            tInput: {
                value: null
            },
            direction: {
                value: new THREE.Vector2(0, 0)
            }
        },
        depthTest: !1,
        depthWrite: !1
    }),
    ve = ce.uniforms;
var fe = new class {
        constructor() {
            C.getContext();
            let e = new THREE.Mesh(O, ce);
            e.frustumCulled = !1, e.matrixAutoUpdate = !1, le.add(e)
        }
        blur(e, t) {
            var i = C.autoClear;
            C.autoClear = !1;
            var n = C.getRenderTarget();
            ve.direction.value.set(1 / e.width, 0), ve.tInput.value = e, C.setRenderTarget(t), C.render(le, D), ve.direction.value.set(0, 1 / e.height), ve.tInput.value = t, C.setRenderTarget(e), C.render(le, D), C.setRenderTarget(n), C.autoClear = i
        }
    },
    ue = THREE.Vector3,
    de = THREE.Vector4,
    me = 2048 * a,
    he = new THREE.Plane,
    Ee = new ue,
    pe = new ue,
    ge = new ue,
    xe = new THREE.Matrix4,
    Te = new ue(0, 0, -1),
    Re = new de,
    be = new ue,
    ye = new ue,
    Se = new de,
    Ue = new THREE.Matrix4,
    Ce = new THREE.PerspectiveCamera,
    Ie = new THREE.WebGLRenderTarget(me, me, {
        format: THREE.RGBFormat,
        stencilBuffer: !1
    }),
    _e = Ie.clone();
class we extends ne {
    constructor(e) {
        let t = {
            uniforms: {
                timer: U.timer,
                textureMatrix: {
                    value: Ue
                },
                mirrorSampler: {
                    value: Ie
                },
                normalMap: {
                    value: se
                }
            },
            vertexShader: "#define GLSLIFY 1\nuniform mat4 textureMatrix;varying vec4 vUv;varying vec2 vPosition;void main(){vPosition=(modelMatrix*vec4(position,1.0)).xz*0.08;vUv=textureMatrix*vec4(position,1.0);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",
            fragmentShader: "#define GLSLIFY 1\nuniform sampler2D mirrorSampler;varying vec4 vUv;uniform sampler2D normalMap;varying vec2 vPosition;uniform float timer;void main(){vec2 nmUv=fract(vPosition);vec3 nn=texture2D(normalMap,mod(nmUv+vec2(0.0,timer*0.01*SPEED),1.)).xyz;vec4 base=texture2DProj(mirrorSampler,vUv*SEED+vec4(0.0,nn.r+nn.b+nn.g,0.0,0.0));gl_FragColor=vec4(base.rgb,1.0);}",
            transparent: !1,
            side: 0,
            defines: {
                SPEED: o.SPEED,
                SEED: Math.max(o.SHADER_SEED / o.projectNumber, .2)
            }
        };
        o.DOUBLE_SYMETRIC && (t.defines.DOUBLE_SYMETRIC = "");
        let i = new THREE.ShaderMaterial(t),
            n = new THREE.ShaderMaterial(t);
        i.occlusionMaterial = n, super(new THREE.PlaneBufferGeometry(400, 400, 1, 1), i, n, {
            visibleOnOcclusion: !1
        }), this.frustumCulled = !1, this.rotation.x = .5 * -Math.PI, y.on("pre_update", this.update.bind(this)), this.scene = e
    }
    update() {
        this.updateMatrixWorld(), D.updateMatrixWorld(), pe.setFromMatrixPosition(this.matrixWorld), ge.setFromMatrixPosition(D.matrixWorld), xe.extractRotation(this.matrixWorld), Ee.set(0, 0, 1), Ee.applyMatrix4(xe), be.subVectors(pe, ge), be.reflect(Ee).negate(), be.add(pe), xe.extractRotation(D.matrixWorld), Te.set(0, 0, -1), Te.applyMatrix4(xe), Te.add(ge), ye.subVectors(pe, Te), ye.reflect(Ee).negate(), ye.add(pe), Ce.position.copy(be), Ce.up.set(0, 1, 0), Ce.up.applyMatrix4(xe), Ce.up.reflect(Ee), Ce.lookAt(ye), Ce.far = D.far, Ce.updateMatrixWorld(), Ce.projectionMatrix.copy(D.projectionMatrix), Ue.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), Ue.multiply(Ce.projectionMatrix), Ue.multiply(Ce.matrixWorldInverse), Ue.multiply(this.matrixWorld), he.setFromNormalAndCoplanarPoint(Ee, pe), he.applyMatrix4(Ce.matrixWorldInverse), Re.set(he.normal.x, he.normal.y, he.normal.z, he.constant);
        var e = Ce.projectionMatrix;
        Se.x = (Math.sign(Re.x) + e.elements[8]) / e.elements[0], Se.y = (Math.sign(Re.y) + e.elements[9]) / e.elements[5], Se.z = -1, Se.w = (1 + e.elements[10]) / e.elements[14], Re.multiplyScalar(2 / Re.dot(Se)), e.elements[2] = Re.x, e.elements[6] = Re.y, e.elements[10] = Re.z + 1, e.elements[14] = Re.w, this.visible = !1, this.scene.autoUpdate = !1, y.emit("mirror", !0), C.setRenderTarget(Ie), C.render(this.scene, Ce), this.scene.autoUpdate = !0, y.emit("mirror", !1), this.visible = !0, fe.blur(Ie, _e), fe.blur(Ie, _e)
    }
}
var De = [],
    Oe = 0,
    Me = function(e) {
        let t = 0,
            i = !1;
        for (; t < De.length;) i = e[0] == De[t][0] || i, t++;
        return !(50 < ++Oe) && i
    },
    He = () => {
        for (var e = o.BACKGROUND ? 1 : 0, t = W(); Me(t);) t = W();
        return De.push(t), {
            value: new THREE.Color(t[0] * e, t[1] * e, t[2] * e)
        }
    };
let Ae = new THREE.WebGLRenderTarget(1, 1);
class Le extends ne {
    constructor() {
        super(O, new THREE.ShaderMaterial({
            vertexShader: e,
            fragmentShader: "#define GLSLIFY 1\nvarying vec2 vUv;uniform sampler2D back;void main(){gl_FragColor=texture2D(back,vUv);}",
            uniforms: {
                back: {
                    value: Ae
                }
            },
            depthTest: !1,
            depthWrite: !1
        }), null, {
            visibleOnOcclusion: !1
        }), this.mesh = new THREE.Mesh(O, new THREE.ShaderMaterial({
            uniforms: {
                timer: {
                    value: o.SYMETRIC ? 1e3 : 100 * T()
                },
                aspectratio: U.aspect,
                colorb: He(),
                colorc: He(),
                backgroundcolor: He(),
                colora: He(),
                distanceminA: {
                    value: 1.3
                },
                distanceminB: {
                    value: 1.1
                },
                distancemaxA: {
                    value: 0
                },
                distancemaxB: {
                    value: 0
                },
                mixMin: {
                    value: .15
                },
                mixMax: {
                    value: .66
                },
                granular: {
                    value: 1
                }
            },
            transparent: !0,
            vertexShader: "#define GLSLIFY 1\nvarying vec2 vUv;uniform float aspectratio;float gt(float x,float y){return max(sign(x-y),0.0);}vec2 cr(vec2 i,float b,float a){return mix(vec2(i.x,i.y*b/a+.5*(1.-b/a)),vec2(i.x*a/b+.5*(1.-a/b),i.y),gt(b,a));}void main(){vUv=cr(vec2(0.5)+(position.xy)*0.5,1.0,aspectratio);gl_Position=vec4(position.xy,0.0,1.0);}",
            fragmentShader: "#define GLSLIFY 1\nvarying vec2 vUv;uniform vec3 colora;uniform vec3 colorb;uniform vec3 backgroundcolor;uniform float timer;uniform float distanceminA;uniform float distanceminB;uniform float distancemaxA;uniform float distancemaxB;uniform float granular;uniform float mixMin;uniform float mixMax;uniform vec3 colorc;const vec3 W=vec3(0.2125,0.7154,0.0721);vec3 bsc(vec3 a){vec3 br=a*0.9;vec3 i=vec3(dot(br,W));vec3 sc=mix(i,br,0.9);return mix(vec3(0.5),sc,1.0);}vec2 point=vec2(0.2,0.2);vec2 point2=vec2(0.4,0.9);float r(vec2 co){float a=12.9898;float b=78.233;float c=43758.5453;float dt=dot(co.xy,vec2(a,b));float sn=mod(dt,3.14);return fract(abs(sin(sn))*c);}\n#define MAX_PIXEL_MIX 0.001\nfloat noise(in vec2 st){vec2 i=floor(st);vec2 f=fract(st);float a=r(i);float b=r(i+vec2(1.0,0.0));float c=r(i+vec2(0.0,1.0));float d=r(i+vec2(1.0,1.0));vec2 u=f*f*(3.0-2.0*f);return mix(a,b,u.x)+(c-a)*u.y*(1.0-u.x)+(d-b)*u.x*u.y;}float fbm(vec2 st){float val=0.0;float apm=.5;float yolo=noise(vec2(cos(timer-5.55+st.x),cos(timer-st.y))-0.5);val+=apm*noise(st+vec2(yolo));val+=apm*0.25*noise(st*0.2+vec2(yolo));return val;}void main(){float rnd=r(vUv.xy);float no=rnd*MAX_PIXEL_MIX*granular;float color=fbm(vUv.xy*2.0+timer*0.05)+no;float mixx=smoothstep(mixMin,mixMax,color+no);vec3 finColor=backgroundcolor;float distA=smoothstep(distanceminA,distancemaxA,distance(vUv,point));float distB=smoothstep(distanceminB,distancemaxB,distance(vUv,point2));vec3 colorFirstPoint=mix(colora,colorc,distA);vec3 colorSecondPoint=mix(colorb,colorFirstPoint,distB);gl_FragColor=vec4(mix(colorSecondPoint,finColor,mixx),1.0);gl_FragColor.rgb=bsc(gl_FragColor.rgb);}"
        })), this.sc = new THREE.Scene, this.sc.add(this.mesh), this.mesh.renderOrder = -5, y.on("mirror", e => {
            this.visible = e
        }), y.on("resize", (e, t) => {
            Ae.setSize(e, t), C.setRenderTarget(Ae), C.render(this.sc, D)
        })
    }
}
class Pe extends THREE.InstancedBufferGeometry {
    constructor(t, i) {
        super(), o.SQUARE ? (d = new THREE.BoxBufferGeometry(i.sizeW, i.sizeH, i.sizeH, 1, 1, 1)).translate(0, .5 * i.sizeH, 0) : o.DIAMOND ? d = new THREE.SphereBufferGeometry(i.sizeW / 2 * 1.2, 4, 2) : (d = new THREE.CylinderBufferGeometry(i.sizeW / 2, i.sizeW / 2, i.sizeW / 2, o.WIREFRAME ? 7 : 16, 1)).translate(0, i.sizeW / 4, 0);
        i = d.attributes;
        this.setAttribute("position", i.position), this.setAttribute("uv", i.uv), this.setAttribute("normal", i.normal);
        const n = [new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1)],
            r = new Float32Array(3 * i.position.count);
        for (let e = 0, t = i.position.count; e < t; e++) n[e % 3].toArray(r, 3 * e);
        this.setAttribute("center", new THREE.BufferAttribute(r, 3)), d.index && this.setIndex(d.index);
        var a = [];
        let s, l = this.instanceCount = 0,
            c = [],
            v = [];
        this.up = !1, this.minFront = 100, this.maxFront = -100, this.front = 0, this.limit = 16 * p(.5, 1, T()), this.distrib = p(.8, .94, T()), this.distrib2 = p(.85, .94, T()), o.VERTICAL && (this.limit *= .2);
        for (var f = -1e4; l < t.length;) {
            let e = 0;
            for (; e < t[l].length;) s = t[l][e], T() > this.distrib && f != s[0] && (this.front = T() * this.limit - .5 * this.limit, o.VERTICAL && (this.front = -Math.abs(this.front))), f = s[0], this.minFront = Math.min(this.front, this.minFront), this.maxFront = Math.max(this.front, this.maxFront), c.push(this.front), a.push(s[0], 0, s[1]), v.push(l / t.length, e / t[l].length), this.instanceCount++, e++;
            l++
        }
        let e = this.minFront + .5 * (this.maxFront - this.minFront);
        o.VERTICAL && (e = 0), this.mid = e;
        let u = 0;
        for (; u < c.length;) c[u] -= e, u++;
        var d = new THREE.InstancedBufferAttribute(new Float32Array(a), 3, !1, 1);
        this.setAttribute("offset", d);
        d = new THREE.InstancedBufferAttribute(new Float32Array(c), 1, !1, 1);
        this.setAttribute("front", d);
        d = new THREE.InstancedBufferAttribute(new Float32Array(v), 2, !1, 1);
        this.setAttribute("uniqueuvs", d);
        for (var m = [], h = 0, E = this.instanceCount; h < E; h++) m[h] = h;
        d = new THREE.InstancedBufferAttribute(new Float32Array(m), 1, !1, 1);
        this.setAttribute("countID", d);
        var g = [],
            x = [];
        let R = N(),
            b = 0,
            y = !1,
            C = p(.85, 1, T()),
            S = N();
        for (; b < 3 * this.instanceCount;) 1 == y ? R = N() : .9 < T() ? (R = N(), S = R) : R = S, g.push(...R), T() > C && (y = !y), x.push(.85 < T() ? 1 : 0), b += 3;
        d = new THREE.InstancedBufferAttribute(new Float32Array(g), 3, !1, 1);
        this.setAttribute("color", d);
        d = new THREE.InstancedBufferAttribute(new Float32Array(x), 1, !1, 1);
        this.setAttribute("islight", d), this._maxInstanceCount = this.instanceCount
    }
}
class Fe extends THREE.ShaderMaterial {
    constructor(e, t, i, n, r, a) {
        var s = {
            vertexShader: "#define GLSLIFY 1\nattribute float countID;attribute vec3 offset;attribute float islight;attribute vec3 color;varying vec3 vColor;varying float vislight;uniform float timer;uniform float datp;varying float speeddiff;attribute float front;varying float alpha;uniform float band;\n#define v vec2\nvarying v vUv;vec4 mo(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 p(vec4 x){return mo(((x*34.0)+1.0)*x);}vec4 tayl(vec4 r){return 1.79284291400159-0.85373472095314*r;}v fade(v t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float cnoise(v P){vec4 Pi=floor(P.xyxy)+vec4(0.0,0.0,1.0,1.0);vec4 Pf=fract(P.xyxy)-vec4(0.0,0.0,1.0,1.0);Pi=mo(Pi);vec4 ix=Pi.xzxz;vec4 iy=Pi.yyww;vec4 fx=Pf.xzxz;vec4 fy=Pf.yyww;vec4 i=p(p(ix)+iy);vec4 gx=fract(i*(1.0/41.0))*2.0-1.0;vec4 gy=abs(gx)-0.5;vec4 tx=floor(gx+0.5);gx=gx-tx;v g00=v(gx.x,gy.x);v g10=v(gx.y,gy.y);v g01=v(gx.z,gy.z);v g11=v(gx.w,gy.w);vec4 norm=tayl(vec4(dot(g00,g00),dot(g01,g01),dot(g10,g10),dot(g11,g11)));g00*=norm.x;g01*=norm.y;g10*=norm.z;g11*=norm.w;float n00=dot(g00,v(fx.x,fy.x));float n10=dot(g10,v(fx.y,fy.y));float n01=dot(g01,v(fx.z,fy.z));float n11=dot(g11,v(fx.w,fy.w));v fade_xy=fade(Pf.xy);v n_x=mix(v(n00,n01),v(n10,n11),fade_xy.x);float n_xy=mix(n_x.x,n_x.y,fade_xy.y);return 2.3*n_xy;}mat3 rotAxis(vec3 axis,float a){float s=sin(a);float c=cos(a);float oc=1.0-c;vec3 as=axis*s;mat3 p=mat3(axis.x*axis,axis.y*axis,axis.z*axis);mat3 q=mat3(c,-as.z,as.y,as.z,c,-as.x,-as.y,as.x,c);return p*oc+q;}varying float an;attribute vec3 center;varying vec3 vCenter;varying vec3 vNormal;const vec3 W=vec3(0.2125,0.7154,0.0721);vec3 bsc(vec3 a){vec3 br=a*3.0;vec3 i=vec3(dot(br,W));vec3 sc=mix(i,br,1.2);return mix(vec3(0.5),sc,1.0);}\n#define PI 3.141592653589793\nfloat backInOut(float t){float f=t<0.5? 2.0*t: 1.0-(2.0*t-1.0);float g=pow(f,3.0)-f*sin(f*PI);return t<0.5? 0.5*g: 0.5*(1.0-g)+0.5;}float datSeed=0.0;float rand(vec2 o){vec2 p=o*256.0;vec3 p3=fract(vec3(p.xyx)*.1031);p3+=dot(p3,p3.yzx+33.33);return fract((p3.x+p3.y)*p3.z);}float rd(){datSeed+=1.0;return rand(v(countID,datSeed));}float when_gt(float x,float y){return max(sign(x-y),0.0);}float rd(float aa){return rand(v(aa));}varying vec3 vEye;varying float un;uniform float rSeed;void main(){float constr=rd()*800.0*max(rSeed,0.5);float datTime=timer*datp;float off=10.0*datp;float ttt=smoothstep(countID-100.0+constr,countID+100.0+constr,datTime);float timer=timer*SPEED;vCenter=center;vec3 position=position;vec3 normal=normal;vColor=color+vec3((rd()-0.5)*rd()*0.2);\n#ifdef OCCLUSION\nvColor=mix(vColor,vec3(1.0),when_gt(rd(),rSeed*0.05+0.9));\n#endif\nvec3 realOffset=offset;vec3 offset=offset;float coldiff=floor(offset.x*band);speeddiff=sin(coldiff);offset.z-=HEIGHT*0.5;offset.z+=timer*0.5*abs(speeddiff);offset.z=mod(offset.z,HEIGHT);float step=offset.z*INV_HEIGHT;float sinn=sin(PI*step);\n#ifdef PULSATE\nsinn=smoothstep(0.0,0.1,sinn)*smoothstep(rSeed,1.0,abs(sin(PI*step*0.75+SEED-timer*0.5+rd(coldiff))));\n#elif defined(CUT)\nsinn=smoothstep(0.0,0.1,sinn)*smoothstep(rSeed,1.0,abs(sin(PI*step*1.5+SEED-timer*0.5+rd(coldiff))));\n#endif\noffset.z-=HEIGHT*0.5;float scale=abs(cnoise(0.5*v(offset.x+position.x,position.z+offset.z)+timer*0.1));offset.xyz=mix(offset,vec3(offset.x,cos(offset.z+rSeed),offset.z),when_gt(0.02,rd(offset.x)));offset.y=max(0.0,offset.y);float mult=1.0;\n#ifdef OFFSET\noffset.z-=front*0.5;\n#endif\noffset.y+=sin(timer*0.1+offset.z+offset.x+offset.y)*0.2;\n#ifdef CURVE\n#ifndef SUPER_CURVE\nfloat center=(cnoise(v(0.0,rSeed*0.1)))*10.0;mult=0.8;offset.x+=(cnoise(v(offset.z*0.1,rSeed*0.1)))*10.0-center*0.5;\n#endif\n#endif\nposition.y*=max(1.2,5.0*backInOut(scale));position=offset+position*sinn*ttt;\n#ifdef DOUBLE_DECK\nif(realOffset.x>0.5){\n#ifdef VERTICAL\nposition.xyz=rotAxis(vec3(1.0,0.0,0.0),PI*0.5)*position.xyz;position.x-=WIDTH*0.25;position.yz+=HEIGHT*0.5;\n#else\nposition.x-=WIDTH*0.25;\n#endif\n}else{\n#ifdef VERTICAL\nposition.x+=sin(rSeed*50.0+offset.z);position.x+=WIDTH*0.25;\n#else\nposition.y+=2.0;position.x+=WIDTH*0.25;\n#endif\n}\n#else\n#ifdef VERTICAL\nposition.xyz=rotAxis(vec3(1.0,0.0,0.0),PI*0.5)*position.xyz;position.y+=HEIGHT*0.5-1.0;\n#endif\n#endif\n#ifdef SUPER_CURVE\nposition.xyz=rotAxis(vec3(1.0,0.0,0.0),sin(offset.x+timer*0.05+rSeed)*0.25)*position.xyz;position.y+=countID*0.00001;\n#endif\nvEye=(modelViewMatrix*vec4(position,1.0)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);alpha=smoothstep(0.0,0.1,(modelMatrix*vec4(position,1.0)).y);vNormal=(normalMatrix*normal).xyz;vislight=islight;if(islight==0.0&&position.y<-1.0){vislight=0.2;}an=rd(coldiff);un=when_gt(rd(),0.82);}",
            fragmentShader: "#define GLSLIFY 1\nvarying vec3 vColor;varying float vislight;vec3 when_gt(vec3 x,vec3 y){return max(sign(x-y),0.0);}float when_gt(float x,float y){return max(sign(x-y),0.0);}varying float alpha;varying float an;varying vec3 vNormal;varying float speeddiff;varying vec3 vCenter;uniform float enlight;uniform float thickness;\n#define F_MIN 3.0\n#define F_MAX 10.0\nvarying vec3 vEye;varying float un;const vec3 W=vec3(0.2125,0.7154,0.0721);float l(vec3 rgb){return dot(rgb,W);}void main(){\n#ifdef OCCLUSION\ngl_FragColor=vec4(vislight*vColor,1.0);\n#else\n#ifdef MIRROR\ngl_FragColor=vec4(max(vislight,0.5)*vColor,1.0)*max(0.5,speeddiff);gl_FragColor.a*=0.85;\n#ifdef GHOST\ngl_FragColor.a=mix(0.25,1.0,vislight*un);\n#endif\n#else\nfloat light=max(dot(vNormal,vec3(0.0,1.0,1.0)),0.0);float m=0.5;\n#ifdef DIAMOND\nm=0.65;\n#endif\ngl_FragColor=vec4(vColor*max(m,light),1.0);\n#ifdef GHOST\ngl_FragColor.a=mix(0.1,1.0,max(vislight,un));\n#endif\n#ifdef WIREFRAME\nfloat dt=mix(thickness*1.5,thickness*0.5,smoothstep(F_MIN,F_MAX,-vEye.z));vec3 afwidth=fwidth(vCenter.xyz);vec3 edge3=smoothstep((dt-1.0)*afwidth,dt*afwidth,vCenter.xyz);float edge=1.0-min(min(edge3.x,edge3.y),edge3.z);gl_FragColor.a=mix(gl_FragColor.a,gl_FragColor.a*edge,un);\n#endif\ngl_FragColor.a*=alpha;\n#endif\n#endif\n}",
            defines: {
                HEIGHT: e.toFixed(1),
                INV_HEIGHT: 1 / e,
                WIDTH: t.toFixed(1),
                SEED: o.SHADER_SEED.toFixed(1),
                SIZE: i.toFixed(1),
                COUNTX: r.toFixed(1),
                COUNTY: a.toFixed(1),
                SPEED: o.SPEED
            },
            uniforms: {
                datp: {
                    value: 0
                },
                thickness: {
                    value: o.CIRCLE ? 2 : 4
                },
                band: {
                    value: Math.max(6 * T(), 2)
                },
                rSeed: {
                    value: .94 * T()
                },
                timer: U.timer,
                enlight: {
                    value: .7 * T()
                }
            },
            extensions: {
                derivatives: o.WIREFRAME
            },
            side: 2,
            transparent: !0
        };
        for (const e in o) 1 == o[e] && (s.defines[e] = o[e]);
        super(s), this.occlusionMaterial = new THREE.ShaderMaterial(s), s.defines = Object.assign({}, s.defines), s.defines.MIRROR = "1.0", this.mirrorMaterial = new THREE.ShaderMaterial(s)
    }
}
let Ge = {
    x: 7,
    y: 4,
    spaceX: 1,
    spaceY: 1,
    sizeW: 1,
    sizeH: 1
};
class Ye extends ne {
    constructor() {
        var e = o.GRID,
            t = function(e) {
                var t = Object.assign({}, Ge, e);
                let i = -(-t.sizeW + t.sizeW * t.x + t.spaceX * (t.x - 1)) / 2,
                    n = -(-t.sizeH + t.sizeW * t.y + t.spaceY * (t.y - 1)) / 2,
                    r = t.sizeW + t.spaceX,
                    a = t.sizeH + t.spaceY,
                    o = 0,
                    s = [];
                for (; o < t.x;) {
                    let e = 0;
                    for (s[o] = []; e < t.y;) s[o].push([i + o * r, n + e * a]), e++;
                    o++
                }
                return s
            }(e),
            i = e.y * e.sizeH + e.y * e.spaceY,
            n = e.x * e.sizeW + e.x * e.spaceX,
            n = new Fe(i, n, e.sizeW, e.sizeH, e.x, e.y);
        if (super(new Pe(t, e), n, n.occlusionMaterial), this.position.y = 1, this.frustumCulled = !1, y.on("mirror", this.onMirror.bind(this)), o.SYMETRIC) {
            var r = 0;
            if (o.VERTICAL) .6 < (r = 1.88 * T() + .12) && r < 1.6 && (r += .95, r = Math.min(2, r));
            else if (0 == o.DOUBLE_SYMETRIC)
                for (r = 3 * T(); r < .3 || .8 < r && r < 1.3 || 2.3 < r && r < 2.9;) r = 3 * T();
            this.rotation.y = r
        }
        this.material.uniforms.datp.value = Math.min(.2 * this.geometry.instanceCount, 1600)
    }
    onMirror(e) {
        1 == e ? (this.pm = this.material, this.material = this.originalmaterial.mirrorMaterial) : this.material = this.pm
    }
}
var ze = (e = !1) => { // e: falsee
	var t = Math.min(window.innerWidth, 2400);
	.5625 * t > window.innerHeight && (window.innerHeight, t = 1.777 * window.innerHeight), 
	1 != a && 1 != e || (t = 2400), 
	S.resize({
		w: t,
		h: .5625 * t
	})
};
new class {
	constructor() {
		console.log('new class')
			this.scene = new THREE.Scene, 
			this.grid = new Ye, 
			this.scene.add(this.grid), 
			this.scene.add(new we(this.scene)), 
			this.scene.add(new Le), 
			this.postProcessing = new ee, 
			y.on("update", e => {
				!r && o.DOUBLE_SYMETRIC && (this.grid.rotation.y -= .07 * e), 
				this.grid.position.y = 1 + .1 * Math.sin(.4 * -U.timer.value), 
				this.postProcessing.render(this.scene)
			}), 
			y.on("resize", (e, t) => {
				C.setSize(e, t)
			})
	}
}, 
S.play(), 
window.addEventListener("resize", ze), 
ze(), 
ze();