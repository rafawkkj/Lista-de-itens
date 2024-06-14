function addtarefas(){
    const taskinput = document.getElementById('taskinput');
    const tasklist = document.getElementById('tasklist');
    const tasktext = taskinput.value.trim();

    if(tasktext !== '') {
        const listitem = document.createElement ('li');
        listitem.textContent = tasktext;

    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = 'x';
    deleteBtn.className = 'delete';

    deleteBtn.onclick = function(){
        tasklist.removeChild(listitem);
    };

    listitem.appendChild(deleteBtn);
    tasklist.appendChild(listitem);
    taskinput.value = '';
    }
}

document.getElementById('taskinput').addEventListener('keypress',function(e){
    if(e.key === 'enter') {
        addtask();
    }
});