const items = [
  {id: 1, title: "Medico Pte Ltd: Singapore"},
  {id: 2, title: "Ptd Ltd: Singapore"},
  {id: 3, title: "Prosperity: Singapore"},
  {id: 4, title: "Eden: Singapore"},
  {id: 5, title: "Point: Hong Kong"},
  {id: 6, title: "Metro Timur Indonesia: Indonesia"},
  {id: 7, title: "& Infinity: Thailand"},
  {id: 8, title: "Manufacturing: Malaysia"},
  {id: 9, title: "Mram Resources Bhd: Malaysia"},
  {id: 10, title: "Holdings Kedah: Malaysia (under investigation)"},
  {id: 11, title: "SEA Emaas Marketing: Malaysia (under investigation)"},
  {id: 12, title: "Owlvest Ptd Ltd (Singapore)"},
  {id: 13, title: "Mpd gayrimenkul yatrimilari Turkey"},
  {id: 14, title: "Eco World Tech?? (very suspicious)"},
  {id: 15, title: "Utusan Profil Sdn Bhd (Msia)"},
  {id: 16, title: "Wimax Group Company Ltd (Thailand)"},
  {id: 17, title: "Maxtrade  honkong"},
  {id: 18, title: "Auzzy International Corporation (under investigation)"},
  {id: 19, title: "Carry Chain Ltd Bhd (suspicious)"},
  {id: 20, title: "Acebright pharma dubai"},
  {id: 21, title: "MediTech Plus Enterprise- Dr Wan"},
  {id: 22, title: "Poly Security & Electronic Systems (Switzerland)"},
  {id: 23, title: "Bulk Mro industrial supply( Multiple frauds )"},
  {id: 24, title: "Landcent Europe BV (Netherlands)"},
  {id: 25, title: "FM Core Limited (Malta) ( under investigation )"},
  {id: 26, title: "Massims International Sdn Bhd"},
  {id: 27, title: "The Bigger Picture- London"},
  {id: 28, title: "Beyond clothing limited bcl ( Indonesia )"},
  {id: 29, title: "IICI Management Services"},
  {id: 30, title: "Faylez Berhad"},
  {id: 31, title: "Fast Global International Sdn Bhd"},
  {id: 32, title: "Metamorphosis Sdn Bhd (multiple   fraud) (scamster )"},
  {id: 33, title: "Asn holding uk"},
  {id: 34, title: "ICC best consulting ( malaysia)"},
  {id: 35, title: "Rintiz Group Berhad"},
  {id: 36, title: "Trinities Cagesst Cambodia Co Ltd"},
  {id: 37, title: "IHD marketplace"},
  {id: 38, title: "Abhay Jay International (India)"},
  {id: 39, title: "KH Eco Works"},
  {id: 40, title: "Biomed UK"},
  {id: 41, title: "IB Century Global (Msia"},
  {id: 42, title: "Multi Mech Doha        "},
  {id: 43, title: "Z Empire Sdn Bhd"},
  {id: 44, title: "Healthy solution usa"},
  {id: 45, title: "Agl Freight Services Sdn Bhd"},
  {id: 46, title: "Talasco Dgang"},
  {id: 47, title: "Teknik teras sdn bhd"},
  {id: 48, title: "Orbit life science"},
  {id: 49, title: "Sher medical solution"},
  {id: 50, title: "jc world wide consultants"},
  {id: 51, title: "Wooi Tong Global Sdn Bhd"},
  {id: 52, title: "Eagle success limited (Singapore )"},
  {id: 53, title: "Diamedica"},
  {id: 54, title: "Prodec Resources International Pte Ltd."},
  {id: 55, title: "Numen Healthcare Pvt Ltd"},
  {id: 56, title: "Demure International Trading"},
  {id: 57, title: "Talasco general trading"},
  {id: 58, title: "Big foot inc usa ( suspicious )"},
  {id: 59, title: "Ennat Manufacturing"},
  {id: 60, title: "R Republic sdn bhd ( under investigation )"},
  {id: 61, title: "Almanyagomenlick Germany"},
  {id: 62, title: "Aftrr health link"},
  {id: 63, title: "Karotex sdn bhd"},
  {id: 64, title: "Semboyan Group"},
  {id: 65, title: "Monat partner"},
  {id: 66, title: "E sand & gravel sdn bhd ( fake and scamster)"},
  {id: 67, title: "Ashton Grove limited"},
  {id: 69, title: "Aas  global limited"},
  {id: 70, title: "Hop naht company"},
  {id: 71, title: "Akp global trade sdn bhd"},
  {id: 72, title: "Hsbt  inyernational services jsc"},
  {id: 73, title: "Truong Tho Medical Development And Investment Joint Stock Company"},
  {id: 74, title: "Vietnam Intechco Technology Investment Joint Stock Company"},
  {id: 75, title: "Dragon Land Joint Stock Company"},
  {id: 76, title: "GSE Technology Joint Stock Company"},
  {id: 77, title: "Nazcare medical supplies ( malaysia )"},
  {id: 78, title: "Siam star group"},
  {id: 79, title: "Rungkit gloves"},
  {id: 80, title: "Sufficiency economy city"},
  {id: 81, title: "Mercator group"},
  {id: 82, title: "Osmotec (Australia)"},
  {id: 83, title: "Noble C Beauty"},
]
const sources = (state = items, action) => {
  switch (action.type) {
    case 'ADD_SOURCE':
      console.log('ADD_SOURCE');
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          score: 0
        }
      ]
    case 'DELETE_SOURCE':
      return [
        ...state.filter(source => source.id !== action.id)
      ]
    case 'RATE_SOURCE_UP':
      return state.map(source =>
        source.id === action.id ? { ...source, score: --action.score } : source
      )
    case 'RATE_SOURCE_DOWN':
    default:
      return state
  }
}

export default sources