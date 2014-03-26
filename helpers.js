/**
 * Formats integers in xxx,xxx,xxx format
 * @param {number} num - Number to be formatted
 */
Ember.Handlebars.registerBoundHelper('intFormat', function(num) {
    /*
        intFormat(10000000); // 10,000,000
        intFormat(1111129847598237); // 1,111,129,847,598,237
        intFormat(29847598237); // 29,847,598,237
        intFormat(12); // 12
        intFormat(23874); // 23,874
        intFormat(3); // 3
        intFormat(-45884); // -45,884
        intFormat("your mom"); // your mom
        intFormat(0); // 0
        intFormat({}); // {}
        intFormat(undefined); // undefined
        intFormat(null); // null
    */
    return num && num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

/**
 * Creates an anchor tag for an email
 * @param {string} value - email
 */
Ember.Handlebars.registerBoundHelper('emailLink', function(email) {
    // Make sure this is not empty before creating
    if (email !== '') {
        var link = '<a href="mailto:%@1">%@1</a>';
        return new Handlebars.SafeString(link.fmt(email));
    } else {
        return '';
    }
});