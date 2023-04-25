// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { email, password } = event.target.elements;
  const emailValue = email.value;
  const passwordValue = password.value;
  if (emailValue === "" || passwordValue === "") {
    alert("Please fill in all fields");
  } else {
    const formUser = {
      email: emailValue,
      password: passwordValue,
    };
    console.log(formUser);
  }

  event.target.reset();
});
