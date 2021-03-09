/* 1- write a function that returns only an array of account
numbers, and accepts the following optional parameters:
- user
- sortBy (accepts "acctNum" or "balance")
- sortDirection (accepts "asc" or "desc"; default to asc) 

2. Execute your function and output the results as an array in console log for the following scenarios:
a) filtered by Bob
b) filtered by Charlie
c) sorted by acctNum
d) filtered by Alice; sorted by balance ascending

*/
let acctData = [
    {
        "acctNum": "AAA - 1234",
        "user": "Alice"
    },
    {
        "acctNum": "AAA - 5231",
        "user": "Bob"
    },
    {
        "acctNum": "AAA - 9921",
        "user": "Alice"
    },
    {
        "acctNum": "AAA - 8191",
        "user": "Alice"
    }
];
let balance = {
    "AAA - 1234": 4593.22,
    "AAA - 9921": 0,
    "AAA - 5231": 232142.5,
    "AAA - 8191": 4344
};




function getAccNumber(user = "", sortBy = "", sortDirection = "asc") {

    let copyData = JSON.parse(JSON.stringify(acctData));
    let _tempArr = [];

    if (user) {
        _tempArr = copyData.filter((e) => {
            return user.trim().toLocaleLowerCase() === e.user.trim().toLocaleLowerCase();
        });
    } else {
        _tempArr = copyData;
    }

    if (!_tempArr.length) {
        alert("No data found for sorting!!");
        return copyData;
    }
    if (sortBy) {
        _tempArr.sort((a, b) => {
            if (sortDirection === "asc") {
                if (sortBy === "acctNum") {
                    return (a[sortBy].trim() < b[sortBy].trim()) ? -1 : 1;
                }

                return balance[a.acctNum] < balance[b.acctNum] ? -1 : 1;

            }
            if (sortDirection === "desc") {
                if (sortBy === "acctNum") {
                    return (a[sortBy].trim() > b[sortBy].trim()) ? -1 : 1;
                }
                return balance[a.acctNum] > balance[b.acctNum] ? -1 : 1;
            } else {
                return true;
            }
        });
    } else {
        return copyData;
    }

    return _tempArr;
}


console.log(getAccNumber("", "acctNum", "asc"));

