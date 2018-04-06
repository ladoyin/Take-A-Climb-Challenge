function butclick(){
    var table1 = $('#table1');
    var tableBody = table1.find('#tableBody');
    var lastName = $('#lname');
    var firstName = $('#fname');
    var middleName = $('#mname');
    var phoneNumber = $('#pnumber');
    var email = $('#email');
    table1.on('click','#add',addPerson);
    table1.on('click','#delete' ,deletePerson);

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
            tableBody.append('<tr><td class="editable"  contenteditable="false">'+ lastName.val() + '<td class="editable visible" contenteditable="false">'+ firstName.val()  +  '</td><td class="editable visible" contenteditable="false">'+ middleName.val()  + '<td class="editable visible" contenteditable="false">'+ phoneNumber.val() +  '</td><td class="editable visible" contenteditable="false">' + email.val()  +   '</td><td> <button id="notVisible">More</button> <button id="delete">delete </button>  <button class="visible" id="editButton">edit</button></td></tr>');
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
