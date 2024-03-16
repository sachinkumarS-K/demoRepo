// // const input = document.getElementById("todo-input");
// const input = document.querySelector("#todo-input");
// const todoList = document.getElementById("todo-list");

// function addTodo(event) {
//   event.preventDefault();

//   const newTodo = input.value.trim();

//   const todoItem = document.querySelector(".todoItem");
//   console.log(todoItem);
//   const li = document.createElement("li");
//   console.log(newTodo);
//   if (newTodo) {
//     li.textContent = newTodo;
//     li.className = "todoItem";

//     todoList.appendChild(li);
//     input.value = "";
//   } else {
//     console.log("Please enter a task!");
//   }
// }

// todoList.addEventListener("click", (e) => {
//   console.log(e);
//   // Check if the clicked element is a todo item
//   if (e.target.tagName === "LI") {
//     // Remove the clicked todo item from its parent (todoList)
//     todoList.removeChild(e.target);
//   }
// });

const container = document.querySelector(".container");

async function getData() {
  try {
    // let data = await fetch("https://randomuser.me/api/");
    // const res = await data.json();
    // data = await fetch("https://randomuser.me/api/");
    // const res2 = await data.json();
    // data = await fetch("https://randomuser.me/api/");
    // const res3 = await data.json();

    // res.results.push(res2.results[0]);
    // res.results.push(res3.results[0]);

    // showUser(res.results);
    let data = await fetch(
      "https://api.unsplash.com/search/photos?page=1&query=laptop &per_page=30&client_id=S_bibMyBWjF14_BEvAcY9polAOZANBqkajBbIrjceKk"
    );
    const res = await data.json();
    showUser(res.results);
  } catch (error) {
    console.log(error.message);
  }
}

function showUser(userInfo) {
  console.log(userInfo);
  userInfo.map((user) => {
    const div = document.createElement("div");
    div.className = "imgContainer";
    const img = document.createElement("img");

    img.className = "img";
    img.src = user.urls?.full;

    div.appendChild(img);

    container.appendChild(div);
  });
}

getData();
