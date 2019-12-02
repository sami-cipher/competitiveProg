var si = process.stdin;
var so = process.stdout;
var N = Number;
var _s = "";

function ch({ v, r, c }) {
  for (var x = 0; x < r; x++) {
    try {
      if (c > 1 && r > 1) {
        for (var y = 0; y < c; y++) {
          if (v[x][y] == v[x + 1][y] || v[x][y] == v[x][y + 1]) {
            return 0;
          }
        }
      } else {
        for (var t = 0; t < (c > 1 ? c : r); t++) {
          if (
            (c === 1 && v[x][0] === v[x + 1][0]) ||
            (r === 1 && v[0][t] === v[0][t + 1])
          ) {
            return 0;
          }
        }
      }
    } catch (e) {
      return 1;
    }
  }
  return 1;
}
function cr(r) {
  return r.split(" ");
}
function p(t) {
  so.write(t + "\n");
}

function m(input) {
  var l = input.split("\n");
  var t = N(l[0]),
    rs = [],
    pos = 1;
  for (var x = 0; x < t; x++) {
    var [r, c] = l[pos].split(" ");
    var np = pos + 1 + N(r);
    rs.push({
      r: N(r),
      c: N(c),
      v: l.slice(pos + 1, np).map(cr)
    });
    pos = np;
  }
  var s = rs.map(ch);
  s.forEach(p);
}
si.on("data", function(i) {
  _s += i;
});

si.on("end", function() {
  m(_s);
});
