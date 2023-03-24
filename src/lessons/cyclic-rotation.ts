// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

export function cyclicRotation (A: number[], K: number): number[] {
  const min = 0
  const max = 100

  if (A.length && (A.length < min || A.length > max || A.every(n => n === A[0]) || A.length === K || K < 1)) {
    return A
  }

  const rotations = new Array(K).fill(0)
  const arrayLastIndex = A.length - 1
  let arrayRotation: number[] = []

  for (let i = 0; i < rotations.length; i++) {
    const arrayOrigin = arrayRotation.length ? [...arrayRotation] : A
    arrayRotation = []

    for (const [index] of A.entries()) {
      if (index === 0) {
        arrayRotation[index] = arrayOrigin[arrayLastIndex]
      } else {
        arrayRotation[index] = arrayOrigin[index - 1]
      }
    }
  }

  return arrayRotation
}

export function solution (A: number[], K: number): number[] {
  const min = 0
  const max = 100
  if (A.length >= min &&
          A.length <= max &&
          !isNaN(K) &&
          K >= min && K <= max) {
    // Converting K
    K = (A.length - (K % A.length))
    // Returning the new array
    return [...A.slice(K), ...A.slice(0, K)]
  }

  // Does not meet the requirements, return back the array
  return A
}
