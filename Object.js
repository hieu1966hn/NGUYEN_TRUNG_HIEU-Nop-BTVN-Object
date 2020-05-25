//Bai 01:
// const product = {
//     name: `Xiaomi rice cooker`,
//     price: 1700,
//     brand:  `Xiaomi` ,
//     color: `white`
// };
// for (let x in product) {
//     console.log(x);
// }
// 1.1: x receives from product
//1,2: 
/*
here is code 
for (let x in product) {
//     console.log(product[x]);
// }
*/
//Bai 02:
// const task = {
//     subject: `Implement login feature`,
//     createdBy: `Hoang Ngoc Duc`,
//     assignTo: `Nguyen Phuong Nam`,
//     dueDate: `2019-10-08T18:00:24+0000`,
//     expectedHours: 0.5,
//     };

// console.log(task.subject);
// console.log(task.dueDate);
// console.log(task.assignTo);

//Bai 03: tooo ez
// Bai 04: 
// let Keyword = {
//     debug: `The process of figuring out why your program has a certain error and how to fix it`,
//     done: `lam xong lau roi`,
//     triplekill: `xu dep 3 thang`,
//     quadrakill: `xu dep 4 thang`,
//     pentakill: `xu dep 5 thang`,
// };
// alert(`chao ban minh la tu dien dev nhe:`);
// let key = prompt(`nhap vao tu khoa ban muon tim:`);

// if (key === `debug`) {
//     console.log(Keyword.debug);
// }
// else if (key === `done`) {
//     console.log(Keyword.done);
// }
// else if (key === `triplekill`) {
//     console.log(Keyword.triplekill);
// }
// else if (key === `quadrakill`) {
//     console.log(Keyword.quadrakill);

// }
// else if (key === `pentakill`) {
//     console.log(Keyword.pentakill);

// }
// else alert(`we could find your word: ${key}`);
//////// cach 2:
// if(Keyword.hasOwnProperty(key)){
//     alert(Keyword[key]);
// }
// else 
// alert(`Not Found`);
/*
giai thich them ve hasOwnProperty: 
hasOwnProperty (tên thuộc tính) : trả về giá trị Boolean( true/false)
*/
//////// cach 3:

// if(Keyword[key]!== ``|| ....... các trường hợp ở false){
//     alert(Keyword[key]);
// }
// else {
//     alert(`NOT FOUND`);
// }

// console.log(Keyword[key]);
/*
true    :   (ngược lại của thằng dưới ).
false   :   undefined, Null, NaN,``, 0,false
*/
//4.2 Update 1 thuộc tính trong đối tượng. Nếu tìm không có thì ta sẽ cho nó 1 thuộc tính mới.
// if(Keyword[key]){
//     Keyword[key] = prompt(`nhap vao nd ban muon update:`);

// }
// else {
//     Keyword[key] = prompt(`nhap vao nd ban muon them thuoc tinh moi nay`);

// }
// for(let o in Keyword){
//     console.log(Keyword[o]);

// }
//////////////////Bai 05:
// let sanPham = [
//     {
//         name: `Xiaomi portable charger 20000mah`,
//         brand: `Xiaomi`,
//         price: `428`,
//         color: `White`,
//         category: `Charger`,
//     },
//     //////////
//     {
//         name: `VSmart Active 1 `,
//         brand: `VSmart`,
//         price: `5487`,
//         color: `Black`,
//         category: `Phone`,
//     },
//     ////////////////
//     {
//         name: `IPhone X`,
//         brand: `Apple`,
//         price: `21490`,
//         color: `Gray`,
//         category: `Phone`,
//     },
//     ////
//     {
//         name: `Samsung Galaxy A9`,
//         brand: `Samsung`,
//         price: `8490`,
//         color: `Blue`,
//         category: `Phone`,
//     }
// ];
////////// in ra name va price 
// for(let key in sanPham){
//     console.log(sanPham[key].name);
//     console.log(sanPham[key].price);
//     console.log(`--------------------`);
// }
///bai 5.1:
// for(let product of sanPham){ //product: hiểu là con trỏ duyệt từng phần tử của mảng
//     console.log(`name: ${product.name}`);
//     console.log(`price: ${product.price}`);
//     console.log(`--------------------`);

//// bài 5.2:
/*
let dem = 1;
let ip = Number(prompt(`nhap vao vi tri ban muon in ra: `));
console.log(`san pham vi tri so ${ip} la:`);

for (let i = 0; i < sanPham.length; i++) {
    if (i === (ip - 1)) {
        for (let key of sanPham) {
            if (key.name === sanPham[ip-1].name) {
                console.log(`name: ${key.name}`);
                console.log(`brand: ${key.brand}`);
                console.log(`prive: ${key.price}`);
                console.log(`color: ${key.color}`);
                console.log(`category: ${key.category}`);

            }
        }
        break;
    }
}
}
*/

/////bai 5.3:
// let key = prompt(`nhap vao category ban muon tim kiem: `);
// for (let product of sanPham) {
//     if (key === product.category) {
//         console.log(`name: ${product.name}`);
//         console.log(`price: ${product.price}`);
//     }
// }

////////// bai 5.4: them nha cung cap cho moi san pham 
// sanPham[0].providers = (`Phukienzero Dientuccc`);
// sanPham[1].providers = (`Tgdd Ddghn VhStore`);
// sanPham[2].providers = (`Tgdd`);
// sanPham[3].providers = (`Tgdd`);

// for(let key of sanPham){
//     console.log(`name: ${key.name}`);
//     console.log(`price: ${key.price}`);
//     console.log(`providers: ${key.providers}`);


// }
//////////// bai 5.5:
/*
console.log(`liet ke cac phan tu trong mang: \n`);
for (let key of sanPham) {
    console.log(`name: ` + key.name);
    console.log(`brand: ` + key.brand);
    console.log(`price: ` + key.price);
    console.log(`color: ` + key.color);
    console.log(`category: ` + key.category);
    console.log(`providers: ` + key.providers);
    console.log(`\n`);

}
//////// tim phan tu trong mang 
console.log(`in ra vi tri mang da duoc tim thay`);
let dem = 0;
const search = prompt(`nhap vao chuoi ban muon tim: `);
/////////// ham nay chuan hon 
let key = 0;
for (let i = 0; i < sanPham.length; i++) {
    if (String(sanPham[i].providers).indexOf(search) >= 0) {
        console.log(`name: ${sanPham[i].name}`);
        console.log(`brand: ${sanPham[i].brand}`);
        console.log(`price: ${sanPham[i].price}`);
        console.log(`color: ${sanPham[i].color}`);
        console.log(`category: ${sanPham[i].category}`);
        console.log(`providers: ${sanPham[i].providers}`);
        console.log(`\n`);
    }
}
*/
/// bai 06: 
// let ip = [
//     {
//         task: 'HTML',
//         complete: false,
//     },
//     //////
//     {
//         task: 'CSS',
//         complete: false,
//     },
//     /////////
//     {
//         task: 'Basic of JavaScript',
//         complete: false,
//     },
//     ///////
//     {
//         task: 'Node Package Manger (npm)',
//         complete: false,
//     },
//     /////////
//     {
//         task: 'Git',
//         complete: false,
//     }
//     ///////
// ];
// function showArr(arr) {
//     console.log(`Hi there, this is learning tasks to front-end developer career:`);
//     for (let i = 0; i < arr.length; i++) {
//         console.log((i + 1) + `. ` + arr[i].task);
//         console.log(`   Complete: ` + arr[i].complete);
//     }
// }
// function timeTable(arr){
//     for(let i =0;i<arr.length;i++){
//         if(arr[i].complete === true ){
//             console.log(`[x]`+arr[i].task);

//         }
//         else{
//             console.log(`[ ]`+arr[i].task);

//         }
//     }
// }
// showArr(ip);

// let loop = true;
// while (loop === true) {
//     let key = prompt(`nhap vao tuy chon: (New, Delete, Update, Complete)`).toLowerCase();
//     if (key === `new`) {
//         let input = prompt(`nhap vao new task:`);
//         let newTask = {
//             task: input,
//             complete: false,
//         };
//         ip.push(newTask);
//         showArr(ip);
//     }
//     else if (key === `delete`) {
//         let positionDelete = Number(prompt(`nhap vao vi tri ban muon xoa :`));
//         if (positionDelete < 1 || positionDelete >= ip.length) {
//             alert(`khong co gia tri nao de xoa/ ban nhap sai gia tri`);
//         }
//         else {
//             ip.splice((positionDelete - 1), 1);
//         }
//         showArr(ip);
//     }
//     else if(key === `update`){
//         let updatePosition = Number(prompt(`nhap vao vi tri ban muon update no:`));
//         let updateArray = prompt(`nhap vao gia tri ban muon update no:`);
//         let newUpdateArray = {
//             task: updateArray,
//             complete: false,
//         };
//         if(updatePosition <1 || updatePosition > ip.length){
//             alert(`vi tri update khong ton tai`);
//         }
//         else{

//             ip.splice(updatePosition-1,1,newUpdateArray);
//         }
//         showArr(ip);
//     }
//     else if(key === `complete`){
//         input = Number(prompt(`Enter position:`)) ;
//         ip[input-1].complete = true;
//         showArr(ip);
//     }
//     timeTable(ip);

// loop = prompt(`ban co muon tiep tuc vong lap: loop = true/false`).toLowerCase();
// }
/// bai 16:
// const oldData = {
//     firedRice: {
//         Price: 30,
//         vnName: `Com rang dua bo`
//     },
//     noddle: {
//         price: 20,
//         vnName: `My tom chanh`
//     },
//     pho: {
//         price: 35,
//         vnName: `Pho bo tai chin`
//     },
// };
// ///cach 1:
// // let {noddle,pho,firedRice}= oldData;
// // let newdata= {firedRice,pho,noddle};
// // console.log(newdata);
// /////////cach 2:
// let newdata = oldData;
// delete newdata.noddle;
// console.log(newdata);




