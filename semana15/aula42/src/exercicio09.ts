//DESAFIO 05 QUESTÃO 09

// DNA A T C G
// RNA U A G C

// ATTGCTGCGCATTAACGACGCGTA
// UAACGACGCGUAAUUGCUGCGCAU


function transcriptDNA(dna: string): string {
    const dnaArray = dna.toUpperCase().split('')
    let rna = ""

    for (let i=0; i<dnaArray.length; i++){
        switch (dnaArray[i]) {
            case "A":
                rna += "U"
                break;
            case "T":
                rna += "A"
                break;
            case "C":
                rna += "G"
                break;
            case "G":
                rna += "C"
                break;
            default:
                return "Invalid DNA"
        }
    }
    return rna
}

const dna = "ATTGCTGCGCATTAACGACGCGTA"
console.log("DNA", dna)
console.log("RNA", transcriptDNA(dna))