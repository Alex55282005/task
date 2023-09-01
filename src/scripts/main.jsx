import React from 'react';
import treeData from '../statement/base';
import FormForData from '../components/form';

// Создаем рекурсивный компонент для отображения узлов дерева
const TreeNode = ({ node }) => {
  return (
    <div>
      <div>{node.name}</div>
      {node.children.length > 0 && (
        <ul>
          {node.children.map((child) => (
            <li key={child.id}>
              <TreeNode node={child} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Основной компонент для отображения дерева
function Tree() {
  return (
    <div>
      <h1>Recursive Tree</h1>
      <TreeNode node={{ id: 0, name: 'Root', children: treeData }} />
    </div>
  );
}

export default Tree;
