import React from 'react';
import treeData from '../statement/base';
import FormForData from '../components/form';

// Основной компонент для отображения дерева
function Tree2() {
  const stack = [{ node: { id: 0, name: 'Root', children: treeData }, depth: 0 }];
  const treeNodes = [];

  while (stack.length > 0) {
    const { node, depth } = stack.pop();

    // Добавляем отступы для уровня вложенности
    const indentation = { marginLeft: `${depth * 20}px` };

    treeNodes.push(
      <div key={node.id} style={indentation}>
        {node.name}
      </div>
    );

    // Помещаем дочерние узлы в стек
    if (node.children && node.children.length > 0) {
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push({ node: node.children[i], depth: depth + 1 });
      }
    }
  }

  return (
    <div>
      <h1>Iterative Tree</h1>
      {treeNodes}
    </div>
  );
}

export default Tree2;
