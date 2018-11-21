###
IMBA PLAYGROUND
###

def realType x
    ({}):toString
        .call(x)
        .split(' ')[1]
        .slice 0, -1
