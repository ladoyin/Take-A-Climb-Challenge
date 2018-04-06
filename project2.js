function addressBook(){
    var people = [];
    var table = $('#table1');
    var tableBody = table.find('tbody');
    var lastName = $('#lname');
    var firstName = $('#fname');   
    var middleName = $('#mname');
    var phoneNumber = $('#pnumber');
    var email = $('#email');
    var deleButton = $('#delete');
    var addButton = $('#add');
    
    table.on('click','#add', addPerson);
    table.on('click', '#delete', deletePerson);
        //table.on('click', '#edit', editPerson);
    
    function actionClick(){
        tableBody.html('');
        for(var i = 0; i < people.length; i++){ 
            tableBody.append('<tr><td class="editable" contenteditable="false">'+ people[i].lastName +'</td><td class="editable visible" contenteditable="false">'+ people[i].firstName +'</td><td class="editable visible" contenteditable="false">'+ people[i].middleName +'<td class="editable visible" contenteditable="false">'+ people[i].phoneNumber +'</td><td class="editable visible" contenteditable="false">'+ people[i].email +'</td><td><button id="notVisible">More</button>  <button id="delete">delete</button>  <button class="visible" id="editButton">edit</button></td></tr>');
        }    
    }

    function addPerson(){
        var person = {
            lastName : lastName.val(),
            firstName : firstName.val(),
            middleName : middleName.val(),
            phoneNumber : phoneNumber.val(),
            email : email.val()
        }
        people.push(person);
        lastName.val('');
        firstName.val('');
        middleName.val('');
        phoneNumber.val('');
        email.val('');
        actionClick();
    }

    function deletePerson(event){
        var element = event.target.closest('tr');
        var inter = table.find('td').index(element);
        people.splice(inter, 1);
        actionClick();
    }

    table.on('click','#editButton',function(){
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
            $('.hide').show();
        }else if($this.html() === 'Less'){
            $.each(showHide, function(){
                $(this).toggle();
            });
            $this.html('More');
            $('.hide').hide();
        }
    });
}
$(addressBook);