def i():return input().split(' ')
def R(a):return range(a)
def T(d,a,b):return d[a][b]==d[a+1][b]
def U(d,a,b):return d[a][b]==d[a][b+1]
def C(d,r,c):
    try:
        for a in R(r):
            if r>1 and c>1:
                for b in R(c): 
                    if T(d,a,b) or U(d,a,b):return 0
            else:
                for t in R(c if c>1 else r):
                    if (c==1 and T(d,a,0)) or (r==1 and U(d,0,t)):return 0
    except:return 1
for _ in R(int(input())):
    [r, c], d = map(int, i()), []
    for _ in R(r):d.append(i())
    print(C(d,r,c))
