class Random {
    constructor(t) {
        this.seed = t
    }
    rnd_d() {
        return this.seed ^= this.seed << 13, this.seed ^= this.seed >> 17, this.seed ^= this.seed << 5, (this.seed < 0 ? 1 + ~this.seed : this.seed) % 1e3 / 1e3
    }
    rnd_bet(t, s) {
        return t + (s - t) * this.rnd_d()
    }
    rnd_i(t, s) {
        return Math.floor(this.rnd_bet(t, s + 1))
    }
}
let seed = parseInt(tokenData.hash.slice(2, 10), 16),
    R = new Random(seed);
class C {
    constructor(t, s, h) {
        this.sp = t, this.sr = s, this.ps = .5, this.t = .5, this.uo = 0, this.ld = 1, this.iter = 0, this.u = 0, this.alt = h
    }
    prep(t) {}
    update(t) {
        let s = this.ld / SP,
            h = t / s + this.uo / s;
        this.iter = Math.floor(h), this.u = h % 1
    }
    do() {}
}
class C_A extends C {
    prep(t) {
        this.ld = 2 * this.sr - 2 * this.ps;
        let s = bI(this.ps, t);
        this.grp = cog(s, 0, 0, 0, matV), scene.add(this.grp)
    }
    do() {
        let t = new THREE.Vector3(this.sp.x, this.sp.y + this.ps, this.sp.z),
            s = new THREE.Quaternion,
            h = new THREE.Quaternion,
            i = new THREE.Vector3(Math.sin(this.u * Math.PI * 2) * this.ps * .5, 0, this.u * this.ld),
            e = 2 * Math.PI * this.ps,
            p = (i.z + this.ld * this.iter) / e * Math.PI * 2,
            a = -i.x / e * Math.PI * 2;
        s.setFromAxisAngle(xx, p), h.setFromAxisAngle(zx, a), s.premultiply(h), t.add(i), t.z -= this.ld * this.u, setPos(this.grp, t, s)
    }
}
class C_B extends C {
    prep(t) {
        this.ld = 2 * this.sr - 2 * this.ps, this.sp.y += this.ps;
        let s = bI(this.ps, t);
        this.grp = cog(s, 0, 0, 0, matV), scene.add(this.grp)
    }
    do() {
        let t = this.sp.clone(),
            s = new THREE.Quaternion,
            h = this.ld * this.u + this.ld * this.iter,
            i = -2 * Math.PI * (h / (2 * Math.PI * this.ps));
        s.setFromAxisAngle(xx, -i), setPos(this.grp, t, s)
    }
}
class C_C extends C {
    prep(t) {
        this.n = Math.floor(5 * this.t + 3);
        let s = 2 * Math.PI / this.n;
        this.e = this.ps * Math.sin(s) / Math.sin((Math.PI - s) / 2), this.ld = this.e * this.n, this.sp.y += Math.sqrt(this.ps * this.ps - this.e * this.e * .25);
        let h = bC(this.ps, this.ps, this.n, t, 2 * Math.PI, 0);
        this.grp = cog(h, Math.PI - 2 * Math.PI / this.n / 2, Math.PI, Math.PI / 2, matV), scene.add(this.grp)
    }
    do() {
        let t = this.sp.clone(),
            s = new THREE.Quaternion,
            h = 1 / this.n,
            i = Math.floor(this.u / h);
        t.z += this.e * i;
        let e = new THREE.Vector3(this.sp.x, 0, this.sp.z + .5 * this.e + this.e * i),
            p = 2 * Math.PI / this.n * Math.pow(this.u % h * (1 / h), 4);
        rpt(t, p, e, xx), s.setFromAxisAngle(xx, p), t.z -= this.ld * this.u, setPos(this.grp, t, s)
    }
}
class C_D extends C {
    prep(t) {
        this.ld = 2 * this.sr - 2 * this.ps, this.ld > 4 * this.ps && (this.ps = this.ld / 4, this.ld = 2 * this.sr - 2 * this.ps), this.sa = Math.acos(this.ld / 4 / this.ps);
        let s = new THREE.Vector3(0, 0, 1);
        if (s.applyAxisAngle(yx, -this.sa), s.multiplyScalar(this.ps), this.rp0 = this.sp.clone().add(s), s.normalize().applyAxisAngle(yx, 2 * this.sa), s.multiplyScalar(2 * this.ps), this.rp1 = this.rp0.clone().add(s), this.h = (.9 * this.t + .1) * this.ps, 0 == this.alt && (this.sp.y += this.h), 0 == this.alt) {
            let s = bB(2 * this.ps, 2 * this.h, 2 * this.h, t);
            this.grp = cog(s, 0, 0, 0, matV), scene.add(this.grp)
        } else {
            let s = Math.floor(3 * this.t + 2);
            4 == s && (s = 16);
            let h = bC(this.ps, this.ps, s, t, Math.PI, 1);
            this.grp = cog(h, .5 * -Math.PI, 0, 0, matV), scene.add(this.grp)
        }
    }
    do() {
        let t = this.sp.clone(),
            s = new THREE.Quaternion;
        s.setFromAxisAngle(yx, -this.sa + Math.PI / 2);
        let h = Math.PI - this.sa - .5 * Math.PI,
            i = Math.PI / 180 * 10,
            e = 2 * Math.min(this.u, .5),
            p = 2 * Math.max(this.u - .5, 0),
            a = 2 * -h * e,
            n = 2 * h * p,
            l = .5 * (Math.sin(2 * Math.PI * ((e + .75) % 1)) + 1) * i,
            r = .5 * (Math.sin(2 * Math.PI * ((p + .75) % 1)) + 1) * i;
        t.sub(this.rp0), t.applyAxisAngle(yx, a), t.applyAxisAngle(new THREE.Vector3(t.x, 0, t.z).normalize().cross(yx), l), t.add(this.rp0), t.sub(this.rp1), t.applyAxisAngle(yx, n), t.applyAxisAngle(new THREE.Vector3(t.x, 0, t.z).normalize().cross(yx), r), t.add(this.rp1), s.setFromAxisAngle(yx, n + a - this.sa + Math.PI / 2);
        let o = new THREE.Quaternion;
        o.setFromAxisAngle(zx, l), s.multiply(o);
        let c = new THREE.Quaternion;
        c.setFromAxisAngle(zx, -r), s.multiply(c), t.z -= this.ld * this.u, setPos(this.grp, t, s)
    }
}
class C_E extends C {
    prep(t) {
        let s = 2 * this.sr - 2 * this.ps;
        if (this.sp.set(this.sp.x, 0, this.sp.z + .25 * s), this.e = s / 2, this.ld = s - Math.cos(Math.PI / 3) * this.e * 2, this.h = (.9 * this.t + .1) * this.ps, this.sp.y += .5 * this.h, this.sp.z -= this.e, this.sp1 = this.sp.clone().add(new THREE.Vector3(0, 0, this.e)), this.rA0 = new THREE.Vector3(this.sp.x, 0, this.sp.z - .5 * this.e), this.rA1 = new THREE.Vector3(this.sp.x, 0, this.sp.z + 1.5 * this.e), 0 == this.alt) {
            let s = bB(Math.max(this.ps, .1) * this.ps, this.h, this.e / this.ps * this.ps, t);
            this.grp = cog(s, 0, 0, 0, matV), this.grp1 = cog(s, 0, 0, 0, matV), scene.add(this.grp), scene.add(this.grp1)
        } else {
            this.sp.y -= .5 * this.h, this.sp1.y -= .5 * this.h;
            let s = bC(this.e / (.5 * this.ps) * this.ps * .25, 2 * this.h, 12, t, Math.PI, 0);
            this.grp = cog(s, .5 * -Math.PI, 0, .5 * -Math.PI, matV), this.grp1 = cog(s, .5 * -Math.PI, 0, .5 * -Math.PI, matV), scene.add(this.grp), scene.add(this.grp1)
        }
    }
    do() {
        let t = this.sp.clone(),
            s = new THREE.Quaternion,
            h = this.sp1.clone(),
            i = new THREE.Quaternion,
            e = Math.pow(2 * Math.min(this.u, .5), 3),
            p = Math.pow(2 * Math.max(this.u - .5, 0), 3),
            a = -e * Math.PI / 3,
            n = p * Math.PI / 3;
        rpt(t, a + n, this.rA0, xx), s.setFromAxisAngle(xx, a + n), rpt(h, -a - n, this.rA1, xx), i.setFromAxisAngle(xx, -a - n);
        let l = Math.cos(a + n) * this.e;
        h.z -= 2 * this.e - 2 * l;
        let r = Math.cos(a) * this.e;
        t.z += 2 * this.e - 2 * r, h.z += 2 * this.e - 2 * r, t.z -= this.ld * this.u, h.z -= this.ld * this.u, setPos(this.grp, t, s), setPos(this.grp1, h, i)
    }
}
class C_F extends C {
    prep(t) {
        this.ld = 2 * this.sr - 2 * this.ps, this.n = Math.floor(18 * this.t + 2), this.e = 1 / (this.n - 1), this.e *= this.ld / this.calc_distance(), this.sp.y += .5 * this.e;
        let s = this.e;
        1 == this.alt && (s = this.sr);
        let h = bB(s, this.e, this.e, t);
        this.grps = [];
        for (let t = 0; t < this.n; t++) {
            let t = cog(h, 0, 0, 0, matV);
            scene.add(t), this.grps.push(t)
        }
    }
    calc_distance() {
        let t = 0,
            s = new THREE.Vector3(0, 1, 0).multiplyScalar(this.e);
        for (let h = 0; h < this.n; h++) s.applyAxisAngle(xx, Math.PI / (this.n + 1)), t += s.z;
        return t + this.e
    }
    do() {
        let t = this.sp.clone(),
            s = new THREE.Quaternion,
            h = new THREE.Vector3(this.sp.x, 0, this.sp.z + .5 * this.e),
            i = new THREE.Vector3(this.sp.x, 0, this.sp.z + .5 * this.ld),
            e = 2 * Math.min(this.u, .5),
            p = 2 * Math.max(this.u - .5, 0);
        this.u > .5 && (e = Math.abs(1 - p));
        let a = Math.PI / (this.n + 1) * e;
        for (let e = 0; e < this.n; e++) {
            t.set(this.sp.x, this.sp.y, this.sp.z), rpt(t, a * (e + 1), h, xx), s.setFromAxisAngle(xx, a * (e + 1));
            let p = new THREE.Vector3(0, 1, 0);
            p.multiplyScalar(this.e);
            for (let s = 0; s < e; s++) p.applyAxisAngle(xx, a), t.add(p);
            if (this.u > .5) {
                rpt(t, Math.PI, i, yx);
                let h = new THREE.Quaternion;
                h.setFromAxisAngle(yx, Math.PI), s.premultiply(h);
                let e = new THREE.Quaternion;
                e.setFromAxisAngle(yx, Math.PI), s.multiply(e)
            }
            t.z -= this.ld * this.u, setPos(this.grps[e], t, s)
        }
    }
}
class C_G extends C {
    prep(t) {
        this.ld = 2 * this.sr - 2 * this.ps;
        let s = (2 * this.t + 1) * this.ps;
        this.sp.z -= .25 * this.ld, this.sp.y += .5 * s;
        let h = bB(this.ps, s, this.ps, t);
        this.grp = cog(h, 0, 0, 0, matV), scene.add(this.grp)
    }
    do() {
        let t = this.sp.clone(),
            s = new THREE.Quaternion,
            h = Math.pow(this.u, .25);
        t.z += this.ld * h, t.z -= this.ld * this.u, setPos(this.grp, t, s)
    }
}
class C_H extends C {
    prep(t) {
        this.ld = 2 * this.sr - 2 * this.ps, this.e = this.ld / 5;
        let s = .5 * this.e / Math.cos(Math.PI / 6);
        this.sp.y += Math.tan(Math.PI / 6) * this.e * .5, this.sp.z -= .5 * this.ld, this.grps = [];
        let h = bC(s, this.t * (this.sr - s) + s, 3, t, 2 * Math.PI, 0);
        for (let t = 0; t < 6; t++) {
            let t = cog(h, 0, Math.PI, Math.PI / 2, matV);
            scene.add(t), this.grps.push(t)
        }
    }
    do() {
        let t = new THREE.Quaternion,
            s = 2 * Math.min(this.u, .5),
            h = 2 * Math.max(this.u - .5, 0);
        this.u > .5 && (s = Math.abs(1 - h));
        let i = Math.PI / 3 * s,
            e = new THREE.Vector3(0, 0, -this.e),
            p = new THREE.Vector3(0, 0, 5 * this.e),
            a = new THREE.Vector3(0, 0, 4.5 * this.e);
        for (let s = 0; s < 6; s++) {
            let h = new THREE.Vector3(0, this.sp.y, .5 * -this.e);
            if (h.applyAxisAngle(xx, i * s), t.setFromAxisAngle(xx, i * s), h.add(p), p.add(e), e.applyAxisAngle(xx, i), this.u > .5) {
                rpt(h, Math.PI, a, yx);
                let s = new THREE.Quaternion;
                s.setFromAxisAngle(yx, Math.PI), t.premultiply(s);
                let i = new THREE.Quaternion;
                i.setFromAxisAngle(yx, Math.PI), t.multiply(i)
            }
            h.z -= this.ld * this.u, h.x += this.sp.x, h.z += this.sp.z, setPos(this.grps[s], h, t)
        }
    }
}
class C_I extends C {
    prep(t) {
        this.ld = 2 * this.sr - 2 * this.ps, this.w = this.ld * (this.t * (.95 - .75) + .75), this.d = this.ld - this.w, this.sp.y += .5 * this.w;
        let s = bB(2 * this.ps, this.w, this.d, t);
        this.grp = cog(s, 0, 0, 0, matV), scene.add(this.grp)
    }
    do() {
        let t = this.sp.clone(),
            s = new THREE.Quaternion,
            h = 2 * Math.min(this.u, .5),
            i = 2 * Math.max(this.u - .5, 0),
            e = new THREE.Vector3(0, 0, this.sp.z + .5 * this.d),
            p = new THREE.Vector3(0, 0, e.z + this.w),
            a = .5 * Math.PI * h,
            n = .5 * Math.PI * i;
        rpt(t, a, e, xx), rpt(t, n, p, xx), s.setFromAxisAngle(xx, a + n), t.z -= this.ld * this.u, setPos(this.grp, t, s)
    }
}
class C_J extends C {
    prep(t) {
        this.c = Math.PI * this.ps, this.ld = this.c + 2 * this.ps;
        let s = (.9 * this.t + .1) * this.ps * 2;
        s = this.t * (2 * this.sr - .1 * this.ps) + .1 * this.ps;
        let h = bC(this.ps, s, 12, t, Math.PI, 0);
        this.grp = cog(h, 0, 0, .5 * -Math.PI, matV), this.sp.y += this.ps, scene.add(this.grp)
    }
    do() {
        let t = this.sp.clone(),
            s = new THREE.Quaternion,
            h = Math.pow(2 * Math.min(this.u, .5), .5),
            i = Math.pow(2 * Math.max(this.u - .5, 0), 4),
            e = 2 * Math.min(i, .5),
            p = 2 * Math.max(i - .5, 0),
            a = Math.PI * h;
        t.z += h * this.c;
        let n = new THREE.Vector3(this.sp.x, 0, this.sp.z + this.c),
            l = .5 * Math.PI * e;
        rpt(t, l, n, xx);
        let r = new THREE.Vector3(this.sp.x, 0, this.sp.z + 2 * this.ps + this.c),
            o = .5 * Math.PI * p;
        rpt(t, o, r, xx), s.setFromAxisAngle(xx, a + l + o), t.z -= this.ld * this.u, setPos(this.grp, t, s)
    }
}

function c_create(t, s) {
    let h = CR;
    0 == CR && (5 == (h = R.rnd_i(1, 13)) && 6 == AR && (h = 2), 7 == h && 6 == AR && (h = 11)), 1 == h && cs.push(new C_A(t, s)), 2 == h && cs.push(new C_E(t, s, 0)), 3 == h && cs.push(new C_C(t, s)), 4 == h && cs.push(new C_I(t, s)), 5 == h && cs.push(new C_B(t, s, 0)), 6 == h && cs.push(new C_F(t, s, 0)), 7 == h && cs.push(new C_G(t, s)), 8 == h && cs.push(new C_D(t, s, 1)), 9 == h && cs.push(new C_F(t, s, 1)), 10 == h && cs.push(new C_H(t, s)), 11 == h && cs.push(new C_D(t, s, 0)), 12 == h && cs.push(new C_J(t, s)), 13 == h && cs.push(new C_E(t, s, 1))
}

function rpt(t, s, h, i) {
    return t.sub(h), t.applyAxisAngle(i, s), t.add(h)
}

function setPos(t, s, h) {
    t.position.set(s.x, s.y, s.z), t.rotation.setFromQuaternion(h)
}

function a_rnd(t, s, h, i, e) {
    let p = .5 * R.rnd_bet(h, i);
    for (let h = 0; h < t; h++) {
        let t = R.rnd_d() * s - .5 * s,
            h = R.rnd_d() * s - .5 * s;
        0 == ST && (p = 1.8 * Math.pow(R.rnd_d(), R.rnd_bet(1, 12)) + .2), c_create(new THREE.Vector3(t, 0, h + e), p)
    }
    let a = new THREE.Vector3(0, 0, 0);
    for (let t = 0; t < 142; t++)
        for (let t = 0; t < cs.length; t++) {
            a.set(0, 0, 0);
            let s = 0,
                h = cs[t].sp,
                i = cs[t].sr;
            for (let e = 0; e < cs.length; e++)
                if (t != e) {
                    let t = cs[e].sp,
                        p = cs[e].sr;
                    if (h.distanceTo(t) < p + i) {
                        let e = h.clone();
                        e.sub(t).normalize().multiplyScalar(p + i), s++, a.add(e)
                    }
                } s > 0 && (a.divideScalar(s).multiplyScalar(.2).add(h), cs[t].sp.set(a.x, a.y, a.z))
        }
}

function a_grid(t, s) {
    let h = Math.sqrt(t),
        i = s / (h - 1);
    s = (i = Math.max(i, .42)) * (h - 1);
    for (let t = 0; t < h; t++)
        for (let e = 0; e < h; e++) c_create(new THREE.Vector3(e * i - .5 * s, 0, t * i - .5 * s), .5 * i)
}

function a_line(t, s) {
    let h = s / (t - 1);
    for (let i = 0; i < t; i++) c_create(new THREE.Vector3(0, 0, i * h - .5 * s), .5 * h)
}

function a_tri(t, s) {
    let h = s / t,
        i = .5 * h / Math.tan(30 * Math.PI / 180);
    for (let s = 0; s < t; s++) {
        let e = new THREE.Vector3(h * (s / 2) + h, 0, -i * s + i * (t - 1) * .5 + .7);
        for (let t = 0; t < s + 1; t++) e.x -= h, c_create(new THREE.Vector3(e.x, 0, e.z), .5 * h)
    }
}

function a_lead(t) {
    let s = 1.625;
    1 == t && (s = -1.625), a_one(), cs[0].sp.z += s, a_rnd(100, 2.5, .3, .42, -.2);
    let h = s - cs[0].sp.z,
        i = 0 - cs[0].sp.x;
    for (let t = 0; t < cs.length; t++) cs[t].sp.z += h, cs[t].sp.x += i
}

function a_one() {
    c_create(new THREE.Vector3(0, 0, 0), 1)
}

let iso = [0, 0, -1, 0, .525731, -.850651, .5, .16246, -.850651, 0, .894427, -.447213, .5, .688191, -.525731, .850651, .276394, -.447213, .309017, -.425325, -.850651, .809017, -.262865, -.525731, .525731, -.723607, -.447213, -.309017, -.425325, -.850651, 0, -.850651, -.525731, -.525731, -.723607, -.447213, -.5, .16246, -.850651, -.809017, -.262865, -.525731, -.850651, .276394, -.447213, -.5, .688191, -.525731, -.309017, .951057, 0, -.809017, .587785, 0, -.525731, .723607, .447213, -1, 0, 0, -.809017, -.587785, 0, -.850651, -.276394, .447213, -.309017, -.951057, 0, .309017, -.951057, 0, 0, -.894427, .447213, .809017, -.587785, 0, 1, 0, 0, .850651, -.276394, .447213, .809017, .587785, 0, .309017, .951057, 0, .525731, .723607, .447213, 0, .850651, .525731, -.809017, .262865, .525731, -.5, -.688191, .525731, .5, -.688191, .525731, .809017, .262865, .525731, 0, 0, 1, .309017, .425325, .850651, -.309017, .425325, .850651, .5, -.16246, .850651, 0, -.525731, .850651, -.5, -.16246, .850651],
    isoin = [2, 1, 0, 4, 3, 1, 5, 4, 2, 2, 4, 1, 6, 2, 0, 7, 5, 2, 8, 7, 6, 6, 7, 2, 9, 6, 0, 10, 8, 6, 11, 10, 9, 9, 10, 6, 12, 9, 0, 13, 11, 9, 14, 13, 12, 12, 13, 9, 1, 12, 0, 15, 14, 12, 3, 15, 1, 1, 15, 12, 16, 15, 3, 17, 14, 15, 18, 17, 16, 16, 17, 15, 19, 13, 14, 20, 11, 13, 21, 20, 19, 19, 20, 13, 22, 10, 11, 23, 8, 10, 24, 23, 22, 22, 23, 10, 25, 7, 8, 26, 5, 7, 27, 26, 25, 25, 26, 7, 28, 4, 5, 29, 3, 4, 30, 29, 28, 28, 29, 4, 29, 16, 3, 31, 18, 16, 30, 31, 29, 29, 31, 16, 17, 19, 14, 32, 21, 19, 18, 32, 17, 17, 32, 19, 20, 22, 11, 33, 24, 22, 21, 33, 20, 20, 33, 22, 23, 25, 8, 34, 27, 25, 24, 34, 23, 23, 34, 25, 26, 28, 5, 35, 30, 28, 27, 35, 26, 26, 35, 28, 38, 37, 36, 31, 30, 37, 18, 31, 38, 38, 31, 37, 37, 39, 36, 35, 27, 39, 30, 35, 37, 37, 35, 39, 39, 40, 36, 34, 24, 40, 27, 34, 39, 39, 34, 40, 40, 41, 36, 33, 21, 41, 24, 33, 40, 40, 33, 41, 41, 38, 36, 32, 18, 38, 21, 32, 41, 41, 32, 38];

function bI(e, t) {
    let r = new THREE.BufferGeometry,
        o = 5040;
    1 == W && (o = 4320);
    let n = new Float32Array(o);
    const l = [],
        i = (new THREE.Color).setHex(t);
    let s = new THREE.Vector3,
        a = new THREE.Vector3,
        x = new THREE.Vector3,
        z = new THREE.Vector3,
        u = new THREE.Vector3,
        E = new THREE.Vector3;
    for (let t = 0; t < 80; t++) {
        s.set(iso[3 * isoin[3 * t + 1]], iso[3 * isoin[3 * t + 1] + 1], iso[3 * isoin[3 * t + 1] + 2]).multiplyScalar(e), a.set(iso[3 * isoin[3 * t]], iso[3 * isoin[3 * t] + 1], iso[3 * isoin[3 * t] + 2]).multiplyScalar(e), x.set(iso[3 * isoin[3 * t + 2]], iso[3 * isoin[3 * t + 2] + 1], iso[3 * isoin[3 * t + 2] + 2]).multiplyScalar(e), z = x.clone().sub(a).multiplyScalar(.5).add(a).sub(s).normalize().multiplyScalar(.004).add(s), u = x.clone().sub(s).multiplyScalar(.5).add(s).sub(a).normalize().multiplyScalar(.004).add(a), E = a.clone().sub(s).multiplyScalar(.5).add(s).sub(x).normalize().multiplyScalar(.004).add(x);
        let r = 63;
        1 == W && (r = 54), n.set([s.x, s.y, s.z, a.x, a.y, a.z, u.x, u.y, u.z, s.x, s.y, s.z, u.x, u.y, u.z, z.x, z.y, z.z, a.x, a.y, a.z, x.x, x.y, x.z, E.x, E.y, E.z, a.x, a.y, a.z, E.x, E.y, E.z, u.x, u.y, u.z, x.x, x.y, x.z, s.x, s.y, s.z, z.x, z.y, z.z, x.x, x.y, x.z, z.x, z.y, z.z, E.x, E.y, E.z], t * r), 0 == W && n.set([z.x, z.y, z.z, u.x, u.y, u.z, E.x, E.y, E.z], 63 * t + 54);
        for (let e = 0; e < r; e += 3) e > 53 && 0 == W ? l.push(i.r, i.g, i.b) : l.push(0, 0, 0)
    }
    return r.setAttribute("position", new THREE.BufferAttribute(n, 3)), r.setAttribute("color", new THREE.Float32BufferAttribute(l, 3)), r.computeVertexNormals(), r
}

function bB(e, t, r, o) {
    let n = new THREE.BufferGeometry,
        l = 468;
    1 == W && (l = 378);
    let i = new Float32Array(l);
    e *= .5, t *= .5, r *= .5;
    let s = .003;
    i.set([-e + s, t - s, -r, -e, t, -r, e, t, -r, -e + s, t - s, -r, e, t, -r, e - s, t - s, -r, e - s, t - s, -r, e, t, -r, e, -t, -r, e - s, t - s, -r, e, -t, -r, e - s, -t + s, -r, e - s, -t + s, -r, e, -t, -r, -e, -t, -r, e - s, -t + s, -r, -e, -t, -r, -e + s, -t + s, -r, -e + s, -t + s, -r, -e, -t, -r, -e, t, -r, -e + s, -t + s, -r, -e, t, -r, -e + s, t - s, -r, -e, t, r, -e + s, t - s, r, e, t, r, e, t, r, -e + s, t - s, r, e - s, t - s, r, e, t, r, e - s, t - s, r, e, -t, r, e, -t, r, e - s, t - s, r, e - s, -t + s, r, e, -t, r, e - s, -t + s, r, -e, -t, r, -e, -t, r, e - s, -t + s, r, -e + s, -t + s, r, -e, -t, r, -e + s, -t + s, r, -e, t, r, -e, t, r, -e + s, -t + s, r, -e + s, t - s, r, -e, -t, r, -e + s, -t, r - s, e, -t, r, e, -t, r, -e + s, -t, r - s, e - s, -t, r - s, e, -t, r, e - s, -t, r - s, e, -t, -r, e, -t, -r, e - s, -t, r - s, e - s, -t, -r + s, e, -t, -r, e - s, -t, -r + s, -e, -t, -r, -e, -t, -r, e - s, -t, -r + s, -e + s, -t, -r + s, -e, -t, -r, -e + s, -t, -r + s, -e, -t, r, -e, -t, r, -e + s, -t, -r + s, -e + s, -t, r - s, -e + s, t, r - s, -e, t, r, e, t, r, -e + s, t, r - s, e, t, r, e - s, t, r - s, e - s, t, r - s, e, t, r, e, t, -r, e - s, t, r - s, e, t, -r, e - s, t, -r + s, e - s, t, -r + s, e, t, -r, -e, t, -r, e - s, t, -r + s, -e, t, -r, -e + s, t, -r + s, -e + s, t, -r + s, -e, t, -r, -e, t, r, -e + s, t, -r + s, -e, t, r, -e + s, t, r - s, e, -t, r, e, -t + s, r - s, e, t, r, e, t, r, e, -t + s, r - s, e, t - s, r - s, e, t, r, e, t - s, r - s, e, t, -r, e, t, -r, e, t - s, r - s, e, t - s, -r + s, e, t, -r, e, t - s, -r + s, e, -t, -r, e, -t, -r, e, t - s, -r + s, e, -t + s, -r + s, e, -t, -r, e, -t + s, -r + s, e, -t, r, e, -t, r, e, -t + s, -r + s, e, -t + s, r - s]), 0 == W && i.set([-e, -t, -r, -e, -t, r, -e, t, r, -e, -t, -r, -e, t, r, -e, t, -r, -e + s, -t + s, -r, e - s, t - s, -r, e - s, -t + s, -r, -e + s, -t + s, -r, -e + s, t - s, -r, e - s, t - s, -r, e - s, t - s, r, -e + s, -t + s, r, e - s, -t + s, r, -e + s, t - s, r, -e + s, -t + s, r, e - s, t - s, r, -e + s, -t, -r + s, e - s, -t, r - s, -e + s, -t, r - s, -e + s, -t, -r + s, e - s, -t, -r + s, e - s, -t, r - s, e - s, t, r - s, -e + s, t, -r + s, -e + s, t, r - s, e - s, t, -r + s, -e + s, t, -r + s, e - s, t, r - s, e, -t + s, -r + s, e, t - s, r - s, e, -t + s, r - s, e, -t + s, -r + s, e, t - s, -r + s, e, t - s, r - s], 360);
    const a = [],
        x = (new THREE.Color).setHex(o);
    let z = (new THREE.Color).setHex(0);
    1 == W && z.setHex(pc[3]);
    for (let e = 0; e < 378; e += 3) a.push(z.r, z.g, z.b);
    if (0 == W)
        for (let e = 378; e < i.length; e += 3) a.push(x.r, x.g, x.b);
    return n.setAttribute("position", new THREE.BufferAttribute(i, 3)), n.setAttribute("color", new THREE.Float32BufferAttribute(a, 3)), n.computeVertexNormals(), n
}

function bC(e, t, r, o, n, l) {
    let i = 1;
    n < 1.5 * Math.PI && (i = 0);
    let s = new THREE.BufferGeometry,
        a = 144 * r;
    0 == i && (0 == W ? a += 126 : a += 108);
    let x = new Float32Array(a),
        z = [];
    t *= .5;
    let u = .003,
        E = .003,
        c = (new THREE.Color).setHex(o),
        d = n / r;
    for (let o = 0; o < r; o++) {
        let n = d * o,
            i = e * Math.cos(n),
            s = e * Math.sin(n),
            a = d * (o + 1),
            E = e * Math.cos(a),
            w = e * Math.sin(a),
            p = new THREE.Vector3(i, 0, s),
            y = new THREE.Vector3(E, 0, w),
            b = p.clone().normalize().multiplyScalar(-u).add(p),
            f = y.clone().normalize().multiplyScalar(-u).add(y),
            m = y.clone().sub(p).normalize().multiplyScalar(u),
            H = p.clone().add(m),
            R = y.clone().sub(m);
        0 == W && x.set([0, -t, 0, b.x, -t, b.z, f.x, -t, f.z, 0, t, 0, f.x, t, f.z, b.x, t, b.z, H.x, t - u, H.z, R.x, -t + u, R.z, H.x, -t + u, H.z, H.x, t - u, H.z, R.x, t - u, R.z, R.x, -t + u, R.z], 144 * o);
        let h = 144 * o + 36;
        if (1 == W && (h = 108 * o), x.set([p.x, t, p.z, f.x, t, f.z, y.x, t, y.z, b.x, t, b.z, f.x, t, f.z, p.x, t, p.z, f.x, -t, f.z, p.x, -t, p.z, y.x, -t, y.z, f.x, -t, f.z, b.x, -t, b.z, p.x, -t, p.z, y.x, t, y.z, H.x, t - u, H.z, p.x, t, p.z, H.x, t - u, H.z, y.x, t, y.z, R.x, t - u, R.z, H.x, -t + u, H.z, y.x, -t, y.z, p.x, -t, p.z, y.x, -t, y.z, H.x, -t + u, H.z, R.x, -t + u, R.z, p.x, -t, p.z, H.x, t - u, H.z, H.x, -t + u, H.z, H.x, t - u, H.z, p.x, -t, p.z, p.x, t, p.z, y.x, t, y.z, R.x, -t + u, R.z, R.x, t - u, R.z, y.x, t, y.z, y.x, -t, y.z, R.x, -t + u, R.z], h), 0 == W)
            for (let e = 0; e < 144; e += 3)
                if (0 == l) e < 36 && e > 8 ? z.push(c.r, c.g, c.b) : z.push(0, 0, 0);
                else if (e < 18) z.push(c.r, c.g, c.b);
        else if (e >= 36) z.push(0, 0, 0);
        else {
            let e = (new THREE.Color).setHex(0);
            e.lerp(c, Math.abs(1 - Math.pow(o / (r - 1), 1.25))), 3 == r && o < 2 && (e = c), z.push(e.r, e.g, e.b)
        }
    }
    if (0 == i) {
        0 == W && x.set([e - u, t - u, 0, e - u, -t + u, 0, -e + u, -t + u, 0, e - u, t - u, 0, -e + u, -t + u, 0, -e + u, t - u, 0], 144 * r);
        let o = 144 * r + 18;
        if (1 == W && (o = 108 * r), x.set([-e, t, 0, -e + u, -t + u, 0, -e, -t, 0, -e, t, 0, -e + u, t - u, 0, -e + u, -t + u, 0, e - u, -t + u, 0, e, t, 0, e, -t, 0, e - u, -t + u, 0, e - u, t - u, 0, e, t, 0, -e + u, -t + u, 0, e - u, -t + u, 0, e, -t, 0, -e + u, -t + u, 0, e, -t, 0, -e, -t, 0, e - u, t - u, 0, -e + u, t - u, 0, e, t, 0, -e + u, t - u, 0, -e, t, 0, e, t, 0, -e, t + E, 0, -e, t + E, u, e, t + E, 0, e, t + E, 0, -e, t + E, u, e, t + E, u, -e, -t - E, u, -e, -t - E, 0, e, -t - E, 0, -e, -t - E, u, e, -t - E, 0, e, -t - E, u], o), 0 == W) {
            z.push(c.r, c.g, c.b, c.r, c.g, c.b, c.r, c.g, c.b, c.r, c.g, c.b, c.r, c.g, c.b, c.r, c.g, c.b);
            for (let e = 0; e < 108; e += 3) z.push(0, 0, 0)
        }
    }
    if (1 == W) {
        let e = (new THREE.Color).setHex(pc[3]);
        for (let t = 0; t < x.length; t += 3) z.push(e.r, e.g, e.b)
    }
    return s.setAttribute("position", new THREE.BufferAttribute(x, 3)), s.setAttribute("color", new THREE.Float32BufferAttribute(z, 3)), s.computeVertexNormals(), s
}

function cog(e, t, r, o, n) {
    let l;
    return 0 == W ? (l = new THREE.Mesh(e, matV)).castShadow = !0 : l = new THREE.Mesh(e, matO), l.rotation.set(t, r, o), grp = new THREE.Group, grp.add(l), grp
}

function getDim() {
    let e = window.innerWidth,
        t = window.innerHeight;
    return t < .5625 * e && (e = 1.77778 * t), e
}
const rndr = new THREE.WebGLRenderer({
    antialias: !0
});
rndr.setPixelRatio(window.devicePixelRatio), document.body.appendChild(rndr.domElement), rndr.domElement.style.touchAction = "none";
let w = getDim();

function onWindowResize() {
    let e = getDim();
    rndr.setSize(e, .6 * e)
}
rndr.setSize(w, .5625 * w), rndr.shadowMap.enabled = !0, rndr.shadowMap.type = THREE.PCFShadowMap, window.addEventListener("resize", onWindowResize, !1);

let xx = new THREE.Vector3(1, 0, 0),
    yx = new THREE.Vector3(0, 1, 0),
    zx = new THREE.Vector3(0, 0, 1),
    AR = 0,
    ac = R.rnd_d();
AR = ac < .4 ? 0 : ac < .7 ? 1 : ac < .8 ? 2 : ac < .9 ? 3 : ac < .933 ? 4 : ac < .966 ? 5 : 6;
let SP = R.rnd_bet(.3, .8),
    ST = 0,
    sc = R.rnd_d();
ST = sc < .4 ? 0 : sc < .5 ? 1 : sc < .6 ? 2 : sc < .7 ? 3 : sc < .8 ? 4 : sc < .9 ? 5 : 6, 4 != AR && 5 != AR || (ST = 5);
let CR = 0;
R.rnd_d() > .4 && (CR = R.rnd_i(1, 13)), 5 == CR && (CR = 11), 7 == CR && (CR = 3);
let P = Math.floor(24 * Math.pow(R.rnd_d(), 2)),
    BGS = Math.floor(3 * Math.pow(R.rnd_d(), 2)),
    BGM = R.rnd_i(0, 3),
    CT = Math.floor(5 * Math.pow(R.rnd_d(), 2)),
    W = 0;
R.rnd_d() > .975 && (W = 1), 1 != CR && 5 != CR || (1 == ST && (ST = 2), 4 == ST && (ST = 3), 6 == ST && (ST = 5));
let cs = [],
    nc = 0,
    gs = R.rnd_bet(2.25, 4.5);
if (0 == AR && (nc = R.rnd_i(12, 201), a_rnd(nc, gs, 1, 2, 0)), 1 == AR) {
    let e = R.rnd_i(3, 11);
    nc = e * e, a_grid(nc, gs)
}
2 == AR && (nc = R.rnd_i(4, 9), gs = R.rnd_bet(4.5, 7), a_line(nc, gs)), 3 == AR && (nc = R.rnd_i(4, 9), gs = R.rnd_bet(4, 5), a_tri(nc, gs)), 4 == AR && (ST = Math.max(1, ST), a_lead(0)), 5 == AR && (ST = Math.max(1, ST), a_lead(1)), 6 == AR && a_one();
let hgs = .5 * gs,
    type = R.rnd_d(),
    size = R.rnd_d(),
    uo = 0,
    flip = R.rnd_d();
for (let e = 0; e < cs.length; e++) {
    let t = .1,
        n = .7;
    if (11 != CR && 8 != CR || (t = .45, n = .7), 7 == CR && (t = .05, n = .25), 12 == CR && (n = .5), 0 == ST && (size = R.rnd_d(), type = R.rnd_d()), 2 == ST) {
        uo = (cs[e].sp.z + hgs) * (1 / gs), uo = Math.min(Math.max(uo, 0), 1)
    }
    if (3 == ST) {
        let t = cs[e].sp.z;
        flip > .5 && (t *= -1), size = (t + hgs) * (1 / gs), size = Math.min(Math.max(size, 0), 1)
    }
    if (4 == ST) {
        let t = cs[e].sp.z;
        flip > .5 && (t *= -1), type = (t + hgs) * (1 / gs), type = Math.min(Math.max(type, 0), 1)
    }
    if (5 == ST) {
        let t = cs[e].sp.distanceTo(new THREE.Vector3(0, 0, 0));
        size = (t = Math.min(t, hgs)) * (1 / hgs), flip > .5 && (size = Math.abs(1 - size))
    }
    if (6 == ST) {
        let t = cs[e].sp.distanceTo(new THREE.Vector3(0, 0, 0));
        type = (t = Math.min(t, hgs)) * (1 / hgs), flip > .5 && (type = Math.abs(1 - type))
    }
    cs[e].t = type, t *= cs[e].sr, n *= cs[e].sr, cs[e].ps = size * (n - t) + t, cs[e].uo = uo
}
let pcs = [5919301, 15975262, 4894104, 13551800, 14766652, 4669754, 13484720, 1411501, 14616857, 4343643, 14866113, 10655364, 13934425, 12831412, 990747, 16108183, 16752472, 12815944, 13937995, 16507334, 3287855, 3434382, 15351864, 16769150, 14964528, 16503978, 3287855, 2049384, 5471313, 16747107, 5147547, 16503978, 3287855, 15154741, 7911373, 8502990, 4799295, 8352131, 16440752, 2790571, 7911373, 8154738, 7350573, 15332051, 9074753, 16444543, 2040096, 10706016, 3027755, 4428432, 3027755, 16110248, 16378583, 6383198, 4277314, 15837846, 14962985, 16444543, 15451482, 3422261, 4613461, 10600677, 14930633, 13652035, 15351075, 2902843, 11179929, 14933688, 16175380, 16444543, 3619654, 7824486, 6332325, 12436662, 3104357, 16444543, 9847851, 2976882, 12566703, 10402753, 16034834, 15488294, 16250082, 11842977, 10324086, 8699586, 215413, 16444543, 16375474, 13679529, 5074028, 16110248, 6174, 16110248, 16104013, 3363410, 3755629, 16315876, 13721953, 16444543, 16444543, 7111072, 8235148, 16315876, 9013641, 16444543, 13721953, 11590591, 10066329, 13750737, 4473924, 14935011, 16777215, 6710886, 5010762, 16506817, 3287855, 10928036, 15219505, 8366205, 9273983, 15522773, 4208193, 16160970, 16160970, 12629426, 6578009, 3360579, 13673228, 16444543, 12204313, 5525064, 6569032, 16769455, 13659996, 4729922, 6042433, 5450552, 10521454, 16243638, 3767653, 16752472, 14667693, 8876372],
    pc = pcs.slice(6 * P, 6 * P + 6);

function getCol(e, t) {
    if (0 == e) return pc[R.rnd_i(1, 4)];
    if (1 == e) return pc[Math.floor(4 * Math.pow(R.rnd_d(), 2) + 1)];
    if (2 == e) return pc[1];
    if (3 == e) {
        let e = R.rnd_d();
        if (e > .95) return pc[3];
        if (e > .9) return pc[4]; {
            let e = (new THREE.Color).setHex(pc[1]),
                n = (new THREE.Color).setHex(pc[2]);
            return e.lerp(n, t), e.getHex()
        }
    }
    if (4 == e) {
        let e = 1;
        return t > .25 && (e = 2), t > .5 && (e = 3), t > .75 && (e = 4), pc[e]
    }
}
const scene = new THREE.Scene,
    cam = new THREE.PerspectiveCamera(3.8, 1.77778, 20, 50);
let camy = 15.4;
6 == AR && (camy = 15.6), cam.position.set(-26.1, camy, 26.1), cam.setRotationFromEuler(new THREE.Euler(-.396, -.785, 0, "ZYX")), scene.add(cam);
var cam_grp = new THREE.Group;
scene.add(cam_grp), cam_grp.add(cam);
let but = !1,
    prevX = 0,
    nTou = !0,
    accum = 0;

function mMove(e) {
    if (!but) return;
    let t = e.pageX - prevX;
    nTou && (t = 0, nTou = !1), accum += .25 * t, prevX = e.pageX
}

function pD(e) {
    but = !0, nTou = !0
}

function pU(e) {
    but = !1, nTou = !0
}

function pL(e) {
    but = !1, nTou = !0
}
rndr.domElement.addEventListener("pointermove", mMove), rndr.domElement.addEventListener("pointerdown", pD), rndr.domElement.addEventListener("pointerup", pU), rndr.domElement.addEventListener("pointerleave", pL);
const liA = new THREE.AmbientLight(16777215, .85);
scene.add(liA);
const liD = new THREE.DirectionalLight(16777215, .3, 1e3);
liD.position.set(1, 2, 1), liD.castShadow = !0, liD.shadow.mapSize.width = 1024, liD.shadow.mapSize.height = 1024, scene.add(liD);
const matV = new THREE.MeshLambertMaterial({
    color: 16777215,
    vertexColors: !0
});
let wirec = pc[3];
2 != P && 20 != P || (wirec = pc[2]);
const matO = new THREE.MeshBasicMaterial({
    color: wirec
});
matO.side = THREE.DoubleSide;
for (let e = 0; e < cs.length; e++) {
    let t = e / cs.length;
    cs[e].prep(getCol(CT, t))
}
let bs = 10,
    bhs = .5 * bs,
    br = R.rnd_i(6, 30),
    bc = R.rnd_i(2, 30);
br % 2 == 1 && br++, 0 == BGS ? bc = br : 1 == BGS ? br == bc && (bc += 1) : bc = 1;
let brs = bs / br,
    bcs = bs / bc;
const bg = new THREE.BufferGeometry,
    bv = new Float32Array(br * bc * 18);
for (let e = 0; e < br; e++)
    for (let t = 0; t < bc; t++) bv.set([bcs * t - bhs, 0, brs * e - bhs, bcs * t - bhs, 0, brs * (e + 1) - bhs, bcs * (t + 1) - bhs, 0, brs * e - bhs, bcs * t - bhs, 0, brs * (e + 1) - bhs, bcs * (t + 1) - bhs, 0, brs * (e + 1) - bhs, bcs * (t + 1) - bhs, 0, brs * e - bhs], 18 * (e * bc + t));
const vcs = [],
    vc = new THREE.Color;
vc.setHex(pc[0]);
let push = 0;
for (let e = 0; e < bv.length / 18; e++) {
    push = 0, 1 == BGM ? R.rnd_d() < .2 && (push = .025, R.rnd_d() < .5 && (push = -.025)) : 2 == BGM && e % 2 == 0 && (push = .025);
    for (let e = 0; e < 6; e++) vcs.push(vc.r + push, vc.g + push, vc.b + push)
}
if (3 == BGM) {
    let e = [];
    for (let t = 0; t < 100; t++) e.push(R.rnd_i(0, br * bc));
    for (let t = 0; t < e.length; t++)
        for (let n = 0; n < 5; n++) {
            let s = .2 * Math.abs(n - 5),
                r = (e[t] - bc * n) % (br * bc),
                c = [vc.r + .075 * s, vc.g + .075 * s, vc.b + .075 * s];
            for (let e = 0; e < 6; e++) vcs[18 * r + 3 * e + 0] = c[0], vcs[18 * r + 3 * e + 1] = c[1], vcs[18 * r + 3 * e + 2] = c[2]
        }
}
let nor = [];
for (let e = 0; e < bv.length; e += 3) nor.push(0, 1, 0);
bg.setAttribute("position", new THREE.BufferAttribute(bv, 3)), bg.setAttribute("color", new THREE.Float32BufferAttribute(vcs, 3)), bg.setAttribute("normal", new THREE.Float32BufferAttribute(nor, 3));
const gma = new THREE.Mesh(bg, matV),
    gmb = new THREE.Mesh(bg, matV);
gma.receiveShadow = !0, gmb.receiveShadow = !0, gma.position.set(0, -.0025, 0), gmb.position.set(0, -.0025, 10);
const gg = new THREE.Group;
gg.add(gma), gg.add(gmb);
var matG = new THREE.MeshLambertMaterial({
    color: pc[5]
});
const bgLines = new THREE.BufferGeometry,
    bvLines = new Float32Array(18);
let lwid = .0025,
    lh = 0;
bvLines.set([-5, lh, lwid, 5, lh, lwid, 5, lh, -lwid, -5, lh, lwid, 5, lh, -lwid, -5, lh, -lwid]);
let norLines = [];
for (let e = 0; e < bvLines.length; e += 3) norLines.push(0, 1, 0);
bgLines.setAttribute("position", new THREE.BufferAttribute(bvLines, 3)), bgLines.setAttribute("normal", new THREE.Float32BufferAttribute(norLines, 3));
for (let e = 0; e < br; e++) {
    let t = new THREE.Mesh(bgLines, matG);
    t.position.set(0, 0, e * brs - 5), gg.add(t);
    let n = new THREE.Mesh(bgLines, matG);
    n.position.set(0, 0, 5 + e * brs), gg.add(n), t.receiveShadow = !0, n.receiveShadow = !0
}
for (let e = 0; e < bc; e++) {
    let t = new THREE.Mesh(bgLines, matG);
    t.rotation.set(0, .5 * Math.PI, 0), t.position.set(e * bcs - 5, 0, 0), gg.add(t);
    let n = new THREE.Mesh(bgLines, matG);
    n.rotation.set(0, .5 * Math.PI, 0), n.position.set(e * bcs - 5, 0, 10), gg.add(n), t.receiveShadow = !0, n.receiveShadow = !0
}
scene.add(gg);
let then = 0;

function animate(e) {
    then = e *= .001;
    for (let t = 0; t < cs.length; t++) cs[t].update(e), cs[t].do();
    let t = e * SP % 10;
    gg.position.set(0, 0, -t), rotAmount = .1 * accum, cam_grp.rotation.y -= .008 * rotAmount, accum -= rotAmount, requestAnimationFrame(animate), rndr.render(scene, cam)
}
requestAnimationFrame(animate);