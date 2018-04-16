function butclick(){
    var table1 = document.getElementById('table1');
    var tableBody = document.getElementById('tableBody');
    var lastName = document.getElementById('lname');
    var firstName = document.getElementById('fname');
    var middleName = document.getElementById('mname');
    var phoneNumber = document.getElementById('pnumber');
    var email = document.getElementById('email');
    table1.addEventListener('click','#add',addPerson);
    table1.addEventListener('click','#delete' ,deletePerson);

    function addPerson(){
        if(lastName.val() ==="" ){
            alert('Last Name * field is compulsory');
        }else if(firstName.val() ===""){
            alert('First Name * field is compulsory');
        }else if(middleName.val()===""){
            alert('Middle Name * is compulsory');
        }else if(phoneNumber.val() ===""){
            alert('Phone Number * field is compulsory');
        }else if(email.val() ===""){
            alert('Email * field is compulsory');
        }else{
            tableBody.append('<tr><td class="editable"  contenteditable="false">'+ lastName.value + '<td class="editable visible" contenteditable="false">'+ firstName.value  +  '</td><td class="editable visible" contenteditable="false">'+ middleName.value  + '<td class="editable visible" contenteditable="false">'+ phoneNumber.value +  '</td><td class="editable visible" contenteditable="false">' + email.value  +   '</td><td> <button id="notVisible">More</button> <button id="delete">delete </button>  <button class="visible" id="editButton">edit</button></td></tr>');
            $('#clear').trigger('reset');
        }
    }
    //targets the closest tr from the add button in the form and removes it
    function deletePerson(event){
        var element = event.target.closest('tr');
        element.remove();
    }
    
    table1.on('click','#editButton',function(){
        var $this = $(this).closest('tr').find('#editButton');
        var element = $(this).closest('tr').find('.editable');        
            if($this.html() === 'edit'){
                $.each(element, function(){
                    $(this).prop('contenteditable', 'true');
                });                
                $this.html('save');
            }else if($this.html() === 'save'){
                $.each(element, function(){
                    $(this).prop('contenteditable', 'false');
                });
                $this.html('edit');
            }       
    });  

    tableBody.on('click','#notVisible',function(){
        var $this = $(this).closest('tr').find('#notVisible');
        var showHide = $(this).closest('tr').find('.visible');
        if($this.html() === 'More'){
            $.each(showHide, function(){
                $(this).toggle();
            });
            $this.html('Less');
        }else if($this.html() === 'Less'){
            $.each(showHide, function(){
                $(this).toggle();
            });
            $this.html('More');
        }
    });
}
$(butclick);
