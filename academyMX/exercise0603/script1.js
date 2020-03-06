const run = async () => {
  let sortBy = 'birthYear';
  let sortDir = 'asc';
  await createTable(sortDir, sortBy);

  let changeOrder = async () => {
      const promise = Promise.resolve("id")
      const val = await promise
      try {
        sortBy = 'id';
    } catch (e) {
        console.log(e);
    }
 return await createTable(sortDir, bb);
};
changeOrder();
//  await createTable(sortDir, sortBy);
};
run();
