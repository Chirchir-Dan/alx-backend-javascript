const createInt8TypedArray = (length, position, value) => {
  // Validate the position
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer
  const buffer = new ArrayBuffer(length);

  // Create an Int8Array view of the buffer
  const int8Array = new Int8Array(buffer);

  // Assign the value at the specified position
  int8Array[position] = value;

  // Return a DataView of the buffer
  return new DataView(buffer);
};

export default createInt8TypedArray;
