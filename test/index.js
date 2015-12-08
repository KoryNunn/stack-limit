var stackLimit = require('../'),
    test = require('tape');

function numRecurses(stack){
    return stack.match(/([^]*at recurse)/)[1].match(/at /g).length;
}

function recurse(depth, limit){
    if(depth <= 1){
        return stackLimit(limit);
    }

    return recurse(depth-1, limit);
}

test('shallow default', function(t){
    t.plan(1);

    var stack = recurse(3);

    t.equal(numRecurses(stack), 4); // includes calling fn in stack
});

test('deep default', function(t){
    t.plan(1);

    var stack = recurse(30);

    t.equal(numRecurses(stack), 10);
});

test('deep 20', function(t){
    t.plan(1);

    var stack = recurse(30, 20);

    t.equal(numRecurses(stack), 20);
});

test('deep 50', function(t){
    t.plan(1);

    var stack = recurse(30, 50);

    t.equal(numRecurses(stack), 31); // includes calling fn in stack
});

test('super deep 500', function(t){
    t.plan(1);

    var stack = recurse(500, 500);

    t.equal(numRecurses(stack), 500);
});