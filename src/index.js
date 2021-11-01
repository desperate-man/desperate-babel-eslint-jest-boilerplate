const sut = async () => {
  const result = {
    prop: 'test',
  };

  return Promise.resolve({
    ...result,
    time: Date.now().toISOString(),
  });
};

export { sut };
