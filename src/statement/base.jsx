import axios from "axios";

const treeData = [
    {
      id: 1,
      name: 'Node 1',
      children: [
        {
          id: 2,
          name: 'Node 1.1',
          children: [
            {
              id: 3,
              name: 'Node 1.1.1',
              children: [],
            },
            {
              id: 4,
              name: 'Node 1.1.2',
              children: [],
            },
          ],
        },
        {
          id: 5,
          name: 'Node 1.2',
          children: [],
        },
      ],
    },
    {
      id: 6,
      name: 'Node 2',
      children: [],
    },
];


export function ChangeData(parent, child) {
    let lastElemId;
    let childrens = [];
    const lastElem = treeData.slice(-1)[0]
    // console.log(ku);
    if (lastElem.children === []) {
        lastElemId = lastElem.id;
    }else if (lastElem.children !== []) {
        const child = lastElem.children;
        lastElemId = lastElem.id;
    }
    const newId = lastElemId +1;
    let newElem = {
        id: newId,
        name: parent,
        children: childrens,
    };
    
    if (child !== "" || child !== null ) {
        childrens.push({
            id: newId +1,
            name:child,
            children:[],
        });
    }
    treeData.push(newElem);
    console.log(treeData);
}

export default treeData;
