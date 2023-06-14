const userIdList = function(a) {
    let UID = [];
    for (let i = 0; i < a.length; i++) {
        let f=0;
        for (let j = 0; j < UID.length; j++) {
            if (a[i].userId === UID[j]) {
                f=1;
                break;
            }
        }
        if (f!==1) {
            UID.push(a[i].userId)
        }
    }
    return UID
};

const fixData = function(a) {
    const idList = userIdList(a);
    let dataList=[];
    for (let i = 0; i < idList.length; i++) {
        let dataIn = [];
        for (let j = 0; j < a.length; j++) {
            if (a[j].userId===idList[i]) {
                delete a[j].userId;
                dataIn.push(a[j]);
            }
        }
        dataList.push({
            userId: idList[i],
            datas: dataIn
        });
    }
    return dataList;
};

module.exports = { userIdList, fixData };
