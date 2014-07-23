/*

 */

function LinkedList() {
    this.head = null;
}

LinkedList.prototype = {

    add: function(item) {
        
        // Create a node to hold the data
        var listNode = {
            next: null,
            data: item
        };

        // Declare a scope var for the current item in the loop
        var current = null;

        // Check to see first if we don't have a head item yet
        if(!this.head) {
            this.head = listNode;
            return;
        // If we have a head item, append the node to the end of the chain
        } else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = listNode;
        }

    },

    remove: function(index) {
        var current = null;
        var previous = null;
        var i = 0;

        // Make sure we are dealing with a positive value
        if(index < 0) {
            return null;
        }

        // Are we removing the first item?
        if(index === 0) {
            previous = this.head;
            this.head = this.head.next;
            return previous.data;
        }

        // Loop through the list trying to find the target index
        current = head;
        while(current.next && i < index) {
            previous = current;
            current = current.next;
            i++;
        }

        // Determine if we are above our max bounds
        if(!current.next && i < index) {
            return null;
        }

        // Link the previous and next nodes
        previous.next = current.next;

        // Cleanup and return the data at the location
        current.next = null;
        return current.data;
    },

    itemAtIndex: function(index) {
        var current = null;
        var i = 0;

        // Check to see if we are outside of the range on the lower end
        if(index < 0) {
            return null;
        }

        // Loop through the list trying to get to the target index
        current = this.head;
        while(current.next && i < index) {
            i++;
            current = current.next;
        }

        // Check to see if we are outside of the range on the upper end
        if(!current.next && i < index) {
            return null;
        }

        // Return the data at the specified location
        return current.data;
    },

    length: function() {
        var count = 0;
        var current = this.head;

        // While current exists, increment the counter
        while(current) {
            count++;
            current = current.next;
        }

        return count;
    },

    toString: function() {
        var items = [];
        var current = this.head;

        // Call toString on each item in the list and add them to temp array
        while(current) {
            items.push(current.data.toString());
            current = current.next;
        }

        // Join items in temp array with comma
        return items.join(',');
    }

};

module.exports = LinkedList;