onload = () => {
    let tasks = new Task();

    const list = document.getElementById('todoList');
    const input = document.getElementById('todoInput');
    const button = document.getElementById('todoButton');

    // クリック時の処理
    function onClick(e) {
        if (!input.value) {
            alert('入力してください！');
        } else if (!tasks.includes(input.value)) {
            tasks.addTask(input.value);
            input.value = '';
            create();
        } else {
            alert('同じタスクが登録されています！');
        }
    }

    // タスクを削除する
    function deleteTask(e) {
        tasks.removeTask(e.target.dataset.task);
        create();
    }

    // タスク一覧を作成する
    function create() {
        list.innerText = '';

        tasks.getTask().forEach(task => {
            const div = document.createElement('div');
            const span = document.createElement('span');
            const li = document.createElement('li');
            const close = document.createElement('button');
            span.innerText = task;
            close.innerText = '×';
            close.dataset.task = task;

            div.appendChild(span);
            div.appendChild(close);
            div.classList.add("todo__list__item");
            close.addEventListener('click', deleteTask);

            li.appendChild(div);

            list.appendChild(li);
        });
    }

    button.addEventListener('click', onClick);
}