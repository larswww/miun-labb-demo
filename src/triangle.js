
function createRightTriangle (base) {
    const triangleUnit = '#'
    const newLine = '\n'

    let triangleRow = ''
    let triangle = ''
    for (let i = 0; i < base; i++) {
        triangleRow += triangleUnit
        triangle += triangleRow
        triangle += newLine

    }

    return triangle
}

module.exports = createRightTriangle



