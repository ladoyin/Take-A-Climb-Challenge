function butclick(){
    var table1 = document.getElementById('table1');
    var tableBody = document.getElementById('tableBody');
    var lastName = document.getElementById('lname');
    var firstName = document.getElementById('fname');
    var middleName = document.getElementById('mname');
    var phoneNumber = document.getElementById('pnumber');
    var email = document.getElementById('email');
    var addButton = document.getElementById('add');
    
    addButton.addEventListener('click', addPerson);
    

    function addPerson(){
        node = document.createElement('tr');
       tableBody.appendChild(node);
        node.setAttribute('id', 'tableRow');

        var tableD = document.createElement('td');
        node.appendChild(tableD);
        tableD.innerHTML += lastName.value;
        tableD.setAttribute('class', 'editTable');
        tableD.setAttribute('contenteditable', 'false');

        var tableD2 = document.createElement('td');
        node.appendChild(tableD2);
        tableD2.innerHTML += firstName.value;
        tableD2.setAttribute('class', 'visible removeVisible editTable');
        tableD2.setAttribute('contenteditable', 'false');

        var tableD3 = document.createElement('td');
        node.appendChild(tableD3);
        tableD3.innerHTML += middleName.value;
        tableD3.setAttribute('class', 'visible removeVisible editTable');
        tableD3.setAttribute('contenteditable', 'false');

        var tableD4 = document.createElement('td');
        node.appendChild(tableD4);
        tableD4.innerHTML += phoneNumber.value;
        tableD4.setAttribute('class', 'visible removeVisible editTable');
        tableD4.setAttribute('contenteditable', 'false');

        var tableD5 = document.createElement('td');
        node.appendChild(tableD5);
        tableD5.innerHTML += email.value;
        tableD5.setAttribute('class', 'visible removeVisible editTable');
        tableD5.setAttribute('contenteditable', 'false');

        var tableD6 = document.createElement('td');
        node.appendChild(tableD6);
        
        var button1 = document.createElement('button');
        tableD6.appendChild(button1);
        button1.innerHTML += 'More';
        button1.onclick = function(e){
            var parent = e.target.parentNode;
            var parent2 = parent.parentNode;
            var className1 = parent2.querySelectorAll('.visible');
            var className2 = parent2.querySelectorAll('.removeVisible');
                  
            if(button1.innerHTML === 'More'){
                className1.forEach(function(className1) {
                    className1 = className1.classList.remove('visible');
                });
                button1.innerHTML = 'Less';
            }else if(button1.innerHTML === 'Less'){
                className2.forEach(function(className2) {
                    className2 = className2.classList.add('visible');
                });
                button1.innerHTML = 'More';
            }
        }       

        var button2 = document.createElement('button');
        tableD6.appendChild(button2);
        button2.innerHTML += 'Delete';
        button2.onclick = function (){
            var del = button2.parentNode.parentNode;
            del.parentNode.removeChild(del);
        }

        var button3 = document.createElement('button');
        tableD6.appendChild(button3);
        button3.innerHTML += 'Edit';
        button3.setAttribute('class', 'visible removeVisible');
        button3.onclick = function(e){
            var parent = e.target.parentNode;
            var parent2 = parent.parentNode;
            var editTD = parent2.querySelectorAll('.editTable');

            if(button3.innerHTML === 'Edit'){
                editTD.forEach(function(editTD) {
                    editTD = editTD.setAttribute('contenteditable', 'true');
                });
                button3.innerHTML = 'Save';
            }else if(button3.innerHTML === 'Save'){
                editTD.forEach(function(editTD) {
                    editTD = editTD.setAttribute('contenteditable', 'false');
                });
                button3.innerHTML = 'Edit';
            }
        }
        document.getElementById('clear').reset();
    }
}
window.addEventListener('load', butclick);