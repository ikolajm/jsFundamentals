let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

for (item in food) {
    console.log(food[item]);
}

// Add item to end of array
food.push('Pizza');

// Remove last item of array
food.pop();

// Add item to beginning of the array
food.unshift('Cheeseburgers')

// Remove item to beginning of the array
food.shift();

// Remove item from index of array (Where to remove, number of items to remove, what to replace it with)
food.splice(0, 1, 'Tacos');
