
(function() {

    var contextStack = [];
    var context = null;

    var describe = function(name, cases)
    {
        var testObject = TestCase(name);

        contextStack.push(context);
        context = testObject;

        cases();

        context = contextStack.pop();

        window['TestCase_' + name] = testObject;
    };

    var it = function(name, testFunction)
    {
        context.prototype["test it " + name] = testFunction;
    };

    var when = function(dataArray, testFunction)
    {
        dataArray.map(function(data) { testFunction.apply(context, data); });
    };

    window.describe = describe;
    window.it = it;
    window.when = when;
})();
