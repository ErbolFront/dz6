function FunBooks(){
let books = [
  "Война и мир",
  "Преступление и наказание",
  "Мастер и Маргарита",
  "Анна Каренина",
  "Дети капитана Гранта",
  "Мёртвые души",
  "Обломов",
  "Воскресение",
  "Доктор Живаго",
  "Бесы",
  "Тихий Дон",
  "Идиот",
  "Руслан и Людмила",
  "Маленький принц",
  "12 стульев"
];
let a = books.filter((i) => i.includes('р'));
console.log(a);
}
FunBooks()