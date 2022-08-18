const tree = [
  {
    value: 5,
    child: [
      {
        value: 10,
        child: [
          {
            value: 11,
          },
        ],
      },
      {
        value: 7,
        child: [
          {
            value: 5,
            child: [
              {
                value: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    value: 5,
    child: [
      {
        value: 10,
      },
      {
        value: 15,
      },
    ],
  },
];

// обход дерева с помощью рекурсии
const recursive = (tree) => {
  let sum = 0;
  tree.forEach((node) => {
    sum += node.value;
    if (!node.child) {
      return node.value;
    }
    sum += recursive(node.child);
  });
  return sum;
};

// обход дерева с помощью цикла
const iteration = (tree) => {
  if (!tree.length) {
    return 0;
  }
  let sum = 0;
  let stack = [];
  tree.forEach((node) => stack.push(node));
  while (stack.length) {
    const node = stack.pop();
    sum += node.value;
    if (node.child) {
      node.child.forEach((child) => stack.push(child));
    }
  }
  return sum;
};

console.log("iteration = ", iteration(tree));
console.log("recursive = ", recursive(tree));
