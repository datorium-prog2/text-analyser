const prepareTextForAnalysing = (text) => {

    return text.toLowerCase()
        .replaceAll('.', '')
        .replaceAll(',', '')
        .replaceAll('!', '')
        .replaceAll('?', '')
        .replaceAll(`'`, '')
        .replaceAll(`"`, '')
        .replaceAll('\n', '')
        .replaceAll(/[0-9]/g, '')
}

const getWordUsageObject = (wordArray) => {
    // izveidojam objektu, kur uzskaitīsim cik vārdi bieži pieminēri
    const wordObject = {}

    wordArray.forEach((word) => {
        // tukšums nav ne vārds ne burts :) 
        if(word === ' ') {
            return
        }

        // ja objektā vārds vēl ne reizi nav bijis, tad piešķiram nulli, jo citādāk undefined + 1 ir NaN
        if(wordObject[word] === undefined) {
            wordObject[word] = 0
        }

        // skaitam klāt
        wordObject[word] = wordObject[word] + 1
    });

    return wordObject
}


export const getWordsUsage = (text, topToBottom, seperator) => {
    // iztīram lieko no teksta 
    const parsedText = prepareTextForAnalysing(text)
    
    // pārveidojam par masīvu
    const allWordsArray = parsedText.split(seperator)

    // dabūnam vārdu izmantošanas biežuma objektu
    const wordObject = getWordUsageObject(allWordsArray)
    
    // pārvēršam visu par masīvu lai var sasortēt
    const allWordCountArray = Object.entries(wordObject)

    // sasortējam pēc biežuma augošā secībā
    let sortedAllWordCountArray = allWordCountArray.sort((a, b) => { 
        return  b[1] - a[1]
    })

    if (!topToBottom) {
        sortedAllWordCountArray = sortedAllWordCountArray.reverse()
    }

    // šis būs gala rezultāta pasīvs
    const topFiveWords = []

    // iterējam cauri 5 reizes ja ir vismaz 5 itemi masīvā, ja nē tad ejam cauri tik reizēm cik garš ir masīvs
    const timeToIterate = sortedAllWordCountArray.length > 5 ? 5 : sortedAllWordCountArray.length

    // izlogojam top 5 vārdus
    for(let i = 0; i < timeToIterate; i++) {
        // liekam iekšā masīvā infu
        topFiveWords.push({
            word: sortedAllWordCountArray[i][0],
            count: sortedAllWordCountArray[i][1],
        })
    }

    return topFiveWords
}
