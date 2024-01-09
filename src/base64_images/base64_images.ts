const reader = new FileReader();

//the paths below refer to Presentation.tsx location
const bacenPathPort = '../../../public/png//BACEN_pt-br.png'
const igpmPathPort = '../../../public/png//IGPM_pt-br.png'
const igpmTablePathPort = '../../../public/png//IGPM_table_pt-br.png'
const ipcaPathPort = '../../../public/png//IPCA_pt-br.png'
const ipcaTablePathPort = '../../../public/png//IPCA_table_pt-br.png'

const bacenPathEng = '../../../public/png//BACEN_english.png'
const igpmPathEng = '../../../public/png//IGPM_english.png'
const igpmTablePathEng = '../../../public/png//IGPM_table_english.png'
const ipcaPathEng = '../../../public/png//IPCA_english.png'
const ipcaTablePathEng = '../../../public/png//IPCA_table_english.png'

//reading files
// const bacen = reader.readAsDataURL(bacenPath);
// const igpm = reader(igpmPath);
// const igpmTable = reader(igpmTablePath);
// const ipca = reader(ipcaPath);
// const ipcaTable = reader(ipcaTablePath);

//object to store base64 images

interface imageLocations {
    '1.4.2.1': string;
    '2.1.2.1': string;
    '2.1.6.1': string;
    '2.2.2.1': string;
    '2.2.4.1': string;
  }
  
interface images {
    'pt-br': imageLocations;
    'english': imageLocations; // If you plan to have an 'english' property with dynamic keys
  }


// loosely typing for convenience
const images: any = {

    'pt-br': {
        '1.4.2.1': bacenPathPort,
        '2.1.2.1': igpmPathPort,
        '2.1.6.1': igpmTablePathPort, 
        '2.2.2.1': ipcaPathPort, 
        '2.2.4.1': ipcaTablePathPort,
    },
        
    'english': {
        '1.4.2.1': bacenPathEng,
        '2.1.2.1': igpmPathEng,
        '2.1.6.1': igpmTablePathEng, 
        '2.2.2.1': ipcaPathEng, 
        '2.2.4.1': ipcaTablePathEng,
    },
}

export default images;