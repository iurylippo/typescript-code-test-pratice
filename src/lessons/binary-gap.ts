// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function getBinary (n: number) {
  return (n >>> 0).toString(2)
}

function checkBinariesHasInitAndEnd (binaries: number[]) {
  return [...binaries].sort((a, b) => a - b).join('').includes('11')
}

function searchForGap (binaries: number[], longestValue: number): number {
  let endKey = 0
  let countGap = 0
  let countOnes = 0

  for (const [key, nValue] of binaries.entries()) {
    if (countOnes !== 0 && nValue === 1) {
      endKey = key
      break
    }

    if (nValue === 0 && countOnes >= 1) {
      countGap += 1
    } else {
      countOnes += 1
    }
  }

  const restBinaries = [...binaries].splice(endKey)
  const hasRestInitAndEnd = checkBinariesHasInitAndEnd(restBinaries)

  if (longestValue > countGap) {
    countGap = longestValue
  }

  if (!hasRestInitAndEnd && longestValue > countGap) {
    return longestValue
  }

  if (hasRestInitAndEnd) {
    return searchForGap(restBinaries, countGap)
  }

  return countGap
}

export function binaryGap (n: number): number {
  const nBinary = getBinary(n)

  const binaries = nBinary.split('').map(n => parseInt(n))

  if (binaries.every((n) => n === 1) || binaries.every((n) => n === 0) || !checkBinariesHasInitAndEnd(binaries)) {
    return 0
  }

  const nLength = searchForGap(binaries, 0)

  return nLength
}
