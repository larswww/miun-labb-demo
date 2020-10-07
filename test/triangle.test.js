/**
 * 
 * // https://creativecommons.org/licenses/by/4.0/
 * Linnéuniversitetet – Grundläggande programmering (1DV021)
 * https://mymoodle.lnu.se/course/view.php?id=36245 
 * https://coursepress.gitbook.io/1dv021/ovningsuppgifter/del-1/a-niva/ratvinklig-triangel
 * 
 * skapa functionen createRightTriangle(base), som endast får använda följande strängar, en gång vardera,
'#'
'\n'
för att skapa en rätvinklig triangel i form av en enda sträng som funktionen returnerar. 
Vid anrop av funktionen ska det vara möjligt att bestämma hur många tecken som ska finnas i den rätvinkliga triangelns bas.
Anropet console.log(shape.createRightTriangle(5)); ska ge triangeln

#
##
###
####
#####

Anropet console.log(shape.createRightTriangle(10)); ska ge triangeln


#    
##  
###  
####  
#####  
######  
#######  
########  
#########  
##########

 */


// https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner

 const createRightTriangle = require('../src/triangle')

 describe('createRightTriangle', () => {

    test('createRightTriangle(3); should return "#\\n##\\n###\\n"', () => {
        const result = createRightTriangle(3)
        expect(result).toBe('#\n##\n###\n')
    })

    test('createRightTriangle(5); should return "#\\n##\\n###\\n####\\n#####\\n"', () => {
        const result = createRightTriangle(5)
        expect(result).toBe('#\n##\n###\n####\n#####\n')
    })


    //todo  more tests!

 })