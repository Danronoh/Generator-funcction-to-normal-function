const getResults = (totalData) => {
    const combinations = totalData.reduce((a, b) => a * b.length, 1),
          arr = [];
    for (let i = 0; i < combinations; i++) arr.push(createSolution(i, totalData));
    return arr;
  }
  
  const results = getResults(obj.elementsInObj);
  for (let data of results) {
    const resolve = validateData(data, obj.elementsInObj)
    // @ts-ignore
    if (resolve) return resolve
  }