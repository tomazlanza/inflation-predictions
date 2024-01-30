// const reader = new FileReader();

import bacenEnglish from "@/assets/png/BACEN_english.png"
import bacenPt from "@/assets/png/BACEN_pt-br.png"
import igpmEnglish from "@/assets/png/IGPM_english.png"
import igpmPt from "@/assets/png/IGPM_pt-br.png"
import igpmTableEng from "@/assets/png/IGPM_table_english.png"
import igpmTablePt from "@/assets/png/IGPM_table_pt-br.png"
import ipcaEnglish from "@/assets/png/IPCA_english.png"
import ipcaPt from "@/assets/png/IPCA_pt-br.png"
import ipcaTableEng from "@/assets/png/IPCA_table_english.png"
import ipcaTablePt from "@/assets/png/IPCA_table_pt-br.png"

//the paths below refer to Presentation.tsx location

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
      '1.4.2.1': bacenPt,
      '2.1.2.1': igpmPt,
      '2.1.6.1': igpmTablePt, 
      '2.2.2.1': ipcaPt, 
      '2.2.4.1': ipcaTablePt,
    },
    
    'english': {
      '1.4.2.1': bacenEnglish,
      '2.1.2.1': igpmEnglish,
      '2.1.6.1': igpmTableEng, 
      '2.2.2.1': ipcaEnglish, 
      '2.2.4.1': ipcaTableEng,
    },
}

export default images;