const words =  'Man. Woman. John, woman Lucy. I and Ølaf, Ølaf, man man John dog dogs; people: Ërin crowd, john Dana - Micheal, man, Dana';
const removeList = [ 'I', 'and', 'swear-word']

//Solution One:
//
function createWordCloud(str){
    // Remove any none alpha numeric characters and keep spaces
    // ^ negates
    // a-zA-Z any upper lower case letters
    //\s spaces
    // \u00C0-\u00FF any Unicode range accented latin characters
    let cleanStr = str.replace(/[^a-zA-Z0-9\s\u00C0-\u00FF]/g, "");

    // Split th string using split
    let wordArray = cleanStr.split(' ')

    // now reduce the array 
    let cloud =  wordArray.reduce((acc, word) => {
        let lcWord = word.toLowerCase()
        if(lcWord.length > 0 && !removeList.includes(word)){
            if(acc[lcWord]){
                acc[lcWord] = acc[lcWord]+ 1
            }else{
                acc[lcWord] = 1
            }
        }

        return acc
    }, {})

    return Object.keys(cloud).map(key => { 
        let titleized = `${key[0].toUpperCase()}${key.substr(1)}`
        return {[titleized]: cloud[key]}
    })
}


//Solution Two:
    let accumlator = {
        [Symbol.iterator]: function(){
            let keys = Object.keys(this);
            let index = 0;
            return {
                next: () => {

                    if(index < keys.length){
                    let key = `${[keys[index]][0][0].toUpperCase()}${[keys[index]][0].substr(1)}`
                       return {done: false, value: { [key]: this[keys[index++]]}}
                    }
                   
                    return  {done: true, value: null}
                }
            }
        }
    }
    
function createWordCloud2(str){

        let cleanStr = str.replace(/[^a-zA-Z0-9\s\u00C0-\u00FF]/g, "");

        let wordArray = cleanStr.split(' ')
    
        let cloud =  wordArray.reduce((acc, word) => {
            let lcWord = word.toLowerCase()
            if(word.length > 0 && !removeList.includes(word)){
                if(acc[lcWord]){
                    acc[lcWord] = acc[lcWord]+ 1
                }else{
                    acc[lcWord] = 1
                }
            }
    
            return acc
        }, accumlator)
    
     return [...cloud]
    }

//Run Solutions
let cloud = createWordCloud(words)

console.log('Solution One')
console.log(cloud)
console.log('################')

let cloud2 = createWordCloud2(words)
console.log('Solution Two')
console.log(cloud2)
console.log('################')