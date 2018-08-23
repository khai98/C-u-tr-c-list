// DS lop
function list() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;

};


//class  nhan vien
function employees(name, salary, email) {
    this.name = name;
    this.salary = salary;
    this.email = email;

    this.getName = function () {
        return this.name;
    };
    this.getSalary = function () {
        return this.salary;

    };
    this.getEmail = function () {
        return this.email;

    }
};



function append(element) {
    this.dataStore[this.listSize++] = element;
};



function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;

};

function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}


function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt,1);
        --this.listSize;
        return true;
    }
    return false;
}


function toString() {
    return this.dataStore;

};

// Danh Sach Doi Tuong

var nv1 = new employees("Nguyendinhkhai", "20000$", "Hoangkhai@gmail.com");
var nv2 = new employees("Nguyendinhkhai", "20000$", "Hoangkhai@gmail.com");
var nv3 = new employees("Nguyendinhkhai", "20000$", "Hoangkhai@gmail.com");
var nv4 = new employees("Nguyendinhkhai", "20000$", "Hoangkhai@gmail.com");
var nv5 = new employees("Nguyendinhkhai", "20000$", "Hoangkhai@gmail.com");
var listemployees = new list();

//nhung doi tuong
listemployees.append(nv1);
listemployees.append(nv2);
listemployees.append(nv3);
listemployees.append(nv4);
listemployees.append(nv5);

function main(){
listemployees.remove(nv5);
    for (i = 0; i <= listemployees.listSize; i++) {
        document.write((i + 1) + ". " + listemployees.toString()[i].name + "-" + listemployees.toString()[i].salary + "-" + listemployees.toString()[i].email + "<br>");
    }
};
//in doi tuong
document.write(" Danh Sach Nhan Vien : " + "</br>");

for (i = 0; i <= listemployees.listSize; i++) {
    document.write((i + 1) + ". " + listemployees.toString()[i].name + "-" + listemployees.toString()[i].salary + "-" + listemployees.toString()[i].email + "<br>");
}

