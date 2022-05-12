const getResults = (totalData) => function* getNext() { 
    const combinations = totalData.reduce((a, b) => a * b.length, 1) 
    for (let i = 0; i < combinations; i++) { 
        yield createSolution(i, totalData) 
    } 
    return null 
}

const result = getResults(obj.elementsInObj);

    for (let data of result()) {
        const resolve = validateData(data, obj.elementsInObj)
        if (resolve) {
            return resolve
        }
    }
