var LinkedList = require('../index').LinkedList;

var createBasicList = function() {
    var list = new LinkedList();
    list.add("Sample");
    list.add("Data");
    list.add(2);
    list.add(false);
    list.add("Test");
    return list;
};

exports.linkedList = {

  isObject: function(test) {
    var list = new LinkedList();
    test.strictEqual(typeof(list), 'object', 'Constructor did not return object');
    test.done();
  },

  doesPopulateInitialObject: function(test) {
    var list = new LinkedList();
    var hello = "Hello";
    list.add(hello);
    test.strictEqual(1, list.length(), 'List did not have correct length of 1');
    test.strictEqual(hello, list.itemAtIndex(0), 'List did not return correct item for index 0');
    test.done();
  },

  doesPopulateMiddleObjects: function(test) {
    var list = createBasicList();
    test.strictEqual("Data", list.itemAtIndex(1));
    test.strictEqual(2, list.itemAtIndex(2));
    test.strictEqual(false, list.itemAtIndex(3));
    test.done();
  },

  doesReturnNullWhenFetchingItemBelowRange: function(test) {
    var list = createBasicList();
    var fetched = list.itemAtIndex(-1);
    test.strictEqual(null, fetched, 'List returned non-null value when fetching value below lower range');
    test.done();
  },

  doesReturnNullWhenFetchingItemAboveRange: function(test) {
    var list = createBasicList();
    var fetched = list.itemAtIndex(9);
    test.strictEqual(null, fetched, 'List returned non-null value when fetching value above upper range');
    test.done();
  },

  doesReturnNullWhenRemovingOutOfUpperBounds: function(test) {
    var list = createBasicList();
    var removed = list.remove(8);
    test.strictEqual(null, removed, 'List returned non-null value when removing out of upper range index');
    test.done();
  },

  doesReturnNullWhenRemovingOutOfLowerBounds: function(test) {
    var list = createBasicList();
    var removed = list.remove(-1);
    test.strictEqual(null, removed, 'List returned non-null value when removing out of lower range index');
    test.done();
  },

  doesGiveCorrectLength: function(test) {
    var list = createBasicList();
    test.strictEqual(5, list.length(), 'List did not return proper length');
    test.done();
  },

  doesProperlyRemoveInitialObject: function(test) {
    var list = new LinkedList();
    list.add("David");
    list.add("Tucker");
    var removed = list.remove(0);
    test.strictEqual("David", removed, 'List did not return proper initial item when it was removed from list');
    test.strictEqual("Tucker", list.itemAtIndex(0), 'List did not return proper initial item when first item was removed');
    test.done();
  },

  doesProperlyRemoveMiddleObject: function(test) {
    var list = createBasicList();
    var removed = list.remove(2);
    test.strictEqual(2, removed, 'List did not return proper middle item when it was removed from list');
    test.strictEqual(4, list.length(), 'List did not return proper length after middle item was removed');
    test.done();
  },

  testToString: function(test) {
    var list = new LinkedList();
    list.add("David");
    list.add("Tucker");
    list.add(2);
    list.add("Testing");
    test.strictEqual("David,Tucker,2,Testing", list.toString(), 'List did not return proper toString() value');
    test.done();
  }

};