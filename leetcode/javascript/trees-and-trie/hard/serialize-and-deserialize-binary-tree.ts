function recSerialize(root: TreeNode | null): string {
  // Base case: if null, return "null,"
  if (root === null) {
    return "null,";
  }

  // Recursive Step:
  // Return current value + left subtree result + right subtree result
  let res = root.val + ",";
  res += recSerialize(root.left);
  res += recSerialize(root.right);

  return res;
}

function serialize(root: TreeNode | null): string {
  return recSerialize(root);
}

function recDeserialize(strings: string[]): TreeNode | null {
  // Optimization: Use .shift() or pass an index.
  // shift() is cleaner for this logic.
  const val = strings.shift();

  if (val === "null" || val === "" || val === undefined) {
    return null;
  }

  const root = new TreeNode(Number(val));
  root.left = recDeserialize(strings);
  root.right = recDeserialize(strings);

  return root;
}

function deserialize(data: string): TreeNode | null {
  // split(",") creates an array of strings
  const strings = data.split(",");
  return recDeserialize(strings);
}
