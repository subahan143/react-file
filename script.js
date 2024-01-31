// const fecth_data = async () => {
//   const content = document.querySelector("#content");
//   const author = document.querySelector("#author");
//   const url = "https://api.quotable.io/random";
//   const respone = await fetch(url);
//   const data = await respone.json();
//   console.log(data.author);
//   console.log(data.content);

//   content.innerText = data.content;
//   author.innerText = data.author;
// };

// fecth_data();



const content= async ()=>{
  const author = document.getElementById("author");
  const length = document.getElementById("length");
  const dateAdded = document.getElementById("dateAdded");
  const dateModified = document.getElementById("dateModified");
  const _id = document.getElementById("_id");
  const content = document.getElementById("content");



  const url = "https://api.quotable.io/random";
  const respones = await fetch(url);
  const data = await respones.json();
  console.log(data.author);

  author.innerText=data.author;
  length.innerText=data.length;
  dateAdded.innerText=data.dateAdded;
  dateModified.innerText=data.dateModified;
  _id.innerText=data._id;
  content.innerText=data.content


}
content()