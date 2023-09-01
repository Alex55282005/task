import React from 'react';
import treeData from '../statement/base';
import axios from 'axios';
import { ChangeData } from '../statement/base';

function FormForData() {
    const data = treeData;
    function add() {
        const parent = document.querySelector("#nameOfElem").value;
        const child = document.querySelector("#NameOfChild").value;
        ChangeData(parent, child);
    }
   
    return(
        <div id='form'>
            <input type="text" id='nameOfElem' name='nameOfElem' placeholder='name of parent'/>
            <input type="text" id='NameOfChild' name='NameOfChild' placeholder='name of child'/>
            <div>
                <button onClick={add}>ADD</button>
            </div>
        </div>
    );
}

export default FormForData;