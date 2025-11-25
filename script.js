let array = ["apple", "banana", "orange", "pinapple"];

if (confirm("Arrayingizdan bitta elementni olib tashlansinmi?")) {
    let ochir = array.pop();
    alert(`${ochir}arrayda ${array.length} ta element qoldi.`);
} else {
    alert(`Arrayda ${array.length} ta element bor.`);
}

console.log(array);
