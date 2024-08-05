// Bài 1. Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất

function getStringHasMaxLength(array) {
    let maxLength = 0;
    let result = [];// tạo mảng rong

    //lay ra phan tu co do dai lon nhat
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > maxLength) {
            maxLength = array[i].length;
        }
    }

    //so sanh do dai trong mang va do dai phan tu lon nhat
    for (let i = 0; i < array.length; i++) {
        if (array[i].length == maxLength) {
            result.push(array[i]);
        }
    }

    return result;
}
console.log(getStringHasMaxLength(["xinchao","chaoxin", "his", "hello", "world", "banana"]));

// Bài 2. Cho mảng users như sau:

users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]

// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
function getUser(users){
    let listUser  = [];

    for (let i = 0; i < users.length; i++) {
       if (users[i].age > 25 && users[i].isStatus == true) {
        listUser.push(users[i])
       }
        
    }
    return listUser;
}
console.log(getUser(users))
// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần
function sortUser(){
    return users.sort(function(a,b){
        return a.age - b.age;
    })
}

console.log(sortUser(users))

// Bài 3. Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

function getCountElement(array) {
    let count = {};

    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (count[item]) {
            count[item]++;
        } else {
            count[item] = 1;
        }
    }

    return count;
}
console.log(getCountElement(["one", "two", "three", "one", "one", "three","hi"]));
